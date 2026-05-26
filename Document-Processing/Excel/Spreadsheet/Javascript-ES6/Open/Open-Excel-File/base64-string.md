---
layout: post
title: Open from Base64 in JavaScript (ES6) Spreadsheet Editor | Syncfusion
description: Learn here all about how to Open an excel file from Base64 string data in javascript(ES6) Spreadsheet editor of Syncfusion Essential JS 2 and more.
platform: document-processing
control: base64
documentation: ug
---

# Open an excel file from Base64 string data

In the Syncfusion<sup style="font-size:70%">&reg;</sup> Spreadsheet component, there is no direct option to open data as a `Base64` string. To achieve this, the `import()` function fetches the `Base64` string, converts it to a Blob, creates a File object from the Blob, and then opens it using the [open](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#open) method in the spreadsheet.

The following code example shows how to save the spreadsheet data as base64 string.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/base-64-string/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/base-64-string/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/base-64-string" %}