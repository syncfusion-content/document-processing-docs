---
layout: post
title: How to Close the Comment Panel in ASP.NET MVC PDF Viewer | Syncfusion
description: Close the comment panel in the ASP.NET MVC PDF Viewer programmatically after a user adds, replies to, or resolves a comment on a PDF annotation.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Close the Comment Panel in ASP.NET MVC PDF Viewer

The Syncfusion ASP.NET MVC PDF Viewer allows you to programmatically close the comment panel using a JavaScript function. This can be useful for customizing the user interface, responding to specific user actions, or enhancing accessibility by providing alternative controls.

N> The comment panel must already be open for this action to have an effect.

To close the comment panel programmatically, follow these steps:

**Step 1:** Create an ASP.NET MVC PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started).

**Step 2:** Add a button and the following JavaScript code to your Razor view (e.g., `Index.cshtml`) to close the comment panel on click:

```html

<button type="button" onclick="closeCommentPanel()">CloseCommentPanel</button>

<script>
    function closeCommentPanel() {
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        viewer.viewerBase.navigationPane.closeCommentPanelContainer();
    }
</script>

```

Download the sample [how to close comment panel](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVC_SAMPLE1299715828)
