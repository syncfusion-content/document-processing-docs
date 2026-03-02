---
layout: post
title: Save PDF files in Vue PDF Viewer component | Syncfusion
description: Learn how to save edited or annotated PDFs to a server, database, or local file system using the Syncfusion Vue PDF Viewer with server-backed architecture.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files

After annotating or editing a PDF document in the Vue PDF Viewer component, save the updated file to a server, database, or the local file system using the approaches outlined in this guide.

## Prerequisites

Saving and downloading operations require server-side processing. Before implementing any save workflow:

* Configure a server-backed PDF Viewer web service (see [Web Service Setup Guide](../how-to/create-pdfviewer-service))
* Ensure the Vue PDF Viewer is configured with the `serviceUrl` property pointing to your web service
* Have appropriate file access permissions on your target storage location (server filesystem or database)

## Save PDF files to server storage

This approach persists edited PDF files back to your server's filesystem, making them available for retrieval and further processing.

### Step 1: Set up the Vue PDF Viewer component

Follow the [Getting started with server-backed PDF Viewer](getting-started-with-server-backed) guide to create a Vue application with the PDF Viewer component and configure the `serviceUrl` property.

### Step 2: Modify the server web service

Configure your .NET Core web service to save edited PDFs to server storage:

1. Create a web service project in .NET Core 3.0 or later by following the [Web Service Setup Guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above).

2. Open the `PdfViewerController.cs` file and modify the `Download()` method to save the updated PDF to your server.

3. Update the `serverFilePath` variable with the absolute path to your target folder. Ensure the application has write permissions to this location.

```csharp

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  MemoryStream stream = new MemoryStream();

  string documentName = jsonObject["document"];
  string result = Path.GetFileNameWithoutExtension(documentName);
  string fileName = result + "_downloaded.pdf";

  // Save the file on the server
  string serverFilePath = @"Path to where you need to save your file in the server";

  string filePath = Path.Combine(serverFilePath, fileName);

  using (FileStream fileStream = new FileStream(filePath, FileMode.Create))
  {
    //Saving the new file in root path of application
    stream.CopyTo(fileStream);
    fileStream.Close();
  }
  return Content(documentBase);
}

```

### Step 3: Configure the Vue PDF Viewer component

Configure the PDF Viewer component with your web service URL:

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

// Replace with your web service URL
const serviceUrl = "https://localhost:44396/pdfviewer";
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
      // Replace with your web service URL
      serviceUrl: "https://localhost:44396/pdfviewer",
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

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Save%20and%20Load/Save%20PDF%20file%20to%20server)

## Download PDF to local file system

Export the edited PDF as a local copy to the user's device using the built-in download functionality or a custom button. This approach does not store the file on the server.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
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
// Replace PDF_Succinctly.pdf with the actual document name that you want to load
const documentPath = "PDF_Succinctly.pdf"

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]);,

const downloadClicked = function (args) {
  pdfviewer.value.ej2Instances.download();
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
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
      // Replace PDF_Succinctly.pdf with the actual document name that you want to load
      documentPath: "PDF_Succinctly.pdf"

    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  },
  methods: {
    downloadClicked: function (args) {
      this.$refs.pdfviewer.ej2Instances.download();
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

When using a custom download button, ensure the PDF Viewer component has a `ref` assigned so the handler can access the `ej2Instances.download()` method.

## Save PDF files to database

Use this approach when you need to store edited PDFs in a database for versioning, archival, or complex query scenarios.

### Step 1: Set up the Vue PDF Viewer component

Follow the [Getting started with server-backed PDF Viewer](getting-started-with-server-backed) guide to create a Vue application with the PDF Viewer component.

### Step 2: Configure the server web service to save to database

1. Create a web service project in .NET Core 3.0 or later (see [Web Service Setup Guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above)).

2. Open the `PdfViewerController.cs` file and add the required namespaces:

```csharp
using System.IO;
using System.Data.SqlClient;
```

3. Add configuration properties to the `PdfViewerController` class:

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

4. Modify the `Download()` method to save the PDF to the database. Adjust the SQL command and table/column names to match your database schema:

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public async Task<IActionResult> Download([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);

  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  byte[] documentBytes = Convert.FromBase64String(documentBase.Split(",")[1]);

  string documentId = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentId);
  string fileName = result + "_downloaded.pdf";

  string connectionString = _connectionString;

  using (SqlConnection connection = new SqlConnection(connectionString))
  {
    connection.Open();

    using (SqlCommand cmd = new SqlCommand("INSERT INTO Table (FileName, fileData) VALUES (@FileName, @fileData)", connection))
    {
      cmd.Parameters.AddWithValue("@FileName", fileName);
      cmd.Parameters.AddWithValue("@fileData", documentBytes);

      cmd.ExecuteNonQuery();
    }
    connection.Close();
  }
  return Content(documentBase);
}
```

5. Configure the database connection in your `appsettings.json` file:

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

> Before running this example:
> * Install the **System.Data.SqlClient** NuGet package in your web service project
> * Update the connection string in `appsettings.json` with your SQL Server credentials
> * Create the database table using the SQL script provided
> * Ensure the application has read/write permissions to the database

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)