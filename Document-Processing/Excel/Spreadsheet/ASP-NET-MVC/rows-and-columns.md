---
layout: post
title: Rows and columns in EJ2 ASP.NET MVC Spreadsheet | Syncfusion
description: Learn here all about Rows And Columns in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Rows And Columns
documentation: ug
---


# Rows and columns in ASP.NET MVC Spreadsheet control

The Spreadsheet consists of rows and columns arranged in a tabular format. The intersection of a row and column is called a cell.

You can perform the following operations on rows and columns:

* Insert
* Delete
* Show and Hide

## Insert

You can insert rows or columns anywhere in a spreadsheet. Use the [`allowInsert`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowInsert) property to enable or disable the insert option in Spreadsheet.

### Row

You can insert rows in one of the following ways:

* Select a row header, right-click it, and choose the required insert option from the context menu.
* Use the `insertRow` method to insert rows programmatically after the Spreadsheet is rendered.

The following code example shows the options for inserting rows in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="InsertRowController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-row/insertRowController.cs %}
{% endhighlight %}
{% endtabs %}



### Column

You can insert columns in one of the following ways:

* Select a column header, right-click it, and choose the required insert option from the context menu.
* Use the `insertColumn` method to insert columns programmatically after the Spreadsheet is rendered.


The following code example shows the options for inserting columns in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-column/razor %}
{% endhighlight %}
{% highlight c# tabtitle="InsertColumnController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/insert-column/insertColumnController.cs %}
{% endhighlight %}
{% endtabs %}



## Delete

Delete support provides an option for deleting the rows and columns in the spreadsheet. Use [`allowDelete`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowDelete) property to enable or disable the delete option in Spreadsheet.

You can delete rows or columns in one of the following ways:

* Select the required row or column headers, right-click the selection, and choose the appropriate delete option from the context menu.
* Use the `delete` method to delete rows or columns programmatically.

The following code example shows the delete operation of rows and columns in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/delete-row/razor %}
{% endhighlight %}
{% highlight c# tabtitle="DeleteRowController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/delete-row/deleteRowController.cs %}
{% endhighlight %}
{% endtabs %}



## Hide and show

You can show or hide the rows and columns in the spreadsheet through property binding, method, and context menu.

### Row

You can hide or show rows in one of the following ways:

* Use the `hidden` property in the row model to hide rows during the initial rendering.
* Use the `hideRow` method to hide or show rows programmatically. Specify the start and end row indexes, and set the final `hide` argument to `false` to show hidden rows.
* Right-click the row header and choose the required option from the context menu.

### Column

You can hide or show columns in one of the following ways:

* Use the `hidden` property in the column model to hide columns during the initial rendering.
* Use the `hideColumn` method to hide or show columns programmatically. Specify the start and end column indexes, and set the final `hide` argument to `false` to show hidden columns.
* Right-click the column header and choose the required option from the context menu.

The following code example demonstrates how to hide and show rows and columns in the Spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/show-hide/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ShowHideController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/show-hide/showHideController.cs %}
{% endhighlight %}
{% endtabs %}



## Size

Use the `setRowsHeight` and `setColumnsWidth` methods to change the size of rows and columns in the Spreadsheet.

### Row

You can change the height of single or multiple rows by using the `setRowsHeight` method.

You can provide the following type of ranges to the method:

* Single-row range: `['2:2']`
* Multiple-row range: `['1:100']`
* iscontinuous row ranges: `['1:10', '15:25', '30:40']`
* Row ranges across different sheets: `[Sheet1!1:50, 'Sheet2!1:50', 'Sheet3!1:50']`

The following code example shows how to change the height for single/multiple rows in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/row-height/razor %}
{% endhighlight %}
{% highlight c# tabtitle="RowHeightController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/row-height/rowHeightController.cs %}
{% endhighlight %}
{% endtabs %}

### Column

You can change the width of single or multiple columns by using the `setColumnsWidth` method.

You can provide the following type of ranges to the method:

* Single-column range: `['F:F']`
* Multiple-column range: `['A:F']`
* Discontinuous column ranges: `['A:C', 'G:I', 'K:M']`
* Column ranges across different sheets: `[Sheet1!A:H, 'Sheet2!A:H', 'Sheet3!A:H']`

The following code example shows how to change the width for single/multiple columns in the spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/column-width/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ColumnWidthController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/column-width/columnWidthController.cs %}
{% endhighlight %}
{% endtabs %}

## Change text in column headers

Use the [`beforeCellRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_BeforeCellRender) event to change the column-header text. In the event handler, identify column-header elements using the `e-header-cell` class and update their displayed text value.

The following code example shows how to change the text in the column headers.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/column-header-change/razor %}
{% endhighlight %}
{% endtabs %}

## Limitations of insert and delete operations

Insert and delete operations have the following limitations:

* Inserting rows or columns within formatted ranges has limited support.
* Inserting rows or columns within data-validation ranges has limited support.
* Inserting rows or columns within conditionally formatted ranges has limited support.
* Inserting or deleting rows or columns within filtered ranges has limited support.

## See Also

* [Hyperlink](./link)
* [Sorting](./sort)
* [Filtering](./filter)
