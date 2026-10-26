---
layout: post
title: How to view PDF stream in WinForms PDF Viewer | Syncfusion
description: This guide explains how to load and view PDF documents from a stream using the Load method in Syncfusion PDF Viewer for WinForms.
platform: document-processing
control: PdfViewerControl
documentation: ug
---

# How to view PDF stream in WinForms PDF Viewer

PDF files as stream can be viewed in Essential&reg; PdfViewerControl using the overload available in the Load method. Following are the code snippets.


{% tabs %}
{% highlight c# %}

FileStream stream = new FileStream("Sample.pdf", FileMode.Open);
//Initialize PDF Viewer
PdfViewerControl pdfViewerControl1 = new PdfViewerControl();
//Load the PDF
pdfViewerControl1.Load(stream);

{% endhighlight %}

{% highlight vb %}

Dim stream As New FileStream("Sample.pdf", FileMode.Open)
'Initialize PDF Viewer
Dim pdfViewerControl1 As New PdfViewerControl()
'Load the PDF
pdfViewerControl1.Load(stream)

{% endhighlight %}
{% endtabs %}
