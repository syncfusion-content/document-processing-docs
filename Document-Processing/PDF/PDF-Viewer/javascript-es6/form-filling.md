---
layout: post
title: Form filling in TypeScript PDF Viewer | Syncfusion
description: Learn how to view, fill, export, and import PDF form fields using the Syncfusion TypeScript PDF Viewer, including disabling interaction and working with signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form filling in TypeScript PDF Viewer

The PDF Viewer displays existing form fields in a PDF and enables users to fill, validate, and download the filled data.

The PDF Viewer supports the following form field types:

* Text box
* Password
* Check box
* Radio button
* List box
* Dropdown
* Signature field
* Initial field

![Form filling in TypeScript PDF Viewer](./images/form-filling.png)

## Disabling form fields

The PDF Viewer provides an option to disable interaction with form fields. Use the following configuration to disable form fields in the viewer.

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

## Add a handwritten signature to a signature field

Add a handwritten signature to a signature field by following these steps:

* Click the signature field in the PDF document to open the signature panel.

![Signature field in TypeScript PDF Viewer](./images/form-filling-signature.png)

* Draw the signature in the signature panel.

![Signature panel in TypeScript PDF Viewer](./images/form-filling-signature-dialog.png)

* Select **CREATE**. The drawn signature is added to the signature field.

![Signature added in TypeScript PDF Viewer](./images/form-filling-signature-signed.png)

## Delete a signature from a signature field

Delete a signature placed in a signature field by using the Delete option in the annotation toolbar.

![Deleting a signature in TypeScript PDF Viewer](./images/form-filling-signature-del.png)

## Export and import form fields

The PDF Viewer supports exporting and importing form field data using the `importFormFields`, `exportFormFields`, and `exportFormFieldsAsObject` methods. The following formats are supported:

* FDF
* XFDF
* JSON

For more information, see the [Form fields documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/form-designer/create-programmatically#export-and-import-form-fields).

## See also

* [Handwritten signature in TypeScript PDF Viewer](./annotations/signature-annotation)
* [Form Designer events](./form-designer/form-field-events)
