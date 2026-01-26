---
title: Working with Portfolio | Syncfusion
description: Explains how to create PDF portfolio which helps to bring together content from a variety of sources, including documents, drawings, images, e-mail, & web pages
platform: document-processing
control: PDF
documentation: UG
---
# Working with Portfolio

PDF Portfolios allows the user to bring together content from a variety of sources, including documents, drawings, images, e-mail, spreadsheets and web pages. Essential<sup>&reg;</sup> PDF allows the user to create portfolios and also to extract the files from them.

## Creating a PDF portfolio

A PDF portfolio enables the embedding of multiple files within a single PDF container, with each file represented as a **PdfAttachment**. Attachments can include metadata such as file name, description, creation and modification dates, MIME type, and a relationship type. Use the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class to define each embedded file, while portfolio behavior such as specifying a startup document is configured through the documents [PdfPortfolioInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPortfolioInformation.html).

The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Portfolio/Create-a-portfolio-and-attach-variety-of-documents/.NET/Create-a-portfolio-and-attach-variety-of-documents/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new instance of PdfDocument class
PdfDocument document = new PdfDocument();

//Create a new portfolio
document.PortfolioInformation = new PdfPortfolioInformation();
//Set the view mode of the portfolio
document.PortfolioInformation.ViewMode = PdfPortfolioViewMode.Tile;

// Create a new PDF attachment using the file stream
PdfAttachment pdfFile = new PdfAttachment("CorporateBrochure.pdf", pdfStream);
// Set the name of the attachment file
pdfFile.FileName = "CorporateBrochure.pdf";
// Provide a description for the attachment
pdfFile.Description = "This is a PDF document";
// Set the creation date of the attachment
pdfFile.CreationDate = DateTime.Now;
// Specify the MIME type of the attachment (important for identifying file type)
pdfFile.MimeType = "application/pdf";
// Optionally, set the modification date if needed
pdfFile.ModificationDate = DateTime.Now;
// Optionally, set the relationship (e.g., "Data", "Source", etc.)
pdfFile.Relationship = PdfAttachmentRelationship.Unspecified;
// Add the attachment to the document's attachment collection
document.Attachments.Add(pdfFile);
// Set this attachment as the startup document in the PDF portfolio
document.PortfolioInformation.StartupDocument = pdfFile;

//Add the attachment to the document
document.Attachments.Add(pdfFile);

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

//Create a new instance of PdfDocument class
PdfDocument document = new PdfDocument();

//Create a new portfolio
document.PortfolioInformation = new PdfPortfolioInformation();
//Set the view mode of the portfolio
document.PortfolioInformation.ViewMode = PdfPortfolioViewMode.Tile;

// Create a new PDF attachment using the file stream
PdfAttachment pdfFile = new PdfAttachment("CorporateBrochure.pdf", pdfStream);
// Set the name of the attachment file
pdfFile.FileName = "CorporateBrochure.pdf";
// Provide a description for the attachment
pdfFile.Description = "This is a PDF document";
// Set the creation date of the attachment
pdfFile.CreationDate = DateTime.Now;
// Specify the MIME type of the attachment (important for identifying file type)
pdfFile.MimeType = "application/pdf";
// Optionally, set the modification date if needed
pdfFile.ModificationDate = DateTime.Now;
// Optionally, set the relationship (e.g., "Data", "Source", etc.)
pdfFile.Relationship = PdfAttachmentRelationship.Unspecified;
// Add the attachment to the document's attachment collection
document.Attachments.Add(pdfFile);
// Set this attachment as the startup document in the PDF portfolio
document.PortfolioInformation.StartupDocument = pdfFile;

//Add the attachment to the document
document.Attachments.Add(pdfFile);

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Create a new instance of PdfDocument class
Dim document As New PdfDocument()

'Create a new portfolio
document.PortfolioInformation = New PdfPortfolioInformation()
'Set the view mode of the portfolio
document.PortfolioInformation.ViewMode = PdfPortfolioViewMode.Tile

' Load the PDF file stream to be attached
Dim pdfStream As New FileStream("CorporateBrochure.pdf", FileMode.Open, FileAccess.Read)

' Create a new PDF attachment using the file stream
Dim pdfFile As New PdfAttachment("CorporateBrochure.pdf", pdfStream)
' Set the name of the attachment file
pdfFile.FileName = "CorporateBrochure.pdf"
' Provide a description for the attachment
pdfFile.Description = "This is a PDF document"
' Set the creation date of the attachment
pdfFile.CreationDate = DateTime.Now
' Specify the MIME type of the attachment (important for identifying file type)
pdfFile.MimeType = "application/pdf"
' Optionally, set the modification date if needed
pdfFile.ModificationDate = DateTime.Now
' Optionally, set the relationship (e.g., "Data", "Source", etc.)
pdfFile.Relationship = PdfAttachmentRelationship.Unspecified
' Set this attachment as the startup document in the PDF portfolio
document.PortfolioInformation.StartupDocument = pdfFile

