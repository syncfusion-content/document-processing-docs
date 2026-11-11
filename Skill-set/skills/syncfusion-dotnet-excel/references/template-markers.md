# Fill an Excel Template with Data Using Template Markers

> Bind data to Excel templates using template markers  simple variables, arrays, DataTable, collections (List of objects), DataSet (multiple sheets), nested objects, and conditional formatting markers using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Data`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## How Template Markers Work

Template markers are placeholders written directly in Excel cells that get replaced with actual data at runtime.

```
%VariableName%                   Simple variable
%DataTable.ColumnName%           DataTable column
%List.PropertyName%              List<T> object property
%DataSet.TableName.ColumnName%   DataSet table column
```

The `ITemplateMarkersProcessor` scans the workbook, finds all markers, binds the data, and fills the cells.

---

## Key Principle: Variable Name Matching

**CRITICAL**: The variable name passed to `AddVariable()` must **exactly match** the marker variable name in your template cells.

```
Template Marker:         %VariableName.Property%
AddVariable Call:        marker.AddVariable("VariableName", data);
                                              ↑ MUST MATCH ↑
```

✅ **Correct**:
```csharp
// Template cell: %Employees.Name%
marker.AddVariable("Employees", employeeList);
```

❌ **Incorrect**:
```csharp
// Template cell: %Employees.Name%
marker.AddVariable("Staff", employeeList);  // Name mismatch!
```

---

## Basic Setup

### Minimal Code
```csharp
// Open a template workbook that contains markers
ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
IWorkbook workbook = application.Workbooks.Open("templates/template.xlsx");

// Create the template marker processor
ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Add data sources
marker.AddVariable("Marker", "First test of markers");

// Process all markers and fill data
marker.ApplyMarkers();
```

### Placeholders
- `"templates/template.xlsx"` → Replace with `"{template-path}"`
- `"VariableName"` → Replace with `"{variable-name}"`
- `value` → Replace with `"{variable-value}"`

---

## Bind Simple Variables

### Template Cell Content
```
Sales Performance Report - %ReportTitle%
Generated: %ReportDate%
Company: %CompanyName%
Reporting Period: %ReportPeriod%
```

### Code
```csharp
IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Bind simple variables for report metadata
marker.AddVariable("ReportTitle",   "Q4 2026 Performance");
marker.AddVariable("ReportDate",    DateTime.Now.ToString("dd/MM/yyyy"));
marker.AddVariable("CompanyName",   "Contoso Ltd.");
marker.AddVariable("ReportPeriod",  "October - December 2026");

marker.ApplyMarkers();

workbook.SaveAs("output/sales-report.xlsx");
```

### Placeholders
- `"Q4 2026 Performance"`, `"Contoso Ltd."` → Replace with `"{variable-content}"`
- `DateTime.Now.ToString("dd/MM/yyyy")` → Replace with `"{date-value}"`

---

## Bind DataTable

### Template Cell Content (row 1 = headers already in template, row 2 = marker)
```
Salesperson Name     Department          Total Sales
%Sales.SalesPersonName%  %Sales.Department%  %Sales.TotalSales%
```

### Code
```csharp
// Create DataTable with sales performance data
DataTable sales = new DataTable("Sales");
sales.Columns.Add("SalesPersonName", typeof(string));
sales.Columns.Add("Department",      typeof(string));
sales.Columns.Add("TotalSales",      typeof(double));

sales.Rows.Add("Alice Johnson",  "North America", 125000.00);
sales.Rows.Add("Bob Smith",      "Europe",       98500.50);
sales.Rows.Add("Carol Williams", "Asia Pacific", 112000.00);
sales.Rows.Add("David Brown",    "North America", 135500.75);

IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Variable name "Sales" matches the marker variable in template
marker.AddVariable("Sales", sales);
marker.ApplyMarkers();

workbook.SaveAs("output/sales-report.xlsx");
```

### Placeholders
- `"Sales"` → Replace with `"{datatable-name}"`
- Column names must match exactly: `SalesPersonName`, `Department`, `TotalSales`
```

---

## Bind List of Objects (POCO)

### Define the Class
```csharp
public class SalesPerson
{
    public int    Id                { get; set; }
    public string SalesPersonName   { get; set; }
    public string Department        { get; set; }
    public double TotalSales        { get; set; }
}
```

### Template Cell Content
```
Salesperson Name     Department          Total Sales
%Sales.SalesPersonName%  %Sales.Department%  %Sales.TotalSales%
```

