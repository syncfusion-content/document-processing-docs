---
layout: post
title: Editing in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Editing in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Editing
documentation: ug
---


# Editing in Spreadsheet control

You can edit the contents of a cell directly in the cell or by typing in the formula bar. By default, the editing feature is enabled in the spreadsheet. Use the [`allowEditing`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowEditing) property to enable or disable the editing feature.

## Edit cell

You can start editing by one of the following ways,

* Double click a cell to start the edit mode.
* Press `F2` key to edit the active cell.
* Use formula bar to perform editing.
* Use `BACKSPACE` or `SPACE` key to clear the cell content and start the edit mode.
* Using the `startEdit` method.

## Save cell

If the cell is in editable state, you can save the edited cell by one of the following ways,

* Perform mouse click on any other cell rather than the current editing cell.
* Press `Enter` or `Tab` keys to save the edited cell content.
* Using the `endEdit` method.

## Cancel editing

To cancel the editing without saving the changes, you can use one of the following ways,

* Press `ESCAPE` key, this will remove the editable state and update the unchanged cell content.
* Using the `closeEdit` method.

The following sample shows how to prevent the editing and cell save. Here `E` column prevent the editing by using cancel argument as true in [`cellEdit`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_CellEdit) event. In `D` column, prevent saving the edited changes by using cancel argument as true in [`beforeCellSave`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_BeforeCellSave) and use `closeEdit` method in spreadsheet.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/editing/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="EditingController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/editing/editingController.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

* Text overflow in cells is not supported in Editing.

## See Also

* [Cell range](./cell-range)
* [Formatting](./formatting)
* [Hyperlink](./link)
* [Undo and Redo](./undo-redo)
* [Unlock the particular cells in the protected sheet](./protect-sheet#unlock-the-particular-cells-in-the-protected-sheet)