' Add the attachment to the document's attachment collection
document.Attachments.Add(pdfFile)

'Save and close the document.
document.Save("Sample.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Portfolio/Create-a-portfolio-and-attach-variety-of-documents).

## Extracting file from PDF Portfolio

Files embedded in a PDF portfolio can be extracted using the [Attachments](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Attachments) property of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. Each attachment can be accessed, read, and saved to disk. Metadata such as file name and MIME type can also be retrieved during the extraction process.

The following code demonstrates how to iterate through the attachments in a PDF portfolio.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Portfolio/Extracting-the-files-from-PDF-portfolio/.NET/Extracting-the-files-from-PDF-portfolio/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

// Iterate through all attachments in the PDF document
foreach (PdfAttachment attachment in document.Attachments)
{
    // Create a file stream to save the attachment to disk using its original file name
    using (FileStream s = new FileStream(attachment.FileName, FileMode.Create))
    {
        // Write the attachment data to the file
        s.Write(attachment.Data, 0, attachment.Data.Length);
    }
    // Retrieve the MIME type of the attachment (e.g., application/pdf, image/png)
    string mimeType = attachment.MimeType;
    Console.WriteLine($"Saved: {attachment.FileName}, MIME Type: {mimeType}");
    // Optional: Access additional metadata if needed
    DateTime creationDate = attachment.CreationDate;
    DateTime modificationDate = attachment.ModificationDate;
    string description = attachment.Description;
    PdfAttachmentRelationship relationship = attachment.Relationship;
    // Log or use the metadata as needed
    Console.WriteLine($"Description: {description}");
    Console.WriteLine($"Created on: {creationDate}, Modified on: {modificationDate}");
    Console.WriteLine($"Relationship: {relationship}");
}
//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

//Load an existing PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Sample.pdf");

// Iterate through all attachments in the PDF document
foreach (PdfAttachment attachment in document.Attachments)
{
    // Create a file stream to save the attachment to disk using its original file name
    using (FileStream s = new FileStream(attachment.FileName, FileMode.Create))
    {
        // Write the attachment data to the file
        s.Write(attachment.Data, 0, attachment.Data.Length);
    }
    // Retrieve the MIME type of the attachment (e.g., application/pdf, image/png)
    string mimeType = attachment.MimeType;
    Console.WriteLine($"Saved: {attachment.FileName}, MIME Type: {mimeType}");
    // Optional: Access additional metadata if needed
    DateTime creationDate = attachment.CreationDate;
    DateTime modificationDate = attachment.ModificationDate;
    string description = attachment.Description;
    PdfAttachmentRelationship relationship = attachment.Relationship;
    // Log or use the metadata as needed
    Console.WriteLine($"Description: {description}");
    Console.WriteLine($"Created on: {creationDate}, Modified on: {modificationDate}");
    Console.WriteLine($"Relationship: {relationship}");
}
//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim document As New PdfLoadedDocument("Sample.pdf")

' Iterate through all attachments in the PDF document
For Each attachment As PdfAttachment In document.Attachments
    ' Create a file stream to save the attachment to disk using its original file name
    Using s As New FileStream(attachment.FileName, FileMode.Create)
        ' Write the attachment data to the file
        s.Write(attachment.Data, 0, attachment.Data.Length)
    End Using
    ' Retrieve the MIME type of the attachment (e.g., application/pdf, image/png)
    Dim mimeType As String = attachment.MimeType
    Console.WriteLine($"Saved: {attachment.FileName}, MIME Type: {mimeType}")
    ' Optional: Access additional metadata if needed
    Dim creationDate As DateTime = attachment.CreationDate
    Dim modificationDate As DateTime = attachment.ModificationDate
    Dim description As String = attachment.Description
    Dim relationship As PdfAttachmentRelationship = attachment.Relationship
    ' Log or use the metadata as needed
    Console.WriteLine($"Description: {description}")
    Console.WriteLine($"Created on: {creationDate}, Modified on: {modificationDate}")
    Console.WriteLine($"Relationship: {relationship}")
Next

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Portfolio/Extracting-the-files-from-PDF-portfolio).

## Removing files from PDF Portfolio

The following code example illustrates how to remove files from an existing PDF portfolio using [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_RemoveAt_System_Int32_) method or [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_Remove_Syncfusion_Pdf_Interactive_PdfAttachment_) method of [PdfAttachmentCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html) class. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Portfolio/Remove-the-files-from-PDF-portfolio/.NET/Remove-the-files-from-PDF-portfolio/Program.cs" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");

//Remove the file from the Portfolio
document.Attachments.RemoveAt(0);

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Sample.pdf");

//Remove the file from the Portfolio
document.Attachments.RemoveAt(0);

//Save and close the document
document.Save("Output.pdf");
document.Close();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

'Load the PDF document
Dim document As New PdfLoadedDocument("Sample.pdf")

'Remove the file from the Portfolio
document.Attachments.RemoveAt(1)

'Save and close the document
document.Save("Output.pdf")
document.Close()

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Portfolio/Remove-the-files-from-PDF-portfolio).
