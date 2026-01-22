---
layout: post
title: Open from Blob in JavaScript (ES6) Spreadsheet Editor | Syncfusion
description: Learn here all about how to Open an excel file from blob data in javascript(ES6) Spreadsheet editor of Syncfusion Essential JS 2 and more.
platform: document-processing
control: blob data
documentation: ug
---

# Open an excel file from blob data

By default, the Spreadsheet control provides an option to browse files from the local file system and open them within the control. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a `File` object. Then, you can use the [open](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#open) method in the Spreadsheet control to load that `File` object.

Please find the code to fetch the blob data and load it into the Spreadsheet control below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/open-from-blobdata-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/open-from-blobdata-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/open-from-blobdata-cs1" %}