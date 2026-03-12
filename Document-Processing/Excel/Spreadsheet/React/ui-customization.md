---
layout: post
title: UI Customization in React Spreadsheet component | Syncfusion
description: Learn here how to customize and manage the user interface in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# User Interface Customization

The Syncfusion React Spreadsheet component provides options to customize the user interface and control the behavior of its UI components.

You can control the ribbon, toolbar items, tabs, context menu, and overall appearance. Use these options to show, hide, or modify UI elements, attach custom behavior, and surface application actions.

## Ribbon Tabs

The Spreadsheet Ribbon contains tabs such as Home, Insert, and Data, and each tab includes multiple items like buttons and dropdowns. You can add new tabs, create custom groups, add buttons or controls, and hide or show built‑in tabs and items. Use these to organize commands, expose actions, or integrate custom functionality into the Ribbon.

## Add Toolbar Items

The Syncfusion React Spreadsheet component allows you to extend the Ribbon by adding custom toolbar items. You can make Toolbar items to execute custom actions.

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

## Create Custom Ribbon Tabs and Items

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

## Hide or Show Ribbon Items

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