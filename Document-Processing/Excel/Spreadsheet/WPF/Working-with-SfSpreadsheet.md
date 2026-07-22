---
layout: post
title: Working With Spreadsheet in WPF Spreadsheet control | Syncfusion®
canonical_url: "https://www.syncfusion.com/spreadsheet-editor-sdk/wpf-spreadsheet-editor"
description: Learn here all about Working With Spreadsheet support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Working with SfSpreadsheet in WPF Spreadsheet (SfSpreadsheet)

This section explains how to access the worksheet, grid, and the events associated with SfSpreadsheet.

## Accessing the worksheet

A __workbook__ is an Excel document in SfSpreadsheet. It is an object that exposes the [IWorkbook](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorkbook.html) interface. The currently loaded workbook in SfSpreadsheet can be accessed by using the [Workbook](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Workbook) property of SfSpreadsheet. The Workbook property returns an IWorkbook instance and is non-null only after a workbook has been loaded.

A workbook consists of one or more worksheets stored within the worksheet collection. The worksheets in the collection can be accessed in the following ways:

{% tabs %}
{% highlight c# %}
//By specifying the index,
spreadsheet.Workbook.Worksheets[0]

//By specifying the sheet name,
spreadsheet.Workbook.Worksheets["Sheet1"]

//Access the Active worksheet,
spreadsheet.ActiveSheet
{% endhighlight %}
{% endtabs %}

For more information regarding working with worksheets, refer to the [XlsIO UG](https://help.syncfusion.com/file-formats/xlsio/overview) link.

N> The `ActiveGrid` and `ActiveSheet` properties can be accessed only after the `WorkbookLoaded` event of `SfSpreadsheet` is triggered.

## Accessing the grid

Each worksheet in the workbook is loaded into the view as [SpreadsheetGrid](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html) in `SfSpreadsheet`.

When the workbook is loaded in SfSpreadsheet, the [WorkbookLoaded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) event is invoked, and when the workbook is removed from SfSpreadsheet, the [WorkbookUnloaded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) event is invoked.

When the worksheet is added into SfSpreadsheet, the [WorksheetAdded](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) event is invoked, and when the worksheet is removed from SfSpreadsheet, the [WorksheetRemoved](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html) event is invoked.

You can access the `ActiveGrid` either in the `WorkbookLoaded` or `WorksheetAdded` event.

{% tabs %}
{% highlight c# %}
spreadsheet.WorksheetAdded += spreadsheet_WorksheetAdded;
spreadsheet.WorksheetRemoved += spreadsheet_WorksheetRemoved;

void spreadsheet_WorksheetAdded(object sender, WorksheetAddedEventArgs args)
{

   //Access the Active SpreadsheetGrid and hook the events associated with it.
    var grid = spreadsheet.ActiveGrid;
    grid.CurrentCellActivated += grid_CurrentCellActivated;
}

void spreadsheet_WorksheetRemoved(object sender, WorksheetRemovedEventArgs args)
{

   //Access the Active SpreadsheetGrid and unhook the events associated with it.
    var grid = spreadsheet.ActiveGrid;
    grid.CurrentCellActivated -= grid_CurrentCellActivated;
}
{% endhighlight %}
{% endtabs %}

You can also access each `SpreadsheetGrid` in SfSpreadsheet in two ways: by passing the particular sheet name in the [GridCollection](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_GridCollection) or by iterating the `GridCollection` exposed on the `WorkbookLoadedEventArgs` of the `WorkbookLoaded` event. `GridCollection` is a `Dictionary<string, SpreadsheetGrid>` keyed by sheet name.

### By using sheet name

For reference, this example sets the row and column count dynamically for the second sheet in the workbook. A new workbook contains a single default sheet, so you must add a second sheet (for example, via `spreadsheet.Workbook.Worksheets.Add("Sheet2")`) before accessing `Worksheets[1]`.

{% tabs %}
{% highlight c# %}
var sheet = spreadsheet.Workbook.Worksheets[1];
spreadsheet.GridCollection[sheet.Name].RowCount = 50;
spreadsheet.GridCollection[sheet.Name].ColumnCount = 12;
{% endhighlight %}
{% endtabs %} 

### By using event

{% tabs %}
{% highlight c# %}
spreadsheet.WorkbookLoaded += spreadsheet_WorkbookLoaded;
spreadsheet.WorkbookUnloaded += spreadsheet_WorkbookUnloaded;

void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{

  //Hook the events here.

   foreach (var grid in args.GridCollection)
   {
    grid.QueryRange += grid_QueryRange;
   }
}

void spreadsheet_WorkbookUnloaded(object sender, WorkbookUnloadedEventArgs args)
{

  //Unhook the events here.

   foreach (var grid in args.GridCollection)
   {
    grid.QueryRange -= grid_QueryRange;
   }
}
{% endhighlight %}
{% endtabs %}

N> SfSpreadsheet supports virtual mode, which lets you dynamically provide data to the grid by handling the [QueryRange](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_QueryRange) event. In virtual mode, data is dynamically loaded into the `SpreadsheetGrid` on demand when the user needs to view the data.

## Setting the ActiveSheet programmatically

SfSpreadsheet allows you to set the [ActiveSheet](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_ActiveSheet) programmatically by specifying the sheet name in the `SetActiveSheet` method of `SfSpreadsheet`.

{% tabs %}
{% highlight c# %}
spreadsheet.SetActiveSheet("Sheet5");
{% endhighlight %}
{% endtabs %}


## Accessing the cell or range of cells

SfSpreadsheet allows you to access a single cell or a range of cells in the workbook using the `IRange` interface.

The following code shows the several ways of accessing a single cell or a range of cells in the `worksheet`:

{% tabs %}
{% highlight c# %}
// Access a cell by specifying cell address.
var cell = spreadsheet.Workbook.Worksheets[0].Range["A3"];

// Access a cell by specifying cell row and column index.
var cell1 = spreadsheet.Workbook.Worksheets[0].Range[3, 1];

// Access a cell by specifying a user-defined name.
var cell2 = spreadsheet.Workbook.Worksheets[0].Range["Namerange"];

// Accessing a range of cells by specifying the cell's address.
var cell3 = spreadsheet.Workbook.Worksheets[0].Range["A5:C8"];

// Accessing a range of cells by specifying the cell row and column index.
var cell4 = spreadsheet.Workbook.Worksheets[0].Range[15, 1, 15, 3];
{% endhighlight %}
{% endtabs %}

For more reference regarding accessing the range, refer to the [XlsIO](https://help.syncfusion.com/file-formats/xlsio/worksheet-cells-manipulation#accessing-a-cell-or-a-range) UG.

N> If the user has made any modifications with the XlsIO range in SfSpreadsheet, they should [refresh the view](https://help.syncfusion.com/document-processing/excel/spreadsheet/wpf/working-with-sfspreadsheet#refreshing-the-view) to update the modifications in `SpreadsheetGrid`.

## Accessing the value of a cell

SfSpreadsheet allows you to access the value of a cell by using the [Value](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Value) property of `IRange`. To get the value of the cell along with its format, use the [DisplayText](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_DisplayText) property.

{% tabs %}
{% highlight c# %}
// Access a cell value by using the "Value" property.
var cellValue = spreadsheet.Workbook.Worksheets[1].Range["A3"].Value;

// Access a cell value by using the "DisplayText" property.
var displayValue = spreadsheet.Workbook.Worksheets[1].Range[4, 1].DisplayText;
{% endhighlight %}
{% endtabs %}

## Setting the value or formula to a cell

In SfSpreadsheet, to update the cell value or formula programmatically, invoke the [SetCellValue](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_SetCellValue_Syncfusion_XlsIO_IRange_System_String_) method of [SpreadsheetGrid](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html) and then invalidate that cell to update the view. The `SetCellValue` method accepts both literal values and formula strings (strings that start with `=`).

{% tabs %}
{% highlight c# %}
var range = spreadsheet.ActiveSheet.Range[2,2];
spreadsheet.ActiveGrid.SetCellValue(range, "cellValue");
spreadsheet.ActiveGrid.InvalidateCell(2, 2);
{% endhighlight %}
{% endtabs %}

## Clearing the value or formatting from a cell

SfSpreadsheet allows you to clear the contents of a cell or clear the contents along with its formatting (comments, conditional formats, data validations, and so on).

The following code illustrates the different ways of clearing the value from a cell:

{% tabs %}
{% highlight c# %}
//To clear the contents in the range alone,
spreadsheet.Workbook.Worksheets[0].Range[3, 3].Clear();

//To clear the contents along with its formatting in the range,
spreadsheet.Workbook.Worksheets[0].Range[3, 3].Clear(true);

//To clear the range with the specified ExcelClearOptions,
spreadsheet.Workbook.Worksheets[0].Range[3, 3].Clear(ExcelClearOptions.ClearDataValidations);
{% endhighlight %}
{% endtabs %}

N> [ExcelClearOptions](https://help.syncfusion.com/cr/file-formats/Syncfusion.XlsIO.ExcelClearOptions.html) is an enum which specifies what should be cleared from a range. Available values include: `ClearContent`, `ClearFormats`, `ClearComments`, `ClearConditionalFormats`, `ClearDataValidations`, `ClearHyperlinks`, and `ClearAll` (default; clears everything). Use `ClearAll` to clear cell content, formatting, comments, conditional formats, data validations, and hyperlinks in a single call.

## Refreshing the view

SfSpreadsheet allows you to invalidate or refresh the view either by specifying a specific range or the full range. Use the appropriate `Invalidate*` method based on the scope of the change:

The following code demonstrates the different ways of refreshing the view:

{% tabs %}
{% highlight c# %}
//Invalidates the mentioned cell in the grid,
spreadsheet.ActiveGrid.InvalidateCell(3, 3);

//Invalidates the range,
var range = GridRangeInfo.Cells(5, 4, 6, 7);
spreadsheet.ActiveGrid.InvalidateCell(range);

//Invalidates all the cells in the grid,
spreadsheet.ActiveGrid.InvalidateCells();

//Invalidates the measurement state(layout) of the grid,
spreadsheet.ActiveGrid.InvalidateVisual();

//Invalidates only the cell borders in the range,
var range = GridRangeInfo.Cells(2, 4, 6, 4);
spreadsheet.ActiveGrid.InvalidateCellBorders(range);
{% endhighlight %}
{% endtabs %}

## Scrolling the grid programmatically

SfSpreadsheet allows the user to scroll the grid to the specified cell by using the [ScrollInView](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_ScrollInView_Syncfusion_UI_Xaml_Grid_ScrollAxis_RowColumnIndex_) method of `SpreadsheetGrid`. The arguments are 1-based `RowColumnIndex(row, column)`.

{% tabs %}
{% highlight c# %}
spreadsheet.ActiveGrid.ScrollInView(new RowColumnIndex(5, 5));
{% endhighlight %}
{% endtabs %}

## Formula bar

The formula bar is located above the worksheet area of SfSpreadsheet. The formula bar displays the data or formula stored in the active cell. By default, the formula bar is `Visible`.

You can set the visibility state of the formula bar using the [FormulaBarVisibility](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_FormulaBarVisibility) property of `SfSpreadsheet`.

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheet x:Name="spreadsheet" FormulaBarVisibility="Collapsed"/>
{% endhighlight %}
{% highlight c# %}
spreadsheet.FormulaBarVisibility = System.Windows.Visibility.Collapsed;
{% endhighlight %}
{% endtabs %}

## Identify whether the workbook is modified or not

The `IsCellModified` property of `WorkbookImpl` indicates whether any cell in a workbook has been modified after importing. Because `IsCellModified` is an internal property, it must be accessed using reflection.

{% tabs %}
{% highlight c# %}
var workbook = spreadsheet.Workbook as WorkbookImpl; 
BindingFlags bindFlags = BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Static; 
var value = typeof(WorkbookImpl).GetProperty("IsCellModified", bindFlags).GetValue(workbook); 
{% endhighlight %}
{% endtabs %}

## Suppress message boxes in spreadsheet

In SfSpreadsheet, warning messages and error alerts are displayed while performing certain actions, similar to Excel. If you want to avoid these alerts, set the [DisplayAlerts](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_DisplayAlerts) property to `false`.
{% tabs %}
{% highlight c# %}
//To suppress message boxes in Spreadsheet
spreadsheet.DisplayAlerts = false;
{% endhighlight %}
{% endtabs %}

## Suspend and resume formula calculation

SfSpreadsheet provides support to suspend the formula calculation and resume it whenever needed, using the [SuspendFormulaCalculation](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_SuspendFormulaCalculation) and [ResumeFormulaCalculation](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_ResumeFormulaCalculation) methods.

Resuming the formula calculation triggers a single recalculation pass across all formula cells in the workbook. This is helpful for improving performance when you update the value of many cells, because dependent cells are not recalculated on each individual value change.

{% tabs %}
{% highlight c# %}
//Resumes the automatic formula calculation
spreadsheet.ResumeFormulaCalculation();

//Suspends the automatic formula calculation
spreadsheet.SuspendFormulaCalculation();
{% endhighlight %}
{% endtabs %}

## Close the popup programmatically

In SfSpreadsheet, popup windows are used to display options like the copy-paste option, the fill series option, and so on, which are closed automatically on certain actions. However, you can also close the popup programmatically by using the [ShowHidePopup](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_ShowHidePopup_System_Boolean_) method of `SpreadsheetGrid`. The popups affected include the copy-paste tag, fill series, autofill, and sort options.

{% tabs %}
{% highlight c# %}
//To close the popup
spreadsheet.ActiveGrid.ShowHidePopup(false);

//To show the closed popup, if needed.
spreadsheet.ActiveGrid.ShowHidePopup(true);
{% endhighlight %}
{% endtabs %}

## Identify when the active sheet is changed

SfSpreadsheet provides support to identify when the active sheet is changed by using the [PropertyChanged](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_PropertyChanged) event of SfSpreadsheet, as shown below. The `PropertyChanged` event is raised both when the user switches tabs in the sheet tab bar and when the active sheet is changed programmatically (for example, via `SetActiveSheet`).

{% tabs %}
{% highlight c# %}
Spreadsheet.PropertyChanged += Spreadsheet_PropertyChanged;

void Spreadsheet_PropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
{

    // When the active worksheet in the workbook changes.

    if (e.PropertyName == "ActiveSheet")
    {

        //Implement code
    }
}
{% endhighlight %}
{% endtabs %}


## See also

- [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations.
- [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.