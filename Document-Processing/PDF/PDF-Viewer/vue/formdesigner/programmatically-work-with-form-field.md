---
layout: post
title: Programmatically work with form field in Vue Pdfviewer component | Syncfusion
description: Learn here all about Programmatically work with form field in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Programmatically work with form field
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Programmatically work with form field in Vue Pdfviewer component

The PDF Viewer control provides the option to add, edit and delete the Form Fields. The Form Fields type supported by the PDF Viewer Control are:

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

## Add a form field to PDF document programmatically

Using addFormField method, the form fields can be added to the PDF document programmatically. We need to pass two parameters in this method. They are Form Field Type and Properties of Form Field Type. To add form field programmatically, Use the following code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pdfviewer/vue/addformfield-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pdfviewer/vue/addformfield-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/addformfield-cs2/index.html" %}

## Edit/Update form field programmatically

Using updateFormField method, Form Field can be updated programmatically. We should get the Form Field object/Id from FormFieldCollections property that you would like to edit and pass it as a parameter toupdateFormField  method. The second parameter should be the properties that you would like to update for Form Field programmatically. We have updated the value and background Color properties of Textbox Form Field.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pdfviewer/vue/updateformfield-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pdfviewer/vue/updateformfield-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/updateformfield-cs2/index.html" %}

## Delete form field programmatically

Using deleteFormField method, the form field can be deleted programmatically. We should retrieve the Form Field object/Id from FormFieldCollections property that you would like to delete and pass it as a parameter to deleteFormField method. To delete a Form Field programmatically, use the following code.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/pdfviewer/vue/deleteformfield-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/pdfviewer/vue/deleteformfield-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "Document-Processing/code-snippet/pdfviewer/vue/deleteformfield-cs2/index.html" %}

## Saving the form fields

When the download icon is selected on the toolbar, the Form Fields will be saved in the PDF document and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../images/saveformfield.gif)

You can invoke download action using following code snippet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-button ref="downloadBtn" v-on:click.native="downloadClicked">Download</ejs-button>
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
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const downloadClicked = function () {
  pdfviewer.value.ej2Instances.download();
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-button ref="downloadBtn" v-on:click.native="downloadClicked">Download</ejs-button>
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
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: 'App',
  components: {
    'ej2-pdfviewer': PdfViewerComponent,
    'ejs-button': ButtonComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    downloadClicked: function () {
      this.$refs.pdfviewer.ej2Instances.download();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Printing the form fields

When the print icon is selected on the toolbar, the PDF document will be printed along with the Form Fields added to the pages and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../images/printformfield.gif)

You can invoke print action using the following code snippet.,

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-button ref="printBtn" v-on:click.native="printClicked">Print</ejs-button>
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
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields])

const printClicked = function (args) {
  pdfviewer.value.ej2Instances.print();
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-button ref="printBtn" v-on:click.native="printClicked">Print</ejs-button>
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
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
    'ejs-button': ButtonComponent
  },
  data() {
    return {
      serviceUrl: "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    printClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.print();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Open the existing PDF document

We can open the already saved PDF document contains Form Fields in it by clicking the open icon in the toolbar. Refer the below GIF for further reference.

![Alt text](../images/openexistingpdf.gif)