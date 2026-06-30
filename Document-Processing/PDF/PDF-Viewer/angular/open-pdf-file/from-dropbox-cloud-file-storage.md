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