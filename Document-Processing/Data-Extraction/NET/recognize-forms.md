---
title: Working with Form Recognition | Syncfusion&reg;
description: Learn how to recognize forms and configure FormRecognizeOptions in the Syncfusion&reg; SmartFormRecognizer library to process and detect form elements with ease.
platform: document-processing
control: SmartFormRecognizer
documentation: UG
---

# Working with Form Recognition

## Recognize forms using PdfLoadedDocument
To recognize form data from a PDF or image and get the output as a `PdfLoadedDocument` using the **RecognizeFormAsPdfDocument** (synchronous) and **RecognizeFormAsPdfDocumentAsync** (asynchronous) methods of the **FormRecognizer** class, refer to the following code examples.

Example (synchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}
public  void Button_Click(object sender, RoutedEventArgs e)
 {
    //Initialize the Form Recognizer
    FormRecognizer smartFormRecognizer = new FormRecognizer();
    //Read the input PDF file as stream
    FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
    //Recognize the form and get the output as PDF stream
    PdfLoadedDocument pdfLoadedDocument = smartFormRecognizer.RecognizeFormAsPdfDocument(inputStream);
    //Save the loadeddocument
    pdfLoadedDocument.Save(Output.pdf);
 }
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Pdf/.NET).

Example (asynchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}
public  async void Button_Click(object sender, RoutedEventArgs e)
 {
    //Initialize the Form Recognizer
    FormRecognizer smartFormRecognizer = new FormRecognizer();
    //Read the input PDF file as stream
    FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
    //Recognize the form and get the output as PDF stream
    PdfLoadedDocument pdfLoadedDocument = await smartFormRecognizer.RecognizeFormAsPdfDocumentAsync(inputStream);
    //Save the loadeddocument
    pdfLoadedDocument.Save(Output.pdf);
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Pdf-async/.NET).

## Recognize forms using Stream
To recognize form data from a PDF or image and get the output as a `Stream` using the **RecognizeFormAsPdfStream** (synchronous) and **RecognizeFormAsPdfStreamAsync** (asynchronous) methods of the **FormRecognizer** class, refer to the following code examples.

Example (synchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}
public  void Button_Click(object sender, RoutedEventArgs e)
{
   //Initialize the Form Recognizer
   FormRecognizer smartFormRecognizer = new FormRecognizer();
   //Read the input PDF file as stream
   FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
   //Recognize the form and get the output as PDF stream
   Stream outputStream = smartFormRecognizer.RecognizeFormAsPdfStream(inputStream);
   //Save the output PDF stream to file
   using (FileStream fileStream = File.Create("Output.pdf"))
   {
     outputStream.Seek(0, SeekOrigin.Begin);
     outputStream.CopyTo(fileStream);
   }
}
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Stream/.NET).

Example (asynchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}
public  async void Button_Click(object sender, RoutedEventArgs e)
{
   //Initialize the Form Recognizer
   FormRecognizer smartFormRecognizer = new FormRecognizer();
   //Read the input PDF file as stream
   FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
   //Recognize the form and get the output as PDF stream
   Stream outputStream = await smartFormRecognizer.RecognizeFormAsPdfStreamAsync(inputStream);
   //Save the output PDF stream to file
   using (FileStream fileStream = File.Create("Output.pdf"))
   {
     outputStream.Seek(0, SeekOrigin.Begin);
     outputStream.CopyTo(fileStream);
   }
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-Stream-async/.NET).

## Recognize forms using JSON
To recognize form data from a PDF or image and get the output as a JSON string using the **RecognizeFormAsJson** (synchronous) and **RecognizeFormAsJsonAsync** (asynchronous) methods of the **FormRecognizer** class, refer to the following code examples.

Example (synchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}
public  void Button_Click(object sender, RoutedEventArgs e)
{
    //Initialize the Form Recognizer
    FormRecognizer smartFormRecognizer = new FormRecognizer();
    //Read the input PDF file as stream
    FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
    //Recognize the form and get the output as JSON string
    String outputJson = smartFormRecognizer.RecognizeFormAsJson(inputStream);
    //Save the outputJson
    File.Create("D:\\result.json").Close();
    File.WriteAllText("D:\\result.json", outputJson);
}
{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-JSON/.NET).

