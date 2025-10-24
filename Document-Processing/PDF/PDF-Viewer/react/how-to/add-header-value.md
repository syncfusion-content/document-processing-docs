---
layout: post
title: Add header values to AJAX requests in React PDF Viewer | Syncfusion
description: Learn how to include custom headers in PDF Viewer AJAX requests using ajaxRequestSettings and ajaxHeaders in the React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add header values in the React PDF Viewer

Use the ajaxHeaders property in the PDF Viewer’s [ajaxRequestSettings](https://ej2.syncfusion.com/documentation/api/pdfviewer/#ajaxrequestsettings) to include custom headers with each AJAX request.

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

Find the sample [how to add custom headers in AjaxRequestSettings](https://stackblitz.com/edit/react-dnkbqh66-tnifjnlb?file=package.json,index.js)