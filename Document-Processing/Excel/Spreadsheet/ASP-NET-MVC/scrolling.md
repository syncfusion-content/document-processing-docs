---
layout: post
title: Scrolling in EJ2 ASP.NET MVC Syncfusion Spreadsheet Control
description: Learn here all about Scrolling in Syncfusion EJ2 ASP.NET MVC Spreadsheet Control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Scrolling
documentation: ug
---


# Scrolling in ASP.NET MVC Spreadsheet Control

Scrolling allows you to navigate quickly to different areas of a worksheet using the horizontal and vertical scrollbars. Set the [`allowScrolling`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_AllowScrolling) property to `true` to enable scrolling in the Spreadsheet.

N> The default value of the `allowScrolling` property is `true`.

You have the following options in Scrolling by using [`scrollSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ScrollSettings).

The following table lists the scrolling options available in `scrollSettings`:

| Property | Type | Default value | Description |
|----------|------|---------------|-------------|
| `isFinite` | `boolean` | `false` | Specifies whether scrolling is restricted to the defined rows and columns. |
| `enableVirtualization` | `boolean` | `true` | Specifies whether rows and columns are rendered dynamically based on the viewport. |

## Scroll through a worksheet

You can scroll through a worksheet in one of the following ways:

* Use the arrow keys.
* Use the horizontal and vertical scrollbars.
* Use the mouse wheel.

## Finite Scrolling

The `isFinite` property in [`scrollSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ScrollSettings) supports the following scrolling modes:

* **Finite mode**: Set `isFinite` to `true` to restrict scrolling to the defined rows and columns.
* **Infinite mode**: Set `isFinite` to `false` to allow scrolling beyond the initially defined rows and columns.

N> The default value of the `isFinite` property is `false`.

## Virtual Scrolling

Virtual scrolling renders rows and columns dynamically based on the viewport instead of rendering the entire dataset at once. Set the `enableVirtualization` property in `scrollSettings` to `true` to enable virtual scrolling.

When virtualization is enabled, the Spreadsheet loads and renders additional data while scrolling.

N> The default value of the `enableVirtualization` property is `true`.

## Finite scrolling with defined rows and columns

To restrict scrolling to a fixed number of rows and columns, define the `rowCount` and `colCount` properties in the [sheet model](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_Sheets), set `isFinite` to `true`, and set `enableVirtualization` to `false` in `scrollSettings`.

The following example demonstrates finite scrolling with a fixed sheet size. The `rowCount` and `colCount` properties are both set to `20`; therefore, scrolling is restricted to the twentieth row and twentieth column.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/scrolling/razor %}
{% endhighlight %}
{% highlight c# tabtitle="ScrollingController.cs" %}
{% include code-snippet/spreadsheet/asp-net-mvc/scrolling/scrollingController.cs %}
{% endhighlight %}
{% endtabs %}

