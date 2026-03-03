---
layout: post
title: Dynamic cell template with dropdowns — React Spreadsheet | Syncfusion
description: Rendering a dropdown inside a Spreadsheet cell using a dynamic cell template.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Create Dynamic Cell Templates with Dropdowns in React Spreadsheet

This guide demonstrates how to implement dropdown functionality within cells using custom templates in the Syncfusion React Spreadsheet component.

A template name is added to the cell through setCell, and this tells the Spreadsheet to display a dropdown component instead of normal text.

The dropdown is created using the given options, and after the template is applied, resize is called so the cell adjusts properly.

Templates can also be added automatically when the Spreadsheet is created. For example, you can mark a range of cells with the dropdown template during the created event. This helps when you want certain columns to always show dropdowns without manually updating cells one by one.

You can also add dropdowns dynamically. A custom Ribbon tab is added with a button that inserts a dropdown into the currently selected cell. When the user clicks this button, the template is applied to that cell immediately. This makes it easy for users to add dropdowns anywhere in their sheet while working.

### Dropdown insertion logic

Mark cells with a template and sets `setCell(0, col, sheet, { template: 'dropdown-list' })`.
Initiate the `DropDownList` using `dropDownOptions`.
The calls `resize()` after applying templates.
On selection, call `updateCell({ value })` to save the chosen value in the sheet.
Apply templates programmatically with `setCell` during `created` to pre-configure ranges.

If you want to create custom button to dynamically add dropdown lists to specific cells, custom Ribbon tab ("Template" -> "DropDown List") is added via addRibbonTabs in created, enabling a dropdown to be injected into the active cell.

The following code example shows how to add a dropdown from a custom template:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-cell-template-cs1" %}