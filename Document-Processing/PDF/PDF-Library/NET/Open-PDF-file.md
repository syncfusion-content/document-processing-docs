---
title: Open PDF file in C# and VB.NET | Syncfusion
description: Learn how to open PDF files from the file system, stream, or byte array in C# and VB.NET using Syncfusion .NET PDF.
platform: document-processing
control: PDF
documentation: UG
---
# Open PDF file in C# and VB.NET

## Namespaces required

The following namespace of the Essential<sup>&reg;</sup> PDF library must be included in your application to load a PDF document.

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

## Opening an existing PDF document

You can open an existing PDF document by using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following example shows how to load an existing document from a physical path on the file system.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing PDF document from a file path through the `PdfLoadedDocument` constructor.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing document from the file system.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing document from the file system.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

{% endhighlight %}

{% endtabs %}

## Opening an existing PDF document from a stream

You can open an existing document from a stream by using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class as shown below.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing PDF document from a stream through the `PdfLoadedDocument` constructor.
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing document from a stream.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing document from a stream.
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream)

{% endhighlight %}

{% endtabs %}

## Opening an existing PDF document from a byte array

You can open an existing document from a byte array by using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class as shown in the following code example.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing document from a byte array.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing document from a byte array.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing document from a byte array.
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray)

{% endhighlight %}

{% endtabs %}

## Opening an encrypted PDF document

You can open an existing encrypted PDF document from the file system, a stream, or a byte array using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_) class, as shown in the following code examples.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an encrypted PDF document from a file path through the `PdfLoadedDocument` constructor.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf", "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing encrypted document from the file system.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing encrypted document from the file system.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", "password")

{% endhighlight %}

{% endtabs %}

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Open an encrypted PDF document from a stream through the `PdfLoadedDocument` constructor.
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing encrypted document from a stream.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing encrypted document from a stream.
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream, "password")

{% endhighlight %}

{% endtabs %}

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing encrypted document from a byte array.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing encrypted document from a byte array.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing encrypted document from a byte array.
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray, "password")

{% endhighlight %}

{% endtabs %}

## Opening a corrupted PDF document

You can open a corrupted PDF document from the file system, a stream, or a byte array using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_System_Boolean_) class, as shown below. The `OpenAndRepair` constructor enables repair mode so that the library can attempt to recover the document's structure.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing corrupted PDF document from a file path through the `PdfLoadedDocument` constructor (OpenAndRepair overload).
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf", true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing corrupted document from the file system.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing corrupted document from the file system.
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", True)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Open an existing corrupted PDF document from a stream through the `PdfLoadedDocument` constructor (OpenAndRepair overload).
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing corrupted document from a stream.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing corrupted document from a stream.
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream, True)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing corrupted document from a byte array.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing corrupted document from a byte array.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing corrupted document from a byte array.
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray, True)

{% endhighlight %}

{% endtabs %}

N> 1. The OpenAndRepair overload can resolve basic cross-reference offset issues and cannot repair complex document corruption.
N> 2. Using this overload may cause a performance delay when compared with other overloads, due to the repair process.
N> 3. If the document is encrypted, supply the password as an additional constructor argument: `new PdfLoadedDocument("Input.pdf", "password", true)`.