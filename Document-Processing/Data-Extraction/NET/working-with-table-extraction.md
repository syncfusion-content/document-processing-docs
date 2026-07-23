---
title: Working with Table Extraction | Syncfusion
description: Syncfusion® Smart Table Extractor is a .NET library that extracts structured table data from PDF and image files with confidence scoring.
platform: document-processing
control: SmartTableExtractor
documentation: UG
keywords: Table Extraction, PDF, Image, Smart Table Extractor, Assemblies, NuGet Packages
--- 

# Working with Table Extraction

The Syncfusion<sup>&reg;</sup> Smart Table Extractor is a .NET library used to extract structured table data from PDF and image files.

To quickly get started with extracting table data from PDF and image files in ASP.NET Core using the Smart Table Extractor library, refer to this video tutorial:
{% youtube "https://www.youtube.com/watch?v=q1rs_8nTG5M" %}

## Extract Table Data as JSON from PDF or Image

To extract structured table data from a PDF document using the [ExtractTableAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsJson_System_IO_Stream_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code:

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Data-Extraction/Smart-Table-Extractor/Extract-tables-from-pdf-document/.NET/Extract-tables-from-pdf-document/Program.cs" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Table Extractor.
    TableExtractor extractor = new TableExtractor();
    // Extract table data from the PDF document as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    // Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Extract table data from the PDF document as JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %} 

N> To convert an image instead of a PDF, replace the input stream with the image file (for example, *Input.jpg* or *Input.png*). The rest of the code remains unchanged.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-tables-from-pdf-document/.NET).

## Extract Table Data as Markdown from PDF or Image

To extract structured table data from a PDF document using the [ExtractTableAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsMarkdown_System_IO_Stream_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code example.

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    // Extract table data from the PDF document as Markdown.
    string data = extractor.ExtractTableAsMarkdown(stream);
    // Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    // Extract table data from the PDF document as Markdown.
    string data = extractor.ExtractTableAsMarkdown(stream);
    // Save the extracted Markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-table-data-as-MD-from-PDF/.NET).

N> To convert an image instead of a PDF, replace the input stream with the image file (for example, *Input.jpg* or *Input.png*). The rest of the code remains unchanged.

## Extract Table Data within a Specific Page Range

### Extract as JSON 

To extract structured table data from a specific range of pages in a PDF document using the [ExtractTableAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsJson_System_IO_Stream_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code example: 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure table extraction options to specify the page range for detection.
    TableExtractionOptions options = new TableExtractionOptions();
    options.PageRange = new int[,] { { 2, 4 } };
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the specified page range as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure table extraction options to specify the page range for detection.
    TableExtractionOptions options = new TableExtractionOptions();
    options.PageRange = new int[,] { { 2, 4 } };
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the specified page range as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}   

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-tables-by-page-range/.NET).

### Extract as Markdown 

To extract structured table data from a specific range of pages in a PDF document or image using the [ExtractTableAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsMarkdown_System_IO_Stream_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Set the page range for extraction (pages 1 to 3).
    TableExtractionOptions options = new TableExtractionOptions();
    options.PageRange = new int[,] { { 1, 3 } };
    extractor.TableExtractionOptions = options;
    //Extract table data from the specified page range as a Markdown string.
    string data = extractor.ExtractTableAsMarkdown(stream);
    //Save the extracted output as a new Markdown file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}
		
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	//Initialize the Smart Table Extractor.
	TableExtractor extractor = new TableExtractor();
	//Set the page range for extraction (pages 1 to 3).
	TableExtractionOptions options = new TableExtractionOptions();
	options.PageRange = new int[,] { { 1, 3 } };
	extractor.TableExtractionOptions = options;
	//Extract table data from the specified page range as a Markdown string.
	string data = extractor.ExtractTableAsMarkdown(stream);
	//Save the extracted output as a new Markdown file.
	File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}

## Extract Table Data Asynchronously from PDF or Image

To extract table data asynchronously with cancellation support using the [ExtractTableAsJsonAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsJsonAsync_System_IO_Stream_System_Threading_CancellationToken_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code example:
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Syncfusion.SmartTableExtractor;

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor.
    TableExtractor tableExtractor = new TableExtractor();
    // Create a cancellation token with a timeout of 30 seconds to control the async operation.
    CancellationTokenSource cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));
    // Call the asynchronous extraction API to extract table data as a JSON string.
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);
    // Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Syncfusion.SmartTableExtractor;

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor.
    TableExtractor tableExtractor = new TableExtractor();
    // Create a cancellation token with a timeout of 30 seconds to control the async operation.
    CancellationTokenSource cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));
    // Call the asynchronous extraction API to extract table data as a JSON string.
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);
    // Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-table-data-async/.NET).


## Table Extraction Options

### Disable Borderless Table Detection

To disable detection of tables without visible borders in a PDF document or image using the [ExtractTableAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsJson_System_IO_Stream_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code examples.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure the table extraction option to disable borderless tables in the document.
    TableExtractionOptions options = new TableExtractionOptions();
    //By default *DetectBorderlessTables is true*
    options.DetectBorderlessTables = false;
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the PDF document as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure the table extraction option to detect border-less tables in the document.
    TableExtractionOptions options = new TableExtractionOptions();
    options.DetectBorderlessTables = true;
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the PDF document as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-border-less-table-detection/.NET).

### Apply Confidence Threshold for Table Data Extraction

To apply confidence thresholding when extracting table data from a PDF document using the [ExtractTableAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html#Syncfusion_SmartTableExtractor_TableExtractor_ExtractTableAsJson_System_IO_Stream_) method of the [TableExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartTableExtractor.TableExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure table extraction options to set the confidence threshold for detection.
    TableExtractionOptions options = new TableExtractionOptions();
    options.ConfidenceThreshold = 0.6f;
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the PDF document as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure table extraction options to set the confidence threshold for detection.
    TableExtractionOptions options = new TableExtractionOptions();
    options.ConfidenceThreshold = 0.6f;
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the PDF document as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Apply-confidence-threshold/.NET).

## PDF to Markdown Preservation Mapping

This section illustrates how table elements in PDF documents are converted and preserved in Markdown format, ensuring that document structure and formatting remain consistent during the PDF to Markdown conversion process.

<table>
  <thead>
    <tr>
      <th><b>PDF Elements</b></th>
      <th><b>Preservation in Markdown</b></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table</td>
      <td>Table</td>
    </tr>
    <tr>
      <td>Text Inline Styles</td>
      <td>Bold and Italic</td>
    </tr>
  </tbody>
</table>
