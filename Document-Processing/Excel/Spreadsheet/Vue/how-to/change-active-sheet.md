---
layout: post
title: Changing the active sheet while importing a file in the Vue Spreadsheet component | Syncfusion
description: Learn here all about changing the active sheet index while importing a file in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

## Changing the active sheet while importing a file in Vue Spreadsheet component

You can change the active sheet of imported file by updating [`activeSheetIndex`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#activesheetindex) property on the [`openComplete`](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#opencomplete) event.

The following code example shows how to set the active sheet when importing an Excel file.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/change-active-sheet-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/change-active-sheet-cs1" %}