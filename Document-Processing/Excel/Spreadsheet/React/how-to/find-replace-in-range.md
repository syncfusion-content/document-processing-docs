---
layout: post
title: Find and replace text in the selected range — React Spreadsheet | Syncfusion
description: Short guide to perform Find & Replace limited to the current selection in the React Spreadsheet.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Find and replace the text within the selected range of cells

Limit the Replace All operation to the user’s current selection by intercepting the Replace action (`actionBegin`) and filtering `eventArgs.addressCollection` using `getActiveSheet().selectedRange`. This ensures only addresses inside the selected range are updated.

This guide explains how to limit the “Replace All” operation so that replacements occur only within the currently selected range of cells in the Syncfusion React Spreadsheet component.

Intercepts the beforeReplaceAll action via [actionBegin](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin), reads getActiveSheet().selectedRange, expands it to cell addresses, and filters eventArgs.addressCollection to match only the selection.

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