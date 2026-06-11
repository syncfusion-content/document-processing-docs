---
layout: post
title: Undo redo in React Spreadsheet component | Syncfusion
description: Learn here all about Undo redo in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Undo redo 
platform: document-processing
documentation: ug
---

# Undo redo in React Spreadsheet component

`Undo` option helps you to undone the last action performed and `Redo` option helps you to do the same action which is reverted in the Spreadsheet. You can use the [`allowUndoRedo`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#allowundoredo) property to enable or disable undo redo functionality in spreadsheet.

> * The default value for `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into Spreadsheet to perform undo redo.

## Undo

It reverses the last action you performed with Spreadsheet. Undo can be done by any of the following ways:

* Select the undo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Z` keyboard shortcut to perform the undo.
* Use the [`undo`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#undo) method programmatically.

## Redo

It reverses the last undo action you performed with Spreadsheet. Redo can be done by any of the following ways:

* Select the redo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Y` keyboard shortcut to perform the redo.
* Use the [`redo`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#redo) method programmatically.

## Update custom actions in UndoRedo collection

You can update your own custom actions in UndoRedo collection, by using the [`updateUndoRedoCollection`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#updateundoredocollection) method. And also customize the undo redo operations of your custom action by using `actionComplete` event.

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