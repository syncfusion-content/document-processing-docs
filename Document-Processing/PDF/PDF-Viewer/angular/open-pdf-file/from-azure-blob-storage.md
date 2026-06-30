---
layout: post
title: Open PDF from Azure Blob Storage into PDF Viewer | Syncfusion
description: Learn here all about how to Open PDF files from Azure Blob Storage in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Open PDF files from Azure Blob Storage
documentation: ug
domainurl: ##DomainURL##
---

# Open PDF from Azure Blob Storage in Angular

The Angular PDF Viewer supports loading PDF files from Azure Blob Storage using either the standalone or server-backed viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from Azure Blob Storage in the standalone PDF Viewer.

**Step 1:** Create a Simple PDF Viewer Sample in Angular

Follow the getting-started guide in this [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/angular/getting-started) to create a basic PDF Viewer sample in Angular.

**Step 2:** Modify the `src/app/app.ts` File in the Angular Project

1. Add the following private properties to the `AppComponent` class, and assign the values from the configuration to the corresponding properties

N> Replace **Your account name in Azure** with the Azure storage account name, **Your container name in Azure** with the container name, and **Your Blob name in Azure** with the blob name.

```typescript
private accountName: string = "*Your account name in Azure*";
private containerName: string = "*Your container name in Azure*";
private blobName: string = "*Your Blob name in Azure*";
```

2. Construct the URL to the PDF in Azure Blob Storage. Call fetchAndConvertToBase64 to fetch the PDF and convert it to a base64 string. Then load the base64 string into the PDF Viewer.

```typescript
LoadPdfFromBlob() {
  const url = 'https://'+this.accountName+'.blob.core.windows.net/'+this.containerName+'/'+this.blobName;
  this.fetchAndConvertToBase64(url).then(base64String => {
    if (base64String) {
        var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
        setTimeout(() => {
          viewer.load("data:application/pdf;base64,"+base64String);
        }, 2000);
    } else {
        console.error('Failed to fetch and convert file to base64.');
    }
  }).catch(error => console.error('Error:', error));
}
```

3. Retrieve the PDF from the URL and convert the fetched Blob to a base64 string using blobToBase64.

```typescript
async fetchAndConvertToBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const base64String = await this.blobToBase64(blob);
    return base64String;
  } catch (error) {
    console.error('Error fetching file:', error);
    return null;
  }
}
```

4. Use FileReader to convert a Blob to a base64 string. Resolve the promise with the base64 string or reject it in case of an error.

```typescript
blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
        const base64String = reader.result?.toString().split(',')[1] || '';
        resolve(base64String);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(blob);
  });
}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-azure-blob-storage).