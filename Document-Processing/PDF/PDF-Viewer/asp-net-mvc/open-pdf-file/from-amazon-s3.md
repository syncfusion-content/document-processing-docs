---
layout: post
title: Open PDF from AWS S3 in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to load PDFs from AWS S3 in the Syncfusion ASP.NET MVC PDF Viewer component using standalone and server-backed approaches.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Open PDF from AWS S3

The ASP.NET MVC PDF Viewer component supports loading PDF files from AWS S3 using either the standalone or the server-backed PDF Viewer. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

Follow these steps to load a PDF from AWS S3 in the standalone PDF Viewer.

**Step 1:** Create AWS S3 account

 Set up an AWS S3 account by following the instructions on the official AWS site: [AWS Management Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). Create an S3 bucket and generate access keys while ensuring secure storage of credentials.

**Step 2:** Create PDF Viewer Sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `~/Views/Shared/_Layout.cshtml` File in the Project

1. Add the required scripts using CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1654.0.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

**Step 4:** Modify the `~/Views/Home/Index.cshtml` File in the Project

1. Configures AWS SDK with the region, access key, and secret access key. This configuration allows the application to interact with AWS services like S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

```csharp
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

2. Sets the parameters for fetching the PDF document from S3, including the bucket name and file key. Then Uses the getObject method of the S3 instance to retrieve the document. Converts the document data to a Base64 string and loads it into the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer then load Base64 string generated into the viewer.load method.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

```csharp
loadDocument() {
    const s3 = new AWS.S3();
    const getObjectParams = {
        Bucket: '**Your Bucket Name**',
        Key: '**Your Key**',
    };
    this.s3.getObject(getObjectParams, (err, data) => {
        if (err) {
        console.error('Error fetching document:', err);
        } else {
        if (data && data.Body) {
            const bytes = new Uint8Array(data.Body as ArrayBuffer);
            let binary = '';
            bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
            const base64String = window.btoa(binary);
            console.log('Document data as Base64:', base64String);
            var viewer = (<any>document.getElementById("pdfViewer")).ej2_instances[0];
            setTimeout(() => {
            viewer.load("data:application/pdf;base64,"+base64String);
            }, 2000);
        }
        }
    });
}
```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).