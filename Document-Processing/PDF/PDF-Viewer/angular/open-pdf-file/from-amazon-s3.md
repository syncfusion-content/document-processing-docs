---
layout: post
title: Open PDF files from AWS S3 in Angular PDF Viewer | Syncfusion
description: Learn here all about how to Open PDF files from AWS S3 in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open PDF files from AWS S3
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF files from AWS S3

The Angular PDF Viewer component supports loading PDF files from AWS S3 using either the standalone or the server-backed PDF Viewer. The following sections demonstrate both approaches and include prerequisites and security guidance.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from AWS S3 in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in Angular

Follow the instructions in the getting started guide (Angular) to create a basic PDF Viewer sample: [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started)

**Step 2:** Modify the `src/app/app.ts` File in the Angular Project

1. Import the required namespaces at the top of the file:

```typescript
import * as AWS from 'aws-sdk';
```

2. Configure the AWS SDK with the region, access key, and secret access key so the application can interact with S3.

N> Replace the placeholder values with valid values when testing. Do not embed production credentials in client-side code; use server-side authentication or pre-signed URLs for secure access.

```typescript
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

3. Set parameters for fetching the PDF (bucket name and file key). Use S3.getObject to retrieve the document, convert it to a Base64 string, and pass it to viewer.load.

N> Replace **Your Bucket Name** and **Your Key** with the target S3 bucket name and object key when testing.

```typescript
private s3 = new AWS.S3();

loadDocument() {
  const getObjectParams = {
    Bucket: '**Your Bucket Name**',
    Key: '**Your Key**',
  };
  this.s3.getObject(getObjectParams, (err, data) => {
    if (err) {
      console.error('Error fetching document:', err);
    } else {
      if (data && data.Body) {
        const bytes = new Uint8Array(data.Body as ArrayBuffer);
        let binary = '';
        bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
        const base64String = window.btoa(binary);
        console.log('Document data as Base64:', base64String);
        var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
        setTimeout(() => {
          viewer.load("data:application/pdf;base64,"+base64String);
        }, 2000);
      }
    }
  });
}
```

N> Install the AWS SDK package appropriate for the project. For v2 use `npm install aws-sdk`; for v3 prefer the modular packages such as `@aws-sdk/client-s3`.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).