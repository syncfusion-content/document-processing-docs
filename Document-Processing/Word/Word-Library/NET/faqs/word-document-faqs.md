---
title: FAQ about Word Document | DocIO | Syncfusion&reg;
description: Learn about the frequently asked questions about Word documents and their manipulations in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Frequently asked questions about Word document 

The frequently asked questions about Word document manipulation using DocIO are listed below.

## How to open a document from stream using DocIO?

A document can be opened as stream by using HttpWebResponse. This stream does not support seek operation and so the contents should be read manually to get the position and length of the stream. The following code illustrates how to load the document from stream.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Gets the document as stream
HttpWebRequest request = (HttpWebRequest)WebRequest.Create("https://www.swiftview.com/tech/letterlegal5.doc");
HttpWebResponse response = (HttpWebResponse)request.GetResponse();
Stream stream = response.GetResponseStream();
//Converts it to byte array
byte[] buffer = ReadFully(stream, 32768);
//Stores bytes into the memory stream.
MemoryStream ms = new MemoryStream();
ms.Write(buffer, 0, buffer.Length);
ms.Seek(0, SeekOrigin.Begin);
stream.Close();
//Creates a new document.
WordDocument document = new WordDocument();
//Opens the template document from the MemoryStream.
document.Open(ms, FormatType.Doc);
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Gets the document as stream
Dim request As HttpWebRequest = DirectCast(WebRequest.Create("https://www.swiftview.com/tech/letterlegal5.doc"), HttpWebRequest)
Dim response As HttpWebResponse = DirectCast(request.GetResponse(), HttpWebResponse)
Dim stream As Stream = response.GetResponseStream()
'Converts it to byte array
Dim buffer As Byte() = ReadFully(stream, 32768)
'Stores bytes into the memory stream.
Dim ms As New MemoryStream()
ms.Write(buffer, 0, buffer.Length)
ms.Seek(0, SeekOrigin.Begin)
stream.Close()
'Creates a new document.
Dim document As New WordDocument ()
'Opens the template document from the MemoryStream.
document.Open(ms, FormatType.Doc)
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}

The following code illustrates the method used to read the stream and convert the stream to bytes.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
public static byte[] ReadFully(Stream stream, int initialLength)
{
    //When an unhelpful initial length has been passed, just use 32K.
    if (initialLength < 1)
        initialLength = 32768;
    byte[] buffer = new byte[initialLength];
    int read = 0;
    int chunk;
    while ((chunk = stream.Read(buffer, read, buffer.Length - read)) > 0)
    {
        read += chunk;
        //After reaching the end of the buffer, check and see whether you can find any information.
        if (read == buffer.Length)
        {
            int nextByte = stream.ReadByte();
            //End of stream? Then, you are done.
            if (nextByte == -1)            
                return buffer;
            //Resize the buffer, put in the byte you have just read, and continue.
            byte[] newBuffer = new byte[buffer.Length * 2];
            Array.Copy(buffer, newBuffer, buffer.Length);
            newBuffer[read] = (byte)nextByte;
            buffer = newBuffer;
            read++;
        }
    }
    //Buffer is now too big. Shrink it.
    byte[] ret = new byte[read];
    Array.Copy(buffer, ret, read);
    return ret;
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Public Shared Function ReadFully(stream As Stream, initialLength As Integer) As Byte()
    'When an unhelpful initial length has been passed, just use 32K.
    If initialLength < 1 Then initialLength = 32768
    Dim buffer As Byte() = New Byte(initialLength - 1) {}
    Dim read As Integer = 0
    Dim chunk As Integer
    chunk = stream.Read(buffer, read, buffer.Length - read)
    While (chunk > 0)
        read += chunk
        'After reaching the end of the buffer, check and see whether you can find any information.
        If read = buffer.Length Then 
            Dim nextByte As Integer = stream.ReadByte()
            'End of stream? Then, you are done.
            If nextByte = -1 Then Return buffer
            'Resize the buffer, put in the byte you have just read, and continue.
            Dim newBuffer As Byte() = New Byte(buffer.Length * 2 - 1) {}
            Array.Copy(buffer, newBuffer, buffer.Length)
            newBuffer(read) = CByte(nextByte)
            buffer = newBuffer
            read += 1
        End If
    End While
    'Buffer is now too big. Shrink it.
    Dim ret As Byte() = New Byte(read - 1) {}
    Array.Copy(buffer, ret, read)
    Return ret
End Function
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Read-and-Save-document/Open-Word-document-from-url).

## How to attach a Template to a Word document?

The following code illustrates how to set the template for the document.

{% tabs %}  

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Loads a source document
WordDocument document = new WordDocument("Template.docx"); 
//Attaches the template document to the source document
document.AttachedTemplate.Path = @"D:/Data/Template.docx";
//Updates the styles of the document from the attached template each time the document is opened
document.UpdateStylesOnOpen = true;
//Saves and closes the document
document.Save("Sample.docx", FormatType.Docx);
document.Close();
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Loads a source document
Dim document As New WordDocument("Template.docx")
'Attaches the template document to the source document
document.AttachedTemplate.Path = "D:/Data/Template.docx"
'Updates the styles of the document from the attached template each time the document is opened
document.UpdateStylesOnOpen = True
'Saves and closes the document
document.Save("Sample.docx", FormatType.Docx)
document.Close()
{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Attach-template-to-Word-document).

