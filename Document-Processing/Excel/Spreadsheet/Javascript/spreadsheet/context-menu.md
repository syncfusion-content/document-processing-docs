---
layout: post
title: Context menu in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Context menu in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Context menu 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Context menu in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

Context Menu is used to improve user interaction with Spreadsheet using the popup menu. This will open when right-clicking on Cell/Column Header/Row Header/ Pager in the Spreadsheet. You can use [`enableContextMenu`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#enablecontextmenu) property to enable/disable context menu.

{% elsif page.publishingplatform == "javascript" %}

Context Menu is used to improve user interaction with Spreadsheet using the popup menu. This will open when right-clicking on Cell/Column Header/Row Header/ Pager in the Spreadsheet. You can use [`enableContextMenu`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enablecontextmenu) property to enable/disable context menu.

{% endif %}

> The default value for the `enableContextMenu` property is `true`.

## Context Menu Items in Row Cell

Please find the table below for default context menu items and their actions.

{% if page.publishingplatform == "typescript" %}

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#cut) | Cut the selected cells data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#copy) | Copy the selected cells data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet.  `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Filter`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#filter) | Perform filtering to the selected cells based on an active cell’s value. |
| [`Sort`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#sort) | Perform sorting to the selected range of cells by ascending or descending. |
| [`Hyperlink`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#hyperlink) | Create a link in the spreadsheet to navigate to web links or cell reference within the sheet or other sheets in the Spreadsheet. |

{% elsif page.publishingplatform == "javascript" %}

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#cut) | Cut the selected cells data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#copy) | Copy the selected cells data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet.  `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Filter`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#filter) | Perform filtering to the selected cells based on an active cell’s value. |
| [`Sort`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#sort) | Perform sorting to the selected range of cells by ascending or descending. |
| [`Hyperlink`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hyperlink) | Create a link in the spreadsheet to navigate to web links or cell reference within the sheet or other sheets in the Spreadsheet. |

{% endif %}
 
## Context Menu Items in Row Header / Column Header

Please find the table below for default context menu items and their actions.

{% if page.publishingplatform == "typescript" %}

| Context Menu items | Action |
|-------|---------|
| [`Cut`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#cut) | Cut the selected row/column header data to the clipboard, you can select a cell where you want to move the data. |
| [`Copy`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#copy) | Copy the selected row/column header data to the clipboard, so that you can paste it to somewhere else. |
| [`Paste`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#paste) | Paste the data from clipboard to spreadsheet. |
| [`Paste Special`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#paste) | `Values` - Paste the data values from clipboard to spreadsheet. `Formats` - Paste the data formats from clipboard to spreadsheet. |
| [`Insert Rows`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#insertrow) / [`Insert Columns`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#insertcolumn) | Insert new rows or columns into the worksheet. |
| [`Delete Rows`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#delete) / [`Delete Columns`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#delete) | Delete existing rows or columns from the worksheet. |
| [`Hide Rows`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#hiderow) / [`Hide Columns`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#hidecolumn) | Hide the rows or columns. |
| [`UnHide Rows`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#hiderow) / [`UnHide Columns`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#hidecolumn) | Show the hidden rows or columns. |

{% elsif page.publishingplatform == "javascript" %}

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

{% endif %}

## Context Menu Items in Pager

Please find the table below for default context menu items and their actions.

{% if page.publishingplatform == "typescript" %}

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| [`Protect Sheet`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#protectsheet) | Prevent unwanted changes from others by limiting their ability to edit. |
| [`Hide`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#hide) |Hide the selected worksheet. |

{% elsif page.publishingplatform == "javascript" %}

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| [`Protect Sheet`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#protectsheet) | Prevent unwanted changes from others by limiting their ability to edit. |
| [`Hide`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#hide) |Hide the selected worksheet. |

{% endif %}
 
## Context Menu Customization

You can perform the following context menu customization options in the spreadsheet

* Add Context Menu Items
* Remove Context Menu Items
* Enable/Disable Context Menu Items

### Add Context Menu Items

{% if page.publishingplatform == "typescript" %}

You can add the custom items in context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#addcontextmenuttems) in `contextmenuBeforeOpen` event

{% elsif page.publishingplatform == "javascript" %}

You can add the custom items in context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#addcontextmenuttems) in `contextmenuBeforeOpen` event

{% endif %}

In this demo, Custom Item is added after the Paste item in the context menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/contextmenu/addContextMenu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/contextmenu/addContextMenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/contextmenu/addContextMenu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/contextmenu/addContextMenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/contextmenu/addContextMenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/contextmenu/addContextMenu-cs1" %}
{% endif %}

### Remove Context Menu Items

{% if page.publishingplatform == "typescript" %}

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#removecontextmenuitems) in `contextmenuBeforeOpen` event

{% elsif page.publishingplatform == "javascript" %}

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#removecontextmenuitems) in `contextmenuBeforeOpen` event

{% endif %}

In this demo, Insert Column item has been removed from the row/column header context menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/contextmenu/removeContextMenu-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/contextmenu/removeContextMenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/contextmenu/removeContextMenu-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/contextmenu/removeContextMenu-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/contextmenu/removeContextMenu-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/contextmenu/removeContextMenu-cs1" %}
{% endif %}

### Enable/Disable Context Menu Items

{% if page.publishingplatform == "typescript" %}

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#enablecontextmenuitems) in `contextmenuBeforeOpen` event

{% elsif page.publishingplatform == "javascript" %}

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enablecontextmenuitems) in `contextmenuBeforeOpen` event

{% endif %}

In this demo, Rename item is disabled in the pager context menu.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/contextmenu/enableContextMenuItems-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/contextmenu/enableContextMenuItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/contextmenu/enableContextMenuItems-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/contextmenu/enableContextMenuItems-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/contextmenu/enableContextMenuItems-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/contextmenu/enableContextMenuItems-cs1" %}
{% endif %}

## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
