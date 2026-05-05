---
title: Extract Image to JSON in C# | Smart Data Extractor | Syncfusion
description: Learn how to extract structured data from images as JSON in C# using the Syncfusion® Smart Data Extractor library for .NET applications.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Data Extraction, Image to JSON, Smart Data Extractor, Assemblies, NuGet Packages
---

# Image to JSON Extraction

JavaScript Object Notation (JSON) is a lightweight data‑interchange format that is easy for humans to read and write, and simple for machines to parse and generate. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library extracts structured information from images and outputs the content as JSON. It analyzes text blocks, tables, headers, and form fields to preserve structure, enabling developers to integrate image to JSON extraction into their applications.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required on different platforms to extract data as a JSON file using the Smart Data Extractor library.

* [Assemblies required for Image to JSON Extraction](https://help.syncfusion.com/document-processing/data-extraction/smart-data-extractor/net/assemblies-required)
* [NuGet packages required for Image to JSON Extraction](https://help.syncfusion.com/document-processing/data-extraction/smart-data-extractor/net/nuget-packages-required)

## Extract Data as JSON from an Image

To extract structured data from an image document using the **ExtractDataAsJson** method of the **DataExtractor** class, refer to the following code examples. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("Image.png", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as JSON from the image stream.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("Image.png", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as JSON from the image stream.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-JSON-from-an-Image/.NET).