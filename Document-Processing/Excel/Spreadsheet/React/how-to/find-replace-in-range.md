---
layout: post
title: Find and replace in range — React Spreadsheet | Syncfusion
description: Short guide to perform Find & Replace limited to the current selection in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Find and replace the text within the selected range of cells

It explains how you can limit the Find and Replace action so it works only inside the cells that the user has selected.

When the user clicks Replace All, the Spreadsheet normally searches the whole sheet. To avoid that, the action is checked before it runs. During this check, the selected range in the active sheet is read and expanded into individual cell addresses.

The list of cells that the Replace All action plans to update is then filtered, keeping only the addresses that fall inside the selected range. With this, Replace All updates only the cells the user has selected and nothing outside that area.

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