---
layout: post
title: Radio Button Form Control in React Spreadsheet | Syncfusion
description: Learn about Radio Button form control in the Syncfusion React Spreadsheet component, including editing, formatting, and cell link integration.
control: Form Controls
platform: document-processing
documentation: ug
---

# Radio Button Form Control in React Spreadsheet

The Radio Button form control allows users to select a single option from a group of mutually exclusive choices within a worksheet. Radio Buttons are ideal for scenarios where users need to choose exactly one option from several alternatives.

## Inserting Radio Button

To insert a Radio Button form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Radio Button**.
4. Click on the desired cell to place the Radio Button control.

## Editing Radio Button Caption

Users can edit the name/caption of a Radio Button by:

1. **Right-click** on the Radio Button control.
2. Select the appropriate **editing option** from the context menu.
3. Modify the caption text as needed.

The caption provides a descriptive label for the Radio Button control, making it clear to users what option the control represents.

## Format Control Dialog

When a Radio Button is right-clicked and the **Format Control** dialog is opened, the dialog provides two state options:

- **Unchecked**: The Radio Button is not selected (initial state for a new Radio Button).
- **Checked**: The Radio Button is selected.

### Accessing Format Control Dialog

1. Right-click on the Radio Button control.
2. Select **Format Control** from the context menu.
3. The Format Control dialog will display state options and Cell Link configuration.

## Cell Link Support

The Format Control dialog includes a **Cell Link** input box that allows you to link the Radio Button to a specific cell in the worksheet.

### Setting Cell Link

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Cell Link** field, specify a valid cell reference (for example, **K10**).
3. Click **OK** to apply the link.

### Cell Link Behavior

When a cell link is configured, the linked cell stores:

- **0** when the Radio Button is **not selected** (unchecked)
- **1** when the Radio Button is **selected** (checked)

The linked cell value is **automatically updated** whenever the Radio Button state changes. This enables you to:
- Track which option was selected
- Use the linked cell value in formulas for conditional logic
- Create reporting based on selected options
- Trigger actions based on selection changes

### Cell Link Example

If you link a Radio Button to cell **K10**:
- When the Radio Button is unchecked, cell K10 displays `0`
- When the Radio Button is checked, cell K10 displays `1`

In a group of Radio Buttons, each control should typically be linked to a separate cell, or use a common group identifier approach where only the selected button's linked cell contains `1`.

## Selection Behavior

### Single Selection Within Worksheet

Once a Radio Button is selected (checked), **clicking the same Radio Button again does not uncheck it**. This differs from Check Boxes and ensures that a user cannot leave a Radio Button group without a selection.

### Radio Button Group Behavior

To create a group of mutually exclusive Radio Buttons:

1. Create multiple Radio Button controls within the same worksheet.
2. Position them logically (typically in a column or row).
3. Each Radio Button should be linked to a separate cell for individual state tracking.

When Radio Button groups are implemented:
- Only one Radio Button in the group can be selected at a time
- Selecting a different Radio Button automatically deselects the previously selected one
- The linked cells reflect the state of each individual Radio Button

## Common Radio Button Operations

### Moving and Resizing
- **Drag**: Click and drag a Radio Button to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Radio Button to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

### Deletion
- **Delete**: Right-click the Radio Button and select Delete, or press Delete key after selecting the Radio Button.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

### Clipboard Operations
- **Cut**: Right-click the Radio Button and select Cut (or Ctrl+X) to cut the control.
- **Copy**: Right-click the Radio Button and select Copy (or Ctrl+C) to copy the control and its settings.
- **Paste**: Right-click a cell and select Paste (or Ctrl+V) to paste the Radio Button with its configuration.

When pasting Radio Button controls, ensure that:
- Cell link references are adjusted if needed
- The target location is appropriate for the Radio Button
- Radio Button grouping relationships remain logically organized

## Worksheet Interaction

Radio Button controls are worksheet-specific:
- Radio Buttons created in one worksheet exist only in that worksheet.
- Multiple worksheets can each have their own independent Radio Button controls and groups.
- Worksheet switching does not affect the state of Radio Buttons in other sheets.
- Radio Button selection is isolated per worksheet.

## Import and Export Support

Radio Button form controls are **fully supported** during Spreadsheet import and export operations:

- **Excel Import**: Radio Button controls from Excel files (.xlsx, .xls) are imported and retain their configuration, caption, and cell link settings.
- **Export**: When exporting the Spreadsheet to Excel format, Radio Button controls retain their state, caption, and cell link associations.
- **Format Preservation**: Cell link associations, control settings, and selection state are preserved during round-trip conversions.
- **Group Integrity**: Radio Button groups maintain their logical grouping and mutual exclusion behavior after import/export.

## RTL Support

Form Controls provide **full Right-to-Left (RTL) support**, ensuring proper rendering and interaction in RTL layouts. When RTL mode is enabled:

- Radio Button controls align properly in the worksheet
- Captions and labels display in RTL orientation
- Cell link references function correctly
- All interactions and formatting adapt to RTL direction

## Practical Example

The following scenario demonstrates a typical Radio Button usage:

**Scenario**: Priority level selection for task management.

| Task | Priority |
|---|---|
| Complete Report | ○ High ⦿ Medium ○ Low |
| Review Code | ⦿ High ○ Medium ○ Low |
| Update Documentation | ○ High ○ Medium ⦿ Low |

In this example:
- Each row contains a group of three Radio Buttons
- Each Radio Button represents a priority level (High, Medium, Low)
- Only one priority can be selected per task
- Cell links track which priority was selected
- Formulas can count tasks by priority using the linked cell values

## Best Practices

1. **Clear Labeling**: Use descriptive captions for Radio Buttons to clearly indicate what each option represents.

2. **Logical Organization**: Arrange Radio Buttons in a clear visual group (typically in a column or row) to indicate they are related options.

3. **Consistent Positioning**: Maintain consistent spacing and alignment among Radio Buttons in the same group.

4. **Link to Meaningful Cells**: Use meaningful cell references for Cell Link to make formulas and reporting more maintainable.

5. **Provide Default Selection**: Consider setting one Radio Button to checked by default to ensure the group always has a selection.

6. **Use in Combination**: Combine Radio Button groups with other form controls (Check Boxes, Drop Downs) for complex data collection scenarios.

7. **Document Groups**: In documentation or headers, clearly indicate which Radio Buttons form a group.

## Radio Button vs Check Box

| Aspect | Radio Button | Check Box |
|---|---|---|
| Selection Type | Mutually exclusive (single selection) | Independent (multiple selections) |
| State Change | Cannot uncheck a selected Radio Button | Can check and uncheck freely |
| Linked Cell Values | 0 = unchecked, 1 = checked | FALSE = unchecked, TRUE = checked |
| Use Case | Single choice from multiple options | Multiple independent boolean choices |

## Limitations

- Each Radio Button occupies a single cell location.
- Radio Buttons cannot span multiple cells.
- Cross-sheet Radio Button linking is not supported; cell links must reference cells in the same worksheet.
- Radio Button groups are based on logical organization; automatic group enforcement across separate worksheet areas is not supported.
- Radio Button state cannot be indeterminate (unlike Check Boxes with Mixed state).

## See Also

* [Form Controls Overview](./overview)
* [Check Box](./check-box)
* [Drop Down](./drop-down)
* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
