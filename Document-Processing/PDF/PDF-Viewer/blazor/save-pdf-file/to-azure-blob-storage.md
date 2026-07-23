---
layout: post
title: Save PDF file to Azure Blob Storage in Blazor SfPdfViewer | Syncfusion
description: Learn how to save PDF files to Azure Blob Storage using the Blazor SfPdfViewer component, including setup, and persistence workflow.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Save PDF file to Azure Blob Storage in Blazor SfPdfViewer Component

Follow these steps to save a PDF from the SfPdfViewer to Azure Blob Storage.

**Step 1:** Create the Azure Blob Storage account

Sign in to the Azure portal and create a Storage account with the desired configuration. Record the connection string during setup. Within the Storage account, create a Blob container. For detailed guidance, see Create a Storage account and container in the [Azure portal](https://learn.microsoft.com/azure/storage/common/storage-account-create?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json&tabs=azure-portal).

**Step 2:** Create a simple SfPdfViewer sample in Blazor

Create a basic Blazor Web App Server application that hosts the SfPdfViewer component by following [Getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) with Blazor SfPdfViewer. This provides the baseline configuration required for the viewer.

**Step 3:** Include the following namespaces in the **Index.razor** file

Import the required namespaces at the top of the file:

```csharp
@using System.IO;
@using Azure.Storage.Blobs;
@using Azure.Storage.Blobs.Specialized;
@using Microsoft.AspNetCore.Components.Web;
@using Syncfusion.Blazor.Buttons;
@using Syncfusion.Blazor.SfPdfViewer;
```

**Step 4:** Replace **Index.razor** with the following code to save the currently loaded PDF in SfPdfViewer to an Azure Blob Storage container

```csharp
@page "/"
<SfButton @onclick="OnClick">Save file to Azure Blob Storage</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private string DocumentPath { get; set; } = "https://example.com/sample.pdf";
    private SfPdfViewer2 viewer;
    private readonly string connectionString = "Your Connection string from Azure";
    private readonly string containerName = "Your container name in Azure";
    private readonly string fileName = "File Name to be loaded into Syncfusion SfPdfViewer";

    private async Task OnClick(MouseEventArgs args)
    {
        try
        {
            byte[] data = await viewer.GetDocumentAsync();

            BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
            await containerClient.CreateIfNotExistsAsync();

            string result = Path.GetFileNameWithoutExtension(fileName);

            // Get a reference to the blob. Set overwrite to true to replace an existing blob with the same name.
            BlobClient blobClient = containerClient.GetBlobClient(result + "_downloaded.pdf");

            using (MemoryStream stream = new MemoryStream(data))
            {
                // overwrite: true replaces the blob if it already exists
                blobClient.Upload(stream, true);
            }
        }
        catch (Exception ex)
        {
            // Surface the error to the user; replace with a UI notification as needed.
            Console.Error.WriteLine($"Failed to save to Azure Blob Storage: {ex.Message}");
        }
    }
}
```

N>
* Replace **Your Connection string from Azure** with the actual connection string for the Azure Storage account, **File Name to be Loaded into SfPdfViewer** with the file name to load from the Azure container into the SfPdfViewer, and **Your container name in Azure** with the actual container name.
* Store the Azure connection string in application configuration (for example, appsettings.json or user secrets) rather than hardcoding it in source code.
* The **Azure.Storage.Blobs** NuGet package must be installed in the application. Install it using `dotnet add package Azure.Storage.Blobs` before running the sample.

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20Azure%20blob%20storage).

## See also

* [Save PDF file to Amazon S3 in Blazor SfPdfViewer](to-amazon-s3)
* [Save PDF file to Google Cloud Storage in Blazor SfPdfViewer](to-google-cloud-storage)
* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)