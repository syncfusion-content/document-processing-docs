---
layout: post
title: Find and replace the text within the selected range of cells in the React Spreadsheet component | Syncfusion
description: Learn here all about changing the active sheet index while importing a file in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Find and replace the text within the selected range of cells

What it does: Limits “Replace All” so replacements occur only inside the currently selected cells.

Select a cell range, open Find and Replace, enter Find/Replace values, then choose Replace All.

How it works: Intercepts the beforeReplaceAll action via [actionBegin](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin), reads getActiveSheet().selectedRange, expands it to cell addresses, and filters eventArgs.addressCollection to match only the selection.

Key APIs: actionBegin, getActiveSheet().selectedRange, eventArgs.addressCollection, and optional programmatic replace({ value, replaceValue, mode: 'Sheet', isCSen, isEMatch }).

Only cells in your selection are processed; all others are excluded before the replace runs.

The following code example shows how to find and replace the text within the selected range of cells

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/find-and-replace-cs1" %}