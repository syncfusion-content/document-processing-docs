---
layout: post
title: Change active sheet in EJ2 TypeScript Spreadsheet control | Syncfusion
description: Learn here all about changing active sheet index when import a file in Syncfusion EJ2 TypeScript Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet 
documentation: ug
---

# Changing the active sheet in EJ2 TypeScript Spreadsheet control

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://helpej2.syncfusion.com/documentation/api/spreadsheet/#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/change-active-sheet-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/change-active-sheet-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/change-active-sheet-cs1" %}
