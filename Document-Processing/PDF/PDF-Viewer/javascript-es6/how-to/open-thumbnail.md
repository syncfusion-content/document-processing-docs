---
layout: post
title: Open the thumbnail pane programmatically | Syncfusion
description: Learn how to open the thumbnail pane programmatically in the Syncfusion TypeScript PDF Viewer using openThumbnailPane.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open the thumbnail pane programmatically

The PDF Viewer exposes a `openThumbnailPane()` API to open the thumbnail pane from application code. Use this API when the UI needs to show the thumbnail pane in response to user actions or programmatic workflows.

Follow these steps to open the thumbnail pane from application code.

**Step 1:**  Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide.

**Step 2:** Use the code snippet below to open the thumbnail pane.

```
<button id="openThumbnail">Open Thumbnail Pane</button>
```

```ts
document.getElementById('openThumbnail').addEventListener('click', () => {
  // Open Thumbnail pane
  viewer.thumbnailViewModule.openThumbnailPane();
});
```

Find the sample: [Open the thumbnail pane programmatically](https://stackblitz.com/edit/hjoij3?file=index.ts)
