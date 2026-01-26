---
layout: post
title: Get Base64 from loaded PDF in JavaScript PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion JavaScript PDF Viewer using saveAsBlob and FileReader.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Get Base64 value from a loaded PDF in JavaScript

### Overview

This guide shows how to get the base64-encoded value of a PDF loaded in the Syncfusion PDF Viewer using JavaScript. This is useful for sending the PDF as a base64 string or processing it on the client.

### How to Retrieve Base64 Value

**Step 1:** Follow the steps in the [Get started with JavaScript ES5 PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) guide to create a sample.


**Step 2:** Create a Button in Your HTML File

Add a button element in your HTML file that will trigger the conversion to a base64 string.

```html
<button id="getBase64">Get Base64</button>
<div id="PdfViewer"></div>
```

**Step 3:** Add a Button Click Event Listener

Add an event listener to the button to trigger the base64 retrieval function.

```js
document.getElementById('getBase64').addEventListener('click', function() {
  base64ofloadedDocument();  // Call the function to get the Base64 string
});
```

**Step 4:** Retrieve Base64 of the loaded document

Create a function that uses `saveAsBlob`, and convert the blob to a Base64 string.

```js
function base64ofloadedDocument() {
  pdfviewer.saveAsBlob().then(function(value) {
    var data = value;
    var reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = function() {
      var base64data = reader.result;
      console.log(base64data);  // Outputs the base64 string of the PDF
    };
  });
}
```
### Conclusion

By following these steps, a loaded PDF can be converted to a Base64 string on button click for transfer or processing.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)