---
layout: post
title: How to Find and Replace in a Range in React Spreadsheet | Syncfusion
description: Learn how to perform find and replace operations within a selected cell range in the Syncfusion React Spreadsheet component.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Find and Replace in a Range in React Spreadsheet

In Spreadsheet, the "Replace All" action by default searches and replaces a text throughout the entire sheet, regardless of the selected range. To limit "Replace All" to only the selected range, you can customize the addressCollection based on the selectedRange in the [actionBegin](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#actionbegin) event when the action is `beforeReplaceAll`.

The following sample demonstrates how to limit the "Replace All" operation to the currently selected range.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/find-and-replace-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/find-and-replace-cs1" %}
