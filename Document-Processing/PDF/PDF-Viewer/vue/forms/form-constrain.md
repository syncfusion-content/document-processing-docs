---
layout: post
title: PDF form field flags in the Vue PDF Viewer | Syncfusion
description: Learn how to apply isReadOnly, isRequired, and isPrint flags to PDF form fields in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# PDF form field flags in Vue PDF Viewer

The Syncfusion **Vue PDF Viewer** allows you to control how users interact with form fields and how those fields behave during validation and printing by applying **form field flags**. These flags define whether a form field can be modified, whether it is mandatory, and whether it appears in printed output.

This topic explains:
- [Supported form field flags](#supported-pdf-form-field-flags)
- [How each constraint affects field behavior](#key-actions)
- [How to apply flags during field creation](#apply-pdf-form-field-flags-using-the-ui)
- [How to update flags on existing fields](#update-flags-on-existing-fields-programmatically)
- [How flags work with validation and printing](#control-print-behavior)

## Supported PDF Form Field Flags

The following flags are supported in the PDF Viewer:

- [isReadOnly](#make-fields-read-only)  
  Prevents users from modifying the form field in the UI while still allowing updates through APIs.

- [isRequired](#mark-fields-as-required)  
  Marks the form field as mandatory and includes it in form field validation.

- [isPrint](#control-print-behavior)  
  Controls whether the form field appears when the document is printed.

## Key Actions

### Make Fields Read Only
Use the **isReadOnly** property to prevent users from modifying a form field through the UI. This is useful for displaying pre filled or calculated values that should not be changed by the user.

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
      // Read-only Textbox
      pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
        isReadOnly: true,
        value: 'EMP-0001'
      });

      // Read-only Signature field
      pdfviewer.formDesignerModule.addFormField('SignatureField', {
        name: 'ApplicantSign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
        isReadOnly: true,
        tooltip: 'Sign to accept the terms'
      });
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

### Mark Fields as Required
Use the **isRequired** property to mark form fields as mandatory. To enforce this constraint, enable form field validation and validate fields before allowing actions such as printing or downloading.

- Enable validation using [enableFormFieldsValidation](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#enableformfieldsvalidation)
- [Validate fields](./form-validation) using [validateFormFields()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#validateformfields) 

If required fields are empty, validation can prevent further actions.

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
      // 1) Default for new Textbox fields
      pdfviewer.textFieldSettings = { isRequired: true };

      // 2) Validation wiring
      pdfviewer.enableFormFieldsValidation = true;
      pdfviewer.validateFormFields = (args) => {
        if (args && args.formField && args.formField.length > 0) {
          alert('Please fill all required fields. Missing: ' + args.formField[0].name);
        }
      };

      // 3) Creation (add a Textbox form field)
      pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'Email',
        bounds: { X: 146, Y: 260, Width: 220, Height: 24 },
        isRequired: true,
        tooltip: 'Email is required'
      });
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

### Control Print Behavior
Use the **isPrint** property to control whether a form field appears in the printed output of the PDF document.

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
      // 1) Default for new signature fields
      pdfviewer.signatureFieldSettings = { isPrint: false };

      // 2) Creation (do not print a signature field)
      pdfviewer.formDesignerModule.addFormField('SignatureField', {
        name: 'ApplicantSign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
        isPrint: false
      });

      // 3) Update existing field (toggle to print)
      const sign = pdfviewer.formFieldCollections.find(f => f.name === 'ApplicantSign');
      if (sign) {
        pdfviewer.formDesignerModule.updateFormField(sign, { isPrint: true });
      }
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

N> Printing can be triggered programmatically using **pdfviewer.print()**. Form fields with **isPrint: false** are excluded from the printed output.

## Apply PDF Form Field Flags Using the UI

**Steps**
1. Enable **Form Designer** mode in the PDF Viewer.  
2. Select an existing form field on the PDF page.  
3. The **Right click To open context menu - > Properties** popover is displayed.
4. Configure the required constraint options.  
5. Click “Ok” and Close the properties popover to apply the changes.  

Changes are reflected immediately in the viewer.

[Applying form field flags using the UI](../../javascript-es6/images/formfields-flag.gif) 

## Apply PDF Form Field Flags Programmatically

You can apply or modify form field flags in the following ways.

### Apply flags When Creating Fields
Pass the flags properties in the settings object when creating form fields using **addFormField()**.
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
      // Read-only Textbox that is printed but not required
      pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'EmployeeId',
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 },
        isReadOnly: true,
        isRequired: false,
        isPrint: true,
        value: 'EMP-0001'
      });

      // Required Signature field that is not included in print
      pdfviewer.formDesignerModule.addFormField('SignatureField', {
        name: 'ApplicantSign',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
        isReadOnly: false,
        isRequired: true,
        isPrint: false,
        tooltip: 'Sign to accept the terms'
      });
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

### Update flags on Existing Fields programmatically
Use the [updateFormField()](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#updateformfields) method to modify constraint values on existing form fields.

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
      // Add a sample textbox
      pdfviewer.formDesignerModule.addFormField('Textbox', {
        name: 'Email',
        bounds: { X: 146, Y: 260, Width: 220, Height: 24 }
      });

      // Retrieve it and update constraint flags
      const field = pdfviewer.formFieldCollections.find(f => f.name === 'Email');
      if (field) {
        pdfviewer.formDesignerModule.updateFormField(field, {
          isReadOnly: false,
          isRequired: true,
          isPrint: true,
          tooltip: 'Enter a valid email'
        });
      }
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

### Set Default Flags for New PDF Form Fields
You can configure default flag values so that form fields added using the [Form Designer toolbar](../toolbar-customization/form-designer-toolbar) automatically inherit them. This helps ensure consistent behavior for all newly created fields.

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
      // Textbox fields will be editable, required, and included in print by default
      pdfviewer.textFieldSettings = {
        isReadOnly: false,
        isRequired: true,
        isPrint: true,
        tooltip: 'Required field'
      };

      // Signature fields will be optional and hidden when printing
      pdfviewer.signatureFieldSettings = {
        isReadOnly: false,
        isRequired: false,
        isPrint: false,
        tooltip: 'Sign if applicable'
      };
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## See Also

- [Form Designer overview](./overview)  
- [Form Designer Toolbar](../toolbar-customization/form-designer-toolbar)  
- [Create form fields](./manage-form-fields/create-form-fields)  
- [Modify form fields](./manage-form-fields/modify-form-fields)  
- [Group form fields](./group-form-fields)  
- [Add custom data to PDF form fields](./custom-data)  
- [Form Validation](./form-validation)  
- [Form fields API](./form-fields-api)