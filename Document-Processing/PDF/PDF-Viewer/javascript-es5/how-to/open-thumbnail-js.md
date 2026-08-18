---
layout: post
title: How to Open the Thumbnail Pane Programmatically | Syncfusion
description: Open the thumbnail pane programmatically in the JavaScript (ES5) PDF Viewer using openThumbnailPane to show page thumbnails from custom UI controls.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Open the Thumbnail Pane Programmatically in JavaScript (ES5)

The PDF Viewer exposes a `openThumbnailPane()` API to open the thumbnail pane from application code. Use this API when the UI needs to show the thumbnail pane in response to user actions or programmatic workflows.

Follow these steps to open the thumbnail pane from application code.

**Step 1:**  Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) guide.

**Step 2:** Use the code snippet below to open the thumbnail pane.

```html
<button id="openThumbnail">Open Thumbnail Pane</button>
```

```js
document.getElementById('openThumbnail').addEventListener('click', () => {
  // Open Thumbnail pane
  viewer.thumbnailViewModule.openThumbnailPane();
});
```

Find the sample: [Open the thumbnail pane programmatically](https://stackblitz.com/edit/ejvemx?file=index.js)