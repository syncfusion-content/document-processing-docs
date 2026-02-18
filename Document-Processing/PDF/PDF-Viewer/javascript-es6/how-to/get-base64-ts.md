---
layout: post
title: Get Base64 from loaded PDF in TypeScript PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion TypeScript PDF Viewer using saveAsBlob and FileReader.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Retrieve Base64 from a PDF in TypeScript PDF Viewer

### Overview

This guide shows how to obtain the Base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using TypeScript. Producing a Base64 string is useful for sending the PDF to a server, embedding it in JSON payloads, or client-side processing.

### How to retrieve the Base64 value

**Step 1:**  Create the PDF Viewer sample**

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide for the TypeScript PDF Viewer.


**Step 2:** Set up the TypeScript component**

Create an TypeScript component and update the template to include a button that triggers conversion to a Base64 string. The samples below show both standalone and server-backed viewer configurations.

```html
<button id="getBase64">Get Base64</button>
<div id="PdfViewer"></div>
```

**Step 3:** Add a Button Click Event Listener

Add an event listener to the button to trigger the base64 retrieval function.

```ts
document.getElementById('getBase64')?.addEventListener('click', base64ofloadedDocument);
```

**Step 4:** Retrieve Base64 of the loaded document

Create a function that uses `saveAsBlob`, and convert the blob to a Base64 string.

```ts
// Function to get Base64 of the loaded document
function base64ofloadedDocument() {
    pdfviewer.saveAsBlob().then((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64data = reader.result;
            console.log(base64data);
        };
         // Read the blob as a data URL to get Base64
        reader.readAsDataURL(blob);
    })
}
```
### Conclusion

By implementing these steps in the TypeScript component, a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can be converted into a Base64-encoded data URL when a button is clicked. This facilitates the manipulation or transfer of PDF data as needed

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)