---
layout: post
title: Editing in EJ2 JavaScript Spreadsheet control | Syncfusion
description: Learn about the editing options supported in the Syncfusion EJ2 JavaScript Spreadsheet control, including enabling editing, programmatic edit, save, and cancel operations.
platform: document-processing
control: Editing
documentation: ug
---

# Editing in EJ2 JavaScript Spreadsheet control

The Spreadsheet control lets you edit a cell's content directly in the cell or through the formula bar. By default, the editing feature is enabled in the Spreadsheet. To enable or disable the editing feature, set the [`allowEditing`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowediting) property to `true` or `false`. For information about related keyboard shortcuts, method signatures, and events, see [Editing in EJ2 Spreadsheet control](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowediting) in the API reference.

## Edit cell

You can start editing by one of the following ways,

* Double-click a cell to enter edit mode.
* Press `F2` to edit the active cell.
* Use the formula bar to perform editing.
* Press `Backspace` or `Space` to clear the cell content and start edit mode.

* Using the [`startEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#startedit) method.

## Save cell

If the cell is in editable state, you can save the edited cell by one of the following ways,

* Click any other cell to commit the current edit and move the selection.
* Press `Enter` or `Tab` to save the current cell. `Enter` moves the active selection down by one row; `Tab` moves the active selection to the right.

* Using the [`endEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#endedit) method.

## Cancel editing

To discard in-progress changes without saving, use either a UI action or a programmatic method.

* Press `Escape`. This exits edit mode and restores the cell's previous value.

* Using the [`closeEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#closeedit) method.


The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#closeedit) method in spreadsheet.
 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/editing-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/editing-cs1" %}

## Limitations

* Text overflow in cells is not supported in Editing.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
