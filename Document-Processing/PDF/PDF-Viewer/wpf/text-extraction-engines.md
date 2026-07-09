---
layout: post
title: Text Extraction Engines in WPF Pdf Viewer control | Syncfusion®;
description: Learn about Text Extraction Engines supported in Syncfusion<sup>&reg;</sup> Essential Studio&reg; WPF Pdf Viewer control, its elements and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Text Extraction Engines in WPF Pdf Viewer

[WPF PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/wpf-pdf-viewer) extracts text information from PDF files through two different engines for text search, text selection, and text markup creation.

* PDFium (Google Chrome's text extraction engine)
* SfPdf (Syncfusion's own text extraction engine)

N> Before Essential Studio version 19.4.0.48, the SfPdf engine was used as the default for text-based operations in the PDF pages. From version 19.4.0.48 onwards, the default text extraction engine has been changed to PDFium.

The PDFium text extraction engine is recommended for improved performance. However, you may still use the SfPdf text extraction engine by setting the [TextExtractionEngine](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_TextExtractionEngine) property to `SfPdf`. Set this property before loading the PDF document. Refer to the following code snippet to apply the same.

{% tabs %}
{% highlight c# %}
using Syncfusion.Windows.PdfViewer;

pdfViewer.TextExtractionEngine = PdfTextExtractionEngine.SfPdf;
{% endhighlight %}
{% endtabs %}

For additional information about the usage of the text extraction engine, please refer to the [text extraction](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/wpf/extract-text-from-pdf) functionalities.