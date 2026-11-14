---
layout: post
title: Editing in TypeScript Spreadsheet | Syncfusion
description: Learn about editing in the Syncfusion TypeScript Spreadsheet control and modify cell values, formulas, and spreadsheet content.
control: Editing 
platform: document-processing
documentation: ug
---

# Editing in TypeScript Spreadsheet

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://ej2.syncfusion.com/documentation/api/spreadsheet#allowediting) property to enable or disable the editing feature.

## Edit cell

You can start editing by one of the following ways,

* Double-click a cell to start the edit mode.
* Press `F2` key to edit the active cell.
* Use formula bar to perform editing.
* Use `BACKSPACE` or `SPACE` key to clear the cell content and start the edit mode.
* Using the [`startEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet#startedit) method.

## Save cell

If the cell is in editable state, you can save the edited cell by one of the following ways,

* Perform mouse click on any other cell rather than the current editing cell.
* Press `Enter` or `Tab` keys to save the edited cell content.
* Using the [`endEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet#endedit) method.

## Cancel editing

To cancel the editing without saving the changes, you can use one of the following ways,

* Press `ESCAPE` key, this will remove the editable state and update the unchanged cell content.
* Using the [`closeEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet#closeedit) method.

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/documentation/api/spreadsheet#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/documentation/api/spreadsheet#closeedit) method in spreadsheet.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/editing-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/editing-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/editing-cs1" %}

## Limitations

* Text overflow in cells is not supported during Editing.

## Note

You can refer to our [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) feature tour page for its groundbreaking feature representations.

## See Also

* [Cell range](../cell-range-and-operation)
* [Formatting](../formatting-overview)
* [Hyperlink](../link)
* [Undo and Redo](../undo-redo)
* [Unlock the particular cells in the protected sheet](../protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
