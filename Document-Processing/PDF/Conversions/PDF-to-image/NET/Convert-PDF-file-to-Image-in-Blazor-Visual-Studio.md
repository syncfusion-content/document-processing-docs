**Prerequires**:

* Visual Studio 2022.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

## Steps to convert PDF document to Image in Blazor application

Step 1: Create a new C# Blazor Server Application project.
Select Blazor App from the template and click the Next button.
![Create Blazor application](Blazor_images/blazor_step1.png)

Step 2:  In configuration windows, name your project and select Create.
![Configuration window1](Blazor_images/blazor_step2.png)
![Configuration window2](Blazor_images/blazor_step3.png)

Step 3:  Install [Syncfusion.PdfToImageConverter.Net](https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.Net/) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).

N> If you want to use the PdfToImageConverter in the Linux environment, you need to install the [SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1) NuGet package as reference to your applications from [NuGet.org](https://www.nuget.org/).

Step 4: Create a new razor component named ConvertPDFToImage under Pages folder. Include the following namespace in that ConvertPDFToImage.razor file.

{% highlight c# tabtitle="C#" %}

@using Syncfusion.PdfToImageConverter;

{% endhighlight %}

Step 5: Create a new button in ConvertPDFToImage.razor using the following code. 

{% highlight c# tabtitle="C#" %}

<button @onclick="ExportToImage">Convert PDF To Image</button>

{% endhighlight %}

Step 6: Add the ExportToImage method in ConvertPDFToImage.razor and include the below code example to convert PDF document to Image using Convert method in PdfToImageConverter class.

{% highlight c# tabtitle="C#" %}
private void ExportToImage()
{
    //Initialize PDF to Image converter.
    PdfToImageConverter imageConverter = new PdfToImageConverter();
    //Load the PDF document as a stream
    FileStream inputStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.ReadWrite);
    imageConverter.Load(inputStream);
    //Convert PDF to Image.
    Stream outputStream = imageConverter.Convert(0, false, false);
    MemoryStream stream = outputStream as MemoryStream;
    byte[] bytes = stream.ToArray();
    using (FileStream output = new FileStream("output.png", FileMode.OpenOrCreate, FileAccess.ReadWrite))
    {
        output.Write(bytes, 0, bytes.Length);
    }
}

{% endhighlight %}

Step 7: Add ConvertPDFToImage.razor file in index.razor.

{% highlight c# tabtitle="C#" %}

<ConvertPDFToImage></ConvertPDFToImage>

{% endhighlight %}

Step 8: Build the project.

Click on Build → Build Solution or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 9: Run the project.

Click the Start button (green arrow) or press <kbd>F5</kbd> to run the app.