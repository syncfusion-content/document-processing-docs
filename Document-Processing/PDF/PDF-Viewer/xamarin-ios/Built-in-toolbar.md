---
layout: post
title:  Built-in toolbar in PDF viewer Xamarin.iOS  | Syncfusion
description: The PDF Viewer Xamarin.iOS allows the users to perform almost all operations in PDF Viewer using the built-in toolbar
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Working with built-in toolbar

The SfPdfViewer has a built-in toolbar, which has provisions to perform majority of the operations in the PDF viewer. You  can disable the built-in toolbar and develop your own toolbar.

## How to disable the built-in toolbar of SfPdfViewer?

The following API is used to disable the built-in toolbar in the PDF viewer.


{% tabs %}
{% highlight c# %}

pdfViewerControl.Toolbar.Enabled = false;

{% endhighlight %}
{% endtabs %}

N>By default, the built-in toolbar of SfPdfViewer is always visible.

