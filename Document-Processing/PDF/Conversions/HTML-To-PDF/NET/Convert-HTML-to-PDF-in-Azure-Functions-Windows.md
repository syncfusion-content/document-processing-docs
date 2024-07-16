---
title: Convert HTML to PDF in Azure Functions on Windows | Syncfusion
description: Convert HTML to PDF in Azure Functions on Windows using Syncfusion .NET Core HTML to PDF converter library.
platform: document-processing
control: PDF
documentation: UG
---

# Convert HTML to PDF file in Azure Functions on Windows

As the Azure Windows platform is a Sandbox environment, the default HTML rendering engine Blink used in our HTML to PDF conversion is incompatible due to GDI Limitations. It is recommended that you use [Azure functions in Linux](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/convert-html-to-pdf-in-azure-functions-linux) For converting HTML to PDF in Azure Functions on Windows you can use the following approach that fit your requirement,

* [CefSharp](https://www.nuget.org/packages/CefSharp.OffScreen.NETCore/119.4.30) - this open-source library comes under a [BSD](https://github.com/cefsharp/CefSharp/blob/master/README.md) license.

* Legacy [WebKit](https://github.com/syncfusion/SfQtWebKit) - this open-source library comes under [LGPL license](https://github.com/syncfusion/SfQtWebKit?tab=License-3-ov-file). It has some known rendering issues and limitations, and some of the advanced Bootstrap CSS styles are not supported.

## Steps to convert HTML to PDF file in Azure Functions on Windows using CefSharp

Step 1: Create the Azure functions project.
![Create the Azure functions project.](Azure_images/Azure-function/AzureFunctions1.png)

Step 2: Create a project name and select the location.
![Project naming](Azure_images/Azure-function/AzureFunctions2.png)

Step 3: Select the function worker as .NET 6.0 isolated (Long-term support), and the selected HTTP triggers as follows. 
![Convert HTMLToPDF Azure Functions Step3](Azure_images/Azure-function/AzureFunctions5.png)

N> We have ensured the conversion in Azure functions isolated app and the conversion supports Azure functions isolated app only. The normal Azure Function app has a limitation of copying the runtime files at publish.

Step 4: Install the [Syncfusion.HtmlToPdfConverter.Cef.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Cef.Net.Windows) NuGet package to reference your project using the [nuget.org](https://www.nuget.org/).
![NuGet package installation](Azure_images/Azure-app-service-windows/Nuget_Manager-Console.png)

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from the trial setup or NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    using Syncfusion.HtmlConverter;
    using Syncfusion.Pdf;
    using Syncfusion.Pdf.Graphics;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code example in the **Run** method of the **Function1** class to **convert HTML to PDF document** in Azure Functions and return the resultant **PDF document**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

    [FunctionName("Function1")]
    public static async Task<HttpResponseMessage> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        MemoryStream ms = new MemoryStream();
        try
        {
            //Initialize HTML to PDF converter.
            HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(HtmlRenderingEngine.Cef);
            CefConverterSettings settings = new CefConverterSettings();
            //Assign WebKit settings to HTML converter.
            htmlConverter.ConverterSettings = settings;
            //Convert URL to PDF.
            PdfDocument document = htmlConverter.Convert("https://www.google.com/");
            //Save and close the PDF document.
            document.Save(ms);
            document.Close();
            ms.Position = 0;
        }

        catch (Exception ex)
        {
            //Create a new PDF document.
            PdfDocument document = new PdfDocument();
            //Add a page to the document.
            PdfPage page = document.Pages.Add();
            //Create PDF graphics for the page.
            PdfGraphics graphics = page.Graphics;

            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 5);
            //Draw the text.
            graphics.DrawString(ex.ToString(), font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

            //Creating the stream object.
            ms = new MemoryStream();
            //Save the document into memory stream.
            document.Save(ms);
            //Close the document.
            document.Close(true);
            ms.Position = 0;
        }
        HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
        response.Content = new ByteArrayContent(ms.ToArray());
        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
        {
            FileName = "Sample.pdf"
        };
        response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/pdf");
        return response;
    }

{% endhighlight %}
{% endtabs %}

Step 7: Steps to [publish](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/convert-html-to-pdf-in-azure-functions-windows#Steps-to-publish-as-azure-function-on-windows) as Azure Function on Windows.

Step 8: Open the created web app service in the Azure portal. Go to Settings -> Configuration -> Platform settings and change the platform to 64-bit.
![Platform Configuration](Azure_images/Azure-app-service-windows/Configuration.png)


You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Azure/HTML-to-PDF-Azure-Function-Windows-CefSharp).


## Steps to convert HTML to PDF file in Azure Functions on Windows using legacy WebKit

Step 1: Create the Azure functions project.
![Convert HTMLToPDF Azure Functions Step1](Azure_images/Azure-function/AzureFunctions1.png)

Step 2: Create a project name and select the location.
![Project naming](Azure_images/Azure-function/AzureFunctions2.png)

Step 3: Select the function worker as .NET 6.0(Long-term support), and the selected HTTP triggers as follows. 
![Convert HTMLToPDF Azure Functions Step3](Azure_images/Azure-function/AzureFunctions3.png)

Step 4: Install the [Syncfusion.HtmlToPdfConverter.QtWebKit.Net.Core](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.QtWebKit.Net.Core/) NuGet package as a reference to your project using **Package Manager Console**.
![Convert HTMLToPDF Azure Functions Step4](Azure_images/Azure-function/AzureFunctions4.png) 

N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from the trial setup or NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn about registering the Syncfusion license key in your application to use our components.

Step 5: Include the following namespaces in the **Function1.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.HtmlConverter;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code example in the **Run** method of the **Function1** class to **convert HTML to PDF document** in Azure Functions and return the resultant **PDF document**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

[FunctionName("Function1")]
public static async Task<HttpResponseMessage> Run(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
    ILogger log, ExecutionContext context)
{
    MemoryStream ms = new MemoryStream();
    try {
        //Initialize HTML to PDF converter.
        HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter(HtmlRenderingEngine.WebKit);
        WebKitConverterSettings settings = new WebKitConverterSettings();
        //Set WebKit path.
        settings.WebKitPath = Path.Combine(context.FunctionAppDirectory, "bin/runtimes/win-x64/native");            
        //Assign WebKit settings to HTML converter.
        htmlConverter.ConverterSettings = settings;
        //Convert URL to PDF.
        PdfDocument document = htmlConverter.Convert("https://www.google.com");

        //Save and close the PDF document.  
        document.Save(ms);
        document.Close();
        ms.Position = 0;
        }

        catch (Exception ex) {
            //Create a new PDF document.
            PdfDocument document = new PdfDocument();
            //Add a page to the document.
            PdfPage page = document.Pages.Add();
            //Create PDF graphics for the page.
            PdfGraphics graphics = page.Graphics;

            //Set the standard font.
            PdfFont font = new PdfStandardFont(PdfFontFamily.Helvetica, 5);
            //Draw the text.
            graphics.DrawString(ex.ToString(), font, PdfBrushes.Black, new Syncfusion.Drawing.PointF(0, 0));

            //Creating the stream object.
            ms = new MemoryStream();
            //Save the document into memory stream.
            document.Save(ms);
            //Close the document.
            document.Close(true);
            ms.Position = 0;
        }

        HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.OK);
        response.Content = new ByteArrayContent(ms.ToArray());
        response.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment") {
            FileName = "Sample.pdf"
        };
        response.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
        return response;
}

