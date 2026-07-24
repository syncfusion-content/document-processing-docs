---
layout: post
title: Undo redo in EJ2 JavaScript Spreadsheet control | Syncfusion
description: Learn here all about Undo redo in Syncfusion EJ2 JavaScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Undo redo
documentation: ug
---

# Undo redo in EJ2 JavaScript Spreadsheet control

`Undo` option helps you to undone the last action performed and `Redo` option helps you to do the same action which is reverted in the Spreadsheet. You can use the [`allowUndoRedo`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowundoredo) property to enable or disable undo redo functionality in spreadsheet.

> The default value for `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into the Spreadsheet to perform undo redo.

## Undo

`Undo` reverses the last action you performed in the Spreadsheet. You can perform an undo in any of the following ways:

* Select the Undo item from the **HOME** tab in the Ribbon toolbar.
* Use the `Ctrl + Z` (Windows/Linux) or `Cmd + Z` (macOS) keyboard shortcut.
* Invoke the [`undo`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#undo) method programmatically.

## Redo

It reverses the last undo action you performed with Spreadsheet. Redo can be done by any of the following ways:

* Select the Redo item from the `HOME` tab in the Ribbon toolbar.
* Use the `Ctrl + Y` (Windows/Linux) or `Cmd + Y` (macOS) keyboard shortcut.
* Invoke the [`redo`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#redo) method programmatically.

To confirm redo is working, perform an undo, then press `Ctrl + Y` and verify the previously undone change is reapplied.

## Updating custom actions in the UndoRedo collection

You can register your own custom actions in the UndoRedo collection using the [`updateUndoRedoCollection`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#updateundoredocollection) method. You can also customize the undo/redo behavior of your custom action by using the `actionComplete` event.

The following code example shows `How to update and customize your own actions for undo redo` functionality in the Spreadsheet control.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/undo-redo-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/undo-redo-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/undo-redo-cs1" %}

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Hyperlink](./link)