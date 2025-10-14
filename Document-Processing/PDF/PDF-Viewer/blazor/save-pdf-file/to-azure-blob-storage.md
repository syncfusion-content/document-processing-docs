---
layout: post
title: Save PDF file to Azure Blob Storage in Blazor SfPdfViewer | Syncfusion
description: Learn how to save PDF files to Azure Blob Storage using the Syncfusion Blazor SfPdfViewer component, including setup, and persistence workflow.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Save PDF file to Azure Blob Storage in Blazor SfPdfViewer

To save a PDF file to Azure Blob Storage, follow the steps below.

**Step 1:** Create the Azure Blob Storage account

Sign in to the Azure portal and create a Storage account with the desired configuration. Record the connection string during setup. Within the Storage account, create a Blob container. For detailed guidance, see Create a Storage account and container in the [Azure portal](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

**Step 2:** Create a Simple SfPdfViewer Sample in Blazor

Create a basic Blazor Web App Server application that hosts the SfPdfViewer component by following [Getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) with Blazor SfPdfViewer. This provides the baseline configuration required for the viewer.

**Step 3:** Include the following namespaces in the **Index.razor** file.

1. Import the required namespaces at the top of the file:

```csharp
@using System.IO;
@using Azure.Storage.Blobs;
@using Azure.Storage.Blobs.Specialized;
@using Syncfusion.Blazor.Buttons;
@using Syncfusion.Blazor.SfPdfViewer;
```

**Step 4:** Add the below code example to save the downloaded PDF files to Azure Blob Storage container

```csharp

@page "/"
<SfButton @onclick="OnClick">Save file to Azure Blob Storage</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; }
    private SfPdfViewer2 viewer;
    private readonly string connectionString = "Your Connection string from Azure";
    private readonly string containerName = "Your container name in Azure";
    private readonly string fileName = "File Name to be loaded into Syncfusion SfPdfViewer";

    public async void OnClick(MouseEventArgs args)
    {
        byte[] data = await viewer.GetDocumentAsync();

        BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);

        BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);

        string result = Path.GetFileNameWithoutExtension(fileName);

        // Get a reference to the blob
        BlobClient blobClient = containerClient.GetBlobClient(result + "_downloaded.pdf");

        using (MemoryStream stream = new MemoryStream(data))
        {
            blobClient.Upload(stream, true);
        }
    }
}

```

N> Replace **Your Connection string from Azure** with the actual connection string for the Azure Storage account, **File Name to be Loaded into Syncfusion<sup style="font-size:70%">&reg;</sup> SfPdfViewer** with the file name to load from the Azure container into the SfPdfViewer, and **Your container name in Azure** with the actual container name.

N> The **Azure.Storage.Blobs** NuGet package must be installed in the application to use the previous code example.

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20Azure%20blob%20storage).

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)