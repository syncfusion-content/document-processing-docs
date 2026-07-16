---
title: Create a PDF File in ASP.NET Web Forms| Syncfusion
description: Learn how to create a PDF file in ASP.NET Web Forms with easy steps using Syncfusion .NET PDF library without depending on Adobe.
platform: document-processing
control: PDF
documentation: UG
---
# Create a PDF File in ASP.NET Web Forms

> **⚠️ Deprecation Notice:** ASP.NET Web Forms is deprecated. For new projects, consider upgrading to [ASP.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-core), which offers modern development practices and better performance.

The [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) enables you to create, read, and edit PDF documents. It provides advanced features including merging, splitting, stamping documents, managing forms, and securing PDF files with encryption.

**Requirements:**
- ASP.NET Web Forms with .NET Framework 4.5 or later
- Visual Studio 2012 or later

To include the .NET PDF library into your ASP.NET Web application, please refer to the [NuGet Package Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/nuget-packages-required) or [Assemblies Required](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/assemblies-required) documentation.
## Project Setup

### Step 1: Create a new ASP.NET Web application project
![ASP.NET Web sample creation step1](Asp.Net_images/Creation1.png)

### Step 2: Select the Empty project template
![Select the empty project](Asp.Net_images/Creation2.png)

### Step 3: Install the Syncfusion.Pdf.AspNet NuGet package

Install the [Syncfusion.Pdf.AspNet](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet/) NuGet package as a reference to your .NET Framework applications from [NuGet.org](https://www.nuget.org/).

![PDF ASP.NET NuGet package installation](Asp.Net_images/NuGet-package.png)

**Via Package Manager Console:**
```
Install-Package Syncfusion.Pdf.AspNet
```

### Step 3a: Configure Licensing (Required)

Starting with v16.2.0.x and later, you must register a Syncfusion license key to use the components. Add the `Syncfusion.Licensing` assembly reference and configure your license key. Please refer to the [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for step-by-step instructions.

N> Without a valid license key, your application will throw licensing errors at runtime.

## Create the Web Form

### Step 4: Add a new Web Form to the project

Right-click the project in Solution Explorer and select **Add > New Item**. Choose **Web Form** from the templates list and name it `MainPage`.

### Step 5: Add a button control to the Web Form

Add the following button to `MainPage.aspx`. The `OnClick="OnButtonClicked"` event handler must match the C# method name in the code-behind file (case-sensitive).

{% tabs %}
{% highlight HTML %}

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>PDF Creation Sample</title>
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

## Implement PDF Generation

### Step 6: Add required namespaces to the code-behind file

Add the following namespaces to `MainPage.aspx.cs`:
   
{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Graphics;
using System;
using System.Drawing;
using System.Web;

{% endhighlight %}
{% endtabs %}

### Step 7: Add the button click event handler

Add the following code to the `OnButtonClicked` event handler in `MainPage.aspx.cs`. This creates a PDF document using the [PdfDocument](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocument.html) class and draws text using the [DrawString](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawString_System_String_Syncfusion_Pdf_Graphics_PdfFont_Syncfusion_Pdf_Graphics_PdfBrush_System_Drawing_PointF_) method of [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html).

{% tabs %}
{% highlight c# tabtitle="C#" %}

protected void OnButtonClicked(object sender, EventArgs e)
{
    try
    {
        //Create a new PDF document.
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
            //Use HttpReadType.Save for download dialog, HttpReadType.Open for inline display.
            document.Save("Output.pdf", HttpContext.Current.Response, HttpReadType.Save);
        }
    }
    catch (Exception ex)
    {
        Response.Write("Error generating PDF: " + ex.Message);
    }
}

{% endhighlight %}
{% endtabs %}

## Run and Verify

### Step 8: Run the application

Build and execute the application. Click the **Create Document** button to generate and download the PDF file to your local machine.

![ASP.NET Web Forms PDF Generation Output](GettingStarted_images/pdf-generation-output.png)

## Available Parameters and Options

**HttpReadType Options:**
- `HttpReadType.Save` — Prompts the user to download the PDF file
- `HttpReadType.Open` — Displays the PDF inline in the browser

**PdfFont Options:**
You can use different standard fonts: `Helvetica`, `Times New Roman`, `Courier`, `Symbol`, and `ZapfDingbats`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| NuGet package installation fails | Verify Visual Studio is up to date; check NuGet package source configuration in Tools > Options > NuGet Package Manager |
| Licensing errors at runtime | Ensure Syncfusion.Licensing assembly is referenced and a valid license key is registered |
| PDF file not downloading | Verify HttpContext.Current.Response is available; check browser's download settings and firewall restrictions |
| "Handler 'OnButtonClicked' not found" error | Ensure the event handler method name in code-behind matches exactly (case-sensitive) with the button's OnClick attribute |
| Empty or malformed PDF | Ensure page graphics operations occur before calling Save(); verify required fonts are installed on the system |

## Next Steps

- **Download [Complete Working Sample](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Getting%20Started/ASP.NET)** — Reference implementation with additional features
- **Try [Online Demo](https://document.syncfusion.com/demos/pdf/default#/tailwind)** — Interactive example in your browser
- **Explore [Syncfusion PDF Library Features](https://www.syncfusion.com/document-sdk/net-pdf-library)** — Complete API reference and advanced capabilities