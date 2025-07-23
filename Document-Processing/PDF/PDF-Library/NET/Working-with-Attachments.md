---
title: Working with Attachments | Syncfusion
description: This section explains how to add, remove and extract attachments in the PDF document. Attachments can contain any kind of file with detailed information. 
platform: document-processing
control: PDF
documentation: UG
---
# Working with Attachments

Essential<sup>&reg;</sup> PDF provides support for file attachments in PDF documents. These attachments can include any type of file, offering detailed information within the PDF.

To quickly get started with adding, removing, and extracting file attachments in PDF documents using the Syncfusion<sup>&reg;</sup> PDF Library for .NET, refer to this video tutorial:
{% youtube "https://youtu.be/Tcg1S-PPxHI?si=5IBb4CrzrqjIlNwR" %}

##  Adding attachment to a PDF document

You can add a text file attachment to a PDF document using [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Adding-attachment-to-a-PDF-document/.NET/Adding-attachment-to-a-PDF-document/Program.cs" %}	

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Creates an attachment
Stream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Adds the attachment to the document
document.Attachments.Add(attachment);

//Save the document into stream
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create a new PDF document
PdfDocument document = new PdfDocument();
//Create an attachment
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
//Adds the attachment to the document
document.Attachments.Add(attachment);

//Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Create a new PDF document
Dim document As New PdfDocument()
'Create an attachment
Dim attachment As New PdfAttachment("Input.txt")
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
'Adds the attachment to the document
document.Attachments.Add(attachment)

'Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Adding-attachment-to-a-PDF-document/).

Essential<sup>&reg;</sup> PDF also provides support for adding the attachments to existing PDF documents by using [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class. The following code example illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Adding-the-attachments-to-an-existing-PDF-document/.NET/Adding-the-attachments-to-an-existing-PDF-document/Program.cs" %}

//Load the PDF document
FileStream docStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);
//Creates an attachment
Stream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
if (loadedDocument.Attachments == null)
    loadedDocument.CreateAttachment();
//Add the attachment to the document
loadedDocument.Attachments.Add(attachment);

//Save the document into stream
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);
//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Create an attachment
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "application/txt";
if (loadedDocument.Attachments == null)
    loadedDocument.CreateAttachment();
//Add the attachment to the document
loadedDocument.Attachments.Add(attachment);

//Save and close the PDF document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

'Create an attachment
Dim attachment As New PdfAttachment("Input.txt")
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "application/txt"
If loadedDocument.Attachments Is Nothing Then
	loadedDocument.CreateAttachment()
End If
'Add the attachment to the document
loadedDocument.Attachments.Add(attachment)

'Save and close the PDF document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Adding-the-attachments-to-an-existing-PDF-document/).

## Removing attachment from an existing PDF 

Essential<sup>&reg;</sup> PDF allows you to remove the attachments from the existing document by using [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_Remove_Syncfusion_Pdf_Interactive_PdfAttachment_) and [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_RemoveAt_System_Int32_) method in [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class. The following code example explains the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Remove-attachment-from-an-existing-PDF-document/.NET/Remove-attachment-from-an-existing-PDF-document/Program.cs" %}

//Load the PDF document
FileStream docStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument document = new PdfLoadedDocument(docStream);
//Removes an attachment
PdfAttachment attachment = document.Attachments[0];
//document.Attachments.Remove(attachment);
document.Attachments.RemoveAt(0);

//Save the document into stream
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Loads the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
//Removes an attachment
PdfAttachment attachment = document.Attachments[0];
document.Attachments.Remove(attachment);
document.Attachments.RemoveAt(1);

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Loads the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
'Removes an attachments
Dim attachment As PdfAttachment = document.Attachments(0)
document.Attachments.Remove(attachment)
document.Attachments.RemoveAt(1)

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Remove-attachment-from-an-existing-PDF-document/).

## Extracting and saving an attachment to the disk.

