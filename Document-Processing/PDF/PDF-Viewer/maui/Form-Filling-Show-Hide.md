---
layout: post
title: Show and Hide Form Fields in .NET MAUI PDF Viewer | Syncfusion
description: Learn how to show and hide form fields in a PDF document using the Syncfusion<sup>®</sup> .NET MAUI PDF Viewer (SfPdfViewer) control.
platform: document-processing
control: SfPdfViewer
documentation: ug
keywords: .net maui pdf viewer, .net maui view pdf, pdf viewer in .net maui, .net maui open pdf, maui pdf viewer, maui pdf view
---

# Show and Hide Form Fields in .NET MAUI PDF Viewer (SfPdfViewer)

The [SfPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.PdfViewer.SfPdfViewer.html) allows you to control the visibility of form fields using the `IsHidden` property. This is useful when you need to hide fields containing confidential data before sharing or presenting a document, or to reduce visual clutter in forms with many fields.

N> * Hiding and showing form fields supports undo and redo.
N> * A form field that is locked cannot be hidden.
N> * Hidden form fields remain hidden during import, export, printing, and saving.

## Hide all form fields

To hide all form fields at once — for example, when presenting a document in view-only mode — set the `IsHidden` property to `true` for every field in the collection.

{% tabs %}
{% highlight C# %}
foreach (FormField formField in PdfViewer.FormFields)
{
    formField.IsHidden = true;
}
{% endhighlight %}
{% endtabs %}

To show all form fields again, set `IsHidden` to `false` for each field.

{% tabs %}
{% highlight C# %}
foreach (FormField formField in PdfViewer.FormFields)
{
    formField.IsHidden = false;
}
{% endhighlight %}
{% endtabs %}

## Hide a specific form field

You can hide a specific form field by retrieving it from the collection and setting its `IsHidden` property. The following example hides a text form field named `"name"`.

{% tabs %}
{% highlight C# %}
FormField formField = PdfViewer.FormFields.Where(x => x.Name == "name").FirstOrDefault();

if (formField is TextFormField nameTextBox)
{
    // Hide the text box field.
    nameTextBox.IsHidden = true;
}
{% endhighlight %}
{% endtabs %}

To show the field again, set `IsHidden` to `false`.

{% tabs %}
{% highlight C# %}
if (formField is TextFormField nameTextBox)
{
    nameTextBox.IsHidden = false;
}
{% endhighlight %}
{% endtabs %}

## See Also
- [Form Filling Overview](../form-filling-overview)
- [Form Fields Collection](../form-filling-collection)
- [Customize Form Fields](../form-filling-customization)
- [Lock and Unlock Annotations](../lock-unlock)
