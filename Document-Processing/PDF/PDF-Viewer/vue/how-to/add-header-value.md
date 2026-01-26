---
layout: post
title: Add header values to AJAX requests in Vue PDF Viewer | Syncfusion
description: Learn how to include custom headers in PDF Viewer AJAX requests using ajaxRequestSettings and ajaxHeaders in the Vue PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add header values in the Vue PDF Viewer

Use the ajaxHeaders property in the PDF Viewer’s [ajaxRequestSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#ajaxrequestsettings) to include custom headers with each AJAX request.

Example: Add a custom Authorization header using ajaxRequestSettings

```html
<template>
  <div>
    <ejs-pdfviewer
      ref="viewer"
      :serviceUrl="serviceUrl"
      :documentPath="documentPath"
      :ajaxRequestSettings="ajaxRequestSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent } from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'PdfViewerWithHeaders',
  components: { 'ejs-pdfviewer': PdfViewerComponent },
  data() {
    return {
      serviceUrl: 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer',
      documentPath: 'https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf',
      ajaxRequestSettings: {
        ajaxHeaders: [
          {
            headerName: 'Authorization',
            headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
          }
        ],
        withCredentials: false
      }
    };
  }
};
</script>
```

