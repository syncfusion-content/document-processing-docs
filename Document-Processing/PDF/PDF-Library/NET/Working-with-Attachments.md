---
title: Working with Attachments | PDF library | Syncfusion
description: This section explains how to add, remove, and extract attachments in a PDF document. Attachments can contain any kind of file with detailed information.
platform: document-processing
control: PDF
documentation: UG
---
# Working with Attachments

Essential<sup>&reg;</sup> PDF provides support for file attachments in PDF documents. These attachments can include any type of file, providing additional information within the PDF.

To quickly get started with adding, removing, and extracting file attachments in PDF documents using the Syncfusion<sup>&reg;</sup> PDF Library for .NET, refer to this video tutorial:
{% youtube "https://youtu.be/Tcg1S-PPxHI?si=5IBb4CrzrqjIlNwR" %}

## Adding an attachment to a new PDF document

You can add a file attachment to a new PDF document using the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class. The following code example illustrates this.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Adding-attachment-to-a-PDF-document/.NET/Adding-attachment-to-a-PDF-document/Program.cs" %}

using System;

using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Create an attachment
FileStream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "text/plain";
// Add the attachment to the document
document.Attachments.Add(attachment);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Interactive;

// Create a new PDF document
PdfDocument document = new PdfDocument();
// Create an attachment
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "text/plain";
// Add the attachment to the document
document.Attachments.Add(attachment);

// Save and close the PDF document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System
Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Interactive

' Create a new PDF document
Dim document As New PdfDocument()
' Create an attachment
Dim attachment As New PdfAttachment("Input.txt")
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "text/plain"
' Add the attachment to the document
document.Attachments.Add(attachment)

' Save and close the PDF document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

The [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) constructor accepts the file name and a `Stream` that contains the file content. The following table describes the key properties used above:

| Property | Description |
| -------- | ----------- |
| `FileName` | Gets the file name of the attachment as displayed in the PDF. |
| `Data` | Gets the raw byte content of the attachment. |
| `Description` | Sets a human-readable description for the attachment. |
| `MimeType` | Sets the MIME type (for example, `text/plain`, `application/pdf`, `image/png`). |
| `ModificationDate` | Sets the last modified date of the attachment. |

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Adding-attachment-to-a-PDF-document/).

Essential<sup>&reg;</sup> PDF also supports adding attachments to an existing PDF document using the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class. The following code example illustrates the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Adding-the-attachments-to-an-existing-PDF-document/.NET/Adding-the-attachments-to-an-existing-PDF-document/Program.cs" %}

using System;

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Create an attachment
Stream fileStream = new FileStream("Input.txt", FileMode.Open, FileAccess.Read);
PdfAttachment attachment = new PdfAttachment("Input.txt", fileStream);
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "text/plain";
// Create the attachments section if it does not exist
if (loadedDocument.Attachments == null)
    loadedDocument.CreateAttachment();
// Add the attachment to the document
loadedDocument.Attachments.Add(attachment);

// Save the document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Create an attachment
PdfAttachment attachment = new PdfAttachment("Input.txt");
attachment.ModificationDate = DateTime.Now;
attachment.Description = "Input.txt";
attachment.MimeType = "text/plain";
// Create the attachments section if it does not exist
if (loadedDocument.Attachments == null)
    loadedDocument.CreateAttachment();
// Add the attachment to the document
loadedDocument.Attachments.Add(attachment);

// Save and close the PDF document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

' Create an attachment
Dim attachment As New PdfAttachment("Input.txt")
attachment.ModificationDate = DateTime.Now
attachment.Description = "Input.txt"
attachment.MimeType = "text/plain"
' Create the attachments section if it does not exist
If loadedDocument.Attachments Is Nothing Then
    loadedDocument.CreateAttachment()
End If
' Add the attachment to the document
loadedDocument.Attachments.Add(attachment)

' Save and close the PDF document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Adding-the-attachments-to-an-existing-PDF-document/).

## Removing an attachment from an existing PDF

Essential<sup>&reg;</sup> PDF allows you to remove attachments from an existing document by using the [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_Remove_Syncfusion_Pdf_Interactive_PdfAttachment_) and [RemoveAt](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html#Syncfusion_Pdf_Interactive_PdfAttachmentCollection_RemoveAt_System_Int32_) methods of the [PdfAttachmentCollection](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachmentCollection.html) class. The following code example explains the same.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Remove-attachment-from-an-existing-PDF-document/.NET/Remove-attachment-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Remove an attachment by reference
PdfAttachment attachment = document.Attachments[0];
document.Attachments.Remove(attachment);
// Remove another attachment by index
document.Attachments.RemoveAt(0);

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Remove an attachment by reference
PdfAttachment attachment = document.Attachments[0];
document.Attachments.Remove(attachment);
// Remove another attachment by index
document.Attachments.RemoveAt(0);

// Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
' Remove an attachment by reference
Dim attachment As PdfAttachment = document.Attachments(0)
document.Attachments.Remove(attachment)
' Remove another attachment by index
document.Attachments.RemoveAt(0)

' Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

N> Use `Attachments.Count` to check the number of attachments before calling `RemoveAt` to avoid an `ArgumentOutOfRangeException` when the index is invalid.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Remove-attachment-from-an-existing-PDF-document/).

## Extracting and saving attachments to disk

