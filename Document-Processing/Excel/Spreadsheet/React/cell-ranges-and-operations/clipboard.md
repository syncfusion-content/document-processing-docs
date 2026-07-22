---
layout: post
title: Clipboard in React Spreadsheet component | Syncfusion
description: Learn here all about Clipboard in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: document-processing
documentation: ug
---

# Clipboard Operations in React Spreadsheet component

The Spreadsheet provides support for the clipboard operations (cut, copy, and paste). Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#enableclipboard) property in Spreadsheet.

> By default, the `enableClipboard` property is true.

## Cut

It is used to cut the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
* Using the [`cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#cut) method.

## Copy

It is used to copy the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
* Using the [`copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#copy) method.

## Paste

It is used to paste the clipboard data to the selected range, rows or columns. You have the following options in Paste,

* `Paste Special` - You can paste the values with formatting.
* `Paste` - You can paste only the values without formatting.

The Spreadsheet also supports external clipboard operations. If you perform cut and paste, the clipboard data will be cleared, while with copy and paste the clipboard contents are maintained. If you paste inside the copied range, the clipboard data will be cleared.

**User Interface**:

Paste can be done in one of the following ways.

* Using Paste button in the Ribbon’s HOME tab to perform paste operation.
* Using Paste option in the Context Menu.
* Using `Ctrl + V` | `Command + V` keyboard shortcut.
* Using the [`paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#paste) method.

> If you use the Keyboard shortcut key for cut (`Ctrl + X`) / copy (`Ctrl + C`) from other sources, you should use `Ctrl + V` shortcut while pasting into the spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/clipboard-cs1" %}

## Prevent the paste functionality

The following example shows how to prevent the paste action in the spreadsheet. In the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#actionbegin) event, you can set the `cancel` argument to `true` for the paste request type.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/clipboard-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/clipboard-cs2" %}

## Limitations

- External clipboard is not fully supported while copying data from another source and pasting into a spreadsheet, it only works with basic supports (Values, Number, cell, and Text formatting).
- If you copy `=SUM(A2,B2)` and paste it, the formula reference will change depending on the pasted cell address. However, nested formulas are not supported (the formula reference remains unchanged).
- Clipboard is not supported with conditional formatting (values only pasting).
- There is a limitation when copying the whole sheet data and pasting it into another sheet.
- Paste options in the Ribbon UI and context menu are not enabled when copying and pasting from an external source. External clipboard paste works only through the keyboard shortcut (`Ctrl + V`).

## Note

You can refer to our [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations.