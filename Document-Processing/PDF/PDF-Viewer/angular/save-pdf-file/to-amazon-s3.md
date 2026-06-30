---
layout: post
title: Save PDF files to AWS S3 in Angular PDF Viewer Component | Syncfusion
description: Learn here all about how to save PDF files to AWS S3 in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Save PDF files to AWS S3
documentation: ug
domainurl: ##DomainURL##
---

# Save PDF files to AWS S3 in Angular

The Angular PDF Viewer component supports saving PDF files to AWS S3 using either a standalone (browser) configuration or a server-backed configuration. The following steps demonstrate both approaches and include notes on prerequisites and security considerations for production use.

## Using Standalone PDF Viewer

Follow the steps below to save a PDF file to AWS S3 from a browser-based Angular PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Angular

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in TypeScript. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `src/app/app.ts` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import * as AWS from 'aws-sdk';
```

2. Configure the AWS SDK with the region, access key, and secret access key. This configuration allows the application to interact with AWS services like S3.

N> Replace the placeholder values with the AWS region and credentials. For production, avoid embedding long-lived AWS credentials in client-side code; use temporary credentials (STS) or perform uploads via a trusted server.

```typescript
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

3. Configure a custom toolbar item for the download function to save a PDF file to AWS S3.

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

4. Retrieve the PDF Viewer instance, save the current PDF as a Blob, read it using FileReader to get an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the putObject method.

N> Replace **Your Bucket Name** and **Your Key** with the target S3 bucket and object key. Ensure the S3 bucket is configured with appropriate permissions and CORS rules to allow browser uploads.

```typescript
private s3 = new AWS.S3();

saveDocument() {
    var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
    viewer.saveAsBlob().then((value: Blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        const uint8Array = new Uint8Array(reader.result as ArrayBuffer);
        const putObjectParams = {
          Bucket: '**Your Bucket Name**',
          Key: '**Your Key**',
          Body: uint8Array,
          ContentType: 'application/pdf',
        };
        this.s3.putObject(putObjectParams, (err, data) => {
          if (err) {
            console.error('Error uploading document:', err);
          } else {
            console.log('Document uploaded successfully:', data);
          }
        });
      };
      reader.readAsArrayBuffer(value);
    });
  }
```

N> Install the AWS SDK package to use the browser example. Run `npm install aws-sdk` for the v2 bundle, or prefer the AWS SDK v3 modular packages for smaller client bundles and better tree-shaking.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).