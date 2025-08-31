---
layout: post
title: Retrieve id of the document in React Pdfviewer component | Syncfusion
description: Learn here all about Retrieve id of the document in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Retrieve id of the document
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve id of the document in React Pdfviewer component

View the PDF document's id by passing the `hashId` value to the `getItem()` method of session storage API.

Refer to the following code to get the id of a PDF document in a button click.

```
<button onclick="uniqueId()">UniqueId</button>

<script>
    //Event triggers when you click the UniqueId button.
    function uniqueId() {
        //Prints the PDF document id in the console window.
        console.log(window.sessionStorage.getItem("hashId"));
    }
</script>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/How%20to/Get%20hash%20id%20from%20storage).