---
title: Loading and saving workbook on Mac OS | Syncfusion
description: Learn here all about workbook support in Syncfusion Essential File Formats Excel control, it's elements and more.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and saving workbook on Mac OS

## Prerequisites

* Visual Studio 2022 for Mac (17.0 or later) or Visual Studio Code with the C# extension.
* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package in your project.
* Register your Syncfusion<sup>&reg;</sup> license key in your project. Refer to the [licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) for details.

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/document-processing/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

## Opening an existing workbook

You can open an existing workbook by using the overloads of [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_) methods of [IWorkbooks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Open an existing workbook through the Open method of IWorkbooks
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
}
{% endhighlight %}
{% endtabs %}

## Saving an Excel workbook

You can also save the created or manipulated workbook using overloads of [SaveAs](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_String_) methods.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");

    // To-Do: some manipulation

    // Set the version of the workbook
    workbook.Version = ExcelVersion.Xlsx;

    // Save the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}
{% endtabs %}

## See Also

* [Create, read, and edit Excel files on Mac OS](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-mac-c-sharp)
* [Assemblies Required for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [NuGet Packages for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview) 
