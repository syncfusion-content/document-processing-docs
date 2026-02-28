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

If a document does not render in the viewer when using version 23.1 or later, use the following troubleshooting checklist to identify and resolve the issue.

1. **Check `viewer.dataBind()` requirement:** Versions 23.1 and later require an explicit call to `viewer.dataBind()` after setting viewer properties and before calling `load()` so data binding and rendering initialize correctly.

```html

<button v-on:click="documentLoad">Load</button>

<ejs-pdfviewer id="pdfViewer" ref="pdfviewer">
</ejs-pdfviewer>

documentLoad: function (args) {
       pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
       pdfViewer.dataBind();
       pdfViewer.load("https://cdn.syncfusion.com/content/pdf/annotations.pdf");
    }
```

2. **Verify document source:** Confirm the document URL or local path is correct and reachable. Open the document URL directly in a browser to validate accessibility.
3. **Network connectivity:** Ensure the application can access remote resources. Intermittent or blocked network requests will prevent the viewer from fetching the document.connection.
4. **Inspect console and network logs:** Use browser developer tools to check for errors, failed network requests (including worker script loads), and HTTP status codes that indicate resource or permission problems.
5. **Loading Sequence:** Validate the initialization order. Initialize the viewer, call `dataBind()`, then call `load()`.
6. **Update the viewer:** Verify the project uses a compatible and up-to-date viewer package. Review release notes for version-specific changes that affect initialization or API behavior.
7. **Cross-Origin Resource Sharing (CORS):** If documents or worker assets are hosted on a different origin, configure server CORS headers (for example, `Access-Control-Allow-Origin`) or host assets on the same origin to allow worker scripts and document requests.
8. **Content Security Policy (CSP):** Confirm the application's CSP permits loading external resources the viewer requires. See the troubleshooting guide for [CSP](https://ej2.syncfusion.com/javascript/documentation/common/troubleshoot/content-security-policy)

By following these troubleshooting steps, you should be able to address issues related to document loading in version 23.1 or newer, ensuring that your documents render correctly in the viewer.