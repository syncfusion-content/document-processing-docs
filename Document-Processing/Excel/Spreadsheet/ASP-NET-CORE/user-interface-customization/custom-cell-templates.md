---
layout: post
title: Custom templates in EJ2 ASP.NET Core spreadsheet Control | syncfusion
description: Learn here how to add custom templates to show icons or controls in Syncfusion EJ2 ASP.NET Core Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Create Custom Cell Templates

The Syncfusion ASP.NET Core Spreadsheet component lets you display custom templates inside cells.You can insert icons, labels, buttons, or any custom templates. This is useful when you need custom functionality inside cells. You can add templates to cells by dynamically assigning a custom template property directly to individual cells. When a cell has this custom template property, you can use the [beforeCellRender](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_BeforeCellRender) event to append the desired template element to the cell.

The following sample demonstrates how to insert a [Syncfusion Dropdown component](https://www.npmjs.com/package/@syncfusion/ej2-dropdowns) into Spreadsheet cells using this custom template property. Additionally, a custom ribbon item named "DropDown List" is included under a new "Template" ribbon tab. When this ribbon item is selected, the Spreadsheet dynamically inserts a dropdown into the currently active cell.

The following code sample shows how to create custom cell templates.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/dynamic-cell-template-cs1/tagHelper %}
{% endhighlight %}
{% endtabs %}