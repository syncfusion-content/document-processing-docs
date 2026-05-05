---
title: Extract Image to MD in C# | Smart Data Extractor | Syncfusion
description: Learn how to extract structured content from images as Markdown in C# using the Syncfusion® Smart Data Extractor library for .NET applications.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Image to Markdown Extraction

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library extracts structured information from scanned images and outputs the content as Markdown (MD). It analyzes text blocks, tables, headers, and form fields to preserve layout and formatting, enabling developers to integrate image to Markdown extraction into their applications.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required on different platforms to extract data as a Markdown file using the Smart Data Extractor library.

* [Assemblies required for Image to Markdown Extraction](https://help.syncfusion.com/document-processing/data-extraction/smart-data-extractor/net/assemblies-required)
* [NuGet packages required for Image to Markdown Extraction](https://help.syncfusion.com/document-processing/data-extraction/smart-data-extractor/net/nuget-packages-required)

## Extract Data as Markdown from Image

To extract form fields across a PDF document using the **ExtractDataAsMarkdown** method of the **DataExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("InputImage.jpg", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    
    //Extract data as Markdown.
    string data = extractor.ExtractDataAsMarkdown(stream);

    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("InputImage.jpg", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    
    //Extract data as Markdown.
    string data = extractor.ExtractDataAsMarkdown(stream);

    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}
		
{% endhighlight %}

{% endtabs %}