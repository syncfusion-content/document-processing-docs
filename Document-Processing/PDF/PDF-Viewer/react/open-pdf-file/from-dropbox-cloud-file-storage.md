---
layout: post
title: Open PDF from Dropbox cloud storage in React PDF Viewer | Syncfusion
description: Learn how to load PDFs from Dropbox cloud storage in the Syncfusion React PDF Viewer component using standalone and server-backed approaches.
control: Open PDF files from Dropbox cloud file storage
platform: document-processing
documentation: ug
---

# Open PDF from Dropbox cloud storage

These instructions describe how to load PDF files stored in Dropbox into the Syncfusion React PDF Viewer, using either the standalone client approach or a server-backed web service.

## Using Standalone PDF Viewer

To load a PDF file from Dropbox cloud file storage in a PDF Viewer, you can follow the steps below.

**Step 1** Create a Dropbox API app

Create an API app in the Dropbox App Console. Follow the Dropbox tutorial for app creation and obtain an access token or configure OAuth 2.0 for server-side authentication. Ensure the app has the scopes required to read files from the target folder and register an appropriate redirect URI when using OAuth flows. See the Dropbox developer documentation for details.

**Step 2:** Create a Simple PDF Viewer Sample in React

Start by following the Syncfusion React PDF Viewer 'Getting started' guide to create a basic PDF viewer sample. This establishes the client-side component that will request document data either directly from Dropbox (standalone) or via the server-backed service.

**Step 3:** Modify the src/app/app.ts file in the React project

1. Import the required namespaces at the top of the file:

```typescript
import { Dropbox } from 'dropbox';
```

2. Create an instance of the `Dropbox` class using an access token for authentication. Call `filesDownload` to retrieve the file (for example, `/PDF_Succinctly.pdf`), extract the blob from the response, convert the blob to a Base64 string with `blobToBase64`, and then load the Base64 string into the PDF viewer control.

N> Replace the placeholder with a valid Dropbox access token.

```typescript
function loadDocument() {
  const dbx = new Dropbox({ accessToken: 'Your Access Token' });
  dbx.filesDownload({ path: '/PDF_Succinctly.pdf' }).then(async (response) => {
    const blob = await response.result.fileBlob;
    const base64String = await blobToBase64(blob);
    setTimeout(() => {
      viewer.load(base64String, "");
    }, 2000);
  });
}

function blobToBase64(blob){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
```

N> Install the Dropbox JavaScript SDK via npm (`npm install dropbox`) before using the standalone example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-dropbox-cloud-file-storage/tree/master/Open%20and%20Save%20PDF%20in%20Drop%20Box%20using%20Standalone)