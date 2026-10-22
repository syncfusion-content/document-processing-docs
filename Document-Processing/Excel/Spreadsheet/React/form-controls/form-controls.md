---
layout: post
title: Form Controls in React Spreadsheet | Syncfusion
description: Learn about form controls feature in the Syncfusion React Spreadsheet component, including checkboxes, radio buttons, and dropdown lists.
control: Form Controls
platform: document-processing
documentation: ug
---

# Form Controls in React Spreadsheet

The Spreadsheet component provides built-in form controls that allow users to add interactive controls within a worksheet. Form controls are worksheet-level objects and are associated with individual worksheets rather than the workbook.

## Overview

The Spreadsheet supports the following form controls:

- **Check Box**: Allows toggling between checked and unchecked states.
- **Radio Button**: Allows selecting a single option from a group of choices.
- **Combo Box (Dropdown)**: Allows selecting from a predefined list of values.

### Inserting Form Controls

Form controls can be inserted through the ribbon menu:

**Ribbon → Insert → Form Controls**

Select the required control type (Check Box, Radio Button, or Combo Box (Dropdown)) and click on the desired cell location to place the control.

### General Form Control Operations

All form controls support the following operations:

- **Drag and Move**: Form controls can be moved to different locations within the worksheet.
- **Resize**: Form controls can be resized after insertion.
- **Undo/Redo**: Undo and Redo operations are supported for resize and deletion.
- **Delete**: Form controls can be deleted from the worksheet.
- **Cut, Copy, Paste**: Cut, Copy, and Paste operations are supported for all form control types.

### Worksheet-Based Behavior

Form controls are worksheet-specific. A form control created in one worksheet exists only in that worksheet and does not appear in other worksheets within the workbook.

### Supported Features

- Worksheet-based form controls
- Check Box with mixed state
- Radio Button selection
- Combo Box (Dropdown) with input ranges
- Cell Link integration
- Excel import and export support
- RTL support
- Editable captions for Check Box and Radio Button controls
- Clipboard operations

## Check Box Form Control

The Check Box form control allows users to represent checked, unchecked, and mixed states within a worksheet.

### Code Example

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-check-box-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-check-box-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/form-controls-check-box-cs1" %}

### Inserting Check Box

To insert a Check Box form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Check Box**.
4. Click on the desired cell to place the Check Box control.

### Editing Check Box Caption

The caption of a Check Box can be edited by:

1. **Right-click** on the Check Box control.
2. Select the editing option from the context menu.
3. Modify the caption text.

### Format Control Dialog

When a Check Box is right-clicked and the **Format Control** dialog is opened, the following states are available:

- **Unchecked**: The unselected state of the Check Box.
- **Checked**: The selected state of the Check Box.
- **Mixed**: Represents the mixed state of the Check Box.

#### Accessing Format Control Dialog

1. Right-click on the Check Box control.
2. Select **Format Control** from the context menu.
3. The Format Control dialog will display state options and Cell Link configuration.

### Check Box Cell Link Support

The Format Control dialog provides a **Cell Link** input box for linking the Check Box to a specific cell.

#### Setting Cell Link

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Cell Link** field, specify a cell reference (for example, **J5**).
3. Click **OK** to apply the link.

#### Cell Link Behavior

When a cell link is configured, the linked cell reflects the state of the Check Box:

- **Unchecked** → linked cell value: **FALSE**
- **Checked** → linked cell value: **TRUE**
- **Mixed** → linked cell value reflects the mixed state

The linked cell value is automatically synchronized whenever the Check Box state changes.

### Common Check Box Operations

#### Moving and Resizing
- **Drag**: Click and drag a Check Box to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Check Box to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

#### Deletion
- **Delete**: Right-click the Check Box and select Delete, or press Delete key after selecting the Check Box.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

#### Clipboard Operations
- **Cut**: Right-click the Check Box and select Cut (or Ctrl+X).
- **Copy**: Right-click the Check Box and select Copy (or Ctrl+C).
- **Paste**: Right-click a cell and select Paste (or Ctrl+V).

