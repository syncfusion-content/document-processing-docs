---
layout: post
title: Open from Base64 in React Spreadsheet component | Syncfusion
description: Learn here all about how to Open an excel file from Base64 string data in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: base64
documentation: ug
---

# Open an excel file from Base64 string data

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet component, there is no direct option to open data as a `Base64` string. To achieve this, the `import()` function fetches the `Base64` string, converts it to a Blob, creates a File object from the Blob, and then opens it using the [open](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method in the spreadsheet.

The following code example shows how to open the spreadsheet data as base64 string.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/base-64-string/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/base-64-string/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/base-64-string" %}
