---
title: Create a PDF File in ASP.NET MVC | Syncfusion
description: Learn how to create a PDF file in ASP.NET MVC with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
keywords: mvc create pdf, mvc generate pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, mvc generate pdf
---
# Create a PDF File in ASP.NET MVC

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents in your .NET applications. It also provides advanced features such as merging, splitting, stamping documents, managing forms, and securing PDF files with encryption.

**Requirements:**
- ASP.NET MVC 5 and .NET Framework 4.5 or later
- Visual Studio 2012 or later

To include the .NET PDF library into your ASP.NET MVC application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation. 

## Steps to create PDF document in ASP.NET MVC

Step 1: Create a new C# ASP.NET Web Application (.NET Framework) project.
![Create ASP.NET MVC Web application in Visual Studio](MVC_images/Creation1.png)

Step 2: In the project configuration windows, name your project and click Create.
![Add the project name](MVC_images/Creation2.png)
![Select the MVC](MVC_images/Creation3.png)

Step 3: Install the [Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/) NuGet package as a reference to your ASP.NET MVC applications from [NuGet.org](https://www.nuget.org/).
![Install PDF MVC NuGet package](MVC_images/NuGet-package.png)

**Via Package Manager Console:**
```
Install-Package Syncfusion.Pdf.AspNet.Mvc5
```

Step 3a: **Licensing Setup (Required)**

Starting with v16.2.0.x and later, you must register a Syncfusion license key in your application to use the components. Add the "Syncfusion.Licensing" assembly reference and configure your license key. Please refer to the [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for step-by-step instructions.

N> Without a valid license key, your application will throw licensing errors at runtime.

Step 4: A default controller named `HomeController.cs` is created with the ASP.NET MVC project. Add the following namespaces to `HomeController.cs`:
 
{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

Step 5: A default action method named `Index` exists in `HomeController.cs`. Open the associated view file `Index.cshtml` (either right-click the Index method and select **Go To View**, or navigate to `Views/Home/Index.cshtml` in Solution Explorer). Add the following button to the view:

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

Step 6: Add a new action method named `CreatePDFDocument` in `HomeController.cs`. This method creates a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class and draws text using the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html), then downloads the PDF to the client.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public ActionResult CreatePDFDocument()
{
    try
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
            //Draw the text. PointF(0, 0) represents the top-left corner in pixels.
            graphics.DrawString("Hello World!!!", font, PdfBrushes.Black, new PointF(0, 0));
            //Save and send the PDF to the browser for download.
            document.Save("Output.pdf", HttpContext.ApplicationInstance.Response, HttpReadType.Save);
        }
    }
    catch (Exception ex)
    {
        ViewBag.Message = "Error generating PDF: " + ex.Message;
    }
    return null;
}

{% endhighlight %}
{% endtabs %} 

## Run the Application

Execute the application and click the **Generate PDF Document** button to create and download the PDF file to your local machine.

![ASP.NET MVC PDF Generation Output](GettingStarted_images/pdf-generation-output.png)

## Available Parameters and Options

**HttpReadType Options:**
- `HttpReadType.Save` — Prompts the user to download the PDF file
- `HttpReadType.Open` — Displays the PDF inline in the browser

**PdfFont Options:**
You can use different standard fonts: `Helvetica`, `Times New Roman`, `Courier`, `Symbol`, and `ZapfDingbats`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| NuGet package installation fails | Verify your Visual Studio is updated to latest version; check NuGet package source configuration |
| Licensing errors at runtime | Ensure Syncfusion.Licensing assembly is referenced and a valid license key is registered |
| PDF file not downloading | Verify HttpContext.ApplicationInstance.Response is available; check browser's download settings |
| Empty or malformed PDF | Ensure page graphics operations occur before calling Save(); verify fonts are available on the system |

## Next Steps

- **Download [Complete Working Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET%20MVC/Creating-a-new-PDF-document)** — Reference implementation with additional features
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive example in your browser
- **Explore [Syncfusion PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Full documentation and API reference