---
layout: post
title: Retrieving Base64 Value in JavaScript PdfViewer | Syncfusion
description: Learn how to retrieve the Base64 value of a loaded PDF document in the Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Retrieving Base64 Value from a PDF in PDF Viewer

### Overview

This guide demonstrates how to fetch the base64-encoded value of a PDF document loaded in the Syncfusion PDF Viewer using JavaScript. This is useful for sending the PDF as a base64 string or processing it in the front end.

### How to Retrieve Base64 Value

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.


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

**Step 4:** Retrieve Base64 of the Loaded Document

Create a function that uses saveAsBlob, and convert the blob to a base64 string.

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

By implementing these steps, you can convert a PDF document loaded in the Syncfusion PDF Viewer to a base64 string on button click, facilitating the manipulation or transfer of PDF data as needed.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)