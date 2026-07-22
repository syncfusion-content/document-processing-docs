---
layout: post
title: Retrieve document ID in React PDF Viewer | Syncfusion
description: Learn how to retrieve the document ID in the Syncfusion React PDF Viewer to identify, track, and manage loaded PDF documents.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve document ID in React PDF Viewer

This article shows how to retrieve the document ID for a PDF loaded in the React PDF Viewer. The value is held in `sessionStorage` under the key `hashId` and is written after a document is loaded, so it is `null` until a PDF is opened in the viewer.

Refer to the following minimal example that logs the stored document ID when a button is clicked:

```
<button onclick="uniqueId()">UniqueId</button>

<script>
    // Triggered when the UniqueId button is clicked.
    function uniqueId() {
        //Prints the PDF document id in the console window.
        console.log(window.sessionStorage.getItem("hashId"));
    }
</script>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Get%20hash%20id%20from%20storage).

## See also
- [Getting started with React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started)
- [Load documents dynamically in React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/how-to/load-document)