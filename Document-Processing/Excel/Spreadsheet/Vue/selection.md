---
layout: post
title: Selection in Vue Spreadsheet component | Syncfusion
description: Learn here all about Selection in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: document-processing
documentation: ug
---

# Selection in Vue Spreadsheet component

Selection provides interactive support to highlight the cell, row, or column that you select. Selection can be done through Mouse, Touch, or Keyboard interaction. To enable selection, set `mode` as `Single` | `Multiple` in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#selectionsettings). If you set `mode` to `None`, it disables the UI selection.

> * The default value for `mode` in `selectionSettings` is `Multiple`.

Selection supports the following options:

* Cell selection
* Row selection
* Column selection

## Cell selection

Cell selection is used to select a single cell or a range of cells. Use the [`selectRange`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#selectrange) method to perform cell selection programmatically.

**User Interface**:

* Click on a cell to select it, or use the arrow keys to navigate to and select it.
* To select a range, select a cell, then drag with the left mouse button over the range, or hold `Shift` and use the arrow keys.
* To select non-adjacent cells and cell ranges, hold `Ctrl` and select each cell or range.

You can quickly locate and select specific cells or ranges by entering their names or cell references in the Name box, located to the left of the formula bar. You can also select named or unnamed cells or ranges using the Go To (`Ctrl+G`) command.

## Row selection

Row selection is used to select a single or multiple rows.

**User Interface**:

You can perform row selection in any of the following ways:

* Click the row header.
* To select multiple adjacent rows, click a row header and drag over other row headers, or hold `Shift` and use the arrow keys.
* To select non-adjacent rows, hold `Ctrl` and select each row header.
* Programmatically, you can use the `selectRange` method for row selection.

The following sample shows row selection in the spreadsheet, selecting the 5th row using the `selectRange` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selection-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selection-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/selection-cs1" %}

## Column selection

Column selection is used to select a single or multiple columns.

**User Interface**:

You can perform column selection in any of the following ways:

* Click the column header.
* To select multiple adjacent columns, click a column header and drag over other column headers, or hold `Shift` and use the arrow keys.
* To select non-adjacent columns, hold `Ctrl` and select each column header.
* Programmatically, you can use the `selectRange` method for row selection.

The following sample shows column selection in the spreadsheet, selecting the 3rd column using the `selectRange` method.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selection-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selection-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/selection-cs2" %}

## Get selected cell values

You can select single or multiple cells, rows, or columns using mouse and keyboard interactions. You can also perform selections programmatically using the [selectRange](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#selectrange) method. This selection behavior is controlled by the [selectionSettings](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#selectionsettings) property. Finally, you can retrieve the selected cell values as a collection using the [getData](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#getdata) method.

Below is a code example demonstrating how to retrieve the selected cell values as a collection programmatically:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selected-cell-values/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selected-cell-values/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/selected-cell-values" %}

## Remove Selection

The following sample shows how to disable the selection in the spreadsheet. Setting `mode` to `None` in [`selectionSettings`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#selectionsettings) disables the UI selection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selection-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/selection-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/selection-cs3" %}

## Limitations

* The `Ctrl+A` shortcut does not select all cells. To select all cells, click the Select All button at the top-left corner of the sheet.

## Note

You can refer to our [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) feature tour page for its groundbreaking feature representations.