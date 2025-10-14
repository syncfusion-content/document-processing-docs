---
layout: post
title: Open PDF files from Google Cloud Storage in Javascript Pdfviewer control | Syncfusion
description: Learn about how to Open PDF files from Google Cloud Storage in Javascript Pdfviewer control of Syncfusion Essential JS 2 and more details.
platform: document-processing
control: Open PDF files from Google Cloud Storage
publishingplatform: Javascript
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Google Cloud Storage

To load a PDF file from Google Cloud Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
// Private readonly object _storageClient
private readonly StorageClient _storageClient;

private IConfiguration _configuration;

public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;

  // The key file is used to authenticate with Google Cloud Storage.
  string keyFilePath = "path/to/service-account-key.json";

  // Load the service account credentials from the key file.
  var credentials = GoogleCredential.FromFile(keyFilePath);

  // Create a storage client with Application Default Credentials
  _storageClient = StorageClient.Create(credentials);

   _configuration = configuration;

   _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Modify the [Load()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to load the PDF files from Google Cloud Storage.

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
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string bucketName = _bucketName;
      string objectName = jsonObject["document"];
      _storageClient.DownloadObject(bucketName, objectName, stream);
      stream.Position = 0;
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket

N> Replace **path/to/service-account-key.json** with the actual file path to your service account key JSON file. Make sure to provide the correct path and filename.

**Step 3:**  Set the PDF Viewer Properties in JavaScript PDF viewer component

Modify the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Google Cloud Storage. Ensure that you correctly pass the document name from the files available in your bucket to the documentPath property.

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

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)