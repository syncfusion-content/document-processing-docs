---
title: How to change the gridline color of an Excel worksheet | Syncfusion
description: Code example to change the gridline color of an Excel worksheet using the .NET Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to change the gridline color of an Excel worksheet?

In Syncfusion<sup>&reg;</sup> XlsIO, you can change the gridline color of a worksheet using the [GridLineColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_GridLineColor) property. The following code example demonstrates this.

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

  //Change the gridline color using a known color
  worksheet.GridLineColor = ExcelKnownColors.Blue;
  
  workbook.SaveAs("GridLineColor.xlsx");
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

  //Change the gridline color using a known color
  worksheet.GridLineColor = ExcelKnownColors.Blue;

  workbook.SaveAs("GridLineColor.xlsx");
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

  'Change the gridline color using a known color
  worksheet.GridLineColor = ExcelKnownColors.Blue

  workbook.SaveAs("GridLineColor.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to set a line break inside a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-a-line-break-inside-a-cell)
* [How to show or hide gridlines?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#show-or-hide-grid-lines)
* [How to hide chart gridlines?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#hide-chart-gridlines)
* [How to highlight worksheet tabs?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-excel-worksheet#highlight-worksheet-tabs)
* [How to apply color settings?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-cell-or-range-formatting#apply-color-settings)
* [How to change data point label color of a Waterfall chart?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-change-data-point-label-color-of-a-waterfall-chart)
