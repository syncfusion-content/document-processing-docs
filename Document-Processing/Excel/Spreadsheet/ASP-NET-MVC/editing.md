---
layout: post
title: Editing in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Editing in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Editing
documentation: ug
---


# Editing in Spreadsheet control

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowEditing) property to enable or disable the editing feature.

## Edit cell

You can start editing in one of the following ways:

* Double-click a cell to enter edit mode.
* Press the `F2` key to edit the active cell.
* Use the formula bar to edit the cell content.
* Press the `Backspace` or `Space` key to clear the cell content and enter edit mode.
* Use the `startEdit` method to programmatically start editing the active cell.

## Save cell

When a cell is in an editable state, you can save the edited content in one of the following ways:

* Click any cell other than the cell being edited.
* Press the `Enter` or `Tab` key to save the edited cell content.
* Use the `endEdit` method to programmatically save the edited cell content.

## Cancel editing

You can cancel editing without saving the changes in one of the following ways:

* Press the `Esc` key to exit edit mode and restore the original cell content.
* Use the `closeEdit` method to programmatically cancel editing without saving the changes.

## Prevent editing and cell saving

The following example demonstrates how to prevent cell editing and cell saving. Editing is prevented in column E by setting the `cancel` argument to `true` in the [`cellEdit`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_CellEdit) event. Saving edited changes is prevented in column D by setting the `cancel` argument to `true` in the `beforeCellSave` event and using the `closeEdit` method.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/editing/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EditingController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/editing/editingController.cs %}
{% endhighlight %}
{% endtabs %}

After running the sample, verify that cells in column E cannot enter edit mode and that edited changes in column D are not saved.


## Limitations

* Text overflow in cells is not supported while editing.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
