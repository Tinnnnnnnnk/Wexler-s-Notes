const fs = require('fs');
const path = require('path');
const os = require('os');

// Create a debug file that gets written to during the build
const debugDir = path.join(process.cwd(), '.debug');
try { fs.mkdirSync(debugDir, { recursive: true }); } catch {}

function debugLog(msg) {
    fs.appendFileSync(path.join(debugDir, 'build-debug.txt'), os.EOL + new Date().toISOString() + ' ' + msg);
}

// Read the MDX body for the DP page
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

// Test all failing files
const failingFiles = [
    'Dynamic Programming.mdx',
    '46-全排列.mdx',
    '分治算法.mdx',
    'BFS.mdx', // working
    'Deque.mdx', // working
];

failingFiles.forEach(name => {
    const fp = findFile(CONTENT_DIR, name);
    if (!fp) { debugLog(name + ': NOT FOUND'); return; }
    const raw = fs.readFileSync(fp, 'utf-8');
    const match = raw.match(fmRegex);

    if (match) {
        const body = raw.slice(match.index + match[0].length);
        const result = {
            name,
            bodyLen: body.length,
            first100: body.slice(0, 100),
            hasSpan: body.includes('<span'),
            hasDollarBrace: body.includes('${'),
            hasEscapedBrace: body.includes('\\{') || body.includes('\\}'),
            hasTripleBacktick: body.includes('```'),
            hasPipe: body.includes('| '),
            firstSpan: body.includes('<span') ? body.slice(body.indexOf('<span'), body.indexOf('<span') + 80) : null,
        };
        debugLog(JSON.stringify(result));
    } else {
        debugLog(name + ': NO FRONTMATTER MATCH');
    }
});

console.log('Debug done. Check .debug/build-debug.txt');
console.log(fs.readFileSync(path.join(debugDir, 'build-debug.txt'), 'utf-8'));