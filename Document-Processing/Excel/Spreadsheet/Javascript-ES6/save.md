---
layout: post
title: Save in EJ2 TypeScript Spreadsheet control | Syncfusion
description: Learn here all about Save in Syncfusion EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Save 
documentation: ug
---

# Save in EJ2 TypeScript Spreadsheet control

The Spreadsheet control saves its data, style, format, and more as Excel file document. To enable this feature, set [`allowSave`](../api/spreadsheet/#allowsave) to `true` and assign service url to the [`saveUrl`](../api/spreadsheet/#saveurl) property.

The following list of Excel file formats are supported in Spreadsheet:

* MS Excel (.xlsx)
* MS Excel 97-2003 (.xls)
* Comma Separated Values (.csv)

## User Interface

In user interface, you can save Spreadsheet data as Excel document by clicking `File > Save As` menu item in ribbon.

The following code example shows `Save` option in the Spreadsheet control.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/save-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/save-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/save-cs2" %}

> * Use `Ctrl + S` keyboard shortcut to save the Spreadsheet data as Excel file.
> * The default value of [allowSave](../api/spreadsheet/#allowsave) property is `true`. For demonstration purpose, we have showcased the [allowSave](../api/spreadsheet/#allowsave) property in previous code snippet.