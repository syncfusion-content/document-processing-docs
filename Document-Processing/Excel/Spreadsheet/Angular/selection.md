---
layout: post
title: Selection in Angular Spreadsheet component | Syncfusion
description: Learn here all about Selection in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Selection 
platform: document-processing
documentation: ug
---

# Selection in Angular Spreadsheet component

Selection provides interactive support to highlight the cell, row, or column that you select. Selection can be done through Mouse, Touch, or Keyboard interaction.

To configure selection, use the [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#selectionsettings) property:
* `mode = "Single"` → allows selecting only one cell, row, or column at a time.  
* `mode = "Multiple"` → allows selecting multiple cells, rows, or columns at once.  
* `mode = "None"` → disables UI selection completely.

> The default value for `mode` is `Multiple`.

You can perform:
* Cell selection – highlight individual cells.  
* Row selection – highlight entire rows.  
* Column selection – highlight entire columns.  

## Cell selection

Cell selection is used to select a single or multiple cells. It can be performed using the [`selectRange`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#selectrange) method.

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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/selection-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/selection-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/selection-cs1" %}

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
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/selection-cs2/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/selection-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/selection-cs2" %}

## Get selected cell values

You can select single or multiple cells, rows, or columns using mouse and keyboard interactions. Additionally, you can also programmatically perform selection using the [selectRange](https://helpej2.syncfusion.com/angular/documentation/api/spreadsheet#selectrange) method. This selection behavior is controlled based on the [selectionSettings](https://helpej2.syncfusion.com/angular/documentation/api/spreadsheet#selectionsettings) property. Now, retrieving the selected cell values as a collection is achievable using the [getData](https://helpej2.syncfusion.com/angular/documentation/api/spreadsheet#getdata) method.

Below is a code example demonstrating how to retrieve the selected cell values as a collection programmatically:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/selected-cell-values/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/selected-cell-values/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/selected-cell-values" %}

## Remove selection

The following sample shows, how to remove the selection in the spreadsheet. Here changing the `mode` as `None` in [`selectionSettings`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet#selectionsettings) to disable's the UI selection.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/selection-cs3/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/selection-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/selection-cs3" %}

## Limitations

* We have a limitation while performing the Select All(`ctrl + A`). You can do this only by clicking the Select All button at the top left corner.

## Note

You can refer to our [Angular Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor) to knows how to present and manipulate data.
