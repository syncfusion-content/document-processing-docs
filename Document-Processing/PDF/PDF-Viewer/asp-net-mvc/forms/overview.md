---
layout: post
title: Overview of Forms in MVC PDF Viewer Control | Syncfusion
description: Learn what the Form Designer in Syncfusion MVC PDF Viewer offers, supported field types, and how the topics are organized.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Overview of Forms in MVC PDF Viewer

The Syncfusion PDF Viewer delivers a complete, easy-to-use PDF forms experience. You can read, fill, add, edit, and delete form fields directly within your PDF documents. These actions are supported through both the intuitive user interface and powerful programmatic APIs.

The viewer also includes smooth import and export support for form data, making integration effortless. Developers benefit from extensive API control, while end users enjoy a clean and simple interface designed for a seamless and stress-free form-filling experience.

## Filling PDF Forms

Experience effortless PDF form filling through a clean, intuitive UI or automated workflows using powerful APIs. Flexible form data import and export support ensures smooth and efficient operations when working with PDF forms.

See the [Filling PDF Forms](./form-filling) page for full details.

Use the following ASP.NET MVC code-snippet to enable basic PDF Viewer rendering.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
    </div>

{% endhighlight %}
{% endtabs %}

![FormFilling](../../javascript-es6/images/FormFields.gif)

1. [Programmatically Form fill](./form-filling#fill-pdf-forms-programmatically)
2. [Form Fill Using UI](./form-filling#fill-pdf-forms-through-the-user-interface)
3. [Import the Form data](./form-filling#fill-pdf-forms-through-import-data)

## Form Designer

A built in Form Designer lets you quickly add, edit, move, and delete form fields in the PDF documents. This viewer allows you to design fillable PDF forms interactively either using the built-in form designer tools or building your own customized form designer tools.

See the [Form Designer](./form-designer) page for full details.

Use the following ASP.NET MVC code-snippet to enable the Form Designer rendering.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

    <div style="width:100%;height:600px">
        @Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/hive-succinctly.pdf").Render()
    </div>

{% endhighlight %}
{% endtabs %}

![FormDesigner](../../javascript-es6/images/FormDesigner.gif)

Create and customize interactive fields directly on the PDF page.
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), or [remove](./manage-form-fields/remove-form-fields) forms
- [Add a Signature Field](./manage-form-fields/create-form-fields#add-signature-field) 
- [Edit Form Field](./manage-form-fields/modify-form-fields)
- [Remove Form Field](./manage-form-fields/remove-form-fields) 
- [Form Field Constraints](./form-constrain) 

## Supported form field types

- [Textbox](../forms/manage-form-fields/create-form-fields#add-textbox)
- [Password](../forms/manage-form-fields/create-form-fields#add-password)
- [CheckBox](../forms/manage-form-fields/create-form-fields#add-checkbox)
- [RadioButton](../forms/manage-form-fields/create-form-fields#add-radiobutton)
- [ListBox](../forms/manage-form-fields/create-form-fields#add-listbox)
- [DropDown](../forms/manage-form-fields/create-form-fields#add-dropdown)
- [Signature field](../forms/manage-form-fields/create-form-fields#add-signature-field)
- [Initial field](../forms/manage-form-fields/create-form-fields#add-initial-field)