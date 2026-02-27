---
layout: post
title: Dynamic cell templates in the React Spreadsheet component | Syncfusion
description: Learn here all about cell dropdown in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## Dynamic Cell Template — Dropdown to Input Behavior

A custom Ribbon tab ("Template" -> "DropDown List") is added via addRibbonTabs in created, enabling a dropdown to be injected into the active cell.

On click, the code resolves the active cell using getActiveSheet, getCellIndexes, retrieves the cell model/element via getCell, and marks it with template: 'dropdown-list';

During beforeCellRender, if cell.template === 'dropdown-list', the cell DOM is cleared and an input element is appended.

A Syncfusion DropDownList is instantiated on that input with dataSource, placeholder, cssClass, and initial value, and hooked to its change event.

When a non-"Other" option is chosen, the selection is written back into the sheet using updateCell({ value }) on sheet.activeCell.

When "Other" is chosen, the dropdown element is located with getComponent().

The dropdown is recreated automatically for any cell whose model retains template: 'dropdown-list', ensuring consistent behavior as users navigate.

Layout helpers like ColumnsDirective configure column widths, while SpreadsheetComponent, SheetsDirective, and SheetDirective provide the Spreadsheet structure.

The options list (dropdownData) includes "Other" to trigger the switch from templated dropdown to native text entry.

The following code example shows how to add dropdown from custom template

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/dynamic-cell-template-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/dynamic-cell-template-cs1" %}

## Initialize the dropdown for cells

This implementation initializes a SpreadsheetComponent and in the created handler sets row height, applies a 'dropdown-list' template to a range using setCell, and calls resize.

The beforeCellRender event checks each cell's template and injects an ej2-dropdowns DropDownList into the cell DOM when the template equals 'dropdown-list'.

On selection, dropDownChangeHandler updates the spreadsheet by calling updateCell on the spreadsheetRef, writing the chosen value into the active cell.
Clipboard operations are detected via actionBegin and actionComplete.

In beforeCellUpdate, pasted cells with the dropdown template are fixed up: if a dropdown component exists it’s updated via getComponent, otherwise addDropDownlist re-renders it.

The pattern uses a template flag on cells and lazy-mounts the interactive dropdown only when the cell is rendered or updated, keeping the sheet performant and editable.

The following code example shows how to initialize the dropdown for cells

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/initialize-cell-dropdown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/initialize-cell-dropdown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/initialize-cell-dropdown-cs1" %}

## Dynamic Cell Template — In-Cell Dropdown via Data Validation

The sample adds a dropdown into cells by applying list validation with addDataValidation (using inCellDropDown) inside the onCreated handler.

It formats headers and columns via cellFormat and numberFormat to prepare the spreadsheet UI.
The cellSave event inspects the edited cell using getCellIndexes, getSheet, getSheetIndex, getCell, and getColumn.

Validation is detected with the cell's validation property or checkColumnValidation, ensuring list-type rules are honored.

When the user selects Other, the code removes validation with removeDataValidation, clears the cell using clear, and calls startEdit to allow free-text input.
The spreadsheet instance is accessed via the component ref on SpreadsheetComponent (also configured with openUrl/saveUrl).

As an alternative to the toolbar demo, you can update the custom cell using updateCell and embed a dropdown directly with addDropDownToCell during any event, avoiding extra UI controls.

Together these methods implement a dynamic cell template that presents an in-cell dropdown, detects special selections, and swaps to editable mode when needed.

The following code example shows how the dropdown applied via data validation.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/data-validation-dropdown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/data-validation-dropdown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/data-validation-dropdown-cs1" %}