---
layout: post
title: Form Controls in ASP.NET MVC Spreadsheet | Syncfusion
description: Learn about form controls feature in the Syncfusion ASP.NET MVC Spreadsheet component, including checkboxes, radio buttons, and dropdown lists.
control: Form Controls
platform: document-processing
documentation: ug
---

# Form Controls in ASP.NET MVC Spreadsheet

The Spreadsheet component provides built-in form controls that enable users to add interactive elements within a worksheet. Form controls are associated with individual worksheets and are available only in the worksheet where they are created, rather than across the entire workbook. Use the `AllowFormControl` property to enable or disable form controls.

The default value for AllowFormControl property is true.

The following sections describe each supported form control and its configuration options.

## Supported Form Controls

The Spreadsheet supports the following form controls:

- **Check Box**: Allows toggling between checked, unchecked and mixed states.
- **Radio Button**: Allows selecting a single option from a group of choices.
- **Combo Box (Dropdown)**: Allows selecting from a predefined list of values.

## Check Box

The Check Box form control allows users to toggle between checked, unchecked, and mixed states, while updating the corresponding value in a linked cell.

Check Box provides the following configuration options:

- **Unchecked**: The unselected state of the Check Box for a Linked cell. If Unchecked, linked cell value: FALSE
- **Checked**: The selected state of the Check Box for a Linked cell. If Checked, linked cell value: TRUE
- **Mixed**: Represents the mixed state of the Check Box for a Linked cell.
- **Cell Link**: Specify a cell reference to link the Check Box to a worksheet cell.

The linked cell value is automatically updated whenever the Check Box state changes.

The following code example shows the Check Box Form Control functionality in the Spreadsheet control.

**Razor:**

```razor
@Html.EJS().Spreadsheet("spreadsheet").ShowFormulaBar(false).AllowFormControl(true).Sheets(sheet =>
{
    sheet.Name("FormControls").Rows(row =>
    {
        row.Cells(cell =>
        {
            cell.Value("Form Controls Demo").Style(new SpreadsheetCellStyle() { FontWeight = FontWeight.Bold, TextAlign = TextAlign.Center }).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Check Box Control").Add();
            cell.Value("").Add();
            cell.Value("Cell Link").Add();
            cell.Value("").Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Notifications").Add();
            cell.Value("").Add();
            cell.Value("Cell Link").Add();
            cell.Value("").Add();
        }).Index(3).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Select All").Add();
            cell.Value("").Add();
            cell.Value("Cell Link").Add();
            cell.Value("").Add();
        }).Index(5).Add();
    }).Columns(column =>
    {
        column.Width(150).Add();
        column.Width(150).Add();
        column.Width(150).Add();
        column.Width(150).Add();
    }).FormControls(formControl =>
    {
        formControl.Type("CheckBox").Text("Accept Terms").CellLink("D2").Value("Unchecked").Top(40).Left(150).Height(20).Width(120).Add();
        formControl.Type("CheckBox").Text("Enable Notifications").CellLink("D4").Value("Unchecked").Top(80).Left(150).Height(20).Width(120).Add();
        formControl.Type("CheckBox").Text("Select All Options").CellLink("D6").Value("Unchecked").Top(120).Left(150).Height(20).Width(120).Add();
    }).Add();
}).Render()
```

**Tag Helper:**

```html
<ejs-spreadsheet id="spreadsheet" showFormulaBar="false" allowFormControl="true">
    <e-sheets>
        <e-sheet name="FormControls">
            <e-rows>
                <e-row>
                    <e-cells>
                        <e-cell value="Form Controls Demo">
                            <e-cellStyle fontWeight="Bold" textAlign="Center"></e-cellStyle>
                        </e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell value="Check Box Control"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Cell Link"></e-cell>
                        <e-cell value=""></e-cell>
                    </e-cells>
                </e-row>
                <e-row index="3">
                    <e-cells>
                        <e-cell value="Notifications"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Cell Link"></e-cell>
                        <e-cell value=""></e-cell>
                    </e-cells>
                </e-row>
                <e-row index="5">
                    <e-cells>
                        <e-cell value="Select All"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Cell Link"></e-cell>
                        <e-cell value=""></e-cell>
                    </e-cells>
                </e-row>
            </e-rows>
            <e-columns>
                <e-column width="150"></e-column>
                <e-column width="150"></e-column>
                <e-column width="150"></e-column>
                <e-column width="150"></e-column>
            </e-columns>
            <e-formcontrols>
                <e-formcontrol type="CheckBox" text="Accept Terms" cellLink="D2" value="Unchecked" top="40" left="150" height="20" width="120"></e-formcontrol>
                <e-formcontrol type="CheckBox" text="Enable Notifications" cellLink="D4" value="Unchecked" top="80" left="150" height="20" width="120"></e-formcontrol>
                <e-formcontrol type="CheckBox" text="Select All Options" cellLink="D6" value="Unchecked" top="120" left="150" height="20" width="120"></e-formcontrol>
            </e-formcontrols>
        </e-sheet>
    </e-sheets>
</ejs-spreadsheet>
```

