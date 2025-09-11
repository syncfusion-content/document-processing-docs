---
layout: post
title: Add header value in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Add header value in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Add header value
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Add header value in Typescript Pdfviewer control

To add header values to an AJAX request made by a Syncfusion PDF Viewer, you can use the **ajaxHeaders** property available in the [**ajaxRequestSettings**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#ajaxrequestsettings) module of the PDF Viewer. This property allows you to specify custom headers for the AJAX request.

Here is an example of how you can use the **ajaxRequestSettings** property to add a custom header to an AJAX request made by the PDF Viewer:

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

Find the sample [how to add custom headers in AjaxRequestSettings](https://stackblitz.com/edit/typescript-nv1way?file=index.ts)