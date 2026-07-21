---
layout: post
title: Open PDF from Azure Blob Storage in SfPdfViewer Component | Syncfusion
description: Learn how to load a PDF from Azure Blob Storage into the Blazor SfPdfViewer component, including setup steps, and configuration guidance.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF from Azure Blob Storage in SfPdfViewer

This article shows how to load a PDF stored in Azure Blob Storage into the Blazor `SfPdfViewer` component.

## Step 1: Create the storage account and container

Sign in to the Azure portal and create a Storage account. Record the access keys or prepare a SAS token for secure access. Within the Storage Account, create a Blob Container following the steps in this [link](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

## Step 2: Create a minimal SfPdfViewer sample

Create a basic Blazor Server application and integrate the SfPdfViewer component by following [Getting started with the Blazor PDF Viewer](../getting-started/web-app). This provides the required project configuration and a working viewer scaffold.

## Step 3: Configure secrets and the connection string

Store the Azure Storage connection string in a secure configuration source such as `appsettings.json`, environment variables, or Azure Key Vault. Do not hard-code it in Razor components. Load it at runtime through `IConfiguration`, as shown in the next step. To retrieve the connection string from the Azure portal, refer to the [View account access keys](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage) guide.

## Step 4: Add required namespaces

Add the required namespaces to `_Imports.razor` (or to the top of `Index.razor`):

```csharp
@using System.IO
@using Azure.Storage.Blobs
@using Azure.Storage.Blobs.Specialized
@using Syncfusion.Blazor.SfPdfViewer
```

## Step 5: Load a PDF from Azure Blob Storage

The example below downloads the blob to memory, converts it to a base64 data URL, and assigns it to [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath).

N> Replace the placeholder values as follows:  
* **Your connection string from Azure**: the actual connection string or SAS-based connection for the Azure Storage account.
* **Your container name in Azure**: the name of the Blob container that stores the PDF.  
* **File name to load into the SfPdfViewer**: the file name to load from the Azure container into the SfPdfViewer.

```csharp

@page "/"

@inject IConfiguration Configuration

<SfPdfViewer2 DocumentPath="@DocumentPath"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; }

    private readonly string containerName = "Your container name in Azure";
    private readonly string fileName = "File Name to be loaded into Syncfusion SfPdfViewer";

    protected override async Task OnInitializedAsync()
    {
        string connectionString = Configuration["Azure:StorageConnectionString"];

        // Connection String of Storage Account
        BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
        BlobContainerClient blobContainerClient = blobServiceClient.GetBlobContainerClient(containerName);
        BlockBlobClient blockBlobClient = blobContainerClient.GetBlockBlobClient(fileName);

        await using MemoryStream memoryStream = new MemoryStream();
        await blockBlobClient.DownloadToAsync(memoryStream);
        memoryStream.Position = 0;
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(memoryStream.ToArray());
    }
}
```

N>
* Install the `Azure.Storage.Blobs` NuGet package to use the preceding code.
* Do not expose credentials in client-side code. Load the connection string via `IConfiguration` as shown, and prefer managed identities or a SAS token over a full account key when possible. In Blazor WebAssembly, call Azure Storage from a server-side API rather than directly in the component.

[View the Azure Blob Storage sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20Azure%20blob%20storage).

## See also

* [SfPdfViewer getting started for Blazor Server app](../getting-started/web-app)
* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)
