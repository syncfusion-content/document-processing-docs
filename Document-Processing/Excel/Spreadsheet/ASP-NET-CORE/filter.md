---
layout: post
title: Filter in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Filter in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Filter
documentation: ug
---


# Filtering in ASP.NET Core Spreadsheet control

Filtering helps you to view specific rows in the Spreadsheet by hiding the other rows. You can use the [`allowFiltering`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowFiltering) property to enable or disable filtering functionality.

N> * The default value for `allowFiltering` property is `true`.

By default, the `filter` module is injected internally into Spreadsheet to perform filtering.

## Apply filter on UI

In the active Spreadsheet, select a range of cells to filter by their values. You can apply filtering in one of the following ways:

* Choose **Filter** from the Ribbon.
* Right-click the selected range and choose **Filter** from the context menu.
* Use the `applyFilter()` method programmatically.
* Press `Ctrl + Shift + L` to apply the filter.

N> * Press `Alt + Up/Down` to open the filter dialog.

## Filter by criteria

Use the `applyFilter()` method to apply a filter based on the specified predicate and cell range. The predicate defines the filter condition, and the range specifies the cells to which the filter is applied.

>* The `beforeFilter` event will be triggered before filtering the specified range.
>* The `filterComplete` event will be triggered after the filter action is completed successfully.

The following code example shows `filter` functionality in the Spreadsheet control.

After running the sample, verify that only the rows matching the specified filter criteria are displayed.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/filter/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FilterController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/filter/filterController.cs %}
{% endhighlight %}
{% endtabs %}



## Filter by cell value

To filter by a cell value, right-click the cell and choose `Filter -> Filter By Selected Cell's Value` from the context menu. The filter is applied based on the value of the selected cell in the active sheet.

## Clear filter

After applying a filter, you can clear all filters to display every row again. You can clear all filters in one of the following ways:

* Choose `Clear` option in ribbon toolbar under `Filter and Sort`. It clears the filters applied in the spreadsheet for all fields.

* Use the `clearFilter()` method programmatically, to clear the applied filters in spreadsheet for all fields.

## Clear filter on a field

You can clear or reset the filter applied to a specific field in one of the following ways:

* Click the filter icon in the column header and choose `Clear Filter` from the filter dialog.
* Right-click a cell in the filtered column and choose the corresponding `Clear Filter` option from the context menu.
* Use the `clearFilter(field)` method to programmatically clear the filter from a specific field.

## Reapply filter

After modifying the data in filtered rows, you can reapply the existing filter in one of the following ways:

* Choose `Reapply` from `Filter and Sort` in the Ribbon.
* Right-click a filtered cell and choose `Reapply` from the context menu.

Reapplying updates the filtered results based on the current data.

## Known error validations

The following errors have been handled for filtering,
* *Out of range validation:* When the selected range is not a used range of the active sheet, it is considered as invalid and the out of range alert with the message `Select a cell or range inside the used range and try again` will be displayed. No filter will be performed if the range is invalid.

## Get data from filtered rows

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [allowFiltering](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.spreadsheet.spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowFiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [allowFiltering](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.spreadsheet.spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowFiltering) property and `applyFilter` method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

The following code example shows how to get the filtered rows.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/filter-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="InsertSheetController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/filter-cs1/filterController.cs %}
{% endhighlight %}
{% endtabs %}

## Limitations

The following operations have limitations when filtering is applied:

* Inserting or deleting rows and columns within the filtered range.
* Merging cells within the filtered range.
* Copying, cutting, or pasting cells within the filtered range.

## See Also

* [Sorting](./sort)
* [Hyperlink](./link)
* [Undo Redo](./undo-redo)