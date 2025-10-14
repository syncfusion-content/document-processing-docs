---
layout: post
title: Selection in React Spreadsheet component | Syncfusion
description: Learn here all about Selection in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: document-processing
documentation: ug
---

# Selection in React Spreadsheet component

Selection provides interactive support to highlight the cell, row, or column that you select. Selection can be done through Mouse, Touch, or Keyboard interaction. To enable selection, set `mode` as `Single` / `Multiple` in [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#selectionsettings). If you set `mode` to `None`, it disables the UI selection.

> * The default value for `mode` in  `selectionSettings` is `Multiple`.

You have the following options in Selection,

* Cell selection
* Row selection
* Column selection

## Cell selection

Cell selection is used to select a single or multiple cells. It can be performed using the [`selectRange`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#selectrange) method.

**User Interface**:

* Click on a cell to select it (or) use the `arrow` keys to navigate to it and select it.
* To select a range, select a cell, then use the left mouse button to select and drag over to other cells (or) use the `Shift + arrow` keys to select the range.
* To select non-adjacent cells and cell ranges, hold `Ctrl` and select the cells.

You can quickly locate and select specific cells or ranges by entering their names or cell references in the Name box, which is located to the left of the formula bar, and also select named or unnamed cells or ranges by using the Go To (`Ctrl+G`) command.

## Row selection

Row selection is used to select a single or multiple rows.

**User Interface**:

You can perform row selection in any of the following ways,

* By clicking the row header.
* To select multiple rows, select a row header with the left mouse button and drag over to other row headers (or) use the `Shift + arrow` keys to select multiple rows.
* To select non-adjacent rows, hold `Ctrl` and select the row header.
* You can also use the `selectRange` method for row selection.

The following sample shows the row selection in the spreadsheet, here selecting the 5th row using the `selectRange` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/selection-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/selection-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/selection-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/selection-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/selection-cs1" %}

## Column selection

Column selection is used to select a single or multiple columns.

**User Interface**:

You can perform column selection in any of the following ways,

* By clicking the column header.
* To select multiple columns, select a column header with the left mouse button and drag over to other column headers (or) use the `Shift + arrow` keys to select the multiple columns.
* To select non-adjacent columns, hold `Ctrl` and select the column header.
* You can also use the `selectRange` method for row selection.

The following sample shows the column selection in the spreadsheet, here selecting the 3rd column using  the `selectRange` method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/selection-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/selection-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/selection-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/selection-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/selection-cs2" %}

## Get selected cell values

You can select single or multiple cells, rows, or columns using mouse and keyboard interactions. Additionally, you can also programmatically perform selection using the [selectRange](https://helpej2.syncfusion.com/react/documentation/api/spreadsheet/#selectrange) method. This selection behavior is controlled based on the [selectionSettings](https://helpej2.syncfusion.com/react/documentation/api/spreadsheet/#selectionsettings) property. Now, retrieving the selected cell values as a collection is achievable using the [getData](https://helpej2.syncfusion.com/react/documentation/api/spreadsheet/#getdata) method.

Below is a code example demonstrating how to retrieve the selected cell values as a collection programmatically:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/selected-cell-values/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/selected-cell-values/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/selected-cell-values/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/selected-cell-values/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/selected-cell-values" %}

## Remove selection

The following sample shows, how to remove the selection in the spreadsheet. Here changing the `mode` as `None` in [`selectionSettings`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#selectionsettings) to disable's the UI selection.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/selection-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/selection-cs3/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/selection-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/selection-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/selection-cs3" %}

## Limitations

* We have a limitation while performing the Select All(`ctrl + A`). You can do this only by clicking the Select All button at the top left corner.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.
