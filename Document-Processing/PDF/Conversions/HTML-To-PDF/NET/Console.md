---
title: Convert HTML to PDF Using a Console Application | Syncfusion
description: Learn how to convert HTML to PDF using a simple console application with clear, structured, and easy-to-follow step-by-step guidance.
platform: document-processing
control: PDF
documentation: UG
keywords: create pdf in console app, generate pdf using console application, syncfusion html to pdf, html to pdf console example
---

# Convert HTML to PDF using a Console Application

The [HTML to PDF converter](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) is a .NET library for converting webpages, SVG, MHTML, and HTML to PDF documents using C#. Using this library, HTML can be converted to PDF through a console application.

## Prerequisites

**Version Compatibility**

The **Syncfusion.HtmlToPdfConverter.Net.Windows** NuGet package uses the Blink rendering engine for HTML to PDF conversion. This library is compatible with **.NET 8.0 and later** versions.

**Supported Inputs**

The HTML to PDF converter supports the following input types:

- HTML String: Direct HTML content.
- URL: Web pages and online HTML content.
- HTML Files: Local HTML files.
- MHTML Files: Web archive (.mhtml/.mht) content.
- Authenticated Web Pages: Pages that require cookies, form authentication, or HTTP authentication.
- HTTP GET/POST Requests: HTML content accessed through GET or POST methods

**Required Software**

- .NET 8 SDK or later
- Visual Studio, Visual Studio Code, or JetBrains Rider

**Register the license key**

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you must add the "Syncfusion.Licensing" assembly reference and register a license key in your application. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details on registering a Syncfusion<sup>&reg;</sup> license key.

