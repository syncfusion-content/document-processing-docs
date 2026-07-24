---
title: Save PDF file to Azure blob storage | Syncfusion
description: This page describes how to save a PDF file to Azure Blob Storage in C# using the Syncfusion .NET PDF library.
keywords: azure blob, save pdf, c# save pdf, upload pdf
platform: document-processing
control: PDF
documentation: UG
---
# Save PDF file to Azure Blob Storage

To save a PDF file to Azure Blob Storage, you can follow the steps below.

Step 1: Create a simple console application.

![Project configuration window](Save-PDF-Images/Console-Application.png)

Step 2: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) and [Microsoft.Azure.Storage.Blob](https://www.nuget.org/packages/Microsoft.Azure.Storage.Blob) NuGet packages as a reference to your project from the [NuGet.org](https://www.nuget.org/).
![NuGet package installation](Save-PDF-Images/Syncfusion.Pdf.Net.Core-nuget.png)
<br><br>
![NuGet package installation](Save-PDF-Images/Microsoft.Azure.Storage.Blob-nuget.png)

Step 4: Include the following namespaces in the Program.cs file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Drawing;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;

{% endhighlight %}
{% endtabs %}

Step 5: Add the below code example to create a simple PDF and save in Azure Blob Storage.

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Create a new PDF document.
using (PdfDocument doc = new PdfDocument())
{
    // Add a page to the document.
    PdfPage page = doc.Pages.Add();
    // Get the graphics object for drawing on the page.
    PdfGraphics graphics = page.Graphics;
    // Create a font to use for drawing text.
    PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
    // Draw the text.
    graphics.DrawString("Hello, World!", font, PdfBrushes.Black, new PointF(10, 10));
    // Create a memory stream to save the PDF document.
    MemoryStream stream = new MemoryStream();
    doc.Save(stream);
    // Reset the stream position so the upload can read it from the beginning.
    stream.Position = 0;

    // Parse the connection string for the Azure Storage Account.
    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
    // Create a client for accessing Blob storage.
    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
    // Get a reference to the container and create it if it does not exist.
    CloudBlobContainer container = blobClient.GetContainerReference(containerName);
    container.CreateIfNotExists();
    // Get a reference to the block blob.
    CloudBlockBlob blockBlob = container.GetBlockBlobReference(blobName);
    // Upload the PDF directly from the memory stream to the block blob.
    blockBlob.UploadFromStream(stream);
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Save-PDF-file/To%20Azure%20Blob%20Storage).