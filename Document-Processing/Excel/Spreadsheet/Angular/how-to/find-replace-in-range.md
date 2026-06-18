---
layout: post
title: Find and replace in Angular Spreadsheet component | Syncfusion
description: Learn here all about performing find and replace limited to the range in Syncfusion Angular Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Find and replace the text within selected range of cells

In Syncfusion Spreadsheet, the "Replace All" action by default searches and replaces a text throughout the entire sheet, regardless of the selected range. To limit "Replace All" to only the selected range, you can customize the addressCollection based on the selectedRange in the [actionBegin](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#actionbegin) event when the action is `beforeReplaceAll`.

The following sample demonstrates how to limit the "Replace All" operation to the currently selected range.

{% tabs %}
{% highlight js tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/find-and-replace-cs1/src/app.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/spreadsheet/angular/find-and-replace-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/find-and-replace-cs1" %}
