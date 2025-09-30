---
layout: post
title: Open Bookmark in Angular PDF Viewer | Syncfusion
description: Learn how to open and close the bookmark pane programmatically in Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open and Close Bookmark Pane Programmatically

The PDF Viewer allows programmatic opening of the Bookmark pane using the **openBookmarkPane()** method.

To programmatically open the Bookmark pane, follow these steps:

**Step 1:** Refer to the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to set up a basic Angular PDF Viewer.

**Step 2:** Insert the following code snippet to implement the functionality for opening the Bookmark pane:

```html
<button (click)="openBookmark()">Open Thumbnail Pane</button>
```

```ts
openBookmark() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  // Open Bookmark pane.
  viewer.bookmarkViewModule.openBookmarkPane();
}
```
Similarly, to close the Bookmark pane programmatically, employ the following code snippet:

```html
<button (click)="closeBookmark()">Close Bookmark Pane</button>
```

```ts
closeBookmark() {
  var viewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  // Close Bookmark pane.
  viewer.bookmarkViewModule.closeBookmarkPane();
}
```

For a complete example, refer to the sample demonstrating [how to open and close the bookmark pane programmatically](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Open%20and%20Close%20bookmark%20pane)