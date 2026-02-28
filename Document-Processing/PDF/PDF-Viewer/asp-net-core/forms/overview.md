---
layout: post
title: Overview of Forms in ASP.NET Core PDF Viewer | Syncfusion
description: Learn what the Form Designer in Syncfusion Core PDF Viewer offers, supported field types, and how the topics are organized.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Overview of Forms in ASP.NET Core PDF Viewer

The Syncfusion PDF Viewer provides a complete, easy-to-use PDF forms experience. Form fields can be read, filled, added, edited, and deleted directly within PDF documents through the intuitive UI and powerful programmatic APIs. The viewer includes smooth import and export support for form data, enabling effortless integration. Developers gain extensive API control while end users enjoy a clean interface for seamless form-filling.

## Filling PDF Forms

PDF forms can be filled effortlessly through a clean, intuitive UI or automated workflows via powerful APIs. Flexible form data import and export support ensures smooth operations.

See the [Filling PDF Forms](./form-filling) page for full details.

Use the following code-snippet to enable form-filling by using the ASP.NET Core `ejs-pdfviewer` markup.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

![FormFilling](../../javascript-es6/images/FormFields.gif)

1. [Programmatically Form fill](./form-filling#fill-pdf-forms-programmatically)
2. [Form Fill Using UI](./form-filling#fill-pdf-forms-through-the-user-interface)
3. [Import the Form data](./form-filling#fill-pdf-forms-through-import-data)

## Form Designer

A built-in Form Designer enables quick addition, editing, moving, and deletion of form fields. PDF forms can be designed interactively using built-in tools or customized form designer solutions.

See the [Form Designer](./form-designer) page for full details.

Use the following Code-snippet to enable Form Designer using the ASP.NET Core `ejs-pdfviewer` markup.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

![FormDesigner](../../javascript-es6/images/FormDesigner.gif)

Interactive fields can be created and customized directly on the PDF page.
- [Create](./manage-form-fields/create-form-fields), [edit](./manage-form-fields/modify-form-fields), or [remove](./manage-form-fields/remove-form-fields) forms
- [Add signature fields](./manage-form-fields/create-form-fields#add-signature-field)
- [Edit form fields](./manage-form-fields/modify-form-fields)
- [Remove form fields](./manage-form-fields/remove-form-fields)
- [Form field constraints](./form-constrain) 

## Supported form field types

- [Textbox](../forms/manage-form-fields/create-form-fields#add-textbox)
- [Password](../forms/manage-form-fields/create-form-fields#add-password)
- [CheckBox](../forms/manage-form-fields/create-form-fields#add-checkbox)
- [RadioButton](../forms/manage-form-fields/create-form-fields#add-radiobutton)
- [ListBox](../forms/manage-form-fields/create-form-fields#add-listbox)
- [DropDown](../forms/manage-form-fields/create-form-fields#add-dropdown)
- [Signature field](../forms/manage-form-fields/create-form-fields#add-signature-field)
- [Initial field](../forms/manage-form-fields/create-form-fields#add-initial-field)