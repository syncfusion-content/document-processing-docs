---
layout: post
title: Authorization Token in ASP.NET Core Pdfviewer | Syncfusion
description: Learn here all about Authorization Token in Syncfusion ASP.NET Core Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Include Authorization token to header

The PDF Viewer component enables adding authorization tokens to each AJAX request through the `ajaxHeaders` collection in `AjaxRequestSettings`, ensuring the header is appended to every call initiated by the viewer.

Use the following steps to configure the authorization token for the PDF Viewer control.

**Step 1:** Follow the steps in the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to configure a basic ASP.NET Core project with the PDF Viewer component.

**Step 2:** Add the following script after the PDF Viewer instance is rendered (for example, in the Razor view or layout file) to include the authorization token in subsequent requests.

```html
<script>
    // Include the Authorization token
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfViewer').ej2_instances[0];
        pdfViewer.ajaxRequestSettings = {
            ajaxHeaders: [
                {
                    headerName: 'Authorization',

                    headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
                }
            ],
            withCredentials: false
        };
    }
</script>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to/Include%20the%20Authorization%20token)
