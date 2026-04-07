const fs = require('fs');
const path = require('path');

// Scan all MDX files and find problematic patterns
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');
const problems = [];

function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
        if (entry.isDirectory()) {
            scanDir(path.join(dir, entry.name));
        } else if (entry.name.endsWith('.mdx')) {
            const content = fs.readFileSync(path.join(dir, entry.name), 'utf-8');
            const relPath = path.relative(CONTENT_DIR, path.join(dir, entry.name));

            // Pattern 1: <tag class="..."> → class is JSX keyword, must be className
            const classMatches = [...content.matchAll(/<(\w+)\s+class="/g)];
            if (classMatches.length > 0) {
                problems.push({
                    type: 'class attribute',
                    file: relPath,
                    count: classMatches.length,
                    samples: classMatches.slice(0, 3).map(m => m[0])
                });
            }

            // Pattern 2: < > empty tags (angle brackets in text treated as JSX)
            const emptyTagMatches = [...content.matchAll(/<>\s*/g)];
            if (emptyTagMatches.length > 0) {
                problems.push({
                    type: 'empty <> tags',
                    file: relPath,
                    count: emptyTagMatches.length,
                    samples: emptyTagMatches.slice(0, 3).map(m => m[0])
                });
            }

            // Pattern 3: HTML entities that might cause issues
            const entityMatches = [...content.matchAll(/&[a-z]+;/gi)];
            if (entityMatches.length > 0) {
                // Don't report - just count
            }
        }
    }
}

scanDir(CONTENT_DIR);

console.log('=== PROBLEM ANALYSIS ===\n');
console.log('Total files with problems:', problems.length);

const byType = {};
problems.forEach(p => {
    if (!byType[p.type]) byType[p.type] = { count: 0, files: [], samples: [] };
    byType[p.type].count += p.count;
    byType[p.type].files.push(p.file);
    byType[p.type].samples.push(...p.samples.slice(0, 2));
});

for (const [type, data] of Object.entries(byType)) {
    console.log('\n--- ' + type + ' ---');
    console.log('Total occurrences:', data.count);
    console.log('Files affected:', data.files.length);
    console.log('Samples:');
    data.samples.forEach(s => console.log('  ' + s));
}

// Also check specific patterns in files that were FAILING
console.log('\n\n=== CHECKING SPECIFIC FAILING FILES ===\n');

const failingFiles = [
    'Code/Hot100/Sliding-Window/3-无重复字符的最长子串.mdx',
    'Code/Hot100/Backtracking/46-全排列.mdx',
    'Code/DS/BFS.mdx',
];

failingFiles.forEach(f => {
    const fp = path.join(CONTENT_DIR, f);
    if (!fs.existsSync(fp)) {
        console.log(f + ': NOT FOUND');
        return;
    }
    const content = fs.readFileSync(fp, 'utf-8');
    const lines = content.split('\n');

    console.log('=== ' + f + ' ===');

    // Find lines with class= that are NOT in code blocks
    lines.forEach((line, i) => {
        // Skip if inside code block (heuristic: count backticks)
        const codeOpen = (line.match(/```/g) || []).length;
        if (codeOpen % 2 === 1) return; // inside code block

        if (line.includes('class=')) {
            console.log(`  Line ${i+1}: ${line.trim().slice(0, 120)}`);
        }
    });
    console.log('');
});