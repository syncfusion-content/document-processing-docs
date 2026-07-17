---
layout: post
title:  Open PDF files from AWS S3 in SfPdfViewer Component | Syncfusion
description: Learn how to open PDF files from AWS S3 in the Blazor SfPdfViewer component, including steps and configuration guidance.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Open PDF from AWS S3 in SfPdfViewer

This article shows how to load a PDF stored in AWS S3 into the Blazor `SfPdfViewer` component.

## Step 1: Create an S3 bucket and upload the PDF

Set up an AWS account by following the official guide: [AWS Management Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). Create an S3 bucket, upload a PDF file to the bucket, and create an IAM user with permissions to read objects (for example, `s3:GetObject`).

## Step 2: Configure AWS credentials

Generate access keys for the IAM user and store them securely. Load the keys from configuration in your application:

* Store the access key and secret key in `appsettings.json`, environment variables, or AWS Secrets Manager.
* When running on AWS infrastructure (EC2, ECS, Lambda), prefer IAM roles over long-lived access keys.
* Do not hard-code credentials in source files or client-side code.

## Step 3: Create a simple SfPdfViewer sample

Follow the steps in the Blazor Server [getting started](../getting-started/web-app) guide for SfPdfViewer to create a basic sample. This provides the required project setup and SfPdfViewer configuration.

## Step 4: Add required namespaces

Add the following using directives to `_Imports.razor` (or to the top of the `.razor` file):

```csharp
@using Amazon;
@using Amazon.S3;
@using Amazon.S3.Model;
@using Syncfusion.Blazor.SfPdfViewer;
```

## Step 5: Load a PDF from S3 and assign it to DocumentPath

The example below retrieves the PDF from S3, converts it to a base64 data URL, and assigns it to `DocumentPath`.

```csharp
@page "/"

@inject IConfiguration Configuration

<SfPdfViewer DocumentPath="@DocumentPath"
             Height="100%"
             Width="100%">
</SfPdfViewer>

@code {
    private string DocumentPath { get; set; }

    private string accessKey;
    private string secretKey;
    private string bucketName = "YourBucketName";
    private string fileName = "YourFileName.pdf";
    private RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

    protected override async Task OnInitializedAsync()
    {
        accessKey = Configuration["AWS:AccessKey"];
        secretKey = Configuration["AWS:SecretKey"];

        // Configure the AWS SDK with your access credentials and region
        using var s3Client = new AmazonS3Client(accessKey, secretKey, bucketRegion);

        // Retrieve the PDF object from the S3 bucket
        var response = await s3Client.GetObjectAsync(bucketName, fileName);

        await using MemoryStream stream = new MemoryStream();
        await using Stream responseStream = response.ResponseStream;
        await responseStream.CopyToAsync(stream);
        stream.Seek(0, SeekOrigin.Begin);

        DocumentPath = "data:application/pdf;base64," + Convert.ToBase64String(stream.ToArray());
    }
}
```

Replace `bucketName` with your S3 bucket name and `fileName` with the S3 object key (including the `.pdf` extension) for the PDF. The value is assigned to the [DocumentPath](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.SfPdfViewer.PdfViewerBase.html#Syncfusion_Blazor_SfPdfViewer_PdfViewerBase_DocumentPath) property of `SfPdfViewer`.

N>
* Do not expose credentials in client-side code. Store the access key and secret key in `appsettings.json`, environment variables, or AWS Secrets Manager, and load them via `IConfiguration` as shown above. When running on AWS infrastructure, prefer IAM roles over long-lived access keys.
* The `AWSSDK.S3` NuGet package must be installed to use the AWS SDK in this example. In Blazor WebAssembly, call the AWS SDK from a server-side API rather than directly in the component.
* Ensure `RegionEndpoint` matches the region in which the S3 bucket is created to avoid authorization or not-found errors.

[View sample in GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Load%20and%20Save/Open%20and%20Save%20from%20AWS%20S3)

## See also

* [SfPdfViewer getting started for Blazor Server app](../getting-started/web-app)
* [Processing Large Files Without Increasing Maximum Message Size in SfPdfViewer](../faqs/how-to-processing-large-files-without-increasing-maximum-message-size)