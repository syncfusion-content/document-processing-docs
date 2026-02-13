---
layout: post
title: Document Loading Issues in Version 23.1 or Newer Angular PDF Viewer Component
description: Learn here all about troubleshooting Document Loading Issues in Version 23.1 or newer in Angular PDF Viewer of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Document Loading Issues in Version 23.1 or Newer

If a document does not render in the viewer when using version 23.1 or later, use the following troubleshooting checklist to identify and resolve the issue.

* **Check `viewer.dataBind()` requirement:** Versions 23.1 and later require an explicit call to `viewer.dataBind()` after setting viewer properties and before calling `load()` so data binding and rendering initialize correctly.

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

* **Verify document source:** Confirm the document URL or local path is correct and reachable. Open the document URL directly in a browser to validate accessibility.

* **Network connectivity:** Ensure the application can access remote resources. Intermittent or blocked network requests will prevent the viewer from fetching the document.

* **Inspect console and network logs:** Use browser developer tools to check for errors, failed network requests (including worker script loads), and HTTP status codes that indicate resource or permission problems.

* **Loading sequence and Angular lifecycle:** Ensure `viewer.dataBind()` is called after the viewer instance is ready. For Angular applications, prefer the idiomatic approach using `@ViewChild` to access the component instance and invoke methods in appropriate lifecycle hooks (for example, `ngAfterViewInit`) rather than relying on direct DOM access.

* **Update the viewer:** Verify the project uses a compatible and up-to-date viewer package. Review release notes for version-specific changes that affect initialization or API behavior.

* **Cross-Origin Resource Sharing (CORS):** If documents or worker assets are hosted on a different origin, configure server CORS headers (for example, `Access-Control-Allow-Origin`) or host assets on the same origin to allow worker scripts and document requests.

* **Content Security Policy (CSP):** Confirm the application's CSP permits loading external resources the viewer requires. See the troubleshooting guide for [CSP](https://ej2.syncfusion.com/javascript/documentation/common/troubleshoot/content-security-policy)

By following these troubleshooting steps, you should be able to address issues related to document loading in version 23.1 or newer, ensuring that your documents render correctly in the viewer.