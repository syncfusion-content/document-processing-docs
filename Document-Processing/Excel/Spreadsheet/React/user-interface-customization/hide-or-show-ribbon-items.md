---
layout: post
title: Hide or show ribbon tabs and toolbar items in the React Spreadsheet component | Syncfusion
description: Learn here how to hide or show ribbon tabs and items to simplify the interface in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Hide or Show Ribbon Items

The Syncfusion React Spreadsheet component allows you to hide or show ribbon tabs and toolbar items. This helps you create a simple and clean user interface by showing only the tools that are needed.

You can hide any ribbon tab by using the [hideRibbonTabs](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hideribbontabs) method. You can hide toolbar items using the [hideToolbarItems](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#hidetoolbaritems) method, where the items are hidden based on their index in the tab.

The following code sample shows how to hide or show ribbon items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/show-or-hide-ribbon-items-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/show-or-hide-ribbon-items-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/show-or-hide-ribbon-items-cs1" %}