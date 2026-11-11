# Create and Configure Pivot Tables in Excel

> Create, configure, and format Excel pivot tables  define data range, add row/column/data/filter fields, apply styles, set aggregation functions, show/hide subtotals and grand totals, enable drill-down, and refresh pivot tables using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `Syncfusion.XlsIO.Implementation`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Create a Basic Pivot Table

### Minimal Code
```csharp
IWorksheet dataSheet  = workbook.Worksheets[0];
IWorksheet pivotSheet = workbook.Worksheets[1];

IPivotCache cache = workbook.PivotCaches.Add(dataSheet["A1:D100"]);
IPivotTable pivot = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);

pivot.Fields["Region"].Axis  = PivotAxisTypes.Row;
pivot.Fields["Product"].Axis = PivotAxisTypes.Column;

IPivotField dataField = pivot.Fields["Sales"];
pivot.DataFields.Add(dataField, "Sum of Sales", PivotSubtotalTypes.Sum);
```

### Placeholders
- `"A1:D100"` → Replace with `"{data-range}"`
- `"PivotTable1"` → Replace with `"{table-name}"`
- `"Region"`, `"Product"`, `"Sales"` → Replace with `"{field-name}"`

### Create Pivot Cache from a Named Range
```csharp
// Named range as data source
IName namedRange    = workbook.Names["SalesData"];
IPivotCache cache   = workbook.PivotCaches.Add(namedRange.RefersToRange);
IPivotTable pivot   = pivotSheet.PivotTables.Add("PivotTable1", pivotSheet["A1"], cache);
```

---

## Add Row and Column Fields

### Minimal Code
```csharp
// Add a row field
pivot.Fields["Region"].Axis = PivotAxisTypes.Row;

// Add a column field
pivot.Fields["Product"].Axis = PivotAxisTypes.Column;
```

### Multiple Row Fields
```csharp
// First row field (outer)
pivot.Fields["Region"].Axis = PivotAxisTypes.Row;

// Second row field (inner  nested under Region)
pivot.Fields["City"].Axis = PivotAxisTypes.Row;
```

### Multiple Column Fields
```csharp
pivot.Fields["Product"].Axis   = PivotAxisTypes.Column;
pivot.Fields["Category"].Axis  = PivotAxisTypes.Column;
```

---

## Add Data Fields (Value Fields)

### Minimal Code
```csharp
IPivotField salesField = pivot.Fields["Sales"];
pivot.DataFields.Add(salesField, "Sum of Sales", PivotSubtotalTypes.Sum);
```

### Multiple Data Fields with Different Functions
```csharp
IPivotField salesField = pivot.Fields["Sales"];
pivot.DataFields.Add(salesField, "Sum of Sales",   PivotSubtotalTypes.Sum);
pivot.DataFields.Add(salesField, "Avg of Sales",   PivotSubtotalTypes.Average);
pivot.DataFields.Add(salesField, "Count of Sales", PivotSubtotalTypes.Count);
pivot.DataFields.Add(salesField, "Max of Sales",   PivotSubtotalTypes.Max);
pivot.DataFields.Add(salesField, "Min of Sales",   PivotSubtotalTypes.Min);
```

### All Aggregation Types
```csharp
PivotSubtotalTypes.Sum
PivotSubtotalTypes.Average
PivotSubtotalTypes.Count
PivotSubtotalTypes.CountNums
PivotSubtotalTypes.Max
PivotSubtotalTypes.Min
PivotSubtotalTypes.Product
PivotSubtotalTypes.StdDev
PivotSubtotalTypes.StdDevP
PivotSubtotalTypes.Var
PivotSubtotalTypes.VarP
```

---

## Number Format on Data Fields

### Minimal Code
```csharp
IPivotField dataField       = pivot.Fields["Sales"];
IPivotDataField pivotData   = pivot.DataFields.Add(dataField, "Sum of Sales", PivotSubtotalTypes.Sum);
pivotData.NumberFormat       = "$#,##0.00";
```

### Common Number Formats
```csharp
pivotData.NumberFormat = "$#,##0";         // Currency no decimal
pivotData.NumberFormat = "$#,##0.00";      // Currency 2 decimal
pivotData.NumberFormat = "0.00%";          // Percentage
pivotData.NumberFormat = "#,##0";          // Thousands separator
pivotData.NumberFormat = "0.00";           // 2 decimal places
```

---

## Grand Totals and Subtotals

### Show/Hide Grand Totals
```csharp
pivot.RowGrand    = true;   // Show grand total row
pivot.ColumnGrand = true;   // Show grand total column
```

### Show/Hide Subtotals per Field
```csharp
// Hide subtotals for a specific row field
pivot.Fields["Region"].ShowSubtotalAtTop = false;

// Show subtotals (default)
pivot.Fields["Region"].ShowSubtotalAtTop = true;
```

---

## Apply a Built-in Pivot Table Style

### Minimal Code
```csharp
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;
```

### Common Built-In Styles
```csharp
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleLight1;
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleLight16;
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium1;
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium28;
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark1;
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleDark11;
```

---

## Pivot Table Layout Options

