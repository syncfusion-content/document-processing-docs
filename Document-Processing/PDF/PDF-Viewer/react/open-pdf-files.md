---
layout: post
title: Open PDF files in React Pdfviewer component | Syncfusion
description: This page helps you to learn about how to load PDF files from various locations in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files

This article explains how to open and view PDF files from various locations in the Syncfusion React PDF Viewer: from a URL, from a database, and from a base64 string.

## Opening a PDF from a URL

To open a PDF hosted on the web, provide its URL to the viewer.

**Step 1:** Create a Simple PDF Viewer Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

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

Set the `serviceUrl` property to the web service URL (for example, replace `https://localhost:44396/pdfviewer` with your server URL). Set `documentPath` to the PDF document URL to be loaded.

{% raw %}

```ts

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
          // Replace the "localhost:44396" with the actual URL of your server
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
{% endraw %}

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)

## Opening a PDF from base64 data

This section shows how to load a PDF document into the viewer from a base64 string.

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 2:** Use the following code snippet to load the PDF document using a base64 string.

```
  <button onClick={load}>LoadDocumentFromBase64</button>

  <script>
    // Load PDF document from Base64 string
    function load(){
      var viewer = document.getElementById('container').ej2_instances[0];

      viewer.load('data:application/pdf;base64,'+ AddBase64String, null);
    }
  </script>
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20base64%20string)

## Opening a PDF from database

To load a PDF file from SQL Server database in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Simple PDF Viewer Sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

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