---
title: Convert PDF to Word in .NET Smart Data Extractor | Syncfusion
description: Convert PDF documents to Word using Smart Data Extractor. Transform PDF content into editable, structured Word documents in .NET.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
---

# Convert PDF to Word in .NET Smart Data Extractor

Word (DOCX) is a widely used format for creating and editing professional documents. The Syncfusion<sup>&reg;</sup> Smart Data Extractor library supports PDF to Word conversion in .NET, enabling seamless transformation of PDF files into fully editable Word documents while preserving the original layout, barcodes, tables and images. This feature makes it easier to reuse content, improve accessibility, and integrate document data into .NET applications and business workflows.

## Assemblies and NuGet packages required

Refer to the following links for the assemblies and NuGet packages required based on your target platform to extract data as a Word file using the Syncfusion® Smart Data Extractor library.

* [PDF to Word Conversion assemblies](/document-processing/data-extraction/net/Assemblies-required)
* [PDF to Word Conversion NuGet packages](/document-processing/data-extraction/net/Nuget-packages-required)

## Convert PDF or Image to Word Document

To convert a PDF document or image into a Word using the **ExtractDataAsWordDocument** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

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

N> If you want to convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.


## Extract a range of pages to Word

To extract data from a specific range of pages in a PDF document using the **ExtractDataAsWordDocument**  method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.DocIO.DLS;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //Set the page range for conversion (example: pages 2 to 4).
    extractor.PageRange = new int[,] { { 2, 4 } };
    //Convert the selected pages to a Word document.
    WordDocument document = extractor.ExtractDataAsWordDocument(stream);
    //Save the Word document.
    using (FileStream outputStream = new FileStream("Output.docx", FileMode.Create, FileAccess.Write))
    {
        document.Save(outputStream, FormatType.Docx);
    }
    document.Close();
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.DocIO.DLS;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Set the page range for conversion (example: pages 2 to 4).
    extractor.PageRange = new int[,] { { 2, 4 } };
    //Convert the selected pages to a Word document.
    WordDocument document = extractor.ExtractDataAsWordDocument(stream);
    //Save the Word document.
    using (FileStream outputStream = new FileStream("Output.docx", FileMode.Create, FileAccess.Write))
    {
        document.Save(outputStream, FormatType.Docx);
    }
    document.Close();
}

{% endhighlight %}

{% endtabs %}

N> If you want to convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

## Convert PDF or Image to HTML Document 

To convert a PDF document or image into HTML output using the **ExtractDataAsHtml** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

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

N> If you want to convert an image instead of a PDF, replace the input stream with the image file (for example, Input.jpg or Input.png). The rest of the code remains unchanged.

## Supported and Unsupported PDF Elements

The following table lists the PDF elements and their preservation details in the Word document.

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
      <td>No (Converted as Line-by-line text)</td>
    </tr>
    <tr>
      <td>Charts and Barcodes</td>
      <td>Yes (preserved as images)</td>
    </tr>
    <tr>
      <td>Code blocks, Footer, Page Number</td>
      <td>Yes (preserved as text)</td>
    </tr>
    <tr>
      <td>Link</td>
      <td>No (Preserved as plain text)</td>
    </tr>
  </tbody>
</table>
