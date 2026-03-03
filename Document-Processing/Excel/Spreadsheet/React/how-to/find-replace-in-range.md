---
layout: post
title: Find and replace in range — React Spreadsheet | Syncfusion
description: Short guide to perform Find & Replace limited to the current selection in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Find and replace the text within the selected range of cells

In the Syncfusion Spreadsheet, you can limit the Replace All action so that it updates only the cells inside the user’s selected range. When the replace operation begins, the selection is read and converted into individual cell addresses. During the beforeReplaceAll action, the list of cells targeted by Replace All is filtered so only the addresses inside the selected ranges are collected by generateCellCollection method.

The following sample shows how the selected range is expanded, compared with address collection, and updated so that Replace All applies only the chosen cells in the active sheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/find-and-replace-cs1" %}