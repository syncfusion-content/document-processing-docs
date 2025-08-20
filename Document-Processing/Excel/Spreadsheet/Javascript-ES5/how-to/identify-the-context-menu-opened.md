---
layout: post
title: Identify the context menu opened in Javascript-ES5 Spreadsheet control | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion Javascript-ES5 Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet 
documentation: ug
domainurl: ##DomainURL##
---

# Identify the context menu opened in Javascript-ES5 Spreadsheet control

The Spreadsheet includes several context menus that will open and display depending on the action. When you right-click on a cell, for example, a context menu with options related to the cell element appears.

The class name returned by the [contextMenuBeforeOpen](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#contextmenubeforeopen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

The following code example shows how to identify the context menu opened.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/excel/spreadsheet/javascript-es5/find-target-context-menu/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/excel/spreadsheet/javascript-es5/find-target-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/excel/spreadsheet/javascript-es5/find-target-context-menu" %}