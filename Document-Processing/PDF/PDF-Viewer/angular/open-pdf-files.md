---
layout: post
title: Open PDF Files in Angular PDF Viewer Component | Syncfusion
description: Learn here all about how to load PDF files from various locations in Syncfusion Angular PDF Viewer component, it's elements, and more.
platform: document-processing
control: Open PDF files
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF Files in Angular PDF Viewer Component

Opening and viewing PDF files may be required from various locations. This section explains how to open PDF files from a URL, database, local file system, or a base64 string.

## Open a PDF from a URL

PDF files hosted on the web can be opened in the viewer using a URL.

**Step 1:** Create a simple PDF Viewer sample in Angular

Follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This provides a basic setup of the component.

**Step 2:** Modify the `PdfViewerController.cs` file in the web service project

1. Create a web service project in .NET Core 3.0 or later. Refer to this [article](https://support.syncfusion.com/kb/article/9766/how-to-create-pdf-viewer-web-service-in-net-core-31-and-above) for instructions.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Modify the `Load()` method to open the document in the viewer using a URL.

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
    public documentPath="https://cdn.syncfusion.com/content/PDFViewer/flutter-succinctly.pdf"
  }
```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20URL)

## Open a PDF from base64 data

The following steps explain how to load a PDF file in the PDF Viewer as a base64 string.

**Step 1:** Create a simple PDF Viewer sample in Angular

Follow the steps in this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This provides a basic setup of the component.

**Step 2:** Use the following code snippet to load the document from Base64 string.

```html
<button (click)="load()">LoadDocumentFromBase64</button>
```

```typescript
load() {
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  viewer.load(
    "data:application/pdf;base64,.....",
    null
  );
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/angular-pdf-viewer-examples/tree/master/Save%20and%20Load/Load%20PDF%20file%20from%20base64%20string)