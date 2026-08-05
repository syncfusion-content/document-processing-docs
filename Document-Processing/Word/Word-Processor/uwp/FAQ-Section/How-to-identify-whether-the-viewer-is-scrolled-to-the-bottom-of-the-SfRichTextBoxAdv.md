---
title: Detect viewer scrolled to bottom UWP SfRichTextBoxAdv | Syncfusion
description: Learn here all about how to identify whether the viewer is scrolled to the bottom in Syncfusion UWP SfRichTextBoxAdv and more.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: scroll-to-bottom,scroll,verticalscrollbar,horizontalscrollbar,valuechanged,scrollbar,scrolling-events
---

# How to detect whether the viewer is scrolled to the bottom in UWP SfRichTextBoxAdv

This page explains how to identify whether the viewer is scrolled to the bottom in the UWP [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html) control.

## Detecting scroll-to-bottom

SfRichTextBoxAdv exposes the document scroll bars through the [`VerticalScrollBar`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#verticalscrollbar) and [`HorizontalScrollBar`](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html#horizontalscrollbar) properties of the `SfRichTextBoxAdv` class. Using these properties, you can detect when the document is scrolled to the bottom of the control.

Use the `ValueChanged` event of the `VerticalScrollBar` for this purpose. Check whether the scroll bar's value equals the `VerticalScrollBar.Maximum` value; if so, the vertical scroll bar has been scrolled to the bottom of the control.

N> The XAML snippet in this FAQ assumes the `RichTextBoxAdv` namespace is mapped to `clr-namespace:Syncfusion.UI.Xaml.RichTextBoxAdv;assembly=Syncfusion.SfRichTextBoxAdv.UWP` and that the host `SfRichTextBoxAdv` is declared as `<RichTextBoxAdv:SfRichTextBoxAdv x:Name="richTextBoxAdv" Loaded="RichTextBoxAdv_Loaded" />`.

N> The `VerticalScrollBar.Maximum` value is a `double`. To avoid floating-point edge cases, compare with a small tolerance, e.g. `e.NewValue >= richTextBoxAdv.VerticalScrollBar.Maximum - 0.5`.

The following code example illustrates how to identify whether the viewer is scrolled to the bottom of `SfRichTextBoxAdv`.

{% tabs %}
{% highlight c# %}
using Syncfusion.UI.Xaml.RichTextBoxAdv;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls.Primitives;

/// <summary>
/// Occurs when the SfRichTextBoxAdv is loaded and ready for interaction.
/// </summary>
/// <param name="sender">The source of the event.</param>
/// <param name="e">The RoutedEventArgs instance containing the event data.</param>
private void RichTextBoxAdv_Loaded(object sender, RoutedEventArgs e)
{
    if (richTextBoxAdv.VerticalScrollBar != null)
    {
        richTextBoxAdv.VerticalScrollBar.ValueChanged += VerticalScrollBar_ValueChanged;
    }
}

/// <summary>
/// Occurs when the vertical scroll bar value changes.
/// </summary>
/// <param name="sender">The source of the event.</param>
/// <param name="e">The RangeBaseValueChangedEventArgs instance containing the event data.</param>
private void VerticalScrollBar_ValueChanged(object sender, RangeBaseValueChangedEventArgs e)
{
    // When the scroll bar value equals its Maximum, the scroll has reached the bottom of the control.
    if (e.NewValue == richTextBoxAdv.VerticalScrollBar.Maximum)
    {
        // Add your "reached the bottom" logic here.
    }
}
{% endhighlight %}
{% endtabs %}

N> Unhook the `ValueChanged` event in the `Unloaded` handler to avoid memory leaks when the control is removed from the visual tree.

N> The `VerticalScrollBar` and `HorizontalScrollBar` properties are supported from Syncfusion UWP RichTextBox v17.4.0.X onwards.

## See Also

- [SfRichTextBoxAdv API reference](https://help.syncfusion.com/cr/uwp/Syncfusion.SfRichTextBoxAdv.SfRichTextBoxAdv.html)
- [Selection in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/selection)
- [Document properties in UWP RichTextBox](https://help.syncfusion.com/uwp/richtextbox/document-properties)	