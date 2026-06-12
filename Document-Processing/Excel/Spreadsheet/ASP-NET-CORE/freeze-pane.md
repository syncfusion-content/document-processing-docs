---
layout: post
title: Freeze Pane in EJ2 ASP.NET Core Syncfusion Spreadsheet Component
description: Learn here all about Freeze Pane in Syncfusion EJ2 ASP.NET CORE Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Freeze Pane
documentation: ug
---


# FreezePanes in ASP.NET Core Spreadsheet control

**Freeze Panes** helps you keep specific rows or columns visible while scrolling through the sheet content. This makes it easier to work with large spreadsheets without losing track of important headers or labels.  

You can set the number of frozen rows and columns using the [`frozenRows`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Sheet.html#Syncfusion_EJ2_Spreadsheet_Sheet_FrozenRows) and [`frozenColumns`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Sheet.html#Syncfusion_EJ2_Spreadsheet_Sheet_FrozenColumns) properties inside the [`Sheet`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Sheet.html) property.

To quickly get started with Freeze Panes in ASP.NET Core Spreadsheet, you can check out this video tutorial:

{% youtube "https://www.youtube.com/watch?v=TX4P6gFymwo" %}

## Apply freeze panes on UI

**User Interface**:

In the active spreadsheet, click the cell where you want to create freeze panes. Freeze panes can be done in any of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the [`freezePanes`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#freezepanes) method programmatically.

## FrozenRows

It allows you to keep a certain number of rows visible while scrolling vertically through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen rows. Frozen rows can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Rows` item.
* You can specify the number of frozen rows using the `frozenRows` property inside the `Sheet` property.

## FrozenColumns

It allows you to keep a certain number of columns visible while scrolling horizontally through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, you can freeze columns by selecting the cell where you want them to remain visible. Frozen columns can be applied in the following ways:

* Go to the **View** tab in the Ribbon toolbar and choose the **Freeze Columns** option.  
* Set the number of frozen columns using the [`frozenColumns`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Sheet.html#Syncfusion_EJ2_Spreadsheet_Sheet_FrozenColumns) property inside the [Sheet](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Sheet.html) property.  

In this demo, `frozenColumns` is set to **2** and `frozenRows` is set to **2**. As a result, the first two columns on the left and the top two rows remain frozen while scrolling.


{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/freeze-pane/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="FreezePane.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/freeze-pane/freezePane.cs %}
{% endhighlight %}
{% endtabs %}

## Limitations

Here, we have listed out the limitations with Freeze Panes feature.

* Merging cells between the freeze and unfreeze areas is not supported.
* If images and charts are added inside the freeze area cells, their portion in the unfreeze area will not move when scrolling.

## Note

You can refer to our [ASP.NET Core Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [ASP.NET Core Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/asp-net-core-spreadsheet-editor) to knows how to present and manipulate data.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)
