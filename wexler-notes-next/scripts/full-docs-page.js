const fs = require('fs');
const path = require('path');

// Read the compiled page.js
const pageJs = fs.readFileSync(path.join(process.cwd(), '.next', 'server', 'app', 'docs', '[...slug]', 'page.js'), 'utf-8');

// Find the DocsPage function x
const xIdx = pageJs.indexOf('async function x({params:a})');
console.log('DocsPage at:', xIdx);
console.log('\nFull DocsPage function:');
// Extract the function body - find matching closing brace
let braceCount = 0;
let start = xIdx;
let inFunc = false;
for (let i = xIdx; i < pageJs.length; i++) {
    const ch = pageJs[i];
    if (ch === '{') { braceCount++; inFunc = true; }
    if (ch === '}') {
        braceCount--;
        if (inFunc && braceCount === 0) {
            console.log(pageJs.slice(xIdx, i + 1));
            break;
        }
    }
}