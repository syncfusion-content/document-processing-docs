---
layout: post
title: Open PDF files from Azure in SfPdfViewer Component | Syncfusion
description: Learn how to load a PDF from Azure Blob Storage into the Syncfusion Blazor SfPdfViewer component, including setup steps, and configuration guidance.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF from Azure Blob Storage in SfPdfViewer

This article shows how to load a PDF stored in Azure Blob Storage into the Syncfusion Blazor `SfPdfViewer` component.

## Step 1 — Create the storage account and container

Sign in to the Azure portal and create a Storage account with the required settings. Record the access keys or prepare a SAS token for secure access. Within the Storage Account, create a Blob Container following the steps in this [link](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

## Step 2 — Create a minimal SfPdfViewer sample

Create a basic Blazor Server application and integrate the SfPdfViewer component by following [Getting started with the Blazor PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app). This provides the required project configuration and a working viewer scaffold.

## Step 3 — Add required namespaces

1. Add the required namespaces at the top of Index.razor:

```csharp
@using System.IO
@using Azure.Storage.Blobs
@using Azure.Storage.Blobs.Specialized
@using Syncfusion.Blazor.SfPdfViewer
```

## Step 4 — Example: load a PDF from Azure Blob Storage

The example below downloads the blob to memory, converts it to a Base64 data URL, and assigns it to `DocumentPath`.

```csharp

@page "/"

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; }

    private readonly string connectionString = "Your Connection string from Azure";
    private readonly string containerName = "Your container name in Azure";
    private readonly string fileName = "File Name to be loaded into Syncfusion SfPdfViewer";
	
    protected override void OnInitialized()
    {
        //Connection String of Storage Account
        BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
        BlobContainerClient blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);
        BlockBlobClient blockBlobClient = blobContainerClient.GetBlockBlobClient(fileName);
        MemoryStream memoryStream = new MemoryStream();
        blockBlobClient.DownloadTo(memoryStream);
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(memoryStream.ToArray());
    }
}
```

N> Replace the placeholder values as follows:  
• **Your Connection string from Azure**: the actual connection string or SAS-based connection for the Azure Storage account.
• **Your container name in Azure**: the name of the Blob container that stores the PDF.  
• **File Name to be Loaded into Syncfusion<sup style="font-size:70%">&reg;</sup> SfPdfViewer**: the file name to load from the Azure container to the SfPdfViewer.

N> Ensure the `Azure.Storage.Blobs` NuGet package is installed. Prefer server-side retrieval or managed identities to avoid exposing secrets.

[View the Azure Blob Storage sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20Azure%20blob%20storage).

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)