---
layout: post
title: Saving PDF files in React Pdfviewer component | Syncfusion
description: This page helps you to learn here all about saving PDF files in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

## Saving PDF files

After editing a PDF with annotation tools, you can save the updated file to a server, a database, or download it locally. The following sections show common approaches.

## Save modified PDF to server

To save the modified PDF back to a server, follow these steps.

**Step 1:** Create a simple PDF Viewer sample in React

Follow the [getting-started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide to create a basic PDF Viewer implementation.

**Step 2:** Modify the `PdfViewerController.cs` in the web service project

1. Create a web service project targeting .NET Core 3.0 or later. See this [KB Link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for details.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Modify the `Download()` method so it returns the modified document for the viewer to download or store.
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

**Step 3:** Set the PDF Viewer properties in your React app

Set the `serviceUrl` to point to your web service (for example, replace `https://localhost:44396/pdfviewer` with your server URL). Also set `documentPath` to the document URL you want to load.

{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields} from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (<div>
    <div className='control-section'>
      {/* Render the PDF Viewer */}
        <PdfViewerComponent
          id="container"
          // Replace  correct PDF Document URL want to load
          documentPath="https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf"
          serviceUrl="https://localhost:44396/pdfviewer"
          style={{ 'height': '640px' }}>

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                  Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />

        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Save%20and%20Load/Save%20PDF%20file%20to%20server)

## Download PDF file as a copy

The built-in toolbar includes a download option that saves the updated PDF to the user's local file system. You can also trigger the same behavior programmatically by calling the viewer's `download()` method.

{% raw %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import './index.css';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject} from '@syncfusion/ej2-react-pdfviewer';

export function App() {

  function downloadClicked() {
    var viewer = document.getElementById('container').ej2_instances[0];
    viewer.download();
  }

return (<div>
    <div className='control-section'>
    <button onClick={downloadClicked}>Download</button>
        <PdfViewerComponent
          id="container"
          // Replace PDF_Succinctly.pdf with the actual document name that you want to load
          documentPath:"PDF_Succinctly.pdf"
          // Replace the "localhost:44396" with the actual URL of your server
          serviceUrl="https://localhost:44396/pdfviewer"
          style={{ 'height': '640px' }}>

              {/* Inject the required services */}
              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
        </PdfViewerComponent>
    </div>
</div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}

## Save modified PDF to a database

If your application stores PDF files in a database, you can save the updated PDF bytes back to the database from your web service. The following steps outline a typical server-side flow.

**Step 1:** Create the React sample viewer

Follow the [getting-started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) guide to set up a basic Viewer instance.

**Step 2:** Update `PdfViewerController.cs` in the web service

1. Create a web service project targeting .NET Core 3.0 or later (see the KB link above). Open the `PdfViewerController.cs` file in your web service project.

2. Import required namespaces:

```csharp
using System.IO;
using System.Data.SqlClient;
```

3. Add configuration fields to your controller and read the connection string from configuration:

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

4. In the `Download()` method, convert the returned base64 document to bytes and insert it into your database (the example below uses parameterized commands to avoid SQL injection):

```csharp
[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
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

5. Add the connection string to `appsettings.json`:

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionString": "Your connection string for SQL Server"
}
```

N> Replace `Your connection string for SQL Server` with your actual connection string.

N>: Ensure the `System.Data.SqlClient` package (or `Microsoft.Data.SqlClient`) is installed in your project. Use parameterized queries (as shown) and validate inputs to avoid SQL injection risks.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-database)