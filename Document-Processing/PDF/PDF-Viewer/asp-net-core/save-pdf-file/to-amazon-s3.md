---
layout: post
title: Save PDF files to AWS S3 in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to save PDF files to AWS S3 using the Syncfusion ASP.NET Core PDF Viewer component in standalone and server-backed configurations.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Save PDF files to AWS S3 in ASP.NET Core

The ASP.NET Core PDF Viewer component supports saving PDF files to AWS S3 using either the standalone or server-backed configuration. The following steps demonstrate both approaches.

## Using the standalone PDF Viewer

To save a PDF file to AWS S3, follow these steps:

**Step 1:** Create an AWS S3 account

 Set up an AWS S3 account by following the instructions on the official AWS site: [AWS Management Console](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html). Create an S3 bucket and generate access keys while ensuring secure storage of credentials.

**Step 2:** Create a PDF Viewer sample in ASP.NET Core

Follow instructions provided in the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer Getting Started [Guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample in ASP.NET Core.

**Step 3:** Modify the `~/Pages/Shared/_Layout.cshtml` file in the project

1. Add the required scripts using CDN inside the `<head>` of `~/Pages/Shared/_Layout.cshtml` file as follows,

{% tabs %}
{% highlight c# tabtitle="~/_Layout.cshtml" %}

<head>
    ...
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1654.0.min.js"></script>
</head>

{% endhighlight %}
{% endtabs %}

**Step 4:** Modify the `~/Pages/Index.cshtml` file in the project

1. Configures AWS SDK with the region, access key, and secret access key. This configuration allows the application to interact with AWS services like S3.

N> Replace **Your Region** with the actual Region of the AWS S3 account and **Your Access Key** with the actual Access Key of the AWS S3 account and **Your Security Access Key** with the actual Security Access Key of the AWS S3 account.

```csharp
AWS.config.update({
  region: '**Your Region**', // Update this your region
  accessKeyId: '*Your Access Key*', // Update this with your access key id
  secretAccessKey: '*Your Security Access Key*', // Update this with your secret access key
});
```

2. Configure a custom toolbar item for the download function to save a PDF file to AWS S3.

```csharp
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer" style="height:600px" created="loadDocument" toolbarClick="toolbarClick">
    </ejs-pdfviewer>
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
  }
  function toolbarClick(args) {
      var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
      if (args.item && args.item.id === 'download_pdf') {
          saveDocument();
      }
  }
</script>
```

3. Retrieve the PDF viewer instance and save the current PDF as a Blob. Then, read the Blob using a FileReader to convert it into an ArrayBuffer, and upload the ArrayBuffer to AWS S3 using the putObject method of the S3 instance.

N> Replace **Your Bucket Name** with the actual bucket name of the AWS S3 account and **Your Key** with the actual file key of the AWS S3 account.

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