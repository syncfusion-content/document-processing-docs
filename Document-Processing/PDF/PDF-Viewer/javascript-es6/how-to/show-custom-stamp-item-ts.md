---
layout: post
title: Show custom items in the Custom Stamp dropdown | Syncfusion
description: Learn how to display custom items in the Custom Stamp dropdown using customStampSettings in the Syncfusion TypeScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Show custom items in the custom stamp dropdown in TypeScript

### Overview

Add and display custom items in the Custom Stamp dropdown using TypeScript. This enables users to quickly apply personalized stamps in the PDF Viewer.

### Steps to show custom items in the custom stamp dropdown

**Step 1:** Create a basic TypeScript PDF Viewer sample using the getting started guide: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started

**Step 2:** Configure custom stamp settings

Use `customStampSettings` to define stamps that appear in the dropdown. The `customStampImageSource` value accepts a Base64 data URI or an absolute URL pointing to an image.

```ts

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/31.1.23/dist/ej2-pdfviewer-lib',
    customStampSettings: {
        isAddToMenu: true,
        customStamps: [
          {
            customStampName: 'Image1',
            customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
         },
      {
        customStampName: 'Image2',
        customStampImageSource: 'data:image/png;base64,...' // Provide a valid base64 or URL for the image
        }
    ],
    enableCustomStamp: true,
    opacity: 1
  }
});

```

By following these steps, the Custom Stamp dropdown will display the configured items, allowing users to apply personalized stamps to documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)