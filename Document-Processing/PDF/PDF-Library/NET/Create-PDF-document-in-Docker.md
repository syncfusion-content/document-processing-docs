---
title: Create PDF Files in a Docker Environment  | Syncfusion
description: Learn how to create PDF files in a Docker environment using Syncfusion and a containerized .NET application.
platform: document-processing
control: PDF
documentation: UG
keywords: docker getting started, docker sample project, container basics, docker tutorial, docker setup, run docker app, docker beginner guide
---

# Create PDF Files in a Docker Environment 

The Syncfusion<sup>&reg;</sup> [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is a powerful and versatile solution for creating, reading, and editing PDF documents in .NET applications. It also provides advanced features such as merging and splitting PDFs, adding stamps, working with form fields, and securing PDF files with encryption and permissions.

To integrate the .NET PDF library into your Docker application, refer to the official documentation sections on [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) for step-by-step guidance.

## Steps to Create PDF Files in a Docker Container

Step 1: Create a new ASP.NET Core MVC application.
![Create ASP.NET MVC Web application in Visual Studio](GettingStarted_images/Docker-Image1.png)

Step 2: In the project configuration window, name your project and select Next.
![Configuration Window](GettingStarted_images/Docker-Image2.png)

Step 3: Enable the Docker support with Linux as a target OS.
![Docker Support Window](GettingStarted_images/Docker-Image3.png)

Step 4: Install the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) NuGet package as a reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).
![NuGet Package](GettingStarted_images/Docker-Image4.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: A default action method named Index will be present in `HomeController.cs`. Right-click on this Index method and select Go To View where you will be directed to its associated view page `Index.cshtml`. Add a new button in the `Index.cshtml` as follows.

{% tabs %}
{% highlight CSHTML %}

@{Html.BeginForm("CreatePDFDocument", "Home", FormMethod.Get);
    {
        <div>
            <input type="submit" value="Generate PDF Document" style="width:150px;height:27px" />
        </div>
    }
    Html.EndForm();
}

{% endhighlight %}
{% endtabs %}

Step 6: The [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) object represents an entire PDF document that is being created. The [PdfTextElement](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfTextElement.html) is used to add text in a PDF document and which provides the layout result of the added text by using the location of the next element that decides to prevent content overlapping. The [PdfGrid](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Grid.PdfGrid.html) allows you to create table by entering data manually or from an external data sources. 

Add the following code sample in ``ExportService`` class which illustrates how to create a simple PDF document using ``PdfTextElement`` and ``PdfGrid``.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public ActionResult CreatePDF()
{
    // Create a new PDF document.
    using (PdfDocument pdfDocument = new PdfDocument())
    {
        int paragraphAfterSpacing = 8;
        int cellMargin = 8;

        // Add page to the PDF document.
        PdfPage page = pdfDocument.Pages.Add();
        // Create title and description.
        PdfStandardFont font = new PdfStandardFont(PdfFontFamily.TimesRoman, 16);
        PdfTextElement title = new PdfTextElement("Weather Forecast", font, PdfBrushes.Black);
        PdfLayoutResult result = title.Draw(page, new PointF(0, 0));

        PdfStandardFont contentFont = new PdfStandardFont(PdfFontFamily.TimesRoman, 12);
        PdfTextElement content = new PdfTextElement(
            "This component demonstrates fetching data from a service and exporting the data to a PDF document using Syncfusion .NET PDF library.",
            contentFont,
            PdfBrushes.Black);
        PdfLayoutFormat format = new PdfLayoutFormat
        {
            Layout = PdfLayoutType.Paginate
        };
        result = content.Draw(
            page,
            new RectangleF(0, result.Bounds.Bottom + paragraphAfterSpacing, page.GetClientSize().Width, page.GetClientSize().Height),
            format);
        // Create and style the PDF grid.
        PdfGrid pdfGrid = new PdfGrid();
        pdfGrid.Style.CellPadding.Left = cellMargin;
        pdfGrid.Style.CellPadding.Right = cellMargin;
        pdfGrid.ApplyBuiltinStyle(PdfGridBuiltinStyle.GridTable4Accent1);
        // Assign data source.
        pdfGrid.DataSource = forecasts;
        pdfGrid.Style.Font = contentFont;
        // Draw PDF grid into the PDF page.
        pdfGrid.Draw(page, new PointF(0, result.Bounds.Bottom + paragraphAfterSpacing));
        using (MemoryStream stream = new MemoryStream())
        {
            // Save the PDF document into the stream.
            pdfDocument.Save(stream);

            return File(stream.ToArray(), "application/pdf", "Output.pdf");
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 7: Build and run the sample in Docker. It will pull the Linux Docker image from the Docker hub and run the project. Now, the webpage will open in the browser. Click the button to convert the webpage to a PDF.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/Docker/Create-PDF-using-Docker).

By executing the program, you will get a PDF document as follows.
![Docker Output](GettingStarted_images/Docker-Output.png)

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind). 