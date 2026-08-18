---
layout: post
title: How to Use an Authorization Token in Angular PDF Viewer | Syncfusion
description: Pass an authorization token to the Angular PDF Viewer to securely access protected PDF documents and authenticated API requests.
platform: document-processing
control: Include authorization token
documentation: ug
domainurl: ##DomainURL##
---

# How to Use an Authorization Token in Angular PDF Viewer

The PDF Viewer supports adding an authorization token to every AJAX request by configuring the `ajaxRequestSettings.ajaxHeaders` property. Set the header once and the library includes it in all requests initiated by the viewer.

The following steps show how to include the authorization token in the PDF Viewer control.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create simple PDF Viewer sample in Angular.

**Step 2:** Add the following code snippet to include the authorization token.

```html
<ejs-pdfviewer id="pdfViewer"
               [serviceUrl]='service'
               [documentPath]='document'
               [ajaxRequestSettings]="ajaxSetting"
               style="height:640px;display:block">
</ejs-pdfviewer>
```

```typescript
public ajaxSetting = {
  ajaxHeaders: [
    {
      headerName: "Authorization",
      headerValue: "Bearer 64565dfgfdsjweiuvbiuyhiueygf"
    }
  ],
  withCredentials: false
};
```

Find the Sample [how to include authorization token](https://stackblitz.com/edit/angular-jmn6wf-mpwfjc?file=app.component.ts)