### Repeat Item Labels
```csharp
foreach (IPivotField field in pivot.RowFields)
{
    field.RepeatLabels = true;
}
```

---

## Sort and Filter Pivot Fields

### Sort a Row Field
```csharp
IPivotField regionField = pivot.Fields["Region"];
regionField.AutoSort(PivotFieldSortType.Ascending, 1);
```

### Sort by Data Field Value
```csharp
// Sort Region by Sum of Sales descending
IPivotField regionField = pivot.Fields["Region"];
regionField.AutoSort(PivotFieldSortType.Descending, 1);
```

---

## Refresh and Calculate Pivot Table

### Minimal Code
```csharp
// Access pivot cache to refresh (cast to PivotCacheImpl to use IsRefreshOnLoad)
PivotTableImpl pivotTableImpl = pivot as PivotTableImpl;

pivotTableImpl.Cache.IsRefreshOnLoad = true;
```

---

## Access Pivot Table from Sheet

### Read Existing Pivot Table
```csharp
IPivotTable existingPivot = sheet.PivotTables[0];
Console.WriteLine("Pivot Name: " + existingPivot.Name);
Console.WriteLine("Field Count: " + existingPivot.Fields.Count);
```

### Iterate All Pivot Tables in Workbook
```csharp
foreach (IWorksheet ws in workbook.Worksheets)
{
     for (int i = 1; i <= ws.PivotTables.Count; i++)
    {
     IPivotTable pt = ws.PivotTables[i];
     Console.WriteLine($"Sheet: {ws.Name}, Pivot: {pt.Name}");
    }
}
```

---

## Full End-to-End Example

```csharp
using Syncfusion.XlsIO;
// For .NET Core / .NET 5+: use `using Syncfusion.Drawing;`
// For .NET Framework (Windows): use `using System.Drawing;`

ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook = application.Workbooks.Create(2);

// --- Sheet 1: Source Data ---
IWorksheet dataSheet = workbook.Worksheets[0];
dataSheet.Name       = "Sales Data";

// Headers
dataSheet["A1"].Text = "Region";
dataSheet["B1"].Text = "Product";
dataSheet["C1"].Text = "Year";
dataSheet["D1"].Text = "Sales";

// Sample data
object[,] data = {
    { "North", "Laptop",  2024, 45000 },
    { "North", "Tablet",  2024, 22000 },
    { "South", "Laptop",  2024, 38000 },
    { "South", "Tablet",  2024, 18000 },
    { "East",  "Laptop",  2024, 51000 },
    { "East",  "Tablet",  2024, 27000 },
    { "North", "Laptop",  2025, 52000 },
    { "North", "Tablet",  2025, 25000 },
    { "South", "Laptop",  2025, 43000 },
    { "South", "Tablet",  2025, 21000 },
    { "East",  "Laptop",  2025, 59000 },
    { "East",  "Tablet",  2025, 31000 },
};

for (int row = 0; row < data.GetLength(0); row++)
{
    dataSheet[row + 2, 1].Text   = data[row, 0].ToString();
    dataSheet[row + 2, 2].Text   = data[row, 1].ToString();
    dataSheet[row + 2, 3].Number = Convert.ToDouble(data[row, 2]);
    dataSheet[row + 2, 4].Number = Convert.ToDouble(data[row, 3]);
}

// Style header
IRange dataHeader           = dataSheet["A1:D1"];
dataHeader.CellStyle.Font.Bold  = true;
dataHeader.CellStyle.Color      = Color.FromArgb(255, 68, 114, 196);
dataHeader.CellStyle.Font.Color = ExcelKnownColors.White;

dataSheet.AutofitColumn(1);
dataSheet.AutofitColumn(2);

// --- Sheet 2: Pivot Table ---
IWorksheet pivotSheet = workbook.Worksheets[1];
pivotSheet.Name       = "Pivot Table";

// Create pivot cache from data range
IPivotCache cache = workbook.PivotCaches.Add(dataSheet["A1:D13"]);

// Create pivot table at cell A1 of pivot sheet
IPivotTable pivot = pivotSheet.PivotTables.Add("SalesPivot", pivotSheet["A1"], cache);

// Row field
pivot.Fields["Region"].Axis = PivotAxisTypes.Row;

// Column field
pivot.Fields["Product"].Axis = PivotAxisTypes.Column;

// Page (filter) field
pivot.Fields["Year"].Axis = PivotAxisTypes.Page;

// Data field  Sum of Sales
IPivotField salesField    = pivot.Fields["Sales"];
IPivotDataField dataField = pivot.DataFields.Add(salesField, "Sum of Sales", PivotSubtotalTypes.Sum);
dataField.NumberFormat     = "$#,##0";

// Grand totals
pivot.RowGrand    = true;
pivot.ColumnGrand = true;

// Style
pivot.BuiltInStyle = PivotBuiltInStyles.PivotStyleMedium9;

// Refresh
PivotTableImpl pivotTableImpl = pivot as PivotTableImpl;

pivotTableImpl.Cache.IsRefreshOnLoad = true;

workbook.SaveAs("output/pivot-table.xlsx");
workbook.Close();
excelEngine.Dispose();
```

