---
layout: post
title: Form Controls in Angular Spreadsheet | Syncfusion
description: Learn about form controls feature in the Syncfusion Angular Spreadsheet component, including checkboxes, radio buttons, and dropdown lists.
control: Form Controls
platform: document-processing
documentation: ug
---

# Form Controls in Angular Spreadsheet

The Spreadsheet component provides built-in form controls that enable users to add interactive elements within a worksheet. Form controls are associated with individual worksheets and are available only in the worksheet where they are created, rather than across the entire workbook. Use the `allowFormControl` property to enable or disable form controls.

> The default value for `allowFormControl` property is `true`.

The following sections describe each supported form control and its configuration options.

## Supported Form Controls

The Spreadsheet supports the following form controls:

- **Check Box**: Allows toggling between checked, unchecked and mixed states.
- **Radio Button**: Allows selecting a single option from a group of choices.
- **Combo Box (Dropdown)**: Allows selecting from a predefined list of values.

### Check Box

The Check Box form control allows users to toggle between checked, unchecked, and mixed states, while updating the corresponding value in a linked cell.

Check Box provides the following configuration options:

- **Unchecked**: The unselected state of the Check Box for a Linked cell. If Unchecked, linked cell value: **FALSE**
- **Checked**: The selected state of the Check Box for a Linked cell. If Checked, linked cell value: **TRUE**
- **Mixed**: Represents the mixed state of the Check Box for a Linked cell.
- **Cell Link** :Specify a cell reference to link the Check Box to a worksheet cell.

The linked cell value is automatically updated whenever the Check Box state changes.

The following code example shows the Check Box Form Control functionality in the Spreadsheet control.

{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/form-controls-check-box-cs1/app/app.ts %}
{% endhighlight %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/form-controls-check-box-cs1" %}

### Radio Button

The Radio Button form control allows users to store either 1 (selected) or 0 (unselected) in a linked cell.

> Once a Radio Button is selected, clicking the same Radio Button again does not uncheck it.

Radio Button provides the following configuration options:

- **Unchecked**: The unselected state of the Radio Button for a Linked cell. If Unchecked, linked cell value: **0**
- **Checked**: The selected state of the Radio Button for a Linked cell. If Checked, linked cell value: **1**
- **Cell Link** :Specify a cell reference to link the Radio Button to a worksheet cell.

The linked cell value is automatically updated whenever the Radio Button state changes.

> **Note:** Within a worksheet, only one Radio Button can be selected (checked) at a time. Selecting a new Radio Button automatically deselects any previously selected Radio Button.

The following code example shows the Radio Button Form Control functionality in the Spreadsheet control.

{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/form-controls-radio-button-cs1/app/app.ts %}
{% endhighlight %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/form-controls-radio-button-cs1" %}

### Combo Box (Dropdown)

The Combo Box (Dropdown) form control allows users to select an item from a predefined list and stores the selected item's position in the linked cell.

> **Note:** The Combo Box (Dropdown) control displays an **empty list** when first inserted. You must configure the Input Range and set a Cell Link to make the Combo Box (Dropdown) functional.

Combo Box (Dropdown) provides the following configuration options:

- **Input Range**: Specify the cell range for combo box (e.g., **H1:H11**). This configuration uses cells H1 through H11 as the source for Combo Box options. When users click the combo box button, they will see the values from this range as selectable options.
- **Cell Link** :Specify a cell reference to link the selected item's position within the Combo Box (Dropdown).

The linked cell value is automatically updated whenever the Combo Box's selected item changes.

The following code example shows the Combo Box (Dropdown) Form Control functionality in the Spreadsheet control.

{% highlight ts tabtitle="app.ts" %}
{% include code-snippet/spreadsheet/angular/form-controls-dropdown-cs1/app/app.ts %}
{% endhighlight %}

{% previewsample "/document-processing/code-snippet/spreadsheet/angular/form-controls-dropdown-cs1" %}

## Inserting Form Controls

Form controls can be inserted through the ribbon menu:

**Ribbon → Insert → Form Controls**

Click on the desired cell location to place the Form Control and select the required Form Control type (Check Box, Radio Button, or Combo Box (Dropdown)) in the Form Controls dropdown from the insert tab within the ribbon menu.

## Accessing Format Control Dialog

The Format Control dialog allows you to configure settings specific to a form control, such as state options, input ranges, and cell links.

To open the Format Control dialog:

1. Right-click the desired form control.
2. Select **Format Control** from the context menu.
3. Configure the required settings and click **OK** to apply the changes.

## Common Form Control Operations

- **Import and Export**: Form controls retain their configuration, caption, cell link settings and layout settings during import and export.
- **Drag and Move**: Form controls can be moved to different locations within the worksheet.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.
- **Resize**: Drag the edges of a form control to adjust its size. Undo and Redo operations are supported for resize and deletion
- **Delete**: Right-click the form control and select Delete, or press Delete key after selecting the form control.
- **Cut, Copy, Paste**: Right-click the form control and select Cut, Copy, or Paste.
- **Right-to-Left (RTL)**: Form controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, form controls render and function appropriately in RTL direction.
- **Rename**: Right-click the form control and select Edit Text from the context menu to rename it.

## See Also

* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
