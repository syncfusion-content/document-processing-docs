---
layout: post
title: Open the thumbnail pane programmatically | Syncfusion
description: Learn how to open the thumbnail pane programmatically in the Syncfusion React PDF Viewer using openThumbnailPane.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Open the thumbnail pane programmatically

The PDF Viewer exposes a `openThumbnailPane()` API to open the thumbnail pane from application code. Use this API when the UI needs to show the thumbnail pane in response to user actions or programmatic workflows.

Follow these steps to open the thumbnail pane from application code.

**Step 1:** Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide.

**Step 2:** Use the code snippet below to open the thumbnail pane.

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