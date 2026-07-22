---
layout: post
title: Freeze Pane in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Freeze Pane in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Freeze Pane
documentation: ug
---


# Freeze Panes in ASP.NET MVC Spreadsheet control

The Freeze Panes feature helps keep specific rows or columns visible while scrolling through the worksheet. Use the `frozenRows` and `frozenColumns` properties within the [`Sheet`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_Sheets) model to specify the number of rows and columns to freeze.

## Apply freeze panes through the UI

To apply freeze panes:

* Select the cell below the rows and to the right of the columns that you want to freeze.
* Open the **View** tab in the Ribbon.
* Select **Freeze Panes**.

You can also use the `freezePanes` method to apply freeze panes programmatically.

## Frozen Rows

Frozen rows remain visible while scrolling vertically through the rest of the worksheet. You can freeze rows in one of the following ways:

* Select a cell in the active worksheet, open the **View** tab in the Ribbon, and choose **Freeze Rows**.
* Set the `frozenRows` property in the `Sheet` model to specify the number of rows to freeze.

## Frozen Columns

Frozen columns remain visible while scrolling horizontally through the rest of the worksheet. You can freeze columns in one of the following ways:

* Select a cell in the active worksheet, open the **View** tab in the Ribbon, and choose **Freeze Columns**.
* Set the `frozenColumns` property in the `Sheet` model to specify the number of columns to freeze.

## Freeze rows and columns

In this example, the `frozenColumns` and `frozenRows` properties are both set to `2`. Therefore, the first two columns on the left and the first two rows at the top remain frozen while scrolling.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/freeze-pane/razor %}
{% endhighlight %}
{% highlight c# tabtitle="FreezePane.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/freeze-pane/freezePane.cs %}
{% endhighlight %}
{% endtabs %}

After running the sample, scroll vertically and horizontally to verify that the first two rows and the first two columns remain visible.

## Remove freeze panes

To remove the frozen rows and columns, open the **View** tab in the Ribbon and choose **Unfreeze Panes**.

## Limitations

Freeze Panes feature is not compatible with all the features which are available in the spreadsheet. Below features are not compatible with Freeze Panes feature.

* Cells cannot be merged across the boundary between the frozen and unfrozen areas.
* When images or charts extend from the frozen area into the unfrozen area, the portion in the unfrozen area does not move while scrolling.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)
