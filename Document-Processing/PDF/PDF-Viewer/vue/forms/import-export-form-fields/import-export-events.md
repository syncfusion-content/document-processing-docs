---
layout: post
title: Import/Export events in the Vue PDF Viewer | Syncfusion
description: Learn how to handle Import/Export events for PDF form fields in the Syncfusion Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# PDF Form Import and Export Events in Vue

Import/Export events let you **track and customize the entire life cycle** of form data being imported into or exported from the PDF Viewer.
Use these events to:
- Validate inputs before processing.
- Show progress indicators.
- Log audit trails.
- Block operations based on business rules.

Each event provides detailed context through event arguments such as [ImportStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/importstarteventargs), [ImportSuccessEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/importsuccesseventargs), [ImportFailureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/importfailureeventargs), [ExportStartEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/exportstarteventargs), [ExportSuccessEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/exportsuccesseventargs), and [ExportFailureEventArgs](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/exportfailureeventargs).

## Import Events
- [importStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#importstart) — Fires when an import begins.
- [importSuccess](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#importsuccess) — Fires when form fields are successfully imported.
- [importFailed](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#importfailed) — Fires if the import fails.

**Example: Handle Import Events**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @importStart="onImportStart"
      @importSuccess="onImportSuccess"
      @importFailed="onImportFailed"
      style="height:640px"
    />
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
    onImportStart(args) {
      console.log('Import started', args);
      // e.g. show spinner, validate inputs
    },
    onImportSuccess(args) {
      console.log('Import success', args);
      // e.g. hide spinner, show toast
    },
    onImportFailed(args) {
      console.error('Import failed', args);
      // e.g. show error dialog
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Export Events
- [exportStart](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#exportstart) — Fires when an export begins.
- [exportSuccess](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#exportsuccess) — Fires when form fields are successfully exported.
- [exportFailed](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/index-default#exportfailed) — Fires if the export fails.

**Example: Handle Export Events**

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      @exportStart="onExportStart"
      @exportSuccess="onExportSuccess"
      @exportFailed="onExportFailed"
      style="height:640px"
    />
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
    onExportStart(args) {
      console.log('Export started', args);
      // e.g. disable export UI
    },
    onExportSuccess(args) {
      console.log('Export success', args);
      // e.g. enable UI, provide download link
    },
    onExportFailed(args) {
      console.error('Export failed', args);
      // e.g. re-enable UI, notify user
    }
  }
};
</script>
{% endhighlight %}
{% endtabs %}

## Key Notes
- importStart, importSuccess, importFailed cover the full import life cycle.
- exportStart, exportSuccess, exportFailed cover the full export life cycle.

## See also

- [Form Designer overview](../overview)
- [Form Designer Toolbar](../../toolbar-customization/form-designer-toolbar)
- [Create form fields](../overview-create-forms)
- [Group form fields](../group-form-fields)
- [Form validation](../form-validation)
- [Add custom data to form fields](../custom-data)
- [Import form fields](./import-form-fields)
- [Export form fields](./export-form-fields)
- [Form validation](../form-validation)
- [Form fields API](../form-fields-api)
- [Form fields API](../form-fields-api)