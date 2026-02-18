---
layout: post
title: Open PDF from Dropbox cloud storage in React PDF Viewer | Syncfusion
description: Learn how to load PDFs from Dropbox cloud storage in the Syncfusion React PDF Viewer component using standalone and server-backed approaches.
control: Open PDF files from Dropbox cloud file storage
platform: document-processing
documentation: ug
---

# Open PDF from Dropbox cloud storage

These instructions describe how to load PDF files stored in Dropbox into the Syncfusion React PDF Viewer, using either the standalone client approach or a server-backed web service.

## Using Standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below.

**Step 1** Create a Dropbox API app

Create an API app in the Dropbox App Console. Follow the Dropbox tutorial for app creation and obtain an access token or configure OAuth 2.0 for server-side authentication. Ensure the app has the scopes required to read files from the target folder and register an appropriate redirect URI when using OAuth flows. See the Dropbox developer documentation for details.

**Step 2:** Create a Simple PDF Viewer Sample in React

Start by following the Syncfusion React PDF Viewer 'Getting started' guide to create a basic PDF viewer sample. This establishes the client-side component that will request document data either directly from Dropbox (standalone) or via the server-backed service.

**Step 3:** Modify the src/app/app.ts file in the React project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Create an instance of the `Dropbox` class using an access token for authentication. Call `filesDownload` to retrieve the file (for example, `/PDF_Succinctly.pdf`), extract the blob from the response, convert the blob to a Base64 string with `blobToBase64`, and then load the Base64 string into the PDF viewer control.

N> Replace the placeholder with a valid Dropbox access token.

```typescript
function loadDocument() {
  const dbx = new Dropbox({ accessToken: 'Your Access Token' });
  dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
    const blob = await response.result.fileBlob;
    const base64String = await blobToBase64(blob);
    setTimeout(() => {
      viewer.load(base64String, "");
    }, 2000);
  });
}

function blobToBase64(blob){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
```

N> Install the Dropbox JavaScript SDK via npm (`npm install dropbox`) before using the standalone example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using the server-backed PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below.

**Step 1:** Create a Dropbox API app

Create an API app in the Dropbox App Console. Follow the Dropbox tutorial for app creation and obtain an access token or configure OAuth 2.0 for server-side authentication. Ensure the app has the scopes required to read files from the target folder and register an appropriate redirect URI when using OAuth flows.

**Step 2:** Create a PDF Viewer sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

**Step 3:** Modify the PdfViewerController.cs file in the web service project

1. Create a web service project in .NET Core 3.0 or above. Ensure the project runs over HTTPS in production and configure CORS to allow requests from the client origin. You can refer to this [guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on creating the web service project. Install the Dropbox SDK NuGet package (for example: `Install-Package Dropbox.Api`).

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

5. Modify the `Load()` method to load the PDF from Dropbox cloud file storage.

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

N> Replace the placeholders with actual Dropbox values (Access Token and Folder Name). Do not store secrets in plaintext for production—use environment variables or a secure secret store (for example, Azure Key Vault). Implement token refresh logic and add robust error handling for API failures and missing resources.

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from Dropbox. Ensure the document name exists in your Dropbox folder.

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
          documentPath="PDF_Succinctly.pdf"
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

N> Install the **Dropbox.Api** NuGet package in the web service project to use the server example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)
