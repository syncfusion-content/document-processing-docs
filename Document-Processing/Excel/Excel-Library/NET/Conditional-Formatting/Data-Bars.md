---
title: Data Bars | Excel library | Syncfusion
description: In this section, you can learn how to apply data bars using conditional formatting in an Excel document with XlsIO
platform: document-processing
control: XlsIO
documentation: UG
---

# Data Bars in Conditional Formatting

Here, the values in each of the selected cells are compared, and a data bar is drawn in each cell representing the value of that cell relative to the other cells in the selected range. This bar provides a clear visual cue for users, making it easier to pick out larger and smaller values in a range.

The following code example illustrates how to apply data bars using [IDataBar](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IDataBar.html) interface in XlsIO.

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

	//Set color for Bar
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

    //Set color for Bar
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

    ' Set color for Bar
    dataBar.BarColor = Color.Aqua

    ' Hide the values in data bar
    dataBar.ShowValue = False

    ' Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to apply data bars in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Conditional%20Formatting/Data%20Bars/.NET/Data%20Bars).