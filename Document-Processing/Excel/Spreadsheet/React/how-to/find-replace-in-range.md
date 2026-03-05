---
layout: post
title: Find and replace in range — React Spreadsheet | Syncfusion
description: Short guide to perform Find & Replace limited to the current selection in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Find and replace the text within the selected range of cells

In Syncfusion Spreadsheet, the "Replace all" action normally searches the entire sheet and does not consider the user's selected range. The sample below shows how you can prevent the Replace all operation to entire sheet, so it updates only the cells inside the selected range.

The selected range is captured during the [actionBegin](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#actionbegin) event. This range is then expanded into individual cell addresses. The cell value is replaced only if it falls within this selected range.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/find-and-replace-cs1" %}