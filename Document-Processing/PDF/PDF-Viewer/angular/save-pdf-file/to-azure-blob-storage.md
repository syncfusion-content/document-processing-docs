---
layout: post
title: Save PDF to Azure Blob Storage in PDF Viewer Component | Syncfusion
description: Learn here all about how to save PDF files to Azure Blob Storage in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Save PDF files to Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to Azure Blob Storage in Angular

The Angular PDF Viewer component supports saving PDF files to Azure Blob Storage using either a standalone (browser) configuration or a server-backed configuration. The following steps demonstrate both approaches and include prerequisites and security guidance for production deployments.

## Using Standalone PDF Viewer

Follow the steps below to save a PDF file to Azure Blob Storage from an Angular PDF Viewer.

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF viewer sample in Angular. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/app/app.ts` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import { BlockBlobClient } from "@azure/storage-blob";
```

2. Add the following private properties to the `AppComponent` class, and assign the values from the configuration to the corresponding properties

N> Replace **Your SAS Url in Azure** with the SAS URL generated for the target blob. For production, generate short-lived SAS tokens on the server rather than embedding SAS URLs in client code.

```typescript
private SASUrl: string = "*Your SAS Url in Azure*";
```

3. Configure a custom toolbar item for the download function to save a PDF file in Azure Blob Storage.

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

4. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob as an ArrayBuffer and upload the ArrayBuffer to Azure Blob Storage using 'BlockBlobClient'.

```typescript
SavePdfToBlob() {
  var proxy = this;
  var pdfViewer = (<any>document.getElementById('pdfViewer')).ej2_instances[0];
  pdfViewer.saveAsBlob().then(function (value: Blob) {
    var reader = new FileReader();
    reader.onload = async () => {
      // Convert ArrayBuffer to Uint8Array
      if (reader.result) {
        const arrayBuffer = reader.result as ArrayBuffer;
        const blobClient = new BlockBlobClient(proxy.SASUrl);
        // Upload data to the blob
        const uploadBlobResponse = await blobClient.upload(arrayBuffer, arrayBuffer.byteLength);
        console.log(`Upload blob successfully`, uploadBlobResponse.requestId);
      }
    };
    reader.readAsArrayBuffer(value);
  });
}
```

N> Install the Azure Storage Blob client package for browser use: `npm install @azure/storage-blob`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).