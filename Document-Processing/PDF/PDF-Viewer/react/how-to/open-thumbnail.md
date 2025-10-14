---
layout: post
title: Open thumbnail in React Pdfviewer component | Syncfusion
description: Learn here all about Open thumbnail in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open thumbnail
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open thumbnail in React Pdfviewer component

The PDF Viewer library allows you to open the thumbnail pane programmatically using the [**openThumbnailPane()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method.

The following steps are used to open the thumbnail.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.

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

Find the sample [how to open the thumbnail pane programmatically](https://stackblitz.com/edit/react-8rp7h2?file=public%2Findex.html)