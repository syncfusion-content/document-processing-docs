---
layout: post
title: How to Set the Author Name for Annotations in ASP.NET | Syncfusion
description: Set a custom author name for annotations in the ASP.NET MVC PDF Viewer so they show the correct identity when other users view them.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Set the Author Name for Annotations in ASP.NET MVC PDF Viewer

In the PDF Viewer, you can assign an author name to all annotations within a PDF document. This feature is particularly useful for collaboration and tracking changes made by different users. Use the `author` property within the annotation settings to specify the author's name.

Follow these steps to set the author name for annotations in the PDF Viewer:

**Step 1: Create a Basic PDF Viewer Sample**

Start by following the instructions provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to set up a basic PDF Viewer application.

**Step 2: Set the Author Name**

Once your PDF Viewer is set up, you can set the author name for annotations using the following JavaScript code snippet. This typically goes within your view, often at the end of the `<body>` tag or in a dedicated script file, after the PDF Viewer component has been initialized.

N> Wire the function to the viewer by adding the `DocumentLoad("documentLoad")` option in the Razor markup so the handler runs when the document loads.

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
