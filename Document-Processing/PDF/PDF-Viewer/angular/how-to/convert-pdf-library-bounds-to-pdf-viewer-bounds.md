---
layout: post
title: Converting Library Bounds in Angular PDF Viewer | Syncfusion
description: Learn how to convert library bounds into viewer bounds in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Convert PDF Library Bounds to PDF Viewer Bounds

### Overview

When exporting annotations from the PDF Library, the bounds values may need to be converted into the PDF Viewer format. This guide helps with performing this conversion using the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer component.

### How to convert bounds values

**Step 1:** Initialize the PDF Viewer instance

Create an instance of the PDF Viewer and configure it with the required services:

```html
      <ejs-pdfviewer
        id="pdfViewer"
        [documentPath]="document"
        [serviceUrl]="serviceUrl"
        style="height: 640px; display: block;"
        (exportSuccess)="handleExportSuccess($event)">
      </ejs-pdfviewer>
```

**Step 2:** Handle export success

Convert the exported blob URL to an object, and then extract and convert the annotation bounds:

```typescript
  // Event for export success
  handleExportSuccess(args: ExportSuccessEventArgs) {
    const blobURL = args.exportData;
    // Converting the exported blob into object
    this.convertBlobURLToObject(blobURL)
      .then(objectData => {
        console.log(objectData);
        const shapeAnnotationData = objectData.pdfAnnotation[0].shapeAnnotation;
        shapeAnnotationData.forEach((data: any) => {
          if (data && data.rect && parseInt(data.rect.width)) {
            const viewer = (document.getElementById('pdfViewer') as any).ej2_instances[0];
            const pageHeight = viewer.getPageInfo(parseInt(data.page)).height;
            // Converting PDF Library values into PDF Viewer values.
            const rect = {
              x: (parseInt(data.rect.x) * 96) / 72,
              y: (parseInt(pageHeight) - parseInt(data.rect.height)) * 96 / 72,
              width: (parseInt(data.rect.width) - parseInt(data.rect.x)) * 96 / 72,
              height: (parseInt(data.rect.height) - parseInt(data.rect.y)) * 96 / 72,
            };
            console.log(data.name);
            console.log(rect);
            console.log("-------------------------");
          }
        });
      })
      .catch(error => {
        console.error('Error converting Blob URL to object:', error);
      });
  }
```

**Step 3:** Create a function to convert the blob URL to an object

This function fetches the blob data and converts it into a JSON object:

```typescript
  // Function to convert Blob URL to object
  convertBlobURLToObject(blobURL: string): Promise<any> {
    return fetch(blobURL)
      .then(response => response.blob())
      .then(blobData => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(JSON.parse(reader.result as string));
          };
          reader.onerror = reject;
          reader.readAsText(blobData);
        });
      });
  }
```

### Conclusion

By following these steps, PDF Library bounds values can be successfully converted into PDF Viewer bounds values when exporting annotations as JSON. This helps maintain accuracy in annotation placement and ensures a seamless user experience.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)