### Code
```csharp
// Create a list of SalesPerson objects with the same sales data
List<SalesPerson> sales = new List<SalesPerson>
{
    new SalesPerson { Id = 1, SalesPersonName = "Alice Johnson",  Department = "North America", TotalSales = 125000.00 },
    new SalesPerson { Id = 2, SalesPersonName = "Bob Smith",      Department = "Europe",       TotalSales = 98500.50  },
    new SalesPerson { Id = 3, SalesPersonName = "Carol Williams", Department = "Asia Pacific", TotalSales = 112000.00 },
    new SalesPerson { Id = 4, SalesPersonName = "David Brown",    Department = "North America", TotalSales = 135500.75 },
};

IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Variable name "Sales" matches the marker variable in template
marker.AddVariable("Sales", sales);
marker.ApplyMarkers();

workbook.SaveAs("output/sales-report.xlsx");
```

---

## Bind DataSet (Multiple Sheets)

### Template Setup
- Sheet1 (Sales Summary) contains: `%SalesByRegion.Department%`  `%SalesByRegion.TotalSales%`
- Sheet2 (Quarterly Breakdown) contains: `%QuarterlySales.Quarter%`  `%QuarterlySales.Amount%`

### Code
```csharp
DataSet ds = new DataSet();

// Sheet 1: Sales by Region/Department
DataTable salesByRegion = new DataTable("SalesByRegion");
salesByRegion.Columns.Add("Department",  typeof(string));
salesByRegion.Columns.Add("TotalSales",  typeof(double));
salesByRegion.Rows.Add("North America", 260500.75);
salesByRegion.Rows.Add("Europe",        98500.50);
salesByRegion.Rows.Add("Asia Pacific",  112000.00);
ds.Tables.Add(salesByRegion);

// Sheet 2: Quarterly breakdown for tracking
DataTable quarterlySales = new DataTable("QuarterlySales");
quarterlySales.Columns.Add("Quarter", typeof(string));
quarterlySales.Columns.Add("Amount",  typeof(double));
quarterlySales.Rows.Add("Q1 2026", 135500.00);
quarterlySales.Rows.Add("Q2 2026", 140250.50);
quarterlySales.Rows.Add("Q3 2026", 125000.75);
quarterlySales.Rows.Add("Q4 2026", 170250.00);
ds.Tables.Add(quarterlySales);

IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Add both DataTables as separate sheets
marker.AddVariable("SalesByRegion",  ds.Tables["SalesByRegion"]);
marker.AddVariable("QuarterlySales", ds.Tables["QuarterlySales"]);
marker.ApplyMarkers();

workbook.SaveAs("output/sales-report.xlsx");
```

---

## Bind Nested Object Properties

### Define Classes
```csharp
public class SalesPerson
{
    public int    Id                { get; set; }
    public string SalesPersonName   { get; set; }
    public string Department        { get; set; }
    public List<SalesRecord> Records { get; set; }
}

public class SalesRecord
{
    public string Quarter { get; set; }
    public double Amount  { get; set; }
}
```

### Template Cell Content
```
Salesperson: %Sales.SalesPersonName%    Department: %Sales.Department%
Quarter              Amount
%Sales.Records.Quarter%  %Sales.Records.Amount%
```

### Code
```csharp
List<SalesPerson> sales = new List<SalesPerson>
{
    new SalesPerson
    {
        Id = 1,
        SalesPersonName = "Alice Johnson",
        Department = "North America",
        Records = new List<SalesRecord>
        {
            new SalesRecord { Quarter = "Q1 2026", Amount = 30000.00 },
            new SalesRecord { Quarter = "Q2 2026", Amount = 32000.00 },
            new SalesRecord { Quarter = "Q3 2026", Amount = 31000.00 },
            new SalesRecord { Quarter = "Q4 2026", Amount = 32000.75 }
        }
    },
    new SalesPerson
    {
        Id = 2,
        SalesPersonName = "Bob Smith",
        Department = "Europe",
        Records = new List<SalesRecord>
        {
            new SalesRecord { Quarter = "Q1 2026", Amount = 24000.00 },
            new SalesRecord { Quarter = "Q2 2026", Amount = 25000.50 },
            new SalesRecord { Quarter = "Q3 2026", Amount = 24500.00 },
            new SalesRecord { Quarter = "Q4 2026", Amount = 25000.00 }
        }
    }
};

IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Variable name "Sales" matches the marker variable in the template
marker.AddVariable("Sales", sales);
marker.ApplyMarkers();

workbook.SaveAs("output/sales-report.xlsx");
```

### Key Point
- Template marker: `%Sales.SalesPersonName%`, `%Sales.Records.Quarter%`
- Variable name passed: `"Sales"` ← **Must match template marker variable**
- The `.` notation allows deep property access: `Sales.Records.Quarter` accesses nested collection's property

---

## Bind Array of Values

### Template Cell Content
```
Report Generated Quarters:
%Quarters%
```

### Code
```csharp
// Create array of quarterly values to fill vertically
string[] quarters = { "Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026" };

IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Variable name "Quarters" matches the marker in template
marker.AddVariable("Quarters", quarters);
marker.ApplyMarkers();

workbook.SaveAs("output/sales-report.xlsx");
```

---

## Marker with Horizontal Fill Direction

