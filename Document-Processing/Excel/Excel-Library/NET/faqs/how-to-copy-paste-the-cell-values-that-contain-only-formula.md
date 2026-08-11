---
title: Copy or Paste Formula-Only Cell Values in XlsIO | Syncfusion
description: Code example to copy and paste the values of cells that contain only formulas using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to copy or paste cell values that contain only formulas?

You can copy and paste the computed values of cells that contain only formulas by using the [CopyTo](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CopyTo_Syncfusion_XlsIO_IRange_Syncfusion_XlsIO_ExcelCopyRangeOptions_) method and specifying the [ExcelCopyRangeOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelCopyRangeOptions.html) enumeration as **None**. The following code example demonstrates this.

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

  //Assigning formula to a cell
  worksheet.Range["A3"].Formula = "SUM(1+1)";
  IRange sourceRange = worksheet.Range["A3"];
  IRange destinationRange = worksheet.Range["B1"];

  //ExcelCopyRangeOptions.None copies only the computed values, not the formula
  sourceRange.CopyTo(destinationRange, ExcelCopyRangeOptions.None);
  
  workbook.SaveAs("Output.xlsx");
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

  //Assigning formula to a cell
  worksheet.Range["A3"].Formula="SUM(1+1)";
  IRange sourceRange = worksheet.Range["A3"];
  IRange destinationRange = worksheet.Range["B1"];

  //ExcelCopyRangeOptions.None copies only the computed values, not the formula
  sourceRange.CopyTo(destinationRange, ExcelCopyRangeOptions.None);

  workbook.SaveAs("Output.xlsx");
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

  'Assigning formula to a cell
  worksheet.Range("A3").Formula = "SUM(1+1)"
  Dim sourceRange As IRange = worksheet.Range("A3")
  Dim destinationRange As IRange = worksheet.Range("B1")

  'ExcelCopyRangeOptions.None copies only the computed values, not the formula
  sourceRange.CopyTo(destinationRange, ExcelCopyRangeOptions.None)

  workbook.SaveAs("Output.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to copy a range from one workbook to another?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-copy-a-range-from-one-workbook-to-another)
* [How to protect certain cells in a worksheet?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-protect-certain-cells-in-a-worksheet)
* [How to set a line break inside a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-set-a-line-break-inside-a-cell)
* [How to format text within a cell?](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-format-text-within-a-cell)
* [How to copy or move a range?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-cells-manipulation#copy-or-move-a-range)
* [How to copy and paste as link?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-cells-manipulation#copy-and-paste-as-link)
* [How to skip blanks while copying?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-cells-manipulation#skip-blanks-while-copying)

