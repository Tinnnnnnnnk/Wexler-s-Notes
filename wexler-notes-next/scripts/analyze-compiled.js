const fs = require('fs');
const path = require('path');

// Read the compiled page.js
const pageJs = fs.readFileSync(path.join(process.cwd(), '.next', 'server', 'app', 'docs', '[...slug]', 'page.js'), 'utf-8');

// Find parseFrontmatter function
const fmMatch = pageJs.match(/function\s*(?:u|f)\s*\(a\)\s*\{[^}]*match[^}]*\}/);
console.log('Searching for frontmatter parsing...');

// Let's look for the function that contains the fmRegex
const fmRegexMatch = pageJs.match(/\\^---\\x5cr\?\x5cn\(\[\\s\\S\]\*?\)\\x5cr\?\x5cn---\[\\r\\n\\s\]\*\\/);
console.log('fmRegex found:', fmRegexMatch ? 'YES' : 'NO');
if (fmRegexMatch) {
    const idx = fmRegexMatch.index;
    console.log('Context:', JSON.stringify(pageJs.slice(Math.max(0, idx - 200), idx + 500)));
}

// Also look for what happens when match is NOT found
const noMatchIdx = pageJs.indexOf('!b');
console.log('!b (no match) at:', noMatchIdx);
if (noMatchIdx >= 0) {
    console.log('Context:', JSON.stringify(pageJs.slice(Math.max(0, noMatchIdx - 100), noMatchIdx + 500)));
}

// Look for notFound
const notFoundIdx = pageJs.indexOf('notFound');
console.log('notFound at:', notFoundIdx);
if (notFoundIdx >= 0) {
    console.log('notFound context:', JSON.stringify(pageJs.slice(Math.max(0, notFoundIdx - 200), notFoundIdx + 300)));
}

// Print a section of page.js where the DocsPage function is
// The DocsPage function should be one of the larger functions in the file
console.log('\nPage.js length:', pageJs.length);

// Let's extract key sections
// Find serializeMDX call pattern
const serMd = pageJs.match(/\w+\(\w+\.join\([^)]+\)\)/g);
console.log('path.join pattern found:', serMd ? serMd.slice(0, 5) : 'none');

// Look for catch blocks
const catchIdx = pageJs.indexOf('catch');
console.log('\ncatch at index:', catchIdx);
if (catchIdx >= 0) {
    console.log('First catch context:', JSON.stringify(pageJs.slice(Math.max(0, catchIdx - 100), catchIdx + 200)));
}

// Look for error handling in the compiled page
const errIdx = pageJs.indexOf('console.error');
console.log('\nconsole.error at index:', errIdx);
if (errIdx >= 0) {
    console.log('console.error context:', JSON.stringify(pageJs.slice(Math.max(0, errIdx - 200), errIdx + 300)));
}