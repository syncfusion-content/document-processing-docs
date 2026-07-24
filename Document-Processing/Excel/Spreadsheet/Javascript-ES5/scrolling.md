---
layout: post
title: Scrolling in EJ2 JavaScript Spreadsheet Control | Syncfusion
description: Learn here all about Scrolling in Syncfusion EJ2 JavaScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Scrolling
documentation: ug
---

# Scrolling in EJ2 JavaScript Spreadsheet control

Scrolling helps you move quickly to different areas of the worksheet. Movement is faster when you use the horizontal and vertical scroll bars. You can enable scrolling by setting the [`allowScrolling`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#allowscrolling) property to `true`.

> The default value for `allowScrolling` property is `true`.

The [`scrollSettings`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#scrollsettings) property provides the following scrolling options:

* Finite scrolling.
* Virtual scrolling.

## Finite Scrolling

The Finite scrolling option supports two types of modes. You can use the [`isFinite`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/scrollsettings#isfinite) property in [`scrollSettings`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#scrollsettings) to specify the mode of scrolling.

* Finite - This mode does not create a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/scrollsettings#isfinite) property to `true`.

* Infinite - This mode creates a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/scrollsettings#isfinite) property to `false`.

> By default, the `isFinite` property is `false`.

## Virtual Scrolling

* Virtual scrolling allows you to load data on demand (based on the viewport size) without buffering the entire large dataset. You can enable virtual scrolling by setting the `enableVirtualization` property in `scrollSettings` to `true`.

When `enableVirtualization` is set to `true`, the spreadsheet loads data while you scroll.

> By default, the `enableVirtualization` property is `true`.

**User Interface**:

You can scroll through the worksheet using one of the following ways:

* Using the `arrow` keys.
* Using the Horizontal and Vertical`scroll` bars.
* Using the `mouse` wheel.

## Finite Scrolling with Defined Rows and Columns

If you want to perform scrolling with defined rows and columns, you must define `rowCount` and `colCount` in the [`sheets`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#sheets) property and set `isFinite` as true and `enableVirtualization` as false in `scrollSettings`.

The following code example shows finite scrolling with defined rows and columns in the spreadsheet. Here, `rowCount` is set to 20 and `colCount` is set to 20. After reaching the 20th row or 20th column, you cannot scroll further.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/scrolling-cs1" %}