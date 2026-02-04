---
layout: post
title: Customize form fields in the Vue PDF Viewer | Syncfusion
description: Learn how to customize PDF form fields using the UI and programmatically with APIs in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the appearance of PDF Form Fields in Vue PDF Viewer

**Styling** customizes appearance only (font, color, alignment, border, background, indicator text).

## Customize Appearance of Form Fields Using the UI
Use the **Properties** panel to adjust:
- Font family/size, text color, alignment
- Border color/thickness
- Background color
![Textbox style from UI](../../../javascript-es6/images/ui-textbox-style.png)

## Customize appearance Form Fields Programmatically
Use [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) to apply styles.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="updateTextboxStyle">Update Textbox Style</button>
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
    updateTextboxStyle() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // Retrieve form fields collection
      const fields = pdfviewer.retrieveFormFields();
      // Find the textbox field by name
      const tb = fields.find(f => f.name === 'First Name') || fields[0];
      if (tb) {
        // Update textbox field styling
        pdfviewer.formDesignerModule.updateFormField(tb, {
          value: 'John',
          fontFamily: 'Courier',
          fontSize: 12,
          fontStyle: 'None',
          color: 'black',
          borderColor: 'black',
          backgroundColor: 'white',
          alignment: 'Left',
          thickness: 2
        });
      }
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Set Default Styles for New Form Fields
Define defaults so fields added from the toolbar inherit styles.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl" @documentLoad="onDocumentLoad" style="height:640px" />
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
    onDocumentLoad() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // Apply defaults for Textbox added from toolbar
      pdfviewer.textFieldSettings = {
        name: 'Textbox',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Textbox',
        thickness: 4,
        value: 'Textbox',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: 'White',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false
      };
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
- [Remove form fields](./remove-form-fields)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)
