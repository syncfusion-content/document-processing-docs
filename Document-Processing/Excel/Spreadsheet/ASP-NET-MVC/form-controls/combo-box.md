---
layout: post
title: Combo Box (Dropdown) Form Control in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn about Combo Box (Dropdown) form control in the Syncfusion ASP.NET MVC Spreadsheet component, including input ranges, cell links, and configuration.
control: Form Controls
platform: document-processing
documentation: ug
---

# Combo Box (Dropdown) Form Control in ASP.NET MVC Spreadsheet

The Combo Box (Dropdown) form control presents a predefined list of options to select from within a worksheet cell.

## Code Snippet

<iframe src="https://github.com/SyncfusionExamples/document-processing-docs/blob/development/Document-Processing/code-snippet/spreadsheet/asp-net-mvc/form-controls-dropdown-cs1" style="height:600px;" width="100%"></iframe>

## Inserting Combo Box (Dropdown)

To insert a Combo Box (Dropdown) form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Combo Box (Dropdown)**.
4. Click on the desired cell to place the Combo Box (Dropdown) control.

## Initial State

The Combo Box (Dropdown) control is **initially empty** when inserted. You must configure the Input Range and optionally set a Cell Link to make the Combo Box (Dropdown) functional.

## Format Control Dialog

Users can configure the Combo Box (Dropdown) control by:

1. **Right-click** on the Combo Box (Dropdown) control.
2. Select **Format Control** from the context menu.
3. Configure the available options in the Format Control dialog.

The Format Control dialog contains the following fields:

### Input Range

The **Input Range** field specifies the source range that contains the list values available for selection in the Combo Box (Dropdown) control.

#### Configuring Input Range

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Input Range** field, specify the cell range containing your combo box values.
3. Use standard range notation (e.g., **H1:H11** or **$H$1:$H$11**).

#### Input Range Example

```
Input Range: H1:H11
```

This configuration makes cells H1 through H11 the source of combo box options. When users click the combo box button, they will see the values from this range as selectable options.

#### Range Specification Guidelines

- **Single Column Range**: Use vertical range format (e.g., H1:H11).
- **Cell References**: Use absolute references ($H$1:$H$11) for stable references when copying the combo box.

### Cell Link

The **Cell Link** field specifies the destination cell to store the selected item index when a user makes a selection from the Combo Box (Dropdown).

#### Configuring Cell Link

1. In the **Cell Link** field, specify a valid cell reference (e.g., **K10**).
2. Click **OK** to apply the configuration.

#### Cell Link Example

```
Input Range: H1:H11
Cell Link: K10
```

With this configuration:
- The combo box lists values from H1 to H11
- When a user selects an option, the **position/index** of that option is stored in cell K10

## Cell Link Behavior

When a value is selected from the Combo Box (Dropdown) control:

- The **position of the selected item** within the Combo Box (Dropdown) list is written to the linked cell.
- The position is 1-based (first item = 1, second item = 2, etc.).
- The linked cell is **dynamically updated** whenever the selection changes.

### Cell Link Example Scenario

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

### Using Cell Link Values in Formulas

You can reference the linked cell in formulas to retrieve the actual selected value:

```
=INDEX($H$1:$H$11, K10)
```

This formula will return the actual selected value from the Input Range using the index stored in K10.

The linked cell updates automatically whenever a selection is made from the Combo Box (Dropdown).

## Common Combo Box (Dropdown) Operations

### Moving and Resizing
- **Drag**: Click and drag a Combo Box (Dropdown) control to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Combo Box (Dropdown) to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

### Deletion
- **Delete**: Right-click the Combo Box (Dropdown) and select Delete, or press Delete key after selecting the Combo Box (Dropdown).
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

### Clipboard Operations
- **Cut**: Right-click the Combo Box (Dropdown) and select Cut (or Ctrl+X).
- **Copy**: Right-click the Combo Box (Dropdown) and select Copy (or Ctrl+C).
- **Paste**: Right-click a cell and select Paste (or Ctrl+V).

## Worksheet Interaction

Combo Box (Dropdown) controls are worksheet-specific. A Combo Box (Dropdown) created in one worksheet exists only in that worksheet.

## Import and Export Support

Combo Box (Dropdown) form controls are supported during Excel import and export operations. Combo Box (Dropdown) controls retain their Input Range and Cell Link settings during import and export.

## RTL Support

Combo Box (Dropdown) controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, Combo Box (Dropdown) controls render and function appropriately in RTL direction.
