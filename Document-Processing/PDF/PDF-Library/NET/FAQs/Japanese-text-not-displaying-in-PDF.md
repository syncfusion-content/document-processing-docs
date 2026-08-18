---
title: Japanese Text in .NET PDF Library | Syncfusion
description: Resolve font compatibility issues causing Japanese text to not display in PDF documents using Syncfusion .NET PDF.
platform: document-processing
control: PDF
documentation: UG
---

# Japanese Text in .NET PDF library

## Why is Japanese text not visible in my PDF document?

The issue is most often caused by font compatibility with the viewer used to open the document. Some viewers, such as Microsoft Edge, do not support certain embedded font types and may fail to render the glyphs, leaving the text invisible. This is typically observed with PDF documents that use font types other than TrueType or with fonts that do not include the required Japanese (CJK) character set.

## How can I resolve this issue and display the Japanese text properly?

To resolve this, you need to use a [PdfTrueTypeFont](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTrueTypeFont.html) with the specific Japanese font. By creating and embedding the correct TrueType font in the document, you ensure that the text is visible across all platforms and viewers.

## Where can I find more information on how to implement TrueTypeFont in my PDF document?

Please refer to the [User Guide](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-text#drawing-text-using-opentype-font) documentation for detailed instructions on how to create and use TrueTypeFont in your PDF document.