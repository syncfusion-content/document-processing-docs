---
layout: post
title: Save PDF to Dropbox cloud storage in Angular PDF Viewer | Syncfusion
description: Learn here all about how to save PDF files to Dropbox cloud file storage in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Save PDF files to Dropbox cloud file storage
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to Dropbox cloud storage in Angular

The Angular PDF Viewer component supports saving PDF files to Dropbox using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To save a PDF file to Dropbox, follow these steps:

**Step 1:** Create a Dropbox API app

To create a Dropbox API App, you should follow the official documentation provided by Dropbox [link](https://www.dropbox.com/developers/documentation/dotnet#tutorial). The process involves visiting the Dropbox Developer website and using their App Console to set up your API app. This app will allow you to interact with Dropbox programmatically, enabling secure access to files and data.

**Step 2:** Create a Simple PDF Viewer Sample in Angular

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This sets up the basic structure of the PDF Viewer application.

**Step 3:** Modify the `src/app/app.ts` file in the Angular project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

```typescript
@Component({
  selector: 'app-root',
  template: `<div class="content-wrapper">
                <ejs-pdfviewer id="pdfViewer"
                    [resourceUrl]='resource'
                    [toolbarSettings]="toolbarSettings"
                    (toolbarClick)="toolbarClick($event)"
                    style="height:640px;display:block">
                </ejs-pdfviewer>
             </div>`,
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               AnnotationService, FormDesignerService, FormFieldsService, PageOrganizerService]
})

export class AppComponent implements OnInit {
  public resource: string = "https://cdn.syncfusion.com/ej2/23.1.43/dist/ej2-pdfviewer-lib";

  public toolItem1: CustomToolbarItemModel = {
    prefixIcon: 'e-icons e-pv-download-document-icon',
    id: 'download_pdf',
    tooltipText: 'Download file',
    align: 'right'
  };

  public toolbarSettings = {
    showTooltip: true,
    toolbarItems: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', this.toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
  };

  public toolbarClick(args: any): void {
    if (args.item && args.item.id === 'download_pdf') {
      this.SavePdfToBlob();
    }
  }
}
```

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to Dropbox using the `filesUpload` method of the Dropbox instance.

N> Replace **Your Access Token** with the actual access token for the Dropbox app.

```typescript
saveDocument() {
  var proxy = this
  var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
  this.fileName = viewer.fileName;
  viewer.saveAsBlob().then((value: Blob) => {
    const reader = new FileReader();
    reader.onload = async () => {
      let dbx = new Dropbox({ accessToken: 'Your Access Token' });
      const uint8Array = new Uint8Array(reader.result as ArrayBuffer);
      dbx.filesUpload({ path: '/' + proxy.fileName , contents: uint8Array })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    reader.readAsArrayBuffer(value);
  });
}
```

N> Install the `dropbox` package in the Angular project before running the sample: `npm install dropbox`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)