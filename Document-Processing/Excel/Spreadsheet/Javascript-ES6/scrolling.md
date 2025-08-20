---
layout: post
title: Scrolling in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Scrolling in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

Scrolling helps you to move quickly to different areas of the worksheet. It moves faster if we use horizontal and vertical scroll bars. Scrolling can be enabled by setting the [`allowScrolling`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#allowscrolling) as true.

{% elsif page.publishingplatform == "javascript" %}

Scrolling helps you to move quickly to different areas of the worksheet. It moves faster if we use horizontal and vertical scroll bars. Scrolling can be enabled by setting the [`allowScrolling`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#allowscrolling) as true.

{% endif %}


> By default, the `allowScrolling` property is true.

{% if page.publishingplatform == "typescript" %}
You have the following options in Scrolling by using [`scrollSettings`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#scrollsettings).
{% elsif page.publishingplatform == "javascript" %}
You have the following options in Scrolling by using [`scrollSettings`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#scrollsettings).
{% endif %}

* Finite scrolling.
* Virtual scrolling.

## Finite Scrolling

{% if page.publishingplatform == "typescript" %}

Finite scrolling supports two type of modes in scrolling. You can use the [`isFinite`](https://ej2.syncfusion.com/documentation/api/spreadsheet/scrollSettings/#isfinite) property in [`scrollSettings`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#scrollsettings) to specify the mode of scrolling.

* Finite - This mode does not create a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/documentation/api/spreadsheet/scrollSettings/#isfinite) property as `true`.

* Infinite - This mode creates a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/documentation/api/spreadsheet/scrollSettings/#isfinite) property as `false`.

{% elsif page.publishingplatform == "javascript" %}

Finite scrolling supports two type of modes in scrolling. You can use the [`isFinite`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/scrollsettings/#isfinite) property in [`scrollSettings`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#scrollsettings) to specify the mode of scrolling.

* Finite - This mode does not create a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/scrollsettings/#isfinite) property as `true`.

* Infinite - This mode creates a new row/column when the scrollbar reaches the end. This can be achieved by setting the [`isFinite`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/scrollsettings/#isfinite) property as `false`.

{% endif %}

> By Default, the `isFinite` property is `false`.

## Virtual Scrolling

* Virtual scrolling allows you to load data that you require (load data based on viewport size) without buffering the entire huge database. You can set the `enableVirtualization` property in `scrollSettings` as `true`.

In virtual scrolling `enableVirtualization` is set to true means, it allows you to load the spreadsheet data while scrolling.

> By Default, the `enableVirtualization` property is `true`.

**User Interface**:

You can scroll through the worksheet using one of the following ways,

* Using the `arrow` keys.
* Using the Horizontal and Vertical`scroll` bars.
* Using the `mouse` wheel.

## Finite scrolling with defined rows and columns

{% if page.publishingplatform == "typescript" %}

If you want to perform scrolling with defined rows and columns, you must define `rowCount` and `colCount` in the [`sheets`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#sheets) property and set `isFinite` as true and `enableVirtualization` as false in `scrollSettings`.

{% elsif page.publishingplatform == "javascript" %}

If you want to perform scrolling with defined rows and columns, you must define `rowCount` and `colCount` in the [`sheets`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#sheets) property and set `isFinite` as true and `enableVirtualization` as false in `scrollSettings`.

{% endif %}

The following code example shows the finite scrolling with defined rows and columns in the spreadsheet. Here, we used rowCount as 20 and colCount as 20, after reaching the 20th row or 20th column you can't able to scroll.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/scrolling-cs1" %}
{% endif %}