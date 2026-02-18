---
layout: post
title: Save as Blob in React Spreadsheet component | Syncfusion
description: Learn here all about Save an excel file as blob data in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: blob data
documentation: ug
---

# Save an excel file as blob data

By default, the Spreadsheet control saves the Excel file and downloads it to the local file system. If you want to save an Excel file as blob data, you need to set `needBlobData` property to **true** and `isFullPost` property to **false** in the [beforeSave](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave) event of the spreadsheet. Subsequently, you will receive the spreadsheet data as a blob in the [saveComplete](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#savecomplete) event. You can then post the blob data to the server endpoint for saving.

Please find below the code to retrieve blob data from the Spreadsheet control below.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/save-as-blobdata-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/save-as-blobdata-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/save-as-blobdata-cs1" %}