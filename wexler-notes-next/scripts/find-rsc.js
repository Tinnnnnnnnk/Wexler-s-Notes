const fs = require('fs');
const path = require('path');

// Find build artifacts
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

// Check 46-全排列
const slug46Dir = findDir(docsBuildDir, '46-全排列');
console.log('46 dir:', slug46Dir);
if (slug46Dir && fs.existsSync(slug46Dir)) {
    const files = fs.readdirSync(slug46Dir);
    console.log('Files:', files);
    const rscFile = files.find(f => f.endsWith('.rsc'));
    if (rscFile) {
        const rsc = fs.readFileSync(path.join(slug46Dir, rscFile), 'utf-8');
        console.log('RSC length:', rsc.length);
        console.log('Has 404:', rsc.includes('NEXT_HTTP_ERROR_FALLBACK'));
        console.log('First 300:', JSON.stringify(rsc.slice(0, 300)));
    }
}

// Check BFS
const bfsDir = findDir(docsBuildDir, 'BFS');
console.log('BFS dir:', bfsDir);
if (bfsDir && fs.existsSync(bfsDir)) {
    const files = fs.readdirSync(bfsDir);
    const rscFile = files.find(f => f.endsWith('.rsc'));
    if (rscFile) {
        const rsc = fs.readFileSync(path.join(bfsDir, rscFile), 'utf-8');
        console.log('BFS RSC length:', rsc.length);
        console.log('BFS has 404:', rsc.includes('NEXT_HTTP_ERROR_FALLBACK'));
        console.log('BFS first 300:', JSON.stringify(rsc.slice(0, 300)));
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
        console.log('DP has 404:', rsc.includes('NEXT_HTTP_ERROR_FALLBACK'));
        console.log('DP first 300:', JSON.stringify(rsc.slice(0, 300)));
    }
}