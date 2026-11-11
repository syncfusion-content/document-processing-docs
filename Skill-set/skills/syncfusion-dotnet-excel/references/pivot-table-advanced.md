# Advanced Pivot Table Operations in Excel

> Advanced pivot table operations: styles & cell formatting, layout options, sorting/filtering, field grouping, calculated fields, and pivot table options using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `Syncfusion.XlsIO.Implementation`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Pivot Cell Formatting with GetCellFormat

### Minimal Code
```csharp
IPivotCellFormat cellFormat = pivotTable.GetCellFormat("A4:J5");
cellFormat.BackColor = ExcelKnownColors.Green;
```

### Format Multiple Pivot Regions
```csharp
IPivotCellFormat dataAreaFormat = pivotTable.GetCellFormat("B2:D10");
dataAreaFormat.Bold = true;
dataAreaFormat.FontColor = ExcelKnownColors.Blue;
```

---

## Pivot Table Layouts

### Compact Layout
```csharp
pivotTable.Options.RowLayout = PivotTableRowLayout.Compact;
```

### Tabular Layout
```csharp
pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular;
```

### Outline Layout
```csharp
pivotTable.Options.RowLayout = PivotTableRowLayout.Outline;
```

### Classic Layout
```csharp
(pivotTable.Options as PivotTableOptions).ShowGridDropZone = true;
```

---

## Pivot Table Field Options

### Show or Hide Field List
```csharp
pivotTable.Options.ShowFieldList = false;
```

### Header Captions
```csharp
pivotTable.Options.RowHeaderCaption = "Payment Dates";
pivotTable.Options.ColumnHeaderCaption = "Payments";
```

### Display Field Captions and Filter Buttons
```csharp
pivotTable.DisplayFieldCaptions = true;
```

---

## Grand Totals and Subtotal Options

### Control Grand Totals
```csharp
pivotTable.ColumnGrand = false;
pivotTable.RowGrand = true;
```

### Show or Hide Collapse Buttons
```csharp
pivotTable.ShowDrillIndicators = true;
```

---

## Repeat Options for Printing

### Repeat Item Labels on Each Printed Page
```csharp
pivotTable.RepeatItemsOnEachPrintedPage = true;
```

### Repeat Labels for Specific Field
```csharp
pivotTable.Fields[0].RepeatLabels = true;
```

### Repeat Labels for All Fields
```csharp
pivotTable.Options.RepeatAllLabels(true);
```

---

## Show Values Row

### Display Values as Row
```csharp
pivotTable.Options.ShowValuesRow = true;
```

---

## Pivot Field Sorting

### Sort Row Field Top to Bottom
```csharp
IPivotField rowField = pivotTable.RowFields[0];
rowField.AutoSort(PivotFieldSortType.Ascending, 1);
```

### Sort Column Field Left to Right
```csharp
IPivotField columnField = pivotTable.ColumnFields[0];
columnField.AutoSort(PivotFieldSortType.Descending, 1);
```

---

## Pivot Field Filtering

### Apply Page Field Filter
```csharp
IPivotField pageField = pivotTable.Fields[4];
pageField.Items[1].Visible = false;
pageField.Items[2].Visible = false;
```

### Apply Label Filter (CaptionEqual)
```csharp
IPivotField rowField = pivotTable.Fields[2];
rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, null, "Central", null);
```

### Apply Value Filter (ValueLessThan)
```csharp
IPivotField field = pivotTable.Fields[2];
field.PivotFilters.Add(PivotFilterType.ValueLessThan, field, "1341", null);
```

### Apply Item Filter
```csharp
IPivotField columnField = pivotTable.Fields[3];
columnField.Items[0].Visible = false;
columnField.Items[1].Visible = false;
```

---

## Pivot Field Grouping

### Group by Days
```csharp
IPivotField dateField = pivotTable.Fields[1];
dateField.FieldGroup.GroupBy = PivotFieldGroupType.Days;
```

### Group by Multiple Time Periods
```csharp
IPivotField dateField = pivotTable.Fields[1];
dateField.FieldGroup.GroupBy = PivotFieldGroupType.Years | PivotFieldGroupType.Quarters | PivotFieldGroupType.Seconds;
```

