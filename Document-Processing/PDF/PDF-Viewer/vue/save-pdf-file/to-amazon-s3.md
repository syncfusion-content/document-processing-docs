---
layout: post
title: Save PDF files to AWS S3 in Vue PDF Viewer | Syncfusion
description: Learn how to save PDF files to AWS S3 using the Syncfusion Vue PDF Viewer component in standalone and server-backed configurations.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to AWS S3

PDF Viewer component supports saving PDF files to AWS S3 using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To load a PDF file from AWS S3 in a PDF Viewer, you can follow the steps below.

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `src/app/app.ts` file in the Angular project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import AWS from 'aws-sdk';
</script>

{% endhighlight %}
{% endtabs %}

3. Configure a custom toolbar item for the download function to save a PDF file to AWS S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  AWS.config.update({
    region: '**Your Region**', // Update this your region
    accessKeyId: '*Your Access Key*', // Update this with your access key id
    secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
  });
</script>

{% endhighlight %}
{% endtabs %}

3. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <ejs-pdfviewer
    id="pdfViewer"
    :resourceUrl="resourceUrl"
    :toolbarClick="toolbarClick"
    :created="loadPdfDocument"
    :toolbarSettings="toolbarSettings">
  </ejs-pdfviewer>
</template>

<script>
  export default {
    data() {
      let toolItem1 = {
        prefixIcon: 'e-icons e-pv-download-document-icon',
        id: 'download_pdf',
        tooltipText: 'Download file',
        align: 'right'
      };

      return {
        resourceUrl: 'https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib',
        toolbarSettings: {
          toolbarItems: [ 'OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
        },
      };
    },

    methods: {
      toolbarClick: function (args) {
          if (args.item && args.item.id === 'download_pdf') {
            this.savePdfDocument();
          }
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

4. Retrieve the PDF Viewer instance, save the current PDF as a Blob, read it using FileReader to get an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the `putObject` method.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    savePdfDocument: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.saveAsBlob().then(function (value) {
        var reader = new FileReader();
        reader.onload = () => {
          const uint8Array = new Uint8Array(reader.result);
          const putObjectParams = {
            Bucket: '**Your Bucket Name**',
            Key: '**Your Key**',
            Body: uint8Array,
            ContentType: 'application/pdf',
          };
          var s3= new AWS.S3();
          s3.putObject(putObjectParams, (err, data) => {
            if (err) {
              console.error('Error uploading document:', err);
            } else {
              console.log('Document uploaded successfully:', data);
            }
          });
        };
        reader.readAsArrayBuffer(value);
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> Install the aws-sdk package in the application to use the previous code example: npm install aws-sdk

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).

## Using Server-Backed PDF Viewer

To save a PDF file to AWS S3, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. For instructions, see this article: https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above

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

5. Modify the [Download()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#download) method to save the downloaded PDF file to the AWS S3 bucket.

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
  RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

  // Configure the AWS SDK with your access credentials and other settings
  var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
  string bucketName = _bucketName;
  string documentName = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentName);
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    var request = new PutObjectRequest
    {
      BucketName = bucketName,
      Key = result + "_downloaded.pdf",
      InputStream = stream,
    };
    // Upload the PDF document to AWS S3
    var response = s3Client.PutObjectAsync(request).Result;
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace the placeholders with the actual AWS access key, secret key, and bucket name.

**Step 3:** Set the PDF Viewer properties in the TypeScript PDF Viewer component

Modify the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) property of the PDF Viewer component with the accurate URL of the web service, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the desired PDF file name to load from AWS S3, and ensure that the document exists in the target bucket.

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

N> Install the AWSSDK.S3 NuGet package in the web service application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)