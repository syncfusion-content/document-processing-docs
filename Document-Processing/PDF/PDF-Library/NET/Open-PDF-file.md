---
title: Open PDF file in C# and VB.NET | Syncfusion
description: This page describes how to open PDF file from or to file system, and stream in C# and VB.NET using Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Open PDF file in C# and VB.NET

## Namespace required 
The following namespaces of Essential<sup><sup>&reg;</sup></sup> PDF need to be included in your application to load the PDF document. 

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

You can open an existing PDF document by using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class. The following example shows how to load an existing document from physical path.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing PDF document from stream through constructor of `PdfLoadedDocument` class. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing document from file system. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing document from file system. 
Dim loadedDocument As New PdfLoadedDocument("Input.pdf")

{% endhighlight %}

{% endtabs %}

## Opening an existing PDF document from Stream

You can open an existing document from stream by using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class as shown below.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing PDF document from stream through constructor of `PdfLoadedDocument` class. 
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %} 

//Opens an existing document from stream. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing document from stream. 
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream)

{% endhighlight %}

{% endtabs %}

## Opening an existing PDF document from byte array

You can open an existing document from byte array by using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html) class as shown in the below code example.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray); 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray); 

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Opens an existing document from byte array.
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray)

{% endhighlight %}

{% endtabs %}

## Opening an Encrypted PDF document

You can open an existing encrypted PDF document from either the file system or the stream or the byte array using [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_) class as shows in the below code example. 

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an encrypted PDF document from stream through constructor of `PdfLoadedDocument` class.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf", "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing encrypted document from disk.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing encrypted document from disk. 
Dim loadedDocument As New PdfLoadedDocument("Input.pdf","password")

{% endhighlight %}

{% endtabs %}

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Open an encrypted PDF document from stream through constructor of `PdfLoadedDocument` class. 
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing encrypted document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing encrypted document from stream.
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream,"password")

{% endhighlight %}

{% endtabs %}

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing encrypted document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, "password");

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing encrypted document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, "password");

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing encrypted document from byte array. 
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray,"password")

{% endhighlight %}

{% endtabs %}

## Opening a corrupted PDF document

You can open a corrupted PDF document from either the file system or the stream or the byte array using the [PdfLoadedDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Parsing.PdfLoadedDocument.html#Syncfusion_Pdf_Parsing_PdfLoadedDocument__ctor_System_Byte___System_String_System_Boolean_) as shown below.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing corrupted PDF document from stream through constructor of `PdfLoadedDocument` class.
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(@"Input.pdf", true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing corrupted document from disk. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf", true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing corrupted document from disk. 
Dim loadedDocument As New PdfLoadedDocument("Input.pdf", True)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}	

//Open an existing corrupted PDF document from stream through constructor of `PdfLoadedDocument` class. 
FileStream inputPDFStream = new FileStream(@"Input.pdf", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing corrupted document from stream. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFStream, true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing corrupted document from stream. 
Dim loadedDocument As New PdfLoadedDocument(inputPDFStream, True)

{% endhighlight %}

{% endtabs %}

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Open an existing corrupted document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Open an existing corrupted document from byte array. 
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(inputPDFByteArray, true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Open an existing corrupted document from byte array. 
Dim loadedDocument As New PdfLoadedDocument(inputPDFByteArray, True)

{% endhighlight %}

{% endtabs %}

N> 1. The OpenAndRepair overload is capable of resolving basic cross reference offset issues and cannot repair complex document corruption.
N> 2.  Using this overload may cause performance delay when compared with other overloads, due to the repairing process.