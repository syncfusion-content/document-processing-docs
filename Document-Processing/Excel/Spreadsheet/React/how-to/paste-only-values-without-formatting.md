---
layout: post
title: How to Paste Without Formatting in React Spreadsheet | Syncfusion
description: Learn how to paste values without formatting in the Syncfusion React Spreadsheet component during copy and paste operations.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Paste Without Formatting in React Spreadsheet

In the [React Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/react-spreadsheet-editor), you can make the paste action insert only the raw values into the cells, without bringing any formatting or styles from the copied content. This can be done by using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actionbegin) event, where the Spreadsheet provides the details of the action being performed. When the action is a clipboard operation, you can set the paste type to Values, ensuring that only plain values are pasted into the sheet.

The following example shows how to paste values without formatting.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/paste-values-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/paste-values-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/react/paste-values-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/react/paste-values-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/paste-values-cs1" %}
