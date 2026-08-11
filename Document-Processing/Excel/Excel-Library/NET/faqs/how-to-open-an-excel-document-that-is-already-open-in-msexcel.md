---
title: Open an Excel document that is already open in MS-Excel? | Syncfusion
description: This page tells how to open an Excel document that is already open in Microsoft Excel in .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to open an Excel document that is already open in MS-Excel?

Syncfusion® XlsIO does support opening an Excel document that is already open in Microsoft Excel. However, the approaches differ between the Windows-specific and cross-platform builds.

The `DefaultVersion = ExcelVersion.Excel2016` assignment in the samples below sets the default Excel version used by `SaveAs` when no version is specified.

## Prerequisites

Before running the code examples, make sure the following are in place:

* Install the [Syncfusion.XlsIO.WinForms](https://www.nuget.org/packages/Syncfusion.XlsIO.WinForms) (or `Syncfusion.XlsIO.WPF` / `Syncfusion.XlsIO.Base`) NuGet package.
* Register a valid Syncfusion license at the application startup:

    ```csharp
    Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
    ```

* Have a workbook (for example, `Template.xlsx`) in the application's working directory.

## Open with FileStream (cross-platform)



{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;

  //Open the file through a FileStream with FileShare.ReadWrite so XlsIO can read
  //it while Excel has the same file open with shared write access.
  using (FileStream fileStream = new FileStream("Template.xlsx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
  {
    IWorkbook workbook = application.Workbooks.Open(fileStream);
    workbook.SaveAs("Output.xlsx");
    workbook.Close();
  }
}
{% endhighlight %}
{% endtabs %}

## Open with OpenReadOnly (Windows-specific)

{% tabs %}
{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.OpenReadOnly("Template.xlsx");
  workbook.SaveAs("Output.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.OpenReadOnly("Template.xlsx")
  workbook.SaveAs("Output.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

