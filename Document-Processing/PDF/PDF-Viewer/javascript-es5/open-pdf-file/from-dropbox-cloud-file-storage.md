---
layout: post
title: Open PDF from Dropbox cloud storage in JavaScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from Dropbox cloud storage in the Syncfusion JavaScript PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Dropbox cloud storage

The JavaScript PDF Viewer component supports loading PDF files from Dropbox using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1** Create a Dropbox API app

Follow the [Dropbox documentation](https://www.dropbox.com/developers/documentation/dotnet#tutorial) to create a Dropbox API app. This enables programmatic access with secure credentials and allows generation of access tokens or configuration of OAuth flows.

**Step 2:** Create a simple PDF Viewer sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample in JavaScript. This provides a basic setup of the PDF Viewer component.

**Step 3:** Modify the `src/app/app.ts` file in the JavaScript project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Create an instance of the Dropbox class using an access token for authentication. Call the `filesDownload` method to download the file located at `/PDF_Succinctly.pdf`. After downloading, extract the file blob from the response, convert the blob to a Base64 string using `blobToBase64`, and load the Base64 string into the PDF Viewer control.

N> Replace the placeholder with your actual Dropbox access token. For production scenarios, avoid embedding long-lived access tokens in client-side code; use an OAuth token flow or a server-side token exchange so credentials are not exposed in the browser.

```typescript
pdfviewer.created = function () {
    let dbx = new Dropbox({ accessToken: 'Your Access Token' });
      dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
        const blob = await (response.result as any).fileBlob;
        const base64String = await blobToBase64(blob);
        setTimeout(() => {
            pdfviewer.load(base64String, "");
        }, 2000);
    });
}

function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
    });
}
```

N> Install the Dropbox SDK for the client sample with `npm install dropbox`. Verify the SDK version compatibility with your project.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using the server-backed PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a Dropbox API app

Follow the official Dropbox documentation [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial) to create a Dropbox API app using the App Console. Configure redirect URIs and required scopes for file access, and select an OAuth flow appropriate for the application (server-side OAuth is recommended for production).

**Step 2:** Create a PDF Viewer sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 3:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or above (NET 6 LTS or later recommended). You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on creating a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _folderName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _folderName = _configuration.GetValue<string>("FolderName");
}
```

5. Modify the [Load()](https://ej2.syncfusion.com/documentation/api/pdfviewer/#load) method to load the PDF files from Dropbox cloud file storage.

```csharp

[HttpPost("Load")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Load")]
//Post action for Loading the PDF documents 

public async Task<IActionResult> Load([FromBody] Dictionary<string, string> jsonObject)
{
  //Initialize the PDF viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  MemoryStream stream = new MemoryStream();
  object jsonResult = new object();
  if (jsonObject != null && jsonObject.ContainsKey("document"))
  {
    if (bool.Parse(jsonObject["isFileName"]))
    {
      // Get the file name from the jsonObject, which should contain the Dropbox file name
      string fileName = jsonObject["document"];

      using (var dropBox = new DropboxClient(_accessToken))
     {
        using (var response = await dropBox.Files.DownloadAsync(_folderName + "/" + fileName))
        {
          var byteArray = await response.GetContentAsByteArrayAsync();

          // Load the PDF file into the PDF viewer
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
  "AccessToken": "Your_Dropbox_Access_Token",
  "FolderName": "Your_Folder_Name"
}
```

N> Replace the placeholders with your actual Dropbox values: access token and folder name. Store server-side credentials securely (for example, using environment variables or a secrets store) and restrict token permissions to the minimum required scopes.

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from Dropbox. Ensure the document name exists in your Dropbox folder.

```javascript

// Inject required modules
ej.pdfviewer.PdfViewer.Inject(
  ej.pdfviewer.Toolbar,
  ej.pdfviewer.Magnification,
  ej.pdfviewer.Navigation,
  ej.pdfviewer.LinkAnnotation,
  ej.pdfviewer.ThumbnailView,
  ej.pdfviewer.BookmarkView,
  ej.pdfviewer.TextSelection,
  ej.pdfviewer.Annotation,
  ej.pdfviewer.FormFields,
  ej.pdfviewer.FormDesigner
);

var viewer = new ej.pdfviewer.PdfViewer();
// Replace the "localhost:44396" with the actual URL of your server
viewer.serviceUrl = 'https://localhost:44396/pdfviewer';
viewer.appendTo('#pdfViewer');
viewer.load('PDF_Succinctly.pdf', null);

```

N> Install the `Dropbox.Api` NuGet package in the server project to use the Dropbox client APIs shown above.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)
