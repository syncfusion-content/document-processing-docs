---
title: Loading and saving workbook in ASP.NET | Syncfusion
description: Learn how to load and save Excel files in ASP.NET applications efficiently using the .NET Excel Library for seamless file management.
platform: document-processing
control: XlsIO
documentation: UG
---
# Loading and saving workbook in ASP.NET

## Prerequisites

* Visual Studio 2017 or later with the **ASP.NET and web development** workload installed.
* .NET Framework 4.6.1 or later.
* Install the [Syncfusion.XlsIO.AspNet](https://www.nuget.org/packages/Syncfusion.XlsIO.AspNet) NuGet package in your ASP.NET Web Forms project.
* Register your Syncfusion<sup>&reg;</sup> license key in your project. Refer to the [licensing overview](https://help.syncfusion.com/document-processing/licensing/overview) for details.

Include the following namespace in your `MainPage.aspx.cs` (or `MainPage.aspx.vb`) file.

{% tabs %}
{% highlight c# tabtitle="C#" %}
using Syncfusion.XlsIO;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET" %}
Imports Syncfusion.XlsIO
{% endhighlight %}
{% endtabs %}

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the `Syncfusion.Licensing` assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/document-processing/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

## Opening an existing workbook

You can open an existing workbook by using the overloads of the [Open](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_) methods of the [IWorkbooks](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbooks.html) interface.

{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Open an existing workbook through the Open method of IWorkbooks
    IWorkbook workbook = application.Workbooks.Open(Server.MapPath("App_Data/Sample.xlsx"));
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
' Create a new instance of ExcelEngine
Using excelEngine As New ExcelEngine()

' Initialize IApplication
Dim application As IApplication = excelEngine.Excel

' Open an existing workbook through the Open method of IWorkbooks
Dim workbook As IWorkbook = application.Workbooks.Open(Server.MapPath("App_Data/Sample.xlsx"))
End Using
{% endhighlight %}
{% endtabs %}

## Saving an Excel workbook

You can save the created or manipulated workbook using the overloads of the [SaveAs](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_SaveAs_System_String_System_Web_HttpResponse_Syncfusion_XlsIO_ExcelDownloadType_Syncfusion_XlsIO_ExcelHttpContentType_) methods.

{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
// Create a new instance of ExcelEngine
using (ExcelEngine excelEngine = new ExcelEngine())
{
    // Initialize IApplication
    IApplication application = excelEngine.Excel;

    // Open an existing workbook
    IWorkbook workbook = application.Workbooks.Open(Server.MapPath("App_Data/Sample.xlsx"));

    // To-Do: some manipulation

    // Set the version of the workbook
    workbook.Version = ExcelVersion.Xlsx;

    // Stream the workbook to the HTTP response in xlsx format
    workbook.SaveAs("Output.xlsx", Response, ExcelDownloadType.Open, ExcelHttpContentType.Excel2016);
}
{% endhighlight %}

{% highlight vb tabtitle="VB.NET [Windows-specific]" %}
' Create a new instance of ExcelEngine
Using excelEngine As New ExcelEngine()

' Initialize IApplication
Dim application As IApplication = excelEngine.Excel

' Open an existing workbook through the Open method of IWorkbooks
Dim workbook As IWorkbook = application.Workbooks.Open(Server.MapPath("App_Data/Sample.xlsx"))

' To-Do: some manipulation

' Set the version of the workbook
workbook.Version = ExcelVersion.Xlsx

' Stream the workbook to the HTTP response in xlsx format
workbook.SaveAs("Output.xlsx", Response, ExcelDownloadType.Open, ExcelHttpContentType.Xlsx);
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [Create, read, and edit Excel files in ASP.NET](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-c-sharp)
* [Assemblies Required for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/assemblies-required)
* [NuGet Packages for XlsIO](https://help.syncfusion.com/document-processing/excel/excel-library/net/nuget-packages-required)
* [Licensing Overview](https://help.syncfusion.com/document-processing/licensing/overview) 
