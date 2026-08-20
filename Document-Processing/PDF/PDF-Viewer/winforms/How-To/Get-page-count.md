---
layout: post
title: How to get page count in WinForms PDF Viewer | Syncfusion
description: This guide explains how to retrieve the page count of a loaded PDF document in Syncfusion PDF Viewer for Windows Forms.
platform: document-processing
control: PdfViewerControl
documentation: ug
---

# How to get page count in WinForms PDF Viewer

The number of pages in the currently loaded PDF can be found by using PageCount property.


{% tabs %}
{%highlight c#%}

int count = pdfViewerControl1.PageCount;

{%endhighlight%}


{%highlight vb%}
Dim count As Integer = pdfViewerControl1.PageCount

{%endhighlight%}
{% endtabs %}
