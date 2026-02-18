---
layout: post
title: Open from Blob in React Spreadsheet component | Syncfusion
description: Learn here all about how to Open an excel file from blob data in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: blob data
documentation: ug
---

# Open an excel file from blob data

By default, the Spreadsheet component provides an option to browse files from the local file system and open them within the component. If you want to open an Excel file from blob data, you need to fetch the blob data from the server or another source and convert this blob data into a `File` object. Then, you can use the [open](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) method in the Spreadsheet component to load that `File` object.

Please find the code to fetch the blob data and load it into the Spreadsheet component below.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-from-blobdata-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-from-blobdata-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/open-from-blobdata-cs1" %}