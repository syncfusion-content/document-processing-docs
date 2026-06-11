---
layout: post
title: Get Base64 from loaded PDF in JavaScript PDF Viewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF in the Syncfusion JavaScript PDF Viewer using saveAsBlob and FileReader.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve Base64 from a PDF in JavaScript PDF Viewer

### Overview

This guide shows how to obtain the Base64-encoded value of a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer using JavaScript. Producing a Base64 string is useful for sending the PDF to a server, embedding it in JSON payloads, or client-side processing.

### How to retrieve the Base64 value

**Step 1:**  Create the PDF Viewer sample**

Follow the [Getting Started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) guide for the JavaScript PDF Viewer.


**Step 2:** Set up the JavaScript component**

Create an JavaScript component and update the template to include a button that triggers conversion to a Base64 string. The samples below show both standalone and server-backed viewer configurations.

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

By implementing these steps in the JavaScript component, a PDF document loaded in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer can be converted into a Base64-encoded data URL when a button is clicked. This facilitates the manipulation or transfer of PDF data as needed

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)