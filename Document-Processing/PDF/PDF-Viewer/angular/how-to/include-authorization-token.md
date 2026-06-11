---
layout: post
title: Include authorization token in Angular PDF Viewer component | Syncfusion
description: Learn here all about Include authorization token in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Include authorization token
documentation: ug
domainurl: ##DomainURL##
---

# Include the authorization token

The PDF Viewer supports adding an authorization token to every AJAX request by configuring the `ajaxRequestSettings.ajaxHeaders` property. Set the header once and the library includes it in all requests initiated by the viewer.

The following steps are used to include the authorization token to the PDF viewer control.

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