---
layout: post
title: Save PDF files to Azure Blob Storage in TypeScript PDF Viewer | Syncfusion
description: Learn how to save PDF files to Azure Blob Storage using the Syncfusion TypeScript PDF Viewer component in standalone and server-backed configurations.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save PDF files to Azure Blob Storage in TypeScript

The TypeScript PDF Viewer component supports saving PDF files to Azure Blob Storage using either a standalone (browser) configuration or a server-backed configuration. The following steps demonstrate both approaches and include prerequisites and security guidance for production deployments.

## Using Standalone PDF Viewer

Follow the steps below to save a PDF file to Azure Blob Storage from an TypeScript PDF Viewer.

**Step 1:** Create a PDF Viewer sample in TypeScript

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample in TypeScript. This sets up the basic structure of the PDF Viewer application.

**Step 2:** Modify the `src/app/app.ts` file in the Angular project

1. Import the required namespaces at the top of the file:

```typescript
import { BlockBlobClient } from "@azure/storage-blob";
```

2. Add the following private property to `app.ts`, and assign the value from the configuration to the corresponding property.

N> Replace **Your SAS Url in Azure** with the SAS URL generated for the target blob. For production, generate short-lived SAS tokens on the server rather than embedding SAS URLs in client code.

```typescript
private SASUrl: string = "*Your SAS Url in Azure*";
```

3. Configure a custom toolbar item for the download function to save a PDF file to Azure Blob Storage.

```typescript
let toolItem1: CustomToolbarItemModel = {
    prefixIcon: 'e-icons e-pv-download-document-icon',
    id: 'download_pdf',
    tooltipText: 'Download file',
    align: 'right'
};

pdfviewer.toolbarSettings = { toolbarItems: [ 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']}

pdfviewer.toolbarClick = function (args) {
  if (args.item && args.item.id === 'download_pdf') {
    saveDocument();
  }
};
```

4. Retrieve the PDF Viewer instance and save the current PDF as a Blob. Then, read the Blob as an ArrayBuffer and upload the ArrayBuffer to Azure Blob Storage using `BlockBlobClient`.

```typescript
function saveDocument() {
  pdfviewer.saveAsBlob().then(function (value) {
    var reader = new FileReader();
    reader.onload = async () => {
      if (reader.result) {
        const arrayBuffer: any = reader.result;
        const blobClient = new BlockBlobClient(SASUrl);
        // Upload data to the blob
        const uploadBlobResponse = await blobClient.upload(arrayBuffer, arrayBuffer.byteLength);
        console.log(`Upload blob successfully`, uploadBlobResponse.requestId);
      }
    };
    reader.readAsArrayBuffer(value);
  });
};
```

N> Install the Azure Storage Blob client package for browser use: `npm install @azure/storage-blob`. For server-side operations use `dotnet add package Azure.Storage.Blobs`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).