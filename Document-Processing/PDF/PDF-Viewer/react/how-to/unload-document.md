---
layout: post
title: Unload document in React Pdfviewer component | Syncfusion
description: Learn here all about Unload document in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Unload document in React Pdfviewer component

The PDF Viewer provides the [unload()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#unload) method to remove the currently loaded PDF from the viewer instance. Use this API to free memory or reset the viewer when navigating between documents or closing the viewer.

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