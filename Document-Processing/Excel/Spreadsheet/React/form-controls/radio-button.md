---
layout: post
title: Radio Button Form Control in React Spreadsheet | Syncfusion
description: Learn about Radio Button form control in the Syncfusion React Spreadsheet component, including editing, formatting, and cell link integration.
control: Form Controls
platform: document-processing
documentation: ug
---

# Radio Button Form Control in React Spreadsheet

The Radio Button form control allows selecting a single option from a group of mutually exclusive choices within a worksheet.

## Inserting Radio Button

To insert a Radio Button form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Radio Button**.
4. Click on the desired cell to place the Radio Button control.

## Editing Radio Button Caption

The caption of a Radio Button can be edited by:

1. **Right-click** on the Radio Button control.
2. Select the editing option from the context menu.
3. Modify the caption text.

## Format Control Dialog

When a Radio Button is right-clicked and the **Format Control** dialog is opened, the dialog provides two state options:

- **Unchecked**: The Radio Button is not selected.
- **Checked**: The Radio Button is selected.

### Accessing Format Control Dialog

1. Right-click on the Radio Button control.
2. Select **Format Control** from the context menu.
3. The Format Control dialog will display state options and Cell Link configuration.

## Cell Link Support

The Format Control dialog includes a **Cell Link** input box for linking the Radio Button to a specific cell.

### Setting Cell Link

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Cell Link** field, specify a cell reference (for example, **K10**).
3. Click **OK** to apply the link.

### Cell Link Behavior

When a cell link is configured, the linked cell stores:

- **0** when the Radio Button is not selected
- **1** when the Radio Button is selected

The linked cell value is automatically updated whenever the Radio Button state changes.

## Selection Behavior

Once a Radio Button is selected, clicking the same Radio Button again does not uncheck it. Only one Radio Button in a group of controls can be selected at a time. Selecting a different Radio Button automatically deselects the previously selected one.

## Common Radio Button Operations

### Moving and Resizing
- **Drag**: Click and drag a Radio Button to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Radio Button to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

### Deletion
- **Delete**: Right-click the Radio Button and select Delete, or press Delete key after selecting the Radio Button.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

### Clipboard Operations
- **Cut**: Right-click the Radio Button and select Cut (or Ctrl+X).
- **Copy**: Right-click the Radio Button and select Copy (or Ctrl+C).
- **Paste**: Right-click a cell and select Paste (or Ctrl+V).

## Worksheet Interaction

Radio Button controls are worksheet-specific. Radio Buttons created in one worksheet exist only in that worksheet.

## Import and Export Support

Radio Button form controls are supported during Spreadsheet import and export operations. Radio Button controls retain their configuration, caption, and cell link settings during import and export.

## RTL Support

Radio Button controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, Radio Button controls render and function appropriately in RTL direction.

## Limitations

- Each Radio Button occupies a single cell location.
- Radio Buttons cannot span multiple cells.
- Cell links must reference cells in the same worksheet.
- Radio Button state cannot be indeterminate.

## See Also

* [Form Controls Overview](./overview)
* [Check Box](./check-box)
* [Drop Down](./drop-down)
* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
