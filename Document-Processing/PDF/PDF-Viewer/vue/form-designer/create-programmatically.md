---
layout: post
title: Create form fields in the Vue PDF Viewer component | Syncfusion
description: Learn how to add, update, delete, save, print, validate, and import/export form fields in the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Create programmatically in Vue PDF Viewer component

The PDF Viewer component provides options to add, edit, and delete form fields. The supported form field types are:

- Textbox
- Password
- CheckBox
- RadioButton
- ListBox
- DropDown
- Signature field
- Initial field

## Add a form field to PDF document programmatically

Use the addFormField method to add form fields programmatically. Pass the form field type and the corresponding property object as parameters. The following example demonstrates adding multiple fields on document load.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
  viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
  viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
  viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
  viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/addformfield-cs1/index.html" %}

## Edit or update form field programmatically

Use the updateFormField method to modify a form field programmatically. Retrieve the target field from the formFieldCollections property (by object or ID) and pass it as the first parameter. Provide the properties to update as the second parameter. The following example updates the background color of a Textbox field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
  viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
  viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
  viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
  viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.updateFormField(viewer.formFieldCollections[0], { backgroundColor: 'red' });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },

  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.updateFormField(viewer.formFieldCollections[0], { backgroundColor: 'red' });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/updateformfield-cs1/index.html" %}

## Delete form field programmatically

