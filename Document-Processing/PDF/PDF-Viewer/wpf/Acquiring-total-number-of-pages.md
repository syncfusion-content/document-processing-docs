---
layout: post
title: Acquire total number of pages in WPF Pdf Viewer | Syncfusion&reg;
description: Learn how to acquire the total number of pages in Syncfusion<sup>&reg;</sup> WPF Pdf Viewer control.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Acquire total number of pages in WPF Pdf Viewer

PDF Viewer provides the total number of pages in the PDF document that is being loaded. This value can be acquired with the help of the [PageCount](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_PageCount) property of the PDF Viewer control. The following code example illustrates the same.

{% tabs %}
{% highlight C# %}

//Initialize PDF Viewer.
PdfViewerControl pdfViewer1 = new PdfViewerControl();
//Load the PDF.
pdfViewer1.Load("Sample.pdf");

// Acquiring the total number of pages in the document being loaded  
int pageCount = pdfViewer1.PageCount;


{% endhighlight %}


{% highlight vbnet %}

'Initialize PDF Viewer.
Private pdfViewer1 As New PdfViewerControl()
'Load the PDF.
pdfViewer1.Load("Sample.pdf")

'Acquiring the total number of pages in the document being loaded 
Dim pageCount As Integer = pdfViewer1.PageCount
{% endhighlight %}
{% endtabs %}