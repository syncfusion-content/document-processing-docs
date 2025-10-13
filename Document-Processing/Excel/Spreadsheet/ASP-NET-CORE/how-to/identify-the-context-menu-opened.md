---
layout: post
title: Identify the context menu opened in EJ2 ASP.NET CORE Spreadsheet control | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion EJ2 ASP.NET CORE Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

## Identify the context menu opened in Spreadsheet control

The Spreadsheet includes several context menus that will open and display depending on the action. When you right-click on a cell, for example, a context menu with options related to the cell element appears.

The class name returned by the [contextMenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ContextMenuBeforeOpen) event can be used to identify the context menu that is opened. The context menus and their class names are tabulated below.

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

The following code example shows how to identify the context menu opened.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/find-target-context-menu/tagHelper %}
{% endhighlight %}
{% endtabs %}

