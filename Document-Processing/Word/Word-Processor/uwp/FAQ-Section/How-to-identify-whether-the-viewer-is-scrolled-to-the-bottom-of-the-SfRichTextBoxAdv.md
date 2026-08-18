---
title: How to Detect Scrolling to the Bottom in UWP DOCX Editor | Syncfusion
description: Detect when the document viewer reaches the bottom in Syncfusion® UWP DOCX Editor using the VerticalScrollBar ValueChanged event.
platform: document-processing
control: SfRichTextBoxAdv
documentation: ug
keywords: scroll-to-bottom,scroll,verticalscrollbar,horizontalscrollbar,scrollbar,scrolling-events
---

# How to Detect Scrolling to the Bottom in UWP DOCX Editor

This page explains how to identify whether the viewer is scrolled to the bottom in the UWP [`SfRichTextBoxAdv`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html) control.

## Detecting scroll-to-bottom

SfRichTextBoxAdv exposes the document scroll bars through the [`VerticalScrollBar`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_VerticalScrollBar) and [`HorizontalScrollBar`](https://help.syncfusion.com/cr/uwp/Syncfusion.UI.Xaml.RichTextBoxAdv.SfRichTextBoxAdv.html#Syncfusion_UI_Xaml_RichTextBoxAdv_SfRichTextBoxAdv_HorizontalScrollBar) properties of the `SfRichTextBoxAdv` class. Using these properties, you can detect when the document is scrolled to the bottom of the control.

Use the `ValueChanged` event of the `VerticalScrollBar` for this purpose. Check whether the scroll bar's value equals the `VerticalScrollBar.Maximum` value; if so, the vertical scroll bar has been scrolled to the bottom of the control.

The following code example illustrates how to identify whether the viewer is scrolled to the bottom of `SfRichTextBoxAdv`.

{% tabs %}
{% highlight c# %}
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

## See also

- [UWP RichTextBox Feature Tour](https://www.syncfusion.com/docx-editor-sdk/uwp-docx-editor)
- [UWP RichTextBox Examples](https://github.com/syncfusion/docx-editor-sdk-uwp-demos)