---
layout: post
title: Context menu item in EJ2 ASP.NET Core Spreadsheet component | Syncfusion
description: Learn here how to customize the context menu by adding or hiding items in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Customize Context Menu

The Syncfusion EJ2 ASP.NET Core Spreadsheet component provides an easy way to customize the context menu. You can add custom menu items, hide default items, or change what happens when a user selects a menu option. This giving access to useful actions. You can perform the following context menu customization options in the spreadsheet

* Add Context Menu Items
* Remove Context Menu Items
* Enable/Disable Context Menu Items

## Add Context Menu Items

You can add custom items to the context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#addcontextmenuitems) event. Since multiple context menus are available, to identify which context menu opened, you can use the[contextmenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ContextMenuBeforeOpen) event and access the menu's class name from its event arguments. For more information, refer to this guide: https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/how-to/identify-the-context-menu-opened

You can use the [contextmenuItemSelect](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ContextMenuItemSelect) event to handle when a context menu item is chosen. This event is triggered when the user selects a menu item and provides the selected item's details and the target element in its event arguments; handle it to prevent default function or adding custom functions to the context menu item.

The following code sample shows how to handle custom actions in the `contextmenuItemSelect` event.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/context-menu-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ContextMenuController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/context-menu-cs1/ContextMenuController.cs %}
{% endhighlight %}
{% endtabs %}

## Remove Context Menu Items

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#removecontextmenuitems) in `contextmenuBeforeOpen` event

The following code sample removes the Insert Column item from the row/column header context menu.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/context-menu-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ContextMenuController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/context-menu-cs2/ContextMenuController.cs %}
{% endhighlight %}
{% endtabs %}

## Enable/Disable Context Menu Items

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#enablecontextmenuitems) in `contextmenuBeforeOpen` event

The following code sample disables the Rename item in the pager context menu.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/context-menu-cs3/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ContextMenuController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/context-menu-cs3/ContextMenuController.cs %}
{% endhighlight %}
{% endtabs %}