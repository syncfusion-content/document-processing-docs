---
title: How to set or format a header/footer | XlsIO | Syncfusion
description: This page explains with an example how to set or format a header/footer using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set or format a header/footer?

Header and footer formatting in Syncfusion<sup>&reg;</sup> XlsIO uses Excel's script-command syntax. The following code example demonstrates this. For more information about formatting header/footer text, see [Format header and footer text in worksheets](https://support.microsoft.com/office/insert-headers-and-footers-in-excel-for-the-web-43a75436-3b9a-4c19-8b73-1d22c96fc7d4).

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Format the header
  worksheet.PageSetup.CenterHeader = @"&""Gothic,bold""Center Header Text";
  
  workbook.SaveAs("HeaderFormat.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Format the header
  worksheet.PageSetup.CenterHeader = @"&""Gothic,bold""Center Header Text";
  workbook.SaveAs("HeaderFormat.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Format the header
  worksheet.PageSetup.CenterHeader = "&""Gothic,bold""Center Header Text"
  workbook.SaveAs("HeaderFormat.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

N> Go to “ View -> Page Layout” option to view the header and footer in Microsoft Excel. 

## See Also

* [How to enable/disable header footer?](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/excel-to-pdf-converter-settings#header-footer-option)
* [What are page setup settings?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#page-setup-settings)
* [How to set a line break inside a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-a-line-break-inside-a-cell)
* [How to set print titles?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-print-titles)
* [How to format text within a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-format-text-within-a-cell)
