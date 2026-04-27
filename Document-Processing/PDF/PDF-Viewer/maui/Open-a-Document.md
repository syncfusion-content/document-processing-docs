---
layout: post
title: Open a Document in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to open a PDF document in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control from various sources.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Open a Document in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to open PDF documents from various sources, such as local storage or URLs. It also supports viewing password-protected documents.

This section walks you through loading and unloading documents in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) and handling load-specific events.

## In This Section

| Topic | Description |
|---|---|
| [Open a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document) | Load from a stream or byte array, unload documents, and handle loading events. |
| [Open from a URL](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-url) | Download and display a PDF directly from a remote URL. |
| [Open from Local Storage](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-local-storage) | Open a PDF from the device's file system using the file picker. |
| [Open from Base64](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-base64string) | Load a PDF encoded as a Base64 string. |
| [Open a Password-Protected Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document) | Display a password dialog and open encrypted PDF documents. |
| [Document Load Notifications](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/documentloadnotifications) | Subscribe to document and page load/unload events for custom logic. |

## Document and page loading indications

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) displays a built-in [ActivityIndicator](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/activityindicator) (loading indicator) under the following scenarios to indicate if there are any lengthy loadings.

1.	`At the document` – To indicate that the document is loading.
2.	`At the pages` – To indicate that the page content is loading.

To customize the appearance of the loading indicators, please refer to this [section](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/ui-customization#customize-the-loading-indicator).

## Document source types

The document source types accepted by the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) are `Stream` and `byte[]`. You can load the PDF document from a specified stream or bytes.

**Load the document from the stream** 

{% tabs %}
{% highlight c# %}
// Load the document from Stream
Stream pdfDocumentStream = typeof(App).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStarted.Assets.PDF_Succinctly.pdf");
PdfViewer.DocumentSource = pdfDocumentStream;
{% endhighlight %}
{% endtabs %}

**Load the document from Byte array**

{% tabs %}
{% highlight c# %}
// Load the document from a Byte array
HttpClient httpClient = new HttpClient();
HttpResponseMessage response = await httpClient.GetAsync("https://www.syncfusion.com/downloads/support/directtrac/general/pd/PDF_Succinctly1928776572");
PdfViewer.DocumentSource = await response.Content.ReadAsByteArrayAsync();
{% endhighlight %}
{% endtabs %}

## Unload a document

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to unload and clear the resources occupied by the PDF document loaded using the [UnloadDocument](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocument) method, as shown below.

N> 1. While changing or opening different documents on the same page, the previously loaded document will be unloaded automatically by the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html). 
N> 2. And, if you are using multiple pages in your application, then make sure to unload the document from the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) while leaving the page that has it to release the memory and resources consumed by the PDF document that is loaded.  The unloading of documents can be done by calling the [UnloadDocument](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_UnloadDocument) method. 

{% tabs %}
{% highlight c# %}
//Unload the document from the PDF viewer.
PdfViewer.UnloadDocument();
{% endhighlight %}
{% endtabs %}

## Opening a PDF document with annotations

The .NET MAUI PDF Viewer does not currently support annotations comparable to Xamarin.Forms. However, it is possible to view the unsupported annotations in a non-interactive manner. To achieve this, provide the [flattenOptions](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.FlattenOptions.html) (an optional parameter) as [Unsupported](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.FlattenOptions.html#Syncfusion_Maui_PdfViewer_FlattenOptions_Unsupported) in the [LoadDocument](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_LoadDocument_System_IO_Stream_System_String_System_Nullable_Syncfusion_Maui_PdfViewer_FlattenOptions__) methods. See the following code example:

{% tabs %}
{% highlight c# hl_lines="2" %}

        Stream pdfDocumentStream = typeof(App).GetTypeInfo().Assembly.GetManifestResourceStream("GettingStarted.Assets.PDF_Succinctly.pdf");
        FlattenOptions flattenOption = FlattenOptions.Unsupported;
        // Loads the PDF document from the stream with the flatten option to render unsupported annotations.
        PdfViewer.LoadDocument(pdfDocumentStream, flattenOptions: flattenOption);

{% endhighlight %}
{% endtabs %}

N> * All the [LoadDocument](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_LoadDocument_System_IO_Stream_System_String_System_Nullable_Syncfusion_Maui_PdfViewer_FlattenOptions__) methods accept the flatten options parameter.
N> * Refer to this [section](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/migration#upcoming-features) for the upcoming annotation features in the [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html).

## Optimizing document loading on Android

When your application handles large images, complex graphics, or memory-intensive operations, the default heap size may not be sufficient, leading to performance issues or crashes. Enabling a larger heap allows the app to allocate more memory, ensuring smooth performance and preventing out-of-memory errors in such scenarios. You can enable this by adding the following highlighted attribute in your AndroidManifest.xml under the <application> tag.

{% tabs %}
{% highlight xml hl_lines="4" %}
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
	<application android:allowBackup="true" android:icon="@mipmap/appicon" android:roundIcon="@mipmap/appicon_round" 
        android:largeHeap="true" ></application>
	https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui.
</manifest>
{% endhighlight %}
{% endtabs %}

## Check other PDF opening options

* [Open a document from local storage](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-local-storage)
* [Open a document from a URL](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-url)
* [Open a password-protected document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document)

## See Also
- [Open from URL](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-url)
- [Open from Base64](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-base64string)
- [Open from Local Storage](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-document-from-local-storage)
- [Open a Password-Protected Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/open-a-password-protected-document)
- [Document Load Notifications](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/documentloadnotifications)
