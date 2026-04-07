const fs = require('fs');
const path = require('path');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

// Compare first 3 lines of a working vs failing file to find structural differences
const workingSlug = 'Code/DS/BFS';
const failingSlug = 'Code/DS/Dynamic Programming';

function readFile(slug) {
    const fp = path.join(CONTENT_DIR, slug + '.mdx');
    return fs.readFileSync(fp, 'utf-8');
}

const working = readFile(workingSlug);
const failing = readFile(failingSlug);

console.log('=== WORKING FILE (BFS) - first 5 lines ===');
working.split('\n').slice(0, 5).forEach((l, i) => console.log(i + ': ' + JSON.stringify(l)));

console.log('');
console.log('=== FAILING FILE (Dynamic Programming) - first 5 lines ===');
failing.split('\n').slice(0, 5).forEach((l, i) => console.log(i + ': ' + JSON.stringify(l)));

console.log('');
console.log('=== FAILING FILE (46-全排列) - first 5 lines ===');
const failing2 = readFile('Code/Hot100/Backtracking/46-全排列');
failing2.split('\n').slice(0, 5).forEach((l, i) => console.log(i + ': ' + JSON.stringify(l)));

// Check if failing files have frontmatter at all vs working files
console.log('');
console.log('=== FRONTMATTER CHECK ===');
const fmRegex = /^[ \t]*(?:\ufeff)?[\r\n]+?---([\s\S]*?)^---[ \t]*(?:[\r\n]|$)/m;

const wm = working.match(fmRegex);
const fm = failing.match(fmRegex);
console.log('BFS has fm match:', !!wm);
console.log('DP has fm match:', !!fm);
if (wm) {
    console.log('BFS fm body start:', wm.index + wm[0].length, 'yaml:', JSON.stringify(wm[1].slice(0, 80)));
}
if (fm) {
    console.log('DP fm body start:', fm.index + fm[0].length, 'yaml:', JSON.stringify(fm[1].slice(0, 80)));
}

// Check if failing files have emoji in frontmatter values (like status: ✅)
console.log('');
console.log('=== CHECKING FOR SPECIAL CHARS IN FM ===');
const failingSlug2 = 'Code/Hot100/Backtracking/46-全排列';
const failing2Raw = readFile(failingSlug2);
const fm2 = failing2Raw.match(fmRegex);
if (fm2) {
    console.log('DP frontmatter yaml:');
    fm2[1].split('\n').forEach(l => console.log('  ', l));
}