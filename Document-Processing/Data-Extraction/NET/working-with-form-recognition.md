---
title: Working with Form Recognition | Syncfusion&reg;
description: Learn how to recognize forms and configure FormRecognizeOptions in Syncfusion® SmartFormRecognizer to detect and process form elements easily.
platform: document-processing
control: SmartFormRecognizer
documentation: UG
---

# Working with Form Recognition

The Syncfusion<sup>&reg;</sup> Smart Form Recognizer is a C# library for .NET that reliably extracts form data from PDFs and scanned images. It detects text fields, checkboxes, radio buttons, and signature regions.
To quickly get started with recognizing form data from PDF and image files using the Smart Form Recognizer library, refer to this video tutorial:
{% youtube "https://www.youtube.com/watch?v=1F1jRW3JIB4" %}

## Recognize Forms as JSON

To recognize form data from a PDF or image and get the output as a JSON string using the [RecognizeFormAsJson](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsJson_System_IO_Stream_) (synchronous) and [RecognizeFormAsJsonAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsJsonAsync_System_IO_Stream_System_Threading_CancellationToken_) (asynchronous) methods of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code examples.

Example (synchronous):

{% tabs %}
{% highlight c# tabtitle="C#" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/refs/heads/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-JSON/.NET/Recognize-forms-using-JSON/Program.cs" %}


using Syncfusion.SmartFormRecognizer;

// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
	// Initialize the Form Recognizer.
	FormRecognizer recognizer = new FormRecognizer();
	// Recognize the form and get the output as a JSON string.
	string outputJson = recognizer.RecognizeFormAsJson(inputStream);
	// Save the extracted JSON data into an output file.
	File.WriteAllText("result.json", outputJson);
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-JSON/.NET).

Example (asynchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartFormRecognizer;

// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
	// Initialize the Form Recognizer.
	FormRecognizer recognizer = new FormRecognizer();
	// Recognize the form asynchronously and get the output as a JSON string.
	string outputJson = await recognizer.RecognizeFormAsJsonAsync(inputStream);
	// Save the extracted JSON data into an output file.
	File.WriteAllText("result.json", outputJson);
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-JSON-async/.NET).


## Recognize Forms from PDF or Image

### Recognize forms as PDF

To recognize form data from a PDF or image and get the output as a `PdfLoadedDocument` using the [RecognizeFormAsPdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsPdfDocument_System_IO_Stream_) (synchronous) and [RecognizeFormAsPdfDocumentAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsPdfDocumentAsync_System_IO_Stream_System_Threading_CancellationToken_) (asynchronous) methods of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code examples.

Example (synchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartFormRecognizer;
using Syncfusion.Pdf.Parsing;

// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
	// Initialize the Form Recognizer.
	FormRecognizer recognizer = new FormRecognizer();
	// Recognize the form and get the output as a PDF document.
	PdfLoadedDocument document = recognizer.RecognizeFormAsPdfDocument(inputStream);
	// Save the recognized document.
	document.Save("Output.pdf");
	// Close the document.
	document.Close();
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Pdf/.NET).

Example (asynchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.SmartFormRecognizer;

// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
	// Initialize the Form Recognizer.
	FormRecognizer recognizer = new FormRecognizer();
	// Recognize the form asynchronously and get the output as a PDF document.
	PdfLoadedDocument document = await recognizer.RecognizeFormAsPdfDocumentAsync(inputStream);
	// Save the recognized document.
	document.Save("Output.pdf");
	// Close the document.
	document.Close();
}


{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Pdf-async/.NET).

### Recognize forms as Stream

To recognize form data from a PDF or image and get the output as a `Stream` using the [RecognizeFormAsPdfStream](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsPdfStream_System_IO_Stream_) (synchronous) and [RecognizeFormAsPdfStreamAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsPdfStreamAsync_System_IO_Stream_System_Threading_CancellationToken_) (asynchronous) methods of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code examples.

Example (synchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartFormRecognizer;

// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
	// Initialize the Form Recognizer.
	FormRecognizer recognizer = new FormRecognizer();
	// Recognize the form and get the output as a PDF stream.
	using (Stream outputStream = recognizer.RecognizeFormAsPdfStream(inputStream))
	{
		// Save the output PDF stream to a file.
		using (FileStream fileStream = File.Create("Output.pdf"))
		{
			outputStream.Seek(0, SeekOrigin.Begin);
			outputStream.CopyTo(fileStream);
		}
	}
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Stream/.NET).

