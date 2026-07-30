---
title: How to sort two or more columns in a pivot table | Syncfusion
description: Code example to sort two or more columns in a pivot table using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to sort two or more columns in a pivot table?

You can sort a pivot field by one or more data columns by calling the [AutoSort()](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotField.html#Syncfusion_XlsIO_IPivotField_AutoSort_Syncfusion_XlsIO_PivotFieldSortType_System_Int32_) method for each column index. The following code example demonstrates this.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Add a `PivotTable.xlsx` file in the application's working directory that already contains a pivot table on the second worksheet (`Worksheets[1]`). Note that file paths are case-sensitive on Linux.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.IO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;

  //ExcelOpenType.Automatic detects the source file format automatically
  using (FileStream inputStream = new FileStream("PivotTable.xlsx", FileMode.Open, FileAccess.Read))
  {
    IWorkbook workbook = application.Workbooks.Open(inputStream, ExcelOpenType.Automatic);
    IWorksheet worksheet = workbook.Worksheets[1];
    IPivotTable pivotTable = worksheet.PivotTables[0];

    //RowFields[1] selects the second row field (0-based index)
    IPivotField rowField = pivotTable.RowFields[1];

    //Sort ascending by the 3rd data column (column D in a typical pivot layout)
    rowField.AutoSort(PivotFieldSortType.Ascending, 3);
    //Sort ascending by the 4th data column (column E)
    rowField.AutoSort(PivotFieldSortType.Ascending, 4);

    //Optional: sort descending by a different column
    //rowField.AutoSort(PivotFieldSortType.Descending, 3);

    workbook.SaveAs("TopToBottomSort.xlsx");
    workbook.Close();
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx", ExcelOpenType.Automatic);
  IWorksheet worksheet = workbook.Worksheets[1];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  //RowFields[1] selects the second row field (0-based index)
  IPivotField rowField = pivotTable.RowFields[1];

  //Sort ascending by the 3rd data column (column D)
  rowField.AutoSort(PivotFieldSortType.Ascending, 3);
  //Sort ascending by the 4th data column (column E)
  rowField.AutoSort(PivotFieldSortType.Ascending, 4);

  workbook.SaveAs("TopToBottomSort.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx", ExcelOpenType.Automatic)
  Dim worksheet As IWorksheet = workbook.Worksheets(1)
  Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

  'RowFields(1) selects the second row field (0-based index)
  Dim rowField As IPivotField = pivotTable.RowFields(1)

  'Sort ascending by the 3rd data column (column D)
  rowField.AutoSort(PivotFieldSortType.Ascending, 3)
  'Sort ascending by the 4th data column (column E)
  rowField.AutoSort(PivotFieldSortType.Ascending, 4)

  workbook.SaveAs("TopToBottomSort.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [What is the maximum range of Rows and Columns?](what-is-the-maximum-range-of-rows-and-columns)
* [How to unfreeze the rows and columns in XlsIO?](how-to-unfreeze-the-rows-and-columns-in-xlsio)
* [How to hide the summary rows and columns using XlsIO?](how-to-hide-the-summary-rows-and-columns-using-xlsio)
* [How to merge excel files from more than one workbook to a single file?](how-to-merge-excel-files-from-more-than-one-workbook-to-a-single-file)
* [What is data sorting?](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet-cells-manipulation#data-sorting)
* [How to sort by value in Pivot Table?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-pivot-tables#sort-by-value-in-pivot-table)
* [How to filter Excel data?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/filter-excel-data)
