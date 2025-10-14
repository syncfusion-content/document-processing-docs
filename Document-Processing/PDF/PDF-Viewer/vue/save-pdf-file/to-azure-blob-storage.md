---
layout: post
title: Save PDF to Azure Blob Storage using Vue Pdfviewer | Syncfusion
description: Learn here how to Save PDF files to Azure Blob Storage in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Save PDF files to Azure Blob Storage
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF file to Azure Blob Storage

PDF Viewer allows to save PDF file to Azure Blob Storage using either the Standalone or Server-backed PDF Viewer. Below are the steps and a sample to demonstrate how to save PDF to Azure Blob Storage.

## Using Standalone PDF Viewer

To save a PDF file to Azure Blob Storage, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `src/App.vue` File in the Vue Project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { BlockBlobClient } from "@azure/storage-blob";
</script>

{% endhighlight %}
{% endtabs %}

2. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

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
        resourceUrl: 'https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib',
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

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob as an ArrayBuffer and upload the ArrayBuffer to Azure Blob Storage using 'BlockBlobClient'.

N> Replace **Your SAS Url in Azure** with the actual SAS url for your Azure Blob Storage account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
export default {
  methods: {
    savePdfDocument: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.saveAsBlob().then(function (value) {
        var reader = new FileReader();
        reader.onload = async () => {
          if (reader.result) {
            var SASUrl = "*Your SAS Url in Azure*";
            const arrayBuffer = reader.result;
            const blobClient = new BlockBlobClient(SASUrl);
            // Upload data to the blob
            const uploadBlobResponse = await blobClient.upload(arrayBuffer, arrayBuffer.byteLength);
            console.log(`Upload blob successfully`, uploadBlobResponse.requestId);
          }
        };
        reader.readAsArrayBuffer(value);
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

N> The **npm install aws-sdk** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Using Server-Backed PDF Viewer

To save a PDF file to Azure Blob Storage, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in Vue

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF Viewer sample in Vue. This will set up the basic structure of your PDF Viewer application.

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

5. Modify the `Download` method to save the downloaded PDF files to Azure Blob Storage container

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

6. Open the `app settings.json` file in your web service project, Add the following lines below the existing `"AllowedHosts"` configuration

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

N> Replace **Your Connection string from Azure** with the actual connection string for your Azure Blob Storage account and **Your container name in Azure** with the actual container name

**Step 3:**   Set the PDF Viewer Properties in Vue PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Azure Blob Storage. Ensure that you correctly pass the document name from the files available in your azure container to the documentPath property.

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

N> The **Azure.Storage.Blobs** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).