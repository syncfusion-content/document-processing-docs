---
layout: post
title: Open thumbnail in Angular PDF Viewer component | Syncfusion
description: Learn here all about Open thumbnail in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open thumbnail
documentation: ug
domainurl: ##DomainURL##
---

# Open the thumbnail pane programmatically

The PDF Viewer exposes a `openThumbnailPane()` API to open the thumbnail pane from application code. Use this API when the UI needs to show the thumbnail pane in response to user actions or programmatic workflows.

Follow these steps to open the thumbnail pane from application code.

**Step 1:** Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide.

**Step 2:** Use the code snippet below to open the thumbnail pane.

```html
<button (click)="openThumbnail()">Open Thumbnail Pane</button>
```

```ts
openThumbnail() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  // Open Thumbnail pane.
  viewer.thumbnailViewModule.openThumbnailPane();
}
```

Find the sample, [how to open the thumbnail pane programmatically](https://stackblitz.com/edit/angular-6bwxuk?file=app.component.ts)