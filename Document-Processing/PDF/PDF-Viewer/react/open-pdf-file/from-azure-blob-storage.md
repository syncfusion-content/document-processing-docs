---
layout: post
title: Open PDF from Azure Blob Storage in React Pdfviewer | Syncfusion
description: Learn about how to load PDF files from Azure Blob Storage in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Azure Blob Storage
platform: document-processing
documentation: ug
---

# Open PDF from Azure Blob Storage

The PDF Viewer allows loading PDF files from Azure Blob Storage using either the standalone or server-backed PDF Viewer. Below are the steps and a sample that demonstrate how to open a PDF from Azure Blob Storage.

## Using the standalone PDF Viewer

To load a PDF file from Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/index.js` File in the React Project

1. Add the following private properties to `index.js` and assign values from configuration or a secure source.

N> Replace placeholders with the target Azure account, container, and blob names. Do not store credentials in source control.

```typescript
var accountName = "*Your account name in Azure*";
var containerName = "*Your container name in Azure*";
var blobName = "*Your Blob name in Azure*";
```

2. Construct the URL to the PDF in Azure Blob Storage. Call fetchAndConvertToBase64 to fetch the PDF and convert it to a base64 string. Then load the base64 string into the PDF Viewer.

```typescript
function loadDocument() {
  var url = 'https://' + accountName + '.blob.core.windows.net/' + containerName + '/' + blobName;
  fetchAndConvertToBase64(url).then(function(base64String) {
    if (base64String) {
      setTimeout(function() {
        viewer.load("data:application/pdf;base64," + base64String);
      }, 2000);
    } else {
      console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(function(error) {
    console.error('Error:', error);
  });
}
```

3. Retrieve the PDF from the URL and convert the fetched Blob to a base64 string using blobToBase64.

```typescript
function fetchAndConvertToBase64(url) {
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
function blobToBase64(blob) {
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

**Step 1:** Create a PDF Viewer sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

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

5. Modify the `Load()` method to load PDF files from Azure Blob Storage.

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

N> Replace the placeholders with the actual Azure storage connection string and container name. Use secure configuration sources (environment variables or a secrets store) in production.

**Step 3:** Configure the PDF Viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Azure Blob Storage. Ensure that you correctly pass the document name from the files available in your azure contanier to the documentPath property.

{% raw %}

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          documentPath="PDF_Succinctly.pdf"
          // Replace the "localhost:44396" with the actual URL of your server
          serviceUrl="https://localhost:44396/pdfviewer"
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

N> Install the `Azure.Storage.Blobs` NuGet package in the server project to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).