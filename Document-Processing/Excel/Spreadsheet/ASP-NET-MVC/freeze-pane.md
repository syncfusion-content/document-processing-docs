---
layout: post
title: Freeze Pane in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Freeze Pane in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Freeze Pane
documentation: ug
---


# FreezePanes in Spreadsheet control

Freeze Panes helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using the `frozenRows` and `frozenColumns` properties inside the [`Sheet`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_Sheets) property.

## Apply freezepanes on UI

**User Interface**:

In the active spreadsheet, click the cell where you want to create freeze panes. Freeze panes can be done in any of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the `freezePanes` method programmatically.

## FrozenRows

It allows you to keep a certain number of rows visible while scrolling vertically through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen rows. Frozen rows can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Rows` item.
* You can specify the number of frozen rows using the `frozenRows` property inside the `Sheet` property.

## FrozenColumns

It allows you to keep a certain number of columns visible while scrolling horizontally through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen columns. Frozen columns can be done in any one of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Columns` item.
* You can specify the number of frozen columns using the `frozenColumns` property inside the `Sheet` property.

In this demo, the frozenColumns is set as ‘2’, and the frozenRows is set as ‘2’. Hence, the two columns on the left and the top two rows are frozen.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/excel/spreadsheet/asp-net-mvc/freeze-pane/razor %}
{% endhighlight %}
{% highlight c# tabtitle="FreezePane.cs" %}
{% include code-snippet/excel/spreadsheet/asp-net-mvc/freeze-pane/freezePane.cs %}
{% endhighlight %}
{% endtabs %}



## Limitations

Freeze Panes feature is not compatible with all the features which are available in the spreadsheet. Below features are not compatible with Freeze Panes feature.

* Merging the cells between freeze and unfreeze area.
* If images and charts are added inside the freeze area cells, their portion in the unfreeze area will not move when scrolling.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)
