---
layout: post
title: Undo Redo in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Undo Redo in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Undo Redo
documentation: ug
---


# Undo and Redo in Spreadsheet control

`Undo` option helps you to undone the last action performed and `Redo` option helps you to do the same action which is reverted in the Spreadsheet. You can use the [`allowUndoRedo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowUndoRedo) property to enable or disable undo redo functionality in spreadsheet.

N> * The default value for `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into Spreadsheet to perform undo redo.

## Undo

It reverses the last action you performed with Spreadsheet. Undo can be done by any of the following ways:

* Select the undo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Z` keyboard shortcut to perform the undo.
* Use the `undo` method programmatically.

## Redo

It reverses the last undo action you performed with Spreadsheet. Redo can be done by any of the following ways:

* Select the redo item from HOME tab in Ribbon toolbar.
* Use `Ctrl + Y` keyboard shortcut to perform the redo.
* Use the `redo` method programmatically.

## Update custom actions in UndoRedo collection

You can update your own custom actions in UndoRedo collection, by using the `updateUndoRedoCollection` method. And also customize the undo redo operations of your custom action by using `actionComplete` event.

The following code example shows `How to update and customize your own actions for undo redo` functionality in the Spreadsheet control.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/undo-redo/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="UndoRedoController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/undo-redo/undoRedoController.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Hyperlink](./link)