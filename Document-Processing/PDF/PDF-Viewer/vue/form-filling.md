---
layout: post
title: Form filling in Vue PDF Viewer | Syncfusion
description: Learn how to view, fill, export, and import PDF form fields using the Syncfusion Vue PDF Viewer, including disabling interaction and working with signatures.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Form filling in Vue PDF Viewer

The PDF Viewer displays existing form fields in a PDF document and enables users to interact with, validate, and export form data. Users can fill text inputs, select options, and add handwritten signatures directly within the viewer.

## Supported Form Field Types

The PDF Viewer supports the following form field types:

* Text box
* Password
* Check box
* Radio button
* List box
* Dropdown
* Signature field
* Initial field

![Form filling in Vue PDF Viewer](./images/form-filling.png)

## Disabling form fields

The PDF Viewer provides an option to prevent users from interacting with form fields. This is useful for read-only mode or when form fields should be displayed but not editable. Set the `enableFormDesigner` property to `false` to disable form field interaction:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer"
                   :documentPath="documentPath"
                   :resourceUrl="resourceUrl"
                   :enableFormDesigner="false">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
  TextSelection, TextSearch, FormFields, FormDesigner]);

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer"
                   :documentPath="documentPath"
                   :resourceUrl="resourceUrl"
                   :enableFormDesigner="false">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
  ThumbnailView, BookmarkView, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, ThumbnailView, BookmarkView,
      TextSelection, TextSearch, FormFields, FormDesigner]
  }
};

</script>

{% endhighlight %}
{% endtabs %}

### Adding a Handwritten Signature

To add a handwritten signature to a signature field:

1. Click the signature field in the PDF document to open the signature panel.

![Signature field in Vue PDF Viewer](./images/form-filling-signature.png)

2. Draw the signature in the signature panel using your mouse or touchpad.

![Signature panel in Vue PDF Viewer](./images/form-filling-signature-dialog.png)

3. Click the **CREATE** button to apply the signature to the field.

![Signature added in Vue PDF Viewer](./images/form-filling-signature-signed.png)

### Removing a Signature

To remove a signature from a signature field, click the Delete option in the annotation toolbar while the signature field is selected.

![Deleting a signature in Vue PDF Viewer](./images/form-filling-signature-del.png)

## Exporting and Importing Form Field Data

The PDF Viewer provides methods to export filled form data and import previously saved data back into forms. This enables users to save their progress and restore it later.

### Supported Export/Import Formats

* FDF
* XFDF
* JSON

### Export Methods

The PDF Viewer provides the following export methods:

- `exportFormFields()` – Exports form data in the specified format (FDF, XFDF, or JSON)
- `exportFormFieldsAsObject()` – Exports form data directly as a JavaScript object for programmatic use

### Import Method

- `importFormFields()` – Imports previously exported form data into the current form

For detailed code examples and API reference, see the [Form fields documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/form-designer/create-programmatically#export-and-import-form-fields).

## See also

* [Handwritten signature in Vue PDF Viewer](./annotations/signature-annotation)
* [Form Designer events](./form-designer/form-field-events)
