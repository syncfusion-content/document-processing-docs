---
layout: post
title: Overview of Forms in Vue PDF Viewer Control | Syncfusion
description: Learn what the Form Designer in Syncfusion Vue PDF Viewer offers, supported field types, and how the topics are organized.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Overview of Forms in Vue PDF Viewer

The Syncfusion PDF Viewer provides a full-featured PDF forms experience for Vue applications. Users can read, fill, add, edit, and remove form fields in PDF documents using the viewer's UI or programmatic APIs.

Flexible import and export of form data simplifies integration in automated workflows or user-driven scenarios. APIs offer developers control over form behavior while the viewer presents a concise, accessible interface for end users.

## Filling PDF Forms

Use the viewer UI or APIs to fill PDF forms, import/export form data, or integrate automated form workflows.

See the [Filling PDF Forms](./form-filling) page for full details.

Use the following code-snippet to enable form-filling by injecting the `FormFields` module.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>
{% endhighlight %}
{% endtabs %}

![FormFilling](../../javascript-es6/images/FormFields.gif)

1. [Programmatically Form fill](./form-filling#fill-pdf-forms-programmatically)
2. [Form Fill Using UI](./form-filling#fill-pdf-forms-through-the-user-interface)
3. [Import the Form data](./form-filling#fill-pdf-forms-through-import-data)

## Form Designer

A built-in Form Designer enables creating, positioning, and editing form fields directly on the PDF page. Use the built-in designer tools for common tasks or extend them to build a customized form-design workflow.

See the [Form Designer](./form-designer) page for full details.

Use the following Code-snippet to enable Form Designer by injecting `FormDesigner` Module.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>
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