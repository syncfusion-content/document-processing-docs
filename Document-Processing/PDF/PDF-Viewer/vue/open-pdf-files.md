---
layout: post
title: Open PDF files in Vue PDF Viewer | Syncfusion
description: Learn how to load PDF files from URLs, base64 strings, and databases in the Syncfusion Vue PDF Viewer component.
control: Open PDF files
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files

The Vue PDF Viewer component can load documents from URLs, base64 strings, or a database by using the server-backed web service. This article explains how to configure each scenario without changing the existing code structure.

N> Ensure that the web service is running and reachable before loading documents in the Vue PDF Viewer component.

## Opening a PDF from URL

Use the server-backed web service to download external documents and stream them to the Vue PDF Viewer component.

**Step 1:** Create a simple PDF Viewer sample in Vue

Follow the [Vue PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to scaffold a PDF Viewer sample. This provides the core component configuration required for the remaining steps.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later by following the [PDF Viewer web service walkthrough](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above).

2. Open the `PdfViewerController.cs` file in the web service project.

3. Update the `Load()` method so that it can resolve remote URLs, base64 strings, or local files before the document is returned to the viewer.

```csharp

public IActionResult Load([FromBody] Dictionary<string, string> jsonData)
{
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string documentPath = GetDocumentPath(jsonData["document"]);
      if (!string.IsNullOrEmpty(documentPath))
      {
        byte[] bytes = System.IO.File.ReadAllBytes(documentPath);
        stream = new MemoryStream(bytes);
      }
      else
      {
        string fileName = jsonData["document"].Split(new string[] { "://" }, StringSplitOptions.None)[0];
        if (fileName == "http" || fileName == "https")
        {
          WebClient WebClient = new WebClient();
          byte[] pdfDoc = WebClient.DownloadData(jsonData["document"]);
          stream = new MemoryStream(pdfDoc);
        }
        else
        {
          return this.Content(jsonData["document"] + " is not found");
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

**Step 3:** Set the PDF Viewer properties in the Vue component

Update the `serviceUrl` property so that it points to your web service endpoint, and provide the PDF document URL that you want to open through the `documentPath` property.

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
// Replace  correct PDF Document URL want to load
const documentPath = "https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf";

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
      // Replace  correct PDF Document URL want to load
      documentPath: "https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf"
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

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)

## Opening a PDF from base64 data

Load base64-encoded PDFs when the document is supplied directly from the client without a physical file on the server.

**Step 1:** Create a simple PDF Viewer sample in Vue

Follow the [Vue PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to configure the component and enable the web service connection.

**Step 2:** Use the following code snippet to load the PDF document using a base64 string.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="load">LoadDocumentFromBase64</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

const pdfviewer = ref(null);
// Replace the "localhost:44396" with the actual URL of your server
const serviceUrl = "https://localhost:44396/pdfviewer";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]);

// Event triggers on the Export FDF button click.
const load = function () {
  pdfviewer.value.ej2Instances.load('data:application/pdf;base64,' + AddBase64String, null);
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="load">LoadDocumentFromBase64</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
  ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      // Replace the "localhost:44396" with the actual URL of your server
      serviceUrl: "https://localhost:44396/pdfviewer"
    }
  },
  methods: {
    // Event triggers on the Export PDF button click.
    load: function () {
      pdfviewer.value.ej2Instances.load('data:application/pdf;base64,' + AddBase64String, null);
    }
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}

</script>

{% endhighlight %}
{% endtabs %}

Ensure that `AddBase64String` contains the base64-encoded representation of the PDF document you want to display.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20base64%20string)

## Opening a PDF from database

Load PDF documents stored in a SQL Server database by extending the web service to retrieve the file stream.

**Step 1:** Create a simple PDF Viewer sample in Vue

Follow the [Vue PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to configure the component and connect it to the web service.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later by following the [PDF Viewer web service walkthrough](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above).

2. Open the `PdfViewerController.cs` file in the web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using System.Data.SqlClient;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, and set the values from configuration within the constructor.

```csharp
private IConfiguration _configuration;
public readonly string _connectionString;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _connectionString = _configuration.GetValue<string>("ConnectionString");
}
```

5. Update the `Load()` method so that it can read the document bytes from the SQL Server database when the file is not available on disk.

```csharp

public IActionResult Load([FromBody] Dictionary<string, string> jsonData)
{
  // Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();

  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      string documentPath = GetDocumentPath(jsonData["document"]);
      if (!string.IsNullOrEmpty(documentPath))
      {
        byte[] bytes = System.IO.File.ReadAllBytes(documentPath);
        stream = new MemoryStream(bytes);
      }
      string documentName = jsonObject["document"];

      string connectionString = _connectionString;
      System.Data.SqlClient.SqlConnection connection = new System.Data.SqlClient.SqlConnection(connectionString);

      //Searches for the PDF document from the database
      string query = "SELECT FileData FROM Table WHERE FileName = '" + documentName + "'";
      System.Data.SqlClient.SqlCommand command = new System.Data.SqlClient.SqlCommand(query, connection);
      connection.Open();

      using (SqlDataReader reader = command.ExecuteReader())
      {
        if (reader.Read())
        {
          byte[] byteArray = (byte[])reader["FileData"];
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

6. Open the `appsettings.json` file in the web service project, and add the following entry below the existing `"AllowedHosts"` configuration.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionString": "Your connection string for SQL server"
}
```

N> Replace **Your Connection string from SQL server** with the actual connection string for your SQL Server database.

N> Install the **System.Data.SqlClient** package in the application and update the `connectionString` value based on your database configuration.

If the request payload does not already expose `jsonObject`, parse `jsonData` from the request body before invoking the `Load()` method to ensure the document metadata is available.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)
