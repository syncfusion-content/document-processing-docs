---
layout: post
title: Scrolling in .NET MAUI PDF Viewer Control | Syncfusion
description: Explore scrolling features in .NET MAUI PDF Viewer, including how to set scroll positions programmatically and detect scroll changes in real time.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Scrolling in .NET MAUI PDF Viewer (SfPdfViewer)

Keep document navigation smooth and predictable by using the PDF Viewer's built-in scrolling features. This guide shows how to programmatically control scroll position, respond to scroll events, and implement performance-friendly patterns (for example, avoid nesting the viewer inside other scrollable containers).

W> Since the PDF Viewer includes built-in scrolling, avoid placing it inside other scrollable containers like [ScrollView](https://learn.microsoft.com/en-us/dotnet/maui/user-interface/controls/scrollview?view=net-maui-8.0), as this may lead to unexpected behavior.

## Programmatic scrolling

Use the [ScrollToOffset](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ScrollToOffset_System_Double_System_Double_) method to scroll to a specific horizontal and vertical offset. Offset values are measured in **device-independent units**. If the specified offset is invalid or out of bounds, the scroll action will be ignored and the viewer will retain its current position.

{% tabs %}
{% highlight c# %}
// Scroll to position (100, 1000)
PdfViewer.ScrollToOffset(100, 1000);
{% endhighlight %}
{% endtabs %}

## Detect scroll changes

You can monitor scroll changes using the `PropertyChanged` event. By monitoring the [HorizontalOffset](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_HorizontalOffset) and [VerticalOffset](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_VerticalOffset) property changes, you can respond to horizontal and vertical scroll movements.

The following code example shows how to subscribe to the `PropertyChanged` event.

{% tabs %}
{% highlight XAML %}

<syncfusion:SfPdfViewer 
    x:Name = "PdfViewer" PropertyChanged = "PdfViewer_PropertyChanged"/>

{% endhighlight %}
{% highlight C# %}

void SubscribeToPropertyChangedEvent()
{
    SfPdfViewer PdfViewer = new SfPdfViewer();
    // Subscribe to property changed event.
    PdfViewer.PropertyChanged += PdfViewer_PropertyChanged;
}

{% endhighlight %}
{% endtabs %}

The following code example illustrates how to implement the event handler and respond to both horizontal and vertical scroll changes:

{% tabs %}
{% highlight c# %}
private void PdfViewer_PropertyChanged(object sender, 
    System.ComponentModel.PropertyChangedEventArgs e)
{
    if (e.PropertyName == nameof(SfPdfViewer.HorizontalOffset))
    {
        // Horizontal scroll change detected
        // Your code here
    }
    else if (e.PropertyName == nameof(SfPdfViewer.VerticalOffset))
    {
        // Vertical scroll change detected
        // Your code here
    }
}
{% endhighlight %}
{% endtabs %}

## Detecting end of document

You can determine if the control has reached the vertical end of the document by evaluating the following properties:

* `VerticalOffset`: Provides the current vertical scroll offset.
* `ClientRectangle`: Provides the viewport area bounds.
* `ExtentHeight`: Provides the overall vertical height of the PDF document.

The following code example detects whether the control has reached the vertical end of the document.

{% tabs %}
{% highlight c# %}
private void PdfViewer_PropertyChanged(object sender, 
    System.ComponentModel.PropertyChangedEventArgs e)
{
    if (e.PropertyName == nameof(SfPdfViewer.VerticalOffset))
    {
        // Determine if the control has reached the vertical end of the document.
        bool isVerticalEndReached = (PdfViewer.VerticalOffset + 
            PdfViewer.ClientRectangle.Height >= PdfViewer.ExtentHeight);
    }
}
{% endhighlight %}
{% endtabs %}

Similarly, for horizontal end detection, refer to the following code example.

{% tabs %}
{% highlight c# %}
private void PdfViewer_PropertyChanged(object sender, 
    System.ComponentModel.PropertyChangedEventArgs e)
{
    if (e.PropertyName == nameof(SfPdfViewer.HorizontalOffset))
    {
        // Determine if the control has reached the horizontal end of the document.
        bool isHorizontalEndReached = (PdfViewer.HorizontalOffset + 
            PdfViewer.ClientRectangle.Width >= PdfViewer.ExtentWidth);
    }
}
{% endhighlight %}
{% endtabs %}

## Scroll Head (Mobile Platforms)

On Android and iOS platforms, the scroll head offers a quick way to move through pages. Users can drag the thumb indicator to scroll within the PDF document.

![Scroll head](Images\ScrollHead.png)

### Show or Hide the Scroll Head

Use the [ShowScrollHead](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_ShowScrollHead) property to control the visibility of the scroll head.

{% tabs %}
{% highlight c# %}
// Hide the scroll head thumb
PdfViewer.ShowScrollHead = false;
{% endhighlight %}
{% endtabs %}

N> The scroll head is available only on **mobile platforms**. It is not supported on **Windows** or **macOS**.

## Render multiple pages while scrolling

When scrolling through large PDF documents, you may notice blank pages appearing temporarily while new pages are being rendered. This happens because the viewer renders pages on demand to optimize memory usage.

To minimize this and provide a smoother scrolling experience, the SfPdfViewer control offers the [OverscanCount](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_OverscanCount)` property. This property defines how many pages should be pre-rendered and kept in memory on each side of the current viewport. Increasing this value reduces the chance of blank pages during fast scrolling but may increase memory usage. 

The following example shows how to set the [OverscanCount](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_OverscanCount) property:

{% tabs %}
{% highlight xaml %}
<syncfusion:SfPdfViewer  x:Name="PdfViewer"
                         OverscanCount ="15" />
{% endhighlight %}

{% highlight c# %}
// Set the cache range (number of pages before and after the current viewport)
PdfViewer.OverscanCount = 15;
{% endhighlight %}
{% endtabs %} 

N> * Use a reasonable [OverscanCount](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_OverscanCount) value. Large values can cause memory spikes and app freezes.
N> * Pages with very high resolution may still render slowly due to native rendering limitations.

## See Also

- [Page Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/page-navigation)
- [Magnification](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/magnification)
- [Gesture Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/gesture-events)
- [Toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/toolbar)
- [UI Customization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/ui-customization)
- [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/getting-started)
- [Coordinate Conversion](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/coordinates-conversion)
