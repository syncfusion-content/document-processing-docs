---
layout: post
title: Open PDF from Azure Blob Storage in JavaScript PDF Viewer | Syncfusion
description: Learn how to load PDFs from Azure Blob Storage in the Syncfusion JavaScript PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Azure Blob Storage

The JavaScript PDF Viewer component supports loading PDF files from Azure Blob Storage using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage in the standalone PDF Viewer.

**Step 1:** Create a PDF Viewer sample in JavaScript

Start by following the steps provided in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/javascript-es5/getting-started) to create a simple PDF viewer sample in JavaScript. This will give you a basic setup of the PDF viewer component.

**Step 2:** Modify the `src/app/app.ts` file in the JavaScript project

1. Add the following private properties to the `app.ts`, and assign the values from the configuration to the corresponding properties

N> Replace **Your account name in Azure** with the actual account name for your Azure Blob Storage account and **Your container name in Azure** with the actual container name and **Your Blob name in Azure** with the actual container name.

```javascript
var accountName = "*Your account name in Azure*";
var containerName = "*Your container name in Azure*";
var blobName = "*Your Blob name in Azure*";
```

2. Construct the URL to the PDF in Azure Blob Storage. Call `fetchAndConvertToBase64` to fetch the PDF and convert it to a base64 string. Then load the base64 string into the PDF Viewer.

```javascript
pdfviewer.created = function () {
  var url = 'https://' + accountName + '.blob.core.windows.net/' + containerName + '/' + blobName;
  fetchAndConvertToBase64(url).then(function (base64String) {
    if (base64String) {
      setTimeout(function () {
        pdfviewer.load('data:application/pdf;base64,' + base64String, '');
      }, 2000);
    } else {
      console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(function (error) { console.error('Error:', error); });
};
```

3. Retrieve the PDF from the URL and convert the fetched Blob to a base64 string using blobToBase64.

```javascript
function fetchAndConvertToBase64(url) {
  return new Promise(function (resolve, reject) {
    fetch(url).then(function (response) {
      if (!response.ok) {
        throw new Error('HTTP error! Status: ' + response.status);
      }
      return response.blob();
    }).then(function (blob) {
      blobToBase64(blob).then(function (base64String) {
        resolve(base64String);
      });
    }).catch(function (error) {
      console.error('Error fetching file:', error);
      reject(null);
    });
  });
}
```

4. Use FileReader to convert a Blob to a base64 string. Resolve the promise with the base64 string or reject it in case of an error.

```javascript
function blobToBase64(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () {
      var base64String = reader.result ? reader.result.toString().split(',')[1] : '';
      resolve(base64String);
    };
    reader.onerror = function (error) { reject(error); };
    reader.readAsDataURL(blob);
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage/tree/master/Open%20and%20Save%20PDF%20in%20Azure%20Blob%20Storage%20using%20Standalone).