---
layout: post
title: Saving PDF files in React Pdfviewer component | Syncfusion
description: This page helps you to learn here all about saving PDF files in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Saving PDF files

After editing a PDF with annotation tools, you can save the updated file to a server, a database, or download it locally. The following sections show common approaches.

### Save and Download the Edited PDF

After editing the PDF document, follow this short, linear flow to persist and retrieve the updated file:

1. Persist the edited document to your back end (server or database). See "Save modified PDF to server" and "Save modified PDF to a database" below for server-side examples.
2. Provide the updated file to the user. For a simple download use the built-in toolbar or call the viewer API [`download()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#download).
3. If you need the edited PDF for custom uploads or processing, use the viewer [`saveAsBlob()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#saveasblob) API to obtain a Blob (or convert it to Base64).

This is a summary; use the detailed subsections below for full code samples and server-side instructions.


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

```tsx
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
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Save%20and%20Load/Save%20PDF%20file%20to%20server)

## Download PDF file as a copy

The built-in toolbar includes a download option that saves the updated PDF to the user's local file system. You can also trigger the same behavior programmatically by calling the viewer's [`download()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#download) API.

```tsx
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
```

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

### Save to Cloud Storage Services

Each link below goes to a provider page with simple, step-by-step instructions and example code for saving the edited PDF to that cloud storage service.

- [AWS S3](./save-pdf-file/to-amazon-s3)
- [Azure Blob Storage](./save-pdf-file/to-azure-blob-storage)
- [Google Cloud Storage](./save-pdf-file/to-google-cloud-storage)
- [Google Drive](./save-pdf-file/to-google-drive)
- [OneDrive](./save-pdf-file/to-one-drive)
- [Dropbox](./save-pdf-file/to-dropbox-cloud-file-storage)
- [Box](./save-pdf-file/to-box-cloud-file-storage)
- [Azure AD (auth notes)](./save-pdf-file/to-azure-active-directory)
---

See also:

- [Get Base64 value from a loaded PDF using saveAsBlob API](./how-to/get-base64)
- [Open PDF files overview](./open-pdf-files)