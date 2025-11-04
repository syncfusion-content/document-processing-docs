---
layout: post
title: Open or close the Bookmark pane programmatically | Syncfusion
description: Learn how to open and close the Bookmark pane programmatically in the Syncfusion React PDF Viewer using openBookmarkPane and closeBookmarkPane.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Open or close the Bookmark pane programmatically

Open the Bookmark pane programmatically using the `openBookmarkPane()` method.

The following steps are used to open the Bookmark.

**Step 1:** Follow the steps in the [Get started with React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/React/getting-started) guide to create a sample.

**Step 2:** Insert the following code snippet to implement the functionality for opening the Bookmark pane:

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