---
layout: post
title: Check Box Form Control in React Spreadsheet | Syncfusion
description: Learn about Check Box form control in the Syncfusion React Spreadsheet component, including editing, formatting, and cell link integration.
control: Form Controls
platform: document-processing
documentation: ug
---

# Check Box Form Control in React Spreadsheet

The Check Box form control allows users to toggle a binary choice (checked/unchecked) within a worksheet cell. Check boxes are ideal for indicating boolean states, task completion, feature toggles, or selection scenarios.

## Inserting Check Box

To insert a Check Box form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Check Box**.
4. Click on the desired cell to place the Check Box control.

## Editing Check Box Caption

Users can edit the name/caption of a Check Box by:

1. **Right-click** on the Check Box control.
2. Select the appropriate **editing option** from the context menu.
3. Modify the caption text as needed.

The caption provides a descriptive label for the Check Box control, making it clear to users what the control represents.

## Format Control Dialog

When a Check Box is right-clicked and the **Format Control** dialog is opened, the following check box states are available:

- **Unchecked**: The initial or unselected state of the Check Box.
- **Checked**: The selected state of the Check Box.
- **Mixed**: An intermediate state that can represent a partial or indeterminate selection (useful when the Check Box represents a group of sub-options with mixed selection states).

### Accessing Format Control Dialog

1. Right-click on the Check Box control.
2. Select **Format Control** from the context menu.
3. The Format Control dialog will display state options and Cell Link configuration.

## Cell Link Support

The Format Control dialog provides a **Cell Link** input box that allows you to link the Check Box to a specific cell in the worksheet.

### Setting Cell Link

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Cell Link** field, specify a valid cell reference (for example, **J5**).
3. Click **OK** to apply the link.

### Cell Link Behavior

When a cell link is configured, the linked cell dynamically reflects the state of the Check Box:

- **Unchecked** → linked cell value becomes **FALSE**
- **Checked** → linked cell value becomes **TRUE**
- **Mixed** → linked cell value updates to reflect the mixed state

The linked cell value is **automatically synchronized** whenever the Check Box state changes. This enables you to use the linked cell value in formulas, data validation rules, or other worksheet operations.

### Cell Link Example

If you link a Check Box to cell **J5**:
- When the Check Box is checked, cell J5 displays `TRUE`
- When the Check Box is unchecked, cell J5 displays `FALSE`

You can then use this cell reference in formulas like:
```
=IF(J5, "Completed", "Pending")
```

## Check Box Group Behavior

When multiple Check Box controls are present within the current worksheet, **only one Check Box can be selected at a time** within the user interface interaction. However, multiple Check Boxes can have their checked state set programmatically through cell link integration or API methods.

This behavior allows you to:
- Create individual Check Boxes for independent binary choices
- Link each Check Box to different cells for separate state tracking
- Apply independent actions based on each Check Box's state

## Common Check Box Operations

### Moving and Resizing
- **Drag**: Click and drag a Check Box to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Check Box to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

### Deletion
- **Delete**: Right-click the Check Box and select Delete, or press Delete key after selecting the Check Box.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

### Clipboard Operations
- **Cut**: Right-click the Check Box and select Cut (or Ctrl+X) to cut the control.
- **Copy**: Right-click the Check Box and select Copy (or Ctrl+C) to copy the control and its settings.
- **Paste**: Right-click a cell and select Paste (or Ctrl+V) to paste the Check Box with its configuration.

When pasting a Check Box, the cell link reference may need to be adjusted depending on the target location.

## Worksheet Interaction

Check Box controls are worksheet-specific:
- A Check Box created in one worksheet exists only in that worksheet.
- Multiple worksheets can each have their own independent Check Box controls.
- Worksheet switching does not affect the state of Check Boxes in other sheets.

## Import and Export Support

Check Box form controls are **fully supported** during Spreadsheet import and export operations:

- **Excel Import**: Check Box controls from Excel files (.xlsx, .xls) are imported and retain their configuration, caption, and cell link settings.
- **Export**: When exporting the Spreadsheet to Excel format, Check Box controls retain their state, caption, and cell link associations.
- **Format Preservation**: Cell link associations and control settings are preserved during round-trip conversions.

## RTL Support

Form Controls provide **full Right-to-Left (RTL) support**, ensuring proper rendering and interaction in RTL layouts. When RTL mode is enabled:

- Check Box controls align properly in the worksheet
- Captions and labels display in RTL orientation
- Cell link references function correctly
- All interactions and formatting adapt to RTL direction

## Practical Example

The following scenario demonstrates a typical Check Box usage:

**Scenario**: Task completion tracking in a project list.

| Task | Completed |
|---|---|
| Design UI | ☑ (Checked) |
| Develop Backend | ☐ (Unchecked) |
| Write Tests | ◻ (Mixed) |

Each Check Box is linked to a corresponding cell that stores TRUE/FALSE values, enabling:
- Status tracking
- Automatic calculation of project completion percentage
- Conditional formatting based on completion status
- Filtering incomplete tasks

## Best Practices

1. **Provide Clear Labels**: Use descriptive captions for Check Boxes to clearly indicate what action or state they represent.

2. **Link to Appropriate Cells**: Use meaningful cell references for Cell Link to make formulas and references more maintainable.

3. **Use Mixed State Appropriately**: Reserve the Mixed state for scenarios where it truly represents an indeterminate or aggregate state.

4. **Consistent Positioning**: Arrange Check Boxes consistently within the worksheet for better user experience.

5. **Combine with Formulas**: Link Check Boxes to cells and use those cells in formulas for dynamic calculations and conditional logic.

6. **Test Import/Export**: Verify that Check Box configurations are correctly preserved when working with Excel files.

## Limitations

- Each Check Box occupies a single cell location.
- Check Boxes cannot span multiple cells.
- Cross-sheet Check Box linking is not supported; cell links must reference cells in the same worksheet.
- Only one Check Box can be interactively selected at a time, though multiple can be in a checked state.

## See Also

* [Form Controls Overview](./overview)
* [Radio Button](./radio-button)
* [Drop Down](./drop-down)
* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
