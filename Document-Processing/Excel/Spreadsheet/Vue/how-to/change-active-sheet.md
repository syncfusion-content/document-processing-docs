---
layout: post
title: How to Change Active Sheet in Vue Spreadsheet | Syncfusion
description: Change the active sheet index when importing a workbook in Syncfusion Vue Spreadsheet to display the required worksheet by default.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Change Active Sheet in Vue Spreadsheet

You can change the active sheet of the imported file by updating the [`activeSheetIndex`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/change-active-sheet-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/change-active-sheet-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/change-active-sheet-cs1" %}