---
layout: post
title:  Open PDF files from AWS S3 in SfPdfViewer Component | Syncfusion
description: Learn how to open PDF files from AWS S3 in the Syncfusion Blazor SfPdfViewer component, including steps and configuration guidance.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF file from AWS S3 in SfPdfViewer

To load a PDF file from AWS S3 in the SfPdfViewer component, follow the steps below.

**Step 1:** Create AWS S3 account 

Set up an AWS account by following the official guide: [AWS Management Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). Create an S3 bucket, upload a PDF file, and create an IAM user with permissions to read objects (for example, s3:GetObject). Generate access keys and store them securely.

**Step 2:** Create a simple SfPdfViewer sample in Blazor

Follow the steps in the Blazor Server [getting started](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/blazor/getting-started/web-app) guide for PDF Viewer to create a basic sample. This provides the required project setup and SfPdfViewer configuration.

**Step 3:** Include the following namespaces in the **Index.razor** file.

1. Import the required namespaces at the top of the file:

```csharp
@using Amazon;
@using Amazon.S3;
@using Amazon.S3.Model;
@using Syncfusion.Blazor.SfPdfViewer;
```

**Step 4:** Add the following code example to the Index.razor file.

```csharp

@page "/"

<SfPdfViewer2 DocumentPath="@DocumentPath"
              @ref="viewer"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    private SfPdfViewer2 viewer;
    private string DocumentPath { get; set; }

    private readonly string accessKey = "Your Access Key from AWS S3";
    private readonly string secretKey = "Your Secret Key from AWS S3";
    private readonly string bucketName = "Your Bucket name from AWS S3";
    private readonly string fileName = "File Name to be loaded into Syncfusion PDF Viewer";

    protected override async Task OnInitializedAsync()
    {
        MemoryStream stream = new MemoryStream();
        RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

        // Configure the AWS SDK with your access credentials and other settings
        var s3Client = new AmazonS3Client(accessKey, secretKey, bucketRegion);

        // Specify the document name or retrieve it from a different source
        var response = await s3Client.GetObjectAsync(bucketName, fileName);

        Stream responseStream = response.ResponseStream;
        responseStream.CopyTo(stream);
        stream.Seek(0, SeekOrigin.Begin);
        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(stream.ToArray());
    }
}
```

Replace the fileName value with the actual S3 object key for the PDF to load. Pass the document name to the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property of the SfPdfViewer component.

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with valid values for your environment. Do not expose credentials in client-side code; store secrets securely using app settings, environment variables, or IAM roles.

N> The **AWSSDK.S3** NuGet package must be installed in the application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20AWS%20S3)

N> Ensure that the RegionEndpoint in the code matches the region of the target S3 bucket to avoid authorization or not-found errors.

## See also

* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer Component](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)