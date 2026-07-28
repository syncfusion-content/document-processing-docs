---
layout: post
title: Selection in EJ2 ASP.NET MVC Spreadsheet Control | Syncfusion
description: Learn here all about Selection in Syncfusion EJ2 ASP.NET MVC Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Selection
documentation: ug
---


# Selection in ASP.NET MVC Spreadsheet Control

Selection highlights the selected cell, row, or column in the Spreadsheet. You can select cells using mouse, touch, or keyboard interactions.

Set the `mode` property in [`selectionSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_SelectionSettings) to `Single` or `Multiple` to enable selection. Set it to `None` to disable selection through the user interface.

The following table lists the available selection modes:

| Mode | Description |
|------|-------------|
| `Single` | Allows only one cell to be selected at a time. |
| `Multiple` | Allows multiple cells, rows, columns, or ranges to be selected. |
| `None` | Disables selection through the user interface. |

N> The default value of the `mode` property in `selectionSettings` is `Multiple`.

The Spreadsheet supports the following types of selection:

* Cell selection
* Row selection
* Column selection

## Cell selection

Cell selection allows you to select one or more cells. Use the `selectRange()` method to select a cell or range programmatically.

You can select cells through the user interface in the following ways:

* Click a cell or use the arrow keys to navigate to it.
* To select a range, click a cell and drag across the required cells. Alternatively, hold `Shift` and use the arrow keys.
* To select non-adjacent cells or ranges, hold `Ctrl` and click the required cells.

You can also enter a cell reference or range name in the **Name box**, located to the left of the formula bar. Alternatively, press `Ctrl + G` to open the **Go To** dialog and navigate to a named or unnamed cell range.

## Row selection

Row selection allows you to select one or more rows.

You can select rows through the user interface in the following ways:

* Click a row header to select the row.
* To select multiple adjacent rows, click a row header and drag across the required row headers. Alternatively, hold `Shift` and use the arrow keys.
* To select non-adjacent rows, hold `Ctrl` and click the required row headers.
* Use the `selectRange()` method to select rows programmatically.

The following sample shows the row selection in the spreadsheet, here selecting the 5th row using the `selectRange` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/row-selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SelectionController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/row-selection/selectionController.cs %}
{% endhighlight %}
{% endtabs %}



## Column selection

Column selection allows you to select one or more columns.

You can select columns through the user interface in the following ways:

* Click a column header to select the column.
* To select multiple adjacent columns, click a column header and drag across the required column headers. Alternatively, hold `Shift` and use the arrow keys.
* To select non-adjacent columns, hold `Ctrl` and click the required column headers.
* Use the `selectRange()` method to select columns programmatically.

The following sample shows the column selection in the spreadsheet, here selecting the 3rd column using  the `selectRange` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/column-selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SelectionController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/column-selection/selectionController.cs %}
{% endhighlight %}
{% endtabs %}

## Get selected cell values

You can select single or multiple cells, rows, or columns using mouse and keyboard interactions. You can also programmatically perform selections using the [selectRange](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#selectrange) method. This selection behavior is controlled by the [selectionSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_SelectionSettings) property. Finally, you can retrieve the selected cell values as a collection using the [getData](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#getdata) method.

The following example demonstrates how to retrieve the values from the selected cells as a collection programmatically:

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/selected-cell-values/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SelectedCellValuesController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/selected-cell-values/selectedCellValuesController.cs %}
{% endhighlight %}
{% endtabs %}

## Disable Selection

Set the `mode` property in [`selectionSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_SelectionSettings) to `None` to disable selection through the user interface.

The following example demonstrates how to disable UI selection in the Spreadsheet.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/disable-selection/razor %}
{% endhighlight %}
{% highlight c# tabtitle="SelectionController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/disable-selection/selectionController.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

* Selecting all cells using `Ctrl + A` is not supported. Use the **Select All** button in the top-left corner of the worksheet instead.