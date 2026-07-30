---
title: How to avoid a header row when sorting Excel data in XlsIO? | Syncfusion
description: Explains how to include the first row of a sort range in the sort by disabling IDataSort.HasHeader, with a working C# and VB.NET example.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to avoid a header row when sorting Excel data in XlsIO?

By default, Syncfusion<sup>&reg;</sup> XlsIO treats the **first row** of the sort range as a header and excludes it from the sort. To include the first row in the sort — for example, when the data range has no header — set the [`IDataSort.HasHeader`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataSort.html#Syncfusion_XlsIO_IDataSort_HasHeader) property of the [`IDataSort`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataSort.html) instance returned by `Workbook.CreateDataSorter()` to `false`. The code example below demonstrates the full flow: populate a worksheet, configure a sort range and sort field, disable `HasHeader`, run the sort, and save.

## Sort range, sort field, and the SortOn/OrderBy enums

| Member | Purpose | Notes |
|---|---|---|
| `IDataSort.SortRange` | The `IRange` to sort | Must include every column you want to sort by. |
| `IDataSort.SortFields.Add(columnIndex, sortOn, orderBy)` | Add one sort field | `columnIndex` is **zero-based** within the sort range, not within the worksheet. |
| `SortOn` enum | What aspect of the cell to sort on | Common values: `Values`, `CellColor`, `FontColor`. |
| `OrderBy` enum | Sort direction | `Ascending` or `Descending`. |
| `IDataSort.HasHeader` | Whether to skip the first row | Default `true`. Set to `false` to include the first row in the sort. |

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The sample builds the dataset in code (six rows of text and numbers in `A2:C7`) rather than loading an existing file, so no input file is required.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

## Sort with HasHeader disabled

The flow is: create a workbook, populate the sample data in `A2:C7`, build a `DataSorter`, configure the sort range and a single sort field, set `HasHeader = false`, call `Sort()`, then save. Row 1 is intentionally left empty to mirror a typical "header in row 1" layout, even though we want every row of the data range (including row 2, which would be the data row right after the header) to participate in the sort.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Create(1);
      IWorksheet worksheet = workbook.Worksheets[0];

      //Populate the worksheet with sample data (column A is text, columns B and C are numbers)
      worksheet["A2"].Text = "banana"; worksheet["A3"].Text = "Cherry"; worksheet["A4"].Text = "Banana";
      worksheet["A5"].Text = "Apple"; worksheet["A6"].Text = "cherry"; worksheet["A7"].Text = "apple";
      worksheet["B2"].Number = 744;  worksheet["B3"].Number = 5079; worksheet["B4"].Number = 1267;
      worksheet["B5"].Number = 1418; worksheet["B6"].Number = 4728; worksheet["B7"].Number = 943;
      worksheet["C2"].Number = 162;  worksheet["C3"].Number = 1249; worksheet["C4"].Number = 1062;
      worksheet["C5"].Number = 756;  worksheet["C6"].Number = 4547; worksheet["C7"].Number = 349;

      //Build a sorter and configure it
      IDataSort sorter = workbook.CreateDataSorter();
      sorter.SortRange = worksheet["A2:C7"];

      //Add a sort field on column 0 (column A within the sort range), ascending by value
      ISortField sortField = sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);

      //Include the first row of the sort range in the sort (no header)
      sorter.HasHeader = false;

      //Run the sort
      sorter.Sort();
      worksheet.UsedRange.AutofitColumns();

      //Save the workbook
      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main(string[] args)
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Create(1);
      IWorksheet worksheet = workbook.Worksheets[0];

      worksheet["A2"].Text = "banana"; worksheet["A3"].Text = "Cherry"; worksheet["A4"].Text = "Banana";
      worksheet["A5"].Text = "Apple"; worksheet["A6"].Text = "cherry"; worksheet["A7"].Text = "apple";
      worksheet["B2"].Number = 744;  worksheet["B3"].Number = 5079; worksheet["B4"].Number = 1267;
      worksheet["B5"].Number = 1418; worksheet["B6"].Number = 4728; worksheet["B7"].Number = 943;
      worksheet["C2"].Number = 162;  worksheet["C3"].Number = 1249; worksheet["C4"].Number = 1062;
      worksheet["C5"].Number = 756;  worksheet["C6"].Number = 4547; worksheet["C7"].Number = 349;

      IDataSort sorter = workbook.CreateDataSorter();
      sorter.SortRange = worksheet["A2:C7"];
      ISortField sortField = sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending);
      sorter.HasHeader = false;

      sorter.Sort();
      worksheet.UsedRange.AutofitColumns();

      workbook.SaveAs("Output.xlsx");
      workbook.Close();
    }
  }
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO

Module Module1
  Sub Main()
    'ExcelEngine is IDisposable; the Using block guarantees the engine is disposed
    Using excelEngine As ExcelEngine = New ExcelEngine()
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Create(1)
      Dim worksheet As IWorksheet = workbook.Worksheets(0)

      worksheet("A2").Text = "banana" : worksheet("A3").Text = "Cherry" : worksheet("A4").Text = "Banana"
      worksheet("A5").Text = "Apple" : worksheet("A6").Text = "cherry" : worksheet("A7").Text = "apple"
      worksheet("B2").Number = 744  : worksheet("B3").Number = 5079 : worksheet("B4").Number = 1267
      worksheet("B5").Number = 1418 : worksheet("B6").Number = 4728 : worksheet("B7").Number = 943
      worksheet("C2").Number = 162  : worksheet("C3").Number = 1249 : worksheet("C4").Number = 1062
      worksheet("C5").Number = 756  : worksheet("C6").Number = 4547 : worksheet("C7").Number = 349

      Dim sorter As IDataSort = workbook.CreateDataSorter()
      sorter.SortRange = worksheet("A2:C7")
      Dim sortField As ISortField = sorter.SortFields.Add(0, SortOn.Values, OrderBy.Ascending)
      sorter.HasHeader = False

      sorter.Sort()
      worksheet.UsedRange.AutofitColumns()

      workbook.SaveAs("Output.xlsx")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [`IDataSort` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataSort.html)
* [`IDataSort.HasHeader` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataSort.html#Syncfusion_XlsIO_IDataSort_HasHeader)
* [`ISortField` API reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ISortField.html)
* [`SortOn` enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.SortOn.html)
* [`OrderBy` enum reference](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.OrderBy.html)