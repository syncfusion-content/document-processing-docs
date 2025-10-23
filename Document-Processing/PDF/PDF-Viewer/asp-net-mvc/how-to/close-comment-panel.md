---
layout: post
title: Close Comment Panel in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to programmatically close the comment panel in the Syncfusion ASP.NET MVC PDF Viewer using JavaScript to enhance UI control or user experience.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Close the comment panel programmatically

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
