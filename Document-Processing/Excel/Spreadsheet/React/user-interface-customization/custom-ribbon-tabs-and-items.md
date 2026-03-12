---
layout: post
title: Create custom ribbon tabs and items in the React Spreadsheet component | Syncfusion
description: Learn here how to create new ribbon tabs and items to organize custom tools in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Custom Ribbon Tabs and Custom Items

The Syncfusion React Spreadsheet component lets you create your own ribbon tabs and add custom items inside them.

You can create a new tab using the [addRibbonTabs](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addribbontabs) method. With this, you can create a separate tab where you place the actions and features that you want. You can also add custom items inside these tabs. Each item can run your own functionality, allowing you to perform any action you need.

The following code sample shows how to create custom ribbon tabs and groups.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/custom-tab-and-item-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/custom-tab-and-item-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/custom-tab-and-item-cs1" %}