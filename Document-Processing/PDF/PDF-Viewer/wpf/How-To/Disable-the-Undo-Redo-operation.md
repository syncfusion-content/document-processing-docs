---
layout: post
title: How to Disable the Undo Redo operation in WPF Pdf Viewer | Syncfusion
description: Disable or enable undo redo operations of functions or features in Syncfusion WPF PDF Viewer using UndoRedoSettings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Disable the Undo Redo operation in WPF Pdf Viewer

To disable the Undo Redo operation, set the Limit property of UndoRedoSettings to zero. By default, this value is set to 100. Reducing the value to zero will disable the Undo Redo functionality. The following code example demonstrates how to set the Limit value:

{% tabs %}
{% highlight C# %}

//Initialize PDF Viewer.
PdfViewerControl pdfViewer = new PdfViewerControl();
//Set Limit property as zero
pdfViewer.UndoRedoSettings.Limit = 0;
//Load the PDF.
pdfViewer.Load("Sample.pdf");


{% endhighlight %}



{% highlight vbnet %}

'Initialize PDF Viewer.
Private pdfViewer As New PdfViewerControl()
'Set Limit property as zero
pdfViewer.UndoRedoSettings.Limit = 0
'Load the PDF.
pdfViewer.Load("Sample.pdf")


{% endhighlight %}
{% endtabs %}