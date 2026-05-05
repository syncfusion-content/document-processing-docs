---
title: Extract Table Data from PDF and Image Files | Syncfusion
description: Syncfusion® Smart Table Extractor is a .NET library that extracts structured table data from PDF and image files with confidence scoring.
platform: document-processing
control: SmartTableExtractor
documentation: UG
keywords: Table Extraction, PDF, Image, Smart Table Extractor, Assemblies, NuGet Packages
--- 

# Extract Table Data from PDF and Image Files 

## Extract Tables from PDF Document

To extract structured table data from a PDF document using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code 

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();
    //Extract table data from the PDF document as JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Extract table data from the PDF document as JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-tables-from-pdf-document/.NET).

## Extract Tables with Border-less Table Detection

To extract structured table data from a PDF document that contains tables without visible borders using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code examples. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
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

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
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

## Extract Tables within Specific Page Range

To extract structured table data from a specific range of pages in a PDF document using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code example: 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
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

using System.IO;
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

## Apply Confidence Threshold for Table Data Extraction

To apply confidence thresholding when extracting table data from a PDF document using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure table extraction options to set the confidence threshold for detection.
    TableExtractionOptions options = new TableExtractionOptions();
    options.ConfidenceThreshold = 0.6;
    //Assign the configured options to the extractor.
    extractor.TableExtractionOptions = options;
    //Extract table data from the PDF document as a JSON string.
    string data = extractor.ExtractTableAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor.
    TableExtractor extractor = new TableExtractor();
    //Configure table extraction options to set the confidence threshold for detection.
    TableExtractionOptions options = new TableExtractionOptions();
    options.ConfidenceThreshold = 0.6;
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

## Extract Table Data Asynchronously from PDF Document

To extract table data asynchronously with cancellation support using the **ExtractTableAsJsonAsync** method of the **TableExtractor** class, refer to the following code example:
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using System.Threading;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor and assign the configured options.
    TableExtractor tableExtractor = new TableExtractor();
    //Create a cancellation token with a timeout of 30 seconds to control the async operation.
    CancellationTokenSource cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));
    //Call the asynchronous extraction API to extract table data as a JSON string.
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using System.Threading;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Table Extractor and assign the configured options.
    TableExtractor tableExtractor = new TableExtractor();
    //Create a cancellation token with a timeout of 30 seconds to control the async operation.
    CancellationTokenSource cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));
    //Call the asynchronous extraction API to extract table data as a JSON string.
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-table-data-async/.NET).

## Extract Table data as Markdown from PDF Document

To extract structured table data from a PDF document using the **ExtractTableAsMarkdown** method of the **TableExtractor** class, refer to the following code 

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();
    //Extract table data from the PDF document as markdown.
    string data = extractor.ExtractTableAsMarkdown(stream);
    //Save the extracted markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();
    //Extract table data from the PDF document as markdown.
    string data = extractor.ExtractTableAsMarkdown(stream);
    //Save the extracted markdown data into an output file.
    File.WriteAllText("Output.md", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Table-Extractor/Extract-table-data-as-MD-from-PDF/.NET).


## PDF to Markdown Preservation Mapping

This section illustrates how table elements in PDF documents are converted and preserved in Markdown format, ensuring that document structure and formatting remain consistent during the PDF‑to‑Markdown conversion process.

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
