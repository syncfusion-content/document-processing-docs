---
layout: post
title: Context menu in Vue Spreadsheet component | Syncfusion
description: Learn here all about Context menu in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Context menu 
platform: document-processing
documentation: ug
---

# Context menu in Vue Spreadsheet component

Context Menu is used to improve user interaction with Spreadsheet using the popup menu. This will open when right-clicking on Cell/Column Header/Row Header/ Pager in the Spreadsheet. You can use [`enableContextMenu`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#enablecontextmenu) property to enable/disable context menu.

> The default value for the `enableContextMenu` property is `true`.

## Context Menu Items in Row Cell

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#cut) | Cut the selected cells data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#copy) | Copy the selected cells data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet.  `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Filter`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#filter) | Perform filtering to the selected cells based on an active cell’s value. |
| [`Sort`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#sort) | Perform sorting to the selected range of cells by ascending or descending. |
| [`Hyperlink`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hyperlink) | Create a link in the spreadsheet to navigate to web links or cell reference within the sheet or other sheets in the Spreadsheet. |

## Context Menu Items in Row Header / Column Header

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#cut) | Cut the selected row/column header data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#copy) | Copy the selected row/column header data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet. `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Insert Rows`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#insertrow) / [`Insert Columns`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#insertcolumn) | Insert new rows or columns into the worksheet. |
| [`Delete Rows`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#delete) / [`Delete Columns`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#delete) | Delete existing rows or columns from the worksheet. |
| [`Hide Rows`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hiderow) / [`Hide Columns`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hidecolumn) | Hide the rows or columns. |
| [`UnHide Rows`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hiderow) / [`UnHide Columns`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hidecolumn) | Show the hidden rows or columns. |

## Context Menu Items in Pager

Please find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| [`Protect Sheet`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#protectsheet) | Prevent unwanted changes from others by limiting their ability to edit. |
| [`Hide`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#hide) |Hide the selected worksheet. |

## Context Menu Customization

You can perform the following context menu customization options in the spreadsheet

* Add Context Menu Items
* Remove Context Menu Items
* Enable/Disable Context Menu Items

### Add Context Menu Items

You can add the custom items in context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addcontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Custom Item is added after the Paste item in the context menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs1" %}

### Remove Context Menu Items

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#removecontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Insert Column item has been removed from the row/column header context menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs2" %}

### Enable/Disable Context Menu Items

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#enablecontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Rename item is disabled in the pager context menu.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/contextmenu/addContextMenu-cs3" %}

## Note

You can refer to our [Vue Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/vue-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [Vue Spreadsheet example](https://document.syncfusion.com/demos/spreadsheet-editor/vue/#/tailwind3/spreadsheet/default.html) to knows how to present and manipulate data.

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)