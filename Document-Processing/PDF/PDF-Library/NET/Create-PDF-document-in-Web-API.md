---
title: Create or Generate PDF file in ASP.NET Core Web API | Syncfusion
description: Learn how to create a PDF file in ASP.NET Core Web API with easy steps using Syncfusion .NET PDF library without depending on Adobe
platform: document-processing
control: PDF
documentation: ug
keywords: pdf, aspnet core, web api, csharp
---

# Create or Generate PDF file in ASP.NET Core Web API

The Syncfusion<sup>&reg;</sup> [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, forms and secure PDF files. 

To include the .NET PDF library into your ASP.NET Core Web API, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation. 

## Steps to create PDF document in ASP.NET Core Web API

Step 1: Create a new C# ASP.NET Core Web API project.
![Create ASP.NET Core Web API in Visual Studio](MVC_images/Web-API-1.png)

Step 2: In the project configuration windows, name your project and click Create.
![Add the project name](MVC_images/Web-API-2.png)

Step 3: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package as a reference to your ASP.NET Core Web API applications from [NuGet.org](https://www.nuget.org/).
![Install PDF NuGet package](MVC_images/Web-API-3.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Include the following namespaces in that `WeatherForecastController.cs` file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Drawing;
using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf.Grid;

{% endhighlight %}
{% endtabs %}

Step 5: The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 

Add the following code sample in ``WeatherForecastController`` class which illustrates how to create a simple PDF document using ``PdfTextElement`` and ``PdfGrid``. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

[HttpGet("/api/Pdf")]
public IActionResult CreatePdfDocument()
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
    var forecasts = Get().ToList();

    //Create a new PDF document.
    using (PdfDocument pdfDocument = new PdfDocument())
    {
        int paragraphAfterSpacing = 8;
        int cellMargin = 8;
        //Add page to the PDF document.
        PdfPage page = pdfDocument.Pages.Add();
        //Create a new font.
        PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
        //Create a text element to draw a text in PDF page.
        PdfTextElement title = new PdfTextElement("Weather Forecast", font, PdfBrushes.Black);
        PdfLayoutResult result = title.Draw(page, new PointF(0, 0));
        PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
        PdfTextElement content = new PdfTextElement("This component demonstrates fetching data from a service and exporting the data to a PDF document using Syncfusion .NET PDF library.", contentFont, PdfBrushes.Black);
        PdfLayoutFormat format = new PdfLayoutFormat
        {
            Layout = PdfLayoutType.Paginate
        };
        //Draw a text to the PDF document.
        result = content.Draw(page, new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height), format);
        //Create a PdfGrid.
        PdfGrid pdfGrid = new PdfGrid();
        pdfGrid.Style.CellPadding.Left = cellMargin;
        pdfGrid.Style.CellPadding.Right = cellMargin;
        //Applying built-in style to the PDF grid.
        pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
        //Assign data source.
        pdfGrid.DataSource = forecasts;
        pdfGrid.Style.Font = contentFont;
        //Draw PDF grid into the PDF page.
        pdfGrid.Draw(page, new PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));

        using (MemoryStream stream = new MemoryStream())
        {
            //Saving the PDF document into the stream.
            pdfDocument.Save(stream);

            //Closing the PDF document.
            pdfDocument.Close(true);

            return new MemoryStream(stream.ToArray());
        }
    }
}

{% endhighlight %}
{% endtabs %}

By executing the program, you will get the PDF document as follows.
![ASP.Net Core output PDF document](MVC_images/Output.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Web-API/Web-API-Project).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind). 