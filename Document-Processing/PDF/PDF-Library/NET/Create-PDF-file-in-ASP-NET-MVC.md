---
title: Create or Generate PDF file in ASP.NET MVC | Syncfusion
description: Learn how to create or generate a PDF file in ASP.NET MVC with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
keywords: mvc create pdf, mvc generate pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, mvc generate pdf
---
# Create or Generate PDF file in ASP.NET MVC

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, forms and secure PDF files. 

To include the .NET PDF library into your ASP.NET MVC application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation. 

## Steps to create PDF document in ASP.NET MVC

Step 1: Create a new C# ASP.NET Web Application (.NET Framework) project.
![Create ASP.NET MVC Web application in Visual Studio](MVC_images/Creation1.png)

Step 2: In the project configuration windows, name your project and click Create.
![Add the project name](MVC_images/Creation2.png)
![Select the MVC](MVC_images/Creation3.png)

Step 3: Install the [Syncfusion.Pdf.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/) NuGet package as a reference to your ASP.NET MVC applications from [NuGet.org](https://www.nuget.org/).
![Install PDF MVC NuGet package](MVC_images/NuGet-package.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: A default controller with name `HomeController.cs` gets added on creation of the ASP.NET MVC project. Include the following namespaces in that `HomeController.cs` file.
 
{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

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

Step 6: Add a new action method named `CreatePDFDocument` in `HomeController.cs` and include the code example below to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. Then use the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw text on the PDF page and download the output PDF from the ASP.NET MVC application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

public ActionResult CreatePDFDocument()
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

By executing the program, you will get the PDF document as follows.
![ASP.NET MVC output PDF document](GettingStarted_images/pdf-generation-output.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET%20MVC/Creating-a-new-PDF-document).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).