---
layout: post
title: Save PDF files to Google Cloud Storage in Vue PDF Viewer | Syncfusion
description: Learn how to save PDF files to Google Cloud Storage using the Syncfusion Vue PDF Viewer component with a server-backed web service.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to Google Cloud Storage

To save a PDF file to Google Cloud Storage, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. TThis sets up the basic structure of the PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Google.Cloud.Storage.V1;
using Google.Apis.Auth.OAuth2;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign configuration values to the corresponding fields.

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

5. Modify the [Download()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#download) method to save the downloaded PDF file to the Google Cloud Storage bucket.

```csharp
[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents
public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  string bucketName = _bucketName;
  string fileName = jsonObject["documentId"];

  // Convert the base64 string back to bytes
  string result = Path.GetFileNameWithoutExtension(fileName);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  // Upload the document to Google Cloud Storage
  using (var memoryStream = new MemoryStream(documentBytes))
  {
    _storageClient.UploadObject(bucketName, result + "_downloaded.pdf", null, memoryStream);
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
  "BucketName": "Your Bucket name from Google Cloud Storage"
}
```

N> Replace the placeholder with the actual Google Cloud Storage bucket name.

N> Replace `path/to/service-account-key.json` with the actual file path to the service account key JSON file

**Step 3:**  Set the PDF Viewer Properties in Vue PDF viewer component

Modify the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of the PDF Viewer component with the accurate URL of the web service, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the desired PDF file name to load from Google Cloud Storage, and ensure that the document exists in the target bucket.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide } from "vue";
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

// Replace the "localhost:44396" with the actual URL of your server
const serviceUrl = "https://localhost:44396/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]);

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'app',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      // Replace the "localhost:44396" with the actual URL of your server
      serviceUrl: "https://localhost:44396/pdfviewer",
      documentPath: "PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
    Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Install the Google.Cloud.Storage.V1 NuGet package in the web service application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-google-cloud-storage)