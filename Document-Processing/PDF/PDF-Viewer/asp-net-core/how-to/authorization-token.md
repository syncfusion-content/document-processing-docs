---
layout: post
title: Authorization Token in ASP.NET Core Pdfviewer Component
description: Learn here all about Authorization Token in Syncfusion ASP.NET Core Pdfviewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Authorization Token
publishingplatform: ASP.NET Core
documentation: ug
---

# Include the Authorization token

The PDF Viewer library allows you to include the authorization token in the PDF viewer AJAX request using the properties of the ajaxRequest header available in `AjaxRequestSettings`, and it will be included in every AJAX request send from PDF Viewer.

The following steps are used to include the authorization token to the PDF viewer control.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet to include the authorization token.

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