---
layout: post
title: Save PDF files in JavaScript PDF Viewer | Syncfusion
description: Learn how to save updated documents from the Syncfusion JavaScript PDF Viewer component to a server, database, or local file system.
platform: document-processing
control: Saving PDF files
documentation: ug
domainurl: ##DomainURL##
---

# Saving PDF files

After annotating or editing a document, use the JavaScript PDF Viewer component to persist the updated PDF to a server, local storage, or a database.

## Save a PDF file to a server

Follow these steps to upload the modified document to a server-side location.

**Step 1:** Create a JavaScript PDF Viewer sample

Follow the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to configure a JavaScript PDF Viewer project. This provides the viewer instance required to submit downloads to a web service.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service in .NET Core 3.0 or later. Refer to [How to create PDF Viewer web service in .NET Core 3.0 and above](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for detailed instructions.
2. Open the `PdfViewerController.cs` file in the service project.
3. Update the [`Download`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#download) action to save the output file on the server.

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

N> Ensure the application pool identity or service account has write access to the destination directory before saving files.

**Step 3:** Set PDF Viewer service properties

Specify the [`serviceUrl`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) of your web service and the document to load.

```javascript

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation,ThumbnailView,
         BookmarkView, TextSelection, Annotation, FormFields, FormDesigner} from '@syncfusion/ej2-pdfviewer';

PdfViewer.Inject( Toolbar,Magnification,Navigation, LinkAnnotation,ThumbnailView,
                  BookmarkView, TextSelection, Annotation, FormFields, FormDesigner);

let viewer: PdfViewer = new PdfViewer();
// Replace PDF_Succinctly.pdf with the actual document name that you want to load
viewer.documentPath="PDF_Succinctly.pdf"
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');

```

N> Replace the placeholder service URL and document name with your deployment values. Configure CORS on the web service if the viewer runs on a different origin.

[View sample in GitHub](https://github.com/SyncfusionExamples/javascript-pdf-viewer-examples/tree/master/Save%20and%20Load/Save%20PDF%20file%20to%20server)

## Download a PDF file as a copy

The built-in toolbar includes a **Download** button that saves the current PDF to the local file system. You can also trigger the same behavior from custom UI by calling [`download`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#download).

```html
<button id="download">Download</button>

```

```javascript

document.getElementById('download').addEventListener('click', function () {
  //API to perform download action.
  viewer.download();
});

```

N> The `download` method returns the document after applying annotations, form edits, and other runtime changes.

## Save a PDF file to a database

Use the following steps to persist the generated PDF document to a SQL Server database.

**Step 1:** Create a JavaScript PDF Viewer sample

Follow the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to configure a JavaScript PDF Viewer project.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service in .NET Core 3.0 or later.
2. Open the `PdfViewerController.cs` file.
3. Import the required namespaces at the top of the file.

```csharp
using System.IO;
using System.Data.SqlClient;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, and map configuration values in the constructor.

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

5. Update the [`Download`](https://ej2.syncfusion.com/documentation/api/pdfviewer/#download) action to insert the document into a database table.

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

6. Update the `appsettings.json` file to include the connection string setting.

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

N> Replace **Your connection string for SQL server** with the actual value. Make sure the database table, columns, and permissions exist before inserting records.

N> Install the **System.Data.SqlClient** package in the application to execute SQL commands with the previous example. Update the connection string to match your environment.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)