---
layout: post
title: Find and replace in range — React Spreadsheet | Syncfusion
description: Short guide to perform Find & Replace limited to the current selection in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Find and replace the text within the selected range of cells

You can limit Replace All so it only updates the cells inside the selected range. When the action runs, the selected range is expanded into individual cell addresses and compared with the cells returned by Replace All.

Intercepts the beforeReplaceAll action via [actionBegin](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin), reads selectedRange, expands it to cell addresses, and filters addressCollection to match only the selection.

The following code example shows how to find and replace the text within the selected range of cells:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/find-and-replace-cs1" %}