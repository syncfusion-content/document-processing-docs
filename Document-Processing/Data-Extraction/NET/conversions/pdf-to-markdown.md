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

Refer to the following links for the assemblies and NuGet packages required based on your target platform to extract data as a Markdown file using the Syncfusion® Smart Data Extractor library.

* [PDF to Markdown Extraction assemblies](/document-processing/data-extraction/net/Assemblies-required)
* [PDF to Markdown Extraction NuGet packages](/document-processing/data-extraction/net/Nuget-packages-required)

## Extract Data as Markdown from PDF or Image

To extract structured data from a PDF document or image using the [ExtractDataAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsMarkdown_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-MD-from-PDF/.NET/Extract-data-as-MD-from-PDF/Program.cs" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using System.Text;

//Open the input PDF or image file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
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

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as Markdown.
    string data = extractor.ExtractDataAsMarkdown(stream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% endtabs %}

N> If you want to extract data from an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-MD-from-PDF/.NET).

## Extract a specific page to Markdown

The following code demonstrates how to use the [ExtractDataAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsMarkdown_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class to extract content from a selected page in a PDF and save it as a Markdown file by specifying its page index. Page numbers are 1-based and the range is inclusive.

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
    //Set the page index for extraction (example: page 2).
    extractor.PageRange = new int[,] { { 2, 2 } };
    //Extract data as Markdown using the API.
    string data = extractor.ExtractDataAsMarkdown(stream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
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
    //Set the page index for extraction (example: page 2).
    extractor.PageRange = new int[,] { { 2, 2 } };
    //Extract data as Markdown using the API.
    string data = extractor.ExtractDataAsMarkdown(stream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

			
{% endhighlight %}

{% endtabs %}

## Extract a range of pages to Markdown

The following code demonstrates how to use the [ExtractDataAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsMarkdown_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class to extract content from a range of pages in a PDF and save it as a Markdown file by specifying the page range. Page numbers are 1-based and the range is inclusive.

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
    //Extract data as Markdown using the API.
    string data = extractor.ExtractDataAsMarkdown(stream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
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
    //Extract data as Markdown using the API.
    string data = extractor.ExtractDataAsMarkdown(stream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}

## Customize image saving

The [ImageNodeVisited](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.SaveOptions.html#Syncfusion_DocIO_DLS_SaveOptions_ImageNodeVisited) event in the [SaveOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.SaveOptions.html) class (from the Syncfusion® DocIO library, used within Smart Data Extractor) allows control over how images are handled when generating a Markdown string. Create the output image folder before writing files. With this event, you can:

* Customize image names and storage paths, and save images externally using a FileStream.
* Replace Base64 content with a file path or URL for optimized storage and cloud reference.
* Generate a basic inbuilt report as a Markdown string, which can be directly consumed by LLMs or stored for further processing.

### Extract Markdown with external image saving

The following code shows how to use the [ExtractDataAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsMarkdown_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class with the [ImageNodeVisited](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.SaveOptions.html#Syncfusion_DocIO_DLS_SaveOptions_ImageNodeVisited) event to customize image saving while exporting PDF or image files as Markdown.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Office.Markdown;
using Syncfusion.SmartDataExtractor;

//Open the input PDF or Image file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Hook the event to customize image handling.
    extractor.SaveOptions.ImageNodeVisited += SaveImage;
    //Extract Markdown content as string.
    string data = extractor.ExtractDataAsMarkdown(inputStream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("DataToMarkdown.md", data);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Office.Markdown;
using Syncfusion.SmartDataExtractor;

//Open the input PDF or Image file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Hook the event to customize image handling.
    extractor.SaveOptions.ImageNodeVisited += SaveImage;
    //Extract Markdown content as string.
    string data = extractor.ExtractDataAsMarkdown(inputStream);
    //Save the extracted Markdown data into an output file.
    File.WriteAllText("DataToMarkdown.md", data);
}

{% endhighlight %}

{% endtabs %}

The following code shows how to implement the event handler to customize the image path and save images externally.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

//Event handler to save images externally
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    //Define output image path (customize naming logic as needed)
    string imagePath = @"D:\Temp\Image1.png";
    //Save the image stream to file
    using (FileStream fileStreamOutput = File.Create(imagePath))
    {
        args.ImageStream.CopyTo(fileStreamOutput);
    }
    //Set the URI to be used in the Markdown output
    args.Uri = imagePath;
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

//Event handler to save images externally
static void SaveImage(object sender, MdImageNodeVisitedEventArgs args)
{
    //Define output image path (customize naming logic as needed)
    string imagePath = @"D:\Temp\Image1.png";
    //Save the image stream to file
    using (FileStream fileStreamOutput = File.Create(imagePath))
    {
        args.ImageStream.CopyTo(fileStreamOutput);
    }
    //Set the URI to be used in the Markdown output
    args.Uri = imagePath;
}

{% endhighlight %}

{% endtabs %}

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