---
layout: post
title: Identify the context menu opened in the Vue Spreadsheet component | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion Vue Spreadsheet component of Syncfusion Essential JS 2 and more. 
control: Spreadsheet
platform: document-processing
documentation: ug
---

## Identify the context menu opened in Vue Spreadsheet component

The Spreadsheet includes several context menus that will open and display depending on the action. When you right-click on a cell, for example, a context menu with options related to the cell element appears.

The class name returned by the [contextMenuBeforeOpen](https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#contextmenubeforeopen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

The following code example shows how to identify the context menu opened.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/find-target-context-menu/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/spreadsheet/vue/find-target-context-menu/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/vue/find-target-context-menu" %}