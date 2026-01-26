---
layout: post
title: Identify Edited State of Document in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to check if a loaded PDF document has been edited using the isDocumentEdited property in the Syncfusion ASP.NET MVC PDF Viewer.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Identify if the loaded document has been edited

The Syncfusion ASP.NET MVC PDF Viewer allows you to determine whether a loaded PDF document has been modified using the `isDocumentEdited` property. This property is useful for implementing features such as prompting users to save changes before closing, enabling/disabling save functionality, or tracking document revisions. An "edit" refers to any modification to the PDF, including annotations, form field changes, or other interactive elements.

To identify if the loaded document has been edited, follow these steps:

**Step 1:** Create an ASP.NET MVC PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/).

**Step 2:** Add the following buttons and JavaScript code to your Razor view (e.g., `Index.cshtml`). This example demonstrates checking the `isDocumentEdited` property before and after an intentional edit (for demonstration purposes).

```html

<button onclick="beforeEdit()">BeforeDocumentEdit</button>
<button onclick="afterEdit()">AfterDocumentEdit</button>

<script>
    function beforeEdit() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        console.log("Is Document Edited = " + viewer.isDocumentEdited);
    }
    function afterEdit() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        console.log("Is Document Edited = " + viewer.isDocumentEdited);
    }
</script>

```

Download the sample [how to identify the loaded document is edited](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVC_SAMPLE-609765609)
