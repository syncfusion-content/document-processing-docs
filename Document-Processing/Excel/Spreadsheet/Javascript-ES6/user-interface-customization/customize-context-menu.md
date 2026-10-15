---
layout: post
title: Context Menu Item in JavaScript ES6 Spreadsheet | Syncfusion
description: Learn about customizing context menu items in the Syncfusion JavaScript ES6 Spreadsheet component and more details.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Context Menu Item in JavaScript ES6 Spreadsheet

The [JavaScript ES6 Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-es6-spreadsheet-editor) component provides an easy way to customize the context menu. You can add custom menu items, hide default items, or change what happens when a user selects a menu option. This giving access to useful actions. You can perform the following context menu customization options in the spreadsheet

* Add Context Menu Items
* Remove Context Menu Items
* Enable/Disable Context Menu Items

## Add Context Menu Items

You can add custom items to the context menu using the [`addContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#addcontextmenuitems) event. Since multiple context menus are available, to identify which context menu opened, you can use the[contextmenuBeforeOpen](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#contextmenubeforeopen) event and access the menu's class name from its event arguments. For more information, refer to this guide: https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/how-to/identify-the-context-menu-opened#identify-the-context-menu-opened-in-javascript-es6-spreadsheet-component

You can use the [contextmenuItemSelect](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default#contextmenuitemselect) event to handle when a context menu item is chosen. This event is triggered when the user selects a menu item and provides the selected item's details and the target element in its event arguments; handle it to prevent default function or adding custom functions to the context menu item.

The following code sample shows how to handle custom actions in the `contextmenuItemSelect` event.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/context-menu-cs1/app/app.js %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/context-menu-cs1" %}

## Remove Context Menu Items

You can remove the items in context menu using the [`removeContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#removecontextmenuitems) in `contextmenuBeforeOpen` event

The following code sample removes the Insert Column item from the row/column header context menu.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/context-menu-cs2/app/app.js %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/context-menu-cs2" %}

## Enable/Disable Context Menu Items

You can enable/disable the items in context menu using the [`enableContextMenuItems`](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet#enablecontextmenuitems) in `contextmenuBeforeOpen` event

The following code sample disables the Rename item in the pager context menu.

{% tabs %}
{% highlight js tabtitle="app.js" %}
{% include code-snippet/spreadsheet/javascript-es6/context-menu-cs3/app/app.js %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/context-menu-cs3" %}
