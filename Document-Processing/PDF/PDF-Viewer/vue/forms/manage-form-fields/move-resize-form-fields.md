---
layout: post
title: Move and Resize form fields in the Vue PDF Viewer | Syncfusion
description: Learn how to move and resize PDF form fields using the UI and programmatically with APIs in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Move and Resize PDF Form Fields in Vue
- **Move**: Drag the form field to reposition it.
- **Resize**: Use the resize handles to change width and height.

![Moveing and Resizing a form field](../../../javascript-es6/images/move-resize-forms.gif)

## Move and Resize Fields Programmatically (API)
You can set absolute bounds or move fields by a delta.

**Set absolute bounds**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="resizeMove">Resize and Move FormFields</button>
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
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    };
  },
  methods: {
    resizeMove() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // Retrieve form fields collection
      const fields = pdfviewer.retrieveFormFields();
      // Find the textbox field by name (Here field name is First Name)
      const field = fields.find(f => f.name === 'First Name') || fields[0];
      if (field) {
        // Update bounds to move or resize form fields
        pdfviewer.formDesignerModule.updateFormField(field, {
          bounds: { X: 140, Y: 210, Width: 220, Height: 24 }, // new absolute position & size
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](./create-form-fields)
- [Remove form Fields](./remove-form-fields)
- [Customize form fields](./customize-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)