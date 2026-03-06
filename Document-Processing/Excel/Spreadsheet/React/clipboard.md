---
layout: post
title: Clipboard in React Spreadsheet component | Syncfusion
description: Learn here all about Clipboard in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Clipboard 
platform: document-processing
documentation: ug
---

# Clipboard in React Spreadsheet component

The Spreadsheet provides support for the clipboard operations (cut, copy, and paste). Clipboard operations can be enabled or disabled by setting the [`enableClipboard`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#enableclipboard) property in Spreadsheet.

> By default, the `enableClipboard` property is true.

## Cut

It is used to cut the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Cut can be done in one of the following ways.

* Using Cut button in the Ribbon’s HOME tab to perform cut operation.
* Using Cut option in the Context Menu.
* Using `Ctrl + X` | `Command + X` keyboard shortcut.
* Using the [`cut`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#cut) method.

## Copy

It is used to copy the data from selected range of cells, rows or columns in a spreadsheet and make it available in the clipboard.

**User Interface**:

Copy can be done in one of the following ways.

* Using Copy button in the Ribbon’s HOME tab to perform copy operation.
* Using Copy option in the Context Menu.
* Using `Ctrl + C` | `Command + C` keyboard shortcut.
* Using the [`copy`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#copy) method.

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
* Using the [`paste`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#paste) method.

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

The following example shows, how to prevent the paste action in spreadsheet. In [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#actionbegin) event, you can set `cancel` argument as false in paste request type.

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

- **External clipboard:** Copying from external sources (web pages, other apps) only supports basic content — values, numbers, plain text and simple cell formatting. Rich HTML, images, embedded objects, and complex formatting are not preserved.
- **Formulas:** Formulas such as `=SUM(A2,B2)` update their cell references relative to the paste location. Copying nested or workbook-scoped formulas may not preserve references correctly when pasted across different sheets or workbooks.
- **Conditional formatting:** Clipboard operations do not preserve conditional formatting rules; only values (or basic formats via Paste Special) are applied.
- **Whole-sheet copy/paste:** Copying an entire sheet and pasting into another sheet has limitations and may not retain some sheet-level settings (for example, named ranges, certain sheet-level formats, or merged regions).
- **Merged cells:** Cut/copy/paste operations that involve merged cells may behave inconsistently or be restricted.
- **Data validation and charts:** Pasting into cells with data validation or chart sources may not preserve validation rules or linked chart data.
- **Browser/Platform clipboard restrictions:** Browser or OS security restrictions can limit programmatic clipboard access; keyboard shortcuts (`Ctrl+C`, `Ctrl+V`) are more reliable in some environments.

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor) to knows how to present and manipulate data.