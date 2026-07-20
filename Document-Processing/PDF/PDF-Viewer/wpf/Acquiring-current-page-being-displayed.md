---
layout: post
title: Acquire current page being displayed in WPF Pdf Viewer | Syncfusion®
description: Learn about Exporting PDF pages support in Syncfusion<sup>&reg;</sup>; WPF Pdf Viewer control, its elements and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Acquire the current page being displayed in WPF Pdf Viewer

PDF Viewer supports acquiring the index of the page being displayed in the PDF Viewer at any moment using the [CurrentPageIndex](https://help.syncfusion.com/cr/wpf/Syncfusion.Windows.PdfViewer.PdfViewerControl.html#Syncfusion_Windows_PdfViewer_PdfViewerControl_CurrentPageIndex) property. The following code example illustrates the same.

{% tabs %}
{% highlight C# %}

using Syncfusion.Windows.PdfViewer;

//Initialize PDF Viewer.
PdfViewerControl pdfViewer1 = new PdfViewerControl();
//Load the PDF.
pdfViewer1.Load("Sample.pdf");

// Acquiring the index of the page being displayed in the Viewer
int pageIndex = pdfViewer1.CurrentPageIndex;


{% endhighlight %}


{% highlight vbnet %}

Imports Syncfusion.Windows.PdfViewer

'Initialize PDF Viewer.
Dim pdfViewer1 As New PdfViewerControl()
'Load the PDF.
pdfViewer1.Load("Sample.pdf")

' Acquiring the index of the page being displayed in the Viewer
Dim pageIndex As Integer = pdfViewer1.CurrentPageIndex

{% endhighlight %}
{% endtabs %}