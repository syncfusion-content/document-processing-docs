---
layout: post
title: Sort in EJ2 ASP.NET MVC Syncfusion Spreadsheet Control
description: Learn here all about Sort in Syncfusion EJ2 ASP.NET MVC Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Sort
documentation: ug
---


# Sorting in ASP.NET MVC Spreadsheet Control

Sorting helps arrange data in a specific order within a selected range of cells. Use the [`allowSorting`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowSorting) property to enable or disable sorting functionality.

N> * The default value of the `allowSorting` property is `true`.

By default, the `sort` module is injected internally into the Spreadsheet to provide sorting functionality.

## Sort by cell value

To sort a selected range by cell value:

* Select the range of cells to sort.
* Choose the required sorting option in one of the following ways:
   * Open the sorting options in the Ribbon and choose **Ascending** or **Descending**.
   * Right-click the selected range, open the sorting options in the context menu, and choose **Ascending** or **Descending**.
* Verify that the values in the selected range are arranged in the chosen order.

You can also use the `sort()` method to sort a range programmatically.

N> * Ascending is the default sorting order.

When the `sort()` method is called without arguments, it sorts the selected range in ascending order using the active cell's column as the sort column.

N> * The `beforeSort` event will be triggered before sorting the specified range.
<br/> * The `sortComplete` event will be triggered after the sort action is completed successfully.

The following code example shows `sort` functionality in the Spreadsheet control.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/sort-by-cell/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SortController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/sort-by-cell/sortController.cs %}
{% endhighlight %}
{% endtabs %}



## Data contains header

You can specify whether the selected range of cells contains header. To specify, you need to set the `containsHeader` property to `true` and pass it as `sortOption` arguments of the sort() method.

N> * If the `containsHeader` property is not set and active cell column’s first cell value type is differed from the second cell value type, the first row data in the range are marked as column headers.

You can also enable or disable this property using `beforeSort` event arguments,

```javascript

   function beforeSort(args) {
        args.sortOptions.containsHeader = true;
    }
```

In the custom sort dialog, the `Data contains header` checkbox is checked on load. Thus, the default value for `containsHeader` is `true` in custom sort dialog.

## Case sensitive sort

The default sort functionality of Spreadsheet is a case insensitive sorting. When you want to perform sorting with case sensitive, you need to set the `caseSensitive` property to `true` and pass it as `sortOption` arguments of the sort() method.

Case sensitive sorting is applicable only for cells with alphabets. In ascending order sorting with case sensitive enabled, the cells with lower case text will be placed above the cells with upper case text.

N> The default value of the `caseSensitive` property is `false`.

You can also enable or disable this property using `beforeSort` event arguments,

```javascript

    function beforeSort (args) {
        args.sortOptions.caseSensitive = true;
    }

```

In the custom sort dialog, the `Case sensitive` checkbox is unchecked on load as the default value is `false`.

## Sort multiple columns

You can sort multiple columns in one of the following ways:
* Select the `Custom sort…` menu item from the Ribbon toolbar item or context menu item.
* Use the `sort()` method programmatically by providing sort criteria.

N> * The current sorting functionality supports sorting based on cell values only.

### Custom sort dialog

The custom sort dialog helps sorting multiple columns in the selected range by utilizing the rich UI. This dialog will be appeared while choosing the `Custom sort…` from the Ribbon item or context menu item. By default, sort criteria with the first column name from the selected range will be appeared in the dialog on initial load and it cannot be removed.

You can add multiple criteria using the `Add Column` button at the bottom of the dialog. Thus, multiple columns can be specified with different sort order. The newly added sort criteria items can be removed using the `delete` icons at the end of each items.

You can refer to the [`Data contains header`](https://ej2.syncfusion.com/aspnetmvc/documentation/spreadsheet/sort#data-contains-header) topic to learn more about `Data contains header` checkbox. To learn more about `Case sensitive` checkbox, you can refer to [`Case sensitive sort`](https://ej2.syncfusion.com/aspnetmvc/documentation/spreadsheet/sort#case-sensitive-sort) topic.

### Passing sort criteria manually

The multi-column sorting can also be performed manually by passing sort options to the `sort()` method programmatically. The `sortOption` have the following arguments:
* `sortDescriptors` – Sort criteria collection that holds the collection of field name, sort order, and `sortComparer`.
* `containsHeader` – Boolean argument that specifies whether the range has headers in it.
* `caseSensitive` – Boolean argument that specifies whether the range needs to consider case.

N> * All the arguments are optional.
<br/> * When a `sortDescriptor` is specified without field, the field of the first `sortDescriptor` from the collection will be assigned from active cell’s column name and others will be ignored. Hence, it will act as single column sorting.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/passing-sort/razor %}
{% endhighlight %}
{% highlight c# tabtitle="PassingSortController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/passing-sort/passingSortController.cs %}
{% endhighlight %}
{% endtabs %}



## Custom sort comparer

The `sortDescriptor` holds the `sortComparer` property, which is a function and it is used to customize the sort comparer for specific sort criteria. Each `sortDescriptor` can be customized using the custom sort comparer function.

By customizing sort comparer, you can define the sort action as desired.

N> * The `sortComparer` is an optional property of `sortDescriptor`.

For custom sort comparer example, refer to the [`Sort a range by custom list`] below section.

### Sort a range by custom list

You can also define the sorting of cell values based on your own customized personal list. In this article, custom list is achieved using `custom sort comparer`.

In the following demo, the `Trustworthiness` column is sorted based on the custom lists `Perfect`, `Sufficient`, and `Insufficient`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/custom-sort/razor %}
{% endhighlight %}
{% highlight c# tabtitle="CustomSortController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/custom-sort/customSortController.cs %}
{% endhighlight %}
{% endtabs %}

## Sorting validation errors

The Spreadsheet handles the following sorting validation errors:
* *Out of range validation:* When the selected range is not a used range of the active sheet, it is considered as invalid and the out of range alert with the message `Select a cell or range inside the used range and try again` will be displayed. No sort will be performed if the range is invalid.

* *Empty field validation:* When the sort criteria does not have a column selected (empty) in the custom sort dialog, it will become invalid, and an error message `Sort criteria column should not be empty` will be displayed on `OK` button click.

* *Duplicate field validation:* When the column names of added sort criteria are repeated more than once in the custom sort dialog, it will become invalid and an error message `<Column name> is mentioned more than once. Duplicate columns must be removed` will be displayed on `OK` button click.

## Limitations

* Sorting cells that contain formulas is not supported.

## See Also

* [Hyperlink](./link)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)