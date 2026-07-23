---
layout: post
title: Editing in Windows Forms Spreadsheet control | Syncfusion®
description: Learn about Editing support in Syncfusion® Windows Forms Spreadsheet control, its elements and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Editing in Windows Forms Spreadsheet

This section explains the Editing behavior, Data Validation, and Hyperlinks in the Spreadsheet.

## Cell Editing

The Spreadsheet control supports editing, allowing you to modify and commit cell values in the workbook.

By default, editing is enabled in the `Spreadsheet`. To disable editing, set the [AllowEditing](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html#Syncfusion_Windows_Forms_CellGrid_SfCellGrid_AllowEditing) property to `false`.

{% tabs %}
{% highlight c# %}

private void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{
    spreadsheet.ActiveGrid.AllowEditing = false;
}

{% endhighlight %}
{% endtabs %}

### Editing a cell programmatically

#### Start editing
    
You can edit a cell programmatically by using the [BeginEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCurrentCell.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCurrentCell_BeginEdit_System_Boolean_) method.

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveGrid.CurrentCell.BeginEdit(true);

{% endhighlight %}
{% endtabs %}

#### End editing

You can end the editing of a cell programmatically in any of the following ways:

* [ValidateAndEndEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.GridCurrentCell.html#Syncfusion_Windows_Forms_CellGrid_GridCurrentCell_ValidateAndEndEdit) - Validates and ends the edit operation for the current cell. If the cancel argument is `true`, the current cell remains in edit mode. If validation succeeds, the new value is committed and the active cell moves to the next cell. If validation fails, the old value is restored and the active cell moves to the next cell.

* [EndEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.GridCurrentCell.html#Syncfusion_Windows_Forms_CellGrid_GridCurrentCell_EndEdit_System_Boolean_) - Commits and ends the edit operation for the current cell. If `true` is passed, the new value is committed; otherwise, the old value is restored.

{% tabs %}
{% highlight c# %}

//Validates and ends the edit operation,
spreadsheet.ActiveGrid.CurrentCell.ValidateAndEndEdit();

//Commits the value and ends the edit operation,
spreadsheet.ActiveGrid.CurrentCell.EndEdit(true);

{% endhighlight %}
{% endtabs %}

### Locking or UnLocking a cell

Locking cells allows you to disable editing and formatting the cells when the sheet is protected. By default, every cell is locked in the worksheet.
When the sheet is protected, you can unlock specific cells to allow editing or formatting.

{% tabs %}
{% highlight c# %}

var worksheet = spreadsheet.ActiveSheet;
var excelStyle = worksheet.Range["A2"].CellStyle;

//To unlock a cell,
excelStyle.Locked = false;

//To lock a cell,
excelStyle.Locked = true;

{% endhighlight %}
{% endtabs %}

### Properties, Methods, and Events

The order of events when editing and committing a cell value in the Spreadsheet is as follows:

<table>
<tr>
<th>
Events</th><th>
Description</th></tr>
<tr>
<td>
{{ '[CurrentCellBeginEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs when the current cell enters edit mode. This event allows you to cancel entering edit mode.</td></tr>
<tr>
<td>
{{ '[CurrentCellValueChanged](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs when the current cell value is changed in edit mode.</td></tr>
<tr>
<td>
{{ '[CurrentCellValidating](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs when the current cell value is going to be validated. It allows you to validate the value and cancel the end editing.</td></tr>
<tr>
<td>
{{ '[CurrentCellValidated](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs after the current cell value is validated.</td></tr>
<tr>
<td>
{{ '[CurrentCellEndEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs when the current cell leaves edit mode.</td></tr>
</table>

The table below lists the properties associated with Editing.

<table>
<tr>
<th>
Properties</th><th>
Description</th></tr>
<tr>
<td>
{{ '[AllowEditing](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html#Syncfusion_Windows_Forms_CellGrid_SfCellGrid_AllowEditing)' | markdownify }}</td><td>
Gets or sets the value indicating whether to allow the editing operation or not.</td></tr>
<tr>
<td>
{{ '[EditorSelectionBehavior](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html#Syncfusion_Windows_Forms_CellGrid_SfCellGrid_EditorSelectionBehavior)' | markdownify }}</td><td>
Gets or sets a value indicating whether the editor selects all the cell text or moves the caret to the last position.</td></tr>
<tr>
<td>
{{ '[EditTrigger](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.SfCellGrid.html#Syncfusion_Windows_Forms_CellGrid_SfCellGrid_EditTrigger)' | markdownify }}</td><td>
Gets or sets the trigger options that cause cells to enter Edit Mode.</td></tr>
<tr>
<td>
{{ '[IsEditing](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.GridCurrentCell.html#Syncfusion_Windows_Forms_CellGrid_GridCurrentCell_isEditing)' | markdownify }}</td><td>
Gets a value indicating whether the current cell is in edit mode.</td></tr>
</table>

The table below lists the methods associated with Editing.

<table>
<tr>
<th>
Methods</th><th>
Description</th></tr>
<tr>
<td>
{{ '[BeginEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCurrentCell.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCurrentCell_BeginEdit_System_Boolean_)' | markdownify }}</td><td>
Begins the edit operation for the current cell and returns `true` if the current cell enters edit mode.</td></tr>
<tr>
<td>
{{ '[EndEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.SpreadsheetCurrentCell.html#Syncfusion_Windows_Forms_Spreadsheet_SpreadsheetCurrentCell_EndEdit_System_Boolean_)' | markdownify }}</td><td>
Commits and ends the edit operation for the current cell.</td></tr>
<tr>
<td>
{{ '[ValidateAndEndEdit](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.GridCurrentCell.html#Syncfusion_Windows_Forms_CellGrid_GridCurrentCell_ValidateAndEndEdit)' | markdownify }}</td><td>
Validates and ends the edit operation of the current cell.</td></tr>
<tr>
<td>
{{ '[Validate](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.CellGrid.GridCurrentCell.html#Syncfusion_Windows_Forms_CellGrid_GridCurrentCell_Validate_System_Boolean__)' | markdownify }}</td><td>
Validates the current cell in the SpreadsheetGrid.</td></tr>
</table>

## Data Validation

Data Validation is a list of rules to limit the type of data or the values that can be entered in the cell.

### Applying data validation at runtime

The Spreadsheet allows you to apply data validation rules at runtime for a particular cell or range using the `IDataValidation` interface.

{% tabs %}
{% highlight c# %}

//Number Validation
IDataValidation validation = spreadsheet.ActiveSheet.Range["A5"].DataValidation;
validation.AllowType = ExcelDataType.Integer;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Between;
validation.FirstFormula = "4";
validation.SecondFormula = "15";
validation.ShowErrorBox = true;
validation.ErrorBoxText = "Accepts values only between 4 to 15";

//Date Validation
IDataValidation validation = spreadsheet.ActiveSheet.Range["B4"].DataValidation;
validation.AllowType = ExcelDataType.Date;
validation.CompareOperator = ExcelDataValidationComparisonOperator.Greater;
validation.FirstDateTime = new DateTime(2016,5,5);
validation.ShowErrorBox = true;
validation.ErrorBoxText = "Enter the date value which is greater than 05/05/2016";

//TextLength Validation
IDataValidation validation = spreadsheet.ActiveSheet.Range["A3:B3"].DataValidation;
validation.AllowType = ExcelDataType.TextLength;
validation.CompareOperator = ExcelDataValidationComparisonOperator.LessOrEqual;
validation.FirstFormula = "4";
validation.ShowErrorBox = true;
validation.ErrorBoxText = "Text length should be lesser than or equal 4 characters";

//List Validation
IDataValidation validation = spreadsheet.ActiveSheet.Range["D4"].DataValidation;
validation.ListOfValues = new string[] { "10", "20", "30" };

//Custom Validation
IDataValidation validation = spreadsheet.ActiveSheet.Range["D4"].DataValidation;
validation.AllowType = ExcelDataType.Formula;
validation.FirstFormula = "=A1+A2>0";
validation.ErrorBoxText = "Sum of the values in A1 and A2 should be greater than zero";

{% endhighlight %}
{% endtabs %}

For more reference, please go through the [XlsIO](https://help.syncfusion.com/file-formats/xlsio/working-with-data-validation) UG.

T> If you want to display a ComboBox in a cell of the Spreadsheet, you can apply List Validation to that cell.

## Hyperlinks

A hyperlink is a convenient way to access web pages, files, and other data within a workbook. The Spreadsheet supports adding, editing, and removing Hyperlinks in the workbook.

### Adding a hyperlink to a cell

The Spreadsheet supports adding hyperlinks to a cell, and they can be added to the hyperlinks collection using the `IHyperLinks` interface.

The Spreadsheet allows you to add the following types of hyperlinks.

* Web URL
* Cell or range in a workbook
* E-mail
* External files

{% tabs %}
{% highlight c# %}

// Creating a hyperlink for an e-mail,
var range = spreadsheet.ActiveSheet.Range["A5"];
IHyperLink hyperlink1 = spreadsheet.ActiveSheet.HyperLinks.Add(range);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "mailto:Username@syncfusion.com";
hyperlink1.TextToDisplay = "Send Mail";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5, 1));

// Creating a hyperlink for opening files,
var range1 = spreadsheet.ActiveSheet.Range["D5"];
IHyperLink hyperlink2 = spreadsheet.ActiveSheet.HyperLinks.Add(range1);
hyperlink2.Type = ExcelHyperLinkType.File;
hyperlink2.Address = @"C:\Samples\Local";
hyperlink2.TextToDisplay = "File Location";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5, 4));

// Creating a hyperlink that refers to another cell in the workbook,
var range2 = spreadsheet.ActiveSheet.Range["C13"];
IHyperLink hyperlink3 = spreadsheet.ActiveSheet.HyperLinks.Add(range);
hyperlink3.Type = ExcelHyperLinkType.Workbook;
hyperlink3.Address = "Sheet2!C23";
hyperlink3.TextToDisplay = "Sample";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(13, 3));

{% endhighlight %}
{% endtabs %}

### Editing or removing a hyperlink

The Spreadsheet supports editing or removing the hyperlinks from a range by accessing the hyperlinks collection.

{% tabs %}
{% highlight c# %}

//To edit a hyperlink in a cell,
var hyperlink = spreadsheet.ActiveSheet.Range["A5"].Hyperlinks[0];
hyperlink.TextToDisplay = "Sample";
hyperlink.Address = "http://help.syncfusion.com";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5, 1));

//To remove a hyperlink in a cell,
spreadsheet.ActiveSheet.Range["A5"].Hyperlinks.RemoveAt(0);
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5, 1));

{% endhighlight %}
{% endtabs %}