Essential<sup>&reg;</sup> PDF provides support for extracting the attachments and saving them to the disk. The following code example explains how to extract and save an attachment using [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Extract-and-saving-an-attachment-to-the-disk/.NET/Extract-and-saving-an-attachment-to-the-disk/Program.cs" %}

//Load the PDF document
FileStream docStream = new FileStream("Output.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument document = new PdfLoadedDocument(docStream);
//Iterates the attachments
foreach (PdfAttachment attachment in document.Attachments)
{
    //Extracts the attachment and saves it to the disk
    FileStream s = new FileStream(attachment.FileName, FileMode.Create);
    s.Write(attachment.Data, 0, attachment.Data.Length);
    s.Dispose();
}

//Save the document into stream
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Loads the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Sample.pdf");
//Iterates the attachments
foreach (PdfAttachment attachment in document.Attachments)
{
    //Extracts the attachment and saves it to the disk
    FileStream s = new FileStream(attachment.FileName, FileMode.Create);
    s.Write(attachment.Data, 0, attachment.Data.Length);
    s.Dispose();
}

//Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Loads the PDF document
Dim document As New PdfLoadedDocument("Sample.pdf")
'Iterates the attachments
For Each attachment As PdfAttachment In document.Attachments
    'Extracts the attachment and saves it to the disk
    Dim s As New FileStream(attachment.FileName, FileMode.Create)
    s.Write(attachment.Data, 0, attachment.Data.Length)
    s.Dispose()
Next

'Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Extract-and-saving-an-attachment-to-the-disk/).

## Adding PDF Attachments with Interactive Launch Buttons

**Scenario**:
You need to implement a feature where, upon clicking on a content (such as a button or link), the user is navigated to a custom page in an attached PDF. This requires embedding the functionality within the PDF to open the attachment when the content is clicked.

**Solution**:
You can achieve this functionality by using JavaScript actions within Syncfusion<sup>®</sup> PDF library. This solution involves adding a PDF attachment to the document and setting up a JavaScript action on a button field that, when clicked, opens the attached PDF.This is achieved using the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) and [PdfButtonField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfButtonField.html) classes.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Adding-PDF-Attachments-with-Interactive-Launch-Buttons/.NET/Adding-PDF-Attachments-with-Interactive-Launch-Buttons/Program.cs" %}

//Create FileStream object to read the input PDF file
using (FileStream inputFileStream = new FileStream(@"Data/Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Load the existing PDF file
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputFileStream);

    // Get the first page of the PDF
    PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

    // Create a PDF attachment
    PdfAttachment attachment = new PdfAttachment("Attachment.pdf", System.IO.File.ReadAllBytes(@"Data/Attachment.pdf"));
    attachment.Description = "Attachment";

    // Create attachments section if it doesn't exist
    if (loadedDocument.Attachments == null)
        loadedDocument.CreateAttachment();

    // Add the attachment to the document
    loadedDocument.Attachments.Add(attachment);

    // Create a button field on the page
    PdfButtonField buttonField = new PdfButtonField(lpage, "Button");
    buttonField.Bounds = new RectangleF(100, 100, 100, 20);
    buttonField.BorderColor = new PdfColor(Color.Black);
    buttonField.BackColor = new PdfColor(Color.LightGray);
    buttonField.Text = "Click Me";
    buttonField.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);

    // Add JavaScript action to open the attachment
    buttonField.Actions.MouseUp = new PdfJavaScriptAction("this.exportDataObject({ cName: \"Attachment.pdf\", nLaunch: 2 });");

    // Create a form if it doesn't exist
    if (loadedDocument.Form == null)
        loadedDocument.CreateForm();

    // Add the button field to the form
    loadedDocument.Form.Fields.Add(buttonField);

    // Set default appearance for form fields
    loadedDocument.Form.SetDefaultAppearance(false);

    //Create file stream.
    using (FileStream outputFileStream = new FileStream(@"Output/Output.pdf", FileMode.Create, FileAccess.ReadWrite))
    {
        //Save the PDF document to file stream.
        loadedDocument.Save(outputFileStream);
    }

    //Close the document.
    loadedDocument.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

    // Load the existing PDF file
    PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

    // Get the first page of the PDF
    PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

    // Create a PDF attachment
    PdfAttachment attachment = new PdfAttachment("Attachment.pdf", System.IO.File.ReadAllBytes(@"Data/Attachment.pdf"));
    attachment.Description = "Attachment";

    // Create attachments section if it doesn't exist
    if (loadedDocument.Attachments == null)
        loadedDocument.CreateAttachment();

    // Add the attachment to the document
    loadedDocument.Attachments.Add(attachment);

    // Create a button field on the page
    PdfButtonField buttonField = new PdfButtonField(lpage, "Button");
    buttonField.Bounds = new RectangleF(100, 100, 100, 20);
    buttonField.BorderColor = new PdfColor(Color.Black);
    buttonField.BackColor = new PdfColor(Color.LightGray);
    buttonField.Text = "Click Me";
    buttonField.Font = new PdfStandardFont(PdfFontFamily.Helvetica, 12);

    // Add JavaScript action to open the attachment
    buttonField.Actions.MouseUp = new PdfJavaScriptAction("this.exportDataObject({ cName: \"Attachment.pdf\", nLaunch: 2 });");

    // Create a form if it doesn't exist
    if (loadedDocument.Form == null)
        loadedDocument.CreateForm();

    // Add the button field to the form
    loadedDocument.Form.Fields.Add(buttonField);

    // Set default appearance for form fields
    loadedDocument.Form.SetDefaultAppearance(false);

    //Save the PDF document to file stream.
    loadedDocument.Save("Output.pdf");

    //Close the document.
    loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load the existing PDF file
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Get the first page of the PDF
Dim lpage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

' Create a PDF attachment
Dim attachment As New PdfAttachment("Attachment.pdf", System.IO.File.ReadAllBytes("Data/Attachment.pdf"))
attachment.Description = "Attachment"

' Create attachments section if it doesn't exist
If loadedDocument.Attachments Is Nothing Then
    loadedDocument.CreateAttachment()
End If

' Add the attachment to the document
loadedDocument.Attachments.Add(attachment)

' Create a button field on the page
Dim buttonField As New PdfButtonField(lpage, "Button")
buttonField.Bounds = New RectangleF(100, 100, 100, 20)
buttonField.BorderColor = New PdfColor(Color.Black)
buttonField.BackColor = New PdfColor(Color.LightGray)
buttonField.Text = "Click Me"
buttonField.Font = New PdfStandardFont(PdfFontFamily.Helvetica, 12)

' Add JavaScript action to open the attachment
buttonField.Actions.MouseUp = New PdfJavaScriptAction("this.exportDataObject({ cName: ""Attachment.pdf"", nLaunch: 2 });")

' Create a form if it doesn't exist
If loadedDocument.Form Is Nothing Then
    loadedDocument.CreateForm()
End If

' Add the button field to the form
loadedDocument.Form.Fields.Add(buttonField)

' Set default appearance for form fields
loadedDocument.Form.SetDefaultAppearance(False)

' Save the PDF document to file stream
loadedDocument.Save("Output.pdf")

' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Adding-PDF-Attachments-with-Interactive-Launch-Buttons/.NET).