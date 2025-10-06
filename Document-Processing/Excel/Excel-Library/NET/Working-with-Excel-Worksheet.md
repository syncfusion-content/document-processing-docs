---
title: Working with Excel Worksheet | Syncfusion
description: In this section, you can learn about various Excel worksheet operations using Syncfusion Essential XlsIO
platform: document-processing
control: XlsIO
documentation: UG
keywords: c#, vb.net, excel, syncfusion, xlsio, read excel, extract data, data from excel, excel worksheet, data from sheet, new worksheet, add worksheet, insert new worksheet, create new worksheet, insert worksheet, create worksheet, insert worksheet, create excel sheet, delete worksheet, delete sheet in excel, remove worksheet, remove sheet in excel, move sheet from one workbook to another, copy sheet from one worksheet to another, moving between sheets in excel, moving sheet, copying between sheets in excel, copying sheets 
---

# Working with Excel Worksheet 

A workbook contains a collection of worksheets where the actual contents resides. It is possible to add and manipulate worksheets and [IWorksheet](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheet.html) instance represents an Excel worksheet.

## Create

A new worksheet can be added into the workbook through [Create](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheets.html#Syncfusion_XlsIO_IWorksheets_Create) method of [IWorksheets](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorksheets.html) interface. It is also possible to specify the required number of worksheets and if not specified, XlsIO creates three worksheets by default.

The following code example illustrates how to create worksheets within a workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Create%20Worksheet/.NET/Create%20Worksheet/Create%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;

	#region Create
	//The new workbook is created with 5 worksheets
	IWorkbook workbook = application.Workbooks.Create(5);
	//Creating a new sheet
	IWorksheet worksheet = workbook.Worksheets.Create();
	//Creating a new sheet with name “Sample”
	IWorksheet namedSheet = workbook.Worksheets.Create("Sample");
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/CreateWorksheet.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;

  //The new workbook will have 5 worksheets
  IWorkbook workbook = application.Workbooks.Create(5);
  //Creating a Sheet
  IWorksheet sheet = workbook.Worksheets.Create();
  //Creating a Sheet with name “Sample”
  IWorksheet namedSheet = workbook.Worksheets.Create("Sample");

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx

  'The new workbook will have 5 worksheets
  Dim workbook As IWorkbook = application.Workbooks.Create(5)
  'Creating a sheet
  Dim sheet As IWorksheet = workbook.Worksheets.Create()
  'Creating a Sheet with name “Sample”
  Dim namedSheet As IWorksheet = workbook.Worksheets.Create("Sample")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for creating Excel worksheets in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Create%20Worksheet/.NET/Create%20Worksheet).

## Access

[Worksheets](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbook.html#Syncfusion_XlsIO_IWorkbook_Worksheets) collection holds one or more worksheets present in a workbook. Accessing a particular worksheet can be done by the following ways. 

1. Specifying the index 
2. Specifying the sheet name. 

The following code example illustrates how to access a worksheet from its worksheets collection.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Access%20Worksheet/.NET/Access%20Worksheet/Access%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	#region  Access
	//Accessing via index
	IWorksheet sheet = workbook.Worksheets[0];

	//Accessing via sheet name
	IWorksheet NamedSheet = workbook.Worksheets["Sample"];
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(2);

  //Accessing via index
  IWorksheet sheet = workbook.Worksheets[0];

  //Accessing via sheet Name
  IWorksheet NamedSheet = workbook.Worksheets["Sample"];

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(2)

  'Accessing via index
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Accessing via Sheet Name
  Dim NamedSheet As IWorksheet = workbook.Worksheets("Sample")

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for accessing Excel worksheets in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Access%20Worksheet/.NET/Access%20Worksheet).

T>If the workbook contains multiple worksheets, then the parsing of the workbook will consume time. **ParseWorksheetsOnDemand** of [ExcelParseOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelParseOptions.html) can be used in [Open](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html#Syncfusion_XlsIO_IWorkbooks_Open_System_String_Syncfusion_XlsIO_ExcelOpenType_Syncfusion_XlsIO_ExcelParseOptions_) method of [IWorkbooks](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IWorkbooks.html) to parse the worksheet only when it is accessed. This option can be used in a scenario where workbook contains multiple worksheets but you are going to use only few worksheets among them.

{% tabs %}
{% highlight c# tabtitle="C# [Cross-platform]" %}
IWorkbook workbook = application.Workbooks.Open(workbookStream,ExcelParseOptions.ParseWorksheetsOnDemand);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
IWorkbook workbook = application.Workbooks.Open(fileName,ExcelParseOptions.ParseWorksheetsOnDemand);
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Dim workbook As IWorkbook = application.Workbooks.Open(fileName, ExcelParseOptions.ParseWorksheetsOnDemand)
{% endhighlight %}
{% endtabs %}

## Remove

The following code example illustrates how to remove a worksheet from Excel workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Remove%20Worksheet/.NET/Remove%20Worksheet/Remove%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Open(Path.GetFullPath(@"Data/InputTemplate.xlsx"));

	#region Remove
	//Removing the sheet
	workbook.Worksheets[0].Remove();
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/RemoveWorksheet.xlsx"));
	#endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(2);

  //Removing the sheet
  workbook.Worksheets[0].Remove();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(2)

  'Removing the sheet
  workbook.Worksheets(0).Remove()

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for removing an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Remove%20Worksheet/.NET/Remove%20Worksheet).

## Set Worksheet Name

The following code example illustrates how to set the worksheet name.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];

  //Set sheet name
  worksheet.Name = "Sample";

  //Saving the workbook
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(1);
  IWorksheet worksheet = workbook.Worksheets[0];
    
  //Set sheet name
  worksheet.Name = "Sample";

  //Saving the workbook 
  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim worksheet As IWorksheet = workbook.Worksheets(0)
    
  ' Set sheet name
  worksheet.Name = "Sample"

  ' Saving the workbook 
  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for setting an Excel worksheet name in C# is present on [this GitHub page]().