Example (asynchronous):

{% tabs %}
{% highlight c# tabtitle="C#" %}
public  async void Button_Click(object sender, RoutedEventArgs e)
{
    //Initialize the Form Recognizer
    FormRecognizer smartFormRecognizer = new FormRecognizer();
    //Read the input PDF file as stream
    FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
    //Recognize the form and get the output as JSON string
    String outputJson = await smartFormRecognizer.RecognizeFormAsJsonAsync(inputStream);
    //Save the outputJson
    File.Create("D:\\result.json").Close();
    File.WriteAllText("D:\\result.json", outputJson);

}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Recognize-forms-using-JSON-async/.NET).

## Async variants with CancellationToken
To recognize form data asynchronously with cancellation support using the **RecognizeFormAsPdfStreamAsync** method of the **FormRecognizer** class, refer to the following code example.

Example with cancellation token (PDF stream):

{% tabs %}
{% highlight c# tabtitle="C#" %}

public async Task RecognizeWithCancellationAsync()
{
    FormRecognizer recognizer = new FormRecognizer();

    using FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
    CancellationTokenSource cts = new CancellationTokenSource();
    cts.CancelAfter(TimeSpan.FromSeconds(5)); // cancel in 5 seconds
    CancellationToken token = cts.Token;
    using Stream resultStream = await recognizer.RecognizeFormAsPdfStreamAsync(inputStream, token);

    using FileStream fileStream = File.Create("Output.pdf");
    await resultStream.CopyToAsync(fileStream, token);
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Data-Extraction/Smart-Form-Recognizer/Asyncvariants-with-CancellationToken/.NET).

# Working with FormRecognizeOptions

`FormRecognizeOptions` provides configurable settings that control how the SmartFormRecognizer detects elements from a document. It allows you to enable or disable the detection of specific form controls such as checkboxes, radio buttons, textboxes, and signatures—while also letting you fine-tune the recognition results using a confidence threshold.

Additionally, it supports restricting processing to specific pages through an optional 1‑based inclusive PageRange. By adjusting these options, developers can optimize performance, reduce noise in results, and tailor form extraction precisely to the needs of their application.

## Properties

### DetectTextboxes
To disable textbox field detection in the **FormRecognizeOptions** of the **FormRecognizer** class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable textbox detection
recognizer.FormRecognizeOptions.DetectTextboxes = false;

{% endhighlight %}
{% endtabs %}

### DetectCheckboxes
To disable checkbox detection in the **FormRecognizeOptions** of the **FormRecognizer** class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable checkbox detection
recognizer.FormRecognizeOptions.DetectCheckboxes = false;

{% endhighlight %}
{% endtabs %}

### DetectRadioButtons
To disable radio button detection in the **FormRecognizeOptions** of the **FormRecognizer** class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable radio button detection
recognizer.FormRecognizeOptions.DetectRadioButtons = false;

{% endhighlight %}
{% endtabs %}

### DetectSignatures
To disable signature field detection in the **FormRecognizeOptions** of the **FormRecognizer** class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable signature detection
recognizer.FormRecognizeOptions.DetectSignatures = false;

{% endhighlight %}
{% endtabs %}

### ConfidenceThreshold
To set a minimum confidence score for detected form elements using the **ConfidenceThreshold** in the **FormRecognizeOptions** of the **FormRecognizer** class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Set a ConfidenceThreshold
recognizer.FormRecognizeOptions.ConfidenceThreshold = 0.9;

{% endhighlight %}
{% endtabs %}

### PageRange
To specify which pages to process using the **PageRange** in the **FormRecognizeOptions** of the **FormRecognizer** class, refer to the following code example.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Set a single page range – detects only the specified page
recognizer.FormRecognizeOptions.PageRange = new int[,] { { 3 }, { 8 } };

// Set a page range – detects content between the specified start and end page
recognizer.FormRecognizeOptions.PageRange = new int[,] { { 3, 8 } };

{% endhighlight %}
{% endtabs %}