---
layout: post
title: Find and replace the text within the selected range of cells in the React Spreadsheet component | Syncfusion
description: Learn here all about changing the active sheet index while importing a file in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Find and replace the text within the selected range of cells

This guide explains how to limit the “Replace All” operation so that replacements occur only within the currently selected range of cells in the Syncfusion React Spreadsheet component.

How it works: Intercepts the beforeReplaceAll action via [actionBegin](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin), reads getActiveSheet().selectedRange, expands it to cell addresses, and filters eventArgs.addressCollection to match only the selection.

### Use Case

You want to ensure that the Find and Replace feature only updates cells inside the user’s current selection, rather than the entire worksheet.

### Steps
Select the desired cell range in the Spreadsheet.
Open the Find and Replace dialog.
Enter the text to find and the replacement text.
Click Replace All. Only cells within the selected range will be updated.

### Implementation Details
The Spreadsheet’s actionBegin event is used to intercept the Replace All action.
The selected range is determined using getActiveSheet().selectedRange.
The event argument addressCollection is filtered to include only addresses within the selection.
Only the selected cells are processed for replacement.

### Key APIs

- actionBegin
- getActiveSheet().selectedRange
- eventArgs.addressCollection

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