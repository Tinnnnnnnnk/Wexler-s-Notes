# -*- coding: utf-8 -*-
import re, os

files = [
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\面试笔记\MyWeb\构建过程end.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\Hot100\Graph-Theory\207-课程表.mdx",
    r"D:\Github\Wexler-s-Notes\wexler-notes-next\src\content\Code\DS\BFS.mdx",
]

for filepath in files:
    if not os.path.exists(filepath):
        print("NOT FOUND: " + filepath)
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # Remove all tech-impact-cover div blocks and their contents
    content = re.sub(r'<div class="tech-impact-cover[^"]*">[\s\S]*?</div>\s*', '', content)

    # Remove any remaining standalone tech-impact stats divs
    content = re.sub(r'<div class="tech-impact-cover__[^"]*">[\s\S]*?</div>\s*', '', content)

    # Strip all <span> and </span> tags  
    content = re.sub(r'<span[^>]*>', '`', content)
    content = re.sub(r'</span>', '`', content)

    # Strip all <strong> and </strong> tags
    content = re.sub(r'<strong[^>]*>', '', content)
    content = re.sub(r'</strong>', '', content)

    # Strip all <div> and </div> tags (self-closing divs)
    content = re.sub(r'<div[^>]*>', '', content)
    content = re.sub(r'</div>', '', content)

    # Strip <a href...> links
    content = re.sub(r'<a href="[^"]*">', '', content)
    content = re.sub(r'</a>', '', content)

    # Remove orphaned closing tags
    content = re.sub(r'^</div>\s*$', '', content, flags=re.MULTILINE)
    content = re.sub(r'^</span>\s*$', '', content, flags=re.MULTILINE)

    # Clean up excessive empty lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    # Remove leading/trailing empty lines
    content = content.strip()

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("FIXED: " + os.path.basename(filepath))
    else:
        print("OK:    " + os.path.basename(filepath))
