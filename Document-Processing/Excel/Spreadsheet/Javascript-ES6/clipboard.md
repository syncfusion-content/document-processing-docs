---
layout: post
title: Clipboard in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about Clipboard in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Clipboard 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Clipboard in ##Platform_Name## Spreadsheet control

{% if page.publishingplatform == "typescript" %}

The Spreadsheet provides support for the clipboard operations (cut, copy, and paste). Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#enableclipboard) property in Spreadsheet.

{% elsif page.publishingplatform == "javascript" %}

The Spreadsheet provides support for the clipboard operations (cut, copy, and paste). Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#enableclipboard) property in Spreadsheet.
{% endif %}
 
> By default, the `enableClipboard` property is true.

## Cut

It is used to cut the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
{% if page.publishingplatform == "typescript" %}

* Using the [`cut`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#cut) method.

{% elsif page.publishingplatform == "javascript" %}

* Using the [`cut`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#cut) method.

{% endif %}
 
## Copy

It is used to copy the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
{% if page.publishingplatform == "typescript" %}

* Using the [`copy`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#copy) method.

{% elsif page.publishingplatform == "javascript" %}

* Using the [`copy`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#copy) method.

{% endif %}

## Paste

It is used to paste the clipboard data to the selected range, rows or columns. You have the following options in Paste,

* `Paste Special` - You can paste the values with formatting.
* `Paste` - You can paste only the values without formatting.

It also performs for external clipboard operation. If you perform cut and paste, clipboard data will be cleared, whereas in copy and paste the clipboard contents will be maintained. If you perform paste inside the copied range, the clipboard data will be cleared.

**User Interface**:

Paste can be done in one of the following ways.

* Using Paste button in the Ribbon’s HOME tab to perform paste operation.
* Using Paste option in the Context Menu.
* Using `Ctrl + V` | `Command + V` keyboard shortcut.
{% if page.publishingplatform == "typescript" %}

* Using the [`paste`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#paste) method.

{% elsif page.publishingplatform == "javascript" %}

* Using the [`paste`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#paste) method.

{% endif %}

> If you use the Keyboard shortcut key for cut (`Ctrl + X`) | copy (`Ctrl + C`) from other sources, you should use `Ctrl + V` shortcut while pasting into the spreadsheet.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/clipboard-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/clipboard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/clipboard-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/clipboard-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/clipboard-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/clipboard-cs1" %}
{% endif %}

## Prevent the paste functionality

{% if page.publishingplatform == "typescript" %}

The following example shows, how to prevent the paste action in spreadsheet. In [`actionBegin`](https://ej2.syncfusion.com/documentation/api/spreadsheet/#actionbegin) event, you can set `cancel` argument as false in paste request type.

{% elsif page.publishingplatform == "javascript" %}

The following example shows, how to prevent the paste action in spreadsheet. In [`actionBegin`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#actionbegin) event, you can set `cancel` argument as false in paste request type.

{% endif %}

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/clipboard-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/clipboard-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/clipboard-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/clipboard-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/clipboard-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/clipboard-cs2" %}
{% endif %}

## Limitations

* External clipboard is not fully supported while copying data from another source and pasting into a spreadsheet, it only works with basic supports (Values, Number, cell, and Text formatting).
* If you copy =SUM(A2,B2) and paste, the formula reference will change depending on the pasted cell address but we don't have support for nested formula(formula reference will be same).
* Clipboard is not supported with conditional formatting (values only pasting).
* We have limitation while copying the whole sheet data and pasting it into another sheet.