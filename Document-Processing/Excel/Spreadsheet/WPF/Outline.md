---
layout: post
title: Outline in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Outline support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Outlines in WPF Spreadsheet (SfSpreadsheet)

SfSpreadsheet provides support for Excel-style outlines that make your data easier to view and analyze. You can group or ungroup data by rows or columns, expand or collapse grouped sections, and configure summary-row and summary-column positions.

## Group rows and columns

SfSpreadsheet supports grouping a specified range of rows or columns in a worksheet.

To [Group](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_Group_Syncfusion_XlsIO_IWorksheet_Syncfusion_UI_Xaml_CellGrid_GridRangeInfo_Syncfusion_XlsIO_ExcelGroupBy_) the rows/columns:

{% tabs %}
{% highlight c# %}
//Group rows,
var gridRange = GridRangeInfo.Rows(4, 8);
spreadsheet.Group(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByRows);

//Group columns,
var gridRange = GridRangeInfo.Cols(4, 8);
spreadsheet.Group(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByColumns);
{% endhighlight %}
{% endtabs %}

## Ungroup rows and columns

SfSpreadsheet supports ungrouping a previously grouped range of rows or columns.

To [Ungroup](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_UnGroup_Syncfusion_XlsIO_IWorksheet_Syncfusion_UI_Xaml_CellGrid_GridRangeInfo_Syncfusion_XlsIO_ExcelGroupBy_) the rows/columns:

{% tabs %}
{% highlight c# %}
//Ungroup rows,
var gridRange = GridRangeInfo.Rows(4, 8);
spreadsheet.UnGroup(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByRows);

//Ungroup columns,
var gridRange = GridRangeInfo.Cols(4, 8);
spreadsheet.UnGroup(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByColumns);
{% endhighlight %}
{% endtabs %}

## Collapse or expand group

Groups can be expanded by the [ExpandGroup](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_ExpandGroup_Syncfusion_XlsIO_ExcelGroupBy_) method and collapsed by the [CollapseGroup](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CollapseGroup_Syncfusion_XlsIO_ExcelGroupBy_) method of XlsIO. After toggling the state, use the SfSpreadsheet `RowHeights.SetHidden` / `ColumnWidths.SetHidden` methods to update the visual hide state, and call `RefreshOutlines` to repaint the outline indicators.

### Expand group

{% tabs %}
{% highlight c# %}
//Expand rows,
spreadsheet.ActiveSheet.Range["A4:A8"].ExpandGroup(ExcelGroupBy.ByRows);
spreadsheet.ActiveGrid.RowHeights.SetHidden(4, 8, false);
spreadsheet.RefreshOutlines(true, false);

//Expand columns,
spreadsheet.ActiveSheet.Range["A3:F3"].ExpandGroup(ExcelGroupBy.ByColumns);
spreadsheet.ActiveGrid.ColumnWidths.SetHidden(1, 6, false);
spreadsheet.RefreshOutlines(false, true);

//Collapse rows,
spreadsheet.ActiveSheet.Range["A4:A8"].CollapseGroup(ExcelGroupBy.ByRows);
spreadsheet.ActiveGrid.RowHeights.SetHidden(4, 8, true);
spreadsheet.RefreshOutlines(true, false);

//Collapse columns,
spreadsheet.ActiveSheet.Range["A3:F3"].CollapseGroup(ExcelGroupBy.ByColumns);
spreadsheet.ActiveGrid.ColumnWidths.SetHidden(1, 6, true);
spreadsheet.RefreshOutlines(false, true);
{% endhighlight %}
{% endtabs %}

> The [RefreshOutlines](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_RefreshOutlines_System_Boolean_System_Boolean_) method refreshes and updates the outline indicators in SfSpreadsheet.

## Change outline settings

In SfSpreadsheet, you can change the position of summary rows to appear below or above the detail rows, and summary columns to appear to the left or right of the detail columns.

{% tabs %}
{% highlight c# %}
spreadsheet.ActiveSheet.PageSetup.IsSummaryRowBelow = false;
spreadsheet.ActiveSheet.PageSetup.IsSummaryColumnRight = false;
spreadsheet.RefreshOutlines(true, true);
{% endhighlight %}
{% endtabs %}

## Clear outlines

SfSpreadsheet supports clearing all outlines from a grouped range.

{% tabs %}
{% highlight c# %}
var sheet = spreadsheet.Workbook.Worksheets[0] as WorksheetImpl;

foreach (OutlineWrapper outline in sheet.OutlineWrappers)
{
    outline.OutlineRange.Ungroup(outline.GroupBy);
}
spreadsheet.RefreshOutlines(true, true);
{% endhighlight %}
{% endtabs %}

N> Refer to the [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page to explore the Spreadsheet's capabilities. You can also browse the [WPF Spreadsheet demos](https://github.com/syncfusion/wpf-demos) to see how to render and configure the Spreadsheet in an application.