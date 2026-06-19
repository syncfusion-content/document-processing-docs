---
layout: post
title: Open PDF from AWS S3 in JavaScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from AWS S3 in the Syncfusion JavaScript PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Open PDF from AWS S3

The JavaScript PDF Viewer component supports loading PDF files from AWS S3 using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from AWS S3 in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in JavaScript

Follow the instructions in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a basic PDF Viewer sample in JavaScript.

**Step 2:** Modify the `index.html` File in the JavaScript Project

1. Import the required namespaces at the top of the file:

```javascript
<script src="https://sdk.amazonaws.com/js/aws-sdk-2.1654.0.min.js"></script>
```

2. Configure the AWS SDK with the region, access key, and secret access key so the application can interact with S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

```javascript
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

3. Set parameters for fetching the PDF (bucket name and file key). Use S3.getObject to retrieve the document, convert it to a Base64 string, and pass it to viewer.load.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

```javascript
private s3 = new AWS.S3();

pdfviewer.created = function () {
  const getObjectParams = {
    Bucket: '**Your Bucket Name**',
    Key: '**Your Key**',
  };
  s3.getObject(getObjectParams, (err, data) => {
    if (err) {
      console.error('Error fetching document:', err);
    } else {
      if (data && data.Body) {
        const bytes = new Uint8Array(data.Body);
        let binary = '';
        bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
        const base64String = window.btoa(binary);
        setTimeout(() => {
            pdfviewer.load("data:application/pdf;base64,"+base64String);
        }, 2000);
      }
    }
  });
};
```

N> The **aws-sdk** package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).