---
layout: post
title: Editing in Vue Spreadsheet component | Syncfusion
description: Learn here all about Editing in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Editing in Vue Spreadsheet component

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#allowediting) property to enable or disable the editing feature.

## Edit cell

You can start editing by one of the following ways:

* Double-click a cell to enter edit mode.
* Press `F2` key to edit the active cell.
* Use the formula bar to perform editing.
* Use `BACKSPACE` or `SPACE` key to clear the cell content and start the edit mode.
* Use the [`startEdit`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#startedit) method.

## Save cell

If a cell is in edit mode, you can save the edited cell by one of the following ways:

* Perform a mouse click on any other cell other than the currently editing cell.
* Press `Enter` or `Tab` keys to save the edited cell content.
* Use the [`endEdit`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#endedit) method.

## Cancel editing

To cancel editing without saving the changes, you can use one of the following ways:

* Press `Escape` key to exit edit mode and restore the unchanged cell content.
* Use the [`closeEdit`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#closeedit) method.

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#closeedit) method in spreadsheet.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/editing-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/editing-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/editing-cs1" %}

## Limitations

* Text overflow in cells is not supported in Editing.

## Note

You can refer to our [Vue Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/vue/#/tailwind3/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