Use the deleteFormField method to remove a form field programmatically. Retrieve the target field from the formFieldCollections property (by object or ID) and pass it to deleteFormField. The following example deletes the first form field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
  viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
  viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
  viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
  viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
  viewer.formDesignerModule.deleteFormField(viewer.formFieldCollections[0]);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :resourceUrl="resourceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "First Name", bounds: { X: 146, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField("Textbox", { name: "Middle Name", bounds: { X: 338, Y: 229, Width: 150, Height: 24 } });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'Last Name', bounds: { X: 530, Y: 229, Width: 150, Height: 24 }, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 148, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('RadioButton', { bounds: { X: 292, Y: 289, Width: 18, Height: 18 }, name: 'Gender', isSelected: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Month', bounds: { X: 146, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Date', bounds: { X: 193, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOB Year', bounds: { X: 242, Y: 320, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Agree', bounds: { X: 148, Y: 408, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('InitialField', { name: 'Do Not Agree', bounds: { X: 148, Y: 466, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Text Message', bounds: { X: 56, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Email', bounds: { X: 242, Y: 664, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Appointment Reminder', bounds: { X: 56, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Request for Customerservice', bounds: { X: 56, Y: 778, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('CheckBox', { name: 'Information Billing', bounds: { X: 290, Y: 740, Width: 20, Height: 20 }, isChecked: false, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Email', bounds: { X: 146, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'My Phone', bounds: { X: 482, Y: 850, Width: 200, Height: 24 }, });
      viewer.formDesignerModule.addFormField('SignatureField', { name: 'Sign', bounds: { X: 57, Y: 923, Width: 200, Height: 43 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Month', bounds: { X: 386, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Date', bounds: { X: 434, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.addFormField('Textbox', { name: 'DOS Year', bounds: { X: 482, Y: 923, Width: 35, Height: 24 }, });
      viewer.formDesignerModule.deleteFormField(viewer.formFieldCollections[0]);
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.vue file, include the following `serviceUrl`:
**serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/deleteformfield-cs1/index.html" %}

## Saving the form fields

Selecting the Download icon on the toolbar saves the form fields in the exported PDF without modifying the original document. See the following GIF for reference.

![Alt text](../images/saveformfield.gif)

You can invoke the download action using the following code snippet.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const downloadClicked = function (args) {
  pdfviewer.value.ej2Instances.download();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    downloadClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.download();
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const downloadClicked = function (args) {
  pdfviewer.value.ej2Instances.download();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    downloadClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.download();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Printing the form fields

Selecting the Print icon on the toolbar prints the PDF with the added form fields. This action does not modify the original document. See the following GIF for reference.

![Alt text](../images/printformfield.gif)

You can invoke the print action using the following code snippet:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="printClicked">Print</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const printClicked = function () {
  this.$refs.pdfviewer.ej2Instances.print.print();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="printClicked">Print</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    printClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.print.print();
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="printClicked">Print</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const printClicked = function () {
  pdfviewer.value.ej2Instances.print.print();
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="printClicked">Print</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
  "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    printClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.print.print();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Open the existing PDF document

Open a PDF that already contains form fields by clicking the Open icon on the toolbar. See the following GIF for reference.

![Open a PDF with existing form fields](../images/openexistingpdf.gif)

## Validate form fields

Form fields are validated when enableFormFieldsValidation is set to true and the validateFormFields event is handled. The event triggers during download or print if required fields are not filled. The non-filled fields are available in the nonFillableFields property of the event arguments.

Add the following code to validate form fields:

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :enableFormFieldsValidation="true" :validateFormFields="validateFormFields">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 70, Y: 229, Width: 150, Height: 24 } });
}
const validateFormFields = function (args) {
  var nonfilledFormFields = args.nonFillableFields
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad"
      :enableFormFieldsValidation="true" :validateFormFields="validateFormFields">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 70, Y: 229, Width: 150, Height: 24 } });
    },
    validateFormFields: function (args) {
      var nonfilledFormFields = args.nonFillableFields
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad" :enableFormFieldsValidation="true" :validateFormFields="validateFormFields">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 70, Y: 229, Width: 150, Height: 24 } });
}
const validateFormFields = function (args) {
  var nonfilledFormFields = args.nonFillableFields
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad" :enableFormFieldsValidation="true" :validateFormFields="validateFormFields">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 70, Y: 229, Width: 150, Height: 24 } });
    },
    validateFormFields: function (args) {
      var nonfilledFormFields = args.nonFillableFields
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';

#pdfViewer {
  height: 640px;
}
</style>

{% endhighlight %}
{% endtabs %}

## Export and import form fields

The PDF Viewer component supports exporting and importing form field data using the `importFormFields`, `exportFormFields`, and `exportFormFieldsAsObject` methods in the following formats:

- FDF
- XFDF
- JSON
- XML

### Export and import as FDF

Using the `exportFormFields` method, the form field data can be exported in the specified data format. This method accepts two parameters:

* The first one must be the destination path for the exported data. If the path is not specified, it will ask for the location while exporting.
* The second parameter should be the format type of the form data.

The following example exports and imports form field data as FDF.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportFdf">Export FDF</button>
    <button v-on:click="importFdf">Import FDF</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Export FDF button click.
const exportFdf = function () {
  // Data must be the desired path for the exported document.
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportFormFields('Data', FormFieldDataFormat.Fdf);
}

// Event triggers on the Import FDF button click.
const importFdf = function () {
  const viewer = pdfviewer.value.ej2Instances;
  // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
  viewer.importFormFields('File', FormFieldDataFormat.Fdf);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportFdf">Export FDF</button>
    <button v-on:click="importFdf">Import FDF</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Export FDF button click.
    exportFdf: function () {
      // Data must be the desired path for the exported document.
      const  viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportFormFields('Data', FormFieldDataFormat.Fdf);
    },

    // Event triggers on the Import FDF button click.
    importFdf: function () {
      const  viewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File', FormFieldDataFormat.Fdf);
    },
  }
}

</script>

{% endhighlight %}
{% endtabs %}

### Export and import as XFDF

The following example exports and imports form field data as XFDF.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportXfdf">Export XFDF</button>
    <button v-on:click="importXfdf">Import XFDF</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Export XFDF button click.
const exportXfdf = function () {
  // Data must be the desired path for the exported document.
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportFormFields('Data', FormFieldDataFormat.Xfdf);
}

