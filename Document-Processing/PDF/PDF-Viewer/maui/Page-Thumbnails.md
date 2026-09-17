---
layout: post
title: Page Thumbnail in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to preview and navigate PDF pages using the page thumbnail view in the Syncfusion® .NET MAUI PDF Viewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui page thumbnail, pdf thumbnail preview, maui pdf navigation, pdf page preview
---

# Page Thumbnail in .NET MAUI PDF Viewer

The page thumbnail view in the .NET MAUI PDF Viewer displays preview images of the pages in a PDF document. It enables users to quickly identify and navigate to a specific page visually. The thumbnail corresponding to the currently displayed page is automatically highlighted.

Page thumbnails are especially useful when working with large PDF documents, document review workflows, and content navigation scenarios.

## Showing or hiding the thumbnail view

The built-in page thumbnail view can be shown or hidden using the `IsThumbnailViewVisible` property. The default value of this property is `false`.

The thumbnail view becomes available after a PDF document is loaded.

{% tabs %}

{% highlight XAML %}

<pdfViewer:SfPdfViewer
    x:Name="pdfViewer"
    IsThumbnailViewVisible="True" />

{% endhighlight %}

{% highlight c# %}

pdfViewer.IsThumbnailViewVisible = true;

{% endhighlight %}

{% endtabs %}

Users can close the thumbnail view using the built-in close button available in the thumbnail pane. The thumbnail view can also be hidden programmatically by setting the `IsThumbnailViewVisible` property to `false`.

This property can be used to dynamically show or hide the thumbnail pane based on your application's requirements.

The thumbnail view can also be closed programmatically by setting the `IsThumbnailViewVisible` property to `false`.

{% tabs %}

{% highlight c# %}

pdfViewer.IsThumbnailViewVisible = false;

{% endhighlight %}

{% endtabs %}


## Navigating using page thumbnails

Select a page thumbnail to navigate the PDF Viewer to the corresponding page.

The page thumbnail view provides the following navigation behavior:

- The thumbnail corresponding to the currently displayed page is highlighted.
- The highlighted thumbnail is updated automatically when page navigation occurs within the PDF Viewer.
- The currently selected thumbnail is automatically brought into view when required.

### Layout modes

The page thumbnail view supports both Continuous and Single Page layout modes.

- **Continuous layout:** Selecting a thumbnail navigates to the corresponding page while retaining the continuous page layout.

- **Single Page layout:** Selecting a thumbnail displays the selected page in Single Page layout mode.


## Preserving zoom during thumbnail navigation

The [PersistZoomOnPageChange](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_PersistZoomOnPageChange) determines whether the current zoom factor is retained when navigating between pages in Single Page mode.

When this property is set to `true`, the PDF Viewer preserves the current zoom factor when users navigate to another page using the page thumbnail view. The default value is `false`.

> **Note:** This property applies when the [PageLayoutMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_PageLayoutMode) is set to `Single`.

{% tabs %}

{% highlight XAML %}

<pdfViewer:SfPdfViewer
    x:Name="pdfViewer"
    PageLayoutMode="Single"
    PersistZoomOnPageChange="True" />

{% endhighlight %}

{% highlight c# %}

pdfViewer.PageLayoutMode = PageLayoutMode.Single;
pdfViewer.PersistZoomOnPageChange = true;

{% endhighlight %}

{% endtabs %}

## Platform behavior

The page thumbnail view adapts to supported desktop and mobile platforms.

| Platform | Behavior |
|-----------|-----------|
| Windows | Displays a resizable thumbnail pane beside the PDF document. |
| Mac Catalyst | Displays a resizable thumbnail pane beside the PDF document. |
| Android | Displays page previews in a touch-optimized layout. |
| Android Tablet | Displays a resizable thumbnail pane beside the PDF document. |
| iOS | Displays page previews in a touch-optimized layout. |
| iPadOS | Displays a resizable thumbnail pane beside the PDF document. |

## Demo

![Thumbnail Page Navigation Demo](Images\PageThumbnailDemo.gif)

## See Also

- [Page Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/page-navigation)
- [Document Outline](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/document-outline)
- [Zooming](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/magnification)
