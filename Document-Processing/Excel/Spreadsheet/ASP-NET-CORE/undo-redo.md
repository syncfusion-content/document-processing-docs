---
layout: post
title: Undo Redo in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Undo Redo in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Undo Redo
documentation: ug
---


# Undo and Redo in ASP.NET Core Spreadsheet control

The `Undo` option reverses the last action performed in the Spreadsheet. The `Redo` option reapplies the most recently undone action. Use the [`allowUndoRedo`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowUndoRedo) property to enable or disable undo and redo functionality in the Spreadsheet.

N> * The default value of the `allowUndoRedo` property is `true`.

By default, the `UndoRedo` module is injected internally into the Spreadsheet to perform Undo and Redo operations.

## Undo

Undo reverses the last action performed in the Spreadsheet. You can perform an undo operation in one of the following ways:

* Open the **Home** tab in the Ribbon and choose **Undo**.
* Press `Ctrl + Z`.
* Use the `undo()` method programmatically.

## Redo

Redo reapplies the action that was most recently undone in the Spreadsheet. You can perform a Redo operation in one of the following ways:

* Open the **Home** tab in the Ribbon and choose **Redo**.
* Press `Ctrl + Y`.
* Use the `redo()` method programmatically.

## Update custom actions in the UndoRedo collection

Use the `updateUndoRedoCollection()` method to add or update custom actions in the `UndoRedo` collection. Use the `actionComplete` event to customize the Undo and Redo behavior of those actions.

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