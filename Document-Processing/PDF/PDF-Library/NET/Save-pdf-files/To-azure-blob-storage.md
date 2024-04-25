---
title: Save PDF file to Azure blob storage | Syncfusion
description: This page describes how to save PDF file to file azure blob storage in C#  using Syncfusion .NET PDF library.
platform: file-formats
control: PDF
documentation: UG
---
# Save PDF file to Azure Blob storage

To save a PDF file to Azure blob storage, you can follow the steps below


Step 1: Create a simple console application

![Project configuration window](Save-PDF-Images/Console-Application.png)

Step 3: Install the [Syncfusion.Pdf.Net.Core ](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) and [Microsoft.Azure.Storage.Blob](https://www.nuget.org/packages/Microsoft.Azure.Storage.Blob) NuGet packages as a reference to your project from the [NuGet.org](https://www.nuget.org/).
![NuGet package installation](Save-PDF-Images/Syncfusion.Pdf.Net.Core-nuget.png)
<br><br>
![NuGet package installation](Save-PDF-Images/Microsoft.Azure.Storage.Blob-nuget.png)


Step 4: Include the following namespaces in the Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Graphics;
    using Syncfusion.Drawing;
    using Microsoft.Azure.Storage;
    using Microsoft.Azure.Storage.Blob;

{% endhighlight %}

{% endtabs %}


Step 5: Add the below code example to create a simple PDF and save in Azure blob storage.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

        // Create a new PDF document
        using (PdfDocument doc = new PdfDocument())
        {
            // Add a page to the document.
            PdfPage page = doc.Pages.Add();
            // Get the graphics object for drawing on the page.
            PdfGraphics graphics = page.Graphics;
            // Create a font to use for drawing text
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);
            // Draw the text.
            graphics.DrawString("Hello, World!", font, PdfBrushes.Black, new PointF(10, 10));
            // Create a memory stream to save the PDF document.
            MemoryStream stream = new MemoryStream();
            doc.Save(stream);
            // Write the contents of the memory stream to a file named "sample.pdf".
            File.WriteAllBytes("sample.pdf", stream.ToArray());
            // Close the document
            doc.Close(true);
        }
        // Parse the connection string for the Azure Storage Account.
        CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
        // Create a client for accessing Blob storage.
        CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
        // Get a reference to the container name.
        CloudBlobContainer container = blobClient.GetContainerReference(containerName);
        container.CreateIfNotExists();
        // Get a reference to the block blob name.
        CloudBlockBlob blockBlob = container.GetBlockBlobReference(blobName);
        // Open the local file "sample.pdf" for reading
        using (var fileStream = File.OpenRead("sample.pdf"))
        {
            // Upload the contents of the local file to the Azure Blob Storage
            blockBlob.UploadFromStream(fileStream);
        }

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Save-PDF-file/To%20Azure%20Blob%20Storage).