### Check Box Worksheet Interaction

Check Box controls are worksheet-specific. A Check Box created in one worksheet exists only in that worksheet.

### Check Box Import and Export Support

Check Box form controls are supported during Excel import and export operations. Check Box controls retain their configuration, caption, and cell link settings during import and export.

### Check Box RTL Support

Check Box controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, Check Box controls render and function appropriately in RTL direction.

### Check Box Limitations

- Each Check Box occupies a single cell location.
- Check Boxes cannot span multiple cells.
- Cell links must reference cells in the same worksheet.
- Only one Check Box can be interactively selected at a time.

## Radio Button Form Control

The Radio Button form control allows selecting a single option from a group of mutually exclusive choices within a worksheet.

### Code Example

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-radio-button-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-radio-button-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/form-controls-radio-button-cs1" %}

### Inserting Radio Button

To insert a Radio Button form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Radio Button**.
4. Click on the desired cell to place the Radio Button control.

### Editing Radio Button Caption

The caption of a Radio Button can be edited by:

1. **Right-click** on the Radio Button control.
2. Select the editing option from the context menu.
3. Modify the caption text.

### Radio Button Format Control Dialog

When a Radio Button is right-clicked and the **Format Control** dialog is opened, the dialog provides two state options:

- **Unchecked**: The Radio Button is not selected.
- **Checked**: The Radio Button is selected.

#### Accessing Format Control Dialog

1. Right-click on the Radio Button control.
2. Select **Format Control** from the context menu.
3. The Format Control dialog will display state options and Cell Link configuration.

### Radio Button Cell Link Support

The Format Control dialog includes a **Cell Link** input box for linking the Radio Button to a specific cell.

#### Setting Cell Link

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Cell Link** field, specify a cell reference (for example, **K10**).
3. Click **OK** to apply the link.

#### Cell Link Behavior

When a cell link is configured, the linked cell stores:

- **0** when the Radio Button is not selected
- **1** when the Radio Button is selected

The linked cell value is automatically updated whenever the Radio Button state changes.

### Selection Behavior

Once a Radio Button is selected, clicking the same Radio Button again does not uncheck it.

### Common Radio Button Operations

#### Moving and Resizing
- **Drag**: Click and drag a Radio Button to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Radio Button to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

#### Deletion
- **Delete**: Right-click the Radio Button and select Delete, or press Delete key after selecting the Radio Button.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

#### Clipboard Operations
- **Cut**: Right-click the Radio Button and select Cut (or Ctrl+X).
- **Copy**: Right-click the Radio Button and select Copy (or Ctrl+C).
- **Paste**: Right-click a cell and select Paste (or Ctrl+V).

### Radio Button Worksheet Interaction

Radio Button controls are worksheet-specific. Radio Buttons created in one worksheet exist only in that worksheet.

### Radio Button Import and Export Support

Radio Button form controls are supported during Excel import and export operations. Radio Button controls retain their configuration, caption, and cell link settings during import and export.

### Radio Button RTL Support

Radio Button controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, Radio Button controls render and function appropriately in RTL direction.

### Radio Button Limitations

- Each Radio Button occupies a single cell location.
- Radio Buttons cannot span multiple cells.
- Cell links must reference cells in the same worksheet.
- Radio Button state cannot be indeterminate.

## Combo Box (Dropdown) Form Control

The Combo Box (Dropdown) form control presents a predefined list of options to select from within a worksheet cell.

### Code Example

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/form-controls-dropdown-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/form-controls-dropdown-cs1" %}

### Inserting Combo Box (Dropdown)

To insert a Combo Box (Dropdown) form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Combo Box (Dropdown)**.
4. Click on the desired cell to place the Combo Box (Dropdown) control.

### Initial State

The Combo Box (Dropdown) control is **initially empty** when inserted. You must configure the Input Range and optionally set a Cell Link to make the Combo Box (Dropdown) functional.

### Combo Box Format Control Dialog

Users can configure the Combo Box (Dropdown) control by:

