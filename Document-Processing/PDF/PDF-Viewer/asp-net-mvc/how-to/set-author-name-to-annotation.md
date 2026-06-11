---
layout: post
title: Set Author Name to Annotation in PDF Viewer
description: Learn how to set the author name for annotations in the Syncfusion ASP.NET MVC PDF Viewer component of Essential JS 2, enhancing collaboration and tracking.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Set Author Name to Annotations

In the PDF Viewer, you can assign an author name to all annotations within a PDF document. This feature is particularly useful for collaboration and tracking changes made by different users. Use the `author` property within the annotation settings to specify the author's name.

Follow these steps to set the author name for annotations in the PDF Viewer:

**Step 1: Create a Basic PDF Viewer Sample**

Start by following the instructions provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to set up a basic PDF Viewer application.

**Step 2: Set the Author Name**

Once your PDF Viewer is set up, you can set the author name for annotations using the following JavaScript code snippet. This typically goes within your view, often at the end of the `<body>` tag or in a dedicated script file, after the PDF Viewer component has been initialized.

```html

<script>
    function documentLoad()
    {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        // set author name to annotation.
        viewer.annotationSettings.author = "user1";
    }
</script>

```

Download the sample [how to set author name to annotation](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVC_SAMPLE_(2)_(1)1717421659)
