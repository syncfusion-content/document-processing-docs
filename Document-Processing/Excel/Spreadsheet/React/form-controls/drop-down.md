---
layout: post
title: Drop Down Form Control in React Spreadsheet | Syncfusion
description: Learn about Drop Down form control in the Syncfusion React Spreadsheet component, including input ranges, cell links, and configuration.
control: Form Controls
platform: document-processing
documentation: ug
---

# Drop Down Form Control in React Spreadsheet

The Drop Down form control presents users with a predefined list of options to select from within a worksheet cell. Drop Down controls are ideal for standardizing data entry, preventing invalid entries, and reducing manual typing errors.

## Inserting Drop Down

To insert a Drop Down form control:

1. Select the **Insert** tab in the ribbon.
2. Click **Form Controls** dropdown.
3. Select **Drop Down**.
4. Click on the desired cell to place the Drop Down control.

## Initial State

The Drop Down control is **initially empty** when inserted. You must configure the Input Range and optionally set a Cell Link to make the Drop Down functional.

## Format Control Dialog

Users can configure the Drop Down control by:

1. **Right-click** on the Drop Down control.
2. Select **Format Control** from the context menu.
3. Configure the available options in the Format Control dialog.

The Format Control dialog contains the following fields:

### Input Range

The **Input Range** field specifies the source range that contains the list values available for selection in the Drop Down control.

#### Configuring Input Range

1. Open the Format Control dialog (right-click → Format Control).
2. In the **Input Range** field, specify the cell range containing your dropdown values.
3. Use standard range notation (e.g., **H1:H11** or **$H$1:$H$11**).

#### Input Range Example

```
Input Range: H1:H11
```

This configuration makes cells H1 through H11 the source of dropdown options. When users click the dropdown button, they will see the values from this range as selectable options.

#### Range Specification Guidelines

- **Single Column Range**: Typically recommended (e.g., H1:H11) for vertical list organization.
- **Cell References**: Use absolute references ($H$1:$H$11) for stability when copying the dropdown.
- **Named Ranges**: You can reference named ranges (e.g., DepartmentList) if previously defined in the workbook.
- **Dynamic Ranges**: Use formulas with dynamic functions (INDIRECT, OFFSET) for dynamic dropdown lists.

### Cell Link

The **Cell Link** field specifies the destination cell to store the selected item index when a user makes a selection from the Drop Down.

#### Configuring Cell Link

1. In the **Cell Link** field, specify a valid cell reference (e.g., **K10**).
2. Click **OK** to apply the configuration.

#### Cell Link Example

```
Input Range: H1:H11
Cell Link: K10
```

With this configuration:
- The dropdown lists values from H1 to H11
- When a user selects an option, the **position/index** of that option is stored in cell K10

## Cell Link Behavior

When a value is selected from the Drop Down control:

- The **position of the selected item** within the dropdown list is written to the linked cell.
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

When a user selects "Engineering" from the dropdown:
- Cell K10 displays **3** (because Engineering is the 3rd item in the list)

When a user selects "Finance" from the dropdown:
- Cell K10 displays **5** (because Finance is the 5th item in the list)

### Using Cell Link Values in Formulas

You can reference the linked cell in formulas to retrieve the actual selected value:

```
=INDEX($H$1:$H$11, K10)
```

This formula will return the actual selected value from the Input Range using the index stored in K10.

### Updating Cell Link Dynamically

The linked cell updates automatically whenever:
- A user clicks the dropdown and selects a different item
- The dropdown value is changed programmatically through the API
- The dropdown is reset or cleared

## Common Drop Down Operations

### Moving and Resizing
- **Drag**: Click and drag a Drop Down control to move it to a different location in the worksheet.
- **Resize**: Drag the edges of the Drop Down to adjust its size.
- **Undo/Redo**: Use Ctrl+Z (Undo) and Ctrl+Y (Redo) to revert or reapply resize operations.

### Deletion
- **Delete**: Right-click the Drop Down and select Delete, or press Delete key after selecting the Drop Down.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.

### Clipboard Operations
- **Cut**: Right-click the Drop Down and select Cut (or Ctrl+X) to cut the control.
- **Copy**: Right-click the Drop Down and select Copy (or Ctrl+C) to copy the control and its settings.
- **Paste**: Right-click a cell and select Paste (or Ctrl+V) to paste the Drop Down with its configuration.

When pasting Drop Down controls, the Input Range and Cell Link settings are preserved. Consider whether cell links need adjustment based on the paste target location.

## Worksheet Interaction

Drop Down controls are worksheet-specific:
- A Drop Down created in one worksheet exists only in that worksheet.
- Multiple worksheets can each have their own independent Drop Down controls.
- Worksheet switching does not affect the state or configuration of Drop Downs in other sheets.
- Input Ranges are worksheet-scoped and reference cells within the same worksheet.

