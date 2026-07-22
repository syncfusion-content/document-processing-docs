---
layout: post
title: Customize the scrollbar | Syncfusion
description: The Syncfusion Essential<sup>®</sup> UWP PDF viewer provides option to customize the width of the vertical scrollbar and the color of the scrollbar thumb.
platform: document-processing
control: PDF viewer
documentation: ug
---

# Customize the Scrollbar in UWP PDF Viewer

This section explains how to customize the scrollbar appearance and width in the SfPdfViewer control.

## Customize the color of the scrollbar thumb

The PDF Viewer uses the [`ScrollViewer`](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.scrollviewer?view=winrt-19041) control to scroll the pages of a PDF. The color of the vertical and horizontal scrollbar thumbs can be customized using the following code.
 
{% tabs %}
{% highlight xaml %}
<sf:SfPdfViewerControl x:Name = “pdfViewer”>
<sf:SfPdfViewerControl.Resources>
        <SolidColorBrush x:Key="ScrollBarThumbFill" Color="Gold"/>
        <SolidColorBrush x:Key="ScrollBarThumbFillPointerOver" Color="Orange"/>
        <SolidColorBrush x:Key="ScrollBarThumbFillPressed" Color="Red"/>
        <SolidColorBrush x:Key="ScrollBarThumbFillDisabled" Color="Pink"/>
</sf:SfPdfViewerControl.Resources>
</sf:SfPdfViewerControl>
{% endhighlight %}
{% endtabs %}

## Customize the width of the vertical scrollbar

The width of the vertical scrollbar of the [`ScrollViewer`](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.scrollviewer?view=winrt-20348) can be modified by using the [`VerticalScrollBarWidth`](https://help.syncfusion.com/cr/uwp/Syncfusion.Windows.PdfViewer.SfPdfViewerControl.html#Syncfusion_Windows_PdfViewer_SfPdfViewerControl_VerticalScrollBarWidth) property. The default value of this property matches the default width of the vertical scrollbar of the [`ScrollViewer`](https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.scrollviewer?view=winrt-20348) control.

{% tabs %}
{% highlight c# %}

// Sets the width of the vertical scrollbar in the PDF Viewer.
pdfViewerControl.VerticalScrollBarWidth = 100;
// Gets the width of the vertical scrollbar in the PDF Viewer.
double verticalScrollBarWidth = pdfViewerControl.VerticalScrollBarWidth;

{% endhighlight %}
{% endtabs %}

## See Also
- [Viewing PDF](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/viewing-pdf)
- [Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/working-with-page-navigation)
- [Custom toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/uwp/concepts-and-features/creating-custom-toolbar)