---
title: Save PDF file to AWS S3 | Syncfusion
description: This page explains how to save a PDF file to AWS S3 storage using C# with the Syncfusion .NET PDF library.
keywords: aws s3, save pdf, c# save pdf, upload pdf
platform: document-processing
control: PDF
documentation: UG
---
# Save PDF file to AWS S3

To save a PDF file to AWS S3, you can follow the steps below.

Step 1: Create a simple console application.

![Project configuration window](Save-PDF-Images/Console-Application.png)

Step 2: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) and [AWSSDK.S3](https://www.nuget.org/packages/AWSSDK.S3) NuGet packages as a reference to your project from the [NuGet.org](https://www.nuget.org/).
<br><br>
![NuGet package installation](Save-PDF-Images/Syncfusion.Pdf.Net.Core-nuget.png)
<br><br>
![NuGet package installation](Save-PDF-Images/AWSSDK.S3-nuget.png)

Step 3: Include the following namespaces in the Program.cs file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using Amazon.S3;
using Syncfusion.Drawing;
using Amazon.S3.Transfer;
using Amazon;

{% endhighlight %}
{% endtabs %}

Step 4: Add the below code example to create a simple PDF and save in AWS S3.

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Create a new PDF document.
using (PdfDocument document = new PdfDocument())
{
    // Add a page to the document.
    PdfPage page = document.Pages.Add();

    // Get the PDF graphics for the page.
    PdfGraphics graphics = page.Graphics;

    // Draw text on the page.
    graphics.DrawString("Hello, Syncfusion PDF!", new PdfStandardFont(PdfFontFamily.Helvetica, 12), PdfBrushes.Black, new PointF(10, 10));

    // Save the PDF to a memory stream.
    MemoryStream stream = new MemoryStream();
    document.Save(stream);
    // The document is closed by the using block; reset the stream position before reading it.
    stream.Position = 0;

    // Set your AWS credentials and region.
    string accessKey = "YOUR_ACCESS_KEY";
    string secretKey = "YOUR_SECRET_KEY";
    // Change to your desired region.
    RegionEndpoint region = RegionEndpoint.YOUR_REGION;

    // Specify the bucket name and object key.
    string bucketName = "YOUR_BUCKET_NAME";
    string objectKey = "HelloWorld.pdf";

    // Upload the PDF to S3.
    using (var s3Client = new AmazonS3Client(accessKey, secretKey, region))
    {
        using (var transferUtility = new TransferUtility(s3Client))
        {
            transferUtility.Upload(stream, bucketName, objectKey);
        }
    }
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Save-PDF-file/To%20AWS%20S3).