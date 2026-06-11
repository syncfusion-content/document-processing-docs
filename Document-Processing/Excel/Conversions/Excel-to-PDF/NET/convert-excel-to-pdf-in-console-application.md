---
title: Convert Excel to PDF in Console Application | Syncfusion
description: Convert Excel to PDF in Console application using Syncfusion .NET Core Excel library (XlsIO) without Microsoft Office
platform: document-processing
control: XlsIO
documentation: UG
---

# Convert Excel to PDF in Console application

Syncfusion<sup>&reg;</sup> XlsIO is a [.NET Core Excel library](https://www.syncfusion.com/document-processing/excel-framework/net-core/excel-library) used to create, read, edit and **convert Excel documents** programmatically without **Microsoft Excel** or interop dependencies. Using this library, you can **convert an Excel document to PDF in Console application**.

## Convert Excel to PDF using .NET Core

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# .NET Core console application.
![Create .NET Core console project in Visual Studio](Mac_images/MacOS_images_img1.png)

Step 2: Name the project.

![Name the project](Mac_images/MacOS_images_img2.png)

Step 3: Select the framework and click **Create** button.

![Framework version](Mac_images/MacOS_images_img3.png)

Step 4: Install the [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.XlsIORenderer.Net.Core NuGet Package](Mac_images/MacOS_images_img4.png)

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
![Create .NET Core console project in Visual Studio Code](Mac_images/MacOS_images_img5.png)

Step 2: Name the project and create the project.

![Name the project](Mac_images/MacOS_images_img6.png)

Alternatively, create a ASP.NET Core console application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new console -o Convert-Excel-to-PDF
cd Convert-Excel-to-PDF
```

Step 3: To **Convert an Excel document to PDF in .NET Core app**, run the following command to  install [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) package.
![Install Syncfusion.XlsIORenderer.Net.Core Nuget Package](Mac_images/MacOS_images_img7.png)

```
dotnet add package Syncfusion.XlsIORenderer.Net.Core
```

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

A complete working example of how to convert an Excel document to PDF using .NET Core is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Console/.NET/ConvertExcelToPDF">this GitHub page</a>.

By executing the program, you will get the **PDF document** as follows.

![Output File](ASP-NET-Core_images\ASP-NET-Core_images_img9.png)

## Convert Excel to PDF using .NET Framework

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# .NET Framework console application.
![Create .NET Core console project in Visual Studio](Console-Apps-images/Console-Framework_img1.png)

Step 2: Name the project.

![Name the project](Console-Apps-images/Console-Framework_img2.png)

Step 3: Install the [Syncfusion.ExcelToPdfConverter.WinForms](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.WinForms) NuGet package as a reference to your project from [NuGet.org](https://www.nuget.org/).

![Install Syncfusion.ExcelToPdfConverter.WinForms NuGet Package](Console-Apps-images/Console-Framework_img3.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components. 

Step 4: Include the following Namespaces in the Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using Syncfusion.ExcelToPdfConverter;
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
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

    //Initialize ExcelToPdfConverter
    ExcelToPdfConverter converter = new ExcelToPdfConverter(workbook);

    //Initialize PDF document
    PdfDocument pdfDocument = new PdfDocument();

    //Convert Excel document to PDF document
    pdfDocument = converter.Convert();

    //Save the converted PDF document
    pdfDocument.Save("Sample.pdf");
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}  

A complete working example of how to convert an Excel document to PDF using .NET Framework is present on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Getting%20Started/Console/.NET%20Framework/ConvertExcelToPDF">this GitHub page</a>.

By executing the program, you will get the **PDF document** as follows.

![Output File](ASP-NET-Core_images\ASP-NET-Core_images_img9.png)

Click [here](https://www.syncfusion.com/document-processing/excel-framework/net-core) to explore the rich set of Syncfusion<sup>&reg;</sup> Excel library (XlsIO) features.

An online sample link to [convert an Excel document to PDF](https://ej2.syncfusion.com/aspnetcore/Excel/ExcelToPDF#/material3) in ASP.NET Core.