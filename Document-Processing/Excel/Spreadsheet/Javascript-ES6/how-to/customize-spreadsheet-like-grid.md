---
layout: post
title: How to Customize Spreadsheet as Grid in TypeScript Spreadsheet | Syncfusion
description: Learn how to customize the Syncfusion TypeScript Spreadsheet control to provide a grid-like user experience.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

# How to Customize Spreadsheet Like a Grid in TypeScript Spreadsheet

The [JavaScript Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) control provides extensive customization options to make it behave and appear like a traditional data grid. This guide explains how to configure the Spreadsheet to mimic grid including hiding unnecessary UI elements and rendering checkboxes for a grid-like experience.

## Steps to Customize Spreadsheet as a Grid

**Step 1: Hide Unnecessary UI Elements**

To make the Spreadsheet look and behave like a simple data grid, you can hide default UI elements such as the **ribbon**, **formula bar**, **sheet tabs**, and **row and column headers**. Assigning `false` to the following properties will hide the respective elements:

- [`showRibbon`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#showribbon): Hides the ribbon toolbar.
- [`showFormulaBar`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#showformulabar): Hides the formula bar.
- [`showSheetTabs`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#showsheettabs): Hides the sheet tabs.
- [`showHeaders`](https://ej2.syncfusion.com/documentation/api/spreadsheet/sheetmodel#showheaders): Hides the row and column headers in the sheet.

**Example:**

```ts
let sheets: SheetModel[] = [{
    showHeaders: false
}];

let spreadsheet: Spreadsheet = new Spreadsheet({
  sheets: sheets,
  showRibbon=false,
  showSheetTabs=false,
  showFormulaBar=false,
  showAggregate=false

});
```

**Step 2: Render Checkboxes Like a Grid**

Checkboxes can be rendered within cells of the first column using the [`beforeCellRender`](https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default#beforecellrender) event, so that selection behaves like grid selection, allowing row selection based on the checkbox selection state. Additionally, you can bind custom functions to the checkbox click event as needed.

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

* [Syncfusion TypeScript Grid Component](https://ej2.syncfusion.com/documentation/grid/getting-started)
* [Syncfusion TypeScript Checkbox Component](https://ej2.syncfusion.com/documentation/check-box/getting-started)
