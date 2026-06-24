---
layout: post
title: Open PDF from Dropbox cloud storage in Angular PDF Viewer | Syncfusion
description: Learn here all about how to Open PDF files from Dropbox cloud file storage in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open PDF files from Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Dropbox cloud storage

The Angular PDF Viewer component supports loading PDF files from Dropbox using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1** Create a Dropbox API

Follow the Dropbox documentation to create an API app: [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). This enables programmatic access with secure credentials.

**Step 2:** Create a Simple PDF Viewer Sample in Angular

Start by following the PDF Viewer [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) guide for Angular to create a simple PDF Viewer sample. This provides the basic setup for the PDF Viewer component.

**Step 3:** Modify the src/app/app.ts file in the Angular project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Create an instance of the Dropbox class using an access token for authentication. Call the `filesDownload` method to download the desired file (for example, `/PDF_Succinctly.pdf`). Extract the file blob from the response, convert it to a Base64 string using the `blobToBase64` helper, and load the Base64 string into the PDF Viewer control.

Note: Replace the placeholder with the actual Dropbox access token. For production, store secrets securely (for example, environment variables, user secrets, or a secret store such as Azure Key Vault) and do not commit credentials to source control.

```typescript
async loadPdfDocument(): Promise<void> {
  let proxy = this;
  let dbx = new Dropbox({ accessToken: 'Your Access Token' });
  dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
    const blob = await (response.result as any).fileBlob;
    const base64String = await this.blobToBase64(blob);
    setTimeout(() => {
        this.pdfviewerControl.load(base64String, "");
    }, 2000);
  });
}

private blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
          resolve(reader.result as string);
      };
      reader.readAsDataURL(blob);
  });
}
```

N> The **npm install dropbox** package must be installed in the Angular application to use the Dropbox SDK.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using the server-backed PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1** Create a Dropbox API

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). This enables programmatic access with secure credentials.

**Step 2:** Create a PDF Viewer sample in Angular

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This will give you a basic setup of the PDF Viewer component.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

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

5. Modify the `Load()` method to load the PDF files from Dropbox cloud file storage.

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

N> Replace the placeholders with your actual Dropbox values: Access Token and Folder Name.

**Step 4:** Configure the PDF Viewer component

Set the serviceUrl to your web service endpoint (replace the localhost URL with your server URL). Set documentPath to the PDF file name to load from Dropbox. Ensure the document name exists in your Dropbox folder.

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

N> The **Dropbox.Api** NuGet package must be installed in the web service project to use the Dropbox SDK.

N> Replace `PDF_Succinctly.pdf` with the actual document name to load from Dropbox. Ensure the specified document exists in the configured Dropbox folder and is passed to the `documentPath` property of the PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)