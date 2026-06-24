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

## Using Server-Backed PDF Viewer

To save a PDF file to AWS S3, you can follow the steps below:

**Step 1:** Create a PDF Viewer sample in TypeScript

Follow the instructions provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a simple PDF Viewer sample in Angular. This will set up the basic structure of your PDF Viewer application.

**Step 2:** Modify the `PdfViewerController.cs` File in the Web Service Project

1. Create a web service project in .NET Core 3.0 or above. You can refer to this [link](https://support.syncfusion.com/kb/article/9766/how-to-create-pdf-viewer-web-service-in-net-core-31-and-above) for instructions on how to create a web service project.

2. Open the `PdfViewerController.cs` file in your web service project.

3. Import the required namespaces at the top of the file:

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

4. Add the following private fields and constructor parameters to the `PdfViewerController` class, In the constructor, assign the values from the configuration to the corresponding fields

```csharp
private IConfiguration _configuration;
public readonly string _accessKey;
public readonly string _secretKey;
public readonly string _bucketName;

public PdfViewerController(IWebHostEnvironment hostingEnvironment, IMemoryCache cache, IConfiguration configuration)
{
  _hostingEnvironment = hostingEnvironment;
  _cache = cache;
  _configuration = configuration;
  _accessKey = _configuration.GetValue<string>("AccessKey");
  _secretKey = _configuration.GetValue<string>("SecretKey");
  _bucketName = _configuration.GetValue<string>("BucketName");
}
```

5. Modify the `Download()` method to save the downloaded PDF files to AWS S3 bucket

```csharp

[HttpPost("Download")]
[Microsoft.AspNetCore.Cors.EnableCors("MyPolicy")]
[Route("[controller]/Download")]
//Post action for downloading the PDF documents

public IActionResult Download([FromBody] Dictionary<string, string> jsonObject)
{
  // Initialize the PDF Viewer object with memory cache object
  PdfRenderer pdfviewer = new PdfRenderer(_cache);
  string documentBase = pdfviewer.GetDocumentAsBase64(jsonObject);
  RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

  // Configure the AWS SDK with your access credentials and other settings
  var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
  string bucketName = _bucketName;
  string documentName = jsonObject["documentId"];
  string result = Path.GetFileNameWithoutExtension(documentName);
  byte[] bytes = Convert.FromBase64String(documentBase.Split(",")[1]);
  using (MemoryStream stream = new MemoryStream(bytes))
  {
    var request = new PutObjectRequest
    {
      BucketName = bucketName,
      Key = result + "_downloaded.pdf",
      InputStream = stream,
    };
    // Upload the PDF document to AWS S3
    var response = s3Client.PutObjectAsync(request).Result;
  }
  return Content(documentBase);
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
  "AccessKey": "Your Access Key from AWS S3",
  "SecretKey": "Your Secret Key from AWS S3",
  "BucketName": "Your Bucket name from AWS S3"
}
```

N> Replace the placeholders with the appropriate AWS credentials and bucket name. For enhanced security, avoid storing long-lived credentials in configuration files; use environment variables or a secrets manager instead.

**Step 3:** Set the PDF Viewer properties in the TypeScript PDF Viewer component

Modify the serviceUrl with your web service endpoint and set documentPath to the PDF file name to load from AWS S3. Ensure the document exists in the target bucket.

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

N> The `AWSSDK.S3` NuGet package must be installed in the web service project to use the server example. Use secure secret management for credentials rather than storing them in source-controlled configuration files.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)