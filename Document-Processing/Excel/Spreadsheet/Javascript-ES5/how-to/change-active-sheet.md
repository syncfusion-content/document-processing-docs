---
layout: post
title: How to Change Active Sheet in JavaScript Spreadsheet | Syncfusion
description: Change the active sheet index when importing a workbook in JavaScript Spreadsheet to display the required worksheet by default.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# How to Change Active Sheet in JavaScript Spreadsheet

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#opencomplete) event.


The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/javascript-es5/change-active-sheet-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es5/change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es5/change-active-sheet-cs1" %}
