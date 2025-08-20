---
layout: post
title: Identify the context menu opened in ##Platform_Name## Spreadsheet control | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion ##Platform_Name## Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Identify the context menu opened in ##Platform_Name## Spreadsheet control

The Spreadsheet includes several context menus that will open and display depending on the action. When you right-click on a cell, for example, a context menu with options related to the cell element appears.

{% if page.publishingplatform == "typescript" %}

The class name returned by the [contextMenuBeforeOpen](https://ej2.syncfusion.com/documentation/api/spreadsheet/#contextmenubeforeopen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

{% elsif page.publishingplatform == "javascript" %}

The class name returned by the [contextMenuBeforeOpen](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/#contextmenubeforeopen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

{% endif %}

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

The following code example shows how to identify the context menu opened.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/spreadsheet/find-target-context-menu" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/spreadsheet/find-target-context-menu/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/spreadsheet/find-target-context-menu" %}
{% endif %}
