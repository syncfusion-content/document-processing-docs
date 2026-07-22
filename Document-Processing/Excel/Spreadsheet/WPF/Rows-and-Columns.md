---
layout: post
title: Rows and Columns in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Rows and Columns support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Rows and Columns in WPF Spreadsheet (SfSpreadsheet)
This section explains the operations related to rows and columns in SfSpreadsheet.

## Insert Rows and Columns

SfSpreadsheet lets you dynamically insert rows and columns into a worksheet.

{% tabs %}
{% highlight c# %}
//For Inserting Rows
spreadsheet.ActiveSheet.InsertRow(2, 3);
spreadsheet.ActiveGrid.Model.InsertRows(2, 3);

//For Inserting Columns
spreadsheet.ActiveSheet.InsertColumn(3, 2);
spreadsheet.ActiveGrid.Model.InsertColumns(3, 2);
{% endhighlight %}
{% endtabs %}

### Events

Below events of [SpreadsheetGridModel](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGridModel.html) are triggered while inserting the rows and columns.

* [RowsInserted](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGridModel.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGridModel_RowsInserted)
* [ColumnsInserted](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGridModel.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGridModel_ColumnsInserted)

{% tabs %}
{% highlight c# %}
//To notify when rows are inserted
spreadsheet.ActiveGrid.Model.RowsInserted += Model_RowsInserted;

void Model_RowsInserted(object sender, GridRangeInsertedEventArgs e)
{
}

//To notify when Columns are inserted
spreadsheet.ActiveGrid.Model.ColumnsInserted += Model_ColumnsInserted;

void Model_ColumnsInserted(object sender, GridRangeInsertedEventArgs e)
{
}
{% endhighlight %}
{% endtabs %}

## Delete Rows and Columns

SfSpreadsheet lets you delete rows and columns from a worksheet.

{% tabs %}
{% highlight c# %}
//For Deleting Rows
spreadsheet.ActiveSheet.DeleteRow(5, 2);
spreadsheet.ActiveGrid.Model.RemoveRows(5, 2);

//For Deleting Columns
spreadsheet.ActiveSheet.DeleteColumn(3, 2);
spreadsheet.ActiveGrid.Model.RemoveColumns(3, 2);
{% endhighlight %}
{% endtabs %}

### Events

Below events of [SpreadsheetGridModel](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGridModel.html) are triggered while deleting the rows and columns.

* [RowsRemoved](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGridModel.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGridModel_RowsRemoved)
* [ColumnsRemoved](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGridModel.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGridModel_ColumnsRemoved)

{% tabs %}
{% highlight c# %}
//To notify when rows are deleted
spreadsheet.ActiveGrid.Model.RowsRemoved += Model_RowsRemoved;

void Model_RowsRemoved(object sender, GridRangeRemovedEventArgs e)
{
}

//To notify when columns are deleted
spreadsheet.ActiveGrid.Model.ColumnsRemoved += Model_ColumnsRemoved;

void Model_ColumnsInserted(object sender, GridRangeInsertedEventArgs e)
{
}
{% endhighlight %}
{% endtabs %}

## Hide Rows and Columns

SfSpreadsheet lets you hide rows and columns by calling the [HideRow](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_HideRow_System_Int32_) and [HideColumn](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_HideColumn_System_Int32_) methods.

{% tabs %}
{% highlight c# %}
//For Hiding Rows
spreadsheet.ActiveSheet.HideRow(5);
spreadsheet.ActiveGrid.RowHeights.SetHidden(5, 5, true);

//For Hiding Columns
spreadsheet.ActiveSheet.HideColumn(4);
spreadsheet.ActiveGrid.ColumnWidths.SetHidden(4, 4, true);
{% endhighlight %}
{% endtabs %}

## Unhide Rows and Columns

You can unhide rows/columns in SfSpreadsheet by calling the [ShowRow](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ShowRow_System_Int32_System_Boolean_) and [ShowColumn](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IWorksheet.html#Syncfusion_XlsIO_IWorksheet_ShowColumn_System_Int32_System_Boolean_) methods.

{% tabs %}
{% highlight c# %}
//For Unhiding Rows
spreadsheet.ActiveSheet.ShowRow(5, true);
spreadsheet.ActiveGrid.RowHeights.SetHidden(5, 5, false);

//For Unhiding Columns
spreadsheet.ActiveSheet.ShowColumn(4, true);
spreadsheet.ActiveGrid.ColumnWidths.SetHidden(4, 4, false);
{% endhighlight %}
{% endtabs %}

## Row Height and Column Width

SfSpreadsheet provides support to adjust the row height and column width. The adjusted row height and column width can also be imported from Excel. Use the [AutofitColumn](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AutofitColumn_System_Int32_), [AutofitRow](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AutofitRow_System_Int32_), [AutofitColumns](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AutofitColumns), and [AutofitRows](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AutofitRows) methods of XlsIO to fit rows and columns to their content.

{% tabs %}
{% highlight c# %}
//For setting RowHeight for 4th Row (1-based index; value is in pixels)
spreadsheet.ActiveGrid.SetRowHeight(4, 4, 30);
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Row(4), true);

//For setting ColumnWidth for 5th Column (1-based index; value is in pixels)
spreadsheet.ActiveGrid.SetColumnWidth(5, 5, 22);
spreadsheet.ActiveGrid.InvalidateCell(GridRangeInfo.Col(5), true);
{% endhighlight %}
{% endtabs %}

N> If you insert/delete or hide/unhide rows/columns inside a Grouping, the [RefreshOutlines](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SfSpreadsheet.html#Syncfusion_UI_Xaml_Spreadsheet_SfSpreadsheet_RefreshOutlines_System_Boolean_System_Boolean_) method must be invoked to refresh the group outlines.

## Freeze Rows and Columns

SfSpreadsheet provides support for freezing panes to keep an area of a worksheet visible while you scroll to another area of the worksheet.

{% tabs %}
{% highlight c# %}
//Freeze panes

//To freeze 4 rows and 4 columns
spreadsheet.Workbook.ActiveSheet.Range[4, 4].FreezePanes();
spreadsheet.ActiveGrid.FrozenRows = 5;
spreadsheet.ActiveGrid.FrozenColumns = 5;
{% endhighlight %}
{% endtabs %}

## Unfreeze Rows and Columns

SfSpreadsheet provides support to unfreeze the previously frozen panes in the worksheet.

{% tabs %}
{% highlight c# %}
//Unfreeze panes

//To unfreeze the previously frozen rows and columns
spreadsheet.Workbook.ActiveSheet.RemovePanes();
spreadsheet.ActiveGrid.FrozenRows = 1;
spreadsheet.ActiveGrid.FrozenColumns = 1;
{% endhighlight %}
{% endtabs %}

## Auto Fit Rows and Columns

SfSpreadsheet lets you fit rows and columns to their content at run time.

You can fit the rows/columns by calling [AutoFitRows](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AutofitRows) and  [AutoFitColumns](https://help.syncfusion.com/cr/wpf/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_AutofitColumns) methods of XlsIO’s `IRange`. Also set the adjusted row height and column width into the grid by using [SetRowHeight](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_SetRowHeight_System_Int32_System_Int32_System_Double_) and [SetColumnWidth](https://help.syncfusion.com/cr/wpf/Syncfusion.UI.Xaml.Spreadsheet.SpreadsheetGrid.html#Syncfusion_UI_Xaml_Spreadsheet_SpreadsheetGrid_SetColumnWidth_System_Int32_System_Int32_System_Double_) methods of `SpreadsheetGrid`.

{% tabs %}
{% highlight c# %}
//To AutoFit a single column
spreadsheet.ActiveSheet.AutofitColumn(2);
spreadsheet.ActiveGrid.SetColumnWidth(2, 2, spreadsheet.ActiveSheet.GetColumnWidthInPixels(2));

//To AutoFit multiple columns
spreadsheet.ActiveSheet["A1:D100"].AutofitColumns();

for (int i = 1; i <= 4; i++)
{
    spreadsheet.ActiveGrid.SetColumnWidth(i, i, spreadsheet.ActiveSheet.GetColumnWidthInPixels(i));
}

//To AutoFit a single row
spreadsheet.ActiveSheet.AutofitRow(3);
spreadsheet.ActiveGrid.SetRowHeight(3, 3, spreadsheet.ActiveSheet.GetRowHeightInPixels(3));

//To AutoFit multiple rows
spreadsheet.ActiveSheet["B1:B5"].AutofitRows();

for (int i = 1; i <= 5; i++)
{
    spreadsheet.ActiveGrid.SetRowHeight(i, i, spreadsheet.ActiveSheet.GetRowHeightInPixels(i));
}
{% endhighlight %}
{% endtabs %}


## See Also

* [WPF Spreadsheet Editor feature tour](https://www.syncfusion.com/wpf-controls/spreadsheet)
* [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos)