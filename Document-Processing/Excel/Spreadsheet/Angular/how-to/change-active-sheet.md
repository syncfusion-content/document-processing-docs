---
layout: post
title: How to Change Active Sheet in Angular Spreadsheet | Syncfusion
description: Change the active sheet index when importing a workbook in Syncfusion®  Angular Spreadsheet to display the required worksheet by default.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# How to Change Active Sheet When Importing in Angular Spreadsheet

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