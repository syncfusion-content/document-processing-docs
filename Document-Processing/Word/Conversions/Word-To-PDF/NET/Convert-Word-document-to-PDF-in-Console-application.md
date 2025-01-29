---
title: Convert Word to PDF in Console Application | Syncfusion
description: Convert Word to PDF in Console application using .NET Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to PDF in Console application

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Word library](https://www.syncfusion.com/document-processing/word-framework/net/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert Word to PDF in Console application**.

## Convert Word to PDF using .NET Core and Latest

**Prerequisites:**

{% tabcontents %}

{% tabcontent Visual Studio %}

* Visual Studio 2019 Preview or later.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

* Visual Studio Code.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.

{% endtabcontent %}

{% endtabcontents %}

The below steps illustrates **convert Word to PDF** in console application using **.NET Core**.

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new **.NET Core console application** project.

![Create a .NET Core Console application in Visual Studio](Console-Images/NET/Console-Template-Net-Core.png)

Step 2: Install the [Syncfusion.DocIORenderer.Net.Core ](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.DocIORenderer.Net.Core NuGet Package](ASP-NET-Core_images/NugetPackage.png)

{% endtabcontent %}
 

{% tabcontent Visual Studio Code %}

Step 1: Create a new .NET Core console application project using the command palette.
1. Open the command palette by pressing `Ctrl+Shift+P` and type **.NET:New Project** and enter.
2. Choose the **Console App** template.
3. Select the project location, type the project name and press enter.
4. Then choose **Create project**.

Alternatively, use the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new console -n Convert-Word-document-to-PDF
```

Run the following command to navigate to the project directory.

```
cd Convert-Word-document-to-PDF
```

Step 2: Run the following command to install [Syncfusion.DocIORenderer.NET.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.NET.Core) to the console project.

```
dotnet add package Syncfusion.DocIORenderer.NET.Core
```

{% endtabcontent %}
 
{% endtabcontents %}

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 4: Include the below code snippet in **Program.cs** to **convert Word to PDF**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream.
using (FileStream docStream = new FileStream(Path.GetFullPath("Data/Template.docx"), FileMode.Open, FileAccess.Read))
{
    //Load file stream into Word document.
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to PDF conversion.
        using (DocIORenderer render = new DocIORenderer())
        {
            //Convert Word document into PDF document.
            PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);

            //Save the PDF document.
            using(FileStream stream = new FileStream("Sample.pdf", FileMode.Create, FileAccess.Write))
            {
                pdfDocument.Save(stream);
            }           
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click on Build → Build Solution or press Ctrl + Shift + B to build the project.

{% endtabcontent %}
 
{% tabcontent Visual Studio Code %}

Run the following command in terminal to build the project.

```
dotnet build
```

{% endtabcontent %}
 
{% endtabcontents %}

Step 6: Run the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click the Start button (green arrow) or press F5 to run the app.

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Run the following command in terminal to build the project.

```
dotnet run
```
{% endtabcontent %}

{% endtabcontents %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/.NET).

By executing the program, you will get the **PDF** as follows.

![Output PDF document in .NET Core console application](WordToPDF_images/OutputImage.png)

## Convert Word to PDF in .NET Framework

The below steps illustrates creating a simple **Word document** in console application using **.NET Framework**.

Step 1: Create a new **.NET FrameWork console application** project.
![Create a .NET FrameWork Console application in Visual Studio](Console-Images/NET-FrameWork/Console-Template-Net-FrameWork.png)

Step 2: Install [Syncfusion.DocToPdfConverter.WinForms](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.WinForms) NuGet package as a reference to your Windows Forms application from the [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.DocToPdfConverter.WinForms NuGet package](Windows-Forms_images/Nuget-Package-WordtoPDF.png)

N> 1. The [Syncfusion.DocToPdfConverter.WinForms](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.WinForms) is a dependency for Syncfusion<sup>&reg;</sup> Windows Forms GUI controls and is named with the suffix "WinForms". It contains platform-independent .NET Framework assemblies (compatible with versions 4.0, 4.5, 4.5.1, and 4.6) for the Word library and does not include any Windows Forms-related references or code. Therefore, we recommend using this package for .NET Framework Console applications.
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 3: Include the following namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO.DLS;
using Syncfusion.DocIO;
using Syncfusion.DocToPDFConverter;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 5: Include the below code snippet in **Program.cs** to **convert Word to PDF**.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Load the existing Word document.
using (WordDocument document = new WordDocument("Data/Input.docx", FormatType.Docx))
{
    //Instantiation of DocToPDFConverter for Word to PDF conversion.
    using (DocToPDFConverter converter = new DocToPDFConverter())
    {
        //Convert Word document into PDF document.
        using (PdfDocument pdfDocument = converter.ConvertToPDF(document))
        {
            //Save the PDF document.
            pdfDocument.Save("Sample.pdf");                       
        }
    }               
}

{% endhighlight %}
{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/.NET-Framework).

By executing the program, you will get the **PDF** as follows.

![Output PDF document in .NET FrameWork console application](WordToPDF_images/OutputImage.png)

An online sample link to [convert Word document to PDF](https://ej2aspnetcore.azurewebsites.net/aspnetcore/word/wordtopdf#/material3) in ASP.NET Core.
