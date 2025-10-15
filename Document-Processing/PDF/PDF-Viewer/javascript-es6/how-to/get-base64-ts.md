---
layout: post
title: Get Base64 from loaded PDF in TypeScript PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion TypeScript PDF Viewer using saveAsBlob and FileReader.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Get Base64 value from a loaded PDF

### Overview

This guide shows how to get the base64-encoded value of a PDF loaded in the Syncfusion PDF Viewer using TypeScript. This is useful for sending the PDF as a base64 string or processing it on the client.

### How to Retrieve Base64 Value

**Step 1:** Follow the steps in the [Get started with JavaScript ES6 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) guide to create a sample.


**Step 2:** Create a Button in Your HTML File

Add a button element in your HTML file that will trigger the conversion to a base64 string.

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

By following these steps, a loaded PDF can be converted to a Base64 string on button click for transfer or processing.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)