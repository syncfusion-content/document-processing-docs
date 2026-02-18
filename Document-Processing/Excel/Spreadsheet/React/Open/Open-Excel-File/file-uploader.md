---
layout: post
title: Open from Uploader in React Spreadsheet component | Syncfusion
description: Learn here all about Open an excel file using a file uploader in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control:  file uploader
documentation: ug
---

# Open an excel file using a file uploader

If you explore your machine to select and upload an Excel document using the file uploader, you will receive the uploaded document as a raw file in the [success](https://ej2.syncfusion.com/react/documentation/api/uploader/index-default#success) event of the file uploader. In this `success` event, you should pass the received raw file as an argument to the Spreadsheet's [open](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method to see the appropriate output.

The following code example shows how to import an Excel document using file uploader in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs9/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs9/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs9" %}