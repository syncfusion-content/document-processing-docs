---
layout: post
title: Add header values to AJAX requests in React PDF Viewer | Syncfusion
description: Learn how to include custom headers in PDF Viewer AJAX requests using ajaxRequestSettings and ajaxHeaders in the React PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Add header values in the React PDF Viewer

Use the `ajaxHeaders` property inside the PDF Viewer’s [ajaxRequestSettings](https://ej2.syncfusion.com/React/documentation/api/pdfviewer/#ajaxrequestsettings) to send custom HTTP headers with each request made by the viewer.

Example: Add a custom Authorization header using `ajaxRequestSettings` in an React component

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