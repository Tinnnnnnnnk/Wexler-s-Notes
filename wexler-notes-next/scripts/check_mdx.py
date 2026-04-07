# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')
import os, re
from pathlib import Path

content_dir = Path(r'D:\Github\Wexler-s-Notes\wexler-notes-next\src\content')
all_files = sorted(content_dir.rglob('*.mdx'))

lines_out = []
lines_out.append(f"Total MDX files: {len(all_files)}\n")

def find_braces_outside_code(content):
    lines = content.split('\n')
    in_code_block = False
    results = []
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            continue
        if in_code_block:
            continue
        line_no_inline = re.sub(r'`[^`]*`', '', line)
        for ch in ['{', '}']:
            if ch in line_no_inline:
                ctx_before = max(0, i - 2)
                ctx_after = min(len(lines), i + 2)
                context_lines = lines[ctx_before:ctx_after]
                results.append((i, ch, context_lines))
    return results

def find_math(content):
    inline = re.findall(r'(?<!\$)\$[^\$\n]{1,500}?\$(?!\$)', content)
    block = re.findall(r'\$\$[^\$]{1,500}?\$\$', content)
    return inline, block

lines_out.append("=" * 80)
lines_out.append("CURVY BRACES OUTSIDE CODE BLOCKS")
lines_out.append("=" * 80)

brace_file_count = 0
brace_total = 0
first_10_with_braces = []

for f in all_files:
    try:
        text = f.read_text(encoding='utf-8')
    except:
        try:
            text = f.read_text(encoding='utf-8', errors='replace')
        except:
            continue

    results = find_braces_outside_code(text)
    if results:
        brace_file_count += 1
        brace_total += len(results)
        first_10_with_braces.append((f, results))

lines_out.append(f"Files with curly braces outside code blocks: {brace_file_count}")
lines_out.append(f"Total brace occurrences: {brace_total}")
lines_out.append("")

shown = 0
for f, results in first_10_with_braces[:10]:
    lines_out.append(f"\n{'='*60}")
    lines_out.append(f"FILE: {f.name}")
    lines_out.append(f"Path: {f.relative_to(content_dir)}")
    lines_out.append(f"{'='*60}")
    for ln, ch, ctx_lines in results[:5]:
        lines_out.append(f"  Line {ln} (char: '{ch}'):")
        for j, cl in enumerate(ctx_lines):
            marker = ">>>" if ch in cl else "    "
            lines_out.append(f"  {marker} L{ln-len(ctx_lines)+j+1:3d}: {cl[:120]}")
        lines_out.append("")

lines_out.append("")
lines_out.append("=" * 80)
lines_out.append("MATH SYNTAX ($...$ or $$...$$) IN ALL FILES")
lines_out.append("=" * 80)

math_file_count = 0
for f in all_files:
    try:
        text = f.read_text(encoding='utf-8')
    except:
        try:
            text = f.read_text(encoding='utf-8', errors='replace')
        except:
            continue

    inline, block = find_math(text)
    if inline or block:
        math_file_count += 1
        lines_out.append(f"\nFILE: {f.name}")
        if inline:
            lines_out.append(f"  inline $...$ ({len(inline)} total), first 2:")
            for m in inline[:2]:
                snippet = m[:100].replace('\n', ' ')
                lines_out.append(f"    [{snippet}]")
        if block:
            lines_out.append(f"  block $$...$$ ({len(block)} total), first 2:")
            for m in block[:2]:
                snippet = m[:100].replace('\n', ' ')
                lines_out.append(f"    [{snippet}]")

lines_out.append("")
if math_file_count == 0:
    lines_out.append("No math syntax ($...$ or $$...$$) found in any MDX file.")

lines_out.append(f"\nSummary: {brace_file_count} files have curly braces outside code blocks, {math_file_count} have math syntax")
lines_out.append("Done.")

output_path = Path(r'D:\Github\Wexler-s-Notes\wexler-notes-next\scripts\mdx_check_output.txt')
with open(output_path, 'w', encoding='utf-8') as out:
    out.write('\n'.join(lines_out))

print(f"Output written to {output_path}")
print(f"Total MDX files: {len(all_files)}")
print(f"Files with curly braces: {brace_file_count}")
print(f"Total brace occurrences: {brace_total}")
print(f"Files with math syntax: {math_file_count}")