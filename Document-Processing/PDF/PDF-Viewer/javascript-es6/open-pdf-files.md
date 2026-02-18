---
layout: post
title: Open PDF files in TypeScript PDF Viewer | Syncfusion
description: Learn how to load PDF files in the Syncfusion TypeScript PDF Viewer from URLs, base64 strings, and databases by configuring the required server-backed services.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files in TypeScript PDF Viewer

Load documents into the PDF Viewer from hosted URLs, base64 strings, or database storage. The following sections outline each scenario and the configuration required for server-backed viewing.

## Open a PDF from a URL

Use this approach when the PDF file is hosted on a web server.

**Step 1:** Create a TypeScript PDF Viewer sample

Follow the [TypeScript getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to scaffold a basic PDF Viewer application.

**Step 2:** Update the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. Refer to [How to create a PDF Viewer web service in .NET Core](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for guidance.
2. Open the `PdfViewerController.cs` file.
3. Modify the [Load](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to resolve remote URLs when `isFileName` is `true`.

```csharp

public IActionResult Load([FromBody] Dictionary<string, string> jsonData)
{
  // Initialize the PDF Viewer object with memory cache object
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

**Step 3:** Configure the PDF Viewer in the TypeScript application

Update the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) with the hosted web service endpoint (replace `https://localhost:44396/pdfviewer` with your server URL) and set `documentPath` to the PDF file to load.

```typescript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace correct PDF Document URL want to load
viewer.documentPath="https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf"
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');

```

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)

## Open a PDF from base64 data

Convert PDFs to base64 strings when you need to stream content directly from an API response or store it inline.

**Step 1:** Create a TypeScript PDF Viewer sample

Use the [TypeScript getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to initialize the PDF Viewer project.

**Step 2:** Load the document by passing a base64 string to the `load` method.

```
<button id='load'>LoadDocumentFromBase64</button>
```

```ts
// Load PDF document from Base64 string
document.getElementById('load').addEventListener('click', () => {
  viewer.load(
    'data:application/pdf;base64,'+ AddBase64String, null);
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/typescript-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20base64%20string)

## Open a PDF from a database

Retrieve PDF files stored in SQL Server by extending the server-backed web service.

**Step 1:** Create a TypeScript PDF Viewer sample

Follow the [TypeScript getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es6/getting-started) to configure the client application.

**Step 2:** Update the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. Refer to [How to create a PDF Viewer web service in .NET Core](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for detailed steps.
2. Open the `PdfViewerController.cs` file.
3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using System.Data.SqlClient;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign configuration values to these fields.

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

5. Modify the [Load](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to stream the PDF from SQL Server when `isFileName` is `true`.

```csharp

public IActionResult Load([FromBody] Dictionary<string, string> jsonData)
{
  // Initialize the PDF Viewer object with memory cache object
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

N> Replace **Your connection string for SQL server** with the actual connection string for the target SQL Server database.

N> Install the **System.Data.SqlClient** package and update the `connectionString` value to match the environment before running the sample.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)