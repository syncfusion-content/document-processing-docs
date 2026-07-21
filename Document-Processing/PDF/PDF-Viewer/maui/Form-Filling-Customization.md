---
layout: post
title: Customize Form Fields in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to customize the appearance of form fields in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Customize form fields in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to customize the visual appearance of form fields by modifying properties on their [Widget](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.Widget.html) objects. A form field can have one or more `Widget` instances (the visual representations of the field on the page). You can change the background color, foreground (text) color, border color, and border width.

N> * Appearance customizations support undo and redo.
N> * Customizations cannot be applied when a form field is locked. For details, see [Lock and Unlock Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/lock-unlock).
N> * Customized colors and border width are preserved during import, export, printing, and saving. For more information, see [Import and Export Form Data](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-import-export) and [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document).

## Customize the background color

The [BackgroundColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.Widget.html#Syncfusion_Maui_PdfViewer_Widget_BackgroundColor) property sets the fill color behind the field content. The following example applies a uniform background color to all form fields in the document.

{% tabs %}
{% highlight c# %}
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

## Customize the foreground (text) color

The `ForegroundColor` property sets the color of the text inside the form field. The following example applies a red text color to all text form fields.

{% tabs %}
{% highlight c# %}
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
{% highlight c# %}
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
{% highlight c# %}
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

In addition to setting widget properties, you can also track when a widget property changes at runtime. The `PropertyChanged` event on a [Widget](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.Widget.html) fires whenever a widget property — such as `BorderColor`, `BackgroundColor`, `BorderWidth`, or `ForegroundColor` — changes. Subscribe to this event after the document loads.

{% tabs %}
{% highlight c# %}
void SubscribeToWidgetPropertyChanges()
{
    foreach (FormField formField in PdfViewer.FormFields)
    {
        foreach (var widget in formField.Widgets)
        {
            widget.PropertyChanged += Widget_PropertyChanged;
        }
    }
}

private void Widget_PropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
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

- [Form Filling Overview](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-overview)
- [Show and Hide Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-show-hide)
- [Form Fields Collection](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-collection)
- [Form Field Events](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-events)
- [Edit Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-edit)
- [Import and Export Form Data](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/form-filling-import-export)
- [Lock and Unlock](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/lock-unlock)
- [Save a Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/save-a-document)
