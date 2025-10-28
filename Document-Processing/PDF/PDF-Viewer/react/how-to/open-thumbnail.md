---
layout: post
title: Open the thumbnail pane programmatically | Syncfusion
description: Learn how to open the thumbnail pane programmatically in the Syncfusion React PDF Viewer using openThumbnailPane.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Open the thumbnail pane programmatically

Open the thumbnail pane programmatically using the [openThumbnailPane()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method.

The following steps are used to open the thumbnail.

**Step 1:** Follow the steps in the [Get started with React PDF Viewer](https://help.syncfusion.com/react/document-processing/pdf/pdf-viewer/react/getting-started/) guide to create a sample.

**Step 2:** Use the following code snippet to open thumbnail.

   ```
    <button onclick="openThumbnail()">Open Thumbnail Pane</button>

    <script>
   function openThumbnail() {
    var viewer = document.getElementById('container').ej2_instances[0];
    // Open Thumbnail pane
    viewer.thumbnailViewModule.openThumbnailPane();
   }
   </script>
   ```

Find the sample: [Open the thumbnail pane programmatically](https://stackblitz.com/edit/react-8rp7h2?file=public%2Findex.html)