---
layout: post
title: Customize Spreadsheet like a Grid in EJ2 ASP.NET Core Spreadsheet | Syncfusion
description: Customize the EJ2 ASP.NET Core Spreadsheet to look and behave like a data grid by hiding UI elements and adding checkboxes for grid-like selection.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Customize the Spreadsheet like a Grid in ASP.NET Core Spreadsheet

The ASP.NET Core Spreadsheet component provides extensive customization options to make it behave and appear like a traditional data grid. This guide explains how to configure the Spreadsheet to mimic grid including hiding unnecessary UI elements and rendering checkboxes for a grid-like experience.

## Steps to Customize Spreadsheet as a Grid

**Step 1: Hide Unnecessary UI Elements**

To make the Spreadsheet look and behave like a simple data grid, you can hide default UI elements such as the **ribbon**, **formula bar**, **sheet tabs**, and **row and column headers**. Assigning `false` to the following properties will hide the respective elements:

- [`showRibbon`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ShowRibbon): Hides the ribbon toolbar.
- [`showFormulaBar`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ShowFormulaBar): Hides the formula bar.
- [`showSheetTabs`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_ShowSheetTabs): Hides the sheet tabs.
- [`showHeaders`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.SheetModel.html#Syncfusion_EJ2_Spreadsheet_SheetModel_ShowHeaders): Hides the row and column headers in the sheet.

**Example:**

```js
<SpreadsheetComponent
  showRibbon={false}
  showSheetTabs={false}
  showFormulaBar={false}
  showAggregate={false}
>
  <SheetsDirective>
    <SheetDirective showHeaders={false}>
    </SheetDirective>
  </SheetsDirective>
</SpreadsheetComponent>
```
**Step 2: Render Checkboxes Like a Grid**

Checkboxes can be rendered within cells of the first column using the [`beforeCellRender`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Spreadsheet.Spreadsheet.html#Syncfusion_EJ2_Spreadsheet_Spreadsheet_BeforeCellRender) event, so that selection behaves like grid selection, allowing row selection based on the checkbox selection state. Additionally, you can bind custom functions to the checkbox click event as needed.

The following code example demonstrates how to customize the Spreadsheet to behave like a grid:

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/spreadsheet/asp-net-core/spreadsheet-like-grid-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="SpreadsheetGridController.cs" %}
{% include code-snippet/spreadsheet/asp-net-core/spreadsheet-like-grid-cs1/spreadsheetGridController.cs %}
{% endhighlight %}
{% endtabs %}

## See Also

* [Syncfusion ASP.NET Core Grid Component](https://ej2.syncfusion.com/aspnetcore/documentation/grid/getting-started-core)
* [Syncfusion ASP.NET Core Checkbox Component](https://ej2.syncfusion.com/aspnetcore/documentation/check-box/getting-started)
