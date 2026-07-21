---
title: Perform OCR on PDF and Image Files in macOS | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images in macOS with different Tesseract versions using Syncfusion .NET OCR library. 
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
--- 

# Perform OCR on macOS

The [.NET OCR library](https://www.syncfusion.com/document-sdk/net-pdf-library/ocr-process) is used to extract text from scanned PDFs and images in .NET console applications on macOS with the help of Google's [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

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
- Visual Studio or Visual Studio Code

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

## Steps to perform OCR on an entire PDF document on macOS

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new .NET Core console application project.
![Mac OS console application](OCR-Images/Mac_OS_Console.png)

Step 2: Select your target framework (.NET 8.0 or later).

Step 3: Install the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) NuGet package into your project from [NuGet.org](https://www.nuget.org/).
![Mac OS NuGet path](OCR-Images/Mac_OS_NuGet_path.png)

Step 4: Include the following namespaces in the **Program.cs** file.
{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}

{% endtabs %}

Step 5: Add the following code sample to the **Program.cs** file to perform OCR on a PDF document.
{% tabs %}

{% highlight c# tabtitle="C#" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
   FileStream fileStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
   //Load a PDF document.
   PdfLoadedDocument lDoc = new PdfLoadedDocument(fileStream);
   //Set the Tesseract version
   processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
   //Set the OCR language to be processed.
   processor.Settings.Language = Languages.English;
   //Process OCR by providing the PDF document.
   processor.PerformOCR(lDoc);
   //Save the document to disk.
   lDoc.Save("OCR.pdf");
   lDoc.Close();
   fileStream.Dispose();
   Console.WriteLine("OCR processing completed successfully!");
}

{% endhighlight %}

{% endtabs %}

Step 6: Build the project.

Click **Build > Build Solution** or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the **Start** button (green arrow) or press <kbd>F5</kbd> to run the app.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Open the terminal (Ctrl+`) and run the following command to create a new .NET Core console application project:

```
dotnet new console -n CreatePdfMacOSApp
```

Step 2: Replace `CreatePdfMacOSApp` with your desired project name.

Step 3: Navigate to the project directory using the following command:

```
cd CreatePdfMacOSApp
```

Step 4: Use the following command in the terminal to add the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) package to your project:

```
dotnet add package Syncfusion.PDF.OCR.Net.Core
```

Step 5: Include the following namespaces in the **Program.cs** file.
{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}

{% endtabs %}

Step 6: Add the following code sample to the **Program.cs** file to perform OCR on a PDF document.
{% tabs %}

{% highlight c# tabtitle="C#" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
   FileStream fileStream = new FileStream("Input.pdf", FileMode.Open, FileAccess.Read);
   //Load a PDF document.
   PdfLoadedDocument lDoc = new PdfLoadedDocument(fileStream);
   //Set the Tesseract version.
   processor.Settings.TesseractVersion = TesseractVersion.Version5_0;
   //Set the OCR language to be processed.
   processor.Settings.Language = Languages.English;
   //Process OCR by providing the PDF document.
   processor.PerformOCR(lDoc);
   //Save the document to disk.
   lDoc.Save("OCR.pdf");
   lDoc.Close();
   fileStream.Dispose();
   Console.WriteLine("OCR processing completed successfully!");
}

{% endhighlight %}

{% endtabs %}

Step 7: Build the project.

Run the following command in the terminal to build the project:

```
dotnet build
```

Step 8: Run the project.

Run the following command in the terminal to run the project:

```
dotnet run
```
{% endtabcontent %}

{% endtabcontents %}

By executing the program, you will get a PDF document with extracted text as follows. 
![OCR output document](OCR-Images/Output.png)

A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Mac).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.