# -*- coding: utf-8 -*-
import re, os, sys

base = r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content"

files = [
    os.path.join(base, r"Code\Hot100\Prefix-Sum\560-和为K的子数组.mdx"),
    os.path.join(base, r"Code\Hot100\Sliding-Window\3-无重复字符的最长子串.mdx"),
    os.path.join(base, r"Code\Hot100\Sliding-Window\438-找到字符串中所有字母异位词.mdx"),
    os.path.join(base, r"Code\Hot100\Stack\394-字符串解码.mdx"),
    os.path.join(base, r"Code\Hot100\Stack\739-每日温度.mdx"),
    os.path.join(base, r"Code\Hot100\Two-Pointers\11-盛最多水的容器.mdx"),
    os.path.join(base, r"Code\Hot100\Two-Pointers\15-三数之和.mdx"),
    os.path.join(base, r"Code\DS\Dynamic Programming.mdx"),
    os.path.join(base, r"面试笔记\JavaSe\JAVASE.mdx"),
    os.path.join(base, r"面试笔记\MyWeb\构建过程3.mdx"),
    os.path.join(base, r"面试笔记\MyWeb\构建过程end.mdx"),
]

for filepath in files:
    if not os.path.exists(filepath):
        print("NOT FOUND: " + filepath)
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # Remove <span class="math-inline">...</span> patterns (simple case)
    content = re.sub(r'<span class="math-inline">([^<]*)</span>', r'`\1`', content)

    # Strip any remaining <span class="math-inline"> and </span> tags
    content = re.sub(r'<span class="math-inline">', '`', content)
    content = re.sub(r'</span>', '`', content)

    # Handle unclosed/malformed spans like <span class="math-inline">N)</span>
    content = re.sub(r'<span class="math-inline">([^<]*)', r'`\1`', content)

    # Remove <div class="math-block">...</div> blocks (LaTeX table in JAVASE.mdx)
    content = re.sub(r'<div class="math-block">\s*([\s\S]*?)\s*</div>\s*',
                     lambda m: '\n```latex\n' + m.group(1).strip() + '\n```\n', content)

    # Remove <div class="tech-impact-cover"> ... </div> (custom HTML)
    content = re.sub(r'<div class="tech-impact-cover">[\s\S]*?</div>\s*', '', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("FIXED: " + os.path.basename(filepath))
    else:
        print("OK:    " + os.path.basename(filepath))
