---
layout: post
title: Open the thumbnail pane programmatically in JavaScript PDF Viewer | Syncfusion
description: Learn how to open the thumbnail pane programmatically in the Syncfusion JavaScript PDF Viewer using openThumbnailPane.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open the thumbnail pane programmatically

Open the thumbnail pane programmatically using the [openThumbnailPane()](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method.

The following steps are used to open the thumbnail.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) guide to create a sample.

**Step 2:** Use the following code snippet to open thumbnail.

```
<button id="openThumbnail">Open Thumbnail Pane</button>
```

```js
document.getElementById('openThumbnail').addEventListener('click', () => {
  // Open Thumbnail pane
  viewer.thumbnailViewModule.openThumbnailPane();
});
```

Find the sample: [Open the thumbnail pane programmatically](https://stackblitz.com/edit/ejvemx?file=index.js)