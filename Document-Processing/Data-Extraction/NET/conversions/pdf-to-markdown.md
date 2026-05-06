---
title: Extract PDF to Markdown in C# | Smart Data Extractor | Syncfusion
description: Extract PDF documents as Markdown (MD) in C# using Syncfusion<sup>&reg;</sup> Smart Data Extractor library without Microsoft Office or Adobe dependencies
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# PDF to Markdown Extraction

Markdown is a lightweight markup language that adds formatting elements to plain text documents. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library extracts structured information from PDF documents and scanned images, and outputs the content as Markdown (MD). It analyzes text blocks, tables, headers, and form fields to preserve layout and formatting.

## Assemblies and NuGet packages required

Refer to the following links for assemblies and NuGet packages required based on platforms to Extract data as Markdown file  using the .NET Word Library (DocIO).

* [PDF to Markdown Extraction assemblies](https://help.syncfusion.com/document-processing/data-extraction/smart-data-extractor/net/assemblies-required)
* [PDF to Markdown Extraction NuGet packages](https://help.syncfusion.com/document-processing/data-extraction/smart-data-extractor/net/nuget-packages-required)

## Extract Data as Markdown from PDF Document

To extract form fields across a PDF document using the **ExtractDataAsMarkdown** method of the **DataExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;
using System.Text;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
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
using Syncfusion.SmartFormRecognizer;
using System.Text;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-MD-from-PDF/.NET).


## PDF to Markdown Preservation Mapping

This section explains how common PDF elements are converted and preserved in Markdown format, ensuring that document structure and formatting remain consistent during the PDF to Markdown conversion process.

<table>
  <thead>
    <tr>
      <th><b>PDF Elements</b></th>
      <th><b>Preservation in Markdown</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header, Paragraph Title, Document Title</td>
      <td>Headings (H2)</td>
    </tr>
    <tr>
      <td>Paragraph</td>
      <td>Paragraph</td>
    </tr>
    <tr>
      <td>Image</td>
      <td>Image (base64 string)</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>Table</td>
    </tr>
    <tr>
      <td>Text Inline Styles</td>
      <td>Bold and Italic</td>
    </tr>
    <tr>
      <td>Link text without title text</td>
      <td>Links</td>
    </tr>
    <tr>
      <td>Code blocks, Footer, Page Number, List, Block quotes, Subscript, Superscript</td>
      <td>Text</td>
    </tr>
  </tbody>
</table>