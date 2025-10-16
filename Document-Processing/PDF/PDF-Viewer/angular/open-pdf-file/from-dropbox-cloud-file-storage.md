---
layout: post
title: Open PDF from Dropbox cloud storage in Angular PDF Viewer | Syncfusion
description: Learn how to open PDF files from Dropbox cloud file storage in the Syncfusion Angular PDF Viewer component of Essential JS 2.
platform: document-processing
control: Open PDF files from Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Dropbox cloud file storage

Angular PDF Viewer supports loading a PDF from Dropbox using either the standalone or server-backed PDF Viewer. The following steps and sample demonstrate opening a PDF from Dropbox.

## Using the standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in the PDF Viewer, follow these steps

**Step 1:** Create a Dropbox API app

Refer to the official Dropbox documentation [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). Use the App Console on the Dropbox Developer site to set up an API app that enables secure, programmatic access to files and data.

**Step 2:** Create a simple PDF Viewer sample in Angular

Follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a basic Angular sample with the PDF Viewer component. This provides a baseline setup.

**Step 3:** Modify the `src/app/app.component.ts` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Create an instance of the Dropbox class using an access token for authentication. Next, call the filesDownload method of this Dropbox instance to download the file located at /PDF_Succinctly.pdf. Upon successfully downloading the file, extract the file blob from the response. Convert this file blob to a Base64 string using the blobToBase64 method. Finally, load the Base64 string into a PDF viewer control.

N> Replace **Your Access Token** with the access token of the Dropbox account.

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

N> The **npm install dropbox** package must be installed in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)

## Using the server-backed PDF Viewer

To load a PDF file from Dropbox cloud file storage in the PDF Viewer, follow these steps

**Step 1** Create a Dropbox API

Refer to the official Dropbox documentation [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). Use the App Console on the Dropbox Developer site to set up an API app that enables secure, programmatic access to files and data.

**Step 2:** Create a Simple PDF Viewer Sample in Angular

Follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a basic Angular sample with the PDF Viewer component. This provides a baseline setup.

**Step 3:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in the web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Dropbox.Api;
using Dropbox.Api.Files;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class. In the constructor, assign values from configuration to the corresponding fields.

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

6. Open the `appsettings.json` file in the web service project and add the following lines below the existing `"AllowedHosts"` configuration

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

N> Replace **Your_Dropbox_Access_Token** with the Dropbox access token and **Your_Folder_Name** with the folder name.

**Step 4:**  Set PDF Viewer properties in the Angular PDF Viewer component

Modify the `serviceUrl` property of the PDF Viewer component with the accurate URL of the web service project, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set the `documentPath` property to the PDF file name to be loaded from Dropbox cloud file storage. Pass the document name from the files available in the Dropbox folder to the `documentPath` property.

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

N> The **Dropbox.Api** NuGet package must be installed in the application to use the previous code example.

N> Replace `PDF_Succinctly.pdf` with the document name to load from Dropbox cloud file storage. Pass the document name from the Dropbox folder to the `documentPath` property of the PDF Viewer component.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Server-Backed)