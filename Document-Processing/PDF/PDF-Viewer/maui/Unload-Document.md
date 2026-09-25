---
layout: post
title: Unload a PDF Document in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to unload a PDF document and release associated resources in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, unload pdf document, pdf viewer memory management, sfpdfviewer unload document, release pdf resources, maui pdf viewer
---

# Unload a document in .NET MAUI PDF Viewer

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to unload the currently loaded PDF document and release the memory and resources associated with it by using the [UnloadDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocument) method.

When switching between documents on the same page, the previously loaded document is automatically unloaded by the PDF Viewer before loading the new document.

> **Note**
>
> 1. When opening or loading a different document in the same [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) instance, the previously loaded document is unloaded automatically.
>
> 2. If your application contains multiple pages with a PDF Viewer, it is recommended to call the [UnloadDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocument) method before leaving the page. This helps release the memory and resources consumed by the loaded PDF document, improving overall application performance.

The following code example shows how to unload a document from the PDF Viewer:

{% tabs %}
{% highlight c# %}
// Unload the document from the PDF Viewer.
PdfViewer.UnloadDocument();
{% endhighlight %}
{% endtabs %}

## Unload a document asynchronously

The SfPdfViewer also provides the [UnloadDocumentAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocumentAsync) method to unload the currently loaded PDF document asynchronously. This method releases the memory and resources associated with the loaded document without blocking the UI thread, helping maintain a responsive user experience.

The following code example shows how to unload a document asynchronously from the PDF Viewer:

{% tabs %}
{% highlight c# %} 
// Unload the document asynchronously from the PDF Viewer. 
await PdfViewer.UnloadDocumentAsync(); 
{% endhighlight %} 
{% endtabs %}

> **Note**
>
> 1.The [UnloadDocumentAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocumentAsync) method can be useful when unloading large PDF documents or when performing document cleanup operations as part of an asynchronous workflow. Always use the await keyword to ensure the unload operation completes successfully before proceeding with dependent operations.

## See Also
- [Open from URL](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-url)
- [Open from Base64](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-base64string)
- [Open from Local Storage](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-local-storage)
- [Open a Password-Protected Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document)
- [Document Load Notifications](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/documentloadnotifications)