---
layout: post
title: Context Menu in Syncfusion JavaScript Spreadsheet Control | Syncfusion
description: Learn about the built-in context menu items and how to customize the context menu in the Syncfusion JavaScript Spreadsheet control.
platform: document-processing
control: Context Menu
documentation: ug
---

# Context Menu in Syncfusion JavaScript Spreadsheet Control

The context menu is a popup menu that improves user interaction with the Spreadsheet. It opens when you right-click a cell, column header, row header, or pager (sheet tab).

Use the [`enableContextMenu`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enablecontextmenu) property to enable or disable the context menu. The default value of `enableContextMenu` is `true`.
> The default value for the `enableContextMenu` property is `true`.

## Context Menu Items in Row Cell

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#cut) | Cut the selected cells data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#copy) | Copy the selected cells data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet.  `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#filter) | Perform filtering to the selected cells based on an active cell’s value. |
| [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#sort) | Perform sorting to the selected range of cells by ascending or descending. |
| [`Hyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hyperlink) | Create a link in the spreadsheet to navigate to web links or cell reference within the sheet or other sheets in the Spreadsheet. |

## Context Menu Items in Row Header and Column Header

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#cut) | Cut the selected row/column header data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#copy) | Copy the selected row/column header data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet. `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Insert Rows`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertrow) / [`Insert Columns`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#insertcolumn) | Insert new rows or columns into the worksheet. |
| [`Delete Rows`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#delete) / [`Delete Columns`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#delete) | Delete existing rows or columns from the worksheet. |
| [`Hide Rows`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hiderow) / [`Hide Columns`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hidecolumn) | Hide the rows or columns. |
| [`UnHide Rows`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hiderow) / [`UnHide Columns`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hidecolumn) | Show the hidden rows or columns. |

## Context Menu Items in Pager

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| [`Protect Sheet`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#protectsheet) | Prevent unwanted changes from others by limiting their ability to edit. |
| [`Hide`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hide) |Hide the selected worksheet. |
 
## Context Menu Customization

You can customize the context menu by performing the following actions:

- Add context menu items
- Remove context menu items
- Enable or disable context menu items

All customization methods are typically called inside the `contextmenuBeforeOpen` event so that the changes apply before the menu is shown.

### Add Context Menu Items

You can add the custom items in context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#addcontextmenuttems) in `contextmenuBeforeOpen` event

In this demo, Custom Item is added after the Paste item in the context menu.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/contextmenu/addContextMenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/contextmenu/addContextMenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/contextmenu/addContextMenu-cs1" %}

### Remove Context Menu Items

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#removecontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Insert Column item has been removed from the row/column header context menu.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/contextmenu/removeContextMenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/contextmenu/removeContextMenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/contextmenu/removeContextMenu-cs1" %}

### Enable or Disable Context Menu Items

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enablecontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Rename item is disabled in the pager context menu.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/contextmenu/enableContextMenuItems-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/contextmenu/enableContextMenuItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/contextmenu/enableContextMenuItems-cs1" %}

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
