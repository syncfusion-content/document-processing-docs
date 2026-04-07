---
title: Features of Smart data Extractor | Syncfusion
description: Discover the key features of Syncfusion Smart Data Extractor, a .NET library for extracting tables, forms, text, and images.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies
--- 

# Smart Data Extractor Features 

## Extract Data from a PDF Document

To extract structured data such as text, form fields, tables and images from an entire PDF document using the **ExtractDataAsPdfDocument** method of the **DataExtractor** class, refer to the following code example:

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument document = extractor.ExtractDataAsPdfDocument(inputStream);
    //Save the extracted output as a new PDF file.
    document.Save("Output.pdf");
    //Close the document to release resources.
    document.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument document = extractor.ExtractDataAsPdfDocument(inputStream);
    //Save the extracted output as a new PDF file.
    document.Save("Output.pdf");
    //Close the document to release resources.
    document.Close(true);
}

{% endhighlight %}

{% endtabs %} 

## Extract Data as Stream

To extract structured data from a PDF document and return the output as a stream using the **ExtractDataAsPdfStream** method of the **DataExtractor** class, refer to the following example.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data and return as a PDF stream.
    Stream pdfStream = extractor.ExtractDataAsPdfStream(inputStream);

    //Save the extracted PDF stream into an output file.
    using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
    {
        pdfStream.CopyTo(outputStream);
    }
}
 
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data and return as a PDF stream.
    Stream pdfStream = extractor.ExtractDataAsPdfStream(inputStream);

    //Save the extracted PDF stream into an output file.
    using (FileStream outputStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write))
    {
        pdfStream.CopyTo(outputStream);
    }
}
 			
{% endhighlight %}

{% endtabs %}

## Extract Data as JSON from PDF Document

To extract form fields across a PDF document using the **ExtractDataAsJson** method of the **DataExtractor** class with form recognition options, refer to the following code example:

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
    //Extract form data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
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
    //Extract form data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% endtabs %}

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

## Form Detection

To extract form fields across a PDF document and save them as a PDF output using the **ExtractDataAsPdfDocument** method of the **DataExtractor** class with form recognition options, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //Enable form detection in the document to identify form fields.
    //By default - true
    extractor.EnableFormDetection = false;
    //Extract form data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    //Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    //Close the document to release resources.
    pdf.Close(true);
}


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //Enable form detection in the document to identify form fields.
    //By default - true
    extractor.EnableFormDetection = false;
    //Extract form data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    //Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    //Close the document to release resources.
    pdf.Close(true); 
}

{% endhighlight %}

{% endtabs %}  

## Table Detection

To extract tables across a PDF document and save them as a PDF output using the **ExtractDataAsPdfDocument** method of the **DataExtractor** class with table extraction options, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Data Extractor.
	DataExtractor extractor = new DataExtractor();

	// Enable table detection and set confidence threshold.
	//By default - true
	extractor.EnableTableDetection = false;
	// Extract data and return as a loaded PDF document.
	PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

	// Save the extracted output as a new PDF file.
	pdf.Save("Output.pdf");
	// Close the document to release resources.
	pdf.Close(true);
}


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();

    // Enable table detection and set confidence threshold.
    //By default - true
    extractor.EnableTableDetection = false;
    // Extract data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    // Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    // Close the document to release resources.
    pdf.Close(true);
}

{% endhighlight %}

{% endtabs %}  

## Extract Data with different Form Recognizer options

To extract structured data from a PDF document using different Form Recognizer options with the **ExtractDataAsPdfDocument** method of the **DataExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //Enable form detection in the document to identify form fields.
    extractor.EnableFormDetection = true;
    
    //Configure form recognition options for advanced detection.
    FormRecognizeOptions formOptions = new FormRecognizeOptions();
    //Recognize forms across pages 1 to 5 in the document.
    formOptions.PageRange = new int[,] { { 1, 5 } };
    //Set confidence threshold for form recognition to filter results.
    formOptions.ConfidenceThreshold = 0.6;
    //Enable detection of signatures within the document.
    formOptions.DetectSignatures = true;
    //Enable detection of textboxes within the document.
    formOptions.DetectTextboxes = true;
    //Enable detection of checkboxes within the document.
    formOptions.DetectCheckboxes = true;
    //Enable detection of radio buttons within the document.
    formOptions.DetectRadioButtons = true;
    //Assign the configured form recognition options to the extractor.
    extractor.FormRecognizeOptions = formOptions;

    //Extract form data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    //Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    //Close the document to release resources.
    pdf.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	//Initialize the Smart Data Extractor.
	DataExtractor extractor = new DataExtractor();

	//Enable form detection in the document to identify form fields.
	extractor.EnableFormDetection = true;
	
	//Configure form recognition options for advanced detection.
	FormRecognizeOptions formOptions = new FormRecognizeOptions();
	//Recognize forms across pages 1 to 5 in the document.
	formOptions.PageRange = new int[,] { { 1, 5 } };
	//Set confidence threshold for form recognition to filter results.
	formOptions.ConfidenceThreshold = 0.6;
	//Enable detection of signatures within the document.
	formOptions.DetectSignatures = true;
	//Enable detection of textboxes within the document.
	formOptions.DetectTextboxes = true;
	//Enable detection of checkboxes within the document.
	formOptions.DetectCheckboxes = true;
	//Enable detection of radio buttons within the document.
	formOptions.DetectRadioButtons = true;
	//Assign the configured form recognition options to the extractor.
	extractor.FormRecognizeOptions = formOptions;

	//Extract form data and return as a loaded PDF document.
	PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

	//Save the extracted output as a new PDF file.
	pdf.Save("Output.pdf");
	//Close the document to release resources.
	pdf.Close(true);
}

