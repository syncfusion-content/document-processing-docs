---
layout: post
title: Open Bookmark in React PDF Viewer component | Syncfusion
description: Learn here all about Open Bookmark in Syncfusion React PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open and Close Bookmark pane programmatically

The PDF Viewer library allows you to open the Bookmark pane programmatically using the **openBookmarkPane()** method.

The following steps are used to open the Bookmark.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.

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

Similarly, to close the Bookmark pane programmatically, employ the following code snippet:

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