// Event triggers on the Import XFDF button click.
const importXfdf = function () {
  const viewer = pdfviewer.value.ej2Instances;
  // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
  viewer.importFormFields('File', FormFieldDataFormat.Xfdf);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportXfdf">Export XFDF</button>
    <button v-on:click="importXfdf">Import XFDF</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },

  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
    ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Export XFDF button click.
    exportXfdf: function () {
      // Data must be the desired path for the exported document.
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportFormFields('Data', FormFieldDataFormat.Xfdf);
    },

    // Event triggers on the Import XFDF button click.
    importXfdf: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File', FormFieldDataFormat.Xfdf);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### Export and import as JSON

The following example exports and imports form field data as JSON.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportJson">Export JSON</button>
    <button v-on:click="importJson">Import JSON</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Export JSON button click.
const exportJson = function () {
  // Data must be the desired path for the exported document.
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportFormFields('Data', FormFieldDataFormat.Json);
}

// Event triggers on the Import JSON button click.
const importJson = function () {
  const viewer = pdfviewer.value.ej2Instances;
  // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
  viewer.importFormFields('File', FormFieldDataFormat.Json);
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportJson">Export JSON</button>
    <button v-on:click="importJson">Import JSON</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Export JSON button click.
    exportJson: function () {
      // Data must be the desired path for the exported document.
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportFormFields('Data', FormFieldDataFormat.Json);
    },

    // Event triggers on the Import JSON button click.
    importJson: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File', FormFieldDataFormat.Json);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

### Export and import as Object

The PDF Viewer component supports exporting the form field data as an object and importing that data back into the current PDF document.

The following code shows how to export the form field data as an object and import the form field data from that object into the current PDF document via a button click.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportDataAsObject">Export Object</button>
    <button v-on:click="importData">Import Data</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';

let exportedData;

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Export Object button click.
    exportDataAsObject: function (args) {
      // Export the form fields data to an FDF object.
      exportedData = this.$refs.pdfviewer.ej2Instances.exportFormFieldsAsObject(FormFieldDataFormat.Fdf);
      //// Export the form fields data to an XFDF object.
      //exportedData = viewer.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf);
      //// Export the form fields data to an JSON object.
      //exportedData = viewer.exportFormFieldsAsObject(FormFieldDataFormat.Json);
    },

    // Event triggers on the Import Data button click.
    importData: function (args) {
      // Import the form fields data from the FDF object into the current PDF document.
      this.$refs.pdfviewer.ej2Instances.importFormFields(exportedData, FormFieldDataFormat.Fdf);
      //// Import the form fields data from the XFDF object into the current PDF document.
      //viewer.importFormFields(exportedData, FormFieldDataFormat.Xfdf);
      //// Import the form fields data from the JSON object into the current PDF document.
      //viewer.importFormFields(exportedData, FormFieldDataFormat.Json);
    },

  }
}
</script>
{% endhighlight %}
{% endtabs %}

### Export and import as XML

The following example exports and imports form field data as XML.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportXml">Export XML</button>
    <button v-on:click="importXml">Import XML</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/form-designer.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Export XML button click.
const exportXml = function () {
  // Data must be the desired path for the exported document.
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportFormFields('Data', FormFieldDataFormat.Xml);
}