{% endhighlight %}

{% endtabs %}  

## Extract Data with different Table Extraction options

To extract structured table data from a PDF document using advanced Table Extraction options with the **ExtractDataAsPdfDocument** method of the **DataExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}
using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	// Initialize the Smart Data Extractor.
	DataExtractor extractor = new DataExtractor();

	// Enable table detection and set confidence threshold.
	extractor.EnableTableDetection = true;

	// Configure table extraction options.
	TableExtractionOptions tableOptions = new TableExtractionOptions();
	// Extract tables across pages 1 to 5.
	tableOptions.PageRange = new int[,] { { 1, 5 } };
	// Set confidence threshold for table extraction.
	tableOptions.ConfidenceThreshold = 0.6;
	// Enable detection of borderless tables.
	tableOptions.DetectBorderlessTables = true;
	// Assign the table extraction options to the extractor.
	extractor.TableExtractionOptions = tableOptions;
	// Extract data and return as a loaded PDF document.
	PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

	// Save the extracted output as a new PDF file.
	pdf.Save("Output.pdf");
	// Close the document to release resources.
	pdf.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	// Initialize the Smart Data Extractor.
	DataExtractor extractor = new DataExtractor();

	// Enable table detection and set confidence threshold.
	extractor.EnableTableDetection = true;

	// Configure table extraction options.
	TableExtractionOptions tableOptions = new TableExtractionOptions();
	// Extract tables across pages 1 to 5.
	tableOptions.PageRange = new int[,] { { 1, 5 } };
	// Set confidence threshold for table extraction.
	tableOptions.ConfidenceThreshold = 0.6;
	// Enable detection of borderless tables.
	tableOptions.DetectBorderlessTables = true;
	// Assign the table extraction options to the extractor.
	extractor.TableExtractionOptions = tableOptions;
	// Extract data and return as a loaded PDF document.
	PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

	// Save the extracted output as a new PDF file.
	pdf.Save("Output.pdf");
	// Close the document to release resources.
	pdf.Close(true);
}

{% endhighlight %}

{% endtabs %}  

## Apply Confidence Threshold to Extract the Data

To apply confidence thresholding when extracting data from a PDF document using the **ExtractDataAsPdfDocument** method of the **DataExtractor** class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//  Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //  Apply confidence threshold to extract the data.
    // Only elements with confidence >= 0.75 will be included in the results.
    //default confidence threshold value is 0.6
    extractor.ConfidenceThreshold = 0.75;
    //  Extract data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    // Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    // Close the document to release resources.
    pdf.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//  Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();

    //  Apply confidence threshold to extract the data.
    // Only elements with confidence >= 0.75 will be included in the results.
    //default confidence threshold value is 0.6
    extractor.ConfidenceThreshold = 0.75;
    //  Extract data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    // Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    // Close the document to release resources.
    pdf.Close(true);
}

{% endhighlight %}

{% endtabs %}  

## Extract Data Within a Specific Page Range

To extract data from a specific range of pages in a PDF document using the ExtractDataAsPdfDocument method of the DataExtractor class, refer to the following code example:
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    
    //Set the page range for extraction (pages 1 to 3).
    extractor.PageRange = new int[,] { { 1, 3 } };
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    //Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    //Close the document to release resources.
    pdf.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Smart Data Extractor.
    DataExtractor extractor = new DataExtractor();
    
    //Set the page range for extraction (pages 1 to 3).
    extractor.PageRange = new int[,] { { 1, 3 } };
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument pdf = extractor.ExtractDataAsPdfDocument(stream);

    //Save the extracted output as a new PDF file.
    pdf.Save("Output.pdf");
    //Close the document to release resources.
    pdf.Close(true);
}

{% endhighlight %}

{% endtabs %}  

