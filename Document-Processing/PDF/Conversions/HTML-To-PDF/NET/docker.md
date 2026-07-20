---
title: Convert a HTML to PDF file in Docker | Syncfusion
description: Learn how to convert a HTML to PDF file in docker with easy steps using Syncfusion .NET HTML converter library.
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---

# Convert HTML to PDF file in Linux Docker container

The [HTML to PDF converter](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) is a .NET library that converts HTML or web pages to PDF documents in a Linux [Docker](https://www.docker.com/why-docker/) container.

## Prerequisites

**Version Compatibility**

The **Syncfusion.HtmlToPdfConverter.Net.Linux** NuGet package uses the Blink rendering engine for HTML to PDF conversion. This library is compatible with **.NET 8.0 and later** versions

**Supported Inputs**

The HTML to PDF converter supports the following input types:

- HTML String: Direct HTML content.
- URL: Web pages and online HTML content.
- HTML Files: Local HTML files.
- MHTML Files: Web archive (.mhtml/.mht) content.
- Authenticated Web Pages: Pages that require cookies, form authentication, or HTTP authentication.
- HTTP GET/POST Requests: HTML content accessed through GET or POST methods

**Required Software**

- .NET 8.0 or later
- Visual Studio 2022 or later
- Docker installed locally

**Register the license key**

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must add the "Syncfusion.Licensing" assembly reference and register a license key in your application. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering a Syncfusion<sup>&reg;</sup> license key.

Include a license key in your **HomeController.cs** file before creating an **HtmlToPdfConverter** instance. Refer to the [Syncfusion License](https://help.syncfusion.com/common/essential-studio/licensing/overview) documentation to learn about registering the Syncfusion license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

public class HomeController
{
    // Register the Syncfusion license
    SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");
}

{% endhighlight %}
{% endtabs %}

N> Starting from **version 29.2.4**, it is no longer necessary to manually add the following command-line arguments when using the Blink rendering engine:
N> ```csharp
N> settings.CommandLineArguments.Add("--no-sandbox");
N> settings.CommandLineArguments.Add("--disable-setuid-sandbox");
N> ```
N> These arguments are only required when using **older versions** of the library that depend on Blink in sandbox-restricted environments.

## Steps to convert HTML to PDF in Linux Docker container

Step 1: Create a new **ASP.NET Core** application and enable Docker support with **Linux** as the target OS.
![Convert HTMLToPDF Docker Step1](htmlconversion_images/DockerStep1.png)
![Convert HTMLToPDF Docker Step2](htmlconversion_images/DockerStep2.png)

Step 2: Install the [Syncfusion.HtmlToPdfConverter.Net.Linux](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/) NuGet package as a reference to your .NET Core application from [NuGet.org](https://www.nuget.org/).
![Convert HTMLToPDF Docker Step3](htmlconversion_images/DockerStep3.png)

Step 3: Add the following commands to the **Dockerfile** to install Blink rendering dependencies in the Docker container:

{% tabs %}
{% highlight dockerfile %}

RUN apt-get update && \
apt-get install -yq --no-install-recommends \ 
libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \ 
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \ 
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 \ 
libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \ 
libnss3 libgbm1

{% endhighlight %}
{% endtabs %}

![Convert HTMLToPDF Docker Step4](htmlconversion_images/DockerStep4.png)

Step 4: Add a new button in the index.cshtml as shown below.

{% tabs %}
{% highlight CSHTML %}

<div class="btn">
   @{ Html.BeginForm("ExportToPDF", "Home", FormMethod.Post);
         {
            <input type="submit" value="Export To PDF" class=" btn" />
         }
      }
</div>

{% endhighlight %}
{% endtabs %}

![Convert HTMLToPDF Docker Step5](htmlconversion_images/DockerStep5.png)

Step 5: A default controller named **HomeController.cs** is added when creating the ASP.NET Core project. Add the following namespaces to that **HomeController.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 6: Add a new action method in **HomeController.cs** to convert HTML to PDF using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method in the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class with [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html):

{% tabs %}
{% highlight c# tabtitle="C#" %}

public ActionResult ExportToPDF()
{
   //Initialize HTML to PDF converter. 
   HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(); 
   BlinkConverterSettings settings = new BlinkConverterSettings();     
   //Set Blink viewport size.
   settings.ViewPortSize = new Syncfusion.Drawing.Size(1280, 0);     
   //Assign Blink settings to the HTML converter.
   htmlConverter.ConverterSettings = settings; 
   //Convert URL to PDF document.
   PdfDocument document = htmlConverter.Convert("https://www.syncfusion.com"); 
   //Create memory stream.
   MemoryStream stream = new MemoryStream(); 
   //Save the document to memory stream. 
   document.Save(stream); 
   return File(stream.ToArray(), System.Net.Mime.MediaTypeNames.Application.Pdf, "HTML-to-PDF.pdf");
}

{% endhighlight %}
{% endtabs %}

Step 7: Build and run the sample in Docker. Docker will pull the Linux Docker image from Docker Hub and run the project. The webpage will open in the browser. Click the **Export To PDF** button to convert the webpage to a PDF document.

By executing the program, Docker will generate and display the following PDF document:
![Convert HTMLToPDF Dockeroutput](htmlconversion_images/htmltopdfoutput.png)

A complete working sample for converting HTML to PDF in a Linux Docker container can be downloaded from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Docker).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 

You can also view the online sample to [convert HTML to PDF documents](https://document.syncfusion.com/demos/pdf/htmltopdf#/tailwind3) in ASP.NET Core.