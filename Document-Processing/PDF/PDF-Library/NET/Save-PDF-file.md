---
title: Save PDF file in C# and VB.NET | Syncfusion
description: This page describes how to save PDF file from or to file system, and stream in C# and VB.NET using Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Save PDF file in C# and VB.NET

## Namespaces required

The following namespace of the Essential<sup>&reg;</sup> PDF library must be included in your application to save a PDF document.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing

{% endhighlight %}

{% endtabs %}

## Saving a PDF document to the file system

You can save the manipulated PDF document to the file system using the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method of the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Save the document to the file system.
loadedDocument.Save("Output.pdf");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Save the document to the file system.
loadedDocument.Save("Output.pdf");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'Save the document to the file system.
loadedDocument.Save("Output.pdf")

{% endhighlight %}

{% endtabs %}

## Saving a PDF document to a stream

You can also save the manipulated PDF document to a stream using the overloads of the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Load an existing PDF document.
FileStream docStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(docStream);
//To-Do some manipulation
//Save the document into stream.
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Creates an instance of memory stream.
MemoryStream stream = new MemoryStream();
//Save the document stream.
loadedDocument.Save(stream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'Creates an instance of memory stream.
Dim stream As New MemoryStream()
'Save the document to stream.
loadedDocument.Save(stream)

{% endhighlight %}

{% endtabs %}

## Saving a PDF document into the same file or stream

You can also resave the manipulated PDF document to the same file using the overloads of the [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Resave the document to the same file.
loadedDocument.Save();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Resave the document to the same file.
loadedDocument.Save();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'Resave the document to the same file.
loadedDocument.Save()

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(stream);
//To-Do some manipulation
//Resave the document to the same stream.
loadedDocument.Save();

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(stream);
//To-Do some manipulation
//Resave the document to the same stream.
loadedDocument.Save();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument(stream)
'To-Do some manipulation
'Resave the document to the same stream.
loadedDocument.Save()

{% endhighlight %}

{% endtabs %}

## Closing a document

After the document manipulation and save operations are completed, you should close the instance of [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) to release all the memory consumed by the PDF DOM. The following code snippet illustrates how to [Close](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Close_System_Boolean_) a `PdfLoadedDocument` instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Save the document into stream.
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//To-Do some manipulation
//Save the document to the file system.
loadedDocument.Save("Output.pdf");
//Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'Save the document to the file system.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

N> 1. The `Close()` method disposes all the memory consumed by the PDF DOM.
N> 2. The [Close(true)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Close_System_Boolean_) method disposes all the memory consumed by the PDF DOM and also disposes the underlying document stream.
N> 3. Always call `Close()` (or wrap the document in a `using` block) to prevent memory leaks and locked file handles.

## Secured document exception

You can catch the exception thrown when opening an existing encrypted PDF document from the file system, a stream, or a byte array using the following code samples.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Load an existing PDF document.
PdfLoadedDocument document = null;
try
{
    //Open an existing PDF document from a stream.
    document = new PdfLoadedDocument("Input.pdf", "password");
}
catch (Syncfusion.Pdf.PdfInvalidPasswordException exception)
{
    //Secured PDF document password is invalid or opened without a password.
}
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

PdfLoadedDocument document = null;
try
{
    //Load an existing PDF document.
    document = new PdfLoadedDocument("Input.pdf", "password");
}
catch (Syncfusion.Pdf.PdfInvalidPasswordException exception)
{
    //The secured PDF document password is invalid or the document was opened without a password.
}
//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim document As PdfLoadedDocument = Nothing
Try
  'Load an existing PDF document.
  document = New PdfLoadedDocument("Input.pdf", "password")
Catch exception As Syncfusion.Pdf.PdfInvalidPasswordException
  'The secured PDF document password is invalid or the document was opened without a password.
End Try
'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

## Possible error messages of invalid PDF documents while loading

The following are the possible error messages that can occur when loading an invalid PDF document:

I. **Corruption errors that cannot be repaired:**
1. Could not find a valid signature (%PDF-).
2. Bad Format error.
3. Lexical Error: Unmatched Input.
4. The document does not contain EOF.
5. The document has corrupted cross reference tables.
6. Error: Bad input stream initializer.
7. Fatal Error occurred.

II. **Offset errors that may be repairable (handled by the OpenAndRepair overload):**
1. Invalid cross-reference table with offset position.
2. Trailer Prev offset is located in the same cross table section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Load a PDF document.
PdfLoadedDocument document = null;
try
{
    //Open an existing PDF document from the stream.
    document = new PdfLoadedDocument("Input.pdf", true);
}
catch (PdfException exception)
{
    //Invalid cross-reference table with offset position
    //Trailer Prev offset is located in the same cross table section
    //Could not find a valid signature (%PDF-).
    //Bad Format error
    //Lexical error: Unmatched input
    //The document does not contain EOF
    //The document has corrupted cross reference table
    //Error: Bad input stream initializer
    //Fatal error occured
    //Unexpected token name before 257
}
//Save the document.
MemoryStream stream = new MemoryStream();
document.Save(stream);
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

PdfLoadedDocument document = null;
try
{
    //Open an existing PDF document from the disk.
    document = new PdfLoadedDocument("Input.pdf", true);
}
catch (Exception exception)
{
    //Invalid cross-reference table with offset position
    //Trailer Prev offset is located in the same cross table section
    //Could not find a valid signature (%PDF-).
    //Bad Format error
    //Lexical error: Unmatched input
    //The document does not contain EOF
    //The document has corrupted cross reference tables
    //Error: Bad input stream initializer
    //Fatal error occurred
}
//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim document As PdfLoadedDocument = Nothing
Try
    'Load an existing document.
    document = New PdfLoadedDocument("Input.pdf", true)
Catch exception As Exception
    'Invalid cross-reference table with offset position
    'Trailer Prev offset is located in the same cross table section
    'Could not find a valid signature (%PDF-).
    'Bad Format error
    'Lexical error: Unmatched input
    'The document does not contain EOF
    'The document has corrupted cross reference tables
    'Error: Bad input stream initializer
    'Fatal error occurred
End Try
'Save the document.
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}