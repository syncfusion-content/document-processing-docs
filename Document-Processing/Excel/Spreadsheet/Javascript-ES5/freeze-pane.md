---
layout: post
title: Freeze Panes in EJ2 Javascript Spreadsheet control | Syncfusion
description: Learn how to freeze rows and columns in Syncfusion EJ2 Javascript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Freeze Panes 
documentation: ug
---

# Freeze Panes in EJ2 Javascript Spreadsheet control

The Freeze Panes feature helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using the [`frozenRows`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#frozenrows) and [`frozenColumns`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#frozencolumns) properties inside the [`sheets`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#sheets) property of the Spreadsheet.

> * The `frozenRows` and `frozenColumns` properties accept numeric values that represent the count of rows or columns to freeze.

## Apply freeze panes

In the active spreadsheet, select the cell where you want the freeze split to begin. The rows above and columns to the left of the selected cell will be frozen.

You can apply freeze panes in any of the following ways:

* Select the View tab in the Ribbon toolbar and choose the `Freeze Panes` item.
* Use the [`freezePanes`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#freezepanes) method programmatically.

## FrozenRows

It allows you to keep a certain number of rows visible while scrolling vertically through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen rows. Frozen rows can be done in any one of the following ways:

* On the Ribbon toolbar, select the **View** tab and then choose **Freeze Rows**.
* Set the `frozenRows` property inside the `sheets` property when configuring the Spreadsheet.

The following code example demonstrates how to configure `frozenRows` in the Spreadsheet.

## FrozenColumns

It allows you to keep a certain number of columns visible while scrolling horizontally through the rest of the worksheet.

**User Interface**:

In the active spreadsheet, select the cell where you want to create frozen columns. Frozen columns can be done in any one of the following ways:

* On the Ribbon toolbar, select the **View** tab and then choose **Freeze Columns**.
* Set the `frozenColumns` property inside the `sheets` property when configuring the Spreadsheet.

To freeze both rows and columns in a single configuration, set both properties on the same sheet, as shown in the following example. In this sample, `frozenColumns` is set to `2` and `frozenRows` is set to `2`. As a result, the two leftmost columns and the top two rows remain visible while scrolling.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/freezepane-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/freezepane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/freezepane-cs1" %}

## Unfreeze panes

To remove existing frozen rows and columns, use any of the following approaches:

* On the Ribbon toolbar, select the **View** tab and then choose **Unfreeze Panes**.
* Programmatically, set the `frozenRows` and `frozenColumns` properties to `0` in the `sheets` configuration, then re-render the Spreadsheet.

## Limitations

The following are known limitations of the Freeze Panes feature:

* **Merged cells across the freeze boundary**: Cells that are merged between the freeze and unfreeze areas are not supported.
* **Images and charts in the freeze area**: If images and charts are placed inside the freeze area cells, their portion that extends into the unfreeze area will not scroll with the surrounding content.

## See Also

* [Sorting](./sort)
* [Filtering](./filter)
* [Undo Redo](./undo-redo)