### All Grouping Types
```csharp
PivotFieldGroupType.Years        // Annual grouping
PivotFieldGroupType.Quarters      // Quarterly grouping
PivotFieldGroupType.Months        // Monthly grouping
PivotFieldGroupType.Days          // Daily grouping
PivotFieldGroupType.Hours         // Hourly grouping
PivotFieldGroupType.Minutes       // Minute-level grouping
PivotFieldGroupType.Seconds       // Second-level grouping
```

### Remove Grouping (Ungroup)
```csharp
IPivotField dateField = pivotTable.Fields[1];
dateField.FieldGroup.GroupBy = PivotFieldGroupType.None;
```

---

## Expand and Collapse Pivot Items

### Expand All Items in a Field
```csharp
PivotItemOptions options = new PivotItemOptions();
options.IsHiddenDetails = false;
```

### Collapse Specific Items
```csharp
PivotItemOptions options = new PivotItemOptions();
options.IsHiddenDetails = true;
(pivotTable.Fields[0] as PivotFieldImpl).AddItemOption(0, options);
(pivotTable.Fields[0] as PivotFieldImpl).AddItemOption(1, options);
```

---

## Calculated Fields

### Add Calculated Field
```csharp
IPivotField calcField = pivotTable.CalculatedFields.Add("Percent", "Units/3000*100");
```

### Modify Calculated Field Formula
```csharp
IPivotField calcField = pivotTable.CalculatedFields[0];
calcField.Formula = "Units/3000*200";
```

### Calculated Field Restrictions
```csharp
// Formula cannot contain cell references or defined names
// Formula cannot contain Worksheet functions that require cell references
// Formula cannot use array functions
// Example valid formula: "Sales/Total*100"
```

---

## Pivot Table Layout and Refresh

### Layout Pivot Table
```csharp
pivotTable.Layout();
```

### Refresh Pivot Table on Load
```csharp
PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;
pivotTableImpl.Cache.IsRefreshOnLoad = true;
```

### Refresh After Data Update
```csharp
worksheet.SetValue(2, 3, "250");
PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;
pivotTableImpl.Cache.IsRefreshOnLoad = true;
```

---

## Pivot Table Access and Iteration

### Access Existing Pivot Table
```csharp
IPivotTable pivotTable = sheet.PivotTables[0];
```

### Iterate All Pivot Tables in Worksheet
```csharp
for (int i = 1; i <= pivotSheet.PivotTables.Count; i++)
{
    IPivotTable pt = pivotSheet.PivotTables[i];
    Console.WriteLine($"Pivot: {pt.Name}");
}
```

### Check Pivot Table Properties
```csharp
int fieldCount = pivotTable.Fields.Count;
int dataFieldCount = pivotTable.DataFields.Count;
int rowFieldCount = pivotTable.RowFields.Count;
```

---

## Combined Filtering Example

### Apply Multiple Filters to Pivot Table
```csharp
// Page filter
pivotTable.Fields[4].Axis = PivotAxisTypes.Page;
IPivotField pageField = pivotTable.Fields[4];
pageField.Items[1].Visible = false;

// Label filter
IPivotField rowField = pivotTable.Fields[2];
rowField.PivotFilters.Add(PivotFilterType.CaptionEqual, null, "East", null);

// Item filter
IPivotField colField = pivotTable.Fields[3];
colField.Items[0].Visible = false;

// Value filter
IPivotField valueField = pivotTable.Fields[2];
valueField.PivotFilters.Add(PivotFilterType.ValueLessThan, valueField, "1341", null);
```

---

## Sorting and Styling Combined

### Sort and Format Pivot Table
```csharp
// Sort row field
IPivotField regionField = pivotTable.RowFields[0];
regionField.AutoSort(PivotFieldSortType.Ascending, 1);

// Apply style
pivotTable.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium2;

// Set cell formatting
IPivotCellFormat cellFormat = pivotTable.GetCellFormat("A4:J5");
cellFormat.BackColor = ExcelKnownColors.Cyan;
```

---

## Grouping with Layout

### Configure Grouped Pivot with Layout
```csharp
IPivotField dateField = pivotTable.Fields[1];
dateField.Axis = PivotAxisTypes.Row;
dateField.FieldGroup.GroupBy = PivotFieldGroupType.Years | PivotFieldGroupType.Months;

pivotTable.Options.RowLayout = PivotTableRowLayout.Tabular;
pivotTable.Layout();
```

