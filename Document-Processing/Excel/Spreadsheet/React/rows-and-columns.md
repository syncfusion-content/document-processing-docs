---
layout: post
title: Rows and columns in React Spreadsheet component | Syncfusion
description: Learn here all about Rows and columns in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Rows and columns 
platform: document-processing
documentation: ug
---

# Rows and columns in React Spreadsheet component

Spreadsheet is a tabular format consisting of rows and columns. The intersection point of rows and columns are called as cells. The list of operations that you can perform in rows and columns are,

* Insert
* Delete
* Show and Hide

## Insert Rows and Columns

You can insert rows or columns anywhere in a spreadsheet. Use the [`allowInsert`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowinsert) property to enable or disable the insert option in Spreadsheet.

### Insert a Row

The rows can be inserted in the following ways,

* Using [`insertRow`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#insertrow) method, you can insert the rows once the component is loaded.
* Using context menu, insert the empty rows in the desired position.

The following code example shows the options for inserting rows in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-row-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-row-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/insert-row-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/insert-row-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-row-cs1" %}

### Insert a Column

The columns can be inserted in the following ways,

<<<<<<< .mine
* Using [`insertColumn()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertcolumn) method, you can insert the columns once the component is loaded.
=======
* Using [`insertColumn`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#insertcolumn) method, you can insert the columns once the component is loaded.
>>>>>>> .theirs
* Using context menu, insert the empty columns in the desired position.

The following code example shows the options for inserting columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-column-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-column-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/insert-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/insert-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-column-cs1" %}

## Delete Rows and Columns

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowdelete) property to enable or disable the delete option in Spreadsheet.

The rows and columns can be deleted dynamically in the following ways,

<<<<<<< .mine
* Using [`delete()`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#delete) method, you can delete the loaded rows and columns.
=======
* Using [`delete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#delete) method, you can delete the loaded rows and columns.
>>>>>>> .theirs
* Using context menu, you can delete the selected rows and columns.

The following code example shows the delete operation of rows and columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/delete-row-column-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/delete-row-column-cs1" %}

## Limitations of insert and delete

The following features have some limitations in Insert/Delete:

* Insert row/column between the formatting applied cells.
* Insert row/column between the data validation.
* Insert row/column between the conditional formatting applied cells.
* Insert/delete row/column between the filter applied cells.

## Hide or show Spreadsheet Rows and Columns

You can show or hide the rows and columns in the spreadsheet through property binding, method, and context menu.

### Show or Hide Rows

The rows can be hidden or shown through the following ways,

* Using [hidden](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/row#hidden) property in row, you can hide/show the rows at initial load.
* Using [hideRow()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hiderow) method, you can hide the rows by specifying the start and end row index, set the last argument `hide` as `false` to unhide the hidden rows.
* Right-click on the row header and select the desired option from context menu

### Show or Hide Columns

The columns can be hidden or shown through following ways,

* Using [hidden](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/column#hidden) property in columns, you can hide/show the columns at initial load.
* Using [hideColumn()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hidecolumn) method, you can hide the columns by specifying the start and end column index, set the last argument `hide` as `false` to unhide the hidden columns.
* Right-click on the column header and select the desired option from context menu

The following code example shows the hide/show rows and columns operation in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/show-hide-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/show-hide-cs1" %}

## Resize Rows and Columns

<<<<<<< .mine
You can change the size of rows and columns in the spreadsheet by using [setRowsHeight()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setrowsheight) and [setColumnsWidth()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setcolumnswidth) methods.
=======
You can change the size of rows and columns in the spreadsheet by using [setRowsHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setrowsheight) and [setColumnsWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setcolumnswidth) methods.
>>>>>>> .theirs

### Adjust Row Height 

<<<<<<< .mine
You can change the height of single or multiple rows by using the [setRowsHeight()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setrowsheight) method.
=======
You can change the height of single or multiple rows by using the [setRowsHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setrowsheight) method.
>>>>>>> .theirs

You can provide the following type of ranges to the method:

* Single row range: `['2:2']`
* Multiple rows range: `['1:100']`
* Multiple rows with discontinuous range: `['1:10', '15:25', '30:40']`
* Multiple rows with different sheets: `[Sheet1!1:50, 'Sheet2!1:50', 'Sheet3!1:50']`

Additionally, each row model includes a [customHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/rowmodel#customheight) property that indicates the row height was explicitly set either by manually adjusting the row header boundary or programmatically. When [customHeight](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/rowmodel#customheight) is true, the height is treated as manually defined and will not change automatically when enabling wrap text, increasing font size, or changing the font family; the height remains fixed until the user or code updates it.

The following code example shows how to change the height for single/multiple rows in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/row-height-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/row-height-cs1" %}

### Adjust Column width

<<<<<<< .mine
You can change the width of single or multiple columns by using the [setColumnsWidth()](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setcolumnswidth) method.
=======
You can change the width of single or multiple columns by using the [setColumnsWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#setcolumnswidth) method.
>>>>>>> .theirs

You can provide the following type of ranges to the method:

* Single column range: `['F:F']`
* Multiple columns range: `['A:F']`
* Multiple columns with discontinuous range: `['A:C', 'G:I', 'K:M']`
* Multiple columns with different sheets: `[Sheet1!A:H, 'Sheet2!A:H', 'Sheet3!A:H']`

Additionally, each column model includes a [customWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/columnmodel#customwidth) property that indicates the column width was explicitly set either by manually adjusting the column header boundary or programmatically. When [customWidth](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/columnmodel#customwidth) is true, the width is treated as manually defined.

The following code example shows how to change the width for single/multiple columns in the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/column-width-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/column-width-cs1" %}

## Changing text in column headers

Using the [`beforeCellRender`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#beforecellrender) event, you can change the text in the column headers. In that event, you can use the `e-header-cell` class to identify the header cell element and update its text value.

The following code example shows how to change the text in the column headers.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/column-header-change-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/column-header-change-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/column-header-change-cs1" %}

## Quick Lookup

- `insertRow(index)` - insert a new row at the specified index; optional parameters let you add multiple rows or row models.
- `insertColumn(index)` - insert a new column at the specified index; optional parameters let you add multiple columns or column models.
- `delete(startIndex, endIndex)` - remove a continuous range of rows or columns; you can specify the model type when needed.
- `allowInsert` - property to enable or disable inserting rows or columns in the sheet.
- `allowDelete` - property to enable or disable deleting rows or columns in the sheet.
- `hideRow(startIndex, endIndex, hide)` - hide or show a range of rows by using the hide flag.
- `hideColumn(startIndex, endIndex, hide)` - hide or show a range of columns by using the hide flag.
- `RowModel.hidden` - defines whether a row should start hidden when the sheet loads.
- `ColumnModel.hidden` - defines whether a column should start hidden when the sheet loads.
- `setRowsHeight(height, ranges)` - apply a specific height to one or more row ranges.
- `setColumnsWidth(width, ranges)` - apply a specific width to one or more column ranges.
- `beforeCellRender(args)` - event used to change or customize cell or header content during rendering.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)