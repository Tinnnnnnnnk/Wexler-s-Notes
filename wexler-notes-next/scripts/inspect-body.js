const fs = require('fs');
const path = require('path');

// Read the MDX source for the Dynamic Programming page
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

const fp = findFile(CONTENT_DIR, 'Dynamic Programming.mdx');
console.log('File path:', fp);
const raw = fs.readFileSync(fp, 'utf-8');
const match = raw.match(fmRegex);

console.log('Match found:', !!match);
if (match) {
    const body = raw.slice(match.index + match[0].length);
    console.log('Body length:', body.length);
    console.log('Body first 200 chars:', JSON.stringify(body.slice(0, 200)));
    console.log('Body last 200 chars:', JSON.stringify(body.slice(-200)));

    // Check for any unusual characters in body
    const unusualChars = body.match(/[^\x00-\x7F\u0080-\uFFFF\t\n\r ]/g);
    if (unusualChars) {
        console.log('Unusual chars:', [...new Set(unusualChars)].slice(0, 20));
    }

    // Check for lines starting with special characters
    const lines = body.split('\n');
    console.log('Total lines:', lines.length);

    // Check the MDX for any suspicious content
    // Lines that might cause issues
    lines.forEach((l, i) => {
        if (l.includes('\x00') || l.includes('\uffff')) {
            console.log(`Line ${i} has NULL/ZWNBSP:`, JSON.stringify(l.slice(0, 50)));
        }
    });

    // Write body to a temp file to inspect
    fs.writeFileSync(path.join(process.cwd(), 'test-body.mdx'), body);
    console.log('\nBody written to test-body.mdx');
}

// Now let's also check the BFS page body
const bfsFp = findFile(CONTENT_DIR, 'BFS.mdx');
const bfsRaw = fs.readFileSync(bfsFp, 'utf-8');
const bfsMatch = bfsRaw.match(fmRegex);
if (bfsMatch) {
    const bfsBody = bfsRaw.slice(bfsMatch.index + bfsMatch[0].length);
    console.log('\nBFS body length:', bfsBody.length);
    console.log('BFS body first 200 chars:', JSON.stringify(bfsBody.slice(0, 200)));
    fs.writeFileSync(path.join(process.cwd(), 'test-body-bfs.mdx'), bfsBody);
}