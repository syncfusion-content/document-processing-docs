---
layout: post
title: How to Identify Opened Context Menu in Spreadsheet | Syncfusion
description: Learn how to identify the opened context menu in the Syncfusion TypeScript Spreadsheet control through event handling.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# How to Identify Which Context Menu Was Opened in Spreadsheet

The Spreadsheet includes several context menus that will open and display depending on the action. When you right-click on a cell, for example, a context menu with options related to the cell element appears.

The class name returned by the [contextMenuBeforeOpen](https://ej2.syncfusion.com/documentation/api/spreadsheet#contextmenubeforeopen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

The following code example shows how to identify the context menu opened.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/javascript-es6/find-target-context-menu/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/javascript-es6/find-target-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/javascript-es6/find-target-context-menu" %}