## Radio Button

The Radio Button form control allows users to store either 1 (selected) or 0 (unselected) in a linked cell.

Once a Radio Button is selected, clicking the same Radio Button again does not uncheck it.

Radio Button provides the following configuration options:

- **Unchecked**: The unselected state of the Radio Button for a Linked cell. If Unchecked, linked cell value: 0
- **Checked**: The selected state of the Radio Button for a Linked cell. If Checked, linked cell value: 1
- **Cell Link**: Specify a cell reference to link the Radio Button to a worksheet cell.

The linked cell value is automatically updated whenever the Radio Button state changes.

**Note**: Within a worksheet, only one Radio Button can be selected (checked) at a time. Selecting a new Radio Button automatically deselects any previously selected Radio Button.

The following code example shows the Radio Button Form Control functionality in the Spreadsheet control.

**Razor:**

```razor
@Html.EJS().Spreadsheet("spreadsheet").ShowFormulaBar(false).AllowFormControl(true).Sheets(sheet =>
{
    sheet.Name("RadioButtonDemo").Rows(row =>
    {
        row.Cells(cell =>
        {
            cell.Value("Shipping Options").Style(new SpreadsheetCellStyle() { FontWeight = FontWeight.Bold, TextAlign = TextAlign.Center }).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Select Shipping").Add();
            cell.Value("").Add();
            cell.Value("Selected").Add();
            cell.Value("").Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Payment Method").Style(new SpreadsheetCellStyle() { FontWeight = FontWeight.Bold, TextAlign = TextAlign.Center }).Add();
        }).Index(5).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Choose Payment").Add();
            cell.Value("").Add();
            cell.Value("Selected").Add();
            cell.Value("").Add();
        }).Index(6).Add();
    }).Columns(column =>
    {
        column.Width(150).Add();
        column.Width(180).Add();
        column.Width(150).Add();
        column.Width(150).Add();
    }).FormControls(formControl =>
    {
        // Shipping options group - linked to same cell (D2)
        formControl.Type("RadioButton").Text("Standard Shipping").CellLink("D2").Value("Unchecked").Top(40).Left(150).Height(20).Width(120).Add();
        formControl.Type("RadioButton").Text("Express Shipping").CellLink("D2").Value("Unchecked").Top(70).Left(150).Height(20).Width(120).Add();
        formControl.Type("RadioButton").Text("Overnight Shipping").CellLink("D2").Value("Unchecked").Top(100).Left(150).Height(20).Width(120).Add();
        // Payment options group - linked to same cell (D4)
        formControl.Type("RadioButton").Text("Credit Card").CellLink("D4").Value("Unchecked").Top(160).Left(150).Height(20).Width(120).Add();
        formControl.Type("RadioButton").Text("Debit Card").CellLink("D4").Value("Unchecked").Top(190).Left(150).Height(20).Width(120).Add();
        formControl.Type("RadioButton").Text("Wire Transfer").CellLink("D4").Value("Unchecked").Top(220).Left(150).Height(20).Width(120).Add();
    }).Add();
}).Render()
```

**Tag Helper:**

