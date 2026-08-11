---
title: How to read filtered rows in Excel? | XlsIO | Syncfusion
description: Explains how to read only the rows that are not filtered (or hidden) from an XlsIO worksheet using the RowHeight property.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to read filtered rows in Excel?

In Syncfusion<sup>&reg;</sup> XlsIO, a row that has been hidden — whether by an autofilter rule or by the user hiding the row manually — has its [`IRange.RowHeight`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_RowHeight) property set to `0`. You can therefore read the visible (non-filtered) rows of a worksheet by iterating the used range and skipping any row whose height is `0`. The following code example demonstrates this pattern.

> **Important:**
> * The `RowHeight == 0` check does not distinguish between rows hidden by an autofilter and rows that the user has hidden manually. The sample reads both as "filtered". If you need to detect only autofiltered rows, use the worksheet's `AutoFilter` API instead (see `IRange.AutoFilter` and `IAutoFilter.FilteredRows` if exposed in your build) and cross-reference the row index against the hidden state.
> * `IRange.IsHidden` (on a row) is the modern, explicit way to check whether a row is hidden. The sample uses `RowHeight == 0` for compatibility with older XlsIO builds; in new code, prefer `worksheet.Rows[row].Hidden` (or `IRow.Hidden`) over the row-height check.
> * `IRange.Value` returns `null` for empty cells. Coerce the value to a string (`Convert.ToString(value)` or `value?.ToString()`) before placing it in a `string[]` to avoid storing `null`s in the array.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Sample.xlsx` in the application's working directory. The workbook should contain an autofilter (or manually hidden rows) so the `RowHeight == 0` check has something to skip.
* Ensure the output directory is writable if you choose to save a modified copy of the workbook.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[0];

  IRange usedRange = worksheet.UsedRange;
  string[] rowValues = new string[usedRange.Columns.Length];

  for (int row = usedRange.Row; row <= usedRange.LastRow; row++)
  {
    //Validated the row is filtered or not
    if (worksheet.Rows[row-1].RowHeight != 0)
    {
      for (int column = usedRange.Column; column <= usedRange.LastColumn; column++)
      {
        rowValues.SetValue(worksheet.Range[row, column].Value, column-1);
      }
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  //Open an existing Excel file
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
	
  IRange usedRange = worksheet.UsedRange;
  string[] rowValues = new string[usedRange.Columns.Length];

  for (int row = usedRange.Row; row <= usedRange.LastRow; row++)
  {
    //Validated the row is filtered or not
    if (worksheet.Rows[row-1].RowHeight != 0)
    {
      for (int column = usedRange.Column; column <= usedRange.LastColumn; column++)
      {
        rowValues.SetValue(worksheet.Range[row , column].Value, column-1);
      }
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim usedRange As IRange = worksheet.UsedRange

  Dim rowValues(3) As String
  Dim row As Integer
  Dim column As Integer

  For row = usedRange.Row To usedRange.LastRow Step row + 1
    If worksheet.Rows(row - 1).RowHeight <> 0 Then
      For column = usedRange.Column To usedRange.LastColumn
        rowValues(column - 1) = worksheet.Range(row, column).Value
      Next
    End If
  Next
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to open an existing XLSX workbook and save it as XLS?](how-to-open-an-existing-xlsx-workbook-and-save-it-as-xls)
* [How to create and open Excel Template files by using XlsIO?](how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to copy a range from one workbook to another?](how-to-copy-a-range-from-one-workbook-to-another)
* [Does XlsIO support Excel files with macros that are digitally signed?](does-xlsio-support-excel-files-with-macros-that-are-digitally-signed)
* [How does Excel file with uninstalled fonts is converted to PDF/Image?](how-does-excel-file-with-uninstalled-fonts-is-converted-to-pdf-image)
* [How to sort two or more columns in a pivot table?](how-to-sort-two-or-more-columns-in-a-pivot-table)
* [How to move or copy a worksheet?](https://help.syncfusion.com/file-formats/xlsio/working-with-excel-worksheet#move-or-copy-a-worksheet)

