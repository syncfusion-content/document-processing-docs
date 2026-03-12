---
title: Features of Smart table Extractor | Syncfusion
description: Discover the key features of Syncfusion Smart Table Extractor, a .NET library designed to extract tables, forms, text, and images from documents.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
--- 

# Smart Table Extractor Features 

## Extract Tables from a PDF Documents

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

    // Set all three options together
    TableExtractionOptions options = new TableExtractionOptions();
    options.DetectBorderlessTables = true;
    options.PageRange = new int[,] { { 1, 5 } };
    options.ConfidenceThreshold = 0.75;

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
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
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set all three options together
    TableExtractionOptions options = new TableExtractionOptions();
    options.DetectBorderlessTables = true;
    options.PageRange = new int[,] { { 1, 5 } };
    options.ConfidenceThreshold = 0.75;

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %} 

## Extract Tables with detect border less tables

To extract structured table data from a PDF document that contains tables without visible borders using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code examples. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set DetectBorderlessTables
    TableExtractionOptions options = new TableExtractionOptions();
    options.DetectBorderlessTables = true;

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set DetectBorderlessTables
    TableExtractionOptions options = new TableExtractionOptions();
    options.DetectBorderlessTables = true;

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

## Extract Tables Within a Specific Page Range

To extract structured table data from a specific range of pages in a PDF document using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code example: 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set only PageRange
    TableExtractionOptions options = new TableExtractionOptions();
    options.PageRange = new int[,] { { 2, 4 } };

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set only PageRange
    TableExtractionOptions options = new TableExtractionOptions();
    options.PageRange = new int[,] { { 2, 4 } };

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}   

## Apply confidence threshold to extract the Table

To apply confidence thresholding when extracting table data from a PDF document using the **ExtractTableAsJson** method of the **TableExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set ConfidenceThreshold
    TableExtractionOptions options = new TableExtractionOptions();
    options.ConfidenceThreshold = 0.6;

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Table Extractor
    TableExtractor extractor = new TableExtractor();

    // Set ConfidenceThreshold
    TableExtractionOptions options = new TableExtractionOptions();
    options.ConfidenceThreshold = 0.6;

    extractor.TableExtractionOptions = options;

    // Extract and save
    string data = extractor.ExtractTableAsJson(stream);
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

## Extract table data asynchronously from a PDF document

To extract table data asynchronously with cancellation support using the **ExtractTableAsJsonAsync** method of the **TableExtractor** class, refer to the following code example:
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using System.Text;
using System.Threading;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Declare and configure the extractor and options
    TableExtractionOptions extractionOptions = new TableExtractionOptions();
    extractionOptions.DetectBorderlessTables = true;
    extractionOptions.ConfidenceThreshold = 0.6;

    TableExtractor tableExtractor = new TableExtractor();
    tableExtractor.TableExtractionOptions = extractionOptions;

    // Create cancellation token with timeout
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));

    // Call the async extraction API
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);

    // Save the extracted data as JSON
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using System.Text;
using System.Threading;
using Syncfusion.SmartTableExtractor;

using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Declare and configure the extractor and options
    TableExtractionOptions extractionOptions = new TableExtractionOptions();
    extractionOptions.DetectBorderlessTables = true;
    extractionOptions.ConfidenceThreshold = 0.6;

    TableExtractor tableExtractor = new TableExtractor();
    tableExtractor.TableExtractionOptions = extractionOptions;

    // Create cancellation token with timeout
    var cts = new CancellationTokenSource(TimeSpan.FromSeconds(30));

    // Call the async extraction API
    string data = await tableExtractor.ExtractTableAsJsonAsync(stream, cts.Token);

    // Save the extracted data as JSON
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}


{% endhighlight %}

{% endtabs %}  