Example (asynchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartFormRecognizer;

// Open the input PDF file as a stream.
using (FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite))
{
    // Initialize the Form Recognizer.
    FormRecognizer recognizer = new FormRecognizer();
    // Recognize the form asynchronously and get the output as a PDF stream.
    using (Stream outputStream = await recognizer.RecognizeFormAsPdfStreamAsync(inputStream))
    {
        // Save the output PDF stream to a file.
        using (FileStream fileStream = File.Create("Output.pdf"))
        {
            outputStream.Seek(0, SeekOrigin.Begin);
            outputStream.CopyTo(fileStream);
        }
    }
}


{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Stream-async/.NET).


## Async variants with CancellationToken

To recognize form data asynchronously with cancellation support using the [RecognizeFormAsPdfStreamAsync](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_RecognizeFormAsPdfStreamAsync_System_IO_Stream_System_Threading_CancellationToken_) method of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

Example with cancellation token (PDF stream):

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.SmartFormRecognizer;

// Open the input PDF file as a stream.
using FileStream inputStream = new FileStream(Path.GetFullPath("Input.pdf"), FileMode.Open, FileAccess.Read);
// Initialize the Form Recognizer.
FormRecognizer recognizer = new FormRecognizer();
// Create a cancellation token that cancels after 5 seconds.
using CancellationTokenSource cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
CancellationToken token = cts.Token;
// Recognize the form asynchronously and get the output as a PDF stream.
using Stream resultStream = await recognizer.RecognizeFormAsPdfStreamAsync(inputStream, token);
// Save the output PDF stream to a file.
using FileStream fileStream = File.Create(Path.GetFullPath("Output.pdf"));
await resultStream.CopyToAsync(fileStream, token);

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Asyncvariants-with-CancellationToken/.NET).

## Working with Form Recognize Options

`FormRecognizeOptions` provides configurable settings that control how the SmartFormRecognizer detects elements from a document. It allows you to enable or disable the detection of specific form controls such as checkboxes, radio buttons, textboxes, and signatures—while also letting you fine-tune the recognition results using a confidence threshold.

Additionally, it supports restricting processing to specific pages through an optional 1‑based inclusive PageRange. By adjusting these options, developers can optimize performance, reduce noise in results, and tailor form extraction precisely to the needs of their application.

### Disable Textbox Detection

To disable textbox field detection in the [FormRecognizeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_FormRecognizeOptions) of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable textbox detection
recognizer.FormRecognizeOptions.DetectTextboxes = false;

{% endhighlight %}
{% endtabs %}

### Disable Checkbox Detection
To disable checkbox detection in the [FormRecognizeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_FormRecognizeOptions) of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable checkbox detection
recognizer.FormRecognizeOptions.DetectCheckboxes = false;

{% endhighlight %}
{% endtabs %}

### Disable RadioButtons Detection
To disable radio button detection in the [FormRecognizeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_FormRecognizeOptions) of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable radio button detection
recognizer.FormRecognizeOptions.DetectRadioButtons = false;

{% endhighlight %}
{% endtabs %}

### Disable Signature Detection
To disable signature field detection in the [FormRecognizeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_FormRecognizeOptions) of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable signature detection
recognizer.FormRecognizeOptions.DetectSignatures = false;

{% endhighlight %}
{% endtabs %}

### Set Confidence Threshold

To set a minimum confidence score for detected form elements using the [ConfidenceThreshold](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizeOptions.html#Syncfusion_SmartFormRecognizer_FormRecognizeOptions_ConfidenceThreshold) in the [FormRecognizeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_FormRecognizeOptions) of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Set a ConfidenceThreshold
recognizer.FormRecognizeOptions.ConfidenceThreshold = 0.9;

{% endhighlight %}
{% endtabs %}

### Set Page Range

To specify which pages to process using the **PageRange** in the [FormRecognizeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html#Syncfusion_SmartFormRecognizer_FormRecognizer_FormRecognizeOptions) of the [FormRecognizer](https://help.syncfusion.com/cr/document-processing/Syncfusion.SmartFormRecognizer.FormRecognizer.html) class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Set a single page range – detects only the specified page
recognizer.FormRecognizeOptions.PageRange = new int[,] { { 3 }, { 8 } };

// Set a page range – detects content between the specified start and end page
recognizer.FormRecognizeOptions.PageRange = new int[,] { { 3, 8 } };

{% endhighlight %}
{% endtabs %}