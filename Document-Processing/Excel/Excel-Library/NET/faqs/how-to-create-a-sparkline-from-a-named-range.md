---
title: How to create a sparkline from a named range | XlsIO | Syncfusion
description: This page demonstrates how to create a sparkline from a named range using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to create a sparkline from a named range?

You can create a [sparkline](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#sparkline) from a [named range](https://help.syncfusion.com/document-processing/excel/excel-library/net/faqs/how-to-use-named-ranges-with-xlsio) using the following code example.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or the platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF` for Windows-specific scenarios).
* Register a valid Syncfusion license at the application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* Sparklines require **Excel 2010 or later**; the sample uses `ExcelVersion.Excel2016`.
* Ensure the output directory is writable; the output file is created or overwritten when the code runs.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;
using System.Drawing;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;

  //Workbooks.Create(int) creates a workbook with the given number of worksheets
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add sample data (using indexer syntax; Range["A1"] is equivalent)
  worksheet["A1"].Number = 6911;
  worksheet["B1"].Number = 8261;
  worksheet["C1"].Number = 812;
  worksheet["D1"].Number = 166;

  //Add a sparkline group to the worksheet
  ISparklineGroup sparklineGroup = worksheet.SparklineGroups.Add();
  sparklineGroup.SparklineType = SparklineType.Line;
  sparklineGroup.MarkersColor = Color.BlueViolet;

  //Create a sparklines collection within the group
  ISparklines sparklines = sparklineGroup.Add();

  //Create the named ranges for the data and the sparkline location
  IName dataName = workbook.Names.Add("Data_Range");
  dataName.RefersToRange = worksheet.Range["A1:D1"];
  IRange dataRange = worksheet.Range["Data_Range"];

  IName sparklineName = workbook.Names.Add("Sparkline_Range");
  sparklineName.RefersToRange = worksheet.Range["E1"];
  IRange referenceRange = worksheet.Range["Sparkline_Range"];

  //Add the sparkline (first arg: data range; second arg: location range)
  sparklines.Add(dataRange, referenceRange);
 
  workbook.SaveAs("SparklineFromNamedRange.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using Syncfusion.XlsIO;
using System.Drawing;

using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2016;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Add sample data
  worksheet["A1"].Number = 6911;
  worksheet["B1"].Number = 8261;
  worksheet["C1"].Number = 812;
  worksheet["D1"].Number = 166;

  //Add a sparkline group and configure the type and marker color
  ISparklineGroup sparklineGroup = worksheet.SparklineGroups.Add();
  sparklineGroup.SparklineType = SparklineType.Line;
  sparklineGroup.MarkersColor = Color.BlueViolet;

  //Create the named ranges for the data and the sparkline location
  IName dataName = workbook.Names.Add("Data_Range");
  dataName.RefersToRange = worksheet.Range["A1:D1"];
  IRange dataRange = worksheet.Range["Data_Range"];

  IName sparklineName = workbook.Names.Add("Sparkline_Range");
  sparklineName.RefersToRange = worksheet.Range["E1"];
  IRange referenceRange = worksheet.Range["Sparkline_Range"];

  //Add the sparkline (first arg: data range; second arg: location range)
  sparklines.Add(dataRange, referenceRange);

  workbook.SaveAs("SparklineFromNamedRange.xlsx");
  workbook.Close();
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Imports Syncfusion.XlsIO
Imports System.Drawing

Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2016
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Add sample data
  worksheet("A1").Number = 6911
  worksheet("B1").Number = 8261
  worksheet("C1").Number = 812
  worksheet("D1").Number = 166

  'Add a sparkline group and configure the type and marker color
  Dim sparklineGroup As ISparklineGroup = worksheet.SparklineGroups.Add()
  sparklineGroup.SparklineType = SparklineType.Line
  sparklineGroup.MarkersColor = Color.BlueViolet

  'Create the named ranges for the data and the sparkline location
  Dim dataName As IName = workbook.Names.Add("Data_Range")
  dataName.RefersToRange = worksheet.Range("A1:D1")
  Dim dataRange As IRange = worksheet.Range("Data_Range")

  Dim sparklineName As IName = workbook.Names.Add("Sparkline_Range")
  sparklineName.RefersToRange = worksheet.Range("E1")
  Dim referenceRange As IRange = worksheet.Range("Sparkline_Range")

  'Add the sparkline (first arg: data range; second arg: location range)
  sparklines.Add(dataRange, referenceRange)

  workbook.SaveAs("SparklineFromNamedRange.xlsx")
  workbook.Close()
End Using
{% endhighlight %}
{% endtabs %}

## See Also

* [How to create a Chart with a discontinuous range?](how-to-create-a-chart-with-a-discontinuous-range)
* [How to create and open Excel Template files by using XlsIO?](how-to-create-and-open-excel-template-files-by-using-xlsio)
* [How to create sparkline?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-charts#sparkline)
* [How to create named range in Excel?](https://help.syncfusion.com/document-processing/excel/excel-library/net/migrate-from-office-automation-to-syncfusion-xlsio/create-named-range-in-excel)
* [How to define names?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#defined-names)
* [How to use named ranges in formulas?](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-formulas#named-ranges-in-formulas)
