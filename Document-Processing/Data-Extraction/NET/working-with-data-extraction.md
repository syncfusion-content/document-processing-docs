---
title: Working with Data Extraction | Syncfusion
description: Syncfusion® Smart Data Extractor is a .NET library that extracts text, tables, forms, and images from PDF and image files with structured outputs.
platform: document-processing
control: SmartDataExtractor
documentation: UG
keywords: Assemblies

---

# Working with Data Extraction

## Extract Data as JSON from PDF or Image

The **Smart Data Extractor** enables you to process PDF documents or scanned images and export the structured content as JSON.  
This section covers two scenarios:
- Extracting data as JSON from a **PDF document**.
- Extracting data as JSON from an **image**.

### Extract Data as JSON from PDF

To extract structured data from a PDF document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-JSON-from-PDF/.NET/Extract-data-as-JSON-from-PDF-document/Program.cs" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();    
    //Extract data as JSON.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}
			
{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-JSON-from-PDF/.NET).

### Extract Data as JSON from an Image

To extract structured data from an image document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code examples. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

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

## Extract Data as Markdown from PDF or Image

The **Smart Data Extractor** enables you to process PDF documents or scanned images and export the structured content as Markdown (MD).

This section covers two scenarios:
- Extracting data as Markdown from a PDF document.
- Extracting data as Markdown from an image.

### Extract Data as Markdown from PDF

To extract structured data from a PDF document using the [ExtractDataAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsMarkdown_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

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

{% highlight c# tabtitle="C# [Windows-specific]" %}

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-MD-from-PDF/.NET).

### Extract Data as Markdown from Image

To extract structured data from an image file using the [ExtractDataAsMarkdown](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsMarkdown_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("Input.png", FileMode.Open, FileAccess.Read))
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

using System.Text;
using Syncfusion.SmartDataExtractor;

//Open the input image file as a stream.
using (FileStream stream = new FileStream("Input.png", FileMode.Open, FileAccess.Read))
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

### Extract Data as MarkdownDocument Instance

To get a structured **MarkdownDocument** from a PDF or image using the **ExtractDataAsMarkdownDocument** method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.Office.Markdown;

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    // Extract data as MarkdownDocument.
    MarkdownDocument markdownDocument = extractor.ExtractDataAsMarkdownDocument(stream);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using System.IO;
using Syncfusion.SmartDataExtractor;
using Syncfusion.Office.Markdown;

// Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    // Extract data as MarkdownDocument.
    MarkdownDocument markdownDocument = extractor.ExtractDataAsMarkdownDocument(stream);
}

{% endhighlight %}

{% endtabs %}  

## Extract Data from PDF or Image and Save as Digital PDF

The **Smart Data Extractor** allows you to process PDF documents or scanned images and generate a digital PDF output. 

In this section, you will learn how to:
- Extract structured content and save it directly as a **PDF document**.
- Work with the extracted content as a **PDF stream** for flexible storage or further processing.


### Extract Data from PDF Document

To extract structured data such as text, form fields, tables and images from an entire PDF document using the [ExtractDataAsPdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsPdfDocument_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %}   

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument document = extractor.ExtractDataAsPdfDocument(inputStream);
    //Save the extracted output as a new PDF file.
    document.Save("Output.pdf");
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument document = extractor.ExtractDataAsPdfDocument(inputStream);
    //Save the extracted output as a new PDF file.
    document.Save("Output.pdf");
    //Close the document.
    document.Close(true);
}

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-from-PDF-document/.NET).

### Extract Data as Stream

To extract structured data from a PDF document and return the output as a stream using the [ExtractDataAsPdfStream](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsPdfStream_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following example.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Data Extractor.
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

using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read, FileShare.Read))
{
    //Initialize the Data Extractor.
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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-as-stream/.NET).


## Disable Form Detection

To disable form field detection while extracting structured data from a PDF document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Disable form detection in the document to identify form fields.
    //By default - true
    extractor.EnableFormDetection = false;
    //Extract form data and return as a loaded json file.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Disable form detection in the document to identify form fields.
    //By default - true
    extractor.EnableFormDetection = false;
    //Extract form data and return as a loaded json file.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Disable-Form-detection/.NET).

## Disable Table Detection

