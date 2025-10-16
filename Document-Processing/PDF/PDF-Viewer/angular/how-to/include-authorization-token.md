---
layout: post
title: Include Authorization Token in Angular PDF Viewer component | Syncfusion
description: Learn how to include an authorization token in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Include authorization token
documentation: ug
domainurl: ##DomainURL##
---

# Include the authorization token

The PDF Viewer library allows inclusion of the authorization token in the PDF Viewer AJAX request using the properties of the `ajaxRequest` header available in `AjaxRequestSettings`. It is included in every AJAX request sent from the PDF Viewer.

Follow these steps to include the authorization token in the PDF Viewer control:

**Step 1:** Create a simple PDF Viewer sample in Angular by following the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started).

**Step 2:** Add the following code snippet to include the authorization token:

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