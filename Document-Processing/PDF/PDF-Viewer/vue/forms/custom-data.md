---
layout: post
title: Add custom data to form fields in Vue PDF Viewer | Syncfusion
description: Learn how to attach, update, and read custom data on PDF form fields using the Form Designer UI and APIs in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add Custom Data to PDF Form Fields in Vue PDF Viewer

The **Syncfusion Vue PDF Viewer** allows you to attach **custom application-specific data** to form fields by using the `customData` property. This enables you to associate business identifiers, tags, validation hints, or workflow metadata with form fields.

The custom data remains linked to the form field throughout the viewer session and can be accessed or updated whenever the field is queried or modified.

This page explains how to:
- [Add custom data when creating form fields](#add-custom-data-while-creating-pdf-form-fields)
- [Define default custom data for fields created using the UI](#set-default-custom-data-for-pdf-form-fields-added-using-ui)
- [Update or replace custom data for existing fields](#update-or-replace-pdf-form-field-custom-data)
- [Read custom data from form fields](#read-custom-data-from-pdf-form-fields)
- [Apply best practices when using custom data](#best-practices)

**Key Points**
- customData is a **free form object**; you control its structure.
- Use only **serializable values** such as objects, arrays, strings, numbers, and booleans.
- Custom data does not affect the field appearance or behavior unless consumed by your application logic.

## Add Custom Data While Creating PDF Form Fields

You can attach custom data at the time of field creation by passing a `customData` object in the settings parameter of `addFormField()`.

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
      const meta = { businessId: 'C-1024', tags: ['profile','kiosk'], requiredRole: 'admin' };
      pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'Email',
        bounds: { X: 146, Y: 229, Width: 200, Height: 24 },
        customData: meta
      });
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## Set Default Custom Data for PDF Form Fields Added Using UI

When users add form fields using the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar), you can define default `customData` so that newly created fields automatically inherit it. Default custom data can be configured using per-field settings objects such as:

- [textFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#textfieldsettings)
- [passwordFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#passwordfieldsettings)
- [checkBoxFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#checkboxfieldsettings)
- [radioButtonFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#radiobuttonfieldsettings)
- [listBoxFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#listboxfieldsettings)
- [dropDownFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#dropdownfieldsettings)
- [signatureFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#signaturefieldsettings)
- [initialFieldSettings](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#initialfieldsettings)

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
      // Example for textbox defaults
      pdfviewer.textFieldSettings = {
        name: 'Textbox',
        customData: { group: 'contact', createdBy: 'designer', requiredRole: 'user' }
      };

      // Example for checkbox defaults
      pdfviewer.checkBoxFieldSettings = {
        name: 'Checkbox',
        customData: { consentType: 'marketing', defaultChecked: false }
      };
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## Update or Replace PDF Form Field Custom Data

You can modify the `customData` of an existing form field by using the [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) method. The field can be identified using either its object reference or field ID.

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
      const fields = pdfviewer.retrieveFormFields();
      const target = fields.find((f) => f.name === 'Email');
      if (target) {
        const merged = Object.assign({}, target.customData || {}, { updatedAt: Date.now(), verified: true });
        pdfviewer.formDesignerModule.updateFormField(target, { customData: merged });
      }
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

**Tip:**
Merge new values with the existing customData object before calling [updateFormField()](https://ej2.syncfusion.com/documentation/api/pdfviewer/index-default#updateformfields) to avoid overwriting previously stored data.

## Read Custom Data from PDF Form Fields

You can access the customData property from any form field at any point in your application flow, such as:
- After the document is loaded
- During save or submit operations
- While performing validation or conditional routing

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
      const fields = pdfviewer.retrieveFormFields();
      fields.forEach((f) => {
        console.log('Field:', f.name, 'customData:', f.customData);
        if (f.customData && f.customData.requiredRole === 'admin') {
          // mark field for special handling
        }
      });
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## Best Practices

- Treat customData as application metadata, not display data.
- Use it to drive business rules, validation logic, and workflow decisions.
- Keep the data minimal and structured for easy processing.
- When cloning or copying form fields, ensure customData is copied or updated as required.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See Also

- [Form Designer overview](./overview)
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)
- [Create form fields](./overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form flags](./form-constrain)
- [Form validation](./form-validation)
- [Form fields API](./form-fields-api)