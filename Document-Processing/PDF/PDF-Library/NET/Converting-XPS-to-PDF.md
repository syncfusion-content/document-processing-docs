---
title: Working with XPS document to PDF Conversion | Syncfusion
description: This section explains how to converting XPS document to PDF document by using Syncfusion .NET PDF library.
platform: document-processing
control: PDF
documentation: UG
---
# Converting an XPS Document to PDF

The XPS (XML Paper Specification) document format is a fixed-document format that consists of structured XML markup defining the layout of a document and the visual appearance of each page, along with rendering rules for distributing, archiving, rendering, processing, and printing the documents.

The following code example illustrates how to convert an XPS document to PDF using the [XPSToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.XPS.XPSToPdfConverter.html) class.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Document%20conversion/Converting-XPS-to-PDF-document/.NET/Converting-XPS-to-PDF-document/Program.cs" %}

//Initialize the XPS to PDF converter.
XPSToPdfConverter converter = new XPSToPdfConverter();
//Convert the XPS to PDF.
PdfDocument document = converter.Convert("Input.xps");

//Save the document.
document.Save("Output.pdf");
//Close the document.
document.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Create the converter class.
XPSToPdfConverter converter = new XPSToPdfConverter();
//Convert the XPS to a PDF document.
PdfDocument document = converter.Convert(xpsFileName);

//Save and close the document.
document.Save("Sample.pdf");
document.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

'Create the converter class.
Dim converter As New XPSToPdfConverter()
'Convert the XPS to a PDF document.
Dim document As PdfDocument = converter.Convert(xpsFileName)

'Save and close the document.
document.Save("Sample.pdf")
document.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Document%20conversion/Converting-XPS-to-PDF-document).

N> In ASP.NET Core, XPS to PDF conversion requires the [Syncfusion.XpsToPdfConverter.Net.Core](https://www.nuget.org/packages/Syncfusion.XpsToPdfConverter.Net.Core) NuGet package.