## How to check the compatibility mode of the Word document?

The [CompatibilityMode](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.CompatibilityMode.html) of a Word document can also be determined. The following code example illustrates how to check the compatibility mode of the Word document.

{% tabs %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Load an existing Word document.
using (WordDocument document = new WordDocument("Input.docx", FormatType.Docx))
{
    //Get the compatibility mode.
    CompatibilityMode compatibilityMode = document.Settings.CompatibilityMode;
    Console.WriteLine(compatibilityMode);
    //Save a Word document.
    document.Save("Sample.docx", FormatType.Docx);
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Load an existing Word document.
Using document As WordDocument = New WordDocument("Input.docx", FormatType.Docx)
    'Get the compatibility mode.
    CompatibilityMode compatibilityMode = document.Settings.CompatibilityMode
    Console.WriteLine(compatibilityMode)
    'Save a Word document.
    document.Save("Sample.docx", FormatType.Docx)
End Using
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/FAQs/Check-compatibility-mode).

## Which units does Essential&reg; DocIO uses for measurement properties such as size, margins, etc, in a Word document?

Essential&reg; DocIO library uses Points for measurement properties in a Word document.

## How to convert Units (cm, mm, or inches) to Points for DocIO?

Syncfusion® .NET Word Library (DocIO) uses points as the default unit for various measurements, such as margins, indentation, and spacing. If you have measurements in centimeters (cm), millimeters (mm), or inches, you'll need to convert them to points before using them in DocIO code.

### Conversion Formulas for Units to Points

- **Centimeters (cm) to Points**: Multiply the cm value by **28.3465**.
- **Millimeters (mm) to Points**: Multiply the mm value by **2.83465**.
- **Inches to Points**: Multiply the inch value by **72**.

{% tabs %}

{% highlight c# tabtitle="C#" %}
// Assuming you have a margin value in centimeters
float marginInCentimeter = 2f;
// Convert cm to points
float marginInPoints = marginInCentimeter * 28.3465f;

// Assuming you have a margin value in millimeters
float marginInMillimeter = 20f;
// Convert cm to points
float marginInPoints = marginInMillimeter * 2.83465f;

// Assuming you have a margin value in inches
float marginInInches = 1f;
// Convert cm to points
float marginInPoints = marginInInches * 72f;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
' Assuming you have a margin value in centimeters
Dim marginInCentimeter As Single = 2.0F
' Convert cm to points
Dim marginInPointsFromCentimeter As Single = marginInCentimeter * 28.3465F

' Assuming you have a margin value in millimeters
Dim marginInMillimeter As Single = 20.0F
' Convert mm to points
Dim marginInPointsFromMillimeter As Single = marginInMillimeter * 2.83465F

' Assuming you have a margin value in inches
Dim marginInInches As Single = 1.0F
' Convert inches to points
Dim marginInPointsFromInches As Single = marginInInches * 72.0F
{% endhighlight %}

{% endtabs %}

## Why does the 'File Not Supported' exception occur in Syncfusion® DocIO? 

This issue may occur if the input Word document is in a pre-97 Word format (complex format document) created using Microsoft Word versions prior to Word 97. Syncfusion® DocIO does not support these older complex format documents.

To resolve this, resave the input document using a more recent version of Microsoft Word. DocIO supports documents created in Microsoft Word versions from 97-2003 and later.

For more information on compatibility, refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/overview).

## Why do documents remain locked after use?

This issue often occurs because the [FileStream](https://learn.microsoft.com/en-us/dotnet/api/system.io.filestream?view=net-7.0) class used to open the document is not closed properly. To ensure proper closure of the file stream, it is recommended to use the `using` statement. This guarantees that the [FileStream](https://learn.microsoft.com/en-us/dotnet/api/system.io.filestream?view=net-7.0) is disposed of correctly, even if an error occurs.

The following code demonstrates how to use a *using* block to handle file streams:

{% tabs %}

{% highlight c# tabtitle="C#" %}
using (FileStream stream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
{
    // Use the file stream here (e.g., read data, write data)
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
Using stream As New FileStream(filePath, FileMode.Open, FileAccess.Read)
    ' Use the file stream here (e.g., read data, write data)
End Using
{% endhighlight %}

{% endtabs %}

## Can DocIO perform line-by-line comparisons for Word documents?

A Word document is a flow document, meaning its content is not preserved page by page but sequentially, section by section. Each section can span multiple pages depending on its content, such as tables, text, images, etc.

When a Word document is opened in a viewer or editor, the content is dynamically rendered page by page for viewing or editing. However, as per the Word file format specification, this page-by-page and line-by-line rendered information is not preserved at the document level.

DocIO is a non-UI component that provides a comprehensive document object model for manipulating Word document content. However, it is not feasible to extract line-by-line information from a Word document using DocIO. Due to this limitation, line-by-line comparisons are not possible with DocIO.
