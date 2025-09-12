---
layout: post
title: Converting Library Bounds in JavaScript PdfViewer | Syncfusion
description: Learn how to convert Library bounds into Viewer bounds in Syncfusion Javascript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Converting PDF Library Bounds to PDF Viewer Bounds

### Overview

When exporting annotations from the PDF Library, you may need to convert the bounds values into the PDF Viewer format. This guide will help you achieve that using the Syncfusion PDF Viewer component.

### How to Convert Bounds Values

**Step 1:** Initialize the PdfViewer Instance

Create an instance of the PdfViewer and configure it with the required services.

```js
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer'
});

ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.TextSearch,
  ej.pdfviewer.Print,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormDesigner,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.PageOrganizer
);

pdfviewer.appendTo('#PdfViewer');
```

**Step 2:** Handle Export Success

Convert the exported blob URL to an object and then extract and convert the annotation bounds.

```js
pdfviewer.exportSuccess = function (args) {
  console.log(args.exportData);
  const blobURL = args.exportData;

  // Converting the exported blob into object
  convertBlobURLToObject(blobURL)
    .then((objectData) => {
      console.log(objectData);
      var datas = objectData;
      var shapeAnnotationData = datas['pdfAnnotation'][0]['shapeAnnotation'];
      shapeAnnotationData.map(data => {
        if (data && data.rect && parseInt(data.rect.width)) {

          var pageHeight = pdfviewer.getPageInfo(parseInt(data.page)).height;

          // Converting PDF Library values into PDF Viewer values.
          var rect = {
            x: (parseInt(data.rect.x) * 96) / 72,
            y: (parseInt(pageHeight) - parseInt(data.rect.height)) * 96 / 72,
            width: (parseInt(data.rect.width) - parseInt(data.rect.x)) * 96 / 72,
            height: (parseInt(data.rect.height) - parseInt(data.rect.y)) * 96 / 72,
          };
        }
        if ((data.type == 'Line' || data.type == 'Arrow') && data.start && data.end) {
          // Split and parse the start and end points
          const [startX, startY] = data.start.split(',').map(Number);
          const [endX, endY] = data.end.split(',').map(Number);

          // Convert to PDF Viewer coordinates
          var pageHeight = pdfviewer.getPageInfo(parseInt(data.page)).height;
          const pdfStartX = (startX * 96) / 72;
          const pdfStartY = (parseInt(pageHeight) - startY) * 96 / 72;
          const pdfEndX = (endX * 96) / 72;
          const pdfEndY = (parseInt(pageHeight) - endY) * 96 / 72;

          rect = {
            x: Math.min(pdfStartX, pdfEndX),
            y: Math.min(pdfStartY, pdfEndY),
            width: Math.abs(pdfEndX - pdfStartX),
            height: Math.abs(pdfEndY - pdfStartY),
          };
        }

        if (rect != null && data.type != 'Text') {
          console.log(data.name);
          console.log(rect);
          console.log("-------------------------");
        }
      });
    })
    .catch((error) => {
      console.error('Error converting Blob URL to object:', error);
    });
};
```

**Step 3:** Create a Function to Convert Blob URL to Object

This function fetches the blob data and converts it into a JSON object.

```js
// Function to convert Blob URL to object
function convertBlobURLToObject(blobURL) {
  return fetch(blobURL)
    .then((response) => response.blob())
    .then((blobData) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(JSON.parse(reader.result));
        };
        reader.onerror = reject;
        reader.readAsText(blobData);
      });
    });
}
```

### Conclusion

By following these steps, you can successfully convert PDF Library bounds values into PDF Viewer bounds values when exporting annotations as JSON. This will help maintain accuracy in the annotation placement and ensure a seamless user experience.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)