// Event triggers on the Import XML button click.
const importXml = function () {
  const viewer = pdfviewer.value.ej2Instances;
  // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
  viewer.importFormFields('File', FormFieldDataFormat.Xml);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="exportXml">Export XML</button>
    <button v-on:click="importXml">Import XML</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields, FormFieldDataFormat
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Export XML button click.
    exportXml: function () {
      // Data must be the desired path for the exported document.
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportFormFields('Data', FormFieldDataFormat.Xml);
    },

    // Event triggers on the Import XML button click.
    importXml: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File', FormFieldDataFormat.Xml);
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Form field properties

Form field properties in Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer allow you to customize and interact with form fields embedded within PDF documents. This documentation provides an overview of the form field properties supported by the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer and explains how to use them effectively.

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

### Signature and initial fields settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the signature field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">Update Properties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Update Properties button click.
const updateProperties = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  const formField = viewer.retrieveFormFields();
  viewer.formDesignerModule.updateFormField(formField[0], {
    name: 'Signature',
    isReadOnly: true,
    visibility: 'visible',
    isRequired: false,
    isPrint: true,
    tooltip: 'Signature',
    thickness: 4
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">Update Properties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Signature',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Signature',
        thickness: 4
      });
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">Update Properties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Update Properties button click.
const updateProperties = function (args) {
  viewer = pdfviewer.value.ej2Instances;
  const formField = viewer.retrieveFormFields();
  viewer.formDesignerModule.updateFormField(formField[0], {
    name: 'Signature',
    isReadOnly: true,
    visibility: 'visible',
    isRequired: false,
    isPrint: true,
    tooltip: 'Signature',
    thickness: 4
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">Update Properties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Signature',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Signature',
        thickness: 4
      });
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following code example explains how to update the properties of the signature field added to the document from the form designer toolbar.

```ts
  // Properties to customize the signature field settings
  viewer.signatureFieldSettings = {
    // Set the name of the form field element.
    name: 'Signatute',
    // Specify whether the signature field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the signature field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Signatute',
    // Set the thickness of the signature field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specify the properties of the signature Dialog Settings in the signature field.
    signatureDialogSettings: {
      isplayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
      hideSaveSignature: false,
    },
    // Specify the properties of the signature indicator in the signature field.
    signatureIndicatorSettings: {
      opacity: 1,
      backgroundColor: '#237ba2',
      height: 50,
      fontSize: 15,
      text: 'Signature Field',
      color: 'white'
    },
  };

```

![Signature Field Settings](../images/SignatureField.png)

The following code example explains how to update the properties of the initial field added to the document from the form designer toolbar.

```ts
  // Properties to customize the initial field settings
  viewer.initialFieldSettings  = {
    // Set the name of the form field element.
    name: 'Initial',
    // Specify whether the initial field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the initial field.
    isPrint: true,
    // Set the text to be displayed as tooltip.
    tooltip: 'Initial',
    // Set the thickness of the initial field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specify the properties of the initial indicator in the initial field.
    initialIndicatorSettings: {
      opacity: 1,
      backgroundColor: '#237ba2',
      height: 50,
      fontSize: 15,
      text: 'Initial Field',
      color: 'white'
    },
    // Specify the properties of the initial Dialog Settings in the intial field.
    initialDialogSettings: {
      displayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
      hideSaveSignature: false
    }
  };

```

![Initial Field Settings](../images/InitialField.png)

### Textbox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the Textbox field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Update Properties button click.
const updateProperties = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  var formField = viewer.retrieveFormFields();
  viewer.formDesignerModule.updateFormField(formField[0], {
    name: 'Textbox',
    isReadOnly: true,
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
    backgroundColor: '#daeaf7ff',
    alignment: 'Left',
    maxLength: 0,
    isMultiline: false,
    bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
  });
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Textbox',
        isReadOnly: true,
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
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false,
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Update Properties button click.
const updateProperties = function () {
  const viewer = pdfviewer.value.ej2Instances;
  var formField = viewer.retrieveFormFields();
  viewer.formDesignerModule.updateFormField(formField[0], {
    name: 'Textbox',
    isReadOnly: true,
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
    backgroundColor: '#daeaf7ff',
    alignment: 'Left',
    maxLength: 0,
    isMultiline: false,
    bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Textbox',
        isReadOnly: true,
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
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false,
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following code example explains how to update the properties of the textbox field added to the document from the form designer toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.textFieldSettings = {
    // Set the name of the form field element.
    name: 'Textbox',
    // Specify whether the Textbox field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the Textbox field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Textbox',
    // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Set the value of the form field element.
    value: 'Textbox',
    // Set the font family of the textbox field.
    fontFamily: 'Courier',
    // Set the font size of the textbox field.
    fontSize: 10,
    // Specify the font style
    fontStyle: 'None',
    // Set the font color of the textbox field.
    color: 'black',
    // Set the border color of the textbox field.
    borderColor: 'black',
    // Set the background color of the textbox field.
    backgroundColor: '#daeaf7ff',
    // Set the alignment of the text.
    alignment: 'Left',
    // Set the maximum character length.
    maxLength: 0,
    // Allows multiline input in the text field. FALSE, by default.
    isMultiline: false
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :documentLoad="documentLoad">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.textFieldSettings = {
        // Set the name of the form field element.
        name: 'Textbox',
        // Specify whether the Textbox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the Textbox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'Textbox',
        // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value: 'Textbox',
        // Set the font family of the textbox field.
        fontFamily: 'Courier',
        // Set the font size of the textbox field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the font color of the textbox field.
        color: 'black',
        // Set the border color of the textbox field.
        borderColor: 'black',
        // Set the background color of the textbox field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the maximum character length.
        maxLength: 0,
        // Allows multiline input in the text field. FALSE, by default.
        isMultiline: false
      }
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>

  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const documentLoad = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.textFieldSettings = {
    // Set the name of the form field element.
    name: 'Textbox',
    // Specify whether the Textbox field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the Textbox field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Textbox',
    // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Set the value of the form field element.
    value: 'Textbox',
    // Set the font family of the textbox field.
    fontFamily: 'Courier',
    // Set the font size of the textbox field.
    fontSize: 10,
    // Specify the font style
    fontStyle: 'None',
    // Set the font color of the textbox field.
    color: 'black',
    // Set the border color of the textbox field.
    borderColor: 'black',
    // Set the background color of the textbox field.
    backgroundColor: '#daeaf7ff',
    // Set the alignment of the text.
    alignment: 'Left',
    // Set the maximum character length.
    maxLength: 0,
    // Allows multiline input in the text field. FALSE, by default.
    isMultiline: false
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :documentLoad="documentLoad">
    </ejs-pdfviewer>

  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    documentLoad: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.textFieldSettings = {
        // Set the name of the form field element.
        name: 'Textbox',
        // Specify whether the Textbox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the Textbox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'Textbox',
        // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value: 'Textbox',
        // Set the font family of the textbox field.
        fontFamily: 'Courier',
        // Set the font size of the textbox field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the font color of the textbox field.
        color: 'black',
        // Set the border color of the textbox field.
        borderColor: 'black',
        // Set the background color of the textbox field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the maximum character length.
        maxLength: 0,
        // Allows multiline input in the text field. FALSE, by default.
        isMultiline: false
      }
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

![Textbox Field Settings](../images/textbox.png)

### Password field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the Password field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';


const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]);

// Event triggers on the Update Properties button click.
const updateProperties = function () {
  const viewer = this.$refs.pdfviewer.ej2Instances;
  const formField = viewer.retrieveFormFields();
  viewer.formDesignerModule.updateFormField(formField[0], {
    name: 'Password',
    isReadOnly: true,
    visibility: 'visible',
    isRequired: false,
    isPrint: true,
    tooltip: 'Password',
    thickness: 4,
    value: 'Password',
    fontFamily: 'Courier',
    fontSize: 10,
    fontStyle: 'None',
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#daeaf7ff',
    alignment: 'Left',
    maxLength: 0,
    bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      const formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Password',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Password',
        thickness: 4,
        value: 'Password',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

// Event triggers on the Update Properties button click.
const updateProperties = function (args) {
  const viewer = pdfviewer.value.ej2Instances;
  var formField = viewer.retrieveFormFields();
  viewer.formDesignerModule.updateFormField(formField[0], {
    name: 'Password',
    isReadOnly: true,
    visibility: 'visible',
    isRequired: false,
    isPrint: true,
    tooltip: 'Password',
    thickness: 4,
    value: 'Password',
    fontFamily: 'Courier',
    fontSize: 10,
    fontStyle: 'None',
    color: 'black',
    borderColor: 'black',
    backgroundColor: '#daeaf7ff',
    alignment: 'Left',
    maxLength: 0,
    bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
  });
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="updateProperties">updateProperties</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Annotation,
  Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Password',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Password',
        thickness: 4,
        value: 'Password',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}


The following code example explains how to update the properties of the password field added to the do