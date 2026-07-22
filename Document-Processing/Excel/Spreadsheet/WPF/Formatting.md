---
layout: post
title: Formatting in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Formatting support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Formatting in WPF Spreadsheet (SfSpreadsheet)

This section explains the formatting options available in SfSpreadsheet, similar to those in Microsoft Excel.

Styles and formats defined in an Excel file are automatically imported. Users can also apply these settings to cells during run time. The following are the formatting attributes for the cell.

* Cell font settings (font name, size, color, style, etc.) 
* Cell background 
* Cell content alignment (vertical and horizontal alignment, indent and text wrapping) 
* Cell borders 
* Number Formatting
* Merge Cells
* Built-in Styles
* Table Formats

## Cell Background

To apply a background color to cells at runtime, set the color on the XlsIO `IRange` and then invalidate the affected cells in `SpreadsheetGrid` to update the view.

For a single cell,

{% tabs %}
{% highlight c# %}
IRange range = spreadsheet.ActiveSheet.Range["A5"];
range.CellStyle.Color = Syncfusion.XlsIO.ExcelKnownColors.Blue;
spreadsheet.ActiveGrid.InvalidateCell(range.Row, range.Column);
{% endhighlight %}
{% endtabs %}

For a selected range of cells,

{% tabs %}
{% highlight c# %}
var selectedRanges = spreadsheet.ActiveGrid.SelectedRanges;

foreach (var range in selectedRanges)
{
    string cell = GridExcelHelper.ConvertGridRangeToExcelRange(range, spreadsheet.ActiveGrid);
    spreadsheet.ActiveSheet.Range[cell].CellStyle.Color = ExcelKnownColors.Blue;
    spreadsheet.ActiveGrid.InvalidateCell(range, true);
}
{% endhighlight %}
{% endtabs %}

## Font

SfSpreadsheet allows the user to apply font settings such as font color, font name, and font size to a particular cell or a range of cells.

{% tabs %}
{% highlight c# %}
IRange range = spreadsheet.Workbook.Worksheets[0].Range["A1:B5"];
var gridRange = GridExcelHelper.ConvertExcelRangeToGridRange(range);

//Setting the Font Family Name,
range.CellStyle.Font.FontName = "Arial Black";

//Setting the Font Styles,
range.CellStyle.Font.Bold = true;
range.CellStyle.Font.Italic = true;

//Setting the Font Size,
range.CellStyle.Font.Size = 18;

//Setting the Font Effects,
range.CellStyle.Font.Strikethrough = true;

//Setting the Underline Types,
range.CellStyle.Font.Underline = ExcelUnderline.Single;

//Setting the Font Color,
range.CellStyle.Font.Color = ExcelKnownColors.Blue;

//Invalidating the range to update the view,
spreadsheet.ActiveGrid.InvalidateCell(gridRange, true);
{% endhighlight %}
{% endtabs %}

## Cell Borders

SfSpreadsheet allows the user to apply borders to a particular cell or a range of cells at runtime.

{% tabs %}
{% highlight c# %}
//For a single cell,
IRange range = spreadsheet.Workbook.Worksheets[0].Range["A5"];
range.Borders.LineStyle = ExcelLineStyle.Dash_dot;
range.Borders.Color = ExcelKnownColors.Gold;
spreadsheet.ActiveGrid.InvalidateCell(range.Row, range.Column);

//For a range of cells,
IRange excelRange = spreadsheet.Workbook.Worksheets[0].Range["C3:D8"];
excelRange.BorderAround(ExcelLineStyle.Double, ExcelKnownColors.Green);
excelRange.BorderInside(ExcelLineStyle.Dotted, ExcelKnownColors.Tan);
var gridRange = GridExcelHelper.ConvertExcelRangeToGridRange(excelRange);
spreadsheet.ActiveGrid.InvalidateCell(gridRange, true);
{% endhighlight %}
{% endtabs %}

## Cell Alignment

SfSpreadsheet allows the user to align the content of a cell. The alignment options include horizontal alignment, vertical alignment, indentation, and orientation.

{% tabs %}
{% highlight c# %}
//Applying Horizontal Alignment for the cell "A2",
spreadsheet.Workbook.Worksheets[0].Range["A2"].CellStyle.HorizontalAlignment = ExcelHAlign.HAlignCenter;
spreadsheet.ActiveGrid.InvalidateCell(2,1);

//Applying Vertical Alignment for the cell "B2",
spreadsheet.Workbook.Worksheets[0].Range["B2"].CellStyle.VerticalAlignment = ExcelVAlign.VAlignBottom;
spreadsheet.ActiveGrid.InvalidateCell(2,2);

//Applying Orientation (in degrees) for the selected cell or ranges,
spreadsheet.FormatOrientation(90);

//For Indentation,

//Increase the indent for the selected ranges or cells by one level.
spreadsheet.FormatIndent(true);

//Decrease the indent for the selected ranges or cells by one level.
spreadsheet.FormatIndent(false);

//Set the level of indent for the selected ranges or cells.
spreadsheet.FormatIndentLevel(3);
{% endhighlight %}
{% endtabs %}

## Wrap Text

SfSpreadsheet allows the user to wrap the text in a cell when the text exceeds the cell width.

{% tabs %}
{% highlight c# %}
spreadsheet.ActiveSheet.Range["C4"].Text = "Wrapping the content in the cell";
spreadsheet.ActiveSheet.Range["C4"].WrapText = true;
spreadsheet.ActiveSheet.AutofitRow(4);
spreadsheet.ActiveGrid.SetRowHeight(4, 4, spreadsheet.ActiveSheet.GetRowHeightInPixels(4));
spreadsheet.ActiveGrid.InvalidateCell(4, 3);
{% endhighlight %}
{% endtabs %}

## Merge Cells

### Merge

SfSpreadsheet provides support to merge two or more cells. When a group of cells is merged, the content of the upper-left cell becomes the content of the merged cell, and the content of the other cells is discarded.

To merge cells in SfSpreadsheet, add a [CoveredCellInfo](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.CoveredCellInfo.html) entry to the [CoveredCells](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_CoveredCells) collection of `SpreadsheetGrid`, call the [Merge](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Merge) method on the XlsIO range, and then invalidate the cells in `SpreadsheetGrid` to update the view.

{% tabs %}
{% highlight c# %}
var gridRange = spreadsheet.ActiveGrid.SelectedRanges.ActiveRange;
var excelRange = gridRange.ConvertGridRangeToExcelRange(spreadsheet.ActiveGrid);
var coverCell = new CoveredCellInfo(gridRange.Top, gridRange.Left, gridRange.Bottom, gridRange.Right);
spreadsheet.ActiveGrid.CoveredCells.Add(coverCell);
spreadsheet.ActiveSheet.Range[excelRange].Merge();
spreadsheet.ActiveGrid.InvalidateCell(gridRange, true);
{% endhighlight %}
{% endtabs %}

### Unmerge

You can also unmerge the merged cells in SfSpreadsheet.

To unmerge cells in SfSpreadsheet, clear the [CoveredCells](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.CellGrid.SfCellGrid.html#Syncfusion_UI_Xaml_CellGrid_SfCellGrid_CoveredCells) entry from `SpreadsheetGrid`, call the [UnMerge](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_UnMerge) method on the XlsIO range, and then invalidate the cells in `SpreadsheetGrid` to update the view.

{% tabs %}
{% highlight c# %}
var gridRange = spreadsheet.ActiveGrid.SelectedRanges.ActiveRange;
var excelRange = gridRange.ConvertGridRangeToExcelRange(spreadsheet.ActiveGrid);
spreadsheet.ActiveGrid.CoveredCells.Clear(gridRange);
spreadsheet.ActiveSheet.Range[excelRange].UnMerge();
spreadsheet.ActiveGrid.InvalidateCell(gridRange, true);
{% endhighlight %}
{% endtabs %}

## Number Format

SfSpreadsheet allows the user to display numbers in the cells with different formats, including currency, percentage, date/time, and scientific.

{% tabs %}
{% highlight c# %}
//Applying Percentage format for the selected ranges at runtime,
spreadsheet.Workbook.ActiveSheet.Range["C3"].NumberFormat = "0.00%";
spreadsheet.ActiveGrid.InvalidateCell(3,3);

//Applying Date format for the selected ranges at runtime,
spreadsheet.Workbook.ActiveSheet.Range["D1"].NumberFormat = "m/d/yyyy";
spreadsheet.ActiveGrid.InvalidateCell(1,4);

//Applying Time format for the selected ranges at runtime,
spreadsheet.Workbook.ActiveSheet.Range["D4"].NumberFormat = "[$-F400]h:mm:ss AM/PM";
spreadsheet.ActiveGrid.InvalidateCell(3,4);

//Applying Text format for the selected ranges at runtime,
spreadsheet.Workbook.ActiveSheet.Range["D5"].NumberFormat = "@";
spreadsheet.ActiveGrid.InvalidateCell(4,4);
{% endhighlight %}
{% endtabs %}

The different types of number formats with their notation are:

<table>
<tr>
<th>
Formats</th><th>
Notation</th></tr>
<tr>
<td>General
</td><td>
General</td></tr>
<tr>
<td>Number
</td><td>
0.00</td></tr>
<tr>
<td>Currency
</td><td>
$* #,##0.00</td></tr>
<tr>
<td>Accounting
</td><td>
$* (#,##0.00);$* -??;@</td></tr>
<tr>
<td>Short Date
</td><td>
m/d/yyyy</td></tr>
<tr>
<td>Long Date
</td><td>
[$-F800]dddd, mmmm dd, yyyy </td></tr>
<tr>
<td>Time
</td><td>
 [$-F400]h:mm:ss AM/PM</td></tr>
<tr>
<td>Percentage
</td><td>
0.00%</td></tr>
<tr>
<td>Fraction
</td><td>
 #?/?</td></tr>
<tr>
<td>Scientific
</td><td>
0.00E+00</td></tr>
<tr>
<td>Text</td>
<td>@</td>
</tr>
</table>

## Built-in Styles

SfSpreadsheet supports the predefined built-in styles provided by XlsIO. [BuiltInStyles](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.BuiltInStyles.html) is an enum that contains different styles for formatting a cell or range of cells.

{% tabs %}
{% highlight c# %}
spreadsheet.Workbook.ActiveSheet.Range["A3"].BuiltInStyle = BuiltInStyles.Heading2;
spreadsheet.ActiveGrid.InvalidateCell(3, 1);
{% endhighlight %}
{% endtabs %}

## Format as Table

SfSpreadsheet allows the user to format a range as a table using the built-in table styles provided by XlsIO via [TableBuiltInStyles](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.TableBuiltInStyles.html).

{% tabs %}
{% highlight c# %}
// Creating a table
IListObject table = spreadsheet.Workbook.ActiveSheet.ListObjects.Create("Table1", spreadsheet.Workbook.ActiveSheet.Range["C1:G5"]);

// Formatting the table with a built-in style
table.BuiltInTableStyle = TableBuiltInStyles.TableStyleLight6;
spreadsheet.ActiveGrid.InvalidateCells();
{% endhighlight %}
{% endtabs %}

For more information regarding formatting options, please go through [XlsIO](https://help.syncfusion.com/file-formats/xlsio/working-with-cell-or-range-formatting).

N> Users need to [refresh the view](https://help.syncfusion.com/document-processing/excel/spreadsheet/wpf/working-with-sfspreadsheet#refreshing-the-view) after the formatting is applied on the XlsIO range to update the styles in `SpreadsheetGrid`.

## Clear formatting

SfSpreadsheet provides support for clearing the contents of a cell along with its formatting, or for clearing specific items using the [ExcelClearOptions](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.ExcelClearOptions.html) enum. The enum controls which elements are removed, including formats, content, comments, conditional formats, data validation, or a combination of any of them.

{% tabs %}
{% highlight c# %}
//To clear the contents along with its formatting in the range,   
spreadsheet.Workbook.Worksheets[0].Range[4, 5].Clear(true);

//To clear only the conditional formats in the range,
spreadsheet.Workbook.Worksheets[0].Range[4, 5].Clear(ExcelClearOptions.ClearConditionalFormats);
{% endhighlight %}
{% endtabs %}


N> You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.