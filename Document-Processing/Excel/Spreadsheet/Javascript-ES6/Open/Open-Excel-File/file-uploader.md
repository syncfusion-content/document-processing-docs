---
layout: post
title: Open from Uploader in JavaScript (ES6) Spreadsheet Editor | Syncfusion
description: Learn here all about Open an excel file using a file uploader in javascript(ES6) Spreadsheet editor of Syncfusion Essential JS 2 and more.
platform: document-processing
control:  file uploader
documentation: ug
---

# Open an excel file using a file uploader

If you explore your machine to select and upload an excel document using the file uploader, you will receive the uploaded document as a raw file in the [success](https://ej2.syncfusion.com/documentation/api/uploader/index-default#success) event of the file uploader. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#open) method to see the appropriate output.
 
{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/import-using-uploader/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/import-using-uploader/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/import-using-uploader" %}