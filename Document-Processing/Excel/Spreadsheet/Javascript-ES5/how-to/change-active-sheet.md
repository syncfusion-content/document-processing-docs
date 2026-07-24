---
layout: post
title: Change the active sheet in the EJ2 JavaScript Spreadsheet control | Syncfusion
description: Learn how to change the active sheet index when importing a file in the Syncfusion EJ2 JavaScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Changing the active sheet in the EJ2 JavaScript Spreadsheet control

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet#activesheetindex) property on the [`openComplete`](https://helpej2.syncfusion.com/javascript/documentation/api/spreadsheet#opencomplete) event.


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
