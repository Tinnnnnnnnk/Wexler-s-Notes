const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
        if (entry.isDirectory()) {
            scanDir(path.join(dir, entry.name));
        } else if (entry.name.endsWith('.mdx')) {
            const fp = path.join(dir, entry.name);
            const relPath = path.relative(CONTENT_DIR, fp);
            const content = fs.readFileSync(fp, 'utf-8');
            const lines = content.split('\n');

            let inCodeBlock = false;
            let codeBlockMarker = '';

            lines.forEach((line, i) => {
                const codeMatch = line.match(/^(\s*)(```+|~~~)\s*/);
                if (codeMatch) {
                    if (!inCodeBlock) {
                        inCodeBlock = true;
                        codeBlockMarker = codeMatch[2];
                    } else if (line.trim().startsWith(codeBlockMarker)) {
                        inCodeBlock = false;
                        codeBlockMarker = '';
                    }
                    return;
                }

                if (!inCodeBlock && /<>\s*/.test(line)) {
                    console.log(`${relPath}:${i+1}: ${JSON.stringify(line.trim())}`);
                }
            });
        }
    }
}

scanDir(CONTENT_DIR);