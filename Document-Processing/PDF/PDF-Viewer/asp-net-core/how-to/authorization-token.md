---
layout: post
title: How to Use an Authorization Token in ASP.NET Core PDF | Syncfusion
description: Pass an authorization token to the ASP.NET Core PDF Viewer to securely access protected PDF documents and authenticated API requests.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Use an Authorization Token in ASP.NET Core PDF Viewer

Secure PDF Viewer requests by automatically including authorization tokens in every AJAX call. Configure custom headers through the `AjaxRequestSettings` property to append authentication credentials to all viewer-initiated requests.

Follow these steps to configure authorization headers for your PDF Viewer instance.

**Step 1:** Follow the [Getting Started with ASP.NET Core PDF Viewer guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to set up a basic PDF Viewer instance in your ASP.NET Core project.

**Step 2:** Add the following PDF Viewer markup and script to configure the authorization token. The script should be executed after the PDF Viewer instance is initialized (for example, in the Razor view or layout file).

```html
<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer" serviceUrl="/Index"></ejs-pdfviewer>
</div>

<script>
    // Include the Authorization token
    window.onload = function () {
        var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
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
