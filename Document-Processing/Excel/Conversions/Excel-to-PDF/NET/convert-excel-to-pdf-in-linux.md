---
title: Convert an Excel document to PDF on Linux | Syncfusion
description: Convert an Excel document to PDF in .NET Core application on Linux using Syncfusion .NET Core Excel library (XlsIO) without Microsoft Office
platform: document-processing
control: XlsIO
documentation: UG
---
# Convert an Excel document to PDF on Linux

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Core Excel library](https://www.syncfusion.com/document-processing/excel-framework/net-core/excel-library) used to create, read, edit and **convert Excel documents** programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **convert an Excel document to PDF on Linux**.

## Steps to convert an Excel document to PDF on Linux

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# .NET Core console application.
![Create .NET Core console project in Visual Studio](Linux_images/Linux_images_img1.png)

Step 2: Name the project.

![Name the project](Linux_images/Linux_images_img2.png)

Step 3: Select the framework and click **Create** button.

![Framework version](Linux_images/Linux_images_img3.png)

Step 4: Install the following Nuget packages in your application from [NuGet.org](https://www.nuget.org/) by execute the following command.

* [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core)
* [SkiaSharp.NativeAssets.Linux](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.0)
* [HarfBuzzSharp.NativeAssets.Linux](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.1)

{% tabs %}
{% highlight KCONFIG %}
dotnet add package Syncfusion.XlsIO.Net.Core -v 29.1.41 -s https://www.nuget.org/
dotnet add package SkiaSharp.NativeAssets.Linux -v 3.119.0 -s https://www.nuget.org/
dotnet add package HarfBuzzSharp.NativeAssets.Linux -v 8.3.1.1 -s https://www.nuget.org/
{% endhighlight %}
{% endtabs %}

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components. 

Step 5: Include the following Namespaces in the Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;
{% endhighlight %}
{% endtabs %}

Step 6: Add the following code snippet in Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Load existing Excel file
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Sample.xlsx"));

    //Convert to PDF
    XlsIORenderer renderer = new XlsIORenderer();
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    #region Save
    //Saving the workbook
    pdfDocument.Save(Path.GetFullPath("Output/Sample.pdf"));
    #endregion
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Create a new C# .NET Core console application.
![Create .NET Core console project in Visual Studio Code](Linux_images/Linux_images_img5.png)

Step 2: Name the project and create the project.

![Name the project](Linux_images/Linux_images_img6.png)

Alternatively, create a ASP.NET Core console application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new console -o Convert-Excel-to-PDF
cd Convert-Excel-to-PDF
```

Step 3: Install the following Nuget packages in your application from [NuGet.org](https://www.nuget.org/) by execute the following command.

* [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core)
* [SkiaSharp.NativeAssets.Linux](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.0)
* [HarfBuzzSharp.NativeAssets.Linux](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.1)

{% tabs %}
{% highlight KCONFIG %}
dotnet add package Syncfusion.XlsIO.Net.Core -v 29.1.41 -s https://www.nuget.org/
dotnet add package SkiaSharp.NativeAssets.Linux -v 3.119.0 -s https://www.nuget.org/
dotnet add package HarfBuzzSharp.NativeAssets.Linux -v 8.3.1.1 -s https://www.nuget.org/
{% endhighlight %}
{% endtabs %}

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components. 

Step 4: Include the following Namespaces in the Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Pdf;
{% endhighlight %}
{% endtabs %}

Step 5: Add the following code snippet in Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    //Load existing Excel file
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/Sample.xlsx"));

    //Convert to PDF
    XlsIORenderer renderer = new XlsIORenderer();
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    #region Save
    //Saving the workbook
    pdfDocument.Save(Path.GetFullPath("Output/Sample.pdf"));
    #endregion
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}
A complete working example of how to convert an Excel document to PDF on Linux is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Linux/Convert%20Excel%20to%20PDF).

By executing the program, you will get the **PDF document** as follows.

![Output File](ASP-NET-Core_images\ASP-NET-Core_images_img9.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to PDF](https://ej2.syncfusion.com/aspnetcore/Excel/ExcelToPDF#/material3) in ASP.NET Core.
