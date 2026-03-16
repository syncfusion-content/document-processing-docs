---
layout: post
title: Custom file menu in React Spreadsheet component | Syncfusion
description: Learn here how to customize the File menu in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Customize File Menu

The Syncfusion React Spreadsheet component lets you customize the File menu. You can hide file menu items, disable items, and add your own custom items with click actions. This helps you build a clear, task‑focused menu.

You can perform the following file menu customization options in the spreadsheet

* Add File Menu Items
* Hide/Show File Menu Items
* Enable/Disable Context Menu Items

## Add Custom File Menu Items

In the Syncfusion React Spreadsheet component, you can add custom items to the File menu to include your custom actions.

These items are inserted before or after a chosen built‑in File menu item by using the [addFileMenuItems](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#addfilemenuitems) method.

A custom item can have its own text, icon, and sub‑items, and its click action is handled in the [fileMenuItemSelect](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#filemenuitemselect) event, where the selected item is identified and the defined functionality is executed.

The following code sample shows how to add custom items in file menu:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/custom-filemenu-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/custom-filemenu-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/custom-filemenu-cs1" %}

## Show or Hide File Menu Items

You can show or hide items in the File menu based on your scenario. Because File menu items are created dynamically, apply these changes inside the [fileMenuBeforeOpen](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#filemenubeforeopen) event.

For example, you can hide "Save As" and "Open" before the menu opens, so users only see the items you want at that moment.

```

hideFileMenuItems(['Save As', 'Open']) inside fileMenuBeforeOpen.

```

The following code sample shows how to hide or show file menu items:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/show-or-hide-filemenu-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/show-or-hide-filemenu-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/show-or-hide-filemenu-cs1" %}

## Enable or Disable File Menu Items

You can also enable or disable items so users cannot select them. If there are duplicate item texts, you can target an item by its unique ID and set the third parameter isUniqueId to true.
For example, you can disable "New" using [fileMenuBeforeOpen](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#filemenubeforeopen).

```

enableFileMenuItems(['New'], false, true) inside fileMenuBeforeOpen.

```

The following code sample shows how to enable or disable file menu items

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/enable-or-disable-filemenu-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/enable-or-disable-filemenu-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/enable-or-disable-filemenu-cs1" %}

Use [fileMenuBeforeClose](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#filemenubeforeclose) when you need to run logic just before the File menu closes.