## Highlight Worksheet Tabs 

A particular worksheet tab can be highlighted to denote its importance. Tab color can be set through the [TabColor](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ITabSheet.html#Syncfusion_XlsIO_ITabSheet_TabColor) property.

The following code example illustrates how to highlight worksheet tabs.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Highlight%20Worksheet%20Tab/.NET/Highlight%20Worksheet%20Tab/Highlight%20Worksheet%20Tab/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
	IApplication application = excelEngine.Excel;
	application.DefaultVersion = ExcelVersion.Xlsx;
	IWorkbook workbook = application.Workbooks.Create(1);
	IWorksheet sheet = workbook.Worksheets[0];

	#region Highlight Worksheet Tab
	//Highlighting sheet tab
	sheet.TabColor = ExcelKnownColors.Green;
	#endregion

	#region Save
	//Saving the workbook
	workbook.SaveAs(Path.GetFullPath("Output/HighlightSheetTab.xlsx"));
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

  //Highlighting sheet tab
  sheet.TabColor = ExcelKnownColors.Red;

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(1)
  Dim sheet As IWorksheet = workbook.Worksheets(0)

  'Highlighting sheet tab
  sheet.TabColor = ExcelKnownColors.Red

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example to highlight an Excel worksheet tab in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Highlight%20Worksheet%20Tab/.NET/Highlight%20Worksheet%20Tab).

## Worksheet Operations

Worksheet operations encompass a wide range of actions and manipulations that can be performed within an Excel worksheet to manage data.

### Move or Copy

Moving or copying in Excel refers to the actions of relocating or duplicating cells, rows, columns, or entire sheets within the same workbook or to another workbook.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can move or copy cells, rows, columns, or entire worksheets within an Excel workbook using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet/move-or-copy) for more details.

### Freeze Panes

Freezing panes in Excel allows you to lock specific rows or columns so that they remain visible while scrolling through the rest of the worksheet.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can freeze panes in an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet/freeze-panes) for more details.

### Page Setup Options

Page setup options in Excel include settings related to printing, such as adjusting margins, setting paper size and orientation, adding headers and footers, and scaling the worksheet to fit on a specified number of pages.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can manage page setup options in an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet/page-setup-options) for more details.

### Show or Hide

Showing or hiding in Excel refers to making rows, columns, or specific elements visible or invisible within the worksheet.

With the Syncfusion<sup>&reg;</sup> Excel Library, you can show or hide rows, columns, or specific elements within an Excel worksheets using C#. Click [here](https://help.syncfusion.com/document-processing/excel/excel-library/net/worksheet/show-or-hide) for more details.

## Activate

The following code example illustrates how to activate a worksheet in a workbook.

{% tabs %}  
{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/XlsIO-Examples/master/Worksheet%20Features/Activate%20Worksheet/.NET/Activate%20Worksheet/Activate%20Worksheet/Program.cs,180" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(2);
  IWorksheet sheet = workbook.Worksheets[1];

  sheet.Range["A1:M20"].Text = "Activate";

  #region Activate Worksheet
  //Activate the sheet
  sheet.Activate();
  #endregion

  #region Save
  //Saving the workbook
  workbook.SaveAs(Path.GetFullPath("Output/ActivateWorksheet.xlsx"));
  #endregion
}
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}
using (ExcelEngine excelEngine = new ExcelEngine())
{
  IApplication application = excelEngine.Excel;
  application.DefaultVersion = ExcelVersion.Xlsx;
  IWorkbook workbook = application.Workbooks.Create(2);
  IWorksheet sheet = workbook.Worksheets[1];

  sheet.Range["A1:M20"].Text = "Activate";

  //Activate the sheet 
  sheet.Activate();

  workbook.SaveAs("Output.xlsx");
}
{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}
Using excelEngine As ExcelEngine = New ExcelEngine()
  Dim application As IApplication = excelEngine.Excel
  application.DefaultVersion = ExcelVersion.Xlsx
  Dim workbook As IWorkbook = application.Workbooks.Create(2)
  Dim sheet As IWorksheet = workbook.Worksheets(1)

  sheet.Range("A1:M20").Text = "Activate" 

  'Activate the sheet 
  sheet.Activate()

  workbook.SaveAs("Output.xlsx")
End Using
{% endhighlight %}
{% endtabs %}

A complete working example for activating an Excel worksheet in C# is present on [this GitHub page](https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Worksheet%20Features/Activate%20Worksheet/.NET/Activate%20Worksheet).

## See Also

* [How to hide worksheet tabs using XlsIO?](https://support.syncfusion.com/kb/article/2603/how-to-hide-worksheet-tabs-using-xlsio)
* [How to set worksheet visibility to very hidden?](https://support.syncfusion.com/kb/article/4586/how-to-set-worksheet-visibility-to-very-hidden)
* [How to copy Excel worksheet to another workbook in C#, VB.NET?](https://support.syncfusion.com/kb/article/2629/copy-excel-worksheet-to-another-workbook-in-c-vb-net)
* [How range Copy To method overloads on WinForms XIsIO?](https://support.syncfusion.com/kb/article/2751/how-range-copy-to-method-overloads-on-winforms-xisio?isInternalRefresh=False)
* [How to set freeze panes in Excel document using C#, VB.NET?](https://support.syncfusion.com/kb/article/2684/how-to-set-freeze-panes-in-excel-document-using-c-vbnet)
* [Blog: Freeze panes](https://www.syncfusion.com/aspnet-core-ui-controls/spreadsheet/freeze-panes)