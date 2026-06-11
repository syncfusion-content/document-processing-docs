---
layout: post
title: Custom file menu in EJ2 ASP.NET Core Spreadsheet component | Syncfusion
description: Learn here how to customize the File menu in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Customize File Menu in EJ2 ASP.NET Core Spreadsheet

The Syncfusion ASP.NET Core Spreadsheet component lets you customize the File menu. You can hide file menu items, disable items, and add your own custom items with click actions. This helps you build a clear, task‑focused menu. You can perform the following file menu customization options in the spreadsheet

* Add File Menu Items
* Hide/Show File Menu Items
* Enable/Disable File Menu Items

## Add Custom File Menu Items

In the Syncfusion ASP.NET Core Spreadsheet component, you can add custom items to the File menu to include your custom actions. These items are inserted before or after a chosen built‑in File menu item by using the [addFileMenuItems](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#addfilemenuitems) method.

A custom item can have its own text, icon, and sub‑items, and its click action is handled in the [fileMenuItemSelect](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_FileMenuItemSelect) event, where the selected item is identified and the defined functionality is executed.

The following code sample shows how to add custom items in file menu:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/custom-filemenu-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="CustomFileMenuController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/custom-filemenu-cs1/CustomFileMenuController.cs %}
{% endhighlight %}
{% endtabs %}

## Show or Hide File Menu Items

You can show or hide File menu items using the [hideFileMenuItems](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#hidefilemenuitems) method in [fileMenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_FileMenuBeforeOpen) event.

The following code sample shows how to hide or show file menu items:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/show-or-hide-filemenu-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="ShowOrHideFileMenuController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/show-or-hide-filemenu-cs1/ShowOrHideFileMenuController.cs %}
{% endhighlight %}
{% endtabs %}

## Enable or Disable File Menu Items

You can use the [enableFileMenuItems](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#enablefilemenuitems) method in the [fileMenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_FileMenuBeforeOpen) event to enable or disable File menu items. If there are duplicate item texts, target the item by its unique ID and set the third parameter `isUniqueId` to `true`.

The following code sample shows how to enable or disable file menu items:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/enable-or-disable-filemenu-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="EnableOrDisableFileMenuController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/enable-or-disable-filemenu-cs1/EnableOrDisableFileMenuController.cs %}
{% endhighlight %}
{% endtabs %}

You can also use [fileMenuBeforeClose](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_FileMenuBeforeClose) when you need to run logic just before the File menu closes.