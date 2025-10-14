---
layout: post
title: Open PDF from Dropbox cloud storage in Vue Pdfviewer | Syncfusion
description: Learn about how to load PDF files from Dropbox cloud file storage in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Dropbox cloud file storage
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Dropbox cloud file storage

PDF Viewer allows to load PDF file from Drop Box using either the Standalone or Server-backed PDF Viewer. Below are the steps and a sample to demonstrate how to open a PDF from Drop Box.

## Using Standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a Simple PDF Viewer Sample in Vue

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF viewer sample in Vue. This will give you a basic setup of the PDF viewer component.

**Step 3:** Modify the `src/App.vue` File in the Angular Project

1. Import the required namespaces at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  import { Dropbox } from 'dropbox';
</script>

{% endhighlight %}
{% endtabs %}

2. Create an instance of the Dropbox class using an access token for authentication. Next, call the filesDownload method of this Dropbox instance to download the file located at /PDF_Succinctly.pdf. Upon successfully downloading the file, extract the file blob from the response. Convert this file blob to a Base64 string using the blobToBase64 method. Finally, load the Base64 string into a PDF viewer control.

N> Replace **Your Access Token** with the actual Access Token of your Drop Box account.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<script>
  export default {
    methods: {
      loadPdfDocument: async function () {
        const dbx = new Dropbox({ accessToken: 'Your Access Token'});
        dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
          const blob = await response.result.fileBlob;
          var base64String = await this.blobToBase64(blob);
          var viewer = document.getElementById('pdfViewer').ej2_instances[0];
          setTimeout(() => {
            viewer.load(base64String, "");
          }, 2000);
        });
      },

      blobToBase64: function (blob){
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      },
    }
  }
</script>

{% endhighlight %}
{% endtabs %}

N> The **npm install dropbox** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using Server-Backed PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a Simple PDF Viewer Sample in Vue

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF viewer sample in Vue. This will give you a basic setup of the PDF viewer component.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp

private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

5. Modify the `Load()` method to load the PDF files from Dropbox cloud file storage.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents \

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();
  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      // Get the file name from the jsonObject, which should contain the Dropbox file name
      string fileName = jsonObject["document"];

      using (var dropBox = new DropboxClient(_accessToken))
     {
        using (var response = await dropBox.Files.DownloadAsync(_folderName + "/" + fileName))
        {
          var byteArray = await response.GetContentAsByteArrayAsync();

          // Load the PDF file into the PDF viewer
          stream = new MemoryStream(byteArray);
        }
      }
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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace **Your_Dropbox_Access_Token** with your actual Dropbox access token and **Your_Folder_Name** with your folder name.

**Step 4:**  Set the PDF Viewer Properties in Vue PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server. Set the `documentPath` property of the PDF viewer component to the desired name of the PDF file you wish to load from Dropbox cloud file storage. Ensure that you correctly pass the document name from the files available in your dropbox folder to the documentPath property.

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

N> The **Dropbox.Api** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)
