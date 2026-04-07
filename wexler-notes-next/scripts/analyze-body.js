const fs = require('fs');
const path = require('path');

// Try to compile the DP body using MDX directly in Next.js
// We need to use the same method as the Next.js build
// Let's create a minimal test that uses the compileMDX from next-mdx-remote/rsc

// First, let's check what the DP page body looks like more carefully
const body = fs.readFileSync(path.join(process.cwd(), 'test-body.mdx'), 'utf-8');
console.log('Body length:', body.length);
console.log('Body first 300 chars:', JSON.stringify(body.slice(0, 300)));

// Check for any problematic patterns:
// 1. Escaped curly braces
console.log('Has escaped brace:', body.includes('\\{') || body.includes('\\}'));
// 2. HTML-like content
console.log('Has <span:', body.includes('<span'));
console.log('Has </span:', body.includes('</span'));
// 3. Math expressions
console.log('Has math-inline:', body.includes('class="math-inline"'));
// 4. Table structure
console.log('Has table:', body.includes('| '));
// 5. Code blocks
console.log('Has code block:', body.includes('```'));

// The body contains <span class="math-inline"> which might be problematic in MDX
// Let's check the actual content around <span
const spanIdx = body.indexOf('<span');
if (spanIdx >= 0) {
    console.log('\n<span context:', JSON.stringify(body.slice(Math.max(0, spanIdx - 30), spanIdx + 100)));
}

// Now check BFS body
const bfsBody = fs.readFileSync(path.join(process.cwd(), 'test-body-bfs.mdx'), 'utf-8');
console.log('\nBFS body length:', bfsBody.length);
console.log('BFS has span:', bfsBody.includes('<span'));
console.log('BFS has math-inline:', bfsBody.includes('class="math-inline"'));
const bfsSpanIdx = bfsBody.indexOf('<span');
if (bfsSpanIdx >= 0) {
    console.log('BFS <span context:', JSON.stringify(bfsBody.slice(Math.max(0, bfsSpanIdx - 30), bfsSpanIdx + 100)));
}

// Compare the problematic part
// Check if DP has any other unusual patterns
console.log('\nDP line analysis:');
const dpLines = body.split('\n');
dpLines.forEach((line, i) => {
    // Check for lines that might cause issues
    if (line.includes('\x00') || line.includes('\uffff')) {
        console.log(`Line ${i} has unusual char:`, JSON.stringify(line.slice(0, 50)));
    }
    if (line.includes('$') && (line.includes('{') || line.includes('}'))) {
        console.log(`Line ${i} has $ with braces:`, JSON.stringify(line.slice(0, 100)));
    }
});