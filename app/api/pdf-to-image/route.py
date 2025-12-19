from pdf2image import convert_from_path
import os

def POST(request):
    files = request.files.getlist("pdfs")
    images = []

    for pdf in files:
        pdf_path = f"/tmp/{pdf.filename}"
        pdf.save(pdf_path)

        pages = convert_from_path(pdf_path)
        for i, img in enumerate(pages, 1):
            path = f"/tmp/{pdf.filename}_p{i}.png"
            img.save(path)
            images.append(path)

    return { "images": images }
