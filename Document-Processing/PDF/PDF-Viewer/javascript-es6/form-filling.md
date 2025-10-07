---
layout: post
title: Form filling in Typescript PDF Viewer control | Syncfusion
description:  Learn how to view, fill, export, and import PDF form fields with Typescript PDF Viewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Form filling in TypeScript PDF Viewer Component

The PDF Viewer component displays existing form fields in a PDF document and enables filling and downloading filled data.

The form fields displayed in the Pdf Viewer are:

* Textbox
* Password
* CheckBox
* RadioButton
* ListBox
* DropDown
* SignatureField
* InitialField

![Form filling in Typescript](./images/form-filling.png)

## Disabling form fields

The PDF Viewer control provides an option to disable interaction with form fields. Use the following configuration to disable form fields in the viewer.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

import { PdfViewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject(Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner);

let pdfviewer: PdfViewer = new PdfViewer();
pdfviewer.documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
pdfviewer.resourceUrl = "https://cdn.syncfusion.com/ej2/31.1.17/dist/ej2-pdfviewer-lib";
pdfviewer.enableFormDesigner = false;
pdfviewer.appendTo('#PdfViewer');

{% endhighlight %}
{% endtabs %}

## How to draw handwritten signature in the signature field

Add a handwritten signature to a Signature field by following these steps:

* Click the signature field in the PDF document to open the signature panel.

![Signature field in TypeScript PdfViewer](./images/form-filling-signature.png)

* Draw the signature in the signature panel.

![Displaying signature panel in TypeScript PdfViewer](./images/form-filling-signature-dialog.png)

* Click the **CREATE** button. The drawn signature is added to the signature field.

![Displaying signature in TypeScript PdfViewer](./images/form-filling-signature-signed.png)

## Delete the signature inside the signature field

Delete a signature placed in a signature field by using the Delete option in the annotation toolbar.

![Deleting signature in TypeScript PdfViewer](./images/form-filling-signature-del.png)

## Export and import form fields

The PDF Viewer control provides the support to export and import the form field data in the following formats using the `importFormFields`, `exportFormFields`, and `exportFormFieldsAsObject` methods.

* FDF
* XFDF
* JSON

For detailed information about exporting and importing form fields, please refer to the [Form Fields documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/form-designer/create-programmatically#export-and-import-form-fields).

## See also

* [Handwritten Signature in TypeScript PDF Viewer Component](./annotations/signature-annotation)
* [Form Designer](./form-designer/form-field-events)