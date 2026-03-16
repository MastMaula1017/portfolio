import sys
try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not installed")
    sys.exit(1)

text = ""
try:
    reader = PdfReader("vanshCv.pdf")
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open("cv_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Successfully extracted text to cv_text.txt")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
