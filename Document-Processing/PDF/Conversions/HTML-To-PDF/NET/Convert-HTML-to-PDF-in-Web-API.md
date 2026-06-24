---
title: Convert HTML to PDF in ASP.NET Core Web API | Syncfusion
description: Learn here about how to convert HTML to PDF in in ASP.NET Core Web API with easy steps using Syncfusion .NET PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: UG
keywords: pdf, aspnet core, web api, csharp, html
---

# Convert HTML to PDF file in ASP.NET Core Web API

The Syncfusion<sup>&reg;</sup> [HTML to PDF converter](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) is a .NET library for converting webpages, SVG, MHTML, and HTML to PDF using C#. Using this library, **convert HTML to PDF document in ASP.NET Core Web API**.

To include the .NET HTML-to-PDF library in your ASP.NET Core Web API, please refer to the [NuGet Package](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/nuget-packages-required) Required' or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/assemblies-required) documentation.

## Steps to convert HTML to PDF in ASP.NET Core Web API

Step 1: Create a new C# ASP.NET Core Web API project.
![Convert HTMLToPDF Web API Step1](htmlconversion_images/Web-API-1.png)
 
Step 2: In the project configuration windows, name your project and click Create.
![Convert HTMLToPDF Web API Step2](htmlconversion_images/Web-API-2.png)

Step 3: Install [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows) NuGet package as reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/). 
![NuGet package installation](htmlconversion_images/Console-4.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Add a new API controller empty file in the project.
![Add new class](htmlconversion_images/Web-API-4.png)

Step 5: Include the following namespaces in the *Program.cs*.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Drawing;
using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 6: Include the following code sample in *Program.cs* to convert HTML to PDF document using [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method in [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class. The HTML content will be scaled based on the given [ViewPortSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html#Syncfusion_HtmlConverter_BlinkConverterSettings_ViewPortSize) property of [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html) class.

{% tabs %}
{% highlight c# tabtitle="C#" %}

[HttpGet("/api/Pdf")]
public IActionResult ConvertHTMLtoPDF()
{
    try
    {
        const string fileDownloadName = "Output.pdf";
        const string contentType = "application/pdf";
        var stream = ExportWeatherForecastToPdf();
        stream.Position = 0;
        return File(stream, contentType, fileDownloadName);
    }
    catch (Exception ex)
    {
        return BadRequest($"Error occurred while creating PDF file: {ex.Message}");
    }
}

private MemoryStream ExportWeatherForecastToPdf()
{
    var forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    }).ToList();

    //Initialize HTML to PDF converter.
    HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
    BlinkConverterSettings blinkConverterSettings = new BlinkConverterSettings();
    //Set Blink viewport size.
    blinkConverterSettings.ViewPortSize =new Size(1280, 0);
    //Assign Blink converter settings to HTML converter.
    htmlConverter.ConverterSettings = blinkConverterSettings;
    //Convert URL to PDF document.
    PdfDocument document = htmlConverter.Convert("https://www.syncfusion.com");
    //Create memory stream.
    MemoryStream stream = new MemoryStream();
    //Save the document to memory stream.
    document.Save(stream);
    return new MemoryStream(stream.ToArray());
}

{% endhighlight %}
{% endtabs %}

Step 7: Navigate to the `Swagger UI`, expand the `GET /api/Pdf` API, click `Execute`, and then download the response output.
![Swagger UI](htmlconversion_images/Web-API-5.png)

By executing the program, you will get the PDF document as follows.
![HTML to PDF output document](htmlconversion_images/IIS-Output.png)

A complete working sample can be downloaded from Github.