---
layout: post
title: Open Bookmark in Typescript PDF Viewer control | Syncfusion
description: Learn here all about Open Bookmark in Syncfusion Typescript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Open and Close Bookmark pane programmatically

The PDF Viewer library allows you to open the Bookmark pane programmatically using the **openBookmarkPane()** method.

The following steps are used to open the Bookmark.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Insert the following code snippet to implement the functionality for opening the Bookmark pane:

```html
<button id="openBookmark">Open Bookmark Pane</button>
```

```ts
document.getElementById('openBookmark').addEventListener('click', () => {
  // Open Bookmark pane
  viewer.bookmarkViewModule.openBookmarkPane();
});
```

Similarly, to close the Bookmark pane programmatically, employ the following code snippet:

```html
<button id="closeBookmark">Close Bookmark Pane</button>
```

```ts
document.getElementById('closeBookmark').addEventListener('click', () => {
  // close Bookmark pane
  viewer.bookmarkViewModule.closeBookmarkPane();
});