---
title: Working with Portfolio | Syncfusion
description: Create and manage PDF portfolios with Syncfusion .NET PDF, including adding, extracting, and removing files from multiple content sources
platform: document-processing
control: PDF
documentation: UG
---

# Working with Portfolio

PDF Portfolios allow the user to bring together content from a variety of sources, including documents, drawings, images, e-mail, spreadsheets, and web pages. Essential<sup>&reg;</sup> PDF allows you to create portfolios and to extract or remove files from them.

## Creating a PDF portfolio

A PDF portfolio enables the embedding of multiple files within a single PDF container, with each file represented as a [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html). Attachments can include metadata such as file name, description, creation and modification dates, MIME type, and a [relationship](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentRelationship.html) type. Portfolio-wide behavior, such as specifying a startup document or setting the view mode, is configured through the [PdfPortfolioInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPortfolioInformation.html) class exposed by the [PortfolioInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html#Syncfusion_Pdf_PdfDocument_PortfolioInformation) property of the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html).

The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Portfolio/Create-a-portfolio-and-attach-variety-of-documents/.NET/Create-a-portfolio-and-attach-variety-of-documents/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new instance of PdfDocument class.
PdfDocument document = new PdfDocument();

//Create a new portfolio.
document.PortfolioInformation = new PdfPortfolioInformation();
//Set the view mode of the portfolio.
document.PortfolioInformation.ViewMode = PdfPortfolioViewMode.Tile;

//Open the file stream for the file to be attached.
FileStream pdfStream = new FileStream("CorporateBrochure.pdf", FileMode.Open, FileAccess.Read);

//Create a new PDF attachment using the file stream.
PdfAttachment pdfFile = new PdfAttachment("CorporateBrochure.pdf", pdfStream);
//Set the name of the attachment file.
pdfFile.FileName = "CorporateBrochure.pdf";
//Provide a description for the attachment.
pdfFile.Description = "This is a PDF document";
//Set the creation date of the attachment.
pdfFile.CreationDate = DateTime.Now;
//Specify the MIME type of the attachment (important for identifying the file type).
pdfFile.MimeType = "application/pdf";
//Set the modification date of the attachment.
pdfFile.ModificationDate = DateTime.Now;
//Set the relationship of the attachment to the portfolio.
pdfFile.Relationship = PdfAttachmentRelationship.Unspecified;
//Add the attachment to the document's attachment collection.
document.Attachments.Add(pdfFile);
//Set this attachment as the startup document in the PDF portfolio.
document.PortfolioInformation.StartupDocument = pdfFile;

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new instance of PdfDocument class.
PdfDocument document = new PdfDocument();

//Create a new portfolio.
document.PortfolioInformation = new PdfPortfolioInformation();
//Set the view mode of the portfolio.
document.PortfolioInformation.ViewMode = PdfPortfolioViewMode.Tile;

//Open the file stream for the file to be attached.
FileStream pdfStream = new FileStream("CorporateBrochure.pdf", FileMode.Open, FileAccess.Read);

//Create a new PDF attachment using the file stream.
PdfAttachment pdfFile = new PdfAttachment("CorporateBrochure.pdf", pdfStream);
//Set the name of the attachment file.
pdfFile.FileName = "CorporateBrochure.pdf";
//Provide a description for the attachment.
pdfFile.Description = "This is a PDF document";
//Set the creation date of the attachment.
pdfFile.CreationDate = DateTime.Now;
//Specify the MIME type of the attachment (important for identifying the file type).
pdfFile.MimeType = "application/pdf";
//Set the modification date of the attachment.
pdfFile.ModificationDate = DateTime.Now;
//Set the relationship of the attachment to the portfolio.
pdfFile.Relationship = PdfAttachmentRelationship.Unspecified;
//Add the attachment to the document's attachment collection.
document.Attachments.Add(pdfFile);
//Set this attachment as the startup document in the PDF portfolio.
document.PortfolioInformation.StartupDocument = pdfFile;

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf

'Create a new instance of PdfDocument class.
Dim document As New PdfDocument()

'Create a new portfolio.
document.PortfolioInformation = New PdfPortfolioInformation()
'Set the view mode of the portfolio.
document.PortfolioInformation.ViewMode = PdfPortfolioViewMode.Tile

'Open the file stream for the file to be attached.
Dim pdfStream As New FileStream("CorporateBrochure.pdf", FileMode.Open, FileAccess.Read)

'Create a new PDF attachment using the file stream.
Dim pdfFile As New PdfAttachment("CorporateBrochure.pdf", pdfStream)
'Set the name of the attachment file.
pdfFile.FileName = "CorporateBrochure.pdf"
'Provide a description for the attachment.
pdfFile.Description = "This is a PDF document"
'Set the creation date of the attachment.
pdfFile.CreationDate = DateTime.Now
'Specify the MIME type of the attachment (important for identifying the file type).
pdfFile.MimeType = "application/pdf"
'Set the modification date of the attachment.
pdfFile.ModificationDate = DateTime.Now
'Set the relationship of the attachment to the portfolio.
pdfFile.Relationship = PdfAttachmentRelationship.Unspecified
'Set this attachment as the startup document in the PDF portfolio.
document.PortfolioInformation.StartupDocument = pdfFile

'Add the attachment to the document's attachment collection.
document.Attachments.Add(pdfFile)

'Save and close the document.
document.Save("Sample.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Portfolio/Create-a-portfolio-and-attach-variety-of-documents).

## Extracting files from a PDF portfolio

Files embedded in a PDF portfolio can be extracted using the [Attachments](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Attachments) property of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. Each attachment can be accessed, read, and saved to disk. Metadata such as file name and MIME type can also be retrieved during the extraction process.

The following code demonstrates how to iterate through the attachments in a PDF portfolio and save each file to disk.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Portfolio/Extracting-the-files-from-PDF-portfolio/.NET/Extracting-the-files-from-PDF-portfolio/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Iterate through all attachments in the PDF document.
foreach (PdfAttachment attachment in document.Attachments)
{
    //Create a file stream to save the attachment to disk using its original file name.
    using (FileStream s = new FileStream(attachment.FileName, FileMode.Create))
    {
        //Write the attachment data to the file.
        s.Write(attachment.Data, 0, attachment.Data.Length);
    }
    //Retrieve the MIME type of the attachment (e.g., application/pdf, image/png).
    string mimeType = attachment.MimeType;
    Console.WriteLine($"Saved: {attachment.FileName}, MIME Type: {mimeType}");
    //Access additional metadata if needed.
    DateTime creationDate = attachment.CreationDate;
    DateTime modificationDate = attachment.ModificationDate;
    string description = attachment.Description;
    PdfAttachmentRelationship relationship = attachment.Relationship;
    Console.WriteLine($"Description: {description}");
    Console.WriteLine($"Created on: {creationDate}, Modified on: {modificationDate}");
    Console.WriteLine($"Relationship: {relationship}");
}

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Iterate through all attachments in the PDF document.
foreach (PdfAttachment attachment in document.Attachments)
{
    //Create a file stream to save the attachment to disk using its original file name.
    using (FileStream s = new FileStream(attachment.FileName, FileMode.Create))
    {
        //Write the attachment data to the file.
        s.Write(attachment.Data, 0, attachment.Data.Length);
    }
    //Retrieve the MIME type of the attachment (e.g., application/pdf, image/png).
    string mimeType = attachment.MimeType;
    Console.WriteLine($"Saved: {attachment.FileName}, MIME Type: {mimeType}");
    //Access additional metadata if needed.
    DateTime creationDate = attachment.CreationDate;
    DateTime modificationDate = attachment.ModificationDate;
    string description = attachment.Description;
    PdfAttachmentRelationship relationship = attachment.Relationship;
    Console.WriteLine($"Description: {description}");
    Console.WriteLine($"Created on: {creationDate}, Modified on: {modificationDate}");
    Console.WriteLine($"Relationship: {relationship}");
}

//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

'Iterate through all attachments in the PDF document.
For Each attachment As PdfAttachment In document.Attachments
    'Create a file stream to save the attachment to disk using its original file name.
    Using s As New FileStream(attachment.FileName, FileMode.Create)
        'Write the attachment data to the file.
        s.Write(attachment.Data, 0, attachment.Data.Length)
    End Using
    'Retrieve the MIME type of the attachment (e.g., application/pdf, image/png).
    Dim mimeType As String = attachment.MimeType
    Console.WriteLine($"Saved: {attachment.FileName}, MIME Type: {mimeType}")
    'Access additional metadata if needed.
    Dim creationDate As DateTime = attachment.CreationDate
    Dim modificationDate As DateTime = attachment.ModificationDate
    Dim description As String = attachment.Description
    Dim relationship As PdfAttachmentRelationship = attachment.Relationship
    Console.WriteLine($"Description: {description}")
    Console.WriteLine($"Created on: {creationDate}, Modified on: {modificationDate}")
    Console.WriteLine($"Relationship: {relationship}")
Next

'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Portfolio/Extracting-the-files-from-PDF-portfolio).

## Removing files from a PDF portfolio

The following code example illustrates how to remove files from an existing PDF portfolio using the [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_RemoveAt_System_Int32_) method or the [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_Remove_Syncfusion_Pdf_Interactive_PdfAttachment_) method of the [PdfAttachmentCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html) class. The `RemoveAt` overload accepts a zero-based index, while the `Remove` overload accepts the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) instance to remove.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Portfolio/Remove-the-files-from-PDF-portfolio/.NET/Remove-the-files-from-PDF-portfolio/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Remove the first file from the portfolio.
document.Attachments.RemoveAt(0);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document.
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Remove the first file from the portfolio.
document.Attachments.RemoveAt(0);

//Save and close the document.
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load the PDF document.
Dim document As New PdfLoadedDocument("Input.pdf")

'Remove the first file from the portfolio.
document.Attachments.RemoveAt(0)

'Save and close the document.
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Portfolio/Remove-the-files-from-PDF-portfolio).