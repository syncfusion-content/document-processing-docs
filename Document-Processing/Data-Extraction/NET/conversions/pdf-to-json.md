---
title: Extract PDF to JSON in C# | Smart Data Extractor | Syncfusion
description: Learn how to extract structured data from PDF documents as JSON in C# using the Syncfusion® Smart Data Extractor library for .NET applications.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# PDF to JSON Extraction

JavaScript Object Notation (JSON) is a lightweight data‑interchange format that is easy for humans to read and write, and simple for machines to parse and generate. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library extracts structured information from PDF documents and scanned images, and outputs the content as JSON. It analyzes text blocks, tables, headers, and form fields to preserve structure, enabling developers to integrate PDF to JSON extraction into their applications.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required on different platforms to extract data as a JSON file using the Smart Data Extractor library.

* [Assemblies required for PDF to JSON Extraction](/document-processing/data-extraction/net/Assemblies-required)
* [NuGet packages required for PDF to JSON Extraction](/document-processing/data-extraction/net/Nuget-packages-required)

## Extract Data as JSON from PDF or Image

To extract structured data from a PDF document or image using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input PDF or image file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input PDF or image file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();    
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% endtabs %}

N> If you want to extract data from an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-JSON-from-PDF/.NET).


## Extract Data from a Customized Page Range

To extract data from a specific range of pages in a PDF document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example. Page numbers are 1-based and the range is inclusive:
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Set the page range for extraction (pages 1 to 3).
    extractor.PageRange = new int[,] { { 1, 3 } };
    //Extract data as JSON string.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();  
    //Set the page range for extraction (pages 1 to 3).
    extractor.PageRange = new int[,] { { 1, 3 } };
    //Extract data as JSON string.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

## JSON Output Structure and Attributes

The JSON output from the extraction contains structured attributes. For more details on the extracted JSON structure and attributes, refer to the [JSON Attributes](https://help.syncfusion.com/document-processing/data-extraction/net/overview#json-output-structure-and-attributes) documentation.