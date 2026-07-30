---
title: Data Bars | Excel library | Syncfusion
description: Learn how to apply data-bar conditional formatting rules in an Excel document using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Data Bars in Conditional Formatting

Data bars draw a horizontal bar in each cell whose length represents the value of that cell relative to the other cells in the selected range. This provides a clear visual cue that makes it easier to compare larger and smaller values at a glance.

The following code example illustrates how to apply data bars using the [IDataBar](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IDataBar.html) interface in XlsIO. Key members of **IDataBar** include:

* **BarColor** – sets the fill color of the bar.
* **ShowValue** – when `true` (the default), the cell value is displayed; when `false`, only the bar is shown.
* **MinLength** / **MaxLength** – the bar length as a percentage of the cell width (defaults are 10 and 90).
* **BarOnly** – when `true`, hides the cell value and shows only the bar.
* **BarBorder** – the [IBorder](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IBorder.html) applied to the data bar.
* **BarDirection** – the direction of the bar (`ExcelDataBarDirection.Context` for the default left-to-right).
* **NegativeBarColor** – the color used for negative values.

N> Data-bar conditional formatting is supported in Excel 2007 and later formats (`.xlsx`, `.xlsm`).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Conditional%20Formatting/Data%20Bars/.NET/Data%20Bars/Data%20Bars/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Create data bars for the data in specified range
	IConditionalFormats conditionalFormats = worksheet.Range["C7:C46"].ConditionalFormats;
	IConditionalFormat conditionalFormat = conditionalFormats.AddCondition();
	conditionalFormat.FormatType = ExcelCFType.DataBar;
	IDataBar dataBar = conditionalFormat.DataBar;

	//Set color for the bar
	dataBar.BarColor = Color.Aqua;

	//Hide the values in data bar
	dataBar.ShowValue = false;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Create data bars for the data in specified range
    IConditionalFormats conditionalFormats = worksheet.Range["C7:C46"].ConditionalFormats;
    IConditionalFormat conditionalFormat = conditionalFormats.AddCondition();
    conditionalFormat.FormatType = ExcelCFType.DataBar;
    IDataBar dataBar = conditionalFormat.DataBar;

    //Set color for the bar
    dataBar.BarColor = Color.Aqua;

    //Hide the values in data bar
    dataBar.ShowValue = false;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    ' Create data bars for the data in specified range
    Dim conditionalFormats As IConditionalFormats = worksheet.Range("C7:C46").ConditionalFormats
    Dim conditionalFormat As IConditionalFormat = conditionalFormats.AddCondition()
    conditionalFormat.FormatType = ExcelCFType.DataBar
    Dim dataBar As IDataBar = conditionalFormat.DataBar

    ' Set color for the bar
    dataBar.BarColor = Color.Aqua

    ' Hide the values in data bar
    dataBar.ShowValue = False

    ' Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply data bars in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Data%20Bars/.NET/Data%20Bars).