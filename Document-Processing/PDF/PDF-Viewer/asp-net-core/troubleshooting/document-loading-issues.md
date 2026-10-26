---
layout: post
title: Document Loading Issues in ASP.NET Core PDF Viewer | Syncfusion
description: Resolve document loading issues in the ASP.NET Core PDF Viewer v23.1 and later by using dataBind, validating URLs, and checking CORS and CSP settings.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Resolve Document Loading Issues in ASP.NET Core PDF Viewer

If a PDF does not render after upgrading to v23.1+, use the checklist below to resolve common causes. The most frequent fix is calling `dataBind()` before `load()`.

1. Call `pdfViewer.dataBind()` before `load()`. Starting with v23.1, an explicit dataBind call is required to initialize data binding and ensure correct rendering.

```html
<button id="viewer" onclick="documentLoad()">Load</button>
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px">
    </ejs-pdfviewer>
</div>

<script>
    function documentLoad() {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
        pdfViewer.serviceUrl = "https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer";
        pdfViewer.dataBind();
        pdfViewer.load("https://cdn.syncfusion.com/content/pdf/annotations.pdf");
    }
</script>
```

2. Verify the document source. Ensure the URL or path is valid and accessible.

3. Check network connectivity. The viewer cannot fetch the document without a stable connection.

4. Inspect console errors. Use browser developer tools to identify issues.

5. Validate the initialization order. Initialize the viewer, call `dataBind()`, then call `load()`.

6. Update to the latest viewer version. Issues may be resolved in newer releases.

7. Configure CORS correctly for cross-domain documents.

8. Review Content Security Policy (CSP) settings. Ensure external resources are permitted. See the [Content Security Policy troubleshooting guide](https://ej2.syncfusion.com/javascript/documentation/common/troubleshoot/content-security-policy) for details.

This checklist typically resolves document loading issues after upgrading to v23.1+.
