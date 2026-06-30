---
layout: post
title: Open PDF from Dropbox cloud storage in JavaScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from Dropbox cloud storage in the Syncfusion JavaScript PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Dropbox cloud storage

The JavaScript PDF Viewer component supports loading PDF files from Dropbox using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using Standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below

**Step 1** Create a Dropbox API app

Follow the [Dropbox documentation](https://www.dropbox.com/developers/documentation/dotnet#tutorial) to create a Dropbox API app. This enables programmatic access with secure credentials and allows generation of access tokens or configuration of OAuth flows.

**Step 2:** Create a simple PDF Viewer sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF Viewer sample in JavaScript. This provides a basic setup of the PDF Viewer component.

**Step 3:** Modify the `src/app/app.ts` file in the JavaScript project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Create an instance of the Dropbox class using an access token for authentication. Call the `filesDownload` method to download the file located at `/PDF_Succinctly.pdf`. After downloading, extract the file blob from the response, convert the blob to a Base64 string using `blobToBase64`, and load the Base64 string into the PDF Viewer control.

N> Replace the placeholder with your actual Dropbox access token. For production scenarios, avoid embedding long-lived access tokens in client-side code; use an OAuth token flow or a server-side token exchange so credentials are not exposed in the browser.

```typescript
pdfviewer.created = function () {
    let dbx = new Dropbox({ accessToken: 'Your Access Token' });
      dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
        const blob = await (response.result as any).fileBlob;
        const base64String = await blobToBase64(blob);
        setTimeout(() => {
            pdfviewer.load(base64String, "");
        }, 2000);
    });
}

function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
    });
}
```

N> Install the Dropbox SDK for the client sample with `npm install dropbox`. Verify the SDK version compatibility with your project.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)