---
layout: post
title: Save PDF files to Box cloud storage in React PDF Viewer | Syncfusion
description: Learn how to save PDF files to Box cloud storage using the Syncfusion React PDF Viewer component with a server-backed web service.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Save PDF files to Box cloud file storage

To save a PDF file to Box cloud file storage, you can follow the steps below

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, you'll need a developer account with Box. Go to the [Box Developer Console](https://developer.box.com/), sign in or create a new account, and then create a new Box application. This application will provide you with the necessary credentials Client ID and Client Secret to authenticate and access Box APIs. Before accessing files, you need to authenticate your application to access your Box account. Box API supports `OAuth 2.0 authentication` for this purpose.

**Step 2:** Create a PDF Viewer sample in React

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample in React. This sets up the basic structure of the PDF Viewer application.

**Step 3:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign configuration values to the corresponding fields.

```csharp
private IConfiguration _configuration;
public readonly string _accessToken;
public readonly string _clientID;
public readonly string _clientSecret;
public readonly string _folderID;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
   _configuration = configuration;
  _accessToken = _configuration.GetValue<string>("AccessToken");
  _clientID = _configuration.GetValue<string>("ClientID");
  _clientSecret = _configuration.GetValue<string>("ClientSecret");
  _folderID = _configuration.GetValue<string>("FolderID");
}
```

5. Modify the [Download()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#download) method to save the downloaded PDF file to the Box cloud storage folder.

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

  // Initialize the Box API client with your authentication credentials
  var auth = new OAuthSession(_accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
  var config = new BoxConfigBuilder(_clientID, _clientSecret, new Uri("http://boxsdk")).Build();
  var client = new BoxClient(config, auth);

  var fileRequest = new BoxFileRequest
  {
    Name = fileName,
    Parent = new BoxFolderRequest { Id = _folderID },
  };

  using (var stream = new MemoryStream(documentBytes))
  {
    var boxFile = await client.FilesManager.UploadAsync(fileRequest, stream);
  }
  return Content(documentBase);
}
```

6. Open the `appsettings.json` file in the web service project and add the following lines below the existing `"AllowedHosts"` configuration.

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "AccessToken": "Your_Box_Storage_Access_Token",
  "FolderID": "Your_Folder_ID",
  "ClientID": "Your_Box_Storage_ClientID",
  "ClientSecret": "Your_Box_Storage_ClientSecret"
}
```

N> Replace the placeholders with the actual Box access token, folder ID, client ID, and client secret.

**Step 4:** Set the PDF Viewer properties in the React PDF Viewer component

Modify the `serviceUrl` property of the PDF Viewer component with the accurate URL of the web service, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the desired PDF file name to load from Box cloud storage, and ensure that the document exists in the target folder.

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

              <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView,
                                  ThumbnailView, Print, TextSelection, TextSearch, FormDesigner, FormFields ]} />
        </PdfViewerComponent>
    </div>
  </div>);
}
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

```
{% endraw %}

N> Install the Box.V2.Core NuGet package in the web service application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the actual document name to load from Box cloud storage. Pass the document name from the Box folder to the `documentPath` property of the PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-box-cloud-file-storage)