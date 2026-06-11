---
layout: post
title: Save PDF files to Google Cloud Storage in SfPdfViewer | Syncfusion
description: Learn how to save PDF files to Google Cloud Storage from the Syncfusion Blazor SfPdfViewer component with a secure, step-by-step workflow.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Save PDF to Google Cloud Storage in Blazor SfPdfViewer

Follow these steps to save a PDF from the SfPdfViewer to Google Cloud Storage (GCS).

**Step 1** Create a service account

Open the Google Cloud Console. Navigate to `IAM & Admin` > `Service accounts`. Click `Create service account`, enter a name, assign only the required role (for uploads, Storage Object Creator; use broader roles such as Storage Object Admin only if necessary), and create a key in JSON format. Download the key file securely. Use the downloaded key file in the application for authentication and access to the Google Cloud Storage bucket. For details, refer to the [official documentation](https://cloud.google.com/iam/docs/service-accounts-create).

**Step 2:** Create a simple SfPdfViewer sample in Blazor

Start by following the steps in this guide to create a [basic SfPdfViewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) sample in Blazor. This provides the initial setup of the SfPdfViewer component.

**Step 3:** Include the following namespaces in the **Index.razor** file.

1. Import the required namespaces at the top of the file:

```csharp
@using Google.Cloud.Storage.V1;
@using Google.Apis.Auth.OAuth2;
@using Syncfusion.Blazor.SfPdfViewer;
@using Syncfusion.Blazor.Buttons;
```

**Step 4:** Add the below code example to the Index.razor file to upload the currently loaded document to GCS.

```csharp

@page "/"

<SfButton @onclick="OnClick">Save file to google cloud storage</SfButton>
<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="@viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>


@code {
    private string DocumentPath { get; set; }
    private SfPdfViewer2 viewer;
    private readonly string keyFilePath = @"path/to/service-account-key.json";
    private readonly string bucketName = "YourBucketName";
    private readonly string fileName = "FileName.pdf";
    private StorageClient _storageClient;

    public async void OnClick(MouseEventArgs args)
    {
        byte[] data = await viewer.GetDocumentAsync();
        string result = Path.GetFileNameWithoutExtension(fileName);
        string FileName = result + "_downloaded.pdf";
        // Load the service account credentials from the key file.
        var credentials = GoogleCredential.FromFile(keyFilePath);
        // Create a storage client with Application Default Credentials
        _storageClient = StorageClient.Create(credentials);
        // Upload the document to Google Cloud Storage
        using (var memoryStream = new MemoryStream(data))
        {
            _storageClient.UploadObject(bucketName, result + "_downloaded.pdf", null, memoryStream);
        }
    }
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual name of your Google Cloud Storage bucket and **File Name to be Loaded into Syncfusion<sup style="font-size:70%">&reg;</sup> SfPdfViewer** with the actual file name you want to load from the cloud bucket.

N> Replace **path/to/service-account-key.json** with the actual file path to the service account key JSON file. Make sure to provide the correct path and filename.

N> The **Google.Cloud.Storage.V1** NuGet package is required. Install it in the application before running the sample.

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20GCS)

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)