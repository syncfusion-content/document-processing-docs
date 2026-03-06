---
layout: post
title: Form Field Events in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to handle form field interaction events in the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Form Field Events in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) exposes events that allow you to track and respond to user interactions with form fields, such as value changes and focus changes.

## Detect value changes

The [FormFieldValueChanged](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFieldValueChanged) event is raised whenever the value of a form field changes. You can use the [OldValue](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.FormFieldValueChangedEventArgs.html#Syncfusion_Maui_PdfViewer_FormFieldValueChangedEventArgs_OldValue) and [NewValue](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.FormFieldValueChangedEventArgs.html#Syncfusion_Maui_PdfViewer_FormFieldValueChangedEventArgs_NewValue) properties of [FormFieldValueChangedEventArgs](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.FormFieldValueChangedEventArgs.html) to read the before and after values.

Subscribe to the event in XAML:

{% tabs %}
{% highlight XAML %}
<syncfusion:SfPdfViewer x:Name="pdfViewer"
                        FormFieldValueChanged="PdfViewer_FormFieldValueChanged"/>
{% endhighlight %}
{% endtabs %}

Handle the event in code:

{% tabs %}
{% highlight C# %}
private void PdfViewer_FormFieldValueChanged(object? sender, FormFieldValueChangedEventArgs? e)
{
    if (e != null && e.FormField is TextFormField textFormField)
    {
        // Read the previous and current values.
        string? oldText = e.OldValue?.ToString();
        string? newText = e.NewValue?.ToString();
    }
}
{% endhighlight %}
{% endtabs %}

N> The `OldValue` and `NewValue` types vary by field type. For a checkbox, cast them to `bool` to read the checked state. For a combo box or radio button, cast them to `string`.

## Detect focus and unfocus

The [FormFieldFocusChanged](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html#Syncfusion_Maui_PdfViewer_SfPdfViewer_FormFieldFocusChanged) event is raised when a text or signature field gains or loses focus. Use the `HasFocus` property to determine whether the field is being focused or unfocused.

Subscribe to the event in XAML:

{% tabs %}
{% highlight XAML %}
<syncfusion:SfPdfViewer x:Name="pdfViewer"
                        FormFieldFocusChanged="PdfViewer_FormFieldFocusChanged"/>
{% endhighlight %}
{% endtabs %}

Handle the event in code:

{% tabs %}
{% highlight C# %}
private void PdfViewer_FormFieldFocusChanged(object? sender, FormFieldFocusChangedEvenArgs? e)
{
    if (e != null)
    {
        FormField? field = e.FormField;
        bool hasFocus = e.HasFocus;
    }
}
{% endhighlight %}
{% endtabs %}

N> `FormFieldFocusChanged` is raised only for text and signature form fields.

## See Also

* [Form Filling Overview](https://help.syncfusion.com/maui/pdf-viewer/form-filling-overview)
* [Edit Form Fields](https://help.syncfusion.com/maui/pdf-viewer/form-filling-edit)
* [Form Data Validation](https://help.syncfusion.com/maui/pdf-viewer/form-filling-validation)
* [Form Fields Collection](https://help.syncfusion.com/maui/pdf-viewer/form-filling-collection)