Essential<sup>&reg;</sup> PDF provides support for extracting attachments and saving them to disk. The following example explains how to extract and save an attachment using the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Extract-and-saving-an-attachment-to-the-disk/.NET/Extract-and-saving-an-attachment-to-the-disk/Program.cs" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Iterate the attachments
foreach (PdfAttachment attachment in document.Attachments)
{
    // Extract the attachment and save it to disk
    using (FileStream stream = new FileStream(attachment.FileName, FileMode.Create))
    {
        stream.Write(attachment.Data, 0, attachment.Data.Length);
    }
}

// Save the document
document.Save("Output.pdf");
// Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the PDF document
PdfLoadedDocument document = new PdfLoadedDocument("Input.pdf");
// Iterate the attachments
foreach (PdfAttachment attachment in document.Attachments)
{
    // Extract the attachment and save it to disk
    using (FileStream stream = new FileStream(attachment.FileName, FileMode.Create))
    {
        stream.Write(attachment.Data, 0, attachment.Data.Length);
    }
}

// Save and close the document
document.Save("Output.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the PDF document
Dim document As New PdfLoadedDocument("Input.pdf")
' Iterate the attachments
For Each attachment As PdfAttachment In document.Attachments
    ' Extract the attachment and save it to disk
    Using stream As New FileStream(attachment.FileName, FileMode.Create)
        stream.Write(attachment.Data, 0, attachment.Data.Length)
    End Using
Next

' Save and close the document
document.Save("Output.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

N> When extracting attachments, the `attachment.FileName` is used to create the output file. Ensure the application has write permission to the target directory. The `attachment.Data` property contains the raw bytes of the embedded file.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Extract-and-saving-an-attachment-to-the-disk/).

## Adding PDF attachments with interactive launch buttons

**Scenario**:
You need to implement a feature where, upon clicking on a content (such as a button or link), the user is navigated to a custom page in an attached PDF. This requires embedding the functionality within the PDF to open the attachment when the content is clicked.

**Solution**:
You can achieve this functionality by using JavaScript actions within Syncfusion<sup>®</sup> PDF library. This solution involves adding a PDF attachment to the document and setting up a JavaScript action on a button field that, when clicked, opens the attached PDF. This is achieved using the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html) and [PdfButtonField](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfButtonField.html) classes.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Attachment/Adding-PDF-Attachments-with-Interactive-Launch-Buttons/.NET/Adding-PDF-Attachments-with-Interactive-Launch-Buttons/Program.cs" %}


using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF file
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Get the first page of the PDF
PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

// Create a PDF attachment
PdfAttachment attachment = new PdfAttachment("Attachment.pdf", File.ReadAllBytes("Attachment.pdf"));
attachment.Description = "Attachment";
// Create the attachments section if it does not exist
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

// Add a JavaScript action to open the attachment
buttonField.Actions.MouseUp = new PdfJavaScriptAction("this.exportDataObject({ cName: \"Attachment.pdf\", nLaunch: 2 });");
// Create a form if it does not exist
if (loadedDocument.Form == null)
    loadedDocument.CreateForm();
// Add the button field to the form
loadedDocument.Form.Fields.Add(buttonField);
// Set default appearance for form fields
loadedDocument.Form.SetDefaultAppearance(false);

// Save the PDF document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Interactive;
using Syncfusion.Pdf.Parsing;

// Load the existing PDF file
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// Get the first page of the PDF
PdfLoadedPage lpage = loadedDocument.Pages[0] as PdfLoadedPage;

// Create a PDF attachment
PdfAttachment attachment = new PdfAttachment("Attachment.pdf", File.ReadAllBytes("Attachment.pdf"));
attachment.Description = "Attachment";
// Create the attachments section if it does not exist
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
// Add a JavaScript action to open the attachment
buttonField.Actions.MouseUp = new PdfJavaScriptAction("this.exportDataObject({ cName: \"Attachment.pdf\", nLaunch: 2 });");

// Create a form if it does not exist
if (loadedDocument.Form == null)
    loadedDocument.CreateForm();
// Add the button field to the form
loadedDocument.Form.Fields.Add(buttonField);
// Set default appearance for form fields
loadedDocument.Form.SetDefaultAppearance(false);

// Save the PDF document
loadedDocument.Save("Output.pdf");
// Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports System.Drawing

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports Syncfusion.Pdf.Interactive
Imports Syncfusion.Pdf.Parsing

' Load the existing PDF file
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
' Get the first page of the PDF
Dim lpage As PdfLoadedPage = CType(loadedDocument.Pages(0), PdfLoadedPage)

' Create a PDF attachment
Dim attachment As New PdfAttachment("Attachment.pdf", File.ReadAllBytes("Attachment.pdf"))
attachment.Description = "Attachment"
' Create the attachments section if it does not exist
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
' Add a JavaScript action to open the attachment
buttonField.Actions.MouseUp = New PdfJavaScriptAction("this.exportDataObject({ cName: ""Attachment.pdf"", nLaunch: 2 });")

' Create a form if it does not exist
If loadedDocument.Form Is Nothing Then
    loadedDocument.CreateForm()
End If
' Add the button field to the form
loadedDocument.Form.Fields.Add(buttonField)
' Set default appearance for form fields
loadedDocument.Form.SetDefaultAppearance(False)

' Save the PDF document
loadedDocument.Save("Output.pdf")
' Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

N> The JavaScript action `this.exportDataObject` is supported in most modern PDF viewers, including Adobe Acrobat and Reader. The `nLaunch` value `2` indicates that the attached file should be opened in a new window. The file name passed in `cName` must exactly match the `FileName` of the [PdfAttachment](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Interactive.PdfAttachment.html).

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Attachment/Adding-PDF-Attachments-with-Interactive-Launch-Buttons/.NET).