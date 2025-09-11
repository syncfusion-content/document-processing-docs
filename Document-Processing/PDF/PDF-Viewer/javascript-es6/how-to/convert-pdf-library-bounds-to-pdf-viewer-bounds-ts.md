---
layout: post
title: Converting Library Bounds in JavaScript PdfViewer | Syncfusion
description: Learn how to convert Library bounds into Viewer bounds in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Converting PDF Library Bounds to PDF Viewer Bounds

### Overview

When exporting annotations from the PDF Library, you may need to convert the bounds values into the PDF Viewer format. This guide will help you achieve that using the Syncfusion PDF Viewer component.

### How to Convert Bounds Values

**Step 1:** Initialize the PdfViewer Instance

Create an instance of the PdfViewer and configure it with the required services.

```ts
import { PdfViewer, TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-pdfviewer';

// Inject required modules
PdfViewer.Inject(TextSelection, TextSearch, Print, Navigation, Toolbar, Magnification, Annotation, FormDesigner, FormFields);

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    serviceUrl: 'https://document.syncfusion.com/web-services/pdf-viewer/api/pdfviewer/'
});

// Append the PdfViewer to the DOM
pdfviewer.appendTo('#PdfViewer');
```

**Step 2:** Handle Export Success

Convert the exported blob URL to an object and then extract and convert the annotation bounds.

```ts
// Event for export success
pdfviewer.exportSuccess = (args: { exportData: string }) => {
    console.log(args.exportData);
    const blobURL = args.exportData;

    // Converting the exported blob into object
    convertBlobURLToObject(blobURL)
        .then((objectData) => {
            console.log(objectData);
            const datas = objectData;
            const shapeAnnotationData = datas['pdfAnnotation'][0]['shapeAnnotation'];

            shapeAnnotationData.forEach((data: any) => {
                let rect: { x: number; y: number; width: number; height: number } | null = null;

                if (data && data.rect && parseInt(data.rect.width)) {

                    //Get PageSize using getPageInfo API
                    const pageInfo = pdfviewer.getPageInfo(parseInt(data.page));
                    const pageHeight: number = pageInfo?.height ?? 0;
                    // Converting PDF Library values into PDF Viewer values.
                    rect = {
                        x: (parseInt(data.rect.x) * 96) / 72,
                        y: (pageHeight - parseInt(data.rect.height)) * 96 / 72,
                        width: (parseInt(data.rect.width) - parseInt(data.rect.x)) * 96 / 72,
                        height: (parseInt(data.rect.height) - parseInt(data.rect.y)) * 96 / 72,
                    };
                }

                if ((data.type === 'Line' || data.type === 'Arrow') && data.start && data.end) {
                    const [startX, startY] = data.start.split(',').map(Number);
                    const [endX, endY] = data.end.split(',').map(Number);

                    //Get PageSize using getPageInfo API
                    const pageInfo = pdfviewer.getPageInfo(parseInt(data.page));
                    const pageHeight: number = pageInfo?.height ?? 0;

                    const pdfStartX = (startX * 96) / 72;
                    const pdfStartY = (pageHeight - startY) * 96 / 72;
                    const pdfEndX = (endX * 96) / 72;
                    const pdfEndY = (pageHeight - endY) * 96 / 72;

                    rect = {
                        x: Math.min(pdfStartX, pdfEndX),
                        y: Math.min(pdfStartY, pdfEndY),
                        width: Math.abs(pdfEndX - pdfStartX),
                        height: Math.abs(pdfEndY - pdfStartY),
                    };
                }

                if (rect != null && data.type !== 'Text') {
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

```ts
// Function to convert Blob URL to object
function convertBlobURLToObject(blobURL: string): Promise<any> {
    return fetch(blobURL)
        .then((response) => response.blob())
        .then((blobData) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    try {
                        resolve(JSON.parse(reader.result as string));
                    } catch (err) {
                        reject(err);
                    }
                };
                reader.onerror = reject;
                reader.readAsText(blobData);
            });
        });
}
```

### Conclusion

By following these steps, you can successfully convert PDF Library bounds values into PDF Viewer bounds values when exporting annotations as JSON. This will help maintain accuracy in the annotation placement and ensure a seamless user experience.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to/)