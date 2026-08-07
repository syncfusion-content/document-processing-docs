---
layout: post
title: Flatten PDF form fields in Vue PDF Viewer | Syncfusion
description: Learn how to flatten interactive PDF form fields before download or save-as in EJ2 Vue PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Flatten PDF form fields in Vue

## Overview

Flattening PDF forms converts interactive fields such as textboxes, dropdowns, checkboxes, signatures, etc., into non‑editable page content. Use this when you want to protect filled data, finalize a document, or prepare it for secure sharing.

## Prerequisites

- EJ2 Vue PDF Viewer installed and configured
- Basic viewer setup completed with toolbar and page organizer services injected. For more information, see [getting started guide](../getting-started)

## Flatten forms before downloading PDF

1. Add a ref to the [`PdfViewerComponent`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer) so you can access viewer APIs from event handlers.
2. Intercept the download flow using [`downloadStart`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#downloadstart) and cancel the default flow.
3. Retrieve the viewer's blob via [`saveAsBlob()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#saveasblob) and convert the blob to base64.
4. Use `PdfDocument` from Syncfusion PDF Library to open the document, set `field.flatten = true` for each form field, then save.
5. To flatten the form fields when downloading through the *Save As* option in Page Organizer, repeat steps 2–4 by using [`pageOrganizerSaveAs`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#pageorganizersaveas) event.

## Complete example

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
  <div>
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"
      :pageOrganizerSaveAs="onPageOrganizerSaveAs"
      :downloadStart="onDownloadStart"
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
import { PdfDocument, PdfField } from '@syncfusion/ej2-pdf';

export default {
  name: 'App',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      resourceUrl: 'https://cdn.syncfusion.com/ej2/32.2.5/dist/ej2-pdfviewer-lib',
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
  methods: {
    blobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(reader.error);
        reader.onload = () => {
          const dataUrl = reader.result;
          const data = dataUrl.split(',')[1];
          resolve(data);
        };
        reader.readAsDataURL(blob);
      });
    },
    flattenFormFields(data) {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      let document = new PdfDocument(data);
      for (let index = 0; index < document.form.count; index++) {
        let field = document.form.fieldAt(index);
        field.flatten = true;
      }
      // If both annotations and form fields need to be flattened, use
      // document.flatten = true
      document.save(`${pdfviewer.fileName}.pdf`);
      document.destroy();
    },
    async handleFlattening() {
      const pdfviewer = this.$refs.pdfviewer.ej2Instances;
      const blob = await pdfviewer.saveAsBlob();
      const data = await this.blobToBase64(blob);
      this.flattenFormFields(data);
    },
    async onDownloadStart(args) {
      args.cancel = true;
      await this.handleFlattening();
    },
    async onPageOrganizerSaveAs(args) {
      args.cancel = true;
      await this.handleFlattening();
    },
  },
};
</script>
{% endhighlight %}
{% endtabs %}

## Expected result

- The downloaded or "Save As" PDF will contain the visible appearance of filled form fields as static, non-editable content.
- Form fields will no longer be interactive or editable in common PDF readers.

## Troubleshooting

- If the viewer ref is null, ensure `ref="pdfviewer"` is present and the component has mounted before invoking [`saveAsBlob()`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#saveasblob).
- Missing [`resourceUrl`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#resourceurl): If viewer resources are not reachable, set `resourceUrl` to the correct CDN or local path for the ej2-pdfviewer-lib.

## Related topics

- [`downloadStart` event reference](./form-field-events#downloadstart)
- [`pageOrganizerSaveAs` event reference](./form-field-events#pageorganizersaveas)
- [Form Designer in React PDF Viewer](./form-designer)
