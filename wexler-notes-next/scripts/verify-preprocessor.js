// Verify preprocessor output for a known failing file
const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

function preprocessSource(source) {
  let inCodeBlock = false;
  let codeBlockMarker = '';

  const lines = source.split('\n');
  const result = [];

  for (const line of lines) {
    const codeMatch = line.match(/^(\s*)(```+|~~~)\s*/);
    if (codeMatch) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockMarker = codeMatch[2];
      } else if (line.trim().startsWith(codeBlockMarker)) {
        inCodeBlock = false;
        codeBlockMarker = '';
      }
      result.push(line);
      continue;
    }

    if (!inCodeBlock) {
      let fixed = line;
      // Fix 1: class= → className=
      const hasClass = /<[a-z][a-z0-9]*\s+class=/gi.test(fixed);
      fixed = fixed.replace(/<([a-z][a-z0-9]*)\s+class=/gi, '<$1 className=');
      // Fix 2: empty <> fragment
      fixed = fixed.replace(/^(\s*)<>\s*$/, '$1<span></span>');
      // Fix 3: <> in text → escape
      fixed = fixed.replace(/<>/g, '&lt;&gt;');

      if (hasClass) {
        console.log('class= fixed:', line.trim().slice(0, 80));
      }

      result.push(fixed);
    } else {
      result.push(line);
    }
  }

  return result.join('\n');
}

// Test with the specific failing file
const fp = path.join(CONTENT_DIR, 'Code', 'Hot100', 'Sliding-Window', '3-无重复字符的最长子串.mdx');
const content = fs.readFileSync(fp, 'utf-8');
console.log('Original first 500 chars:');
console.log(content.slice(0, 500));

console.log('\n\nPreprocessed first 500 chars:');
const processed = preprocessSource(content);
console.log(processed.slice(0, 500));

console.log('\n\nHas class= after preprocessing:', processed.includes('class='));
console.log('Has className after preprocessing:', processed.includes('className='));

// Check if any class= is still present
const classMatches = [...processed.matchAll(/class=/g)];
console.log('Remaining class= matches:', classMatches.length);