---
layout: post
title: Open PDF files in Vue Pdfviewer component | Syncfusion
description: This page helps you to learn about how to load PDF files from various locations in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files

You might need to open and view the PDF files from various location. In this section, you can find the information about how to open PDF files from URL, database and as base64 string.

## Opening a PDF from URL

If you have your PDF files in the web, you can open it in the viewer using URL.

**Step 1:** Create a Simple PDF Viewer Sample in Vue

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF viewer sample in Vue. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Modify the `Load()` method to open it in the viewer using URL

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

**Step 3:**  Set the PDF Viewer Properties in React PDF viewer component

Modify the `serviceUrl` property of the PDF viewer component with the accurate URL of your web service project, replacing `https://localhost:44396/pdfviewer` with the actual URL of your server.Modify the documentPath with the correct PDF Document URL want to load.

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

The following code steps how the PDF file can be loaded in PDF Viewer as base64 string.

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

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

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20base64%20string)

## Opening a PDF from database

To load a PDF file from SQL Server database in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in Vue

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a simple PDF viewer sample in Vue. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using System.Data.SqlClient;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

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

5. Modify the `Load()` method to open it in the viewer using URL

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
  "ConnectionString": "Your connection string for SQL server"
}
```

N> Replace **Your Connection string from SQL server** with the actual connection string for your SQL Server database

N> The **System.Data.SqlClient** package must be installed in your application to use the previous code example. You need to modify the connectionString variable in the previous code example as per the connection string of your database.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)