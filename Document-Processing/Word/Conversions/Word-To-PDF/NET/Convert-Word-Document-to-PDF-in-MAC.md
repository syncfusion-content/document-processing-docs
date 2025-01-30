---
title: Convert Word to PDF on macOS | Syncfusion<sup>&reg;</sup>
description: Convert Word to PDF in ASP.NET Core application on macOS using .NET Core Word (DocIO) library without Microsoft Word or interop dependencies.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to PDF on macOS

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in .NET Core application on macOS**.

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

## Steps to convert Word document to PDF in .NET Core application on macOS

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new .NET Core console application project.

![Create .NET Core console application in Visual Studio](Mac-images/CreateProject.png)

Step 2: Select the project version.

![Select Project version](Mac-images/selectprojectverion.png)

Step 3: Install the [Syncfusion.DocIORenderer.Net.Core ](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).Install the Nuget Package on Mac please refer this [Link](https://learn.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough?view=vsmac-2022).

{% endtabcontent %}


{% tabcontent Visual Studio Code %}

Step 1: Create a new .NET Core console application project using the command palette.
1. Open the command palette by pressing <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> and type **.NET:New Project** and enter.
2. Choose the **Console App** template.
3. Select the project location, type the project name and press enter.
4. Then choose **Create project**.

Alternatively, use the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new console -n Convert-Word-document-to-PDF
```

Step 2: Run the following command to navigate to the project directory.

```
cd Convert-Word-document-to-PDF
```

Step 3: Run the following command to install [Syncfusion.DocIORenderer.NET.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.NET.Core) to the console project.

```
dotnet add package Syncfusion.DocIORenderer.NET.Core
```

{% endtabcontent %}

{% endtabcontents %}

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.

Step 4: Include the following Namespaces in the Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;
{% endhighlight %}

{% endtabs %}

Step 5: Add the following code snippet in Program.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}
using (FileStream docStream = new FileStream(Path.GetFullPath(@"../../../Data/Template.docx"), FileMode.Open, FileAccess.Read))
{
    //Loads file stream into Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to PDF conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Converts Word document into PDF document
            using (PdfDocument pdfDocument = render.ConvertToPDF(wordDocument))
            {
                //Saves the PDF document to MemoryStream.
                MemoryStream stream = new MemoryStream();
                pdfDocument.Save(stream);
                stream.Position = 0;

                //Save the PDF document in local machine
                Stream file = File.Create("Sample.pdf");
                stream.CopyTo(file);
                file.Close();
            }
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 6: Build the project.

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

Step 7: Run the project.

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/Mac).

By executing the program, you will get the **PDF document** as follows. The output will be saved in bin folder.

![Word to PDF in macOS](WordToPDF_images/OutputImage.png)

Click [here](https://www.syncfusion.com/document-processing/word-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Word library (DocIO) features. 

An online sample link to [convert Word document to PDF](https://ej2.syncfusion.com/aspnetcore/Word/WordToPDF#/material3) in ASP.NET Core. 