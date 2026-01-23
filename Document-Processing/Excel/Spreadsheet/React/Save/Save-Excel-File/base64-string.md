---
layout: post
title: Save to Base64 in React Spreadsheet component | Syncfusion
description: Learn here all about how to Save an excel file to Base64 string data in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: base64
documentation: ug
---

# Save data as a Base64 string

In the Spreadsheet control, there is currently no direct option to save data as a `Base64` string. You can achieve this by saving the Spreadsheet data as blob data and then converting that saved blob data to a `Base64` string using `FileReader`. 

> You can get the Spreadsheet data as blob in the [saveComplete](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#savecomplete) event when you set the  `needBlobData` as **true** and `isFullPost` as **false** in the [beforeSave](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforesave) event.

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