---
layout: post
title: How to Change Active Sheet on Import in React Spreadsheet | Syncfusion
description: Learn how to change the active sheet while importing a workbook in the Syncfusion React Spreadsheet component.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Change Active Sheet While Importing a File in React Spreadsheet

You can change the active sheet of the imported file by updating the [`activeSheetIndex`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/change-active-sheet-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/change-active-sheet-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/change-active-sheet-cs1" %}
