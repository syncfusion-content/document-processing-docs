---
layout: post
title: Save PDF files in the Vue PDF Viewer component | Syncfusion
description: Learn how to save updated PDF documents to a server, database, or local copy by using the Syncfusion Vue PDF Viewer component.
control: Save PDF files
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files

After annotating or editing a document in the Vue PDF Viewer component, save the updated PDF to a server, database, or the local file system by following the approaches in this article.

Prerequisite: Configure the server-backed web service helper because saving and downloading operations require server-side processing.

## Save PDF files to a server

Use this workflow to persist the modified PDF back to your server environment.

**Step 1:** Create a simple PDF Viewer sample in Vue

Follow the steps in this [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic Vue application and configure the PDF Viewer component.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later by following this [web service guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above).

2. Open the `PdfViewerController.cs` file in your web service project.

3. Modify the `Download()` method to save the updated document to your server storage location.

Update the `serverFilePath` variable with the absolute path to the folder where the file must be saved.

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

**Step 3:**  Set the PDF Viewer properties in the Vue PDF Viewer component

Update the `serviceUrl` property of the PDF Viewer component with the URL of your web service, and set `documentPath` to the PDF document that should load in the viewer.

Ensure both values point to accessible resources before running the application.

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

## Download the PDF file as a copy

Use the built-in toolbar Download option or a custom button to export the updated PDF to the local file system.

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

When using a custom download button, ensure the PDF Viewer element defines the `pdfviewer` reference so the handler can access the component instance.

## Save PDF files to a database

Use this approach when the updated PDF needs to be stored or versioned inside a database.

**Step 1:** Create a simple PDF Viewer sample in Vue

Follow the steps in this [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started) to create a basic Vue application and configure the PDF Viewer component.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later by following this [web service guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above).

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using System.Data.SqlClient;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, and assign the configuration values within the constructor.

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

5. Modify the `Download()` method to convert the updated PDF to a Base64 string and persist it in the database.

Adjust the SQL command to match your table and column names.

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

6. Open the `appsettings.json` file in your web service project and add the following lines after the existing `"AllowedHosts"` configuration:

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

N> Replace **Your connection string from SQL server** with the actual connection string for your SQL Server database.

N> Install the **System.Data.SqlClient** package before running this example, and update the `connectionString` variable with the correct value for your environment.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)