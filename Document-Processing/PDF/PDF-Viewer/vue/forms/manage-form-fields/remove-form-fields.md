---
layout: post
title: Remove form fields in the Vue PDF Viewer | Syncfusion
description: Learn how to remove PDF form fields using the UI and programmatically in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Remove PDF Form Fields from a PDF in Vue

## Remove Form Fields Using the UI
**Steps:**
1.	Enable **Form Designer mode**.
2.	Select the form field.
3.	Click **Delete** in the toolbar or press the **Delete** key.
![Form Designer toolbar with Delete icon](../../../javascript-es6/images/ui-del-formfields.png)

## Remove Form Fields Programmatically
Use **deleteFormField()** with a field reference or ID.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="deleteAllFields">Delete Form Fields</button>
    <button @click="deleteById">Delete First Field By ID</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" style="height:640px" />
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
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  provide: { PdfViewer: [Toolbar, Magnification, Navigation, Annotation, TextSelection, TextSearch, FormFields, FormDesigner, PageOrganizer] },
  data() {
    return {
      documentPath:'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    deleteAllFields() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const fields = [...pdfviewer.formFieldCollections]; // clone to avoid mutation issues
      fields.forEach(field => pdfviewer.formDesignerModule.deleteFormField(field));
    },
    deleteById() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      if (pdfviewer.formFieldCollections.length > 0) {
        const id = pdfviewer.formFieldCollections[0].id;
        if (id) {
          pdfviewer.formDesignerModule.deleteFormField(id);
        }
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Modify form fields](./modify-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)