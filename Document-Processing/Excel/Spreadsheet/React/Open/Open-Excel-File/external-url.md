---
layout: post
title: Open from URL in React Spreadsheet component | Syncfusion
description: Learn here all about Open an external URL excel file while initial load in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
platform: document-processing
control: external url
documentation: ug
---

# Open an external URL excel file while initial load

You can achieve to access the remote Excel file by using the [`created`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#created) event. In this event you can fetch the Excel file and convert it to a blob. Convert this blob to a file and [`open`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#open) this file by using Spreadsheet component open method.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/open-save-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/open-save-cs2" %}