## Import and Export Support

Drop Down form controls are **fully supported** during Spreadsheet import and export operations:

- **Excel Import**: Drop Down controls from Excel files (.xlsx, .xls) are imported and retain their configuration, Input Range, and Cell Link settings.
- **Export**: When exporting the Spreadsheet to Excel format, Drop Down controls retain their Input Range, Cell Link associations, and current selection.
- **Format Preservation**: Input Range references and Cell Link settings are preserved during round-trip conversions.
- **Dynamic Range Support**: Dynamic Input Ranges using formulas are preserved during import/export operations.

## RTL Support

Form Controls provide **full Right-to-Left (RTL) support**, ensuring proper rendering and interaction in RTL layouts. When RTL mode is enabled:

- Drop Down controls align properly in the worksheet
- Dropdown lists display in RTL orientation
- Cell link references function correctly
- All interactions and dropdown expansion adapt to RTL direction

## Practical Example

The following scenario demonstrates a typical Drop Down usage:

**Scenario**: Employee department assignment in a personnel record.

| Employee | Department |
|---|---|
| John Smith | [Sales ▼] |
| Mary Johnson | [Engineering ▼] |
| Robert Davis | [Marketing ▼] |

**Configuration**:
```
Input Range: DepartmentList (named range containing: Sales, Marketing, Engineering, HR, Finance)
Cell Link for Row 2: K2
Cell Link for Row 3: K3
Cell Link for Row 4: K4
```

When an employee's department is selected:
- Cell K2, K3, or K4 stores the index (1-5) representing the selected department
- A formula retrieves the actual department name: =INDEX(DepartmentList, K2)
- Reports can use these indices for filtering, counting, or validation

## Advanced Configuration

### Dynamic Input Ranges

You can create dynamic dropdown lists using formulas:

```
Input Range: INDIRECT("DepartmentList" & SheetName)
```

This approach allows the dropdown options to change based on other worksheet values.

### Dependent Drop Downs

Create cascading dropdowns where the options in one dropdown depend on the selection in another:

1. Create a primary drop down (e.g., Region)
2. Create secondary drop downs (e.g., Country) with Input Ranges that reference the primary selection
3. Use INDEX/MATCH or FILTER functions to dynamically populate the secondary dropdown

## Best Practices

1. **Clear Source Data**: Maintain the Input Range list with clear, consistent values without duplicates.

2. **Meaningful Cell Links**: Use descriptive cell locations for Cell Links to make formulas and reporting more maintainable.

3. **Pre-populate If Appropriate**: Consider setting a default selection by pre-populating the Cell Link with a default index value.

4. **Document Dropdown Purpose**: Use column headers and labels to clearly indicate what each dropdown represents.

5. **Consistent Sizing**: Make drop downs appropriately sized to accommodate the expected text length of selection options.

6. **Validation Combinations**: Combine drop downs with other data validation rules for complex data collection scenarios.

7. **Test Round-Trip**: Verify that drop down configurations are correctly preserved when working with Excel files.

8. **Monitor Input Range Changes**: When the Input Range source changes, verify that the dropdown still functions correctly.

## Limitations

- Each Drop Down occupies a single cell location.
- Drop Downs cannot span multiple cells.
- The Cell Link stores the **index/position** of the selected item, not the item value itself. Use INDEX formula to retrieve the actual value.
- Cross-sheet Drop Down linking is not supported; Input Range and Cell Link must reference cells in the same worksheet.
- Input Range must be a contiguous cell range; non-contiguous ranges are not supported.
- Drop Down lists are limited to cell-based source ranges; API-based data sources must be configured through cell ranges.

## Troubleshooting

### Drop Down Shows No Values

**Symptom**: The Drop Down appears empty when clicked.

**Solutions**:
- Verify that the Input Range is correctly specified and contains actual data.
- Ensure the Input Range reference syntax is correct (e.g., H1:H11, not H1-H11).
- Check that the Input Range cells contain the expected dropdown option values.

### Cell Link Not Updating

**Symptom**: The Cell Link does not update when dropdown selection changes.

**Solutions**:
- Verify that the Cell Link is correctly specified in the Format Control dialog.
- Ensure the Cell Link references a valid, accessible cell.
- Check that the dropdown has an Input Range configured.

### Pasted Drop Down References Wrong Range

**Symptom**: After pasting a drop down, it references the wrong Input Range.

**Solutions**:
- Edit the Format Control dialog to update the Input Range reference.
- Use absolute references ($H$1:$H$11) instead of relative references for stability during copy/paste operations.

## See Also

* [Form Controls Overview](./overview)
* [Check Box](./check-box)
* [Radio Button](./radio-button)
* [Data Validation](../data-validation)
* [Cell Formatting](../formatting/text-cell-formatting)
* [Events](../events)
