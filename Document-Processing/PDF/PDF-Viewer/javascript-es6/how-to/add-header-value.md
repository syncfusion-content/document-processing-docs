---
layout: post
title: Add header values to AJAX requests in TypeScript PDF Viewer
description: Learn how to add custom header values to PDF Viewer AJAX requests using ajaxRequestSettings and ajaxHeaders in the TypeScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add header values in TypeScript PDF Viewer

To add header values to AJAX requests, use the ajaxHeaders property in the PDF Viewer’s [ajaxRequestSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#ajaxrequestsettings). This property specifies custom headers for each outgoing request.

Example: Add a custom Authorization header using ajaxRequestSettings

```ts

viewer.ajaxRequestSettings = {
   ajaxHeaders: [
      {
         headerName: "Authorization",

         headerValue: "Bearer 64565dfgfdsjweiuvbiuyhiueygf"
      }
   ],

   withCredentials: false
};

```

Sample: How to add custom headers using ajaxRequestSettings
[StackBlitz example](https://stackblitz.com/edit/typescript-nv1way?file=index.ts)
