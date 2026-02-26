---
layout: post
title: Open PDF from Box cloud storage in React PDF Viewer | Syncfusion
description: Learn how to load PDFs from Box cloud storage in the Syncfusion React PDF Viewer component using a server-backed approach.
control: Open PDF files from Box cloud file storage
platform: document-processing
documentation: ug
---

# Open PDF from Box cloud storage in React

These steps describe how to load a PDF stored in Box cloud storage into the Syncfusion React PDF Viewer using a server-backed web service.

**Step 1:** Set up a Box developer account and create a Box application

Create a developer account and Box application in the [Box Developer Console](https://developer.box.com/). Note the Client ID and Client Secret. Configure OAuth 2.0 for the application (including a suitable redirect URI) and ensure the application has the scopes required to read files from the target folder.

**Step 2:** Create a PDF Viewer sample in React

Start by following the Syncfusion React PDF Viewer 'Getting started' guide to create a basic PDF viewer sample. This establishes the client-side component that requests document data from the server-backed service.

**Step 3:** Modify the PdfViewerController.cs file in the web service project

1. Create a web service project in .NET Core 3.0 or above. Ensure the project runs over HTTPS in production and configure CORS to allow requests from the client origin. You can refer to this [guide](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on creating the web service project. Install the Box SDK NuGet package (for example: `Install-Package Box.V2`).

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
```

4. Add the following private fields and constructor parameters to PdfViewerController. In the constructor, assign values from configuration to the corresponding fields.

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

5. Modify the [Load()](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#load) method to load PDF files from Box cloud storage.

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
      string objectName = jsonObject["document"];

      // Initialize the Box API client with your authentication credentials
      var auth = new OAuthSession(_accessToken, "YOUR_REFRESH_TOKEN", 3600, "bearer");
      var config = new BoxConfigBuilder(_clientID, _clientSecret, new Uri("http://boxsdk")).Build();
      var client = new BoxClient(config, auth);

      // Download the file from Box storage
      var items = await client.FoldersManager.GetFolderItemsAsync(_folderID, 1000, autoPaginate: true);
      var files = items.Entries.Where(i => i.Type == "file");

      // Filter the files based on the objectName
      var matchingFile = files.FirstOrDefault(file => file.Name == objectName);

      // Fetch the file from Box storage by its name
      var fileStream = await client.FilesManager.DownloadAsync(matchingFile.Id);
      stream = new MemoryStream();
      await fileStream.CopyToAsync(stream);

      // Reset the position to the beginning of the stream
      stream.Position = 0;
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
  "AccessToken": "Your_Box_Storage_Access_Token",
  "FolderID": "Your_Folder_ID",
  "ClientID": "Your_Box_Storage_ClientID",
  "ClientSecret": "Your_Box_Storage_ClientSecret"
}
```

N> Replace the placeholders with actual Box values (Access Token, Folder ID, Client ID, and Client Secret).

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#serviceurl) to your web service endpoint (replace the localhost URL with your server URL). Set `documentPath` to the PDF file name to load from Box cloud storage. Ensure the document name exists in your Box folder. Confirm that the server's CORS policy allows requests from the client origin and that `serviceUrl` uses HTTPS in production.

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

N> Install the Box SDK NuGet package (for example `Box.V2`) in the web service project to use the Box API client shown above.

N> Replace `PDF_Succinctly.pdf` with the actual document name to load from Box cloud storage. Ensure the server validates that the file exists and handle cases where the file is not found or access is denied.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-box-cloud-file-storage)