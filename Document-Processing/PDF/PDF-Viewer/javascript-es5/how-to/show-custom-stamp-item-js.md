---
layout: post
title: Show custom items in the Custom Stamp dropdown in JavaScript PDF Viewer | Syncfusion
description: Learn how to display custom items in the Custom Stamp dropdown using customStampSettings in the Syncfusion JavaScript PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Show custom items in the custom stamp dropdown

### Overview

Add and display custom items in the Custom Stamp dropdown using JavaScript. This enables users to quickly apply personalized stamps in the PDF Viewer.

### Steps to show custom items in the custom stamp dropdown

**Step 1:** Create a basic JavaScript PDF Viewer sample using the getting started guide: https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started

**Step 2:** Configure custom stamp settings

Use `customStampSettings` to define stamps that appear in the dropdown. The `customStampImageSource` value accepts a Base64 data URI or an absolute URL pointing to an image.

```js

// Initialize the PDF Viewer component
var pdfviewer = new ej.pdfviewer.PdfViewer({
  documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
  resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
  // Configure custom stamp settings
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

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/How%20to)