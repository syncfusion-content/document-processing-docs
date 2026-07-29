---
title: Create or Generate PDF file in ASP.NET Web Forms | Syncfusion
description: Learn how to create or generate a PDF file in ASP.NET Web Forms with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
keywords: asp.net web forms create pdf, web forms generate pdf, edit pdf, merge, pdf form, fill form, digital sign, table, c#, dotnet web forms pdf
---
# Create or Generate PDF file in ASP.NET Web Forms

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) is used to create, read, and edit PDF documents. This library also offers functionality to merge, split, stamp, work with forms, and secure PDF files.

To include the .NET PDF library into your ASP.NET Web application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.

N> This ASP.NET Web Forms platform is deprecated; you can use the same product from the [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-core) platform.

## Prerequisites

* Visual Studio 2017 or later with the **ASP.NET and web development** workload.
* .NET Framework 4.0 or later installed on the development machine and target server.

> **Platform notice:** This ASP.NET Web Forms platform is deprecated. Consider migrating to [ASP.NET Core MVC](Create-PDF-file-in-ASP-NET-Core.md) or [ASP.NET Core Razor Pages](Create-PDF-file-in-ASP-NET-MVC.md) for new development. Syncfusion<sup>&reg;</sup> continues to support the existing component on .NET Framework 4.6.2+.

## Steps to create PDF document in ASP.NET Web Forms

Step 1: Create a new ASP.NET Web application project.
![ASP.NET Web sample creation step1](Asp.Net_images/Creation1.png)

Step 2: Select the Empty project.
![Select the empty project](Asp.Net_images/Creation2.png)

Step 3: Install the [Syncfusion.Pdf.AspNet](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet/) NuGet package as a reference to your .NET Framework applications from [NuGet.org](https://www.nuget.org/).
![PDF ASP.NET NuGet package installation](Asp.Net_images/NuGet-package.png)

Step 4: Register the Syncfusion<sup>&reg;</sup> license key. A trial watermark is added to every page of the generated PDF until a valid key is registered. Include the license key in **Global.asax.cs** inside the `Application_Start` method before initializing any Syncfusion<sup>&reg;</sup> component:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

protected void Application_Start(object sender, EventArgs e)
{
    // Register the Syncfusion license
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");
}

{% endhighlight %}
{% endtabs %}

Replace `"YOUR LICENSE KEY"` with the license key associated with your Syncfusion<sup>&reg;</sup> account. If you do not have a license key, you can request a free 30-day trial or apply for a Community License from the Syncfusion<sup>&reg;</sup> website. For more information about registering a license key in your application, refer to the [Syncfusion<sup>&reg;</sup> Licensing Documentation](https://help.syncfusion.com/common/essential-studio/licensing/overview).

Step 5: Add a new Web Form in the ASP.NET project. Right-click the project, select **Add > New Item**, and add a Web Form from the list. Name it `MainPage`.

Step 6: Add a new button in the `MainPage.aspx` as follows.

{% tabs %}
{% highlight HTML %}

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <asp:Button ID="Button1" runat="server" Text="Create Document" OnClick="OnButtonClicked" />
    </div>
    </form>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Step 7: Include the following namespaces in your `MainPage.aspx.cs` file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System.Drawing;

{% endhighlight %}
{% endtabs %}

Step 8: Include the following code example in the click event of the button in `MainPage.aspx.cs` to generate a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class. Then use the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) object to draw text on the PDF page.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Create a new PDF document.
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
  //HttpReadType.Save prompts the browser to save the file; use HttpReadType.Open to open it inline.
  document.Save("Output.pdf", HttpContext.Current.Response, HttpReadType.Save);
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET).

By executing the program, you will get the PDF document as follows.
![Getting started PDF output document](GettingStarted_images/pdf-generation-output.png)

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.

An online sample link to [create PDF document](https://document.syncfusion.com/demos/pdf/default#/tailwind).

## Next steps

* [Create a PDF in ASP.NET Core](Create-PDF-file-in-ASP-NET-Core.md)
* [Create a PDF in ASP.NET MVC](Create-PDF-file-in-ASP-NET-MVC.md)
* [Create a PDF in ASP.NET Web Forms (legacy)](Create-PDF-file-in-ASP-NET-Web-Forms.md)
* [Open and read an existing PDF document](Open-PDF-file.md)
* [Save the generated PDF to a file or stream](Save-PDF-file.md)