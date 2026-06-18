---
layout: post
title: Open PDF from Azure Blob Storage in React Pdfviewer | Syncfusion
description: Learn about how to load PDF files from Azure Blob Storage in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open PDF files from Azure Blob Storage
platform: document-processing
documentation: ug
---

# Open PDF from Azure Blob Storage

The PDF Viewer allows loading PDF files from Azure Blob Storage using either the standalone or server-backed PDF Viewer. Below are the steps and a sample that demonstrate how to open a PDF from Azure Blob Storage.

## Using the standalone PDF Viewer

To load a PDF file from Azure Blob Storage in a PDF Viewer, you can follow the steps below

**Step 1:** Create a PDF Viewer sample in React

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF viewer sample in React. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/index.js` File in the React Project

1. Add the following private properties to `index.js` and assign values from configuration or a secure source.

N> Replace placeholders with the target Azure account, container, and blob names. Do not store credentials in source control.

```typescript
var accountName = "*Your account name in Azure*";
var containerName = "*Your container name in Azure*";
var blobName = "*Your Blob name in Azure*";
```

2. Construct the URL to the PDF in Azure Blob Storage. Call fetchAndConvertToBase64 to fetch the PDF and convert it to a base64 string. Then load the base64 string into the PDF Viewer.

```typescript
function loadDocument() {
  var url = 'https://' + accountName + '.blob.core.windows.net/' + containerName + '/' + blobName;
  fetchAndConvertToBase64(url).then(function(base64String) {
    if (base64String) {
      setTimeout(function() {
        viewer.load("data:application/pdf;base64," + base64String);
      }, 2000);
    } else {
      console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(function(error) {
    console.error('Error:', error);
  });
}
```

3. Retrieve the PDF from the URL and convert the fetched Blob to a base64 string using blobToBase64.

```typescript
function fetchAndConvertToBase64(url) {
  return new Promise(function(resolve, reject) {
    fetch(url).then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }
      return response.blob();
    }).then(function(blob) {
      blobToBase64(blob).then(function(base64String) {
        resolve(base64String);
      });
    }).catch(function(error) {
      console.error('Error fetching file:', error);
      reject(null);
    });
  });
}
```

4. Use FileReader to convert a Blob to a base64 string. Resolve the promise with the base64 string or reject it in case of an error.

```typescript
function blobToBase64(blob) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function() {
      var base64String = reader.result ? reader.result.toString().split(',')[1] : '';
      resolve(base64String);
    };
    reader.onerror = function(error) {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).