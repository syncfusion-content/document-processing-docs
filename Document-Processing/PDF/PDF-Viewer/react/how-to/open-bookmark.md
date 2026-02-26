---
layout: post
title: Open or close the Bookmark pane programmatically | Syncfusion
description: Learn how to open and close the Bookmark pane programmatically in the Syncfusion React PDF Viewer using openBookmarkPane and closeBookmarkPane.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Open and close the bookmark pane programmatically

The PDF Viewer exposes APIs to open and close the bookmark pane programmatically. Use `openBookmarkPane()` and `closeBookmarkPane()` to control the bookmark pane from application code.

Follow these steps to call the bookmark APIs from the application.

**Step 1:** Create a basic PDF Viewer sample using the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide.

**Step 2:** Insert the following code snippet to implement opening the bookmark pane:

```
<button onClick={openBookmark}>Open Bookmark Pane</button>
```

```ts
 <script>
      function openBookmark() {
         var viewer = document.getElementById('container').ej2_instances[0];
         // Open Bookmark pane
         viewer.bookmarkViewModule.openBookmarkPane();
      }
   </script>
```

To close the Bookmark pane programmatically, use the following code:

```
<button onClick={closeBookmark}>Close Bookmark Pane</button>
```

```ts
<script>
      function closeBookmark() {
         var viewer = document.getElementById('container').ej2_instances[0];
         // close Bookmark pane
         viewer.bookmarkViewModule.closeBookmarkPane();
      }
   </script>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Open%20and%20Close%20bookmark%20pane)