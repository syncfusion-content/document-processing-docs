---
layout: post
title: Load and Open PDF Files in the React PDF Viewer | Syncfusion
description: How to load and display PDF documents in the Syncfusion React PDF Viewer from different sources (URL, Base64, Blob, file input, and cloud storage).
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Load and Open PDF Files in the React PDF Viewer

This page shows how to load and display PDF documents in the Syncfusion React PDF Viewer. The first section gives a minimal "load and display" example you can try immediately; the second section shows how to open PDFs from different source types (URL, Base64, Blob and cloud storage).

## Load and Display a PDF Document

This simple example demonstrates the minimal steps to show a PDF document in the viewer. It uses the [`documentPath`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentpath) API to point to a publicly accessible PDF URL. For more advanced scenarios (server processing, streaming), see the Server‑backed tutorial.

1. Create a small React app with the PDF Viewer (see [getting-started](./getting-started-overview)).
2. Set `documentPath` to a publicly accessible URL.

Example (TypeScript / React):
{% tabs %}
{% highlight js tabtitle="Standalone" %}
{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
         Print, TextSelection, Annotation, TextSearch, Inject, FormDesigner, FormFields } from '@syncfusion/ej2-react-pdfviewer';

function App() {
  return (
    <PdfViewerComponent
      id="container"
      documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      resourceUrl="https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib"
      style={{ height: '640px' }}>
      <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView,
                                Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
    </PdfViewerComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('sample') as HTMLElement);
root.render(<App />);
{% endraw %}
{% endhighlight %}
{% endtabs %}


## Open PDF Files Using Different Source Types

Below are concise instructions and short snippets for loading PDFs from several source types. Each subsection links to or describes the minimal approach — keep these pages as focused how-to guides if you expand them.

### Open PDF from URL

- Set  [`documentPath`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentpath) to the external URL (see example above).
- Note: the remote server must permit cross-origin requests (CORS); the external file must allow CORS if hosted on a different domain.

### Open PDF from a Base64 string

- Use the viewer  [`load()`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#load) API or set  [`documentPath`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/index-default#documentpath) to a data URI:

```js
// Using load API
const viewerRef = useRef(null);
const loadBase64 = (base64String: string) => {
  viewerRef.current?.load('data:application/pdf;base64,' + base64String, null);
};
```

- Recommendation: avoid Base64 for very large files (memory and payload size concerns).

### Open PDF from a Blob

- Fetch a Blob and create an object URL, then load it into the viewer:

```js
const viewerRef = useRef(null);
fetch(url)
  .then(r => r.blob())
  .then(blob => {
    const objectUrl = URL.createObjectURL(blob);
    viewerRef.current?.load(objectUrl, null);
  });
```


### Open PDF from database

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

### Open from Cloud Storage Services

Each link goes to a provider page with simple step-by-step instructions, sample code, and any authentication notes.

- [AWS S3](./open-pdf-file/from-amazon-s3)
- [Azure Blob Storage](./open-pdf-file/from-azure-blob-storage)
- [Google Cloud Storage](./open-pdf-file/from-google-cloud-storage)
- [Google Drive](./open-pdf-file/from-google-drive)
- [OneDrive](./open-pdf-file/from-one-drive)
- [Dropbox](./open-pdf-file/from-dropbox-cloud-file-storage)
- [Box](./open-pdf-file/from-box-cloud-file-storage)

---

**See also**


- [Load documents dynamically in React PDF Viewer](./how-to/load-document)
- [Load a PDF only after PDFium resources are ready](./how-to/load-document-after-resources-loaded)
- [Saving PDF files](./save-pdf-files)
