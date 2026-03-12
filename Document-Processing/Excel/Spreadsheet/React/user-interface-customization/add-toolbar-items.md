---
layout: post
title: How to add new toolbar items in the React Spreadsheet component | Syncfusion
description: Learn here how to add custom toolbar items in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Add Toolbar Items

Our Syncfusion React Spreadsheet component allows you to extend the Ribbon by adding your own toolbar items. These items can perform custom actions or run your own functions helping you build a flexible toolbar.

To add these items, the component provides the [addToolbarItems](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addtoolbaritems) method, which lets you insert new tools into a chosen tab. This makes it simple to include your own actions.

You can add items to an existing tab or you can include them as part of a new Ribbon tab.

The following code sample shows how to add toolbar items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/add-toolbar-items-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/add-toolbar-items-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/add-toolbar-items-cs1" %}