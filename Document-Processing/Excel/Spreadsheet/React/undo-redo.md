---
layout: post
title: Undo redo in React Spreadsheet component | Syncfusion
description: Learn here all about Undo redo in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Undo redo 
platform: document-processing
documentation: ug
---

# Undo redo in React Spreadsheet component

The Undo and Redo functionality allows you to reverse or restore actions performed in the Spreadsheet. `Undo` reverses the last action you performed, while `Redo` restores an action that was previously undone. This feature is essential for efficient data entry and editing, allowing users to experiment with changes without lose of work.

You can enable or disable undo redo functionality using the [`allowUndoRedo`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#allowundoredo) property.

> * The default value for `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into Spreadsheet to perform undo redo.

## Supported Operations in Undo/Redo

The following operations are automatically recorded and can be undone/redone:

| Operation | Explanation |
|-----------|------------|
| `Cell Edits` | • Restores values, formulas, and formatting to previous state<br>• Preserves cell dependencies and references<br>• Reverts wrapping and hyperlink changes |
| `Copy/Paste` | • Undoes pasted content including ranges, images, and shapes<br>• Restores original cell state before paste<br>• Maintains external metadata and clipboard history |
| `Insert/Delete` | • Restores deleted rows, columns, or sheets<br>• Re-applies or removes insertions<br>• Automatically updates all affected references |
| `Hide/Show` | • Toggles visibility state back to previous condition<br>• Restores hidden/visible row or column layout |
| `Resize` | • Reverts row height and column width to original dimensions<br>• Restores layout and visual alignment |
| `Merge/Unmerge` | • Restores merged cell state or unmerges previously merged cells<br>• Preserves cell content and formatting |
| `Autofill` | • Reverts generated data series to original cells<br>• Restores conditional formatting variants |
| `Sort` | • Restores original row order after sort<br>• Maintains data integrity for multi-row sorts<br>• Preserves cell references and dependencies |
| `Notes/Comments` | • Removes added notes or restores deleted comments<br>• Reverts comment edits to previous text |
| `Conditional Formatting` | • Removes applied rules or restores deleted rules<br>• Reverts condition modifications |
| `Data Validation` | • Removes validation rules or restores deleted rules<br>• Reverts validation criteria changes |
| `Charts & Images` | • Removes inserted charts or images<br>• Restores deleted charts or images<br>• Reverts anchor position and properties |

## Undo

It reverses the last action you performed with Spreadsheet. Undo can be done by any of the following ways:

* Select the undo item from **HOME** tab in Ribbon toolbar.
* Use `Ctrl + Z` keyboard shortcut to perform the undo.
* Use the [`undo`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#undo) method programmatically.

## Redo

It reverses the last undo action you performed with Spreadsheet. Redo can be done by any of the following ways:

* Select the redo item from **HOME** tab in Ribbon toolbar.
* Use `Ctrl + Y` keyboard shortcut to perform the redo.
* Use the [`redo`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#redo) method programmatically.

## Update custom actions in UndoRedo collection

You can update your own custom actions in UndoRedo collection, by using the [`updateUndoRedoCollection`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#updateundoredocollection) method. And also customize the undo redo operations of your custom action by using `actionComplete` event.

The following code example shows `How to update and customize your own actions for undo redo` functionality in the Spreadsheet control.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/undo-redo-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/undo-redo-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/undo-redo-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/undo-redo-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/undo-redo-cs1" %}

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Hyperlink](./link)