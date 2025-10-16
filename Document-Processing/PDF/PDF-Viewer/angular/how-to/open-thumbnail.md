---
layout: post
title: Open Thumbnail in Angular PDF Viewer | Syncfusion
description: Learn how to open the thumbnail pane programmatically in Syncfusion Angular PDF Viewer component.
platform: document-processing
control: Open thumbnail
documentation: ug
domainurl: ##DomainURL##
---

# Open Thumbnail Pane Programmatically

The PDF Viewer allows programmatic opening of the thumbnail pane using the [**openThumbnailPane()**](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/thumbnailView/#openthumbnailpane) method.

To open the thumbnail pane using code, follow these steps:

**Step 1:** Refer to the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to set up a basic Angular PDF Viewer.

**Step 2:** Use the following code snippet to open the thumbnail pane.

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

For a complete example, find the sample demonstrating [how to open the thumbnail pane programmatically](https://stackblitz.com/edit/angular-6bwxuk?file=app.component.ts).