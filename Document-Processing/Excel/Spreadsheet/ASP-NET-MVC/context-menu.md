---
layout: post
title: Context Menu in EJ2 ASP.NET MVC Syncfusion Spreadsheet Component
description: Learn here all about Context Menu in Syncfusion EJ2 ASP.NET MVC Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Context Menu
documentation: ug
---


# Context Menu in ASP.NET MVC Spreadsheet control

The context menu provides quick access to Spreadsheet operations through a popup menu. It opens when a user right-clicks a cell, row header, column header, or worksheet tab. Use the [enableContextMenu](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_EnableContextMenu) property to enable or disable the context menu.

N> The default value of the `enableContextMenu` property is `true`.

## Context Menu Items in Row Cell

Find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Cut` | Cut the selected cell data to the clipboard so that it can be pasted to another location. |
| `Copy` | Copy the selected cell data to the clipboard so that it can be pasted to another location. |
| `Paste` | Paste the clipboard data into the selected cells. |
| `Paste Special` | `Values` - Paste the data values from clipboard to spreadsheet.  `Formats` - Paste the data formats from clipboard to spreadsheet. |
| `Filter` | Perform filtering to the selected cells based on an active cell’s value. |
| `Sort` | Perform sorting to the selected range of cells by ascending or descending. |
| `Hyperlink` | Create a link in the spreadsheet to navigate to web links or cell reference within the sheet or other sheets in the Spreadsheet. |

## Context Menu Items in Row Header / Column Header

Find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Cut` | Cut the selected row or column data to the clipboard so that it can be pasted to another location. |
| `Copy` | Copy the selected row or column data to the clipboard so that it can be pasted to another location. |
| `Paste` | Paste the clipboard data into the selected rows or columns. |
| `Paste Special` | `Values` - Paste the data values from clipboard to spreadsheet. `Formats` - Paste the data formats from clipboard to spreadsheet. |
| `Insert Rows`/`Insert Columns` | Insert new rows or columns into the worksheet. |
| `Delete Rows`/`Delete Columns` | Delete existing rows or columns from the worksheet. |
| `Hide Rows`/`Hide Columns` | Hide the selected rows or columns. |
| `Unhide Rows`/`Unhide Columns` | Show the hidden rows or columns. |

## Context Menu Items in Pager

Find the table below for default context menu items and their actions.

| Context Menu items | Action |
|-------|---------|
| `Insert` | Insert a new worksheet in front of an existing worksheet in the spreadsheet. |
| `Delete` | Delete the selected worksheet from the spreadsheet. |
| `Rename` | Rename the selected worksheet. |
| `Protect Sheet` | Prevent unwanted changes from others by limiting their ability to edit. |
| `Hide` | Hide the selected worksheet. |

## Context Menu Customization

You can perform the following context menu customization options in the spreadsheet

* Add Context Menu Items
* Remove Context Menu Items
* Enable/Disable Context Menu Items

### Add Context Menu Items

Use the `addContextMenuItems` method in the `contextmenuBeforeOpen` event to add custom items to the context menu.

In this example, a custom item is added after the **Paste** item. After running the sample, right-click a cell and verify that the custom item appears in the context menu.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/add-context-menu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="AddContextMenu.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/add-context-menu/addContextMenu.cs %}
{% endhighlight %}
{% endtabs %}



### Remove Context Menu Items

Use the `removeContextMenuItems` method in the `contextmenuBeforeOpen` event to remove items from the context menu.

In this example, the **Insert Column** item is removed from the row or column header context menu. After running the sample, right-click a row or column header and verify that the item is not displayed.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/remove-context-menu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="RemoveContextMenu.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/remove-context-menu/removeContextMenu.cs %}
{% endhighlight %}
{% endtabs %}



### Enable/Disable Context Menu Items

Use the `enableContextMenuItems` method in the `contextmenuBeforeOpen` event to enable or disable context menu items.

In this example, the **Rename** item is disabled in the pager context menu. After running the sample, right-click a worksheet tab and verify that the **Rename** item is disabled.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/enable-context-menu/razor %}
{% endhighlight %}
{% highlight c# tabtitle="EnableContextMenu.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/enable-context-menu/enableContextMenu.cs %}
{% endhighlight %}
{% endtabs %}



## See Also

* [Worksheet](./worksheet)
* [Rows and columns](./rows-and-columns)
