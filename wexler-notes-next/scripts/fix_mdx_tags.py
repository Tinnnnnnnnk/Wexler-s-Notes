"""
Fix MDX files by replacing problematic HTML tags with backtick-wrapped text.
"""
import re
import os

def fix_mdx_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Strategy: strip HTML spans and divs, preserving content
    # <span class="math-inline">...</span> -> `...`
    content = re.sub(r'<span class="math-inline">([^<]*)</span>', r'`\1`', content)
    
    # Handle nested or multiline spans - strip the tags, keep content
    # More complex patterns where content might have multiple segments
    content = re.sub(r'<span class="math-inline">', '`', content)
    content = re.sub(r'</span>', '`', content)
    
    # <div class="math-block">...</div> -> just the LaTeX content as plain text
    content = re.sub(
        r'<div class="math-block">\s*([\s\S]*?)\s*</div>',
        r'\n```latex\n\1\n```\n',
        content
    )
    
    # <div class="tech-impact-cover"> ... </div> -> remove entirely (custom HTML)
    content = re.sub(
        r'<div class="tech-impact-cover">[\s\S]*?</div>\s*',
        '',
        content
    )
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return True
    return False

# List of files to fix
files = [
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Prefix-Sum\560-和为K的子数组.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Sliding-Window\3-无重复字符的最长子串.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Sliding-Window\438-找到字符串中所有字母异位词.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Stack\394-字符串解码.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Stack\739-每日温度.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Two-Pointers\11-盛最多水的容器.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Two-Pointers\15-三数之和.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\DS\Dynamic Programming.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\面试笔记\JavaSe\JAVASE.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\面试笔记\MyWeb\构建过程3.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\面试笔记\MyWeb\构建过程end.mdx",
]

for f in files:
    if os.path.exists(f):
        changed = fix_mdx_file(f)
        print(f"{'FIXED: ' if changed else 'SKIPPED (no change): '}{os.path.basename(f)}")
    else:
        print(f"NOT FOUND: {f}")
