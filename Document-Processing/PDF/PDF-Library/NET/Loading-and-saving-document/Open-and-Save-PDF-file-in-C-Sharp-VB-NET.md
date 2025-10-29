---
title: Load and Save PDF file in C# and VB.NET | Syncfusion
description: This page describes how to Load and save PDF file from or to file system, and stream in C# and VB.NET using Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Load and save PDF files using C# and VB.NET.

## Namespace required 
The following namespaces of Essential<sup>&reg;</sup> PDF need to be included in your application to load and save the PDF document. 

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

## Loading an existing PDF document

Load an existing PDF document by using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following example shows how to load an existing document from physical path.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing document from file system 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing document from file system
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing document from file system
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

{% endhighlight %}

{% endtabs %}

## LOading an existing PDF document from Stream

Load an existing document from stream by using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class as shown below.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing PDF document from a stream
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 

// Load an existing PDF document from a stream
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PDF document from a stream
Dim inputPDFStream As New FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream)

{% endhighlight %}

{% endtabs %}

## Loading an existing PDF document from byte array

Load an existing document from byte array by using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class as shown in the below code example.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing PDF document from byte array
byte[] inputPDFByteArray = File.ReadAllBytes("Input.pdf");
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing PDF document from byte array
byte[] inputPDFByteArray = File.ReadAllBytes("Input.pdf");
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PDF document from a byte array
Dim inputPDFByteArray As Byte() = File.ReadAllBytes("Input.pdf")
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray)

{% endhighlight %}

{% endtabs %}

## Loading an Encrypted PDF document

Load an existing encrypted PDF document from either the file system or the stream or the byte array using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_) class as shows in the below code example. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing encrypted PDF document from disk
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing encrypted PDF document from disk
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing encrypted document from disk 
Dim loadedDocument As New PdfLoadedDocument("Input.pdf","password")

{% endhighlight %}

{% endtabs %}

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}	

// Load an encrypted PDF document from stream
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an encrypted PDF document from stream
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PDF document from a stream
Dim inputPDFStream As New FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream,"password")

{% endhighlight %}

{% endtabs %}

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing PDF document from byte array
byte[] inputPDFByteArray = File.ReadAllBytes("Input.pdf"); 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing PDF document from byte array
byte[] inputPDFByteArray = File.ReadAllBytes("Input.pdf");
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PDF document from a byte array
Dim inputPDFByteArray As Byte() = File.ReadAllBytes("Input.pdf") 
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray,"password")

{% endhighlight %}

{% endtabs %}

## Loading a corrupted PDF document

Load a corrupted PDF document from either the file system or the stream or the byte array using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_System_Boolean_) as shown below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing corrupted PDF document from disk
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing corrupted PDF document from disk
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing corrupted PDF document from disk
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", True)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

// Load an existing corrupted PDF document from stream
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing corrupted PDF document from stream
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing corrupted PDF document from stream
Dim inputPDFStream As New FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite)
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream, True)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Load an existing PDF document from byte array
byte[] inputPDFByteArray = File.ReadAllBytes("Input.pdf"); 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Load an existing PDF document from byte array
byte[] inputPDFByteArray = File.ReadAllBytes("Input.pdf");
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

' Load an existing PDF document from a byte array
Dim inputPDFByteArray As Byte() = File.ReadAllBytes("Input.pdf")  
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray, True)

{% endhighlight %}

{% endtabs %}

N> 1. The OpenAndRepair overload is capable of resolving basic cross reference offset issues and cannot repair complex document corruption.
N> 2.  Using this overload may cause performance delay when compared with other overloads, due to the repairing process.

## Saving a PDF document to file system

