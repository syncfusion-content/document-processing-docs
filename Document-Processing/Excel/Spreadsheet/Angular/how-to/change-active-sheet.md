---
layout: post
title: Change active sheet when importing Angular Spreadsheet | Syncfusion
description: Learn here all about changing the active sheet index while importing a file in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more. 
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Change active sheet when importing Angular Spreadsheet

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/angular/documentation/api/spreadsheet/index-default#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/change-active-sheet-cs1/src/app.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/change-active-sheet-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "/document-processing/samples/spreadsheet/angular/change-active-sheet-cs1" %}