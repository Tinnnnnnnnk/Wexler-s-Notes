// Test script: simulate what Next.js does during static build
const path = require('path');
const fs = require('fs');
const { compileMDX } = require('next-mdx-remote/rsc');
const remarkGfm = require('remark-gfm');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---[\r\n\s]*/;

function findFile(dir, name) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === name) return path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const found = findFile(path.join(dir, entry.name), name);
            if (found) return found;
        }
    }
    return null;
}

function parseFrontmatter(raw) {
    const match = raw.match(fmRegex);
    if (!match) return { data: {}, body: raw };
    const yamlContent = match[1];
    const data = {};
    for (const line of yamlContent.split('\n')) {
        const kv = line.match(/^([\w-]+):\s*(.*)$/);
        if (kv) {
            const key = kv[1].trim();
            let value = kv[2].trim();
            if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            } else if (typeof value === 'string' && value.startsWith("'") && value.endsWith("'")) {
                value = value.slice(1, -1);
            }
            data[key] = value;
        }
    }
    const bodyStart = match.index + match[0].length;
    return { data, body: raw.slice(bodyStart) };
}

// Test with a problematic file
const testFiles = [
    '46-全排列.mdx',
    'Dynamic Programming.mdx',
    'BFS.mdx',
];

async function test() {
    for (const name of testFiles) {
        const fp = findFile(CONTENT_DIR, name);
        if (!fp) { console.log(name + ': NOT FOUND'); continue; }
        const raw = fs.readFileSync(fp, 'utf-8');
        const { data, body } = parseFrontmatter(raw);
        console.log('=== ' + name + ' ===');
        console.log('data:', JSON.stringify(data));
        console.log('body preview:', body.slice(0, 80));

        try {
            const result = await compileMDX({
                source: body,
                options: {
                    mdxOptions: { remarkPlugins: [remarkGfm] },
                },
                components: {},
            });
            console.log('compileMDX: SUCCESS');
        } catch (err) {
            console.log('compileMDX ERROR:', err.message.slice(0, 200));
        }
        console.log('');
    }
}

test().catch(console.error);