{% endhighlight %}
{% endtabs %}

Step 7: Copy the OpenSSL assemblies and paste them into the **runtimes/win-x64/native** folder containing the HTML_to_PDF_Azure_Functions.csproj file.

N> The OpenSSL libraries can be installed by downloading their setup from this [link.](https://www.syncfusion.com/downloads/support/directtrac/general/ze/OPENSSL-798051511)

![Right-click the project and select the publish option](Azure_images/Azure-function/runtimes.png)

Step 8: Set **Copy if newer** for all the OpenSSL assemblies.
![Right-click the project and select the publish option](Azure_images/Azure-function/copy_if_newer.png)

Step 9: Steps to [publish](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/convert-html-to-pdf-in-azure-functions-windows#Steps-to-publish-as-azure-function-on-windows) as Azure Function on Windows.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Azure/HTML-to-PDF-Azure-Functions(Windows)).

## Steps to publish as Azure Function on Windows 

Step 1: Right-click the project and select Publish. Then, create a new profile in the Publish Window.
![Create a new profile in the Publish Window](Azure_images/Azure-function/Click_publish.png)

Step 2: Select the target as **Azure** and click **Next**.
![Select the target as Azure](Azure_images/Azure-function/Set_Azure_target.png)

Step 3: Select the **Azure Function App (Windows)** and click **Next**. 
![Select Azure function app](Azure_images/Azure-function/Select_function_app.png)

Step 4: Select the **Create new**.
![Configure Hosting Plan](Azure_images/Azure-function/Select_create_new_button.png)

Step 5: Click **Create**.
![Browser will open after publish](Azure_images/Azure-function/WebView.png)

Step 6: After creating the function app service, click **Finish**. 
![Creating app service](Azure_images/Azure-function/Creating_app_function.png)

Step 7: Click **Publish**.
![Click the Publish button](Azure_images/Azure-function/Publish_app_function.png)

Step 8: Now, Publish has succeeded.
![Publish has been succeeded](Azure_images/Azure-function/Publish_link(function).png)

Step 9: Now, go to the Azure portal and select App Services. After running the service, click **Get function URL > Copy**. Include the URL as a query string in the URL. Then, paste it into a new browser tab. You will get a PDF document as follows. 
![Output document](Azure_images/Azure-function/Output.png)

