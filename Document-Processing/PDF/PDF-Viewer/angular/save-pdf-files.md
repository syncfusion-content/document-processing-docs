---
layout: post
title: Saving PDF files in Angular PDF Viewer component | Syncfusion
description: Learn about saving PDF files in the Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Saving PDF files
documentation: ug
domainurl: ##DomainURL##
---

# Saving PDF file in Angular PDF Viewer component

After editing a PDF file with annotation tools, the updated PDF may need to be saved to a server, database, or local file system.

## Save PDF file to server

To save the modified PDF back to a server, follow these steps.

**Step 1:** Create a simple PDF Viewer sample in Angular

Follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This provides a basic setup of the component.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. Refer to this [article](https://www.syncfusion.com/kb/11063/how-to-create-pdf-viewer-web-service-in-net-core-3-0-and-above) for instructions.

2. Open the `PdfViewerController.cs` file in the web service project.

3. Modify the [Download()](https://ej2.syncfusion.com/angular/documentation/api/pdfviewer/downloadStartEventArgs/) method to return the document for download.

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

**Step 3:** Set the PDF Viewer properties in the Angular PDF Viewer component

Set the `serviceUrl` property of the PDF Viewer component to the URL of the web service project, replacing `https://localhost:44396/pdfviewer` with the actual server URL. Set `documentPath` to the desired PDF document URL.

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
    // Replace correct PDF Document URL want to load
    public documentPath="PDF_Succinctly.pdf"
  }
```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Save%20PDF%20file%20to%20Server)

## Download a copy of the PDF file

The built-in toolbar includes an option to download the updated PDF to the local file system.

```html
<button (click)="downloadClicked()">Download</button>
```

```typescript
downloadClicked() {
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  viewer.download();
}
```