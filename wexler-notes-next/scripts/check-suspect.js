const fs = require('fs');
const path = require('path');
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

// Check the files that have NO frontmatter (first line is not ---)
// And files that have frontmatter but still fail
const suspectFiles = [
    '细节部分.mdx',      // NO frontmatter
    '同类总结.mdx',     // NO frontmatter (starts with Chinese text)
    '15-三数之和.mdx',  // HAS frontmatter, should work
    '通用模板.mdx',     // HAS frontmatter, should work
    'day1 配置环境.mdx', // empty file (size 0)
    'v1.0 day2.mdx',    // no frontmatter
];

console.log('=== Checking suspect files ===\n');

suspectFiles.forEach(name => {
    const fp = findFile(CONTENT_DIR, name);
    if (!fp) { console.log(name + ': NOT FOUND'); return; }
    const raw = fs.readFileSync(fp, 'utf-8');
    const lines = raw.split('\n');

    console.log('=== ' + name + ' ===');
    console.log('Size:', fs.statSync(fp).size, 'bytes');
    console.log('First 5 lines:');
    for (let i = 0; i < Math.min(5, lines.length); i++) {
        console.log(`  [${i}]: ${JSON.stringify(lines[i])}`);
    }
    console.log('Total lines:', lines.length);

    const match = raw.match(fmRegex);
    console.log('Frontmatter match:', match ? 'YES' : 'NO');
    if (match) {
        console.log('  YAML captured:', JSON.stringify(match[1].slice(0, 80)));
        const body = raw.slice(match.index + match[0].length);
        console.log('  Body preview:', JSON.stringify(body.slice(0, 100)));
    } else {
        console.log('  Full body preview:', JSON.stringify(raw.slice(0, 100)));
    }
    console.log('');
});

// Also check: do ALL failing files have Chinese in first line?
const outDir = path.join(process.cwd(), 'out', 'docs');
function scanDir(dir, baseSlug = '') {
    const results = [];
    if (!fs.existsSync(dir)) return results;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
        if (entry.isDirectory()) {
            results.push(...scanDir(path.join(dir, entry.name), baseSlug ? baseSlug + '/' + entry.name : entry.name));
        } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) {
            const slug = baseSlug ? baseSlug + '/' + entry.name.replace(/\.mdx?$/, '') : entry.name.replace(/\.mdx?$/, '');
            const fp = path.join(dir, entry.name);
            const outPath = path.join(outDir, slug + '.html');
            const is404 = fs.existsSync(outPath) && fs.readFileSync(outPath, 'utf-8').includes('__next_error__');

            const raw = fs.readFileSync(fp, 'utf-8');
            const lines = raw.split('\n');
            const firstLine = lines[0];

            results.push({
                slug,
                is404,
                firstLine: firstLine.slice(0, 50),
                hasChineseInFirstLine: /[^\x00-\x7F]/.test(firstLine),
                hasFrontmatter: firstLine.trim() === '---',
                fileSize: fs.statSync(fp).size,
                isEmpty: fs.statSync(fp).size === 0,
            });
        }
    }
    return results;
}

const allResults = scanDir(CONTENT_DIR);
const failing = allResults.filter(r => r.is404);
const working = allResults.filter(r => !r.is404);

console.log('\n=== FAILING pages analysis ===');
failing.forEach(r => {
    console.log(`${r.slug}: firstLine=${JSON.stringify(r.firstLine)} hasChinese=${r.hasChineseInFirstLine} hasFm=${r.hasFrontmatter} empty=${r.isEmpty}`);
});

console.log('\n=== WORKING pages analysis ===');
working.forEach(r => {
    console.log(`${r.slug}: firstLine=${JSON.stringify(r.firstLine)} hasChinese=${r.hasChineseInFirstLine} hasFm=${r.hasFrontmatter} empty=${r.isEmpty}`);
});

console.log('\n=== Pattern summary ===');
const failingNoFm = failing.filter(r => !r.hasFrontmatter);
const failingWithFm = failing.filter(r => r.hasFrontmatter);
const failingEmpty = failing.filter(r => r.isEmpty);
console.log('Failing with NO frontmatter:', failingNoFm.length);
console.log('Failing WITH frontmatter:', failingWithFm.length);
console.log('Failing EMPTY files:', failingEmpty.length);
console.log('Failing with Chinese first line:', failing.filter(r => r.hasChineseInFirstLine).length);