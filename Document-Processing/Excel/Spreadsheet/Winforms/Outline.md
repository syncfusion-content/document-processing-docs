---
layout: post
title: Outline in Windows Forms Spreadsheet control | Syncfusion®
description: Learn about Outline support in Syncfusion® Windows Forms Spreadsheet control, its elements and more details.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Outline in Windows Forms Spreadsheet

Spreadsheet provides support for outlines like in Excel which makes your data easier to view. You can group or ungroup rows and columns.

## Grouping rows and columns

Spreadsheet provides support to group the specified range in a worksheet.

Use the [Group](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_Group_Syncfusion_XlsIO_IWorksheet_Syncfusion_Windows_Forms_CellGrid_GridRangeInfo_Syncfusion_XlsIO_ExcelGroupBy_) method to group rows or columns:

{% tabs %}
{% highlight c# %}

//Group rows,
var gridRange = GridRangeInfo.Rows(4,8);
spreadsheet.Group(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByRows);

//Group columns,
var gridRange = GridRangeInfo.Cols(4,8);
spreadsheet.Group(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByColumns);

{% endhighlight %}
{% endtabs %}

## Ungrouping rows and columns

The grouping applied to rows or columns can be removed as follows.

Use the [Ungroup](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_UnGroup_Syncfusion_XlsIO_IWorksheet_Syncfusion_Windows_Forms_CellGrid_GridRangeInfo_Syncfusion_XlsIO_ExcelGroupBy_) method to ungroup rows or columns:

{% tabs %}
{% highlight c# %}
//Ungroup rows,
var gridRange = GridRangeInfo.Rows(4,8);
spreadsheet.UnGroup(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByRows);

//Ungroup columns,
var gridRange = GridRangeInfo.Cols(4,8);
spreadsheet.UnGroup(spreadsheet.ActiveSheet, gridRange, ExcelGroupBy.ByColumns);

{% endhighlight %}
{% endtabs %}

## Collapsing or expanding group

Groups can be expanded using the [ExpandGroup](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_ExpandGroup_Syncfusion_XlsIO_ExcelGroupBy_) method and collapsed using the [CollapseGroup](https://help.syncfusion.com/cr/windowsforms/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_CollapseGroup_Syncfusion_XlsIO_ExcelGroupBy_) method of `XlsIO`.

{% tabs %}
{% highlight c# %}

//Expand Rows,
spreadsheet.ActiveSheet.Range["A4:A8"].ExpandGroup(ExcelGroupBy.ByRows);
spreadsheet.ActiveGrid.RowHeights.SetHidden(4, 8, false);
spreadsheet.RefreshOutlines(true, false);

//Expand Columns,
spreadsheet.ActiveSheet.Range["A3:F3"].ExpandGroup(ExcelGroupBy.ByColumns);
spreadsheet.ActiveGrid.ColumnWidths.SetHidden(1, 6, false);
spreadsheet.RefreshOutlines(false, true);

//Collapse Rows,
spreadsheet.ActiveSheet.Range["A4:A8"].CollapseGroup(ExcelGroupBy.ByRows);
spreadsheet.ActiveGrid.RowHeights.SetHidden(4, 8, true);
spreadsheet.RefreshOutlines(true, false);

//Collapse Columns,
spreadsheet.ActiveSheet.Range["A3:F3"].CollapseGroup(ExcelGroupBy.ByColumns);
spreadsheet.ActiveGrid.ColumnWidths.SetHidden(1, 6, true);
spreadsheet.RefreshOutlines(false, true);

{% endhighlight %}
{% endtabs %}

N> [RefreshOutlines](https://help.syncfusion.com/cr/windowsforms/Syncfusion.Windows.Forms.Spreadsheet.Spreadsheet.html#Syncfusion_Windows_Forms_Spreadsheet_Spreadsheet_RefreshOutlines_System_Boolean_System_Boolean_) method is invoked to refresh/update the Outlines of the Group in Spreadsheet.

## Changing Outline settings

In Spreadsheet, users can change the outline settings by configuring whether summary rows appear above or below the detail rows, and whether summary columns appear to the left or right of the detail columns, in an outline group.

{% tabs %}
{% highlight c# %}

spreadsheet.ActiveSheet.PageSetup.IsSummaryRowBelow = false;
spreadsheet.ActiveSheet.PageSetup.IsSummaryColumnRight = false;
spreadsheet.RefreshOutlines(true, true);
            
{% endhighlight %}
{% endtabs %}
           
## Clearing Outlines

Spreadsheet provides support to clear all the Outlines of the Grouped range.

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


