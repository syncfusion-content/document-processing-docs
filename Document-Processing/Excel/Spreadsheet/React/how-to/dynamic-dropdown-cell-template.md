---
layout: post
title: Dynamic cell templates in the React Spreadsheet component | Syncfusion
description: Learn here all about cell dropdown in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet 
platform: document-processing
documentation: ug
---

## How to Create Dynamic Cell Templates with Dropdowns in React Spreadsheet

This guide demonstrates three different approaches to implement dropdown functionality within cells using custom templates in the Syncfusion React Spreadsheet component.

---

## Method 1: Add Dropdown from Custom Ribbon Tab

This approach allows users to inject a dropdown into any active cell using a custom ribbon toolbar button.

### Use Case

You want to provide users with a toolbar option to dynamically add dropdown lists to specific cells for data entry.

### Implementation Steps

1. **Add a custom Ribbon tab** using `addRibbonTabs` in the `created` event.
2. **Create a toolbar button** (e.g., "Template" -> "DropDown List") that triggers the dropdown injection.
3. **Resolve the active cell** using `getActiveSheet`, `getCellIndexes`, and `getCell`.
4. **Mark the cell** with a custom template property: `template: 'dropdown-list'`.
5. **Render the dropdown** in the `beforeCellRender` event when detecting the template flag.
6. **Instantiate a Syncfusion DropDownList** with data source, placeholder, and change event handler.
7. **Update the cell value** using `updateCell({ value })` when a selection is made.

### How It Works

- The `beforeCellRender` event checks if `cell.template === 'dropdown-list'`.
- When detected, the cell DOM is cleared and a DropDownList component is appended.
- Selecting an option updates the spreadsheet cell value automatically.
- Selecting "Other" switches the cell from dropdown to native text input mode.
- The dropdown persists as users navigate, as long as the cell retains the template property.

### Key APIs

- `addRibbonTabs` - Add custom ribbon tabs
- `getActiveSheet` - Get the current active sheet
- `getCellIndexes` - Convert cell address to row/column indexes
- `getCell` - Retrieve cell model and DOM element
- `beforeCellRender` - Event triggered before rendering each cell
- `updateCell({ value })` - Update cell value programmatically
- `getComponent` - Access the DropDownList component instance

### Example

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

---

## Method 2: Initialize Dropdown Templates for Specific Cells

This approach pre-configures cells with dropdown templates during spreadsheet initialization, ensuring dropdowns are automatically rendered when cells are displayed.

### Use Case

You want to set up dropdown lists for specific cells or ranges during spreadsheet creation, and maintain the dropdown behavior even after copy/paste operations.

### Implementation Steps

1. **Initialize the Spreadsheet** and set row heights in the `created` event.
2. **Apply the dropdown template** to specific cells or ranges using `setCell` with `template: 'dropdown-list'`.
3. **Call `resize`** to ensure proper rendering.
4. **Use `beforeCellRender`** to detect cells with the dropdown template and inject the DropDownList component.
5. **Handle value changes** in the dropdown change handler by calling `updateCell`.
6. **Handle clipboard operations** using `actionBegin` and `actionComplete` events.
7. **Fix pasted cells** in `beforeCellUpdate` to restore dropdown functionality after paste operations.

### How It Works

- Cells are marked with the `dropdown-list` template flag during initialization.
- The `beforeCellRender` event lazy-loads the DropDownList component only when the cell is rendered.
- When users paste cells, the `beforeCellUpdate` event checks for the dropdown template and either updates the existing component or re-renders it.
- This pattern keeps the spreadsheet performant by only mounting interactive dropdowns as needed.

### Key APIs

- `setCell` - Apply template to specific cells
- `resize` - Refresh spreadsheet layout
- `beforeCellRender` - Event for custom cell rendering
- `beforeCellUpdate` - Event triggered before cell updates
- `actionBegin` / `actionComplete` - Track clipboard operations
- `updateCell` - Update cell value programmatically
- `getComponent` - Access existing DropDownList instance

### Example

The following code example shows how to initialize dropdowns for specific cells:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/initialize-cell-dropdown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/initialize-cell-dropdown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/initialize-cell-dropdown-cs1" %}

---

## Method 3: Create In-Cell Dropdown Using Data Validation

This approach uses the built-in data validation feature to create dropdown lists within cells, providing a native Excel-like experience.

### Use Case

You want to implement dropdown lists using standard Excel data validation, with the ability to switch to free-text input when users select a special option like "Other".

### Implementation Steps

1. **Initialize the Spreadsheet** with `openUrl` and `saveUrl` configurations.
2. **Apply data validation** to specific cells or ranges using `addDataValidation` with the `inCellDropDown` option in the `created` event.
3. **Format headers and columns** using `cellFormat` and `numberFormat` to prepare the UI.
4. **Handle cell save events** using `cellSave` to inspect the edited cell.
5. **Detect validation rules** using the cell's `validation` property or `checkColumnValidation`.
6. **Detect special selections** (e.g., "Other") and remove validation using `removeDataValidation`.
7. **Clear the cell** and call `startEdit` to allow free-text input when needed.

### How It Works

- Data validation with `inCellDropDown: true` creates native dropdown lists in cells.
- The `cellSave` event inspects edited cells using `getCellIndexes`, `getSheet`, `getCell`, and `getColumn`.
- When "Other" is selected, validation is removed and the cell switches to editable mode.
- The spreadsheet instance is accessed via a component ref for programmatic control.
- As an alternative, you can use `updateCell` and `addDropDownToCell` to embed dropdowns during any event.

### Key APIs

- `addDataValidation` - Apply validation rules with dropdown
- `removeDataValidation` - Remove validation from cells
- `cellFormat` - Format cell appearance
- `numberFormat` - Apply number formatting
- `cellSave` - Event triggered when a cell is saved
- `getCellIndexes` - Convert cell address to indexes
- `getSheet` / `getSheetIndex` - Access sheet data
- `getCell` / `getColumn` - Retrieve cell or column data
- `checkColumnValidation` - Check if validation exists
- `clear` - Clear cell content
- `startEdit` - Enable edit mode for a cell
- `updateCell` - Update cell value programmatically
- `addDropDownToCell` - Embed dropdown directly

### Example

The following code example shows how to create dropdowns using data validation:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/data-validation-dropdown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/data-validation-dropdown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/data-validation-dropdown-cs1" %}

---

## Comparison of Methods

| Feature | Custom Ribbon Tab | Initialize Template | Data Validation |
|---------|------------------|--------------------|--------------------|
| **Initialization** | User-triggered | Programmatic | Programmatic |
| **User Experience** | Requires toolbar action | Automatic rendering | Native Excel-like |
| **Persistence** | Template flag | Template flag | Validation rules |
| **Copy/Paste Support** | Manual handling | Automatic fix-up | Built-in |
| **Customization** | Full control | Full control | Limited |
| **Best For** | Dynamic user input | Pre-configured cells | Standard dropdowns |
