---
title: Freeze or Unfreeze Panes | Syncfusion
description: In this section, you can learn about how to use the freeze panes in an Excel worksheets using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Freeze and UnFreeze Panes in Excel Document

## Freeze Panes

Freezing panes allows you to keep a portion of the worksheet visible while you scroll through the rest of the sheet. The [FreezePanes](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_FreezePanes) method of the [IRange](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html) interface can be used to achieve this.

You can set the first visible row and the first visible column in the non-frozen area through the [FirstVisibleRow](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_FirstVisibleRow) and [FirstVisibleColumn](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_FirstVisibleColumn) properties.

N> **FirstVisibleColumn** and **FirstVisibleRow** indexes are "zero-based".

### Freeze Rows

The following code example illustrates how to freeze rows in the worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Freeze%20Rows/.NET/Freeze%20Rows/Freeze%20Rows/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Applying freeze rows to the sheet by specifying a cell
	worksheet.Range["A3"].FreezePanes();

	//Set first visible row in the bottom pane
	worksheet.FirstVisibleRow = 3;

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("SourceWorkbookTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Applying freeze rows to the sheet by specifying a cell
    worksheet.Range["A3"].FreezePanes();

    //Set first visible row in the bottom pane
    worksheet.FirstVisibleRow = 3;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("SourceWorkbookTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Applying freeze rows to the sheet by specifying a cell
    worksheet.Range("A3").FreezePanes()

    'Set first visible row in the bottom pane
    worksheet.FirstVisibleRow = 3

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}   

A complete working example to freeze rows in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Freeze%20Rows/.NET/Freeze%20Rows)

### Freeze Columns

The following code example illustrates how to freeze columns in the worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Freeze%20Columns/.NET/Freeze%20Columns/Freeze%20Columns/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Applying freeze columns to the sheet by specifying a cell
	worksheet.Range["C1"].FreezePanes();

	//Set first visible column in the right pane
	worksheet.FirstVisibleColumn = 4;

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Applying freeze columns to the sheet by specifying a cell
    worksheet.Range["C1"].FreezePanes();

    //Set first visible column in the right pane
    worksheet.FirstVisibleColumn = 4;

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Applying freeze columns to the sheet by specifying a cell
    worksheet.Range("C1").FreezePanes()

    'Set first visible column in the right pane
    worksheet.FirstVisibleColumn = 4

    'Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}   

A complete working example to freeze columns in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Freeze%20Columns/.NET/Freeze%20Columns)

## Unfreeze Panes

Unfreezing panes allows you to remove any previously frozen sections in an Excel worksheet using the [RemovePanes](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_RemovePanes) method of the [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) interface.

The following code example illustrates how to unfreeze panes in the worksheet.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/UnFreeze%20Panes/.NET/UnFreeze%20Panes/UnFreeze%20Panes/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Unfreeze panes in the worksheet
	worksheet.RemovePanes();

	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/Output.xlsx"));
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
    IApplication application = excelEngine.Excel;
    application.DefaultVersion = ExcelVersion.Xlsx;
    IWorkbook workbook = application.Workbooks.Open("InputTemplate.xlsx");
    IWorksheet worksheet = workbook.Worksheets[0];

    //Unfreeze panes in the worksheet
    worksheet.RemovePanes();

    //Saving the workbook
    workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
    Dim application As IApplication = excelEngine.Excel
    application.DefaultVersion = ExcelVersion.Xlsx
    Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
    Dim worksheet As IWorksheet = workbook.Worksheets(0)

    'Unfreeze panes in the worksheet
    worksheet.RemovePanes()

    //Saving the workbook
    workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to unfreeze panes in C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/UnFreeze%20Panes/.NET/UnFreeze%20Panes)

## Split Panes 

Split panes allow you to divide a worksheet into separate sections, or panes, which can be scrolled independently.

The following code example illustrates how to split the window through the [HorizontalSplit](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_HorizontalSplit) and [VerticalSplit](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_VerticalSplit) properties.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Split%20Panes/.NET/Split%20Panes/Split%20Panes/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	#region Split Panes
	//split panes
	sheet.FirstVisibleColumn = 2;
	sheet.FirstVisibleRow = 5;
	sheet.VerticalSplit = 5000;
	sheet.HorizontalSplit = 5000;
	#endregion

	sheet.ActivePane = 1;

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/SplitPanes.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet sheet = workbook.Worksheets[0];

  //split panes
  sheet.FirstVisibleColumn = 5;
  sheet.FirstVisibleRow = 11;
  sheet.VerticalSplit = 1100;
  sheet.HorizontalSplit = 1000;
  sheet.ActivePane = 1;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Split Panes
  sheet.FirstVisibleColumn = 5
  sheet.FirstVisibleRow = 11
  sheet.VerticalSplit = 1100
  sheet.HorizontalSplit = 1000
  sheet.ActivePane = 1

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}   

A complete working example to split panes in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Split%20Panes/.NET/Split%20Panes).