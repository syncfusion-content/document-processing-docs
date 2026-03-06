---
layout: post
title: Customize Form Fields in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to customize the appearance of form fields in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Customize Form Fields in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to customize the visual appearance of form fields by modifying properties on their [Widget](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.Widget.html) objects. You can change the background color, text (foreground) color, border color, and border width.

N> * Appearance customizations support undo and redo.
N> * Customizations cannot be applied when a form field is locked.
N> * Customized colors and border width are preserved during import, export, printing, and saving.

## Customize the background color

The [BackgroundColor](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.Widget.html#Syncfusion_Maui_PdfViewer_Widget_BackgroundColor) property sets the fill color behind the field content. The following example applies a uniform background color to all form fields in the document.

{% tabs %}
{% highlight C# %}
foreach (FormField formField in PdfViewer.FormFields)
{
    foreach (Widget widget in formField.Widgets)
    {
        // Apply a semitransparent blue background (matches the pre-v29.1.33 default).
        widget.BackgroundColor = Color.FromRgba(204, 215, 255, 200);
    }
}
{% endhighlight %}
{% endtabs %}

## Customize the text color

The `ForegroundColor` property sets the text color inside the form field. The following example applies a red text color to all text form fields.

{% tabs %}
{% highlight C# %}
foreach (FormField formField in PdfViewer.FormFields)
{
    if (formField is TextFormField textBoxField)
    {
        foreach (var widget in textBoxField.Widgets)
        {
            widget.ForegroundColor = Colors.Red;
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Customize the border color

The `BorderColor` property sets the color of the border drawn around the form field. The following example applies a red border to all text form fields.

{% tabs %}
{% highlight C# %}
foreach (FormField formField in PdfViewer.FormFields)
{
    if (formField is TextFormField textBoxField)
    {
        foreach (var widget in textBoxField.Widgets)
        {
            widget.BorderColor = Colors.Red;
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Customize the border width

The `BorderWidth` property sets the thickness of the border around the form field. The following example sets a border width of `2.0` on all text form fields.

{% tabs %}
{% highlight C# %}
foreach (FormField formField in PdfViewer.FormFields)
{
    if (formField is TextFormField textBoxField)
    {
        foreach (var widget in textBoxField.Widgets)
        {
            widget.BorderWidth = 2.0f;
        }
    }
}
{% endhighlight %}
{% endtabs %}

## Detect widget property changes

The `PropertyChanged` event on a [Widget](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.Widget.html) fires whenever a widget property — such as `BorderColor`, `BackgroundColor`, `BorderWidth`, or `ForegroundColor` — changes. Subscribe to this event after the document loads.

{% tabs %}
{% highlight C# %}
void SubscribeToWidgetPropertyChanges()
{
    foreach (FormField formField in pdfViewer.FormFields)
    {
        foreach (var widget in formField.Widgets)
        {
            widget.PropertyChanged += Widget_PropertyChanged;
        }
    }
}

private void Widget_PropertyChanged(object? sender, System.ComponentModel.PropertyChangedEventArgs e)
{
    if (sender is Widget widget)
    {
        if (e.PropertyName == nameof(widget.BorderWidth))
        {
            double width = widget.BorderWidth;
            // Respond to the border width change.
        }
    }
}
{% endhighlight %}
{% endtabs %}

## See Also

* [Form Filling Overview](https://help.syncfusion.com/maui/pdf-viewer/form-filling-overview)
* [Show and Hide Form Fields](https://help.syncfusion.com/maui/pdf-viewer/form-filling-show-hide)
* [Form Fields Collection](https://help.syncfusion.com/maui/pdf-viewer/form-filling-collection)
* [Form Field Events](https://help.syncfusion.com/maui/pdf-viewer/form-filling-events)
