const fs = require('fs');
const path = require('path');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

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

const files = [
    '46-全排列.mdx',
    'BFS.mdx',
    'Dynamic Programming.mdx',
];

files.forEach(name => {
    const fp = findFile(CONTENT_DIR, name);
    if (!fp) { console.log(name + ': NOT FOUND'); return; }
    const raw = fs.readFileSync(fp, 'utf-8');
    const lines = raw.split('\n');

    // New regex
    const fmRegex = /^---\r?\n([\s\S]*?)\r?\n---[\r\n\s]*/;
    const match = raw.match(fmRegex);

    console.log('=== ' + name + ' ===');
    console.log('Match:', match ? 'YES' : 'NO');
    if (match) {
        console.log('match.index:', match.index);
        console.log('match[0].length:', match[0].length);
        console.log('match[0] ends with:', JSON.stringify(match[0].slice(-20)));
        console.log('yaml captured:', JSON.stringify(match[1].slice(0, 80)));
        console.log('body starts at char:', match.index + match[0].length);
        console.log('body first 60 chars:', JSON.stringify(raw.slice(match.index + match[0].length, match.index + match[0].length + 60)));
    }
    console.log('');
});