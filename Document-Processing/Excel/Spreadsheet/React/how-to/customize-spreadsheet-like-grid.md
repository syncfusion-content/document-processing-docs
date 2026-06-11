---
layout: post
title: Customize Spreadsheet like a Grid in React Spreadsheet | Syncfusion
description: Customize the React Spreadsheet to look and behave like a data grid by hiding UI elements and adding checkboxes for grid-like selection.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# Customize the Spreadsheet like a Grid in React Spreadsheet

The React Spreadsheet component provides extensive customization options to make it behave and appear like a traditional data grid. This guide explains how to configure the Spreadsheet to mimic grid including hiding unnecessary UI elements and rendering checkboxes for a grid-like experience.

## Steps to Customize Spreadsheet as a Grid

**Step 1: Hide Unnecessary UI Elements**

To make the Spreadsheet look and behave like a simple data grid, you can hide default UI elements such as the **ribbon**, **formula bar**, **sheet tabs**, and **row and column headers**. Assigning `false` to the following properties will hide the respective elements:

- [`showRibbon`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#showribbon): Hides the ribbon toolbar.
- [`showFormulaBar`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#showformulabar): Hides the formula bar.
- [`showSheetTabs`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#showsheettabs): Hides the sheet tabs.
- [`showHeaders`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/sheetmodel#showheaders): Hides the row and column headers in the sheet.

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

Checkboxes can be rendered within cells of the first column using the [`beforeCellRender`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#beforecellrender) event, so that selection behaves like grid selection, allowing row selection based on the checkbox selection state. Additionally, you can bind custom functions to the checkbox click event as needed.

The following code example demonstrates how to customize the Spreadsheet to behave like a grid:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/spreadsheet-like-grid-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/spreadsheet-like-grid-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="data.jsx" %}
{% include code-snippet/spreadsheet/react/spreadsheet-like-grid-cs1/app/data.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="data.tsx" %}
{% include code-snippet/spreadsheet/react/spreadsheet-like-grid-cs1/app/data.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/spreadsheet-like-grid-cs1" %}

## See Also

* [Syncfusion React Grid Component](https://ej2.syncfusion.com/react/documentation/grid/getting-started)
* [Syncfusion React Checkbox Component](https://ej2.syncfusion.com/react/documentation/check-box/getting-started)
