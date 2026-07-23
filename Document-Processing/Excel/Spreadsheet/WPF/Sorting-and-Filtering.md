---
layout: post
title: Sorting and Filtering in WPF Spreadsheet control | Syncfusion®
description: Learn here all about Sorting and Filtering support in Syncfusion® WPF Spreadsheet (SfSpreadsheet) control and more.
platform: document-processing
control: SfSpreadsheet
documentation: ug
---

# Sorting and Filtering in WPF Spreadsheet (SfSpreadsheet)

This section explains the sorting and filtering functionalities available in the SfSpreadsheet.

## Filtering

Filtering is enabled by default in the SfSpreadsheet. When enabled, filter drop-down buttons appear in the header row of each column. To disable filtering, set the `AllowFiltering` property of the SfSpreadsheet to `false`.

{% tabs %}
{% highlight xaml %}
<syncfusion:SfSpreadsheet x:Name="spreadsheet" AllowFiltering="False"/>
{% endhighlight %}
{% highlight c# %}
spreadsheet.AllowFiltering = false;
{% endhighlight %}
{% endtabs %}

## Programmatic Sorting

Programmatically sort the data while importing the workbook by using XlsIO in the `WorkbookLoaded` event of SfSpreadsheet.

{% tabs %}
{% highlight c# %}
spreadsheet.WorkbookLoaded += spreadsheet_WorkbookLoaded;

void spreadsheet_WorkbookLoaded(object sender, WorkbookLoadedEventArgs args)
{
    IRange filterRange = spreadsheet.Workbook.ActiveSheet.Range["A1:D9"];
    spreadsheet.Workbook.ActiveSheet.AutoFilters.FilterRange = filterRange;
    IDataSort sorter = spreadsheet.Workbook.CreateDataSorter();
    sorter.SortRange = spreadsheet.ActiveSheet.Range["A1:D9"];
    ISortField sortField = sorter.SortFields.Add(1, SortOn.Values, OrderBy.Ascending);
    sorter.Sort();
}
{% endhighlight %}
{% endtabs %}

## Unsupported Features

SfSpreadsheet currently does not support the following features:

* Table filtering
* Multi-column sorting

## Limitations

### Sorting

* In Microsoft Excel, the sorting label in the filter pop-up varies based on the type of values in a column (for example, "Sort Smallest to Largest" for numeric values, "Sort A to Z" for string values, and so on). In SfSpreadsheet, the sorting label does not vary based on value type, in order to improve the loading performance of the filter pop-up.
* The "Sort Ascending" or "Sort Descending" label is not checked in the filter pop-up if the column was previously sorted in Microsoft Excel, because XlsIO does not support fetching the sort order while importing the workbook.

### Filtering

* If a filter is applied in Microsoft Excel, clearing the filter from any one column clears the filter from all columns, because the filtering order cannot be fetched.
* While importing the workbook, only the rightmost filtered column displays the checked and unchecked items, because the filtering order cannot be fetched.


N> You can refer to our [WPF Spreadsheet Editor](https://www.syncfusion.com/wpf-controls/spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [WPF Spreadsheet example](https://github.com/syncfusion/wpf-demos) to know how to render and configure the spreadsheet.
