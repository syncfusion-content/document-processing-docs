---
layout: post
title: Add icons to cells — React Spreadsheet | Syncfusion
description: Short guide to add plus-icons inside Spreadsheet cells using a custom template or a template button.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Add Custom Icons to Cells in React Spreadsheet

This guide demonstrates how to add a custom icons in cells in the Syncfusion React Spreadsheet component.

Add icons into cells by marking a cell with a template (for example, `updateCell({ template: 'plus-icon' }, address)`) or by initializing templates programmatically in `created`.
The sample creates a DOM wrapper via `createPlusIconWrapper()` and inserts it in `beforeCellRender` when `cell.template === 'plus-icon'`.
You can add the template to the active cell via a custom ribbon button (the sample uses `addRibbonTabs` → "Add Icon"), or apply templates to ranges on initialization.
When inserted, the icon is a clickable DOM element you control; handle clicks to perform actions like expanding rows, loading data, or inserting rows.
This approach keeps logic simple: mark cells with a template, render a small DOM icon in `beforeCellRender`, and respond to click events to implement custom behavior.

The following code example shows how to add custom icons to cells for grouping functionality:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/add-icon-in-cell-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/add-icon-in-cell-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/add-icon-in-cell-cs1" %}
