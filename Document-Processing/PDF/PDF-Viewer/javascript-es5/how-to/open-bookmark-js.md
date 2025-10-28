---
layout: post
title: Open or close the Bookmark pane programmatically in JavaScript PDF Viewer | Syncfusion
description: Learn how to open and close the Bookmark pane programmatically in the Syncfusion JavaScript PDF Viewer using openBookmarkPane and closeBookmarkPane.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open or close the Bookmark pane programmatically

Open the Bookmark pane programmatically using the `openBookmarkPane()` method.

The following steps are used to open the Bookmark.

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) guide to create a sample.

**Step 2:** Insert the following code snippet to implement the functionality for opening the Bookmark pane:

```html
<button id="openBookmark">Open Bookmark Pane</button>
```

```js
document.getElementById('openBookmark').addEventListener('click', () => {
  // Open Bookmark pane
  viewer.bookmarkViewModule.openBookmarkPane();
});
```

To close the Bookmark pane programmatically, use the following code:

```html
<button id="closeBookmark">Close Bookmark Pane</button>
```

```js
document.getElementById('closeBookmark').addEventListener('click', () => {
  // close Bookmark pane
  viewer.bookmarkViewModule.closeBookmarkPane();
});

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to/Open%20and%20Close%20bookmark%20pane)