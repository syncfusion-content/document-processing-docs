---
layout: post
title: Sort in React Spreadsheet component | Syncfusion
description: Learn here all about Sort in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Sort 
platform: document-processing
documentation: ug
---

# Sort in React Spreadsheet component

Sorting helps arranging the data to a specific order in a selected range of cells. You can use the [`allowSorting`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowsorting) property to enable or disable sorting functionality.

> * The default value for `allowSorting` property is `true`.

By default, the `sort` module is injected internally into Spreadsheet to perform sorting.

## Sort by Cell Value

In the active Spreadsheet, you can sort a selected range of cells by their values. Sorting can be done in several ways:

* **Ribbon Toolbar** – Select the sort option under the Ribbon toolbar and choose ascending or descending.  
* **Context Menu** – Right-click the sheet, select the sort option, and choose ascending or descending.  
* **Programmatically** – Use the [`sort()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sort) method.  

The cell values can be sorted in the following orders:
* **Ascending** – Default order for sorting.  
* **Descending** – Reverse order.
When the `sort()` method is called with empty arguments, the selected range is sorted by the active cell’s column in ascending order.

> * The [`beforeSort`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#beforesort) event will be triggered before sorting the specified range.
> * The [`sortComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sortcomplete) event will be triggered after the sort action is completed successfully.

The following code example demonstrates the `sort` functionality in the Spreadsheet control.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/sort-by-cell-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/sort-by-cell-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/sort-by-cell-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/sort-by-cell-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/sort-by-cell-cs1" %}

## Data contains header

You can specify whether the selected range of cells contains header. To specify, you need to set the [`containsHeader`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#containsheader) property to `true` and pass it as `sortOption` arguments of the sort() method.

> * If the `containsHeader` property is not set and active cell column’s first cell value type is differed from the second cell value type, the first row data in the range are marked as column headers.

You can also enable or disable this property using `beforeSort` event arguments,

```ts

    const beforeSort = (args: BeforeSortEventArgs): void => {
        args.sortOptions.containsHeader = true;
    }

```

In the custom sort dialog, the `Data contains header` checkbox is checked on load. Thus, the default value for `containsHeader` is `true` in custom sort dialog.

## Case Sensitive Sort

By default, sorting in the Spreadsheet is **case insensitive**.  
To perform sorting with case sensitivity, set the [`caseSensitive`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#casesensitive) property to `true` and pass it as part of the `sortOption` arguments in the `sort()` method.  

* Case sensitive sorting applies only to cells containing alphabets.
* In ascending order with case sensitivity enabled, cells with lowercase text appear above cells with uppercase text.  
> * The default value for the `caseSensitive` property is `false`.

You can also enable or disable this property using `beforeSort` event arguments,

```ts
   const beforeSort = (args: BeforeSortEventArgs): void => {
        args.sortOptions.caseSensitive = true;
        }

```

In the custom sort dialog, the `Case sensitive` checkbox is unchecked on load as the default value is `false`.

## Sort multiple columns

When you want to perform sorting on multiple columns, it can be done by any of the following ways:
* Select the `Custom sort…` menu item from the Ribbon toolbar item or context menu item.
* Use the `sort()` method programmatically by providing sort criteria.

> * The current sorting functionality supports sorting based on cell values only.

### Custom Sort Dialog

The custom sort dialog allows sorting multiple columns in a selected range using a rich UI.  
This dialog appears when you choose `Custom sort…` from the Ribbon or context menu.  
* By default, the dialog shows sort criteria with the first column name from the selected range. This initial criterion cannot be removed.  
* You can add more criteria using the `Add Column` button at the bottom of the dialog. Each criterion can have its own sort order.  
* Newly added criteria can be removed using the `delete` icon next to each item.  

* **Data contains header** – Refer to the [Data contains header](./sort#data-contains-header) topic for details about the checkbox.  
* **Case sensitive** – Refer to the [Case sensitive sort](./sort#case-sensitive-sort) topic for details about the checkbox.  

This dialog makes it easy to sort complex datasets by multiple columns with clear, customizable options.

### Passing sort criteria manually

The multi-column sorting can also be performed manually by passing sort options to the `sort()` method programmatically. The `sortOption` have the following arguments:
* [`sortDescriptors`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sortdescriptors) – Sort criteria collection that holds the collection of field name, sort order, and [`sortComparer`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sortcomparer).
* `containsHeader` – Boolean argument that specifies whether the range has headers in it.
* `caseSensitive` – Boolean argument that specifies whether the range needs to consider case.

> * All the arguments are optional.
> * When a `sortDescriptor` is specified without field, the field of the first `sortDescriptor` from the collection will be assigned from active cell’s column name and others will be ignored. Hence, it will act as single column sorting.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/passing-sort-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/passing-sort-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/passing-sort-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/passing-sort-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/passing-sort-cs1" %}

## Custom sort comparer

The [`sortDescriptor`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sortdescriptor) holds the [`sortComparer`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#sortcomparer) property, which is a function and it is used to customize the sort comparer for specific sort criteria. Each `sortDescriptor` can be customized using the custom sort comparer function.

By customizing sort comparer, you can define the sort action as desired.

> * The `sortComparer` is an optional property of `sortDescriptor`.

For custom sort comparer example, refer to the [`Sort a range by custom list`] below.

### Sort a range by custom list
You can also define the sorting of cell values based on your own customized personal list. In this article, custom list is achieved using `custom sort comparer`.

For example, in the demo below, the `Trustworthiness`column is sorted according to the custom list values:  
* `Perfect`  
* `Sufficient`  
* `Insufficient`  

This approach lets you control the order of sorting beyond the default ascending or descending options, making it easier to arrange data according to personalized or domain-specific criteria.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/custom-sort-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/custom-sort-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/custom-sort-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/custom-sort-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/custom-sort-cs1" %}

## Known error validations

The following errors have been handled for sorting,
* *Out of range validation:* When the selected range is not a used range of the active sheet, it is considered as invalid and the out of range alert with the message `Select a cell or range inside the used range and try again` will be displayed. No sort will be performed if the range is invalid.

* *Empty field validation:* When the sort criteria does not have a column selected (empty) in the custom sort dialog, it will become invalid, and an error message `Sort criteria column should not be empty` will be displayed on `OK` button click.

* *Duplicate field validation:* When the column names of added sort criteria are repeated more than once in the custom sort dialog, it will become invalid and an error message `<Column name> is mentioned more than once. Duplicate columns must be removed` will be displayed on `OK` button click.

## Limitations

* Sorting is not supported with formula contained cells.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Hyperlink](../spreadsheet/link)
* [Filtering](../spreadsheet/filter)
* [Undo Redo](../spreadsheet/undo-redo)