1. **Right-click** on the Combo Box (Dropdown) control.
2. Select **Format Control** from the context menu.
3. Configure the available options in the Format Control dialog.

The Format Control dialog contains the following fields:

#### Input Range

The **Input Range** field specifies the source range that contains the list values available for selection in the Combo Box (Dropdown) control.

##### Configuring Input Range

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Input Range** field, specify the cell range containing your combo box values.
3. Use standard range notation (e.g., **H1:H11** or **$H$1:$H$11**).

##### Input Range Example

```
Input Range: H1:H11
```

This configuration makes cells H1 through H11 the source of combo box options. When users click the combo box button, they will see the values from this range as selectable options.

##### Range Specification Guidelines

- **Single Column Range**: Use vertical range format (e.g., H1:H11).
- **Cell References**: Use absolute references ($H$1:$H$11) for stable references when copying the combo box.

#### Combo Box Cell Link

The **Cell Link** field specifies the destination cell to store the selected item index when a user makes a selection from the Combo Box (Dropdown).

##### Configuring Cell Link

1. In the **Cell Link** field, specify a valid cell reference (e.g., **K10**).
2. Click **OK** to apply the configuration.

##### Cell Link Example

```
Input Range: H1:H11
Cell Link: K10
```

With this configuration:
- The combo box lists values from H1 to H11
- When a user selects an option, the **position/index** of that option is stored in cell K10

### Combo Box Cell Link Behavior

When a value is selected from the Combo Box (Dropdown) control:

- The **position of the selected item** within the Combo Box (Dropdown) list is written to the linked cell.
- The position is 1-based (first item = 1, second item = 2, etc.).
- The linked cell is **dynamically updated** whenever the selection changes.

#### Cell Link Example Scenario

**Input Range**: H1:H11 contains:
```
H1: Sales
H2: Marketing
H3: Engineering
H4: HR
H5: Finance
...
```

**Cell Link**: K10

When a user selects "Engineering" from the combo box:
- Cell K10 displays **3** (because Engineering is the 3rd item in the list)

When a user selects "Finance" from the combo box:
- Cell K10 displays **5** (because Finance is the 5th item in the list)

#### Using Cell Link Values in Formulas

You can reference the linked cell in formulas to retrieve the actual selected value:

```
=INDEX($H$1:$H$11, K10)
```

This formula will return the actual selected value from the Input Range using the index stored in K10.

The linked cell updates automatically whenever a selection is made from the Combo Box (Dropdown).

### Common Combo Box (Dropdown) Operations

#### Moving and Resizing
- **Drag**: Click and drag a Combo Box (Dropdown) control to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Combo Box (Dropdown) to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

#### Deletion
- **Delete**: Right-click the Combo Box (Dropdown) and select Delete, or press Delete key after selecting the Combo Box (Dropdown).
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

#### Clipboard Operations
- **Cut**: Right-click the Combo Box (Dropdown) and select Cut (or Ctrl+X).
- **Copy**: Right-click the Combo Box (Dropdown) and select Copy (or Ctrl+C).
- **Paste**: Right-click a cell and select Paste (or Ctrl+V).

### Combo Box Worksheet Interaction

Combo Box (Dropdown) controls are worksheet-specific. A Combo Box (Dropdown) created in one worksheet exists only in that worksheet.

### Combo Box Import and Export Support

Combo Box (Dropdown) form controls are supported during Excel import and export operations. Combo Box (Dropdown) controls retain their Input Range and Cell Link settings during import and export.

### Combo Box RTL Support

Combo Box (Dropdown) controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, Combo Box (Dropdown) controls render and function appropriately in RTL direction.

### Combo Box Limitations

- Each Combo Box (Dropdown) occupies a single cell location.
- Combo Boxes (Dropdowns) cannot span multiple cells.
- The Cell Link stores the index of the selected item, not the item value itself.
- Input Range and Cell Link must reference cells in the same worksheet.
- Input Range must be a contiguous cell range.

## See Also

* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
