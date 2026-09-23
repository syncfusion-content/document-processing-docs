---
layout: post
title: Unload a PDF Document in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to unload a PDF document and release associated resources in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, unload pdf document, pdf viewer memory management, sfpdfviewer unload document, release pdf resources, maui pdf viewer
appliesto: PDF Viewer SDK
---

# Unload a document in .NET MAUI PDF Viewer

The `SfPdfViewer` allows you to unload the currently loaded PDF document and release the memory and resources associated with it by using the `UnloadDocument` method.

When switching between documents on the same page, the previously loaded document is automatically unloaded by the PDF Viewer before loading the new document.

> **Note**
>
> 1. When opening or loading a different document in the same `SfPdfViewer` instance, the previously loaded document is unloaded automatically.
>
> 2. If your application contains multiple pages with a PDF Viewer, it is recommended to call the `UnloadDocument` method before leaving the page. This helps release the memory and resources consumed by the loaded PDF document, improving overall application performance.

The following code example shows how to unload a document from the PDF Viewer:

{% tabs %}
{% highlight c# %}
// Unload the document from the PDF Viewer.
PdfViewer.UnloadDocument();
{% endhighlight %}
{% endtabs %}

## See Also
- [Open from URL](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-url)
- [Open from Base64](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-base64string)
- [Open from Local Storage](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-local-storage)
- [Open a Password-Protected Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document)
- [Document Load Notifications](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/documentloadnotifications)