---
title: Japanese text not displaying in PDF
description: The text is not visible due to font compatibility issues with certain viewers like Edge. To resolve this, create a TrueTypeFont using the desired font.
platform: document-processing
control: PDF
documentation: UG
---

# FAQ: Japanese text not displaying in PDF

## Why is the Japanese text not visible in my PDF document?

 The issue likely arises from the font compatibility with the viewer. Some browsers, like Microsoft Edge, do not support specific font types, which may prevent the text from being rendered correctly.

## How can I resolve this issue and display the Japanese text properly?

To resolve this, you need to use a **TrueTypeFont** with the specific Japanese font. By creating and embedding the correct TrueType font in the document, you ensure that the text is visible across all platforms and viewers.

## Where can I find more information on how to implement TrueTypeFont in my PDF document?

 Please refer to the [User Guide](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-text?cs-save-lang=1&cs-lang=csharp#drawing-text-using-opentype-font) documentation for detailed instructions on how to create and use TrueTypeFont in your PDF document.