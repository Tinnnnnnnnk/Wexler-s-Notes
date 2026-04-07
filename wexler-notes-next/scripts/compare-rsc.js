const fs = require('fs');
const path = require('path');

const docsBuildDir = path.join(process.cwd(), '.next', 'server', 'app', 'docs');

// Read BFS.rsc
const bfsRsc = path.join(docsBuildDir, 'Code', 'DS', 'BFS.rsc');
const bfs = fs.readFileSync(bfsRsc, 'utf-8');
console.log('BFS RSC length:', bfs.length);

// Read DP.rsc
const dpRsc = path.join(docsBuildDir, 'Code', 'DS', 'Dynamic Programming.rsc');
const dp = fs.readFileSync(dpRsc, 'utf-8');
console.log('DP RSC length:', dp.length);

// Find the 404 error in DP
const errorIndex = dp.indexOf('NEXT_HTTP_ERROR_FALLBACK');
console.log('DP 404 error at index:', errorIndex);
if (errorIndex > 0) {
    console.log('DP error context (50 chars before):', JSON.stringify(dp.slice(Math.max(0, errorIndex - 50), errorIndex)));
    console.log('DP error context (100 chars after):', JSON.stringify(dp.slice(errorIndex, errorIndex + 100)));
}

// Find the 404 error in BFS (should not exist)
const bfsErrorIndex = bfs.indexOf('NEXT_HTTP_ERROR_FALLBACK');
console.log('BFS 404 error at index:', bfsErrorIndex);
if (bfsErrorIndex > 0) {
    console.log('BFS error context:', JSON.stringify(bfs.slice(Math.max(0, bfsErrorIndex - 50), bfsErrorIndex + 100)));
}

// Check the meta files for these pages
const bfsMeta = path.join(docsBuildDir, 'Code', 'DS', 'BFS.meta');
const dpMeta = path.join(docsBuildDir, 'Code', 'DS', 'Dynamic Programming.meta');
console.log('\nBFS meta:', fs.readFileSync(bfsMeta, 'utf-8'));
console.log('DP meta:', fs.readFileSync(dpMeta, 'utf-8'));

// Check the HTML files
const bfsHtml = path.join(docsBuildDir, 'Code', 'DS', 'BFS.html');
const dpHtml = path.join(docsBuildDir, 'Code', 'DS', 'Dynamic Programming.html');
const bfsHtmlContent = fs.readFileSync(bfsHtml, 'utf-8');
const dpHtmlContent = fs.readFileSync(dpHtml, 'utf-8');
console.log('\nBFS HTML has __next_error__:', bfsHtmlContent.includes('__next_error__'));
console.log('DP HTML has __next_error__:', dpHtmlContent.includes('__next_error__'));

// Let's look at the actual RSC content difference
// Print the last 500 chars of each
console.log('\nBFS RSC last 500:', JSON.stringify(bfs.slice(-500)));
console.log('\nDP RSC last 500:', JSON.stringify(dp.slice(-500)));