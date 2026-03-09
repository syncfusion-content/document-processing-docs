---
layout: post
title: Document Link Navigation in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to navigate using document link annotations in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Document Link Navigation in .NET MAUI PDF Viewer (SfPdfViewer)

The PDF viewer allows navigating from one part of the PDF document to another using document link annotations. When a document link annotation is tapped, the PDF viewer scrolls to the destination page or location defined by that annotation. This type of annotation is most commonly used to make a PDF's table of contents interactive — each entry links directly to the corresponding page in the document.

N> Document link annotations differ from hyperlink annotations. Document links navigate **within** the same PDF document, while hyperlinks open an external URL in the device browser. See [Hyperlink Navigation](https://help.syncfusion.com/maui/pdf-viewer/hyperlink-navigation) for details on handling external links.

## Enable or Disable Document Link Navigation

The document link navigation can be turned on or off using the [EnableDocumentLinkNavigation](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_EnableDocumentLinkNavigation) property. The default value of this property is `true`. The code snippet below illustrates disabling the document link navigation.

{% tabs %}
{% highlight c# %}

pdfViewer.EnableDocumentLinkNavigation = false;

{% endhighlight %}
{% endtabs %}

## See Also
- [Hyperlink Navigation](../hyperlink-navigation)
- [Page Navigation](../page-navigation)
- [Document Outline (Bookmarks)](../document-outline)
