---
layout: post
title: How to Get page offset collection in UWP PDF Viewer | Syncfusion
description: Learn how to get page offset collection in uwp pdf viewer in Syncfusion UWP PDF Viewer with examples and implementation details.
platform: document-processing
control: PDF viewer
documentation: ug
---

# How to Get page offset collection in UWP PDF Viewer
Page offset collection is a dictionary with page numbers as keys and the corresponding vertical location where the page ends as values. The following code example illustrates accessing the same. Here 'buffer' is the byte array read from the PDF file either using FileOpenPicker or from Assets folder, as illustrated in the [Viewing PDF](https://help.syncfusion.com/uwp/sfpdfviewer/concepts-and-features/viewing-pdf) section.
{% tabs %}
{% highlight c# %}
private void Page_Loaded(object sender, RoutedEventArgs e)
{
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument(buffer);
    pdfViewer.LoadDocument(loadedDocument);
}

private void Button_Click(object sender, RoutedEventArgs e)
{
    //Gets the page offset collection.
    Dictionary<int, double> offsetCollection = pdfViewer.PageOffsetCollection;
}
{% endhighlight %}
{% highlight vbnet %}
Private Sub Page_Loaded(sender As Object, e As RoutedEventArgs)
    Dim loadedDocument As New PdfLoadedDocument(buffer)
    pdfViewer.LoadDocument(loadedDocument)
End Sub

Private Sub Button_Click(sender As Object, e As RoutedEventArgs)
    'Gets the page offset collection.
    Dim offsetCollection As Dictionary(Of Integer, Double) = pdfViewer.PageOffsetCollection
End Sub
{% endhighlight %}
{% endtabs %}

N> The page offset collection will be generated only at the time of display of the PDF document in the viewer, when tried before the display of the document this would return a dictionary of count 0.

## See Also
- [Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-page-navigation)
- [Get vertical and horizontal offset](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/how-to/get-current-vertical-and-horizontal-offsets)
- [Bookmark Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/bookmark-navigation)