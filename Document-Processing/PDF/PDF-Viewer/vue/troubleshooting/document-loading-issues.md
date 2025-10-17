---
layout: post
title: Fix document loading issues in v23.1+ for the Vue PDF Viewer component
description: Resolve document rendering failures in v23.1 or newer by calling dataBind before load, verifying source URLs, checking CORS and CSP, and confirming network connectivity in the Vue PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Document Loading Issues in Version 23.1 or Newer

If the document does not render in the viewer when using version 23.1 or newer, follow these steps:

1. Call `pdfviewer.dataBind()` before `load()`. Starting with v23.1, an explicit dataBind call is required to initialize data binding and render correctly.

```typescript

<button v-on:click="documentLoad">Load</button>

<ejs-pdfviewer id="pdfViewer" ref="pdfviewer">
</ejs-pdfviewer>

documentLoad: function (args) {
       pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
       pdfViewer.dataBind();
       pdfViewer.load("https://cdn.syncfusion.com/content/pdf/annotations.pdf");
    }
```

2. Verify the document source. Ensure the URL or path is valid and accessible.
3. Check network connectivity. The viewer cannot fetch the document without a stable connection.
4. Inspect console errors. Use browser developer tools to identify issues.
5. Validate the initialization order. Initialize the viewer, call `dataBind()`, then call `load()`.
6. Update to the latest viewer version. Issues may be resolved in newer releases.
7. Configure CORS correctly for cross-domain documents.
8. Content Security Policies (CSP): Check if your application's Content Security Policy allows the loading of external resources, as this can affect document loading. Refer [here](https://ej2.syncfusion.com/javascript/documentation/common/troubleshoot/content-security-policy) to troubleshoot.

By following these troubleshooting steps, you should be able to address issues related to document loading in version 23.1 or newer, ensuring that your documents render correctly in the viewer.