const fs = require('fs');
const path = require('path');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

function analyzeFile(slug) {
    const fp = path.join(CONTENT_DIR, slug + '.mdx');
    if (!fs.existsSync(fp)) return null;
    const raw = fs.readFileSync(fp, 'utf-8');
    const lines = raw.split('\n');

    // Check first few lines
    let fmStart = -1;
    for (let i = 0; i < Math.min(3, lines.length); i++) {
        if (lines[i].trim() === '---') { fmStart = i; break; }
    }

    // Check if there's a closing --- within first 30 lines
    let fmEnd = -1;
    for (let i = fmStart + 1; i < Math.min(30, lines.length); i++) {
        if (lines[i].trim() === '---') { fmEnd = i; break; }
    }

    // Also search for closing --- anywhere (could be in file body at odd location)
    let fmEndAny = -1;
    for (let i = fmStart + 1; i < Math.min(100, lines.length); i++) {
        if (lines[i].trim() === '---') { fmEndAny = i; break; }
    }

    return {
        slug,
        lines: lines.length,
        fmStart,
        fmEnd,
        fmEndAny,
        firstLine: lines[0],
        secondLine: lines[1],
        thirdLine: lines[2],
        fourthLine: lines[3],
        fifthLine: lines[4],
        sixthLine: lines[5],
        seventhLine: lines[6],
        eighthLine: lines[7],
        ninthLine: lines[8],
        tenthLine: lines[9],
        eleventhLine: lines[10],
        twelfthLine: lines[11],
    };
}

// Check working files
const workingSlugs = [
    'Code/DS/BFS',
    'Code/DS/Deque',
    'Code/DS/DFS',
];

// Check failing files
const failingSlugs = [
    'Code/DS/Dynamic Programming',
    'Code/DS/分治算法',
    'Code/DS/树形DP',
    'Code/Hot100/Backtracking/46-全排列',
];

console.log('=== WORKING FILES ===');
workingSlugs.forEach(s => {
    const info = analyzeFile(s);
    console.log(s + ':');
    console.log('  fmStart:', info.fmStart, 'fmEnd:', info.fmEnd, 'fmEndAny:', info.fmEndAny);
    console.log('  1:', JSON.stringify(info.firstLine));
    console.log('  2:', JSON.stringify(info.secondLine));
    console.log('  3:', JSON.stringify(info.thirdLine));
    console.log('  4:', JSON.stringify(info.fourthLine));
    console.log('  5:', JSON.stringify(info.fifthLine));
    console.log('  6:', JSON.stringify(info.sixthLine));
    console.log('  7:', JSON.stringify(info.seventhLine));
    console.log('  8:', JSON.stringify(info.eighthLine));
    console.log('  9:', JSON.stringify(info.ninthLine));
    console.log('  10:', JSON.stringify(info.tenthLine));
    console.log('  11:', JSON.stringify(info.eleventhLine));
    console.log('  12:', JSON.stringify(info.twelfthLine));
    console.log('');
});

console.log('=== FAILING FILES ===');
failingSlugs.forEach(s => {
    const info = analyzeFile(s);
    console.log(s + ':');
    console.log('  fmStart:', info.fmStart, 'fmEnd:', info.fmEnd, 'fmEndAny:', info.fmEndAny);
    console.log('  1:', JSON.stringify(info.firstLine));
    console.log('  2:', JSON.stringify(info.secondLine));
    console.log('  3:', JSON.stringify(info.thirdLine));
    console.log('  4:', JSON.stringify(info.fourthLine));
    console.log('  5:', JSON.stringify(info.fifthLine));
    console.log('  6:', JSON.stringify(info.sixthLine));
    console.log('  7:', JSON.stringify(info.seventhLine));
    console.log('  8:', JSON.stringify(info.eighthLine));
    console.log('  9:', JSON.stringify(info.ninthLine));
    console.log('  10:', JSON.stringify(info.tenthLine));
    console.log('  11:', JSON.stringify(info.eleventhLine));
    console.log('  12:', JSON.stringify(info.twelfthLine));
    console.log('');
});