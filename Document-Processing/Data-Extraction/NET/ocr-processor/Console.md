---
title: Perform OCR on PDF and image files in Console | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images with different tesseract versions in a Console App by using the Syncfusion PDF library efficiently
platform: document-processing
control: PDF
documentation: UG
--- 

# Perform OCR in Console Application

The [.NET OCR library](https://www.syncfusion.com/document-sdk/net-pdf-library/ocr-process) is used to extract text from scanned PDFs and images in console applications with the help of Google's [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

## Prerequisites

**Version Compatibility**

- Syncfusion.PDF.OCR.Net.Core supports .NET 8.0 and later versions.

**Supported Inputs**

The OCR processor supports the following input formats:

- Single-page and multi-page PDF documents
- Scanned images in common formats (JPEG, PNG, TIFF)
- Recommended DPI: 200 DPI or higher for optimal OCR accuracy

**Required Software**

- .NET 8 SDK or later
- Visual Studio, Visual Studio Code, or JetBrains Rider

**Register the License Key**

N> Starting with v16.2.0.x, if you reference Syncfusion® assemblies from trial setup or from the NuGet feed, you must add the Syncfusion.Licensing assembly reference and register a license key in your application. For more information, see the licensing documentation.

Include the following code in the **Program.cs** file to register the license key:

{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.Licensing;

// Register Syncfusion license at application startup
SyncfusionLicenseProvider.RegisterLicense("YOUR LICENSE KEY");

{% endhighlight %}
{% endtabs %}

N> 1. Beginning from version 21.1.x, the TesseractBinaries and Tesseract language data folders are now included by default; you no longer have to set these paths explicitly.
N> 2. The current NuGet package includes Tesseract 5.0, which provides support for 100+ languages.

## Steps to perform OCR on an entire PDF document in Console application

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new .NET console application project targeting **.NET 8.0**.
![Create Console application](OCR-Images/Console-1.png)

Step 2: In the project configuration window, name your project and select **Next**, then select the target framework (.NET 6 or later) and click **Create**.
![Configuration window1](OCR-Images/Console-2.png)
![Configuration window2](OCR-Images/Console-3.png)

Step 3: Install the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) NuGet package into your console application from [NuGet.org](https://www.nuget.org/).   
![NuGet package installation](OCR-Images/OCR-Core-NuGet-package.png)

N> 1. Beginning from version 21.1.x, the TesseractBinaries and Tesseract language data folders are now included by default; you no longer have to set these paths explicitly.
N> 2. The current NuGet package includes Tesseract 5.0, which provides support for 100+ languages.

Step 4: Include the following namespaces in **Program.cs**:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 5: Include the following code sample in **Program.cs** using the [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Initialize the OCR processor
using (OCRProcessor processor = new OCRProcessor())
{
    // Load an existing PDF document
    PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf"));
    // Set the Tesseract version
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
    // Set OCR language
    processor.Settings.Language = Languages.English;
    // Perform OCR on the document
    processor.PerformOCR(document);
    // Save the processed PDF to disk
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    // Close the document
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the application.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Open the terminal (<kbd>Ctrl</kbd>+<kbd>`</kbd>) and run the following command to create a new console application project targeting **.NET 8 or later**:

```
dotnet new console -n ConsoleApplication --framework net8.0
```

Step 2: Replace **ConsoleApplication** with your desired project name.

Step 3: Navigate to the project directory:

```
cd ConsoleApplication
```

Step 4: Use the following command in the terminal to add the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) package:

```
dotnet add package Syncfusion.PDF.OCR.Net.Core
```

Step 5: Include the following namespaces in **Program.cs**:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 6: Include the following code sample in **Program.cs** using the [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Initialize the OCR processor
using (OCRProcessor processor = new OCRProcessor())
{
    // Load an existing PDF document
    PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf"));
    // Set the Tesseract version
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
    // Set OCR language
    processor.Settings.Language = Languages.English;
    // Perform OCR on the document
    processor.PerformOCR(document);
    // Save the processed PDF to disk
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    // Close the document
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Run the following command in terminal to build the project:

```
dotnet build
```

Step 8: Run the project.

Run the following command in terminal to run the application:

```
dotnet run
```

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

Step 1: Open JetBrains Rider and create a new .NET console application project:
- Launch JetBrains Rider
- Click **New Solution** on the welcome screen

![Launch JetBrains Rider](OCR-Images/Launch-JetBrains-Rider.png)

- In the new Solution dialog, select **Console** as the Project Type
- Enter a project name and specify the location
- Select the target framework(e.g., .NET 8.0, .NET 9.0 and .NET 10).
- Click **Create**

![Creating a new Console project in JetBrains Rider](OCR-Images/Create-Console-NET-core-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/):
- Click the **NuGet** icon in the Rider toolbar and search for [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core)
- Ensure **NuGet.org** is selected as the package source
- Select the latest Syncfusion.PDF.OCR.Net.Core package from the list
- Click the **+** (Add) button to add the package

![Select the Syncfusion.PDF.OCR.NET package](OCR-Images/JetBrains-Package.png)

Step 3: Include the following namespaces in **Program.cs**:

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 4: Include the following code sample in **Program.cs** using the [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class:

{% tabs %}
{% highlight c# tabtitle="C#" %}

// Initialize the OCR processor
using (OCRProcessor processor = new OCRProcessor())
{
    // Load an existing PDF document
    PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf"));
    // Set the Tesseract version
    processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
    // Set OCR language
    processor.Settings.Language = Languages.English;
    // Perform OCR on the document
    processor.PerformOCR(document);
    // Save the processed PDF to disk
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    // Close the document
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the application.

{% endtabcontent %}

{% endtabcontents %}

By executing the program, you will get a PDF document with extracted text as shown below:
![Console output PDF document](OCR-Images/OCR-output-image.png)
    
A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Console).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.