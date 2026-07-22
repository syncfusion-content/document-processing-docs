---
layout: post
title: Filter in EJ2 Javascript Spreadsheet control | Syncfusion
description: Learn how to apply, clear, and reapply filters in the Syncfusion EJ2 JavaScript Spreadsheet control.
platform: document-processing
control: Filter
documentation: ug
---

# Filter in EJ2 Javascript Spreadsheet control

The Filter feature lets you view specific rows in the spreadsheet by hiding the rest. The [`allowFiltering`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfiltering) property enables or disables this functionality. By default, the `Filter` module is injected internally into the Spreadsheet.

> * The default value for `allowFiltering` property is `true`.

By default, the `Filter` module is injected internally into Spreadsheet to perform filtering.

## Apply filter on UI

In the active sheet, select a range of cells to filter by value of the cell. The filtering can be done in any of the following ways:

* Select the **Filter** item in the Ribbon toolbar.
* Right-click the sheet and select the **Filter** item from the context menu.

* Use the [`applyFilter()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#applyfilter) method programmatically.

* Use `Ctrl + Shift + L` keyboard shortcut to apply the filter.

> * Use `Alt + Up/Down` keyboard shortcut to open the filter dialog.

## Filter by criteria

The [`applyFilter()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#applyfilter) method applies the filter UI based on the predicate and range passed as arguments.

> * The [`beforeFilter`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#beforefilter) event is triggered before filtering the specified range.
> * The [`filterComplete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#filtercomplete) event is triggered after the filter action completes successfully.

The following code example shows the `filter` functionality in the Spreadsheet control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/filter-cs1" %}

## Filter by cell value

To apply a filter for a cell value, right-click the cell and choose filter -> `Filter By Selected Cell's Value` option from the context menu. It applies the filter based on the value of the selected cell in the current sheet.

## Clear filter

After applying a filter to one or more columns, you may want to clear it to make all filtered rows visible again. This can be done in the following ways:

* Choose the **Clear** option in the ribbon toolbar under **Filter and Sort**. This clears the filters applied in the spreadsheet for all fields.
* Use the [`clearFilter()`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#clearfilter) method programmatically to clear the applied filters in the spreadsheet for all fields.

## Clear filter on a field

After filtering, you can clear/reset the filter for a single field. This can be done in the following ways:

* Click the filter icon in the column’s header and then choose the `Clear Filter` option from the filter dialog.
* Right-click a filtered column cell and choose `Clear Filter from <Column Name>` from the context menu.
* Use the [`clearFilter(field)`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#clearfilter) method programmatically to clear the filter on a particular column.

## Reapply filter

When you want to reapply the filter after changes have been made to the rows, do one of the following:

* You can choose `Reapply` option in the ribbon toolbar under `Filter and Sort` to reapply the filtered columns again.
* You can right-click on a filtered cell and choose `Reapply` option from the context menu. It reapplies the filters again in the Spreadsheet for all the fields.

## Known error validations

The following errors have been handled for filtering,
* *Out of range validation:* When the selected range is not a used range of the active sheet, it is considered as invalid and the out of range alert with the message `Select a cell or range inside the used range and try again` will be displayed. No filter will be performed if the range is invalid.

## Get data from filtered rows

Filtering allows you to view specific rows in a spreadsheet while hiding the others. The [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfiltering) property allows you to enable or disable filtering functionality through the UI. You can also use the [allowFiltering](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowfiltering) property and [applyFilter](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#applyfilter) method combination to filter data via code behind. The filtered rows can be identified by iterating through the row collection on the sheet and using the `isFiltered` property available in each row object.

The following code example shows how to get the filtered rows.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/filter-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/filter-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/filter-cs2" %}

## Limitations

The following features have limitations in the Filter module:

* Insert/delete row/column between the filter applied cells.
* Merge cells with filter.
* Copy/cut paste the filter applied cells.

## See Also

* [Sorting](./sort)
* [Hyperlink](./link)
* [Undo Redo](./undo-redo)