```html
<ejs-spreadsheet id="spreadsheet" showFormulaBar="false" allowFormControl="true">
    <e-sheets>
        <e-sheet name="RadioButtonDemo">
            <e-rows>
                <e-row>
                    <e-cells>
                        <e-cell value="Shipping Options">
                            <e-cellStyle fontWeight="Bold" textAlign="Center"></e-cellStyle>
                        </e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell value="Select Shipping"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Selected"></e-cell>
                        <e-cell value=""></e-cell>
                    </e-cells>
                </e-row>
                <e-row index="5">
                    <e-cells>
                        <e-cell value="Payment Method">
                            <e-cellStyle fontWeight="Bold" textAlign="Center"></e-cellStyle>
                        </e-cell>
                    </e-cells>
                </e-row>
                <e-row index="6">
                    <e-cells>
                        <e-cell value="Choose Payment"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Selected"></e-cell>
                        <e-cell value=""></e-cell>
                    </e-cells>
                </e-row>
            </e-rows>
            <e-columns>
                <e-column width="150"></e-column>
                <e-column width="180"></e-column>
                <e-column width="150"></e-column>
                <e-column width="150"></e-column>
            </e-columns>
            <e-formcontrols>
                <!-- Shipping options group - linked to same cell (D2) -->
                <e-formcontrol type="RadioButton" text="Standard Shipping" cellLink="D2" value="Unchecked" top="40" left="150" height="20" width="120"></e-formcontrol>
                <e-formcontrol type="RadioButton" text="Express Shipping" cellLink="D2" value="Unchecked" top="70" left="150" height="20" width="120"></e-formcontrol>
                <e-formcontrol type="RadioButton" text="Overnight Shipping" cellLink="D2" value="Unchecked" top="100" left="150" height="20" width="120"></e-formcontrol>
                <!-- Payment options group - linked to same cell (D4) -->
                <e-formcontrol type="RadioButton" text="Credit Card" cellLink="D4" value="Unchecked" top="160" left="150" height="20" width="120"></e-formcontrol>
                <e-formcontrol type="RadioButton" text="Debit Card" cellLink="D4" value="Unchecked" top="190" left="150" height="20" width="120"></e-formcontrol>
                <e-formcontrol type="RadioButton" text="Wire Transfer" cellLink="D4" value="Unchecked" top="220" left="150" height="20" width="120"></e-formcontrol>
            </e-formcontrols>
        </e-sheet>
    </e-sheets>
</ejs-spreadsheet>
```

## Combo Box (Dropdown)

The Combo Box (Dropdown) form control allows users to select an item from a predefined list and stores the selected item's position in the linked cell.

**Note**: The Combo Box (Dropdown) control displays an empty list when first inserted. You must configure the Input Range and set a Cell Link to make the Combo Box (Dropdown) functional.

Combo Box (Dropdown) provides the following configuration options:

- **Input Range**: Specify the cell range for combo box (e.g., H1:H11). This configuration uses cells H1 through H11 as the source for Combo Box options. When users click the combo box button, they will see the values from this range as selectable options.
- **Cell Link**: Specify a cell reference to link the selected item's position within the Combo Box (Dropdown).

The linked cell value is automatically updated whenever the Combo Box's selected item changes.

The following code example shows the Combo Box (Dropdown) Form Control functionality in the Spreadsheet control.

**Razor:**

```razor
@Html.EJS().Spreadsheet("spreadsheet").ShowFormulaBar(false).AllowFormControl(true).Sheets(sheet =>
{
    sheet.Name("DropDownDemo").Rows(row =>
    {
        row.Cells(cell =>
        {
            cell.Value("Drop Down Form Controls").Style(new SpreadsheetCellStyle() { FontWeight = FontWeight.Bold, TextAlign = TextAlign.Center }).Add();
            cell.Value("Delivery Options").Index(7).Add();
            cell.Value("Payment Methods").Index(8).Add();
            cell.Value("Priority").Index(9).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Delivery Options").Add();
            cell.Value("").Add();
            cell.Value("Selected Index").Add();
            cell.Value("").Add();
            cell.Value("Standard Delivery").Index(7).Add();
            cell.Value("Cash on Delivery").Index(8).Add();
            cell.Value("Low").Index(9).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Express Delivery").Index(7).Add();
            cell.Value("Credit Card").Index(8).Add();
            cell.Value("Medium").Index(9).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Payment Method").Add();
            cell.Value("").Add();
            cell.Value("Selected Index").Add();
            cell.Value("").Add();
            cell.Value("Priority Delivery").Index(7).Add();
            cell.Value("Debit Card").Index(8).Add();
            cell.Value("High").Index(9).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Pickup at Store").Index(7).Add();
            cell.Value("Online Payment").Index(8).Add();
        }).Add();
        
        row.Cells(cell =>
        {
            cell.Value("Priority Level").Add();
            cell.Value("").Add();
            cell.Value("Selected Index").Add();
            cell.Value("").Add();
            cell.Value("Digital Download").Index(7).Add();
        }).Add();
    }).Columns(column =>
    {
        column.Width(150).Add();
        column.Width(200).Add();
        column.Width(150).Add();
        column.Width(150).Add();
        column.Width(100).Add();
        column.Width(100).Add();
        column.Width(100).Add();
        column.Width(150).Add();
        column.Width(150).Add();
        column.Width(100).Add();
    }).FormControls(formControl =>
    {
        formControl.Type("DropDown").Text("Select Delivery").InputRange("H1:H5").CellLink("D2").SelectedIndex(0).Top(40).Left(150).Height(22).Width(120).Add();
        formControl.Type("DropDown").Text("Select Payment").InputRange("I1:I4").CellLink("D4").SelectedIndex(0).Top(100).Left(150).Height(22).Width(120).Add();
        formControl.Type("DropDown").Text("Select Priority").InputRange("J1:J3").CellLink("D6").SelectedIndex(1).Top(160).Left(150).Height(22).Width(120).Add();
    }).Add();
}).Render()
```

