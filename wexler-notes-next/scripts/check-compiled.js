const fs = require('fs');
const path = require('path');

// Read the compiled page.tsx
const compiledPage = path.join(process.cwd(), '.next', 'server', 'app', 'docs', '[...slug]', 'page.js');
console.log('Compiled page exists:', fs.existsSync(compiledPage));

const content = fs.readFileSync(compiledPage, 'utf-8');
console.log('Compiled page length:', content.length);

// Look for parseFrontmatter function
const fmIndex = content.indexOf('parseFrontmatter');
if (fmIndex >= 0) {
    console.log('parseFrontmatter at index:', fmIndex);
    console.log('Context around it:', JSON.stringify(content.slice(Math.max(0, fmIndex - 20), fmIndex + 500)));
} else {
    console.log('parseFrontmatter NOT FOUND in compiled page!');
    // Search for other patterns
    console.log('Has fmRegex:', content.includes('fmRegex'));
    console.log('Has /---:', content.includes('/---'));
    console.log('Has gray-matter:', content.includes('gray-matter'));
    console.log('First 500 chars:', JSON.stringify(content.slice(0, 500)));
}

// Also search for serializeMDX usage
const serializeIndex = content.indexOf('serializeMDX');
console.log('\nserializeMDX at index:', serializeIndex);
if (serializeIndex >= 0) {
    console.log('Context:', JSON.stringify(content.slice(serializeIndex - 100, serializeIndex + 300)));
}

// Search for path.join(...slug
const slugIndex = content.indexOf('slug]');
console.log('\nslug] at index:', slugIndex);
if (slugIndex >= 0) {
    console.log('Context:', JSON.stringify(content.slice(Math.max(0, slugIndex - 200), slugIndex + 200)));
}