---
layout: post
title: Identify context menu opened in ASP.NET Core Spreadsheet | Syncfusion
description: Learn here all about how to identify the context menu opened in Syncfusion EJ2 ASP.NET CORE Spreadsheet control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Identify the context menu opened in ASP.NET Core Spreadsheet control

The Spreadsheet includes several context menus that open depending on the action performed. For example, when you right-click a cell, a context menu displays options related to that cell.

Use the class name available in the [contextMenuBeforeOpen](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ContextMenuBeforeOpen) event arguments to identify which context menu is opening.

To identify which context menu is opening:

1. Bind the `contextMenuBeforeOpen` event to the Spreadsheet.
2. In the event handler, obtain the class name from the event arguments.
3. Compare the class name with the CSS selectors listed in the following table.
4. Perform the required operation based on the identified context menu.

## Context menu selectors

The following table lists the CSS selectors associated with each context menu:

| Class name | Context menu name |
|-------|---------|
| .e-sheet-content | Cell context menu |
| .e-toolbar-item | Footer context menu |
| .e-rowhdr-table | Row header context menu |
| .e-colhdr-table | Column header context menu |

## Example

The following code example demonstrates how to identify which context menu is opening.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/find-target-context-menu/tagHelper %}
{% endhighlight %}
{% endtabs %}

