---
title: Convert an Excel document to PDF in Mac | Syncfusion
description: Convert an Excel document to PDF in Mac using Sycfusion .NET Excel library (XlsIO)
platform: document-processing
control: XlsIO
documentation: UG
---
#Convert an Excel document to PDF in Mac

[Syncfusion Excel library for ASP.NET Core platform](https://www.syncfusion.com/document-processing/excel-framework/net-core/excel-library) can be used to create, read, edit Excel files. This also convert Excel files to PDF.

The below steps illustrates converting an Excel document to PDF in Mac

{% tabcontents %}

{% tabcontent Visual Studio %}

Step 1: Create a new C# .NET Core console application.
![Create .NET Core console project in Visual Studio](Mac_images/MAC_images_img1.png)

Step 2: Select the framework version.
![Select framework version](Mac_images/MAC_images_img2.png)

Step 3: Name the application.
![Name the application](Mac_images/Mac_images_img3.png)

Step 4: Install the [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core/) NuGet package as reference to your application from [NuGet.org](https://www.nuget.org/).
![Install Syncfusion.XlsIORenderer.Net.Core Nuget Package](Mac_images/MAC_images_img4.png)

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
//Create an instance of ExcelEngine.
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Load existing Excel file
    using FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    // Convert to PDF
    XlsIORenderer renderer = new XlsIORenderer();
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    // Save to file
    using FileStream pdfStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write);
    pdfDocument.Save(pdfStream);
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% tabcontent Visual Studio Code %}

Step 1: Create a new C# .NET Core console application using Create .NET Project option.
![Create .NET Core console project in Visual Studio Code](Mac_images/MAC_VS_images_img1.png)

Step 2: Name the application and create the project.
![Name the application](Mac_images/MAC_VS_images_img2.png)

Alternatively, create a .NET Core console application using the following command in the terminal(<kbd>Ctrl</kbd>+<kbd>`</kbd>).

```
dotnet new console -o MacSample
cd MacSample
```

Step 3: To **Convert an Excel document to PDF in .NET Core app**,run the following command to  install [Syncfusion.XlsIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core) package.

```
dotnet add package Syncfusion.XlsIORenderer.Net.Core
```
![Install Syncfusion.XlsIORenderer.Net.Core Nuget Package](Mac_images/MAC_VS_images_img3.png)

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components. 

Step 4: Include the following Namespaces in the Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
using System.Drawing;
using System.Reflection;
{% endhighlight %}
{% endtabs %}

Step 5: Add the following code snippet in Program.cs file.
{% tabs %}
{% highlight c# tabtitle="C#" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;

    // Load existing Excel file
    using FileStream inputStream = new FileStream("InputTemplate.xlsx", FileMode.Open, FileAccess.Read);
    IWorkbook workbook = application.Workbooks.Open(inputStream);

    // Convert to PDF
    XlsIORenderer renderer = new XlsIORenderer();
    PdfDocument pdfDocument = renderer.ConvertToPDF(workbook);

    // Save to file
    using FileStream pdfStream = new FileStream("Output.pdf", FileMode.Create, FileAccess.Write);
    pdfDocument.Save(pdfStream);
}
{% endhighlight %}
{% endtabs %}

{% endtabcontent %}

{% endtabcontents %}

By executing the program, you will get the output file as below.
![Output File](Mac_images/MAC_images_img5.png)