![image](https://github.com/user-attachments/assets/9432ebd8-7f12-4845-9698-902c39b88265)![image](https://github.com/user-attachments/assets/aa628f29-65d5-4f89-98d7-64afa956788b)---
title: Convert Word to PDF in ASP.NET Core | Syncfusion&reg;
description: Convert Word to PDF without Microsoft Word or interop dependencies in ASP.NET Core application using .NET Core Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word document to PDF in ASP.NET Core

Syncfusion&reg; Essential&reg; DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-processing/word-framework/net-core/word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in ASP.NET Core**.

## Steps to convert word document to PDF in C#:

**Prerequisites:**

{% tabcontents %}

{% tabcontent Visual Studio %}
* Visual Studio 2019 Preview or later
* Install the [.NET Core SDK 3.1 Preview or Greater](https://dotnet.microsoft.com/en-us/download/dotnet/3.1)
{% endtabcontent %}
{% tabcontent Visual Studio Code %}
* Visual Studio Code
* Install the [.NET Core SDK 3.1 Preview or Greater](https://dotnet.microsoft.com/en-us/download/dotnet/3.1)
* Open Visual Studio Code and install the [C# for Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) from the Extensions Marketplace.
{% endtabcontent %}

{% endtabcontents %}

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new ASP.NET Core Web application (Model-View-Controller) project.

![Create ASP.NET Core Web application in Visual Studio](ASP-NET-Core_images/CreateProjectforConversion.png)

Step 2: Install the [Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install DocIO .NET Core NuGet package](ASP-NET-Core_images/NugetPackage.png)

{% endtabcontent %}
 

{% tabcontent Visual Studio Code %}

Step 1: Create a new ASP.NET Core Web application project using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new webapp -n Convert-Word-document-to-PDF
```

```
cd Convert-Word-document-to-PDF
```

Alternatively, use command palette
1. Open the command palette by pressing Ctrl+Shift+P and type .NET:New Project and enter.
2. Choose the ASP.NET Core Web App( Model-View-Controller) MVC template.
3. Select the project location, type the project name and press enter.
4. Then choose Create project

Step 2: Run the following command to install [Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core) to the .NET MAUI project.

```
dotnet add package Syncfusion.DocIORenderer.Net.Core
```

{% endtabcontent %}
 
{% endtabcontents %}

N> Starting with v16.2.0.x, if you reference Syncfusion&reg; assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion&reg; license key in your application to use our components.

Step 3: Include the following namespaces in the HomeController.cs file.

{% tabs %}

{% highlight c# tabtitle="C#" %}

using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.DocIORenderer;
using Syncfusion.Pdf;

{% endhighlight %}

{% endtabs %}

Step 4: A default action method named Index will be present in HomeController.cs. Right click on Index method and select **Go To View** where you will be directed to its associated view page **Index.cshtml**.

Step 6: Add a new button in the Index.cshtml as shown below.

{% tabs %}

{% highlight c# tabtitle="C#" %}

@{Html.BeginForm("ConvertWordtoPDF", "Home", FormMethod.Get);
{
<div>
    <input type="submit" value="Convert Word Document to PDF" style="width:220px;height:27px" />
</div>
}
Html.EndForm();
}

{% endhighlight %}

{% endtabs %}

Step 5: Add a new action method **ConvertWordDocumentToPdf** in HomeController.cs and include the below code snippet to **convert the Word document to Pdf** and download it.

{% tabs %}

{% highlight c# tabtitle="C#" %}

//Open the file as Stream
using (FileStream docStream = new FileStream(Path.GetFullPath("Data/Template.docx"), FileMode.Open, FileAccess.Read))
{
    //Loads file stream into Word document
    using (WordDocument wordDocument = new WordDocument(docStream, FormatType.Docx))
    {
        //Instantiation of DocIORenderer for Word to PDF conversion
        using (DocIORenderer render = new DocIORenderer())
        {
            //Converts Word document into PDF document
            PdfDocument pdfDocument = render.ConvertToPDF(wordDocument);

            //Saves the PDF document to MemoryStream.
            MemoryStream stream = new MemoryStream();
            pdfDocument.Save(stream);
            stream.Position = 0;

            //Download PDF document in the browser.
            return File(stream, "application/pdf", "Sample.pdf");
        }
    }
}

{% endhighlight %}

{% endtabs %}

Step 6: Build the project.

{% tabcontents %}

{% tabcontent Visual Studio %}

Click on Build > Build Solution or press Ctrl + Shift + B to build the project.

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

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Convert-Word-document-to-PDF/ASP.NET-Core).

By executing the program, you will get the **PDF document** as follows.

![Output PDF document in ASP.NET Core](WordToPDF_images/OutputImage.png)

Click [here](https://www.syncfusion.com/document-processing/word-framework/net-core) to explore the rich set of Syncfusion&reg; Word library (DocIO) features. 

An online sample link to [convert Word document to PDF](https://ej2.syncfusion.com/aspnetcore/Word/WordToPDF#/material3) in ASP.NET Core.
