---
layout: post
title: Editing in UWP Spreadsheet control | Syncfusion®
description: Learn here all about Editing support in Syncfusion® UWP Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Editing in UWP Spreadsheet (SfSpreadsheet)

This section explains the Editing behavior, Data Validation, and Hyperlinks in SfSpreadsheet.

## Editing

SfSpreadsheet supports editing; you can modify and commit cell values in the workbook.

By default, editing is enabled in SfSpreadsheet. To disable editing, set the `AllowEditing` property to `false`.

{% tabs %}
{% highlight c# %}

void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{
    spreadsheet.ActiveGrid.AllowEditing = false;
}

{% endhighlight %}
{% endtabs %}

### Editing a cell programmatically

#### Start Editing
    
You can edit a cell programmatically by using the `BeginEdit` method.

{% tabs %}
{% highlight c# %}

    spreadsheet.ActiveGrid.CurrentCell.BeginEdit(true);

{% endhighlight %}
{% endtabs %}

#### End Editing

You can end editing of a cell programmatically in any of the following ways:

* `ValidateAndEndEdit` - Validates and ends the edit operation for the current cell. If `cancel` is `true`, the current cell remains in edit mode. If validation succeeds, the new value is committed and the cell moves to the next cell; otherwise the old value is reverted and the cell moves to the next cell.

* `EndEdit` - Commits and ends the edit operation for the current cell. When called with the parameter `true`, the new value is committed; otherwise the old value is reverted.

{% tabs %}
{% highlight c# %}

//Validates and ends the edit operation,
spreadsheet.ActiveGrid.CurrentCell.ValidateAndEndEdit();

//Commits the value and ends the edit operation,
spreadsheet.ActiveGrid.CurrentCell.EndEdit(true);

{% endhighlight %}
{% endtabs %}

### Locking or Unlocking a cell

Locking cells disables editing and formatting of the cells when the sheet is protected. By default, all cells in the worksheet are locked.
When the sheet is protected, you can unlock cells to allow them to be edited or formatted.

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

The order of events when editing and committing a cell value in SfSpreadsheet:

<table>
<tr>
<th>
Events</th><th>
Description</th></tr>
<tr>
<td>
<code>CurrentCellBeginEdit</code></td><td>
Occurs when the current cell enters into edit mode. This event allows to cancel entering the edit mode.</td></tr>
<tr>
<td>
<code>CurrentCellValueChanged</code></td><td>
Occurs when the current cell value is changed in edit mode.</td></tr>
<tr>
<td>
<code>CurrentCellValidating</code></td><td>
Occurs when the current cell value is going to be validated. It allows you to validate and cancel the end editing.</td></tr>
<tr>
<td>
<code>CurrentCellValidated</code></td><td>
Occurs after the current cell is validated.</td></tr>
<tr>
<td>
<code>CurrentCellEndEdit</code></td><td>
Occurs when the current cell exits edit mode.</td></tr>
</table>

The table below lists the properties associated with Editing.

<table>
<tr>
<th>
Properties</th><th>
Description</th></tr>
<tr>
<td>
<code>AllowEditing</code></td><td>
Gets or sets the value indicating whether to allow the editing operation or not.</td></tr>
<tr>
<td>
<code>EditorSelectionBehavior</code></td><td>
Gets or sets a value indicating whether the editor selects all the value or moves to the last position.</td></tr>
<tr>
<td>
<code>EditTrigger</code></td><td>
Gets or sets a value indicating any of the trigger options will cause cells to enter Edit Mode.</td></tr>
<tr>
<td>
<code>IsEditing</code></td><td>
Gets whether the current cell is in edit mode.</td></tr>
</table>

The table below lists the methods associated with Editing.

<table>
<tr>
<th>
Methods</th><th>
Description</th></tr>
<tr>
<td>
<code>BeginEdit</code></td><td>
Begins the editing operation of the current cell and returns true if the current cell enters into edit mode.</td></tr>
<tr>
<td>
<code>EndEdit</code></td><td>
Commits and ends the edit operation of the current cell.</td></tr>
<tr>
<td>
<code>ValidateAndEndEdit</code></td><td>
Validates and ends the edit operation of the current cell.</td></tr>
<tr>
<td>
<code>Validate</code></td><td>
Validates the current cell in the SpreadsheetGrid.</td></tr>
</table>

## Data Validation

Data Validation is a list of rules that limit the type of data or the values that can be entered in a cell.

### Applying Data Validation at runtime

SfSpreadsheet allows you to apply data validation rules at runtime for a particular cell or range using the `IDataValidation` interface.

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
validation.ErrorBoxText = "Text length should be less than or equal to 4 characters";

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

For more reference, please go through the [XlsIO](http://help.syncfusion.com/file-formats/xlsio/working-with-data-validation) UG.

T> To show a ComboBox in a cell in SfSpreadsheet, apply List Validation to that cell.

## Hyperlink

Hyperlinks provide a convenient way to access web pages, files, and data within a worksheet or across other worksheets in a workbook. SfSpreadsheet supports adding, editing, and removing Hyperlinks in the workbook.

### Add a Hyperlink to a cell

SfSpreadsheet supports adding a hyperlink to a cell through the hyperlinks collection using the `IHyperlinks` interface. 

SfSpreadsheet allows you to add the following types of hyperlinks.

* Web URL
* Cell or range in a workbook
* E-mail
* External files

{% tabs %}
{% highlight c# %}

// Creating a Hyperlink for e-mail,
var range = spreadsheet.ActiveSheet.Range["A5"];

IHyperLink hyperlink1 = spreadsheet.ActiveSheet.HyperLinks.Add(range);
hyperlink1.Type = ExcelHyperLinkType.Url;
hyperlink1.Address = "mailto:Username@syncfusion.com";
hyperlink1.TextToDisplay="Send Mail";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5, 1));

// Creating a Hyperlink for Opening Files,
var range1 = spreadsheet.ActiveSheet.Range["D5"];

IHyperLink hyperlink2 = spreadsheet.ActiveSheet.HyperLinks.Add(range1);
hyperlink2.Type = ExcelHyperLinkType.File;
hyperlink2.Address = @"C:\Samples\Local";
hyperlink2.TextToDisplay = "File Location";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5, 4));

//Creating a Hyperlink to refer to another cell in the workbook,
var range2 = spreadsheet.ActiveSheet.Range["C13"];

IHyperLink hyperlink3 = spreadsheet.ActiveSheet.HyperLinks.Add(range);
hyperlink3.Type = ExcelHyperLinkType.Workbook;
hyperlink3.Address = "Sheet2!C23";
hyperlink3.TextToDisplay = "Sample";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(13, 3));

{% endhighlight %}
{% endtabs %}

### Edit or Remove a Hyperlink

SfSpreadsheet supports editing or removing hyperlinks from a range by accessing the Hyperlinks collection.

{% tabs %}
{% highlight c# %}

//To edit a hyperlink in a cell,
var hyperlink = spreadsheet.ActiveSheet.Range["A5"].Hyperlinks[0];
hyperlink.TextToDisplay = "Sample";
hyperlink.Address = "http://help.syncfusion.com";
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5,1));

//To remove a hyperlink from a cell,
var hyperlink = spreadsheet.ActiveSheet.Range["A5"].Hyperlinks.RemoveAt(0);
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Cell(5,1));

{% endhighlight %}
{% endtabs %}
