---
layout: post
title: Save PDF files to AWS S3 in ASP.NET MVC PDF Viewer | Syncfusion
description: Learn how to save PDF files to AWS S3 using the Syncfusion ASP.NET MVC PDF Viewer component in standalone and server-backed configurations.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Save PDF files to AWS S3

The ASP.NET MVC PDF Viewer component supports saving PDF files to AWS S3 using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

To save a PDF file to AWS S3, follow these steps:

**Step 1:** Create an AWS S3 account

 Set up an AWS S3 account by following the instructions on the official AWS site: [AWS Management Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). Create an S3 bucket and generate access keys while ensuring secure storage of credentials.

**Step 2:** Create a PDF Viewer sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `~/Views/Shared/_Layout.cshtml` file in the project

1. Add the required scripts using CDN inside the `<head>` of `~/Views/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1654.0.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

**Step 4:** Modify the `~/Views/Home/Index.cshtml` file in the project

1. Configures AWS SDK with the region, access key, and secret access key. This configuration allows the application to interact with AWS services like S3.

N> Replace **Your Region** with the actual Region of your AWS S3 account and **Your Access Key** with the actual Access Key of your AWS S3 account and **Your Security Access Key** with the actual Security Access Key of your AWS S3 account.

```csharp
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

2. Configure a custom toolbar item for the download function to save a PDF file to AWS S3.

```csharp
<div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib").Created("loadDocument").ToolbarClick("toolbarClick").Render()
    </div>
</div>

<script type="text/javascript">
window.onload = function () {
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    var toolItem1 = {
        prefixIcon: 'e-icons e-pv-download-document-icon',
        id: 'download_pdf',
        tooltipText: 'Download file',
        align: 'right'
    };
    pdfViewer.toolbarSettings = {
        showTooltip: true,
        toolbarItems: ['OpenOption', 'PageNavigationTool', 'MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', toolItem1, 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']
    };

};

// Define the toolbarClick event handler
function toolbarClick(args) {
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    if (args.item && args.item.id === 'download_pdf') {
        saveDocument();
    }
}
</script>
```

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the putObject method of the S3 instance.

N> Replace **Your Bucket Name** with the actual Bucket name of your AWS S3 account and **Your Key** with the actual File Key of your AWS S3 account.

```csharp
function saveDocument() {
    const s3 = new AWS.S3();
    var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
    pdfViewer.saveAsBlob().then(function (value) {
        var reader = new FileReader();
        reader.onload = () => {
            const uint8Array = new Uint8Array(reader.result);
            const putObjectParams = {
                Bucket: '**Your Bucket Name**',
                Key: '**Your Key**',
                Body: uint8Array,
                ContentType: 'application/pdf',
            };
            s3.putObject(putObjectParams, (err, data) => {
                if (err) {
                    console.error('Error uploading document:', err);
                } else {
                    console.log('Document uploaded successfully:', data);
                }
            });
        };
        reader.readAsArrayBuffer(value);
    });
}
```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Standalone).

## Using the server-backed PDF Viewer

To save a PDF file to AWS S3, follow these steps:

**Step 1:** Create an AWS S3 account

 Set up an AWS S3 account by following the instructions on the official AWS site: [AWS Management Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). Create an S3 bucket and generate access keys while ensuring secure storage of credentials.

**Step 2:** Create a PDF Viewer sample in ASP.NET MVC

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started-with-server-backed) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 3:** Modify the `HomeController.cs` file in the project

1. Import the required namespaces at the top of the file.

```csharp
using System.IO;
using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
```

3. Modify the `Download()` method to save the downloaded PDF files to AWS S3 bucket

```csharp
 private readonly string _accessKey = "Your Access Key from AWS S35";
 private readonly string _secretKey = "Your Secret Key from AWS S3";
 private readonly string _bucketName = "Your Bucket name from AWS S3";

[System.Web.Mvc.HttpPost]
public ActionResult Download(jsonObjects jsonObject)
{
    PdfRenderer pdfviewer = new PdfRenderer();
    var jsonData = JsonConverter(jsonObject);
    string documentBase = pdfviewer.GetDocumentAsBase64(jsonData);
    RegionEndpoint bucketRegion = RegionEndpoint.USEast1;

    // Configure the AWS SDK with your access credentials and other settings
    var s3Client = new AmazonS3Client(_accessKey, _secretKey, bucketRegion);
    string bucketName = _bucketName;
    string documentName = jsonData["documentId"];
    string result = Path.GetFileNameWithoutExtension(documentName);
    byte[] bytes = Convert.FromBase64String(documentBase.Split(',')[1]);
    using (MemoryStream stream = new MemoryStream(bytes))
    {
        var request = new PutObjectRequest
        {
            BucketName = bucketName,
            Key = result + "_downloaded.pdf",
            InputStream = stream,
        };
        // Upload the PDF document to AWS S3
        var response = s3Client.PutObjectAsync(request).Result;
    }
    return Content(documentBase);
}

```

N> Replace **Your Access Key from AWS S3**, **Your Secret Key from AWS S3**, and **Your Bucket name from AWS S3** with your actual AWS access key, secret key and bucket name

**Step 4:** Configure the PDF Viewer component

Set the [serviceUrl](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) property of the PDF Viewer component with the actual server URL. Set the `documentPath` property to the desired PDF file name to load from AWS S3, and ensure that the document exists in the target bucket.

```csharp

@{
    ViewBag.Title = "Home Page";
}

<div>
    <div style="height:500px;width:100%;">
        @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/Home/")).DocumentPath("PDF_Succinctly.pdf").Render()
    </div>
</div>

```

N> The **AWSSDK.S3** NuGet package must be installed in your application to use the previous code example.

[View sample in GitHub](https://github.com/SyncfusionExamples/open-save-pdf-documents-in-aws-s3/tree/master/Open%20and%20Save%20PDF%20in%20AWS%20S3%20using%20Server-Backend)