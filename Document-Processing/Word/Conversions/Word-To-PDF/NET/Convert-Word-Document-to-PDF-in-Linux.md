---
title: Convert Word to PDF in Linux | Syncfusion
description: Convert Word to PDF in Linux using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to PDF in Linux

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in .NET Core application on Linux**.

## Steps to convert a Word document to PDF in .NET Core application on Linux

{% tabcontents %}

{% tabcontent Visual Studio %}

**Prerequisites:**

* Visual Studio 2022.
* Install [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later.

Step 1: Execute the following command in **Linux terminal** to create a new .NET Core Console application.

{% tabs %}
{% highlight KCONFIG %}

dotnet new console

{% endhighlight %}
{% endtabs %}

![Create .NET Core console application on Linux](Linux-images/CreateNewProject1.png)

Step 2: Install the following **Nuget packages** in your application from [Nuget.org](https://www.nuget.org/) by execute the following command.

* [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) 
* [SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)
* [HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)

{% tabs %}
{% highlight KCONFIG %}

dotnet add package Syncfusion.DocIORenderer.Net.Core -v 22.1.34 -s https://www.nuget.org/
dotnet add package SkiaSharp.NativeAssets.Linux -v 3.119.1 -s https://www.nuget.org/
dotnet add package HarfBuzzSharp.NativeAssets.Linux -v 8.3.1.2 -s https://www.nuget.org/

{% endhighlight %}
{% endtabs %}

N> 1. For other Linux environments, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf#additional-nuget-packages-required-for-linux) for detailed information on the additional NuGet packages required. 
N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.
N> 3. If you are using prior to v23.1.40 release, please refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#what-are-the-nuget-packages-to-be-installed-to-perform-word-to-pdf-conversion-in-linux-os) to know about how to perform Word to PDF conversion in Linux.

Step 3: Add the following Namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code snippet in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream("Data/Template.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to PDF conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Converts Word document into PDF document
            using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
            {
                //Create FileStream to save the PDF file.
                using (FileStream outputStream = new FileStream("Result.pdf", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
                {
                    //Saves the PDF file.
                    pdfDocument.Save(outputStream);
                }
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 5: Execute the following command to **restore** the NuGet packages.

{% tabs %}
{% highlight KCONFIG %}

dotnet restore

{% endhighlight %}
{% endtabs %}

![Restore the NuGet packages](Linux-images/Restore.png)

Step 6: Execute the following command in **terminal** to **run the application**.

{% tabs %}
{% highlight KCONFIG %}

dotnet run

{% endhighlight %}
{% endtabs %}

![Run the Applcation](Linux-images/Run.png)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Linux/Convert-Word-Document-to-PDF).

By executing the program, you will get the **PDF** as follows. The output will be saved in parallel to program.cs file.

![Word to PDF in Linux](WordToPDF_images/OutputImage.png)

{% endtabcontent %}

{% tabcontent JetBrains Rider %}

**Prerequisites:**

* JetBrains Rider.
* Install .NET 8 SDK or later.

Step 1: Open JetBrains Rider and create a new .NET Core console application project.
* Launch JetBrains Rider.
* Click **New Solution** on the welcome screen.

![Launch JetBrains Rider](Linux-images/Launch-JetBrains-Rider.png)

* In the New Solution dialog, select **Project Type** as **Console**.
* Select the target framework (e.g., .NET 8.0, .NET 9.0).
* Enter a project name and specify the location.
* Click create.

![Creating a new .NET Core console application in JetBrains Rider](Linux-images/Create-Console-NET-core-sample.png)

Step 2: Install the NuGet package from [NuGet.org](https://www.nuget.org/).
* Click the NuGet icon in the Rider toolbar and type [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) in the search bar.
* Ensure that nuget.org is selected as the package source.
* Select the latest Syncfusion.DocIORenderer.Net.Core NuGet package from the list.
* Click the + (Add) button to add the package.

![Select the Syncfusion.DocIORenderer.Net.Core NuGet package](Linux-images/Select-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

* Click the **Install** button to complete the installation.

![Install the Syncfusion.DocIORenderer.Net.Core NuGet package](Linux-images/Install-Syncfusion.DocIORenderer.Net.Core-NuGet.png)

N> 1. For other Linux environments, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf#additional-nuget-packages-required-for-linux) for detailed information on the additional NuGet packages required. 
N> 2. Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

Step 3: Add the following Namespaces in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;

{% endhighlight %}
{% endtabs %}

Step 4: Add the following code snippet in **Program.cs** file.

{% tabs %}
{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream("Data/Template.docx", FileMode.Open, FileAccess.Read))
{
    //Loads an existing Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to PDF conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Converts Word document into PDF document
            using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
            {
                //Create FileStream to save the PDF file.
                using (FileStream outputStream = new FileStream("Result.pdf", FileMode.Create, FileAccess.ReadWrite, FileShare.ReadWrite))
                {
                    //Saves the PDF file.
                    pdfDocument.Save(outputStream);
                }
            }
        }
    }
}

{% endhighlight %}
{% endtabs %}

Step 5: Build the project.

Click the **Build** button in the toolbar or press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd> to build the project.

Step 6: Run the project.

Click the **Run** button (green arrow) in the toolbar or press <kbd>F5</kbd> to run the app.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Linux/Convert-Word-Document-to-PDF).

By executing the program, you will get the **PDF** as follows. The output will be saved in parallel to program.cs file.

![Word to PDF in Linux](WordToPDF_images/OutputImage.png)

{% endtabcontent %}

{% endtabcontents %}

Click [here](https://www.syncfusion.com/document-processing/word-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features. 

An online sample link to [convert Word document to PDF](https://ej2.syncfusion.com/aspnetcore/Word/WordToPDF#/material3) in ASP.NET Core. 

## Frequently Asked Questions

* [How to perform Word to PDF in Linux prior to v18.4 release?](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/linux-faqs#how-to-perform-word-to-pdf-in-linux-prior-to-v184-release)
* [What are the NuGet packages to be installed to perform Word to PDF conversion in Linux OS?](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/linux-faqs#what-are-the-nuget-packages-to-be-installed-to-perform-word-to-pdf-conversion-in-linux-os)
* [How to resolve LibSkiaSharp not found exception?](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/linux-faqs#how-to-resolve-libskiasharp-not-found-exception)
