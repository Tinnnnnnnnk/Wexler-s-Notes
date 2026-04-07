const fs = require('fs');
const path = require('path');

function findInDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fp = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            findInDir(fp);
        } else if (entry.name.endsWith('.js') && !entry.name.includes('.nft.json')) {
            const content = fs.readFileSync(fp, 'utf-8');
            if (content.includes('preprocessSource')) {
                console.log('Found preprocessSource in:', path.relative(process.cwd(), fp));
                const idx = content.indexOf('preprocessSource');
                console.log('Context:', content.slice(Math.max(0, idx - 50), idx + 300));
            }
        }
    }
}

// Check all .next directories
const dirs = [
    path.join(process.cwd(), '.next', 'static', 'chunks'),
    path.join(process.cwd(), '.next', 'server', 'chunks'),
];

dirs.forEach(d => {
    if (fs.existsSync(d)) {
        console.log('\nSearching in:', d);
        findInDir(d);
    }
});

// Also check the server/app chunks
const appDocsDir = path.join(process.cwd(), '.next', 'server', 'app', 'docs');
if (fs.existsSync(appDocsDir)) {
    const files = fs.readdirSync(appDocsDir);
    files.forEach(f => {
        const fp = path.join(appDocsDir, f);
        if (f.endsWith('.js') && !f.includes('.nft')) {
            const content = fs.readFileSync(fp, 'utf-8');
            if (content.includes('preprocessSource')) {
                console.log('\nFound in page.js:', f);
                const idx = content.indexOf('preprocessSource');
                console.log('Context:', content.slice(Math.max(0, idx - 50), idx + 300));
            }
        }
    });
}