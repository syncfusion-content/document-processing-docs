---
title: How to set rounded corner for chart in Excel document | Syncfusion
description: Demonstrates how to set rounded corners on a chart area border in an Excel document using the .NET Excel library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to set rounded corner for chart in Excel document?

In Microsoft Excel, the **Format Chart Area** dialog exposes a "Rounded corners" checkbox under **Border**. When enabled, the four corners of the chart's outer border are drawn as quarter-circles instead of right angles. In Syncfusion<sup>&reg;</sup> XlsIO, this corresponds to the [`IChartShape.ChartArea`](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChartArea.html) property's `IsBorderCornersRound` flag (in some XlsIO builds it surfaces as `RoundedCorners` on the COM-derived `IChartFrameFormat` interface). The setting is stored in the chart's `c:roundedCorners` element in the underlying XML and survives round-trip through Excel.

## Prerequisites

Before running the code example, make sure the following are in place:

* Install the [Syncfusion.XlsIO.Net.Core](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core) NuGet package (or a platform-specific package such as `Syncfusion.XlsIO.WinForms` / `Syncfusion.XlsIO.WPF`).
* Register a valid Syncfusion license at application startup:

```csharp
Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
```

* The example creates a fresh workbook and chart, so no input file is required.
* Ensure the working directory is writable; the example writes `Chart.xlsx`.

## Create a chart with rounded corners

The flow is: create a workbook, add a column chart, set the chart area's rounded-corner flag, set the chart position, enter category and value data directly on the series, and save.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
using Syncfusion.XlsIO;

class Program
{
  static void Main()
  {
    //ExcelEngine is IDisposable; the using block guarantees the engine is disposed
    using (ExcelEngine excelEngine = new ExcelEngine())
    {
      IApplication application = excelEngine.Excel;
      application.DefaultVersion = ExcelVersion.Excel2013;

      IWorkbook workbook = application.Workbooks.Create(1);
      IWorksheet sheet = workbook.Worksheets[0];

      //Category labels and values for the series
      object[] xValues = new object[] { "Total Income", "Expenses", "Profit" };
      object[] yValues = new object[] { 2000, 1000, 1500 };

      //Add a column-clustered chart and a single series
      IChartShape chart = sheet.Charts.Add();
      IChartSerie serie = chart.Series.Add(ExcelChartType.Column_Clustered);

      //Round the four corners of the chart area border
      chart.ChartArea.IsBorderCornersRound = true;

      //Position the chart on the worksheet (rows 5–20, columns 5–13)
      chart.TopRow = 5;
      chart.BottomRow = 20;
      chart.LeftColumn = 5;
      chart.RightColumn = 13;

      //Enter the X and Y values directly on the series
      serie.EnteredDirectlyValues = yValues;
      serie.EnteredDirectlyCategoryLabels = xValues;

      workbook.SaveAs("Chart.xlsx");
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
    Using excelEngine As New ExcelEngine()
      'Lowercase 'application' to avoid shadowing the BCL 'Application' type
      Dim application As IApplication = excelEngine.Excel
      application.DefaultVersion = ExcelVersion.Excel2013

      Dim workbook As IWorkbook = application.Workbooks.Create(1)
      Dim sheet As IWorksheet = workbook.Worksheets(0)

      'Category labels and values for the series
      Dim xValues As Object() = New Object() {"Total Income", "Expenses", "Profit"}
      Dim yValues As Object() = New Object() {2000, 1000, 1500}

      'Add a column-clustered chart and a single series
      Dim chart As IChartShape = sheet.Charts.Add()
      Dim serie As IChartSerie = chart.Series.Add(ExcelChartType.Column_Clustered)

      'Round the four corners of the chart area border
      chart.ChartArea.IsBorderCornersRound = True

      'Position the chart on the worksheet (rows 5–20, columns 5–13)
      chart.TopRow = 5
      chart.BottomRow = 20
      chart.LeftColumn = 5
      chart.RightColumn = 13

      'Enter the X and Y values directly on the series
      serie.EnteredDirectlyValues = yValues
      serie.EnteredDirectlyCategoryLabels = xValues

      workbook.SaveAs("Chart.xlsx")
      workbook.Close()
    End Using
  End Sub
End Module
{% endhighlight %}
{% endtabs %}

## See Also

* [How to change the border style for chart series](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#border-style-for-chart-series)
* [How to explode a Pie Chart](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#explode-a-pie-chart)
* [How to add picture to the chart and assign hyperlink](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#add-picture-to-chart-and-assign-hyperlink)
* [How to customizing chart and chart elements](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#customizing-chart-and-chart-elements)
* [How to add data label to the chart](https://help.syncfusion.com/file-formats/xlsio/working-with-charts#add-datatable-to-chart)
