---
layout: post
title: Import form data in the Vue PDF Viewer | Syncfusion
description: Learn how to import PDF form field data (FDF, XFDF, JSON, and from an object) using the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Import PDF Form Data into Vue PDF Viewer

The **PDF Viewer** lets you import values into interactive form fields in the currently loaded PDF. You can import data from these formats:

- [FDF](#import-as-fdf)
- [XFDF](#import-xfdf)
- [JSON](#import-json)

## API to use
- [importFormFields](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#importformfields)(sourceOrObject, format)

Note: If you’re using a **server-backed viewer**, set `serviceUrl` before importing.

### Import FDF

The following Vue example imports FDF data into the currently loaded PDF.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="importFdf">Import FDF</button>
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
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

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
    importFdf() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing should be accessible at the given path or as a file stream depending on your integration
      pdfviewer.importFormFields('File', FormFieldDataFormat.Fdf);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Import XFDF

The following example imports XFDF data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="importXfdf">Import XFDF</button>
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
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

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
    importXfdf() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing should be accessible at the given path or as a file stream depending on your integration
      pdfviewer.importFormFields('File', FormFieldDataFormat.Xfdf);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

### Import JSON

The following example imports JSON form data.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <button @click="importJson">Import JSON</button>
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
import { FormFieldDataFormat } from '@syncfusion/ej2-pdfviewer';

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
    importJson() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      // The file for importing should be accessible at the given path or as a file stream depending on your integration
      pdfviewer.importFormFields('File', FormFieldDataFormat.Json);
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Common Use Cases

- Pre-fill application forms from a database using JSON.
- Migrate data from other PDF tools using FDF/XFDF.
- Restore user progress saved locally or on the server.
- Combine with validation to block print/download until required fields are completed.

[View Sample on GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples)

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Export form fields](./export-form-fields)
- [Import Export Events](./import-export-events)
- [Create Edit form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Form fields API](../form-fields-api)