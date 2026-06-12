---
layout: post
title: UI Customization in EJ2 ASP.NET Core Spreadsheet Control | Syncfusion
description: Learn here how to customize and manage the user interface in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# User Interface Customization

The Syncfusion ASP.NET Core Spreadsheet component provides options to customize the user interface and control the behavior of its UI components.

You can control the ribbon tabs, toolbar items, context menu, and overall appearance. Use these options to show, hide, or modify UI elements and attach custom behavior.

## Create Custom Ribbon Tabs and Items

The Syncfusion ASP.NET Core Spreadsheet component lets you create your own ribbon tabs and add custom items inside them.

You can create a new tab using the [addRibbonTabs](https://ej2.syncfusion.com/javascript
/documentation/api/spreadsheet/index-default#addribbontabs) method. With this, you can create a separate tab where you place the actions and features that you want. You can also add custom items inside these tabs. Each item can run your own functionality, allowing you to perform any action you need.

The following code sample shows how to create custom ribbon tabs and groups.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/custom-tab-and-item-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Add Toolbar Items

The Syncfusion ASP.NET Core Spreadsheet component allows you to extend the Ribbon by adding custom toolbar items. You can make Toolbar items to execute custom actions.

To add these items, the component provides the [addToolbarItems](https://ej2.syncfusion.com/javascript
/documentation/api/spreadsheet/index-default#addtoolbaritems) method, which lets you insert new tools into a chosen tab. This makes it simple to include your own actions. You can add items to an existing tab or you can include them as part of a new Ribbon tab.

Additionally, you can enhance the visual appearance of ribbon items by adding icons to the custom toolbar items using prefixIcon and suffixIcon properties of [ToolbarItemModel](https://ej2.syncfusion.com/javascript/documentation/api/toolbar/itemmodel). This helps users quickly identify and access the features they need.

The following code sample shows how to add toolbar items.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/add-toolbar-items-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Hide or Show Ribbon Tabs and Items

The Syncfusion ASP.NET Core Spreadsheet component allows you to hide or show ribbon tabs and toolbar items. This helps you create a simple and clean user interface by showing only the tools that are needed.

You can hide any ribbon tab by using the [hideRibbonTabs](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#hideribbontabs) method. You can hide toolbar items using the [hideToolbarItems](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#hidetoolbaritems) method, where the items are hidden based on their index in the tab.

The following code sample shows how to hide or show ribbon items.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/show-or-hide-ribbon-items-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}

## Enable or Disable Ribbon Tabs and Items

The Syncfusion ASP.NET Core Spreadsheet component lets you enable or disable ribbon tabs and toolbar items when needed. You can enable or disable ribbon tabs by using the [enableRibbonTabs](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#enableribbontabs) method. To enable or disable specific toolbar items inside a ribbon tab, use the [enableToolbarItems](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#enabletoolbaritems) method.
These methods accept an array of ribbon tab names or toolbar item IDs along with a boolean value. Set the value to true to enable or false to disable the items.

The following code sample shows how to enable or disable a ribbon tab and toolbar items.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/enable-or-disable-ribbon-items-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}
