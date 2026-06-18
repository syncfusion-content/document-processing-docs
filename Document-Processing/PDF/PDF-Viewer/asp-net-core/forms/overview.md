---
layout: post
title: Overview of Forms in ASP.NET Core PDF Viewer | Syncfusion
description: Learn what the Form Designer in Syncfusion Core PDF Viewer offers, supported field types, and how the topics are organized.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Overview of Forms in ASP.NET Core PDF Viewer


The Syncfusion ASP .Net Core PDF Viewer delivers a complete, easy-to-use PDF forms experience. Users can read, fill, add, edit, and delete form fields directly within PDF documents through the viewer UI or programmatically via the ASP .Net Core APIs.

The viewer includes import and export support for form data, simplifying integration with backend systems. Developers have fine-grained API control while end users interact with a streamlined form-filling interface.

Check out the following video to learn how to use the Form Fields in the ASP .Net Core PDF Viewer.
{% youtube "https://www.youtube.com/watch?v=MUWTCg1MoAE" %}

## Filling PDF Forms

Experience effortless PDF form filling through a clean, intuitive UI or automated workflows using powerful APIs. Flexible form data import and export support ensures smooth and efficient operations when working with PDF forms.

See the [Filling PDF Forms](./form-filling) page for full details.

Use the following code-snippet to enable form-filling by injecting `FormFields` Module.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
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

Use the following Code-snippet to enable Form Designer by injecting `FormDesigner` Module.
{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib" documentPath="https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf">
    </ejs-pdfviewer>
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