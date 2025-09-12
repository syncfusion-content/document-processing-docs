---
layout: post
title: Displaying Custom Items in Typescript PDF Viewer control | Syncfusion
description: Learn how to display custom items in the custom stamp in Syncfusion Typescript PDF Viewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Displaying Custom Items in Custom Stamp Dropdown in PDF Viewer

### Overview

This guide explains how to add and display custom items in the custom stamp dropdown menu of Syncfusion's PDF Viewer using TypeScript. This feature allows users to easily access and apply custom stamps to their PDF documents.

### Steps to Show Custom Items in Custom Stamp Dropdown

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Configure Custom Stamp Settings

Within the PDF Viewer setup, utilize `customStampSettings` to specify the custom stamps that should appear in the dropdown menu.

```ts

const pdfviewer: PdfViewer = new PdfViewer({
    documentPath: 'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
    resourceUrl: 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib',
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

By following these instructions, you can successfully configure to display custom items in the custom stamp dropdown, allowing users to easily apply personalized stamps to their documents.

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/How%20to)