---
layout: post
title: How to customize the right‑click context menu with custom actions in the React Spreadsheet component | Syncfusion
description: Learn here how to customize the context menu by adding or hiding items in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Customize Context Menu

The Syncfusion React Spreadsheet component provides an easy way to customize the context menu.

You can add custom menu items, hide default items, or change what happens when a user selects a menu option. This giving access to useful actions.

You can perform the following context menu customization options in the spreadsheet

* Add Context Menu Items
* Remove Context Menu Items
* Enable/Disable Context Menu Items

### Add Context Menu Items

You can add the custom items in context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#addcontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Custom Item is added after the Paste item in the context menu.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/context-menu-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/context-menu-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/context-menu-cs1" %}

### Remove Context Menu Items

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#removecontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Insert Column item has been removed from the row/column header context menu.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/context-menu-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/context-menu-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/context-menu-cs2" %}

### Enable/Disable Context Menu Items

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#enablecontextmenuitems) in `contextmenuBeforeOpen` event

In this demo, Rename item is disabled in the pager context menu.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/context-menu-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/context-menu-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/react/context-menu-cs3" %}