---
layout: post
title: Selection in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Selection support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Selection in WPF Spreadsheet (SfSpreadsheet)

This section explains the Selection behavior in the [WPF Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/wpf-spreadsheet-editor).

The SfSpreadsheet control provides selection support in the grid by using mouse, keyboard, and touch interactions.

By default, selection is enabled in `SfSpreadsheet`. To disable selection, set the [AllowSelection](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_AllowSelection) property to `false`.

{% tabs %}
{% highlight c# %}
void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{
    spreadsheet.ActiveGrid.AllowSelection = false;
}
{% endhighlight %}
{% endtabs %}

## Accessing the Current Cell

The current cell is exposed through the `CurrentCell` property of the [SelectionController](http://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SelectionController.html) class.

{% tabs %}
{% highlight c# %}
var cell = spreadsheet.ActiveGrid.SelectionController.CurrentCell;
{% endhighlight %}
{% endtabs %}

## Accessing the Selected Ranges

The selected ranges of the `SpreadsheetGrid` are exposed through the [SelectedRanges](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_SelectedRanges) property. The returned object is a `GridRangeInfoList` instance.

{% tabs %}
{% highlight c# %}
var rangeList = spreadsheet.ActiveGrid.SelectedRanges;
{% endhighlight %}
{% endtabs %}

N> To get the currently focused range within the selected ranges list, use the [ActiveRange](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridRangeInfoList.html#Syncfusion_UI_Xaml_CellGrid_GridRangeInfoList_ActiveRange) property of the [GridRangeInfoList](http://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridRangeInfoList.html) class.

## Adding or Clearing the Selection

The active `SpreadsheetGrid` allows you to add new selection ranges and clear the existing selection programmatically.

{% tabs %}
{% highlight c# %}
// Add a selection for the cell range.
spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cells(4, 6, 5, 8));

// Add a selection for a single row.
spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Row(4));

// Add a selection for multiple rows.
spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Rows(4, 9));

// Add a selection for a single column.
spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Col(5));

// Add a selection for multiple columns.
spreadsheet.ActiveGrid.SelectionController.AddSelection(GridRangeInfo.Cols(5, 10));

// Clear the current selection.
spreadsheet.ActiveGrid.SelectionController.ClearSelection();
{% endhighlight %}
{% endtabs %}

## Move Current Cell

Move the current cell to a specified cell in the `SpreadsheetGrid` using the `MoveCurrentCell` method.

{% tabs %}
{% highlight c# %}

// Moves current cell to the mentioned row and column index of the cell.
spreadsheet.ActiveGrid.CurrentCell.MoveCurrentCell(5, 5);

// Move the current cell to a different sheet.
spreadsheet.SetActiveSheet("Sheet2");
spreadsheet.ActiveGrid.CurrentCell.MoveCurrentCell(6, 5);

{% endhighlight %}
{% endtabs %}

## Converting GridRangeInfo into IRange

Convert a `GridRangeInfo` value to its equivalent XlsIO `IRange`using the [ConvertGridRangeToExcelRange](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.Helpers.GridExcelHelper.html#Syncfusion_UI_Xaml_Spreadsheet_Helpers_GridExcelHelper_ConvertGridRangeToExcelRange_Syncfusion_UI_Xaml_CellGrid_GridRangeInfo_Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_) method of the [GridExcelHelper](http://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.Helpers.GridExcelHelper.html) class.

{% tabs %}
{% highlight c# %}
var excelRange = GridExcelHelper.ConvertGridRangeToExcelRange(GridRangeInfo.Cell(4, 5), spreadsheet.ActiveGrid);
{% endhighlight %}
{% endtabs %}

T> You can also convert an `IRange` into its equivalent `GridRangeInfo` by using the [ConvertExcelRangeToGridRange](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.Helpers.GridExcelHelper.html#Syncfusion_UI_Xaml_Spreadsheet_Helpers_GridExcelHelper_ConvertExcelRangeToGridRange_Syncfusion_XlsIO_IRange_) method of [GridExcelHelper](http://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.Helpers.GridExcelHelper.html).

## Properties, Methods, and Events

The tables below list the events, properties, and methods associated with selection behavior.

### Events

<table>
<tr>
<th>
Events</th><th>
Description</th></tr>
<tr>
<td>
{{ '[CellClick](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html) ' | markdownify }}</td><td>
 Occurs when you click a cell.</td></tr>
<tr>
<td>
{{ '[CurrentCellActivating](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs when the current cell is about to be activated. This event allows you to cancel the current cell activation.</td></tr>
<tr>
<td>
{{ '[CurrentCellActivated](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs after the current cell is activated.</td></tr>
<tr>
<td>
{{ '[SelectionChanging](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs when the selection is about to change. This event allows you to cancel the selection change.</td></tr>
<tr>
<td>
{{ '[SelectionChanged](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html)' | markdownify }}</td><td>
Occurs after the selection changes.</td></tr>
</table>

### Selection properties

<table>
<tr>
<th>
Properties</th><th>
Description</th></tr>
<tr>
<td>
{{ '[SelectedRanges](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_SelectedRanges)' | markdownify }}</td><td>
Gets or sets the collection of selected ranges from the grid.</td></tr>
<tr>
<td>
{{ '[SelectionBrush](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_SelectionBrush)' | markdownify }}</td><td>
Gets or sets the brush used to fill the selected area.</td></tr>
<tr>
<td>
{{ '[SelectionBorderBrush](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_SelectionBorderBrush)' | markdownify }}</td><td>
Gets or sets the selection border brush.</td></tr>
<tr>
<td>
{{ '[SelectionBorderThickness](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_SelectionBorderThickness)' | markdownify }}</td><td>
Gets or sets the thickness of the selection border.</td></tr>
<tr>
<td>
{{ '[SelectionController](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_SelectionController) ' | markdownify }}</td><td>
Gets the selection controller, which provides the selection of content when the user drags the pressed mouse to an edge of the control.</td></tr>
<tr>
<td>
{{ '[AllowSelection](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_AllowSelection) ' | markdownify }}</td><td>
Gets or sets a value indicating whether selection is allowed in the active grid.</td></tr>
<tr>
<td>
{{ '[ShowTouchIndicator](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SelectionController.html#Syncfusion_UI_Xaml_CellGrid_SelectionController_ShowTouchIndicator) ' | markdownify }}</td><td>
Gets or sets a value indicating whether the touch indicator is shown.</td></tr>
<tr>
<td>
{{ '[TouchHitTestPrecision](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SelectionController.html#Syncfusion_UI_Xaml_CellGrid_SelectionController_TouchHitTestPrecision) ' | markdownify }}</td><td>
Gets or sets the distance, in device-independent pixels, of the touch precision point from the touch indicator. Default is 30.</td></tr>
</table>

### [CurrentCell](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_CurrentCell) properties

<table>
<tr>
<th>
Properties</th><th>
Description</th></tr>
<tr>
<td>
{{ '[CellRowColumnIndex](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_CellRowColumnIndex) ' | markdownify }}</td><td>
Gets the row and column index of the current cell.</td></tr>
<tr>
<td>
{{ '[RowIndex](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_RowIndex) ' | markdownify }}</td><td>
Gets the row index of the current cell.</td></tr>
<tr>
<td>
{{ '[ColumnIndex](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_ColumnIndex) ' | markdownify }}</td><td>
Gets the column index of the current cell.</td></tr>
<tr>
<td>
{{ '[Range](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_Range) ' | markdownify }}</td><td>
Gets the range of the current cell.</td></tr>
<tr>
<td>
{{ '[HasCurrentCell](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_HasCurrentCell) ' | markdownify }}</td><td>
 Gets a value indicating whether the grid has a current cell.</td></tr>
<tr>
<td>
{{ '[PreviousRowColumnIndex](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_PreviousRowColumnIndex) ' | markdownify }}</td><td>
Gets the row and column index of the previous current cell.</td></tr>
</table>

### Methods

<table>
<tr>
<th>
Methods</th><th>
Description</th></tr>
<tr>
<td>
{{ '[AddSelection](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SelectionController.html#Syncfusion_UI_Xaml_CellGrid_SelectionController_AddSelection_Syncfusion_UI_Xaml_CellGrid_GridRangeInfo_)' | markdownify }}</td><td>
Adds or extends the selection to the specified range.</td></tr>
<tr>
<td>
{{ '[ClearSelection](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SelectionController.html#Syncfusion_UI_Xaml_CellGrid_SelectionController_ClearSelection)' | markdownify }}</td><td>
Clears the selection and resets the current cell to A1.</td></tr>
<tr>
<td>
{{ '[MoveCurrentCell](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.GridCurrentCell.html#Syncfusion_UI_Xaml_CellGrid_GridCurrentCell_MoveCurrentCell_Syncfusion_UI_Xaml_Grid_ScrollAxis_RowColumnIndex_System_Boolean_)' | markdownify }}</td><td>
Moves the current cell to the specified row and column index. The optional <code>needToClearSelection</code> parameter (default <code>true</code>) controls whether the existing selection is cleared.</td></tr>
</table>

## Key Navigation

The following table lists the key combinations associated with selection.

<table>
<tr>
<th>
Key Combination</th><th>
Description</th></tr>
<tr>
<td>
Home</td><td>
Moves to the first cell of the current row.</td></tr>
<tr>
<td>
End</td><td>
Moves to the last cell of the current row.</td></tr>
<tr>
<td>
Up Arrow</td><td>
Moves one cell up from the current cell.</td></tr>
<tr>
<td>
Down Arrow</td><td>
Moves one cell down from the current cell.</td></tr>
<tr>
<td>
Left Arrow</td><td>
Moves one cell left from the current cell.</td></tr>
<tr>
<td>
Right Arrow</td><td>
Moves one cell right from the current cell.</td></tr>
<tr>
<td>
Page Up</td><td>
Moves to the first visible cell of the current column.</td></tr>
<tr>
<td>
Page Down</td><td>
Moves to the last visible cell of the current column.</td></tr>
<tr>
<td>
Ctrl+Home</td><td>
Moves to the first cell of the worksheet (A1).</td></tr>
<tr>
<td>
Ctrl+End</td><td>
Moves to the last used cell of the worksheet.</td></tr>
<tr>
<td>
Alt+Page Up</td><td>
Moves one screen to the left in the worksheet.</td></tr>
<tr>
<td>
Alt+Page Down</td><td>
Moves one screen to the right in the worksheet.</td></tr>
<tr>
<td>
Ctrl+Arrow Keys</td><td>
Moves to the first or last contiguous data cell in the arrow direction.</td></tr>
<tr>
<td>
Enter</td><td>
Moves the active current cell one cell down within the selection.</td></tr>
<tr>
<td>
Shift+Enter</td><td>
Moves the active current cell one cell up within the selection.</td></tr>
<tr>
<td>
Tab</td><td>
Moves the active current cell one cell to the right within the selection.</td></tr>
<tr>
<td>
Shift+Tab</td><td>
Moves the active current cell one cell to the left within the selection.</td></tr>
<tr>
<td>
Backspace</td><td>
Begins the edit operation for the active cell.</td></tr>
<tr>
<td>
Ctrl+A</td><td>
Selects the entire worksheet.</td></tr>
<tr>
<td>
Shift+Arrow Keys</td><td>
Extends the selection by one cell in the arrow direction.</td></tr>
<tr>
<td>
Ctrl+Shift+Arrow Keys</td><td>
Extends the selection to the last contiguous data cell in a row or column.</td></tr>
<tr>
<td>
Shift+Home</td><td>
Extends the selection to the first column from the active cell.</td></tr>
<tr>
<td>
Ctrl+Shift+Home</td><td>
Extends the selection from the active cell to the first cell of the worksheet (A1).</td></tr>
<tr>
<td>
Shift+Page Down</td><td>
Extends the selection down one screen in the worksheet.</td></tr>
<tr>
<td>
Shift+Page Up</td><td>
Extends the selection up one screen in the worksheet.</td></tr>
</table>


N> You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.