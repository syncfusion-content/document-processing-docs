---
title: Create or Generate PDF file in ASP.NET MVC | Syncfusion
description: Learn how to create or generate a PDF file in ASP.NET MVC with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
keywords: mvc create pdf, mvc generate pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, mvc generate pdf
---

# Create a PDF File in ASP.NET MVC

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) creates, reads, and edits PDF documents. It also merges, splits, stamps, fills forms, and secures PDF files.

To include the .NET PDF library in your ASP.NET MVC application, refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

N> This tutorial targets **ASP.NET MVC 5 on .NET Framework**. For ASP.NET Core, use the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) package and see [Create or Generate a PDF file in ASP.NET Core](create-pdf-file-in-asp-net-core).

## Prerequisites

- **.NET Framework** 4.6.2 or later
- **Visual Studio 2017 or later** with the **ASP.NET and web development** workload
- A **Syncfusion<sup>&reg;</sup> license key** — register it in your application using `Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")`. For details, see the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview).
- The **[Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/)** NuGet package installed in the project. This package is the MVC 5 wrapper for `Syncfusion.Pdf.Net.Core`; for ASP.NET Core, use `Syncfusion.Pdf.Net.Core` directly.

## Compatibility

| Component | Minimum version |
| --- | --- |
| .NET Framework | 4.6.2 or later |
| ASP.NET MVC | 5.2.7 |
| Visual Studio | 2017 |
| Syncfusion<sup>&reg;</sup> PDF library | Latest version |
| Syncfusion<sup>&reg;</sup> NuGet package | [Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/) |

## Step to create a PDF document in ASP.NET MVC

**Step 1:** Create a new C# **ASP.NET Web Application (.NET Framework)** project.
![Create ASP.NET MVC Web application in Visual Studio](MVC_images/Creation1.png)

**Step 2:** In the project configuration window, name your project and click **Create**. Then select the **MVC** project template.
![Add the project name](MVC_images/Creation2.png)
![Select the MVC template](MVC_images/Creation3.png)

**Step 3:** Install the [Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/) NuGet package from [NuGet.org](https://www.nuget.org/). Use the latest stable version compatible with .NET Framework 4.6.1 or later.
![Install PDF MVC NuGet package](MVC_images/NuGet-package.png)

N> If you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or the NuGet feed, you must add a reference to the `Syncfusion.Licensing` assembly and include a valid license key in your project. See the [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering the license key.

**Step 4:** On creation, ASP.NET MVC adds a default `HomeController.cs` controller. Include the following namespaces in that file.
 
{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

**Step 5:** Right-click the existing `Index` action in `HomeController.cs` and choose **Go To View** to open `Index.cshtml`. In `Index.cshtml`, add the following button.

N> The `Html.BeginForm` / `Html.EndForm` HTML helpers used below are the legacy syntax. Modern ASP.NET MVC supports tag helpers; consider `<form asp-action="CreatePDFDocument" asp-controller="Home" method="get">` for new projects.

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

**Step 6:** Add a new action method named `CreatePDFDocument` in `HomeController.cs` (matching the `Html.BeginForm` action in Step 5) and include the code example below to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. The [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object draws text on the PDF page. The `HttpReadType.Save` enum value writes the PDF directly to the response stream so the browser downloads `Output.pdf`.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public ActionResult CreateDocument()
{
    //Create an instance of PdfDocument.
    using (PdfDocument document = new PdfDocument())
    {
        //Add a page to the document.
        PdfPage page = document.Pages.Add();
        //Create PDF graphics for the page.
        PdfGraphics graphics = page.Graphics;
        //Set the standard font.
        PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 20);
        //Draw the text.
        graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
        //Open the document in browser after saving it. 
        document.Save("Output.pdf", HttpContext.ApplicationInstance.Response, HttpReadType.Save);
    }
    return View();
}

{% endhighlight %}
{% endtabs %} 

Running the program produces the following PDF document.
![ASP.NET MVC output PDF document](GettingStarted_images/pdf-generation-output.png)

You can download a complete working sample from the [`Creating-a-new-PDF-document` folder on GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET%20MVC/Creating-a-new-PDF-document).

Explore the [Syncfusion<sup>&reg;</sup> PDF library features](https://www.syncfusion.com/document-sdk/net-pdf-library) to learn more about merging, splitting, securing, and stamping PDF files.

An online sample demonstrating how to [create a PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind) is also available.

## Troubleshooting

- **Watermark appears in the output PDF** — Your Syncfusion<sup>&reg;</sup> license key is not registered. Call `SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY")` at application startup.
- **`Server cannot set content type after headers are sent` exception** — The `document.Save(..., Response, HttpReadType.Save)` overload writes the PDF directly to the response, so do not return a `View()` afterward. Return an empty result (for example, `return new EmptyResult();`) or switch to a `FileStreamResult`.
- **Package not found when targeting .NET Core** — The `Syncfusion.Pdf.AspNet.Mvc5` package only supports ASP.NET MVC 5 on .NET Framework. For ASP.NET Core, use the [Syncfusion.Pdf.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core) package instead.
- **GDI+ errors on Windows Server** — Ensure the **Server Core** optional feature for "Server-Gui-Shell" or the **Desktop Experience** is installed so the GDI+ subsystem is available.
- **PDF file opens as plain text in the browser** — Add `Response.AddHeader("content-disposition", "attachment; filename=Output.pdf");` (or rely on the `HttpReadType.Save` overload) to force a download.
- **`HttpContext.ApplicationInstance` is null in unit tests** — Use `HttpContext.Current` or inject `IHttpContextAccessor`; the controller property only works inside an MVC request pipeline.

## See also

- [NuGet Packages Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required)
- [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required)
- [Syncfusion<sup>&reg;</sup> Licensing Overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
- [Create a PDF file in ASP.NET Core](create-pdf-file-in-asp-net-core)
- [Create a PDF file in ASP.NET Core Web API](create-pdf-document-in-web-api)
- [Create a PDF file in Blazor](create-pdf-document-in-blazor)
- [Create a PDF file in Docker](create-pdf-document-in-docker)
- [Open and read PDF files](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/open-pdf-files)
- [Merge PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/merge-documents)
- [Split PDF documents](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/split-documents)
- [Working with PDF forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-forms)
- [Working with security and permissions](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security)
- [Working with stamps and watermarks](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-watermarks)
- [Syncfusion<sup>&reg;</sup> PDF library — Demos](https://document.syncfusion.com/demos/pdf/default)