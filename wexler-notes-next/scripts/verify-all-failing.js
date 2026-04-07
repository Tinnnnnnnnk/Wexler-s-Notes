// Verify preprocessor for ALL failing files
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
      fixed = fixed.replace(/<([a-z][a-z0-9]*)\s+class=/gi, '<$1 className=');
      fixed = fixed.replace(/^(\s*)<>\s*$/, '$1<span></span>');
      fixed = fixed.replace(/<>/g, '&lt;&gt;');
      result.push(fixed);
    } else {
      result.push(line);
    }
  }
  return result.join('\n');
}

// Test all the files that were failing in the build
const failingFiles = [
  'Code/Hot100/Backtracking/131-分割回文串.mdx',
  'Code/Hot100/Backtracking/46-全排列.mdx',
  'Code/Hot100/Binary-Tree/114-二叉树展开为链表.mdx',
  'Code/Hot100/Binary-Tree/236-二叉树的最近公共祖先.mdx',
  'Code/Hot100/Binary-Tree/437-路径总和III.mdx',
  'Code/Hot100/Graph-Theory/207-课程表.mdx',
  'Code/Hot100/Prefix-Sum/560-和为K的子数组.mdx',
  'Code/Hot100/Sliding-Window/3-无重复字符的最长子串.mdx',
  'Code/Hot100/Sliding-Window/438-找到字符串中所有字母异位词.mdx',
  'Code/Hot100/Sliding-Window/同类总结.mdx',
  'Code/Hot100/Stack/394-字符串解码.mdx',
  'Code/Hot100/Stack/739-每日温度.mdx',
  'Code/Hot100/Two-Pointers/11-盛最多水的容器.mdx',
  'Code/Hot100/Two-Pointers/15-三数之和.mdx',
  'Code/通用模板.mdx',
  'Code/通用模板new.mdx',
];

console.log('Testing preprocessor on ALL previously-failing files:\n');

let totalIssues = 0;
failingFiles.forEach(f => {
  const fp = path.join(CONTENT_DIR, f);
  if (!fs.existsSync(fp)) {
    console.log('NOT FOUND:', f);
    return;
  }
  
  const raw = fs.readFileSync(fp, 'utf-8');
  const processed = preprocessSource(raw);
  
  // Check for class= that wasn't fixed
  const classMatches = [...processed.matchAll(/<[a-z][a-z0-9]*\s+class=/gi)];
  const hasClassEq = processed.includes('class=');
  const hasClassName = processed.includes('className');
  
  if (classMatches.length > 0 || hasClassEq) {
    console.log('FAIL:', f, '- still has class=:', classMatches.length, 'hasClassEq:', hasClassEq);
    console.log('  Samples:', classMatches.map(m => m[0]).slice(0, 3));
    totalIssues++;
  } else {
    console.log('OK:', f, '- class= fixed, className present:', hasClassName);
  }
});

console.log('\nTotal issues:', totalIssues);

// Also check the 3 working files
console.log('\n\nVerifying WORKING files still OK:');
const workingFiles = ['Code/DS/BFS.mdx', 'Code/DS/Deque.mdx', 'Code/DS/DFS.mdx'];
workingFiles.forEach(f => {
  const fp = path.join(CONTENT_DIR, f);
  const raw = fs.readFileSync(fp, 'utf-8');
  const processed = preprocessSource(raw);
  const classMatches = [...processed.matchAll(/<[a-z][a-z0-9]*\s+class=/gi)];
  console.log(f, '- class= remaining:', classMatches.length, '(should be 0)');
});

// Now look at the actual failing file content (560-和为K的子数组)
console.log('\n\nDetailed check: 560-和为K的子数组.mdx');
const fp560 = path.join(CONTENT_DIR, 'Code/Hot100/Prefix-Sum/560-和为K的子数组.mdx');
if (fs.existsSync(fp560)) {
  const raw = fs.readFileSync(fp560, 'utf-8');
  const lines = raw.split('\n');
  
  // Find all lines with class= that are NOT in code blocks
  console.log('Lines with class=:');
  lines.forEach((line, i) => {
    // Skip code blocks
    const codeOpen = (line.match(/```/g) || []).length;
    if (codeOpen % 2 === 1) return;
    
    if (line.includes('class=')) {
      console.log(`  [${i+1}]: ${line.trim().slice(0, 120)}`);
    }
  });
  
  console.log('\nAfter preprocessing:');
  const processed = preprocessSource(raw);
  const pLines = processed.split('\n');
  pLines.forEach((line, i) => {
    if (line.includes('class=')) {
      console.log(`  [${i+1}]: ${line.trim().slice(0, 120)}`);
    }
  });
}