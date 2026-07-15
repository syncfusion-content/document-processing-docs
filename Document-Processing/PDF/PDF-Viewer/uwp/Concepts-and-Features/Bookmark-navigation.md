---
layout: post
title: Bookmark navigation in UWP PDF Viewer control | Syncfusion
description: Learn here all about Bookmark navigation support in Syncfusion<sup>®</sup> UWP PDF Viewer (SfPdfViewer) control and more.
platform: document-processing
control: SfPdfViewerControl
documentation: ug
---

# Bookmark Navigation in UWP PDF Viewer (SfPdfViewer)

The SfPdfViewer control allows users to navigate to the bookmarks present in the loaded PDF document. This section covers programmatic navigation using the `GoToBookmark` method.

## Programmatically navigate to a bookmark destination

You can navigate to a desired bookmark destination using the `GotoBookmark(PdfBookmark)` method. The target/destination bookmark should be provided as the parameter to this method. Refer to the following code sample.

{% tabs %}
{% highlight c# %}

//Create an object for PdfLoadedDocument
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(documentStream);

//Retrieves the bookmark collection from the loaded PDF document
PdfBookmarkBase bookmark = loadedDocument.Bookmarks;

//Navigates to the specified bookmark destination
pdfViewerControl.GoToBookmark(bookmark[0]);

{% endhighlight %}
{% endtabs %}

## See Also
- [UWP PDF Viewer Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/overview)
- [Page Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-page-navigation)
- [Hyperlink](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/hyperlink)
- [Viewing PDF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/viewing-pdf)
- [GoToBookmark API Reference](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html)