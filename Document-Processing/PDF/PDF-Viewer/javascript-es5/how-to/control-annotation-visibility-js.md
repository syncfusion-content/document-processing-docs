---
layout: post
title: Control annotation visibility in JavaScript PDF Viewer | Syncfusion
description: Learn how to control the visibility of PDF annotations in the JavaScript PDF Viewer, ensuring annotations appear only in the viewer as needed.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Control annotation visibility in PDF Viewer

### Overview

This guide explains how to control the visibility of PDF annotations in documents loaded and saved using the Syncfusion PDF Viewer in JavaScript, so annotations are visible only in the viewer when required.

### Steps to control annotation visibility

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add buttons for annotation modification and downloading

Include buttons in the HTML for modifying annotations and downloading the PDF.

```html
<button id="save">Download</button>
<div id="PdfViewer"></div>
```

**Step 3:** Add annotations to the PDF document

Add the following code to insert annotations. Additional annotations can be included as needed.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/annotations-v1.pdf',
    resourceUrl: "https://cdn.syncfusion.com/ej2/28.1.33/dist/ej2-pdfviewer-lib",
  });
  ej.pdfviewer.PdfViewer.Inject(ej.pdfviewer.TextSelection, ej.pdfviewer.TextSearch, ej.pdfviewer.Print, ej.pdfviewer.Navigation, ej.pdfviewer.Toolbar,
    ej.pdfviewer.Magnification, ej.pdfviewer.Annotation, ej.pdfviewer.FormDesigner, ej.pdfviewer.FormFields, ej.pdfviewer.PageOrganizer);
    pdfviewer.appendTo('#PdfViewer');
    pdfviewer.documentLoad= function(){
        //Code snippet to add basic annotations. You can also include other annotations as needed.
            pdfviewer.annotation.addAnnotation("Highlight", {
                bounds: [{x: 97, y: 610, width: 350, height: 14}],
                pageNumber: 1
            });
            pdfviewer.annotation.addAnnotation("Underline", {
                bounds: [{x: 97, y: 723, width: 353.5, height: 14}],
                pageNumber: 1
            });
            pdfviewer.annotation.addAnnotation("Strikethrough", {
                bounds: [{x: 97, y: 836, width: 376.5, height: 14}],
                pageNumber: 1
            });
    };
```

**Step 4:** Add event listeners for button clicks

Attach an event listener to handle annotation visibility changes and document download.

```js
    // Add event listener to the button with ID 'download'
    document.getElementById('save').addEventListener('click', save);
```

**Step 5:** Modify annotation flags

Implement a function that updates annotation visibility flags for the document.

```js

    // Function to get Base64 of the loaded document and modify annotation flags
    function save() {
    // Assuming pdfviewer is globally accessible or a part of another object
    pdfviewer.saveAsBlob().then(blob => {
        const reader = new FileReader();

        reader.onload = function() {
            let base64data = reader.result;

            // Extract base64 string from Data URL
            const base64EncodedData = base64data.split('base64,')[1];

            // Create a PdfDocument instance with base64 data
            const document1 = new ej.pdf.PdfDocument(base64EncodedData);

            // Modify flag for each annotation
            for (let i = 0; i < document1.pageCount; i++) {
                const page = document1.getPage(i);

                for (let j = 0; j < page.annotations.count; j++) {
                    const annot = page.annotations.at(j);

                    // Set flag to noView
                    annot.flags |= ej.pdf.PdfAnnotationFlag.noView;
                }
            }

            // Save modified document as a blob
            document1.saveAsBlob().then(modifiedBlob => {
                const internalReader = new FileReader();

                internalReader.onload = function() {
                    const modifiedBase64 = internalReader.result;

                    // Create a link to download the modified PDF
                    const downloadLink = document.createElement('a');
                    downloadLink.href = modifiedBase64;
                    downloadLink.download = 'modified.pdf';
                    downloadLink.click();
                };

                internalReader.readAsDataURL(modifiedBlob.blobData);
            });
        };

        reader.readAsDataURL(blob);
    });
}
```

Following these steps ensures annotations are visible in the Syncfusion PDF Viewer while controlling their visibility in the downloaded PDF.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)