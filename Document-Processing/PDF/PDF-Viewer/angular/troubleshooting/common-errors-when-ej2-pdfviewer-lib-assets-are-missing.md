---
layout: post
title: Common Errors When Ej2 Pdfviewer Lib Assets Are Missing | Syncfusion
description: Learn about the common errors when ej2 pdfviewer lib assets are missing in the Angular PDF Viewer and how it helps users work with PDF documents more
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Common Errors When Ej2 Pdfviewer Lib Assets Are Missing in Angular

An error that can occur when the `ej2-pdfviewer-lib` assets are missing is the **Uncaught DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope'**. This occurs when the PDF viewer's web worker cannot load required files such as `pdfium.js` or `pdfium.wasm`.

To troubleshoot and resolve this error, follow these steps:

1. **Check asset availability:** Verify that the required files (for example, `pdfium.js` and `pdfium.wasm`) exist in a public assets folder that the application serves (commonly `src/assets/ej2-pdfviewer-lib`). Confirm the files are present in the build output and that the request paths used by the viewer match their deployed locations.

2. **Network and CORS:** Use the browser developer tools to confirm the asset requests return HTTP 200. If the assets are hosted on a different origin, configure appropriate CORS response headers (for example, `Access-Control-Allow-Origin`) or host the assets on the same origin to avoid cross-origin worker load failures.

N> If the `ej2-pdfviewer-lib` folder is not available in `src/assets`, copy the contents from `./node_modules/@syncfusion/ej2-pdfviewer/dist` into `src/assets/ej2-pdfviewer-lib` using the command:
```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib  src/assets/ej2-pdfviewer-lib
```