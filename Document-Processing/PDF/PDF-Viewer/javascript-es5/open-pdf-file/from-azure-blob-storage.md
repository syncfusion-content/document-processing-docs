---
layout: post
title: Open PDF from Azure Blob Storage in JavaScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from Azure Blob Storage in the Syncfusion JavaScript PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Azure Blob Storage

The JavaScript PDF Viewer component supports loading PDF files from Azure Blob Storage using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/app/app.ts` file in the JavaScript project

1. Add the following private properties to the `app.ts`, and assign the values from the configuration to the corresponding properties

N> Replace **Your account name in Azure** with the actual account name for your Azure Blob Storage account and **Your container name in Azure** with the actual container name and **Your Blob name in Azure** with the actual container name.

```typescript
private accountName: string = "*Your account name in Azure*";
private containerName: string = "*Your container name in Azure*";
private blobName: string = "*Your Blob name in Azure*";
```

2. Construct the URL to the PDF in Azure Blob Storage. Call `fetchAndConvertToBase64` to fetch the PDF and convert it to a base64 string. Then load the base64 string into the PDF Viewer.

```typescript
pdfviewer.created = function () {
  const url = 'https://'+accountName+'.blob.core.windows.net/'+containerName+'/'+blobName;
  fetchAndConvertToBase64(url).then(base64String => {
    if (base64String) {
        setTimeout(() => {
          pdfviewer.load("data:application/pdf;base64,"+base64String, "");
        }, 2000);
    } else {
        console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(error => console.error('Error:', error));
}
```

3. Retrieve the PDF from the URL and convert the fetched Blob to a base64 string using blobToBase64.

```typescript
function fetchAndConvertToBase64(url : any) {
  return new Promise(function(resolve, reject) {
      fetch(url).then(function(response) {
          if (!response.ok) {
              throw new Error('HTTP error! Status: ' + response.status);
          }
          return response.blob();
      }).then(function(blob) {
          blobToBase64(blob).then(function(base64String) {
              resolve(base64String);
          });
      }).catch(function(error) {
          console.error('Error fetching file:', error);
          reject(null);
      });
  });
}
```

4. Use FileReader to convert a Blob to a base64 string. Resolve the promise with the base64 string or reject it in case of an error.

```typescript
function blobToBase64(blob : any) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function() {
      var base64String = reader.result ? reader.result.toString().split(',')[1] : '';
      resolve(base64String);
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Using the server-backed PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage using the server-backed PDF Viewer.

**Step 1:** Create a PDF Viewer sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

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

5. Modify the [Load()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to load PDF files from Azure Blob Storage.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 
 
public IActionResult Load([FromBody] Dictionary<string, string> jsonObject)
{
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.TryParse(jsonObject["isFileName"], out bool isFileName) && isFileName)
    {
      BlobServiceClient blobServiceClient = new BlobServiceClient(_storageConnectionString);
      string fileName = jsonObject["document"];
      BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(_storageContainerName);
      BlockBlobClient blockBlobClient = containerClient.GetBlockBlobClient(fileName);
      blockBlobClient.DownloadTo(stream);
    }
    else
    {
      byte[] bytes = Convert.FromBase64String(jsonObject["document"]);
      stream = new MemoryStream(bytes);
    }
  }
  jsonResult = pdfviewer.Load(stream, jsonObject);
  return Content(JsonConvert.SerializeObject(jsonResult));
}
```

6. Open the `appsettings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

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

N> Replace the placeholders with your actual values: Azure storage connection string and container name.

**Step 3:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from Azure Blob Storage. Ensure the document name exists in your Azure container.

```javascript

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

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).