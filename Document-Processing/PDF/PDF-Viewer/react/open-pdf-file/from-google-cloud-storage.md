---
layout: post
title: Open PDF files from Google Cloud Storage in React Pdfviewer component | Syncfusion
description: Learn about how to load PDF files from Google Cloud Storage in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Google Cloud Storage
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Google Cloud Storage

To load a PDF file from Google Cloud Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

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

5. Modify the `Load()` method to load the PDF from Google Cloud Storage.

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

**Step 3:**  Set the PDF Viewer Properties in React PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Google Cloud Storage. Ensure that you correctly pass the document name from the files available in your bucket to the documentPath property.

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

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />

        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

N> The **Google.Cloud.Storage.V1** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)