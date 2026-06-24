---
layout: post
title: Add header values to AJAX requests | Syncfusion PDF Viewer
description: Learn how to include custom headers in PDF Viewer AJAX requests using ajaxRequestSettings and ajaxHeaders in the JavaScript PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add header values in the JavaScript PDF Viewer

Use the `ajaxHeaders` property inside the PDF Viewer’s [ajaxRequestSettings](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/#ajaxrequestsettings) to send custom HTTP headers with each request made by the viewer.

Example: Add a custom Authorization header using `ajaxRequestSettings` in an JavaScript component

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
