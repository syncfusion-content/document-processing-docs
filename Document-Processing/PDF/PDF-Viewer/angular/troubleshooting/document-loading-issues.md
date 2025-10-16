---
layout: post
title: Document Loading Issues in Version 23.1 or Newer Angular Pdfviewer Component
description: Learn here all about troubleshooting Document Loading Issues in Version 23.1 or newer in Angular Pdfviewer of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Document Loading Issues in Version 23.1 or Newer

If documents do not render in the viewer, especially when using version 23.1 or newer, use the following troubleshooting steps:

* **Check for `viewer.dataBind()` requirement**: Call `viewer.dataBind()` as required in version 23.1 or newer. This explicit call is Essential<sup style="font-size:70%">&reg;</sup> for initializing data binding and document rendering correctly. The `dataBind()` method must be called before `load`.

```typescript
<button (click)="documentLoad()">Load</button>
<ejs-pdfviewer id="pdfViewer"
               style="height:640px;display:block">
</ejs-pdfviewer>

function documentLoad () {
    var pdfviewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";        pdfViewer.dataBind();
    pdfViewer.load("https://cdn.syncfusion.com/content/pdf/annotations.pdf",null);
    }
```

* **Verify document source**: Confirm that the document source or URL is valid and accessible. Incorrect URLs or document paths can cause loading issues.

* **Network connectivity**: Ensure the application has a stable network connection. Document rendering may fail if the viewer cannot fetch the document due to network issues.

* **Console errors**: Use browser developer tools to check for error messages or warnings in the console. These messages can provide insights into what prevents the document from loading.

* **Loading sequence**: Call `viewer.dataBind()` and initiate document loading in the correct sequence. The viewer must be initialized before attempting to load a document.

* **Update viewer**: Use the latest version of the viewer library or framework. Issues related to document loading may be resolved in newer releases.

* **Cross-Origin Resource Sharing (CORS)**: When loading documents from a different domain, ensure that CORS headers are correctly configured to allow cross-origin requests.

* **Content Security Policies (CSP)**: Ensure the application's Content Security Policy allows loading external resources, as this can affect document loading. Refer [here](https://ej2.syncfusion.com/javascript/documentation/common/troubleshoot/content-security-policy) to troubleshoot.

These troubleshooting steps help address document loading issues in version 23.1 or newer and ensure documents render correctly in the viewer.
