---
title: Color Scales | Excel library | Syncfusion
description: Learn how to apply color-scale conditional formatting rules in an Excel document using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Color Scales in Conditional Formatting

Color scales apply cell shading to visually indicate how the value of a cell compares to the other values in a range. Unlike data bars, color scales use cell background color rather than an embedded bar to communicate relative values.

The following code example illustrates how to apply color scales using the [IColorScale](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IColorScale.html) interface in XlsIO. Key members are:

* **SetConditionCount** – sets the number of colors in the scale; XlsIO supports 2-color and 3-color scales.
* **Criteria** – an array of ColorScaleCriteria(length 2 or 3), one for each color in the scale.
* **FormatColorRGB** (on each criterion) – the color used when the criterion is met.
* **Type** (on each criterion) – the [ConditionValueType](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ConditionValueType.html) that defines how the criterion's threshold is interpreted: `LowestValue`, `HighestValue`, `Percent`, `Percentile`, `Number`, or `Formula`.
* **Value** (on each criterion) – the threshold value, required when **Type** is `Percent`, `Percentile`, `Number`, or `Formula`; ignored when **Type** is `LowestValue` or `HighestValue`.

N> Color-scale conditional formatting is supported in Excel 2007 and later formats (`.xlsx`, `.xlsm`).

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Conditional%20Formatting/Color%20Scales/.NET/Color%20Scales/Color%20Scales/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"), ExcelOpenType.Automatic);
	IWorksheet worksheet = workbook.Worksheets[0];

	//Create color scales for the data in specified range
	IConditionalFormats conditionalFormats = worksheet.Range["D7:D46"].ConditionalFormats;
	IConditionalFormat conditionalFormat = conditionalFormats.AddCondition();
	conditionalFormat.FormatType = ExcelCFType.ColorScale;
	IColorScale colorScale = conditionalFormat.ColorScale;

	//Set a 3-color scale
	colorScale.SetConditionCount(3);
	colorScale.Criteria[0].FormatColorRGB = Color.FromArgb(230, 197, 218);
	colorScale.Criteria[0].Type = ConditionValueType.LowestValue;

	colorScale.Criteria[1].FormatColorRGB = Color.FromArgb(244, 210, 178);
	colorScale.Criteria[1].Type = ConditionValueType.Percentile;
	colorScale.Criteria[1].Value = "50";

	colorScale.Criteria[2].FormatColorRGB = Color.FromArgb(245, 247, 171);
	colorScale.Criteria[2].Type = ConditionValueType.HighestValue;

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

    //Create color scales for the data in specified range
    IConditionalFormats conditionalFormats = worksheet.Range["D7:D46"].ConditionalFormats;
    IConditionalFormat conditionalFormat = conditionalFormats.AddCondition();
    conditionalFormat.FormatType = ExcelCFType.ColorScale;
    IColorScale colorScale = conditionalFormat.ColorScale;

    //Set a 3-color scale
    colorScale.SetConditionCount(3);
    colorScale.Criteria[0].FormatColorRGB = Color.FromArgb(230, 197, 218);
    colorScale.Criteria[0].Type = ConditionValueType.LowestValue;

    colorScale.Criteria[1].FormatColorRGB = Color.FromArgb(244, 210, 178);
    colorScale.Criteria[1].Type = ConditionValueType.Percentile;
    colorScale.Criteria[1].Value = "50";

    colorScale.Criteria[2].FormatColorRGB = Color.FromArgb(245, 247, 171);
    colorScale.Criteria[2].Type = ConditionValueType.HighestValue;

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

    ' Create color scales for the data in specified range
    Dim conditionalFormats As IConditionalFormats = worksheet.Range("D7:D46").ConditionalFormats
    Dim conditionalFormat As IConditionalFormat = conditionalFormats.AddCondition()
    conditionalFormat.FormatType = ExcelCFType.ColorScale
    Dim colorScale As IColorScale = conditionalFormat.ColorScale

    ' Set a 3-color scale
    colorScale.SetConditionCount(3)
    colorScale.Criteria(0).FormatColorRGB = Color.FromArgb(230, 197, 218)
    colorScale.Criteria(0).Type = ConditionValueType.LowestValue

    colorScale.Criteria(1).FormatColorRGB = Color.FromArgb(244, 210, 178)
    colorScale.Criteria(1).Type = ConditionValueType.Percentile
    colorScale.Criteria(1).Value = "50"

    colorScale.Criteria(2).FormatColorRGB = Color.FromArgb(245, 247, 171)
    colorScale.Criteria(2).Type = ConditionValueType.HighestValue

    ' Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply color scales in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Color%20Scales/.NET/Color%20Scales).