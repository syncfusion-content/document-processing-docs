---
layout: post
title: Identify The Loaded Document Is Edited in ASP.NET MVC Pdfviewer Component
description: Learn here all about Identify The Loaded Document Is Edited in Syncfusion ASP.NET MVC Pdfviewer component of syncfusion and more.
platform: document-processing
control: Identify The Loaded Document Is Edited
publishingplatform: ASP.NET MVC
documentation: ug
---

# Identify the loaded document is edited

The PDF Viewer server library allows you to identify whether loaded PDF document is edited or not. Use the **isDocumentEdited** property to identify whether the changes made in PDF document.

The following steps are used to identify loaded document is edited in PDF viewer control,

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to create simple PDF Viewer sample.

**Step 2:** Add the following code snippet with button click event to identity loaded document edited.

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