---
layout: post
title: How to load PDF without ToolStrip in WinForms PDF Viewer | Syncfusion
description: This guide explains how to load and view PDF documents without the ToolStrip by using PdfDocumentView instead of PdfViewerControl.
platform: document-processing
control: PdfViewerControl
documentation: ug
---

# How to load PDF without ToolStrip in WinForms PDF Viewer

In order to view the PDF without the toolbar, make use of the [PdfDocumentView](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.PdfViewer.PdfDocumentView.html) control instead of the PdfViewerControl as described in the [section](https://help.syncfusion.com/windowsforms/pdf-viewer/getting-started#adding-pdfdocumentview-to-an-application). Other features are similar to the PdfViewerControl.

{% tabs %}
{%highlight c#%}
PdfDocumentView pdfDocumentView1 = new PdfDocumentView();
pdfDocumentView1.Load("Sample.pdf");

{%endhighlight%}

{%highlight vb%}
Dim pdfDocumentView1 As New PdfDocumentView()
pdfDocumentView1.Load("Sample.pdf")

{%endhighlight%}
{% endtabs %}

The following is the image of a PDF document viewed in PdfDocumentView.

![Load PDF Without Toolstrip in Windows PDF Viewer](Load-PDF-without-ToolStrip-in-Viewer_images/Load-PDF-without-ToolStrip-in-Viewer_img1.png)



