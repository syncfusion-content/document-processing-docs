---
layout: post
title: How to Add Headers to AJAX Requests in JavaScript (ES5) | Syncfusion
description: Add custom headers to PDF Viewer AJAX requests in the JavaScript (ES5) PDF Viewer using ajaxRequestSettings and the ajaxHeaders configuration object.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Add Headers to AJAX Requests in JavaScript (ES5) PDF Viewer

Use the `ajaxHeaders` property inside the PDF Viewer's [ajaxRequestSettings](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#ajaxrequestsettings) to send custom HTTP headers with each request made by the viewer.

Example: Add a custom Authorization header using `ajaxRequestSettings` in a JavaScript component

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