You can save the manipulated PDF document to file system using [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method of [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Save the PDF document in file system
loadedDocument.Save("Output.pdf"); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Save the PDF document in file system
loadedDocument.Save("Output.pdf"); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'To-Do some manipulation
'Save the document in file system
loadedDocument.Save("Output.pdf")

{% endhighlight %}

{% endtabs %}

## Saving a PDF document to stream

You can also save the manipulated PDF document to stream using overloads of [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Save the document into stream
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Save the document into stream
MemoryStream stream = new MemoryStream();
loadedDocument.Save(stream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'To-Do some manipulation
'Creates an instance of memory stream.
Dim stream As New MemoryStream()
'Save the document to stream.
loadedDocument.Save(stream)

{% endhighlight %}

{% endtabs %}

## Saving a PDF document into the same file

You can also resave the manipulated PDF document to the same file using overloads of [Save](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Save) method.

{% tabs %}

{% highlight c# tabtitle="ASP.NET Core" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Resave the document to the same file
loadedDocument.Save(); 

{% endhighlight %}

{% highlight c# tabtitle="C#" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Resave the document to the same file
loadedDocument.Save();

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'To-Do some manipulation
'Resave the document to the same file
loadedDocument.Save()

{% endhighlight %}

{% endtabs %}

## Closing a document

After the document manipulation and save operation are completed, you should close the instance of [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html), in order to release all the memory consumed by PDF DOM. The following code snippet illustrates how to [Close](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Close_System_Boolean_) a ```PdfLoadedDocument``` instance.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Save the document in file system
loadedDocument.Save("Output.pdf"); 
// Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

// Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
// To-Do some manipulation
// To-Do some manipulation
// Save the document in file system
loadedDocument.Save("Output.pdf"); 
// Close the document.
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Load an existing PDF document.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")
'To-Do some manipulation
'To-Do some manipulation
'Save the document in file system.
loadedDocument.Save("Output.pdf")
'Close the document.
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

N> 1. Close() method will dispose all the memory consumed by PDF DOM.
N> 2. [Close(true)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument_Close_System_Boolean_) method will dispose all the memory consumed by PDF DOM as well as disposes its document stream.

## Secured documents exception

You can catch the secured document exception by opening an existing encrypted PDF document from either the file system, stream, or byte array using the following code sample as follows.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

PdfLoadedDocument document = null;
try
{
    //Load an existing PDF document
    document = new PdfLoadedDocument("Input.pdf", "password");
}
catch (Syncfusion.Pdf.PdfInvalidPasswordException exception)
{
    //Secured PDF document password is invalid or opened without a password.
}
//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

PdfLoadedDocument document = null;
try
{
    //Load an existing PDF document
    document = new PdfLoadedDocument("Input.pdf", "password");
}
catch (Syncfusion.Pdf.PdfInvalidPasswordException exception)
{
    //Secured PDF document password is invalid or opened without a password.
}
//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim document As PdfLoadedDocument = Nothing
Try
  'Load an existing PDF document
  document = New PdfLoadedDocument("Input.pdf", "password")
Catch exception As Syncfusion.Pdf.PdfInvalidPasswordException
  'Secured PDF document password is invalid or opened without a password.
End Try
'Save the document
document.Save("Output.pdf")
'Close the document.
document.Close(True)

{% endhighlight %}

{% endtabs %}

## Possible error messages of invalid PDF documents while loading

The following are the possible error messages of invalid PDF documents while loading:
I.	Please find some of the following corrupted error messages that cannot be repaired:
1.    Could not find a valid signature (%PDF-).
2.    Bad Format error.
3.    Lexical Error: Unmatched Input.
4.    The document does not contain EOF.
5.    The document has corrupted cross reference tables.
6.    Error: Bad input stream initializer.
7.    Fatal Error occurred.
II.	Please find  some of the possible offset error messages that may be repairable:
1.    Invalid cross-reference table with offset position.
2.    Trailer Prev offset is located in the same cross table section.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

PdfLoadedDocument document = null;
try
{
    //Load an existing PDF document from the disk
    document = new PdfLoadedDocument("Input.pdf", true);
}
catch (Exception message)
{
    //Invalid cross-reference table with offset position
    //Trailer Prev offset is located in the same cross table section
    //Could not find a valid signature (%PDF-).
    //Bad Format error
    //Lexical error: Unmatched input
    //The document does not contain EOF
    //The document has corrupted cross reference tables
    //Error: Bad input stream initializer
    //Fatal error occured
}
//Save the document
document.Save("Output.pdf");
//Close the document
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

PdfLoadedDocument document = null;
try
{
    //Load an existing PDF document from the disk
    document = new PdfLoadedDocument("Input.pdf", true);
}
catch (Exception message)
{
    //Invalid cross-reference table with offset position
    //Trailer Prev offset is located in the same cross table section
    //Could not find a valid signature (%PDF-).
    //Bad Format error
    //Lexical error: Unmatched input
    //The document does not contain EOF
    //The document has corrupted cross reference tables
    //Error: Bad input stream initializer
    //Fatal error occured
}
//Save the document
document.Save("Output.pdf");
//Close the document 
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Dim document As PdfLoadedDocument = Nothing
Try
    'Load an existing document
    document = New PdfLoadedDocument("Input.pdf",true)
Catch exception As Exception
    'Invalid cross-reference table with offset position
    'Trailer Prev offset is located in the same cross table section
    'Could not find a valid signature (%PDF-).
    'Bad Format error
    'Lexical error: Unmatched input
    'The document does not contain EOF
    'The document has corrupted cross reference tables
    'Error: Bad input stream initializer
    'Fatal error occured
End Try
'Save the document
document.Save("Output.pdf")
'Close the document
document.Close(True)

{% endhighlight %}

{% endtabs %}