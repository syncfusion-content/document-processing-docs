---
layout: post
title: Open PDF from AWS S3 in Vue PDF Viewer | Syncfusion
description: Learn how to load PDFs from AWS S3 in the Syncfusion Vue PDF Viewer component using standalone and server-backed approaches.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files from AWS S3

The Vue PDF Viewer component supports loading PDF files from AWS S3 using either the standalone or the server-backed PDF Viewer. The following sections demonstrate both approaches and include prerequisites and security guidance.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from AWS S3 in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions in the [getting started guide (Vue)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic PDF Viewer sample.

**Step 2:** Modify the `src/App.vue` file in the Vue project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import AWS from 'aws-sdk';
</script>

{% endhighlight %}
{% endtabs %}

2. Configure the AWS SDK with the region, access key, and secret access key so the application can interact with S3.

N> Replace the placeholder values with valid values when testing. Do not embed production credentials in client-side code; use server-side authentication or pre-signed URLs for secure access.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  AWS.config.update({
    region: '**Your Region**', // Update this with the region
    accessKeyId: '*Your Access Key*', // Update this with the access key id
    secretAccessKey: '*Your Security Access Key*', // Update this with the secret access key
  });
</script>

{% endhighlight %}
{% endtabs %}

3. Set parameters for fetching the PDF document from S3, including the bucket name and file key. Use S3.getObject to retrieve the document, convert it to a Base64 string, and pass it to viewer.load in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer.

N> Replace **Your Bucket Name** and **Your Key** with the target S3 bucket name and object key when testing.


{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    loadPdfDocument: function () {
      const getObjectParams = {
        Bucket: '**Your Bucket Name**',
        Key: '**Your Key**',
      };
      var s3= new AWS.S3();
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
              var viewer = document.getElementById('pdfViewer').ej2_instances[0];
              viewer.load("data:application/pdf;base64,"+base64String);
            }, 2000);
          }
        }
      });
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Install the AWS SDK package appropriate for the project. For v2 use `npm install aws-sdk`; for v3 prefer the modular packages such as `@aws-sdk/client-s3`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).

## Using the server-backed PDF Viewer

Follow these steps to load a PDF from AWS S3 using the server-backed PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Vue

Create a basic PDF Viewer sample by following the instructions in the [getting started guide (Vue)](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started).

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. Refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in the web service project.

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

5. Modify the `Load()` method to load the PDF files from AWS S3.

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

      // Configure the AWS SDK with the access credentials and other settings
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

6. Open the `appsettings.json` file in the web service project. Add the following lines below the existing `"AllowedHosts"` configuration.

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

N> Replace the placeholders with actual values when testing. For production deployments, avoid storing AWS credentials in configuration files; use secure server-side credential management, IAM roles, or pre-signed URLs.

**Step 3:** Configure the PDF Viewer component

Set the serviceUrl to the web service endpoint (replace the localhost URL with the server URL). Set documentPath to the PDF file name to load from AWS S3. Ensure the document name matches an object in the bucket.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import { provide } from "vue";
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

// Replace the "localhost:44396" with the actual URL of the server
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
      // Replace the "localhost:44396" with the actual URL of the server
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

N> The **AWSSDK.S3** NuGet package must be installed in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)