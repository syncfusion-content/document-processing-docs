---
layout: post
title: Add icons inside cells in EJ2 ASP.NET Core Spreadsheet component | Syncfusion
description: Learn here all about adding icon inside cells using a custom template in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Add Custom Icons to Cells in ASP.NET Core Spreadsheet

In the Syncfusion Spreadsheet, you can render custom icons inside specific cells by defining a custom template property within the cell model. During the [beforeCellRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_BeforeCellRender) event, the icon element can be appended to the corresponding table cell (td) by checking whether the cell contains this template property.

The following sample demonstrates how to add icons to cells by assigning the template property in the cell definition. Additionally, a custom ribbon item named "Add Icon" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts an icon into the currently active cell.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/add-icon-in-cell-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="AddIconController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/add-icon-in-cell-cs1/addIconController.cs %}
{% endhighlight %}
{% endtabs %}
