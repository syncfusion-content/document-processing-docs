---
layout: post
title: How to Open or Hide the Bookmark Pane in JavaScript | Syncfusion
description: Open or close the bookmark pane programmatically in the JavaScript (ES6) PDF Viewer using openBookmarkPane and closeBookmarkPane for custom toolbars.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# How to Open or Hide the Bookmark Pane in JavaScript (ES6) PDF Viewer

The PDF Viewer exposes APIs to open and close the bookmark pane programmatically. Use `openBookmarkPane()` and `closeBookmarkPane()` to control the bookmark pane from application code.

Follow these steps to call the bookmark APIs from the application.

**Step 1:** Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide.

**Step 2:** Insert the following code snippet to implement opening the bookmark pane:

```html
<button id="openBookmark">Open Bookmark Pane</button>
```

```ts
document.getElementById('openBookmark').addEventListener('click', () => {
  // Open Bookmark pane
  viewer.bookmarkViewModule.openBookmarkPane();
});
```

To close the Bookmark pane programmatically, use the following code:

```html
<button id="closeBookmark">Close Bookmark Pane</button>
```

```ts
document.getElementById('closeBookmark').addEventListener('click', () => {
  // Close Bookmark pane
  viewer.bookmarkViewModule.closeBookmarkPane();
});
```
