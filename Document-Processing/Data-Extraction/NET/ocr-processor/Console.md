---
title: Perform OCR on PDF and image files in Console | Syncfusion
description: Learn how to perform OCR on scanned PDF documents and images with different tesseract versions in a Console App by using the Syncfusion PDF library efficiently
platform: document-processing
control: PDF
documentation: UG
--- 

# Perform OCR in Console Application

The [.NET OCR library](https://www.syncfusion.com/document-sdk/net-pdf-library/ocr-process) is used to extract text from scanned PDFs and images in console application with the help of Google's [Tesseract](https://github.com/tesseract-ocr/tesseract) Optical Character Recognition engine.

## Steps to perform OCR on the entire PDF document in Console application

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://dotnet.microsoft.com/en-us/download).
* Install Visual Studio: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download?_exp_download=d53503e735).

Step 1: Create a new .NET Core console application project.
![Create Console application](OCR-Images/Console-1.png)

Step 2:  In configuration windows, name your project and select Next.
![Configuration window1](OCR-Images/Console-2.png)
![Configuration window2](OCR-Images/Console-3.png)

Step 3:  Install the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) NuGet package as a reference to your .NET Standard applications from [NuGet.org](https://www.nuget.org/).   
![NuGet package installation](OCR-Images/OCR-Core-NuGet-package.png)

N> 1. Beginning from version 21.1.x, the default configuration includes the addition of the TesseractBinaries and Tesseract language data folder paths, eliminating the requirement to explicitly provide these paths.
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Include the following namespaces in the *Program.cs*.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 5: Include the following code sample in *Program.cs* using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf"));
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);
    //Save the PDF document.
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    //Close the document.
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 6: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 7: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

**Prerequisites**:

* Install .NET SDK: Ensure that you have the .NET SDK installed on your system. You can download it from the [.NET Downloads page](https://code.visualstudio.com/download?_exp_download=d53503e735).
* Install Visual Studio Code:  Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download?_exp_download=d53503e735).
* Install C# Extension for VS Code: Open Visual Studio Code, go to the Extensions view (Ctrl+Shift+X), and search for 'C#'. Install the official [C# extension provided by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).

Step 1: Open the terminal (Ctrl+` ) and run the following command to create a new Console Application project.

```
dotnet new console -n ConsoleApplication
```
Step 2: Replace ****ConsoleApplication** with your desired project name.

Step 3: Navigate to the project directory using the following command

```
cd ConsoleApplication
```
Step 4: Use the following command in the terminal to add the [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) package to your project.

```
dotnet add package Syncfusion.PDF.OCR.Net.Core
```
N> 1. Beginning from version 21.1.x, the default configuration includes the addition of the TesseractBinaries and Tesseract language data folder paths, eliminating the requirement to explicitly provide these paths.
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 5: Include the following namespaces in the *Program.cs*.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 6: Include the following code sample in *Program.cs* using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf"));
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);
    //Save the PDF document.
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    //Close the document.
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 7: Build the project.

Run the following command in terminal to build the project.

```
dotnet build
```

Step 8: Run the project.

Run the following command in terminal to build the project.

```
dotnet run
```

{% endtabcontent %}

{% tabcontent JetBrains Raider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1. Open JetBrains Rider and create a new .NET Core console application project.
* Launch JetBrains Rider.
* Click new solution on the welcome screen.

![Launch JetBrains Rider](OCR-Images/Launch-JetBrains-Rider.png)

* In the new Solution dialog, select Project Type as Console.
* Enter a project name and specify the location.
* Select the target framework (e.g., .NET 8.0, .NET 9.0 or .NET 10.0).
* Click create.

![Creating a new Console project in JetBrains Rider](OCR-Images/Create-Console-NET-core-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.PDF.OCR.Net.Core](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core) in the search bar.
* Ensure that "NuGet.org" is selected as the package source.
* Select the latest Syncfusion.PDF.OCR.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.PDF.OCR.NET package](OCR-Images/JetBrains-Package.png)

N> 1. Beginning from version 21.1.x, the default configuration includes the addition of the TesseractBinaries and Tesseract language data folder paths, eliminating the requirement to explicitly provide these paths.
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in the *Program.cs*.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.OCRProcessor;
using Syncfusion.Pdf.Parsing;

{% endhighlight %}
{% endtabs %}

Step 4: Include the following code sample in *Program.cs* using [PerformOCR](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html#Syncfusion_OCRProcessor_OCRProcessor_PerformOCR_Syncfusion_Pdf_Parsing_PdfLoadedDocument_System_String_) method of the [OCRProcessor](https://help.syncfusion.com/cr/document-processing/Syncfusion.OCRProcessor.OCRProcessor.html) class. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Initialize the OCR processor.
using (OCRProcessor processor = new OCRProcessor())
{
    //Load an existing PDF document.
    PdfLoadedDocument document = new PdfLoadedDocument(Path.GetFullPath(@"Data/Input.pdf"));
    //Set OCR language.
    processor.Settings.Language = Languages.English;
    //Perform OCR with input document and tessdata (Language packs).
    processor.PerformOCR(document);
    //Save the PDF document.
    document.Save(Path.GetFullPath(@"Output/Output.pdf"));
    //Close the document.
    document.Close(true);
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

{% endtabcontent %}

{% endtabcontents %}

By executing the program, you will get the PDF document as follows
![Console output PDF document](OCR-Images/OCR-output-image.png)
    
A complete working sample can be downloaded from [GitHub](https://github.com/SyncfusionExamples/OCR-csharp-examples/tree/master/Console).

Click [here](https://www.syncfusion.com/document-sdk/net-pdf-library) to explore the rich set of Syncfusion<sup>&reg;</sup> PDF library features.