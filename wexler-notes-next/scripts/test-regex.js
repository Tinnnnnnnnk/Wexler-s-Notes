const fs = require('fs');
const path = require('path');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

// Test both old (broken) and new (fixed) regex
const OLD_REGEX = /^[ \t]*(?:\ufeff)?[\r\n]+?---([\s\S]*?)^---[ \t]*(?:[\r\n]|$)/m;
const NEW_REGEX = /^---\r?\n([\s\S]*?)\r?\n---[\r\n\s]*/;

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
    { slug: 'Code/DS/BFS', name: 'BFS.mdx', expect: 'WORK' },
    { slug: 'Code/DS/Dynamic Programming', name: 'Dynamic Programming.mdx', expect: 'FAIL' },
    { slug: 'Code/DS/分治算法', name: '分治算法.mdx', expect: 'FAIL' },
    { slug: 'Code/Hot100/Backtracking/46-全排列', name: '46-全排列.mdx', expect: 'FAIL' },
];

files.forEach(({ slug, name, expect }) => {
    const fp = findFile(CONTENT_DIR, name);
    if (!fp) { console.log(slug + ': FILE NOT FOUND'); return; }
    const raw = fs.readFileSync(fp, 'utf-8');
    const lines = raw.split('\n');

    const oldMatch = raw.match(OLD_REGEX);
    const newMatch = raw.match(NEW_REGEX);

    console.log(`=== ${slug} (expect: ${expect}) ===`);
    console.log('Lines 0-15:');
    for (let i = 0; i < Math.min(15, lines.length); i++) {
        console.log(`  ${i}: ${JSON.stringify(lines[i])}`);
    }
    console.log('OLD regex match:', oldMatch ? `YES, captured ${oldMatch[1].split('\n').length} lines, body preview: ${JSON.stringify(oldMatch[1].split('\n')[0])}` : 'NO');
    console.log('NEW regex match:', newMatch ? `YES, captured ${newMatch[1].split('\n').length} lines, body starts with: ${JSON.stringify(newMatch.input.slice(newMatch.index + newMatch[0].length, newMatch.index + newMatch[0].length + 50))}` : 'NO');
    console.log('');
});