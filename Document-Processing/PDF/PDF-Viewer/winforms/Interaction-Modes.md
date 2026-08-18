---
layout: post
title: Interaction Modes in WinForms PDFViewer | Syncfusion
description: Interaction modes allow users to perform actions such as text selection, panning, and document navigation within the PDF Viewer control.
platform: document-processing
control: PDF Viewer
documentation: UG
---

# Interaction Modes in WinForms PDF Viewer

The [WinForms PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/winforms-pdf-viewer) supports the following cursor modes for easy interaction with the PDF documents:

* Selection mode 
* Panning mode

## Selection mode

In this mode, the text selection can be performed in the PDF document loaded in the PDF Viewer. It is the default mode of the control and allows users to select and copy text from the PDF files. This is helpful for copying and sharing text content. Refer to the following code to enable the selection mode in `PdfViewerControl`.

{% tabs %}

{% highlight C# %}

PdfViewerControl pdfViewerControl = new PdfViewerControl(); 
pdfViewerControl.CursorMode = PdfViewerCursorMode.SelectTool;
pdfViewerControl.Load("Sample.pdf");

{% endhighlight %}

{% highlight vbnet %}

Dim pdfViewerControl As PdfViewerControl = New PdfViewerControl()
pdfViewerControl.CursorMode = PdfViewerCursorMode.SelectTool
pdfViewerControl.Load("Sample.pdf")

{% endhighlight %}

{% endtabs %}


## Panning mode

In this mode, the dragging and scrolling of the pages can be performed in any direction using mouse and touch interactions, but the text selection cannot be performed. Refer to the following code to enable the panning mode in `PdfViewerControl`.

{% tabs %}

{% highlight C# %}

PdfViewerControl pdfViewerControl = new PdfViewerControl();
pdfViewerControl.CursorMode = PdfViewerCursorMode.HandTool;
pdfViewerControl.Load("Sample.pdf");

{% endhighlight %}

{% highlight vbnet %}

Dim pdfViewerControl As PdfViewerControl = New PdfViewerControl()
pdfViewerControl.CursorMode = PdfViewerCursorMode.HandTool
pdfViewerControl.Load("Sample.pdf")

{% endhighlight %}

{% endtabs %}
