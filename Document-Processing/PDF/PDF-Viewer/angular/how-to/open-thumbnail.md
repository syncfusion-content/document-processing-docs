---
layout: post
title: How to Open the Thumbnail Pane Programmatically  | Syncfusion
description: Open the thumbnail pane programmatically in the Angular PDF Viewer using openThumbnailPane to show page thumbnails from custom UI controls.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Open the Thumbnail Pane Programmatically in Angular PDF Viewer

The PDF Viewer exposes an `openThumbnailPane()` API to open the thumbnail pane from application code. Use this API when the UI needs to show the thumbnail pane in response to user actions or programmatic workflows.

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