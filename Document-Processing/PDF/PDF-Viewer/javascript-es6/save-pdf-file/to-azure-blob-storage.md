---
layout: post
title: Save PDF files to Azure Blob Storage in TypeScript PDF Viewer | Syncfusion
description: Learn how to save PDF files to Azure Blob Storage using the Syncfusion TypeScript PDF Viewer component in standalone and server-backed configurations.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save PDF files to Azure Blob Storage

The TypeScript PDF Viewer component supports saving PDF files to Azure Blob Storage using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To save a PDF file to Azure Blob Storage, follow these steps:

**Step 1:** Create a PDF Viewer sample in TypeScript

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample in TypeScript. This sets up the basic structure of the PDF Viewer application.

**Step 2:** Modify the `src/app/app.ts` file in the Angular project

1. Import the required namespaces at the top of the file:

```typescript
import { BlockBlobClient } from "@azure/storage-blob";
```

2. Add the following private property to `app.ts`, and assign the value from the configuration to the corresponding property.

N> Replace **Your SAS Url in Azure** with the actual SAS URL for the Azure Blob Storage account.

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

N> Install the @azure/storage-blob package in the application to use the previous code example: npm install @azure/storage-blob

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Using server-backed PDF Viewer

To save a PDF file to Azure Blob Storage, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in TypeScript

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to create a simple PDF Viewer sample in TypeScript. This sets up the basic structure of the PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. For instructions, see this article: https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private readonly string _storageConnectionString;
private readonly string _storageContainerName;
private readonly ILogger<PdfViewerController> _logger;

public PdfViewerController(IConfiguration configuration, ILogger<PdfViewerController> logger)
{
  _storageConnectionString = configuration.GetValue<string>("connectionString");
  _storageContainerName = configuration.GetValue<string>("containerName");
  _logger = logger;
}
```

5. Modify the [Download()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#download) method to save the downloaded PDF file to the Azure Blob Storage container.

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);

  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string document = jsonObject["documentId"];

  BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
  BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);

  string result = Path.GetFileNameWithoutExtension(document);
  // Get a reference to the blob
  BlobClient blobClient = containerClient.GetBlobClient(result + "_downloaded.pdf");

  // Convert the document base64 string to bytes
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Azure Blob Storage
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    blobClient.Upload(stream, true);
  }
  return Content(documentBase);
}
```

6. Open the `appsettings.json` file in the web service project and add the following lines below the existing `"AllowedHosts"` configuration.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "connectionString": "*Your Connection string from Azure*",
  "containerName": "*Your container name in Azure*"
}
```

N> Replace the placeholders with the actual Azure Storage connection string and container name.

**Step 3:** Set the PDF Viewer properties in the TypeScript PDF Viewer component

Modify the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of the PDF Viewer component with the accurate URL of the web service, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the desired PDF file name to load from Azure Blob Storage, and ensure that the document exists in the target container.
```typescript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> Install the Azure.Storage.Blobs NuGet package in the web service application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).