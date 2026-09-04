---
title: Convert PDF to Word in .NET Smart Data Extractor | Syncfusion
description: Extract PDF documents as Word using Smart Data Extractor. Convert PDF content into editable, structured Word documents in .NET.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Convert PDF to Word in .NET Smart Data Extractor

Word (DOCX) is a widely used format for creating and editing professional documents. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library supports PDF to Word conversion in .NET, enabling seamless transformation of PDF files into fully editable Word documents while preserving the original layout, tables, images, and text formatting. This feature makes it easier to reuse content, improve accessibility, and integrate document data into downstream applications and business workflows.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required based on your target platform to extract data as a Word file using the Syncfusion® Smart Data Extractor library.

* [PDF to Word Extraction assemblies](/document-processing/data-extraction/net/Assemblies-required)
* [PDF to Word Extraction NuGet packages](/document-processing/data-extraction/net/Nuget-packages-required)

## Extract Data as Word from PDF or Image

To extract structured data from a PDF document or image using the **ExtractDataAsWordDocument** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;
using Syncfusion.DocIO.DLS;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
  //Initialize the Data Extractor.
  DataExtractor extractor = new DataExtractor();
  //Extract data as WordDocument.
  WordDocument word = extractor.ExtractDataAsWordDocument(stream);
  //Save the extracted Word data into an output file.
  word.Save("Output.docx");
  word.Close();
} 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor;
using Syncfusion.DocIO.DLS;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
  //Initialize the Data Extractor.
  DataExtractor extractor = new DataExtractor();
  //Extract data as WordDocument.
  WordDocument word = extractor.ExtractDataAsWordDocument(stream);
  //Save the extracted Word data into an output file.
  word.Save("Output.docx");
  word.Close();
} 

{% endhighlight %}

{% endtabs %}

N> If you want to extract data from an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-MD-from-PDF/.NET).

## Extract data as HTML from PDF or Image 

To extract structured data from a PDF document or image using the **ExtractDataAsHtmlDocument** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor; 

//Open the input PDF file as a stream. 
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read)) 
{ 
  //Initialize the Data Extractor. 
  DataExtractor extractor = new DataExtractor(); 
  //Extract data as HTML. 
  string  htmlContent = extractor.ExtractDataAsHtml(stream); 
 //Save the extracted HTML data into an output file. 
 File.WriteAllText("Output.html", htmlContent); 
} 

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.SmartDataExtractor; 

//Open the input PDF file as a stream. 
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read)) 
{ 
  //Initialize the Data Extractor. 
  DataExtractor extractor = new DataExtractor(); 
  //Extract data as HTML. 
  string  htmlContent = extractor.ExtractDataAsHtml(stream); 
 //Save the extracted HTML data into an output file. 
 File.WriteAllText("Output.html", htmlContent); 
} 
		
{% endhighlight %}

{% endtabs %}

N> If you want to extract data from an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.
