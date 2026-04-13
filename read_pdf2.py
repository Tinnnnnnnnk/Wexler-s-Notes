import pdfplumber
import sys
sys.stdout.reconfigure(encoding='utf-8')

with pdfplumber.open('C:/Users/123/Downloads/diff-ETC-IEEE-0220-0812-2025(3).pdf') as pdf:
    print(f'Total pages: {len(pdf.pages)}')
    for i, page in enumerate(pdf.pages[5:]):
        print(f'--- Page {i+6} ---')
        text = page.extract_text()
        if text:
            print(text[:2500])
            print()