**Tag Helper:**

```html
<ejs-spreadsheet id="spreadsheet" showFormulaBar="false" allowFormControl="true">
    <e-sheets>
        <e-sheet name="DropDownDemo">
            <e-rows>
                <e-row>
                    <e-cells>
                        <e-cell value="Drop Down Form Controls">
                            <e-cellStyle fontWeight="Bold" textAlign="Center"></e-cellStyle>
                        </e-cell>
                        <e-cell index="7" value="Delivery Options"></e-cell>
                        <e-cell index="8" value="Payment Methods"></e-cell>
                        <e-cell index="9" value="Priority"></e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell value="Delivery Options"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Selected Index"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell index="7" value="Standard Delivery"></e-cell>
                        <e-cell index="8" value="Cash on Delivery"></e-cell>
                        <e-cell index="9" value="Low"></e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell index="7" value="Express Delivery"></e-cell>
                        <e-cell index="8" value="Credit Card"></e-cell>
                        <e-cell index="9" value="Medium"></e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell value="Payment Method"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Selected Index"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell index="7" value="Priority Delivery"></e-cell>
                        <e-cell index="8" value="Debit Card"></e-cell>
                        <e-cell index="9" value="High"></e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell index="7" value="Pickup at Store"></e-cell>
                        <e-cell index="8" value="Online Payment"></e-cell>
                    </e-cells>
                </e-row>
                <e-row>
                    <e-cells>
                        <e-cell value="Priority Level"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell value="Selected Index"></e-cell>
                        <e-cell value=""></e-cell>
                        <e-cell index="7" value="Digital Download"></e-cell>
                    </e-cells>
                </e-row>
            </e-rows>
            <e-columns>
                <e-column width="150"></e-column>
                <e-column width="200"></e-column>
                <e-column width="150"></e-column>
                <e-column width="150"></e-column>
                <e-column width="100"></e-column>
                <e-column width="100"></e-column>
                <e-column width="100"></e-column>
                <e-column width="150"></e-column>
                <e-column width="150"></e-column>
                <e-column width="100"></e-column>
            </e-columns>
            <e-formcontrols>
                <e-formcontrol type="DropDown" text="Select Delivery" inputRange="H1:H5" cellLink="D2" selectedIndex="0" top="40" left="150" height="22" width="120"></e-formcontrol>
                <e-formcontrol type="DropDown" text="Select Payment" inputRange="I1:I4" cellLink="D4" selectedIndex="0" top="100" left="150" height="22" width="120"></e-formcontrol>
                <e-formcontrol type="DropDown" text="Select Priority" inputRange="J1:J3" cellLink="D6" selectedIndex="1" top="160" left="150" height="22" width="120"></e-formcontrol>
            </e-formcontrols>
        </e-sheet>
    </e-sheets>
</ejs-spreadsheet>
```

## Inserting Form Controls

Form controls can be inserted through the ribbon menu:

**Ribbon → Insert → Form Controls**

Click on the desired cell location to place the Form Control and select the required Form Control type (Check Box, Radio Button, or Combo Box (Dropdown)) in the Form Controls dropdown from the insert tab within the ribbon menu.

## Accessing Format Control Dialog

The Format Control dialog allows you to configure settings specific to a form control, such as state options, input ranges, and cell links.

To open the Format Control dialog:

1. Right-click the desired form control.
2. Select Format Control from the context menu.
3. Configure the required settings and click OK to apply the changes.

## Common Form Control Operations

- **Import and Export**: Form controls retain their configuration, caption, cell link settings and layout settings during import and export.
- **Drag and Move**: Form controls can be moved to different locations within the worksheet.
- **Undo/Redo**: Use Ctrl+Z to undo deletion operations.
- **Resize**: Drag the edges of a form control to adjust its size. Undo and Redo operations are supported for resize and deletion.
- **Delete**: Right-click the form control and select Delete, or press Delete key after selecting the form control.
- **Cut, Copy, Paste**: Right-click the form control and select Cut, Copy, or Paste.
- **Right-to-Left (RTL)**: Form controls support Right-to-Left (RTL) layouts. When RTL mode is enabled, form controls render and function appropriately in RTL direction.
- **Rename**: Right-click the form control and select Edit Text from the context menu to rename it.

## See Also

- [Data Validation](../data-validation.md)
- [Cell Formatting](../formatting.md)
