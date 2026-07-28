---
layout: post
title: Find and Replace in Windows Forms Spreadsheet control | Syncfusion®
description: Learn about Find and Replace support in Syncfusion® Windows Forms Spreadsheet control and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Find and Replace in Windows Forms Spreadsheet

This section explains Find and Replace operations in the Spreadsheet control.

## Find

Searches for specific data, such as a particular number or text, according to the specified options and returns an `IRange` representing the cell, or `null` if no cell is found. The various Find options are:

* [FindAll](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_FindAll_Syncfusion_XlsIO_IWorkbook_System_String_Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchBy_Syncfusion_XlsIO_ExcelFindType_System_Boolean_System_Boolean_)
* [FindNext](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_FindNext_Syncfusion_XlsIO_IWorkbook_System_String_Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchBy_Syncfusion_XlsIO_ExcelFindType_System_Boolean_System_Boolean_)
* [FindConditionalFormatting](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_FindConditionalFormatting_Syncfusion_XlsIO_IWorksheet_)
* [FindConstants](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_FindConstants_Syncfusion_XlsIO_IWorksheet_)
* [FindFormulas](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_FindFormulas_Syncfusion_XlsIO_IWorksheet_)
* [FindDataValidation](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_FindDataValidation_Syncfusion_XlsIO_IWorksheet_)

The common parameters passed to Find functions are:

* The option that specifies whether the search is performed within the [IWorkbook](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IWorkbook.html) or [IWorksheet](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IWorksheet.html).
* The text to search for.
* The [SearchBy](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchBy.html) enum that specifies whether the search proceeds by row or by column.
* The [ExcelFindType](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.ExcelFindType.html) enum that specifies whether the search is performed in text, numbers, or formulas.
* For a case-sensitive search, pass `true`; otherwise pass `false`.
* To match the entire cell content with the search text, pass `true`; otherwise pass `false`.

### Find All

Searches every occurrence of specific data that matches the criteria and returns an `IRange` list representing the matched cells in the `Spreadsheet`.

{% tabs %}
{% highlight c# %}

//Search the entire workbook
var list = spreadsheet.SearchManager.FindAll(spreadsheet.Workbook, "sample", SearchBy.ByRows, ExcelFindType.Text, false, true);

// To select the matched cell content ranges,

foreach (var cell in list)
{
  spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cell(cell.Row, cell.Column));
}

//Search the specified worksheet
var list = spreadsheet.SearchManager.FindAll(spreadsheet.Workbook.Worksheets[0], "sample", SearchBy.ByRows, ExcelFindType.Text, false, true);

// To select the matched cell content ranges,

foreach (var cell in list)
{
  spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cell(cell.Row, cell.Column));
}

{% endhighlight %}
{% endtabs %}

### Find Next

Searches for the first occurrence of specific data that matches the conditions and returns the matched `IRange` from the current range.

{% tabs %}
{% highlight c# %}

//Search the text in the entire workbook by column
var cell = spreadsheet.SearchManager.FindNext(spreadsheet.Workbook, "sample", SearchBy.ByColumns, ExcelFindType.Text, false, true);

// To move the current cell to the matched cell,
spreadsheet.ActiveGrid.CurrentCell.MoveCurrentCell(cell.Row,cell.Column);

//Search the text in the specified worksheet by row
var cell = spreadsheet.SearchManager.FindNext(spreadsheet.Workbook.Worksheets[0], "sum", SearchBy.ByRows, ExcelFindType.Text, false, false);

// To move the current cell to the matched cell,
spreadsheet.ActiveGrid.CurrentCell.MoveCurrentCell(cell.Row,cell.Column);

{% endhighlight %}
{% endtabs %}

### Finding conditional formatting

Searches and returns the `IRange` list of cells that have conditional formatting in the specified worksheet.

{% tabs %}
{% highlight c# %}

//Searches the conditional formatting within the worksheet,
var list = spreadsheet.SearchManager.FindConditionalFormatting(spreadsheet.Workbook.Worksheets[0]);

// To select the matched cell content ranges,

foreach (var cell in list)
{
  spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cell(cell.Row, cell.Column));
}

{% endhighlight %}
{% endtabs %}

### Finding constants

Searches and returns the `IRange` list of cells that contain constants in the specified worksheet.

{% tabs %}
{% highlight c# %}

//Searches the constants within the worksheet,
var list = spreadsheet.SearchManager.FindConstants(spreadsheet.Workbook.Worksheets[0]);

// To select the matched cell content ranges,

foreach (var cell in list)
{
   spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cell(cell.Row, cell.Column));
}

{% endhighlight %}
{% endtabs %}

### Finding formulas

Searches and returns the `IRange` list of cells that contain formulas in the specified worksheet.

{% tabs %}
{% highlight c# %}

//Searches the formulas within the worksheet,
var list = spreadsheet.SearchManager.FindFormulas(spreadsheet.Workbook.Worksheets[0]);

// To select the matched cell content ranges,

foreach (var cell in list)
{
   spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cell(cell.Row, cell.Column));
}

{% endhighlight %}
{% endtabs %}

### Finding data validation

Searches and returns the `IRange` list of cells that have data validation in the specified worksheet.

{% tabs %}
{% highlight c# %}

//Searches the data validation within the worksheet,
var list = spreadsheet.SearchManager.FindDataValidation(spreadsheet.Workbook.Worksheets[0]);

// To select the matched cell content ranges,

foreach (var cell in list)
{
   spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cell(cell.Row, cell.Column));
}

{% endhighlight %}
{% endtabs %}

## Replace All

Searches and replaces all occurrences of the text in the workbook or in a specified worksheet.

The parameters passed to the [ReplaceAll](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Commands.SearchManager.html#Syncfusion_Windows_Forms_Spreadsheet_Commands_SearchManager_ReplaceAll_Syncfusion_XlsIO_IWorkbook_System_String_System_String_System_Boolean_System_Boolean_) method are:

* The option that specifies whether the search is performed within the [IWorkbook](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IWorkbook.html) or [IWorksheet](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IWorksheet.html) in the Spreadsheet.
* The text to search for.
* The replacement text.
* For a case-sensitive search, pass `true`; otherwise pass `false`.
* To match the entire cell content with the search text, pass `true`; otherwise pass `false`.

{% tabs %}
{% highlight c# %}

//Replaces the text in the entire workbook
spreadsheet.SearchManager.ReplaceAll(spreadsheet.Workbook, "sample","Sync", false, false);

//Replaces the text in the specified worksheet
spreadsheet.SearchManager.ReplaceAll(spreadsheet.Workbook.Worksheets[0], "sample", "sync", false, true);

{% endhighlight %}
{% endtabs %}

## Replace

Searches for the text or number to change using `FindNext`; once a match is found, use [SetCellValue](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetGrid.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetGrid_SetCellValue_Syncfusion_XlsIO_IRange_System_String_) to replace it with the specified text or number in the `Spreadsheet`.

{% tabs %}
{% highlight c# %}

//Searches the given text and replaces it with the specified text
var cell = spreadsheet.SearchManager.FindNext(spreadsheet.Workbook, "sample", SearchBy.ByColumns, ExcelFindType.Text, false, true);
spreadsheet.ActiveGrid.SetCellValue(cell, "sync");

{% endhighlight %}
{% endtabs %}

