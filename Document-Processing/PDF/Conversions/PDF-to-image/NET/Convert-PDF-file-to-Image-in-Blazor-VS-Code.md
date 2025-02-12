**Prerequires**:

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

## Steps to create PDF document in Blazor Server application

Step 1: Open the terminal (Ctrl+` ) and run the following command to create a new Blazor Server application

```
dotnet new blazorserver -n CreatePdfToImageConverterBlazorServerApp
```
Step 2: Replace ****CreatePdfToImageConverterBlazorServerApp** with your desired project name.

Step 3: Navigate to the project directory using the following command

```
cd CreatePdfToImageConverterBlazorServerApp
```
Step 4: Install [Syncfusion.PdfToImageConverter.Net](https://www.nuget.org/packages/Syncfusion.PdfToImageConverter.Net/) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).

```
dotnet add package Syncfusion.PdfToImageConverter.Net
```

N> If you want to use the PdfToImageConverter in the Linux environment, you need to install the [SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1) NuGet package as reference to your applications from [NuGet.org](https://www.nuget.org/).

Step 5: Create a new cs file named **ExportService.cs** under **Data** folder and include the following namespaces in the file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.PdfToImageConverter;

{% endhighlight %}
{% endtabs %}

Step 6: Create a new razor component named ConvertPDFToImage under Pages folder. Include the following namespace in that ConvertPDFToImage.razor file.

{% highlight c# tabtitle="C#" %}

@using Syncfusion.PdfToImageConverter;

{% endhighlight %}

Step 7: Create a new button in ConvertPDFToImage.razor using the following code. 

{% highlight c# tabtitle="C#" %}

<button @onclick="ExportToImage">Convert PDF To Image</button>

{% endhighlight %}

Step 8: Add the ExportToImage method in ConvertPDFToImage.razor and include the below code example to convert PDF document to Image using Convert method in PdfToImageConverter class.

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

Step 9: Add ConvertPDFToImage.razor file in index.razor.

{% highlight c# tabtitle="C#" %}

<ConvertPDFToImage></ConvertPDFToImage>

{% endhighlight %}

Step 10: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 11: Run the project.

Run the following command in terminal to build the project.

```
dotnet run
```