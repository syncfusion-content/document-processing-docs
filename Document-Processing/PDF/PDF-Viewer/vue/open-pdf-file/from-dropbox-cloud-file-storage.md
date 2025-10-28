---
layout: post
ttitle: Open PDF from Dropbox cloud storage in Vue PDF Viewer | Syncfusion
description: Learn how to load PDFs from Dropbox cloud storage in the Syncfusion Vue PDF Viewer component using standalone and server-backed approaches.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Dropbox cloud storage

The Vue PDF Viewer component supports loading PDF files from Dropbox using either the standalone or the server-backed PDF Viewer. The following sections walk through both approaches.

## Using the standalone PDF Viewer

To load a PDF file from Dropbox cloud storage in the standalone PDF Viewer, follow these steps:

**Step 1:** Create a Dropbox API app

Follow the Dropbox documentation to create an API app: https://www.dropbox.com/developers/documentation/dotnet#tutorial. This enables programmatic access with secure credentials.

**Step 2:** Create a PDF Viewer sample in Vue

Follow the steps in this [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to set up a basic Vue PDF Viewer application.

**Step 3:** Modify the `src/App.vue` file in the Vue project

1. Import the required module at the top of the file:

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script>
import { Dropbox } from 'dropbox';
</script>
{% endhighlight %}
{% endtabs %}

2. Create an instance of the `Dropbox` class with an access token, download the target PDF file, convert it to Base64, and then load it into the PDF Viewer component.

N> Replace the placeholder with your actual Dropbox access token.

{% tabs %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<script>
  export default {
    methods: {
      async loadPdfDocument() {
        const dbx = new Dropbox({ accessToken: 'Your Access Token' });
        dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
          const blob = await response.result.fileBlob;
          const base64String = await this.blobToBase64(blob);
          const viewer = document.getElementById('pdfViewer').ej2_instances[0];
          setTimeout(() => {
            viewer.load(base64String, "");
          }, 2000);
        });
      },

      blobToBase64(blob) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      },
    },
  };
</script>
{% endhighlight %}
{% endtabs %}

N> Install the **dropbox** package (`npm install dropbox`) in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using the server-backed PDF Viewer

To load a PDF file from Dropbox cloud storage in the server-backed PDF Viewer, follow these steps:

**Step 1:** Create a Dropbox API app

Follow the Dropbox documentation to create an API app: https://www.dropbox.com/developers/documentation/dotnet#tutorial. This enables programmatic access with secure credentials.

**Step 2:** Create a PDF Viewer sample in Vue

Follow the steps in this [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to set up a basic Vue PDF Viewer application.

**Step 3:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [article](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for guidance on creating the web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign the values from the configuration to the corresponding fields.

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

5. Modify the `Load()` method to load the PDF files from Dropbox cloud storage.

```csharp
[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
// Post action for loading the PDF documents
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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace the placeholders with your actual Dropbox access token and folder name.

**Step 4:** Configure the PDF Viewer component

Set the `serviceUrl` property of the PDF Viewer component to the URL of your web service project (replace `https://localhost:44396/pdfviewer` with the actual server URL). Set the `documentPath` property to the name of the PDF file you want to load from Dropbox. Ensure the document name matches a file in your Dropbox folder.

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
};
</script>
{% endhighlight %}
{% endtabs %}

N> Install the **Dropbox.Api** NuGet package in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)