### Template Cell Content (markers placed in a row for horizontal filling)
```
Quarter Performance: 2026

Q1          Q2          Q3          Q4
%SalesData.Q1Sales%    %SalesData.Q2Sales%    %SalesData.Q3Sales%    %SalesData.Q4Sales%
```

### Code
```csharp
// Create DataTable with quarterly sales in columns (horizontal layout)
DataTable salesData = new DataTable("SalesData");
salesData.Columns.Add("Q1Sales", typeof(double));
salesData.Columns.Add("Q2Sales", typeof(double));
salesData.Columns.Add("Q3Sales", typeof(double));
salesData.Columns.Add("Q4Sales", typeof(double));

// Quarterly totals across all regions
salesData.Rows.Add(135500.00, 140250.50, 125000.75, 170250.00);

IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// Variable name "SalesData" matches marker variable; data fills horizontally
marker.AddVariable("SalesData", salesData);
marker.ApplyMarkers(UnknownVariableAction.Skip);

workbook.SaveAs("output/sales-report.xlsx");
```

### Key Point
- Markers are placed in a **row** instead of a column: `%SalesData.Q1Sales%`, `%SalesData.Q2Sales%`, etc.
- Data fills **horizontally** across columns instead of vertically down rows

---

## Control Unknown Marker Behavior

### Options
```csharp
// Skip unknown markers (leave as-is in the cell)
marker.ApplyMarkers(UnknownVariableAction.Skip);

// ReplaceBlank  replace with blank cell (default)
marker.ApplyMarkers(UnknownVariableAction.ReplaceBlank);
```

---

## Full End-to-End Example

### Template Cell Content (sales-template.xlsx)
```
═══════════════════════════════════════════════════════════════
Sales Performance Report - %ReportTitle%
Generated: %ReportDate%     Company: %CompanyName%
Reporting Period: %ReportPeriod%
═══════════════════════════════════════════════════════════════

SALES BY SALESPERSON:
Salesperson Name         Department              Total Sales
%Sales.SalesPersonName%      %Sales.Department%     %Sales.TotalSales%

QUARTERLY BREAKDOWN:
Quarter         Amount
%QuarterlySales.Quarter%     %QuarterlySales.Amount%

Available Regions:
%Regions%
```

### Code
```csharp
using Syncfusion.XlsIO;
using System;
using System.Collections.Generic;
using System.Data;

// Define classes for nested objects
public class SalesPerson
{
    public int    Id              { get; set; }
    public string SalesPersonName { get; set; }
    public string Department      { get; set; }
    public double TotalSales      { get; set; }
}

// Main example
ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Open the sales template
IWorkbook workbook = application.Workbooks.Open("templates/sales-template.xlsx");

ITemplateMarkersProcessor marker = workbook.CreateTemplateMarkersProcessor();

// 1. Bind simple variables (report metadata)
marker.AddVariable("ReportTitle",  "Q4 2026 Performance");
marker.AddVariable("ReportDate",   DateTime.Now.ToString("dd/MM/yyyy"));
marker.AddVariable("CompanyName",  "Contoso Ltd.");
marker.AddVariable("ReportPeriod", "October - December 2026");

// 2. Bind List of SalesPerson objects (list binding)
List<SalesPerson> sales = new List<SalesPerson>
{
    new SalesPerson { Id = 1, SalesPersonName = "Alice Johnson",  Department = "North America", TotalSales = 125000.00 },
    new SalesPerson { Id = 2, SalesPersonName = "Bob Smith",      Department = "Europe",       TotalSales = 98500.50  },
    new SalesPerson { Id = 3, SalesPersonName = "Carol Williams", Department = "Asia Pacific", TotalSales = 112000.00 },
    new SalesPerson { Id = 4, SalesPersonName = "David Brown",    Department = "North America", TotalSales = 135500.75 }
};
marker.AddVariable("Sales", sales);

// 3. Bind DataTable for quarterly summary (DataTable binding)
DataTable quarterlySales = new DataTable("QuarterlySales");
quarterlySales.Columns.Add("Quarter", typeof(string));
quarterlySales.Columns.Add("Amount",  typeof(double));
quarterlySales.Rows.Add("Q1 2026", 135500.00);
quarterlySales.Rows.Add("Q2 2026", 140250.50);
quarterlySales.Rows.Add("Q3 2026", 125000.75);
quarterlySales.Rows.Add("Q4 2026", 170250.00);
marker.AddVariable("QuarterlySales", quarterlySales);

// 4. Bind array of region values (array binding)
string[] regions = { "North America", "Europe", "Asia Pacific" };
marker.AddVariable("Regions", regions);

// Process all markers and fill data
marker.ApplyMarkers();

// Save the completed report
workbook.SaveAs("output/sales-report.xlsx");
workbook.Close();
excelEngine.Dispose();

Console.WriteLine("Sales report generated successfully!");
```


