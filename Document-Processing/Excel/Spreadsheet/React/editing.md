---
layout: post
title: Editing in React Spreadsheet component | Syncfusion
description: Learn here all about Editing in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Editing 
platform: document-processing
documentation: ug
---

# Editing in React Spreadsheet component

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowediting) property to enable or disable the editing feature.

To get start quickly with Editing, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=o3hsPhqaZzY" %}

## Edit cell

You can start editing by one of the following ways,

* Double click a cell to start the edit mode.
* Press `F2` key to edit the active cell.
* Use formula bar to perform editing.
* Use `BACKSPACE` or `SPACE` key to clear the cell content and start the edit mode.
* Using the [`startEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#startedit) method.

## Save cell

If the cell is in editable state, you can save the edited cell by one of the following ways,

* Perform mouse click on any other cell rather than the current editing cell.
* Press `Enter` or `Tab` keys to save the edited cell content.
* Using the [`endEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#endedit) method.

## Cancel editing

To cancel the editing without saving the changes, you can use one of the following ways,

* Press `ESCAPE` key, this will remove the editable state and update the unchanged cell content.
* Using the [`closeEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#closeedit) method.

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#celledit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#beforecellsave) and use [`closeEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#closeedit) method in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/editing-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/editing-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/editing-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/editing-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/editing-cs1" %}

## Events triggered during cell editing

When a cell is edited manually—such as by **double-clicking the cell**, **pressing the F2 key**, or **modifying it through the formula bar**—the spreadsheet triggers a series of events. These events allow users to monitor and manage the entire editing process, from initiation to completion.

The sequence of events during manual cell editing is:
> cellEdit → cellEditing → actionBegin → beforeCellUpdate → beforeCellSave → cellSave / cellEdited → actionComplete

The table below lists each event and its role in the editing process:

| Event             | Description                                                                            |
|------------------------|---------------------------------------------------------------------------------------------|
| [`cellEdit`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledit)          | Triggers before the cell enters edit mode.                                                 |
| [`cellEditing`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellediting)      | Triggers while editing is in progress; fires for each change made to the cell content.     |
| [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin)       | Triggers when the edit action starts.                                                      |
| [`beforeCellUpdate`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellupdate)  | Triggers before any cell property (style, value, formula, etc.) is modified.               |
| [`beforeCellSave`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellsave)    | Triggers before the cell value is saved.                                                   |
| [`cellSave` ](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#cellsave)         | Triggers when the cell value is saved.                                                     |
| [`cellEdited`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#celledited)        | Triggers after the editing process completes.                                              |
| [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete)    | Triggers once the entire edit operation is completed.                                      |

The following code example showcases the events triggered during cell edting in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/editing-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/editing-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/editing-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/editing-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/editing-cs2" %}

## Limitations

* Text overflow in cells is not supported in Editing.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
