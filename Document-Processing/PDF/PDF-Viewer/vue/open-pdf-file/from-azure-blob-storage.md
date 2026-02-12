---
layout: post
title: Open PDF from Azure Blob Storage using Vue PDF Viewer | Syncfusion
description: Learn about how to load PDF file from Azure Blob Storage in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Azure Blob Storage
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Azure Blob Storage

The Vue PDF Viewer supports loading PDF files from Azure Blob Storage using either the standalone or server-backed viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage in the standalone PDF Viewer.

**Step 1:** Create a Simple PDF Viewer Sample in Vue

Follow the getting-started guide in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic PDF Viewer sample in Vue.

**Step 2:** Modify the `src/App.vue` file in the Vue project

1. Import the required modules at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { BlockBlobClient } from "@azure/storage-blob";
</script>

{% endhighlight %}
{% endtabs %}

2. Use the `SASUrl` to fetch the PDF file, convert the response to an `ArrayBuffer`, and then transform it into a `Uint8Array`. Convert the `Uint8Array` into a Base64 string and load it into the PDF Viewer.

N> Replace **Your SAS Url in Azure** with the actual SAS URL for your Azure Blob Storage account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  export default {
    methods: {
      loadPdfDocument: async function () {
        var SASUrl = "*Your SAS Url in Azure*";
        const response = await fetch(SASUrl);
        const arrayBuffer = await response.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        const base64String = btoa(
          String.fromCharCode(...uint8Array)
        );
        var viewer = document.getElementById('pdfViewer').ej2_instances[0];
        setTimeout(function() {
          viewer.load("data:application/pdf;base64," + base64String);
        }, 2000);
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

N> The **npm install @azure/storage-blob** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).

## Using the server-backed PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage using the server-backed PDF Viewer.

**Step 1:** Create a Simple PDF Viewer Sample in Vue

Follow the getting-started guide in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic PDF Viewer sample in Vue.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign the values from the configuration to the corresponding fields:

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

5. Modify the `Load` method to load PDF files from Azure Blob Storage.

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

6. Open the `appsettings.json` file in your web service project and add the following lines below the existing `"AllowedHosts"` configuration:

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

Note: Do not store secrets in source control. Use secure configuration options such as Azure Key Vault, environment variables, or a secrets manager to hold connection strings.

**Step 3:** Configure the PDF Viewer component

Set the `serviceUrl` property of the PDF Viewer component to your web service endpoint (replace `https://localhost:44396/pdfviewer` with the actual URL of your server). Set the `documentPath` property to the PDF file name to load from Azure Blob Storage. Ensure the document name exists in your Azure container.

{% tabs %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

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
{% highlight html tabtitle="Options API (Server-Backed)" %}

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

N> The `Azure.Storage.Blobs` NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Server-Backend).