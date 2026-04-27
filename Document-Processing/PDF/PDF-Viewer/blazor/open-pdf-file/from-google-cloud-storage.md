---
layout: post
title: Open PDF from Google Cloud Storage in Blazor PDF Viewer | Syncfusion
description: Learn how to load a PDF from Google Cloud Storage into the Syncfusion Blazor SfPdfViewer. Includes required setup, permissions, and sample code.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF from Google Cloud Storage in SfPdfViewer

This article shows how to load a PDF stored in Google Cloud Storage into the Syncfusion Blazor `SfPdfViewer` component.

## Step 1 — Create a service account

Open the Google Cloud Console and navigate to `IAM & Admin` > `Service accounts`. Select `Create service account`, provide a name, assign the required role (for example, Storage Object Admin), and create a JSON key. Download the key file securely. Use this key file for authenticating your application to access the Google Cloud Storage bucket. For more information, refer to the [official Google Cloud documentation](https://cloud.google.com/iam/docs/service-accounts-create)..

## Step 2 — Create a minimal SfPdfViewer sample

Follow the [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) guide to create a basic Blazor application with the SfPdfViewer component. This provides the required project setup and a working viewer instance.

## Step 3 — Add required namespaces

1. Import the required namespaces at the top of the file:

```csharp
@using Google.Cloud.Storage.V1;
@using Google.Apis.Auth.OAuth2;
@using Syncfusion.Blazor.SfPdfViewer;
```

## Step 4 — Example: download an object and load into the viewer

The example below loads a PDF object from a GCS bucket into memory, converts it to a Base64 data URI, and assigns it to `DocumentPath`.

```csharp

@page "/"

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

    protected override async Task OnInitializedAsync()
    {
        MemoryStream stream = new MemoryStream();
        // Load the service account credentials from the key file.
        var credentials = GoogleCredential.FromFile(keyFilePath);
        // Create a storage client with Application Default Credentials
        _storageClient = StorageClient.Create(credentials);
        _storageClient.DownloadObject(bucketName, fileName, stream);
        stream.Position = 0;
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(stream.ToArray());
    }
}
```

N> Replace **Your Bucket name from Google Cloud Storage** with the actual Google Cloud Storage bucket name and **File Name to be Loaded into Syncfusion<sup style="font-size:70%">&reg;</sup> SfPdfViewer** with the object name to load in the Syncfusion SfPdfViewer.

N> Replace **path/to/service-account-key.json** with the absolute or application-accessible path to the service account key JSON file.

N> Install the **Google.Cloud.Storage.V1** NuGet package in the application to use the preceding code. Ensure the Syncfusion Blazor packages are installed and a valid license key is registered.

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20GCS)

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)