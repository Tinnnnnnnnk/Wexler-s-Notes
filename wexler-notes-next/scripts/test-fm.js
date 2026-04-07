// Test script to debug frontmatter parsing
const fs = require('fs');
const path = require('path');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

// Find all .mdx files
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

// Test the problematic file
const targetName = '46-全排列.mdx';
const filePath = findFile(CONTENT_DIR, targetName);
console.log('File path:', filePath);

if (filePath) {
    const raw = fs.readFileSync(filePath, 'utf-8');
    console.log('File size:', raw.length);
    console.log('First 100 chars:', JSON.stringify(raw.slice(0, 100)));
    console.log('Has BOM:', raw.charCodeAt(0) === 0xFEFF);

    // Test regex
    const fmRegex = /^[ \t]*(?:\ufeff)?[\r\n]+?---([\s\S]*?)^---[ \t]*(?:[\r\n]|$)/m;
    const match = raw.match(fmRegex);
    console.log('Frontmatter match:', match ? 'YES' : 'NO');
    if (match) {
        console.log('Body starts at:', match.index + match[0].length);
        console.log('Body preview:', JSON.stringify(raw.slice(match.index + match[0].length, match.index + match[0].length + 80)));
    }
}