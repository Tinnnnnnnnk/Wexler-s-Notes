const fs = require('fs');
const path = require('path');
const outDir = path.join(process.cwd(), 'out', 'docs');
const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

const fmRegex = /^[ \t]*(?:\ufeff)?[\r\n]+?---([\s\S]*?)^---[ \t]*(?:[\r\n]|$)/m;

function checkFile(dir, fileName) {
    const fp = path.join(dir, fileName);
    if (!fs.existsSync(fp)) return null;
    const raw = fs.readFileSync(fp, 'utf-8');
    const match = raw.match(fmRegex);
    return {
        file: fileName,
        hasFm: !!match,
        fmContent: match ? match[1].slice(0, 100) : null,
        bodyStart: match ? match.index + match[0].length : 0,
        rawLen: raw.length
    };
}

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
            const info = checkFile(dir, entry.name);
            info.slug = slug;

            // Check if this page is 404
            const outPath = path.join(outDir, slug + '.html');
            const outDirPath = path.join(outDir, slug, 'index.html');
            const is404 = fs.existsSync(outPath) && fs.readFileSync(outPath, 'utf-8').includes('__next_error__');

            info.is404 = is404;
            results.push(info);
        }
    }
    return results;
}

const results = scanDir(CONTENT_DIR);
console.log('Total MDX files:', results.length);
console.log('404 count:', results.filter(r => r.is404).length);
console.log('');

// Show sample of working and failing
const working = results.filter(r => !r.is404);
const failing = results.filter(r => r.is404);

console.log('=== WORKING PAGES (sample) ===');
working.slice(0, 3).forEach(r => {
    console.log(r.slug + ' - hasFm:' + r.hasFm + ' - fm:' + (r.fmContent ? r.fmContent.slice(0, 60) : 'null'));
});

console.log('');
console.log('=== FAILING PAGES (sample) ===');
failing.slice(0, 3).forEach(r => {
    console.log(r.slug + ' - hasFm:' + r.hasFm + ' - fm:' + (r.fmContent ? r.fmContent.slice(0, 60) : 'null'));
});

// Look for patterns
const workingFmTypes = working.map(r => {
    // Check if tags or date are present in frontmatter
    return r.fmContent || 'NO FM';
});
const failingFmTypes = failing.map(r => {
    return r.fmContent || 'NO FM';
});

console.log('');
console.log('=== ALL FAILING SLUGS ===');
failing.forEach(r => console.log(r.slug));