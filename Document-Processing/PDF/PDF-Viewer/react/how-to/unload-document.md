---
layout: post
title: Unload document in React Pdfviewer component | Syncfusion
description: Learn here all about Unload document in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Unload document
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Unload document in React Pdfviewer component

The PDF Viewer library allows you to unload the PDF document being displayed in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#unload) method.

 The `unload()` method is essential for managing memory and data integrity in the PDF Viewer. When a PDF is loaded, its data is cached on the server, while rendered pages and annotation data are stored in the browser's session storage.

The `unload()` method is called internally to clear this cached data in the following scenarios:
*   When a new document is loaded.
*   When the browser window/tab is closed or refreshed.

This automatic cleanup ensures that no residual data remains, which helps reduce server-side memory consumption.

Additionally, the `unload()` method is automatically invoked when using the `viewer.load()` method to load a new document. This ensures the currently displayed PDF is properly unloaded and all related cache is cleared on both the client and server sides.

You can also call the `unload()` method programmatically. This is useful when you need to explicitly clear the viewer and release all associated client and server-side resources before the user navigates away or closes the session manually.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

   ```
     <button onclick="unload()">Unload Document</button>

   <script>
   function unload(){
    var viewer = document.getElementById('container').ej2_instances[0];
    // Unload the PDF document.
    viewer.unload();
  }
   </script>
  ```

Find the sample [how to unload the PDF document programmatically](https://stackblitz.com/edit/react-ffbe8v?file=public%2Findex.html)