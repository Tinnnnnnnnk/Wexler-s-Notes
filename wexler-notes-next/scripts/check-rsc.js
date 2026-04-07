const fs = require('fs');
const path = require('path');

// Check the build server artifacts
const docsBuildDir = path.join(process.cwd(), '.next', 'server', 'app', 'docs');

function findDir(dir, target) {
    if (!fs.existsSync(dir)) return null;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === target) return path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const found = findDir(path.join(dir, entry.name), target);
            if (found) return found;
        }
    }
    return null;
}

// Check 46-全排列 page
const slug46Dir = findDir(docsBuildDir, '46-全排列');
console.log('46 dir:', slug46Dir);
if (slug46Dir && fs.existsSync(slug46Dir)) {
    const files = fs.readdirSync(slug46Dir);
    console.log('Files:', files);
    const rscFile = files.find(f => f.endsWith('.rsc'));
    if (rscFile) {
        const rsc = fs.readFileSync(path.join(slug46Dir, rscFile), 'utf-8');
        console.log('RSC length:', rsc.length);
        console.log('RSC first 300 chars:', JSON.stringify(rsc.slice(0, 300)));
        console.log('Has 404 error:', rsc.includes('NEXT_HTTP_ERROR_FALLBACK'));
    }
}

// Check BFS (working page)
const bfsDir = findDir(docsBuildDir, 'BFS');
console.log('BFS dir:', bfsDir);
if (bfsDir && fs.existsSync(bfsDir)) {
    const files = fs.readdirSync(bfsDir);
    const rscFile = files.find(f => f.endsWith('.rsc'));
    if (rscFile) {
        const rsc = fs.readFileSync(path.join(bfsDir, rscFile), 'utf-8');
        console.log('BFS RSC length:', rsc.length);
        console.log('BFS first 300 chars:', JSON.stringify(rsc.slice(0, 300)));
        console.log('BFS has 404:', rsc.includes('NEXT_HTTP_ERROR_FALLBACK'));
    }
}

// Check Dynamic Programming
const dpDir = findDir(docsBuildDir, 'Dynamic Programming');
console.log('DP dir:', dpDir);
if (dpDir && fs.existsSync(dpDir)) {
    const files = fs.readdirSync(dpDir);
    const rscFile = files.find(f => f.endsWith('.rsc'));
    if (rscFile) {
        const rsc = fs.readFileSync(path.join(dpDir, rscFile), 'utf-8');
        console.log('DP RSC length:', rsc.length);
        console.log('DP first 300 chars:', JSON.stringify(rsc.slice(0, 300)));
        console.log('DP has 404:', rsc.includes('NEXT_HTTP_ERROR_FALLBACK'));
    }
}

// Now let's check the actual MDX source for 46-全排列 - is there any special character in the YAML?
console.log('\n=== CHECKING YAML CONTENT ===');
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

const testFiles = ['46-全排列.mdx', 'Dynamic Programming.mdx', 'BFS.mdx'];
testFiles.forEach(name => {
    const fp = findFile(CONTENT_DIR, name);
    if (!fp) { console.log(name + ': NOT FOUND'); return; }
    const raw = fs.readFileSync(fp, 'utf-8');
    const match = raw.match(fmRegex);
    console.log('\n' + name + ':');
    console.log('  Match found:', !!match);
    if (match) {
        console.log('  YAML content:', JSON.stringify(match[1]));
        console.log('  body starts:', JSON.stringify(raw.slice(match.index + match[0].length, match.index + match[0].length + 80)));
    }
});