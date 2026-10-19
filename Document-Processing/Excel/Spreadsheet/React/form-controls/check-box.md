---
layout: post
title: Check Box Form Control in React Spreadsheet | Syncfusion
description: Learn about Check Box form control in the Syncfusion React Spreadsheet component, including editing, formatting, and cell link integration.
control: Form Controls
platform: document-processing
documentation: ug
---

# Check Box Form Control in React Spreadsheet

The Check Box form control allows users to represent checked, unchecked, and mixed states within a worksheet.

## Code Snippet

<iframe src="https://github.com/SyncfusionExamples/document-processing-docs/blob/development/Document-Processing/code-snippet/spreadsheet/react/form-controls-check-box-cs1" style="height:600px;" width="100%"></iframe>

## Inserting Check Box

To insert a Check Box form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Check Box**.
4. Click on the desired cell to place the Check Box control.

## Editing Check Box Caption

The caption of a Check Box can be edited by:

1. **Right-click** on the Check Box control.
2. Select the editing option from the context menu.
3. Modify the caption text.

## Format Control Dialog

When a Check Box is right-clicked and the **Format Control** dialog is opened, the following states are available:

- **Unchecked**: The unselected state of the Check Box.
- **Checked**: The selected state of the Check Box.
- **Mixed**: Represents the mixed state of the Check Box.

### Accessing Format Control Dialog

1. Right-click on the Check Box control.
2. Select **Format Control** from the context menu.
3. The Format Control dialog will display state options and Cell Link configuration.

## Cell Link Support

The Format Control dialog provides a **Cell Link** input box for linking the Check Box to a specific cell.

### Setting Cell Link

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Cell Link** field, specify a cell reference (for example, **J5**).
3. Click **OK** to apply the link.

### Cell Link Behavior

When a cell link is configured, the linked cell reflects the state of the Check Box:

- **Unchecked** → linked cell value: **FALSE**
- **Checked** → linked cell value: **TRUE**
- **Mixed** → linked cell value reflects the mixed state

The linked cell value is automatically synchronized whenever the Check Box state changes.

## Common Check Box Operations

### Moving and Resizing
- **Drag**: Click and drag a Check Box to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Check Box to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

### Deletion
- **Delete**: Right-click the Check Box and select Delete, or press Delete key after selecting the Check Box.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

### Clipboard Operations
- **Cut**: Right-click the Check Box and select Cut (or Ctrl+X).
- **Copy**: Right-click the Check Box and select Copy (or Ctrl+C).
- **Paste**: Right-click a cell and select Paste (or Ctrl+V).

## Worksheet Interaction

Check Box controls are worksheet-specific. A Check Box created in one worksheet exists only in that worksheet.

## Import and Export Support

Check Box form controls are supported during Excel import and export operations. Check Box controls retain their configuration, caption, and cell link settings during import and export.

## RTL Support

Check Box controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, Check Box controls render and function appropriately in RTL direction.

## Limitations

- Each Check Box occupies a single cell location.
- Check Boxes cannot span multiple cells.
- Cell links must reference cells in the same worksheet.
- Only one Check Box can be interactively selected at a time.

## See Also

* [Form Controls Overview](./overview)
* [Radio Button](./radio-button)
* [Combo Box](./combo-box)
* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