Include a license key in your **Program.cs** file before creating an **HtmlToPdfConverter** instance. Refer to the [Syncfusion License](https://help.syncfusion.com/common/essential-studio/licensing/overview) documentation to learn about registering the Syncfusion license key in your application.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Licensing;

class Program
{
    static void Main()
    {
        // Register the Syncfusion license
        SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");
    }
}

{% endhighlight %}
{% endtabs %}

## Steps to convert HTML to PDF using a Console App

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new .NET Core console application project:
![Create Console application](htmlconversion_images/Console-1.png)

Step 2: In the configuration window, name your project and select **Next**:
![Configuration window1](htmlconversion_images/Console-2.png)
![Configuration window2](htmlconversion_images/Console-3.png)

Step 3: Install the [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows) NuGet package into your console application from [NuGet.org](https://www.nuget.org/):
![NuGet package installation](htmlconversion_images/Console-4.png)

Step 4: Include the following namespaces in the **Program.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.HtmlConverter;

{% endhighlight %}
{% endtabs %}

Step 5: Add the following code sample to **Program.cs** to convert HTML to PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method of the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class. The HTML content will be scaled based on the [ViewPortSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html#Syncfusion_HtmlConverter_BlinkConverterSettings_ViewPortSize) property of the [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Initialize the HTML to PDF converter
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
// Create Blink converter settings
BlinkConverterSettings blinkConverterSettings = new BlinkConverterSettings();
// Set Blink viewport size for rendering
blinkConverterSettings.ViewPortSize = new Syncfusion.Drawing.Size(1280, 0);
// Assign Blink converter settings to the HTML converter
htmlConverter.ConverterSettings = blinkConverterSettings;
// Convert URL to PDF document
using(PdfDocument document = htmlConverter.Convert("https://www.syncfusion.com"))
{
    // Save the document to file
    document.Save("Output.pdf");
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the **Run** button in the toolbar or press <kbd>F5</kbd> to run the application.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Open the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>) and run the following command to create a new Console Application project:

```
dotnet new console -n CreatePdfConsole
```

Step 2: Replace **CreatePdfConsole** with your desired project name.

Step 3: Navigate to the project directory using the following command:

```
cd CreatePdfConsole
```

Step 4: Use the following command in the terminal to add the [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows) package to your project:

```
dotnet add package Syncfusion.HtmlToPdfConverter.Net.Windows
```

Step 5: Include the following namespaces in the **Program.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.HtmlConverter;

{% endhighlight %}
{% endtabs %}

Step 6: Add the following code sample to **Program.cs** to convert HTML to PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method of the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class. The HTML content will be scaled based on the [ViewPortSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html#Syncfusion_HtmlConverter_BlinkConverterSettings_ViewPortSize) property of the [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Initialize the HTML to PDF converter
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
// Create Blink converter settings
BlinkConverterSettings blinkConverterSettings = new BlinkConverterSettings();
// Set Blink viewport size for rendering
blinkConverterSettings.ViewPortSize = new Syncfusion.Drawing.Size(1280, 0);
// Assign Blink converter settings to the HTML converter
htmlConverter.ConverterSettings = blinkConverterSettings;
// Convert URL to PDF document
using(PdfDocument document = htmlConverter.Convert("https://www.syncfusion.com"))
{
    // Save the document to file
    document.Save("Output.pdf");
}

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Run the following command in the terminal to build the project:

```
dotnet build
```

Step 8: Run the project.

Run the following command in the terminal to run the application:

```
dotnet run
```

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

Step 1: Open JetBrains Rider and create a new .NET Core console application project:

* Launch **JetBrains Rider**.
* Click **New Solution** on the welcome screen:

![Launch JetBrains Rider](htmlconversion_images/Launch-JetBrains-Rider.png)

* In the **New Solution** dialog, select **Project Type** as **Console**.
* Enter a project name and specify the location.
* Select the target framework (e.g., .NET 8.0, .NET 9.0, or .NET 10.0).
* Click **Create**:

![Creating a new Console project in JetBrains Rider](htmlconversion_images/Create-Console-NET-core-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/):

* Click the **NuGet** icon in the Rider toolbar and type [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows) in the search bar.
* Ensure that **nuget.org** is selected as the package source.
* Select the latest **Syncfusion.HtmlToPdfConverter.Net.Windows** NuGet package from the list.
* Click the **+** (Add) button to add the package:

![Select the Syncfusion.HtmlToPdfConverter.Net.Windows package](htmlconversion_images/HTML-to-PDF-Package-JetBrains.png)

Step 3: Include the following namespaces in the **Program.cs** file:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.Pdf;
using Syncfusion.HtmlConverter;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code sample to **Program.cs** to convert HTML to PDF document using the [Convert](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html#Syncfusion_HtmlConverter_HtmlToPdfConverter_Convert_System_String_) method of the [HtmlToPdfConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.HtmlToPdfConverter.html) class. The HTML content will be scaled based on the [ViewPortSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html#Syncfusion_HtmlConverter_BlinkConverterSettings_ViewPortSize) property of the [BlinkConverterSettings](https://help.syncfusion.com/cr/document-processing/Syncfusion.HtmlConverter.BlinkConverterSettings.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Initialize the HTML to PDF converter
HtmlToPdfConverter htmlConverter = new HtmlToPdfConverter();
// Create Blink converter settings
BlinkConverterSettings blinkConverterSettings = new BlinkConverterSettings();
// Set Blink viewport size for rendering
blinkConverterSettings.ViewPortSize = new Syncfusion.Drawing.Size(1280, 0);
// Assign Blink converter settings to the HTML converter
htmlConverter.ConverterSettings = blinkConverterSettings;
// Convert URL to PDF document
using(PdfDocument document = htmlConverter.Convert("https://www.syncfusion.com"))
{
    // Save the document to file
    document.Save("Output.pdf");
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button in the toolbar or press <kbd>F5</kbd> to run the application.

{% endtabcontent %}
 
{% endtabcontents %}

By executing the program, you will obtain the PDF document as follows:

![HTML to PDF output document](htmlconversion_images/htmltopdfoutput.png)

A complete working sample for converting HTML to PDF in a console application can be downloaded from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Console).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) to explore the rich set of Syncfusion<sup>&reg;</sup> HTML to PDF converter library features. 

You can also view the online sample to [convert HTML to PDF documents](https://document.syncfusion.com/demos/pdf/htmltopdf#/tailwind3) in ASP.NET Core.