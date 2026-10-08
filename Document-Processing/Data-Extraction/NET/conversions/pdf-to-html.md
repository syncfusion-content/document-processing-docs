---
title: Convert PDF to HTML in .NET Smart Data Extractor | Syncfusion
description: Convert PDF documents to HTML using Smart Data Extractor. Transform PDF content into structured, semantic HTML in .NET.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Convert PDF to HTML in .NET Smart Data Extractor

HTML is a widely used format for structuring and presenting content on the web. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library supports PDF and image to HTML conversion in .NET, enabling seamless transformation of PDF files into clean, well-structured HTML markup while preserving the original layout, barcodes, tables, and images. This feature makes it easier to reuse content, improve accessibility, and integrate document data into .NET applications and business workflows.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required based on your target platform to convert a PDF or image as an HTML file using the Syncfusion® Smart Data Extractor library.

* [PDF to HTML Conversion assemblies](/document-processing/data-extraction/net/Assemblies-required)
* [PDF to HTML Conversion NuGet packages](/document-processing/data-extraction/net/Nuget-packages-required)

## Convert PDF or image to HTML Document

To convert a PDF document or image into HTML output using the **ExtractDataAsHtml** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Data-Extraction/Smart-Data-Extractor/Convert-data-as-HTML-from-PDF/.NET/Convert-data-as-HTML-from-PDF/Program.cs" %}

using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
  //Initialize the Data Extractor.
  DataExtractor extractor = new DataExtractor();
  //Extract data as HTML.
  string htmlContent = extractor.ExtractDataAsHtml(stream);
  //Save the extracted data into the HTML file.
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
  string htmlContent = extractor.ExtractDataAsHtml(stream);
  //Save the extracted data into the HTML file.
  File.WriteAllText("Output.html", htmlContent);
}

{% endhighlight %}

{% endtabs %}

N> To convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Convert-data-as-HTML-from-PDF/.NET).

## Convert a range of PDF pages to HTML

To convert a specific range of PDF pages from the PDF document into HTML using the **ExtractDataAsHtml** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
  //Initialize the Data Extractor.
  DataExtractor extractor = new DataExtractor();
  //Set the page range for conversion (example: pages 2 to 4).
  extractor.PageRange = new int[,] { { 2, 4 } };
  //Extract data as HTML.
  string htmlContent = extractor.ExtractDataAsHtml(stream);
  //Save the extracted data into the HTML file.
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
  //Set the page range for conversion (example: pages 2 to 4).
  extractor.PageRange = new int[,] { { 2, 4 } };
  //Extract data as HTML.
  string htmlContent = extractor.ExtractDataAsHtml(stream);
  //Save the extracted data into the HTML file.
  File.WriteAllText("Output.html", htmlContent);
}

{% endhighlight %}

{% endtabs %}

N> To convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

## Supported and Unsupported PDF Elements

The following table lists the PDF elements and their preservation details in the HTML output.

<table>
  <thead>
    <tr>
      <th><b>PDF Elements</b></th>
      <th><b>Supported</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header, Paragraph Title, Document Title</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Image</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Table</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Text Inline Styles</td>
      <td>Yes (Bold and Italic)</td>
    </tr>
    <tr>
      <td>Subscript, Superscript</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Underline, Strikethrough</td>
      <td>No</td>
    </tr>
    <tr>
      <td>List</td>
      <td>No (Converted as line-by-line text)</td>
    </tr>
    <tr>
      <td>Charts and Barcodes</td>
      <td>Yes (Preserved as images)</td>
    </tr>
    <tr>
      <td>Code blocks, Footer, Page Number</td>
      <td>Yes (Preserved as text)</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>No (Preserved as plain text)</td>
    </tr>
  </tbody>
</table>
