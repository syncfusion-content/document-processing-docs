---
title: Working with Recognize methods in SmartFormRecognizer| Syncfusion&reg;
description: Learn how to effectively use the Recognize methods in the Syncfusion&reg; SmartFormRecognizer library to process and detects from forms with ease.
platform: document-processing
control: SmartFormRecognizer
documentation: UG
---

# Recognize Forms Using SmartFormRecognizer

The `FormRecognizer` exposes several convenience methods to recognize forms from a `Stream` input. Each method accepts an input `Stream` (PDF or image) and returns recognized output either as a `PdfLoadedDocument`, a `Stream` containing PDF data, or as a JSON string.

Below each method signature you'll find a explanation and corrected example usage (both synchronous and asynchronous where applicable).

## Recognize forms using PdfLoadedDocument
Using `PdfLoadedDocument` this operation analyzes the form content supplied through the inputStream whether it contains a PDF or an image and produces a fully enriched PdfLoadedDocument that includes recognized form elements such as checkboxes, radio buttons, textboxes, and signatures, according to the options defined in `FormRecognizeOptions`. This recognition process supports both execution patterns: the synchronous `RecognizeFormAsPdfDocument` method for immediate, blocking processing, and the asynchronous `RecognizeFormAsPdfDocumentAsync` method for non‑blocking, await processing ideal for responsive UI applications or scalable server side workflows.

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


## Recognize forms using Stream 
Using `Stream`this operation processes the form content provided through the inputStream whether it contains a PDF or an image and returns the fully recognized PDF as a Stream.This functionality is available through both the synchronous `RecognizeFormAsPdfStream` method for immediate, blocking execution and the asynchronous `RecognizeFormAsPdfStreamAsync` method for non‑blocking, await processing suitable for responsive UI applications, background services, and scalable server‑side workflows.

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

## Recognize forms using JSON

Using `JSON`this operation recognizes the form contained in the inputStream whether the source document is a PDF or an image and returns the complete recognition output serialized as a JSON string. This functionality is accessible through both the synchronous `RecognizeFormAsJson` method, which performs immediate, blocking processing, and the asynchronous `RecognizeFormAsJsonAsync` method, which provides non‑blocking, await execution suitable for UI applications, background workers, and scalable cloud or server‑side workflows.

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
    String outputJson = smartFormRecognizer.RecognizeFormAsJson(inputStream);
    //Save the outputJson
    File.Create("D:\\result.json").Close();
    File.WriteAllText("D:\\result.json", outputJson);
}
{% endhighlight %}
{% endtabs %}


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
    String outputJson = await smartFormRecognizer.RecognizeFormAsJsonAsync(inputStream);
    //Save the outputJson
    File.Create("D:\\result.json").Close();
    File.WriteAllText("D:\\result.json", outputJson);

}

{% endhighlight %}
{% endtabs %}

## Async variants with CancellationToken

The async overloads accept an optional `CancellationToken` to cancel long running operations. Initially, the cancellationToken uses its default value, and based on our requirements, we can optimize or supply a custom token as needed. This behavior is supported across all async methods, including PDF, JSON, and PdfLoadedDocument asynchronous operations


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