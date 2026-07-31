---
title: Apply Formatting to a Pivot Table Using XlsIO | Syncfusion
description: Explains how to apply a built-in PivotTable style in Syncfusion XlsIO and why the Layout method must be called.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to apply formatting to pivot table in Excel protected view?

Syncfusion<sup>&reg;</sup> XlsIO supports applying a built-in style to a pivot table when the pivot table is created in code. The style is applied by setting the [`IPivotTable.BuiltInStyle`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTable.html#Syncfusion_XlsIO_IPivotTable_BuiltInStyle) property to a value from the [`PivotBuiltInStyles`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.PivotBuiltInStyles.html) enum (for example, `PivotStyleDark15`). For the style to be visible in the saved file, you must also call the [`IPivotTable.Layout`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IPivotTable.html#Syncfusion_XlsIO_IPivotTable_Layout) method after assigning the style. The following code example demonstrates the full flow: create a pivot cache, add a pivot table to a separate sheet, configure row / column / data fields, apply a built-in style, call `Layout()`, and save.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Have a workbook called `Sample.xlsx` in the application's working directory. The workbook must contain at least one data sheet whose first row is a header row and whose data range covers `A1:H50` (eight columns, fifty rows of data). The pivot table is created on `Worksheets[1]`; if the workbook has only one sheet, the code will throw an `ArgumentOutOfRangeException` at `Worksheets[1]`.
* Ensure the output directory is writable; `Workbook.SaveAs` creates or overwrites the destination file.

## Create a pivot table and apply a built-in style

The flow is: open the source workbook, create a `PivotCache` over the data range, add a pivot table on the pivot sheet, configure the row / column / data fields, set `BuiltInStyle`, call `Layout()`, then save.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IWorksheet pivotSheet = workbook.Worksheets[1];

  //Create Pivot cache with the given data range
  IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);

  //Create "PivotTable1" with the cache at the specified range
  IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

  //Add Pivot table fields (Row and Column fields)
  pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[3].Axis = PivotAxisTypes.Column;

  //Add data field
  IPivotField field = pivotTable.Fields[5];
  pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum);

  //Set BuiltInStyle
  pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark15;
  pivotTable.Layout();

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = excelEngine.Excel.Workbooks.Open("Sample.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IWorksheet pivotSheet = workbook.Worksheets[1];

  //Create Pivot cache with the given data range
  IPivotCache cache = workbook.PivotCaches.Add(worksheet["A1:H50"]);

  //Create "PivotTable1" with the cache at the specified range
  IPivotTable pivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

  //Add Pivot table fields (Row and Column fields)
  pivotTable.Fields[2].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[6].Axis = PivotAxisTypes.Row;
  pivotTable.Fields[3].Axis = PivotAxisTypes.Column;

  //Add data field
  IPivotField field = pivotTable.Fields[5];
  pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum);

  //Set BuiltInStyle
  pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark15;
  pivotTable.Layout();
  workbook.SaveAs("Output.xlsx");             
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx	
  Dim workbook As IWorkbook = application.Workbooks.Open("Sample.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim pivotSheet As IWorksheet = workbook.Worksheets(1)

  'Create Pivot cache with the given data range
  Dim cache As IPivotCache = workbook.PivotCaches.Add(worksheet("A1:H50"))

  'Create "PivotTable1" with the cache at the specified range
  Dim pivotTable As IPivotTable = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet("A1"), cache)

  'Add Pivot table fields (Row and Column fields)
  pivotTable.Fields(2).Axis = PivotAxisTypes.Row
  pivotTable.Fields(6).Axis = PivotAxisTypes.Row
  pivotTable.Fields(3).Axis = PivotAxisTypes.Column

  'Add data field
  Dim field As IPivotField = pivotTable.Fields(5)
  pivotTable.DataFields.Add(field, "Sum", PivotSubtotalTypes.Sum)

  'Set BuiltInStyle
  pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark15
  pivotTable.Layout()
  workbook.SaveAs("PivotTable.xlsx")
End Using
{% endhighlight %}
{% endtabs %}
