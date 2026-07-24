---
title: Working with Pivot Charts | Syncfusion
description: Learn here all about working with the Pivot Charts in the Syncfusion Excel (XlsIO) Library and more.
platform: document-processing
control: XlsIO
documentation: UG 
---

# Working with Pivot Charts in Excel Library

Pivot charts are interactive graphical representations of pivot table data that allow rapid analysis of the displayed data. In XlsIO, a pivot chart is created by instantiating an [IChart](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html) and setting its `PivotSource` to the pivot table.

N> XlsIO supports pivot charts only for the XLSX format.

To create a pivot table, refer to [Create Pivot Table](https://help.syncfusion.com/document-processing/excel/excel-library/net/working-with-pivot-tables#create). The examples in this topic assume that the input workbook already contains a pivot table.

The following code snippet illustrates how to create a pivot chart.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  //Adding a chart to workbook
  IChart pivotChart = workbook.Charts.Add();

  //Set PivotTable as PivotSource to the chart
  pivotChart.PivotSource = pivotTable;

  //Set PivotChart type
  pivotChart.PivotChartType = ExcelChartType.Column_Clustered;

  string fileName = "PivotChart.xlsx";

  //Saving the workbook 
  workbook.SaveAs(fileName);
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Excel2013;
  IWorkbook workbook = application.Workbooks.Open("PivotTable.xlsx");
  IWorksheet worksheet = workbook.Worksheets[0];
  IPivotTable pivotTable = worksheet.PivotTables[0];

  //Adding a chart to workbook
  IChart pivotChart = workbook.Charts.Add();

  //Set PivotTable as PivotSource to the chart
  pivotChart.PivotSource = pivotTable;

  //Set PivotChart type
  pivotChart.PivotChartType = ExcelChartType.Column_Clustered;

  workbook.SaveAs("PivotChart.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Excel2013
  Dim workbook As IWorkbook = application.Workbooks.Open("PivotTable.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
  Dim pivotTable As IPivotTable = worksheet.PivotTables(0)

  'Adding a chart to workbook
  Dim pivotChart As IChart = workbook.Charts.Add()

  'Set PivotTable as PivotSource to the chart
  pivotChart.PivotSource = pivotTable

  'Set PivotChart type
  pivotChart.PivotChartType = ExcelChartType.Column_Clustered

  workbook.SaveAs("PivotChart.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

## Pivot chart options

The following snippet hides all five field-button groups on the pivot chart (`ShowAllFieldButtons` and the four individual toggles, which default to `true`). All buttons are members of the [IChart](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IChart.html) interface and operate at runtime on the chart object created above.

N> The pivot chart field-button properties are supported exclusively from Excel 2010 onwards.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Pivot%20Charts/Create%20Pivot%20Chart/.NET/Create%20Pivot%20Chart/Create%20Pivot%20Chart/Program.cs,180" %}
//Adding PivotChart to the workbook
IChart pivotChart = workbook.Charts.Add();

//Set Field Buttons
pivotChart.ShowAllFieldButtons = false;
pivotChart.ShowAxisFieldButtons = false;
pivotChart.ShowLegendFieldButtons = false;
pivotChart.ShowReportFilterFieldButtons = false;
pivotChart.ShowValueFieldButtons = false;  
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Adding PivotChart to the workbook
IChart pivotChart = workbook.Charts.Add();

//Set Field Buttons
pivotChart.ShowAllFieldButtons = false;
pivotChart.ShowAxisFieldButtons = false;
pivotChart.ShowLegendFieldButtons = false;
pivotChart.ShowReportFilterFieldButtons = false;
pivotChart.ShowValueFieldButtons = false;   
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Insert the pivot chart into the workbook
Dim pivotChart As IChart = workbook.Charts.Add()

'Set Field Buttons
pivotChart.ShowAllFieldButtons = False
pivotChart.ShowAxisFieldButtons = False
pivotChart.ShowLegendFieldButtons = False
pivotChart.ShowReportFilterFieldButtons = False
pivotChart.ShowValueFieldButtons = False
{% endhighlight %}
{% endtabs %}
A complete working example to create a pivot chart in C# is present on [GitHub: Create Pivot Chart example](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Pivot%20Charts/Create%20Pivot%20Chart/.NET/Create%20Pivot%20Chart).

## Pivot chart series

When a pivot chart is created with a pivot table as its data source, XlsIO does not auto-generate the underlying chart series, because the pivot range cannot be expressed as a regular worksheet range. To customize series-level formatting, add series manually using `IChart.Series.Add(ExcelChartType)`.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
//Uses the pivotChart variable from the Create chart sample.
pivotChart.Series.Add(ExcelChartType.Column_Stacked);
pivotChart.Series[0].SerieFormat.CommonSerieOptions.Overlap = 100;
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
//Uses the pivotChart variable from the Create chart sample.
pivotChart.Series.Add(ExcelChartType.Column_Stacked);
pivotChart.Series[0].SerieFormat.CommonSerieOptions.Overlap = 100;
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
'Uses the pivotChart variable from the Create chart sample.
pivotChart.Series.Add(ExcelChartType.Column_Stacked)
pivotChart.Series(0).SerieFormat.CommonSerieOptions.Overlap = 100
{% endhighlight %}
{% endtabs %} 

 