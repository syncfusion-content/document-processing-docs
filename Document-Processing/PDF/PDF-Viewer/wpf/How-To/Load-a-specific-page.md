---
layout: post
title: How to Load a specific page in WPF PDF Viewer| Syncfusion
description: Load a specific page ranges in loaded document in Syncfusion WPF PDF Viewer control using GoToPageAtIndex method.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Load a specific page in WPF PDF Viewer

Navigation to a specific page, through code, is possible using [GoToPageAtIndex](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_GoToPageAtIndex_System_Int32_) method.

{% tabs %}
{% highlight c# %}

//Initialize PDF Viewer.
PdfViewerControl pdfViewer1 = new PdfViewerControl();

//Load the PDF.
pdfViewer1.Load("Sample.pdf");
pdfViewer1.GoToPageAtIndex(2);

{% endhighlight %}

{% highlight vbnet %}

'Initialize PDF Viewer.
Private pdfViewer1 As New PdfViewerControl()

'Load the PDF.
pdfViewer1.Load("Sample.pdf")
pdfViewer1.GoToPageAtIndex(2)



{% endhighlight %}
{% endtabs %}