To disable table detection while extracting structured data from a PDF document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor.
	DataExtractor extractor = new DataExtractor();
	// Disable table detection.
	//By default - true
	extractor.EnableTableDetection = false;
	// Extract data and return as a loaded json document.
	string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the  Data Extractor.
    DataExtractor extractor = new DataExtractor();
    // Disable table detection.
    //By default - true
    extractor.EnableTableDetection = false;
    // Extract data and return as a loaded json file.
	string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Disable-Table-detection/.NET).

## Extract Data with Form Recognizer options

To extract structured data from a PDF document using different Form Recognizer options with the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
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
    //Extract form data and return as a loaded json file.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartFormRecognizer;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	//Initialize the Data Extractor.
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
	//Extract form data and return as a loaded json document.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Different-form-recognizer-options/.NET).

## Extract Data with Table Extraction options

To extract structured table data from a PDF document using advanced Table Extraction options with the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	// Initialize the Data Extractor.
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
	// Extract data and return as a loaded json file.
	string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;
using Syncfusion.SmartTableExtractor;

// Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
	// Initialize the Data Extractor.
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
	// Extract data and return as a loaded json document.
	string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Different-table-extraction-options/.NET).

## Apply Confidence Threshold for Data Extraction

To apply confidence thresholding when extracting data from a PDF document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//  Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //  Apply confidence threshold to extract the data.
    // Only elements with confidence >= 0.75 will be included in the results.
    //default confidence threshold value is 0.6
    extractor.ConfidenceThreshold = 0.75;
    //  Extract data and return as a loaded json document.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//  Load the input PDF file.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    // Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //  Apply confidence threshold to extract the data.
    // Only elements with confidence >= 0.75 will be included in the results.
    //default confidence threshold value is 0.6
    extractor.ConfidenceThreshold = 0.75;
    //  Extract data and return as a loaded json file.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Apply-Confidence-threshold/.NET).

## Extract Data within a Specific Page Range

To extract data from a specific range of pages in a PDF document using the [ExtractDataAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsJson_System_IO_Stream_) method of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, refer to the following code example:
 
{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Set the page range for extraction (pages 1 to 3).
    extractor.PageRange = new int[,] { { 1, 3 } };
    //Extract data and return as a loaded json document.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Set the page range for extraction (pages 1 to 3).
    extractor.PageRange = new int[,] { { 1, 3 } };
    //Extract data and return as a loaded json document.
    string data = extractor.ExtractDataAsJson(stream);
    //Save the extracted JSON data into an output file.
    File.WriteAllText("Output.json", data, Encoding.UTF8);
}

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Data-Extractor/Extract-data-within-specific-range/.NET).

## Configure OCR Processing Settings

To configure OCR settings in .NET using the **OCRProcessor** property of the [DataExtractor](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html) class, use the following C# example to initialize the OCR processor, set language and Tesseract version, and extract structured data from a PDF document with the [ExtractDataAsPdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartDataExtractor.DataExtractor.html#Syncfusion_SmartDataExtractor_DataExtractor_ExtractDataAsPdfDocument_System_IO_Stream_) method.


{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.OCRProcessor;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Initialize the OCR processor.
    OCRProcessor processor = new OCRProcessor();
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set Tesseract OCR engine version.
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
    //Assign the configured OCR processor to the Data Extractor.
    extractor.OCRProcessor = processor;
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument doc = extractor.ExtractDataAsPdfDocument(stream);
    //Save the extracted output as a new PDF file.
    doc.Save("Output.pdf");
    //Close the document.
    doc.Close(true);
}

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.OCRProcessor;
using Syncfusion.SmartDataExtractor;

//Open the input PDF file as a stream.
using (FileStream stream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read))
{
    //Initialize the Data Extractor.
    DataExtractor extractor = new DataExtractor();
    //Initialize the OCR processor.
    OCRProcessor processor = new OCRProcessor();
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Set Tesseract OCR engine version.
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
    //Assign the configured OCR processor to the Data Extractor.
    extractor.OCRProcessor = processor;
    //Extract data and return as a loaded PDF document.
    PdfLoadedDocument doc = extractor.ExtractDataAsPdfDocument(stream);
    //Save the extracted output as a new PDF file.
    doc.Save("Output.pdf");
    //Close the document.
    doc.Close(true);
}

{% endhighlight %}

{% endtabs %}  


