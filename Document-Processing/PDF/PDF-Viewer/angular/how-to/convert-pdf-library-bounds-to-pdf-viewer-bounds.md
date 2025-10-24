---
layout: post
title: Convert PDF Library bounds to PDF Viewer bounds | Syncfusion
description: Learn how to convert PDF Library bounds into PDF Viewer bounds when exporting annotations, ensuring accurate placement in the Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Convert PDF Library bounds to PDF Viewer bounds

When exporting annotations from the PDF Library, convert the bounds values into the PDF Viewer format to ensure accurate placement.

Steps to convert bounds values

**Step 1:** Initialize the PdfViewer instance

Create an instance of the PdfViewer and configure it with the required services.

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

Convert the exported blob URL to an object and then extract and convert the annotation bounds.

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

**Step 3:** Convert Blob URL to object

Fetch the blob data and convert it into a JSON object.

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

Conclusion

These steps convert PDF Library bounds values into PDF Viewer bounds values when exporting annotations as JSON, maintaining accurate annotation placement.

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/How%20to)
