---
layout: post
title: Open Bookmark in Angular PDF Viewer component | Syncfusion
description: Learn here all about Open Bookmark in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open and close the bookmark pane programmatically

The PDF Viewer exposes APIs to open and close the bookmark pane programmatically. Use `openBookmarkPane()` and `closeBookmarkPane()` to control the bookmark pane from application code.

Follow these steps to call the bookmark APIs from the application.

**Step 1:** Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide.

**Step 2:** Insert the following code snippet to implement opening the bookmark pane:

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

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to/Open%20and%20Close%20bookmark%20pane)