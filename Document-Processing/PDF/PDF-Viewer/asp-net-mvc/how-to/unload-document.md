---
layout: post
title: Unload Document in EJ2 ASP.NET MVC PDF Viewer | Syncfusion
description: Learn here all about Unload Document in ASP.NET MVC PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Unload Document
publishingplatform: document-processing
documentation: ug
---


# Unload the PDF document programmatically

The PDF Viewer library allows you to unload the PDF document being displayed in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/documentation/api/pdfviewer/#unload) method.

The `unload()` method is essential for managing memory and data integrity in the PDF Viewer. When a PDF is loaded, its data is cached on the server, while rendered pages and annotation data are stored in the browser's session storage.

The `unload()` method is called internally to clear this cached data in the following scenarios:
*   When a new document is loaded.
*   When the browser window/tab is closed or refreshed.

This automatic cleanup ensures that no residual data remains, which helps reduce server-side memory consumption.

Additionally, the `unload()` method is automatically invoked when using the `viewer.load()` method to load a new document. This ensures the currently displayed PDF is properly unloaded and all related cache is cleared on both the client and server sides.

You can also call the `unload()` method programmatically. This is useful when you need to explicitly clear the viewer and release all associated client and server-side resources before the user navigates away or closes the session manually.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

```html
<button type="button" onclick="unLoad()">Unload Document</button>

<script>
    // Unload the PDF document.
    function unLoad() {
        var viewer = document.getElementById('pdfViewer').ej2_instances[0];
        viewer.unload();
    }
</script>
```

Download the Sample, [how to unload the PDF document programmatically](https://www.syncfusion.com/downloads/support/directtrac/general/ze/EJ2MvcSample-1421635547.zip)