---
title: Show or Hide Options | Syncfusion
description: In this section, you can learn how to use show or hide options in an Excel worksheets using Syncfusion Essential XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Show or Hide in Excel Document

## Show Row and Column

The following code example illustrates how to show hidden row and column in an Excel worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Show%20Row%20and%20Column/.NET/Show%20Row%20and%20Column/Show%20Row%20and%20Column/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Show row and column
	worksheet.ShowRow(2, true);
	worksheet.ShowColumn(2, true);

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
  
  //Show row and column
  worksheet.ShowRow(2, true);
  worksheet.ShowColumn(2, true);

  //Save the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Show row and column
  worksheet.ShowRow(2, True)
  worksheet.ShowColumn(2, True)

  'Save the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to show hidden row and column in an Excel worksheet using C# is present on [this GitHub page.](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Show%20Row%20and%20Column/.NET/Show%20Row%20and%20Column)

## Hide Row and Column

The following code example illustrates how to hide row and column in an Excel worksheet.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Hide%20Row%20and%20Column/.NET/Hide%20Row%20and%20Column/Hide%20Row%20and%20Column/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));
	IWorksheet worksheet = workbook.Worksheets[0];

	//Hide row and column
	worksheet.HideRow(2);
	worksheet.HideColumn(2);

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
  
  //Hide row and column
  worksheet.HideRow(2);
  worksheet.HideColumn(2);

  //Save the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Open("InputTemplate.xlsx")
  Dim worksheet As IWorksheet = workbook.Worksheets(0)

  'Hide row and column
  worksheet.HideRow(2)
  worksheet.HideColumn(2)

  'Save the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to hide row and column in an Excel worksheet using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Hide%20Row%20and%20Column/.NET/Hide%20Row%20and%20Column).

## Show or Hide Worksheet 

The following code example illustrates how to hide the worksheets using [Visibility](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabSheet.html#Syncfusion_XlsIO_ITabSheet_Visibility) property.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Hide%20Worksheet/.NET/Hide%20Worksheet/Hide%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(2);
	IWorksheet sheet = workbook.Worksheets[0];

	sheet.Range["A1:M20"].Text = "visibility";

	#region Hide Worksheet
	//Set visibility
	sheet.Visibility = WorksheetVisibility.Hidden;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/HideWorksheet.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(2);
  IWorksheet sheet = workbook.Worksheets[0];

  sheet.Range["A1:M20"].Text = "visibility";

  //Set visibility
  sheet.Visibility = WorksheetVisibility.Hidden;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(2)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  sheet.Range("A1:M20").Text = "Visibility"
  
  'Set visibility
  sheet.Visibility = WorksheetVisibility.Hidden

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to hide an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Hide%20Worksheet/.NET/Hide%20Worksheet ). 

## Show or Hide Grid Lines 

The following code example illustrates how to hide the grid lines using [IsGridLinesVisible](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_IsGridLinesVisible) property.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Hide%20Gridlines/.NET/Hide%20Gridlines/Hide%20Gridlines/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];
	sheet.Range["A1:M20"].Text = "Gridlines";

	#region Hide Gridlines
	//Hide grid line
	sheet.IsGridLinesVisible = false;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/HideGridlines.xlsx"));
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
  sheet.Range["A1:M20"].Text = "Gridlines";

  //Hide grid line
  sheet.IsGridLinesVisible = false;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet.Range("A1:M20").Text = "GridLines"

  'Hide grid line
  sheet.IsGridLinesVisible = False

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to hide gridlines in an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Hide%20Gridlines/.NET/Hide%20Gridlines).

## Show or Hide Row and Column Headers 

The following code example illustrates how to hide the row and column headings using the [IsRowColumnHeadersVisible](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_IsRowColumnHeadersVisible) property of [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html).

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Hide%20Row%20and%20Column%20Headers/.NET/Hide%20Row%20and%20Column%20Headers/Hide%20Row%20and%20Column%20Headers/Program.cs,180" %}
 using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	sheet.Range["A1:M20"].Text = "RowColumnHeader";

	#region Hide Row and Column Headers
	sheet.IsRowColumnHeadersVisible = false;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/HideRowandColumnHeaders.xlsx"));
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

  sheet.Range["A1:M20"].Text = "RowColumnHeader";
  sheet.IsRowColumnHeadersVisible = false;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  sheet.Range("A1:M20").Text = "RowColumnHeader"
  sheet.IsRowColumnHeadersVisible = False

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to hide row and column headers in an Excel worksheet using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Hide%20Row%20and%20Column%20Headers/.NET/Hide%20Row%20and%20Column%20Headers).

## Show or Hide Worksheet Tabs 

The following code example illustrates how to hide the worksheet tabs using [DisplayWorkbookTabs](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_DisplayWorkbookTabs) property.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Hide%20Worksheet%20Tabs/.NET/Hide%20Worksheet%20Tabs/Hide%20Worksheet%20Tabs/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(3);
	IWorksheet sheet = workbook.Worksheets[0];
	sheet.Range["A1:M20"].Text = "Tabs";

	#region Hide Worksheet Tabs
	//Hide the tab
	workbook.DisplayWorkbookTabs = false;
	//set the display tab
	workbook.DisplayedTab = 2;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/HideWorksheetTabs.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(3);
  IWorksheet sheet = workbook.Worksheets[0];
  sheet.Range["A1:M20"].Text = "Tabs";
	
  //Hide the tab
  workbook.DisplayWorkbookTabs = false;
  //set the display tab
  workbook.DisplayedTab = 2;

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}	
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(3)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet.Range("A1:M20").Text = "Tabs"

  'Hide the tab
  workbook.DisplayWorkbookTabs = False
  'set the display tab
  workbook.DisplayedTab = 2

  'Saving the workbook
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to hide Excel worksheet tab in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Hide%20Worksheet%20Tabs/.NET/Hide%20Worksheet%20Tabs).

## Zoom level

The following code example illustrates how to set the zoom level by using [Zoom](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_Zoom) property.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Set%20Zoom%20Level/.NET/Set%20Zoom%20Level/Set%20Zoom%20Level/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];
	sheet.Range["A1:M20"].Text = "Zoom level";

	#region Set Zoom Level
	//set zoom percentage
	sheet.Zoom = 70;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/SetZoomLevel.xlsx"));
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
  sheet.Range["A1:M20"].Text = "Zoom level";

  //set zoom percentage
  sheet.Zoom = 70;

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)
  sheet.Range("A1:M20").Text = "Zoom level"

  'set Zoom percentage
  sheet.Zoom = 70

  'Saving the workbook 
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to set zoom percentage in an Excel worksheet using C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Set%20Zoom%20Level/.NET/Set%20Zoom%20Level).