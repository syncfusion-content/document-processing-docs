---
layout: post
title: Identify the opened context menu in EJ2 ASP.NET MVC Spreadsheet control | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion EJ2 ASP.NET MVC Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

## Identify the opened context menu in ASP.NET MVC Spreadsheet control

The Spreadsheet provides different context menus depending on the user action. For example, right-clicking a cell displays a context menu with options related to the selected cell.

Use the class name available in the [contextMenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ContextMenuBeforeOpen) event arguments to identify which context menu is being opened. The following table lists the CSS selectors associated with each context menu:

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row-header context menu |
| .e-colhdr-table | Column-header context menu |

The following example demonstrates how to identify which context menu is being opened.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-mvc/find-target-context-menu/razor %}
{% endhighlight %}
{% endtabs %}
