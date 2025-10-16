---
layout: post
title: Open PDF files from Box cloud file storage in Angular PDF Viewer component | Syncfusion
description: Learn how to open PDF files from Box cloud file storage in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Open PDF files from Box cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF file from Box cloud file storage

To load a PDF file from Box cloud file storage in the PDF Viewer, follow these steps.

**Step 1:** Set up a Box developer account and create a Box application

To access Box storage programmatically, a Box developer account is required. Go to the [Box Developer Console](https://developer.box.com/), sign in or create a new account, and create a Box application. This application provides the required credentials (Client ID and Client Secret) to authenticate and access Box APIs. Authentication uses `OAuth 2.0`.

**Step 2:** Create a simple PDF Viewer sample in Angular

Follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This provides a basic setup of the component.

**Step 3:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. Refer to this [article](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions.

2. Open the `PdfViewerController.cs` file in the web service project.

3. Import the required namespaces at the top of the file:

```csharp
using Box.V2;
using Box.V2.Auth;
using Box.V2.Config;
using Box.V2.Models;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign the values from configuration to the corresponding fields.

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

5. Modify the `Load()` method to load the PDF files from Box cloud file storage.

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

N> Replace **Your_Box_Storage_Access_Token** with the Box access token, and **Your_Folder_ID** with the ID of the target folder in Box storage. Use valid Box API credentials; **Your_Box_Storage_ClientID** and **Your_Box_Storage_ClientSecret** are placeholders for the application's API key and secret.

**Step 4:** Set the PDF Viewer properties in the Angular PDF Viewer component

Set the `serviceUrl` property of the PDF Viewer component to the URL of the web service project, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the desired name of the PDF file to load from Box cloud file storage. Ensure that the document name corresponds to a file available in the Box folder.

```typescript
import { Component, OnInit } from '@angular/core';
import { LinkAnnotationService, BookmarkViewService, MagnificationService,
         ThumbnailViewService, ToolbarService, NavigationService,
         TextSearchService, AnnotationService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService} from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-container',
  // specifies the template string for the PDF Viewer component
  template: `<div class="content-wrapper">
                  <ejs-pdfviewer id="pdfViewer"
                                [serviceUrl]='service'
                                [documentPath]='documentPath'
                                style="height:640px;display:block">
                  </ejs-pdfviewer>
            </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,ThumbnailViewService,
               ToolbarService, NavigationService, AnnotationService, TextSearchService,
                TextSelectionService, PrintService, FormDesignerService, FormFieldsService]
   })
  export class AppComponent implements OnInit {
    // Replace the "localhost:44396" with the actual URL of your server
    public service = 'https://localhost:44396/pdfviewer';
    public documentPath = 'PDF_Succinctly.pdf';
  }
```

N> The **Box.V2.Core** NuGet package must be installed in your application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the actual document name to load from Box cloud file storage. Ensure the document name is passed from the Box folder to the `documentPath` property of the PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-box-cloud-file-storage)