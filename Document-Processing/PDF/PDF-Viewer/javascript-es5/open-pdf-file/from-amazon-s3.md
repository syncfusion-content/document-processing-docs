---
layout: post
title: Open PDF from AWS S3 in JavaScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from AWS S3 in the Syncfusion JavaScript PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open PDF from AWS S3

The JavaScript PDF Viewer component supports loading PDF files from AWS S3 using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from AWS S3 in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in JavaScript

Follow the instructions in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a basic PDF Viewer sample in JavaScript.

**Step 2:** Modify the `index.html` File in the JavaScript Project

1. Import the required namespaces at the top of the file:

```javascript
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1654.0.min.js"></script>
```

2. Configure the AWS SDK with the region, access key, and secret access key so the application can interact with S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

```javascript
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

3. Set parameters for fetching the PDF (bucket name and file key). Use S3.getObject to retrieve the document, convert it to a Base64 string, and pass it to viewer.load.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

```javascript
private s3 = new AWS.S3();

pdfviewer.created = function () {
  const getObjectParams = {
    Bucket: '**Your Bucket Name**',
    Key: '**Your Key**',
  };
  s3.getObject(getObjectParams, (err, data) => {
    if (err) {
      console.error('Error fetching document:', err);
    } else {
      if (data && data.Body) {
        const bytes = new Uint8Array(data.Body);
        let binary = '';
        bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
        const base64String = window.btoa(binary);
        setTimeout(() => {
            pdfviewer.load("data:application/pdf;base64,"+base64String);
        }, 2000);
      }
    }
  });
};
```

N> The **aws-sdk** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).

## Using the server-backed PDF Viewer

Follow these steps to load a PDF from AWS S3 using the server-backed PDF Viewer.

**Step 1:** Create a PDF Viewer sample in JavaScript

Create a basic PDF Viewer sample by following the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started)

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Modify the [Load()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to load the PDF files from AWS S3.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

      // Configure the AWS SDK with your access credentials and other settings
      var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);

      string document = jsonObject["document"];

      // Specify the document name or retrieve it from a different source
      var response = await s3Client.GetObjectAsync(_bucketName, document);

      Stream responseStream = response.ResponseStream;
      responseStream.CopyTo(stream);
      stream.Seek(0, SeekOrigin.Begin);
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace the placeholders with your actual AWS credentials and bucket name: Access Key, Secret Key, and Bucket Name.

**Step 3:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from AWS S3. Ensure the document name matches an object in your bucket.

```javascript
// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

var viewer = new ej.pdfviewer.PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)