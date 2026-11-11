# Pivot Charts in Excel

> Create and configure pivot charts from pivot table data with chart types, field button options, and series formatting using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `Syncfusion.XlsIO.Implementation`, `System`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** (No additional usings required)
> **Required usings for .NET Framework (Windows):** (No additional usings required)

---

## Create a Basic Pivot Chart

### Minimal Code
```csharp
IChart pivotChart = workbook.Charts.Add();
pivotChart.PivotSource = pivotTable;
pivotChart.PivotChartType = ExcelChartType.Column_Clustered;
```

### Placeholders
- `pivotTable` → Replace with `{pivot-table-object}`
- `ExcelChartType.Column_Clustered` → Replace with `{chart-type}`

---

## Pivot Chart Types

### Common Pivot Chart Types
```csharp
pivotChart.PivotChartType = ExcelChartType.Column_Clustered;
pivotChart.PivotChartType = ExcelChartType.Column_Stacked;
pivotChart.PivotChartType = ExcelChartType.Column_PercentStacked;
```

### Bar Chart Types
```csharp
pivotChart.PivotChartType = ExcelChartType.Bar_Clustered;
pivotChart.PivotChartType = ExcelChartType.Bar_Stacked;
pivotChart.PivotChartType = ExcelChartType.Bar_PercentStacked;
```

### Line Chart Types
```csharp
pivotChart.PivotChartType = ExcelChartType.Line;
pivotChart.PivotChartType = ExcelChartType.Line_Markers;
pivotChart.PivotChartType = ExcelChartType.Line_MarkersStacked;
```

### Pie and Area Charts
```csharp
pivotChart.PivotChartType = ExcelChartType.Pie;
pivotChart.PivotChartType = ExcelChartType.Area;
pivotChart.PivotChartType = ExcelChartType.Area_Stacked;
```

---

## Pivot Chart Field Buttons

### Hide All Field Buttons
```csharp
pivotChart.ShowAllFieldButtons = false;
```

### Hide Specific Field Buttons
```csharp
pivotChart.ShowAxisFieldButtons = false;
pivotChart.ShowLegendFieldButtons = false;
pivotChart.ShowReportFilterFieldButtons = false;
pivotChart.ShowValueFieldButtons = false;
```

### Show Individual Field Buttons
```csharp
pivotChart.ShowAxisFieldButtons = true;
pivotChart.ShowLegendFieldButtons = true;
pivotChart.ShowReportFilterFieldButtons = true;
```

---

## Pivot Chart Series Formatting

### Add Series to Pivot Chart
```csharp
pivotChart.Series.Add(ExcelChartType.Column_Stacked);
```

### Set Series Overlap
```csharp
pivotChart.Series[0].SerieFormat.CommonSerieOptions.Overlap = 100;
```

### Format Series Properties
```csharp
pivotChart.Series[0].SerieFormat.Line.LinePattern = ExcelLinePattern.Solid;
pivotChart.Series[0].SerieFormat.Line.LineColor = ExcelKnownColors.Blue;
```

---

## Pivot Chart Titles and Labels

### Set Chart Title
```csharp
pivotChart.ChartTitle = "Sales by Region";
```

### Set Axis Titles
```csharp
pivotChart.PrimaryValueAxis.Title = "Amount ($)";
pivotChart.PrimaryCategoryAxis.Title = "Region";
```

---

---

## Access Existing Pivot Chart

### Get Pivot Chart from Worksheet
```csharp
IChart pivotChart = worksheet.Charts[0];
```

### Check Pivot Chart Type
```csharp
ExcelChartType chartType = pivotChart.PivotChartType;
```

### Access Pivot Chart Series
```csharp
foreach (IChartSerie serie in pivotChart.Series)
{
    Console.WriteLine($"Series: {serie.SerieFormat}");
}
```

---

## Pivot Chart and Pivot Table Synchronization

### Refresh Pivot Chart with Pivot Table
```csharp
pivotTable.Layout();
pivotChart.PivotSource = pivotTable;
```

### Update Chart After Pivot Refresh
```csharp
PivotTableImpl pivotTableImpl = pivotTable as PivotTableImpl;
pivotTableImpl.Cache.IsRefreshOnLoad = true;
```

---

## Complete Pivot Chart Example

### Create Pivot Chart from Pivot Table
```csharp
// Assume pivotTable is already created
IChart pivotChart = workbook.Charts.Add();
pivotChart.PivotSource = pivotTable;
pivotChart.PivotChartType = ExcelChartType.Column_Clustered;

// Set chart properties
pivotChart.ChartTitle = "Sales Summary";
pivotChart.HasLegend = true;
pivotChart.ShowAllFieldButtons = false;

// Position on worksheet
pivotChart.TopRow = 5;
pivotChart.LeftColumn = 5;
```

---

## Limitations and Notes

### XlsIO Pivot Chart Limitations
```csharp
// XlsIO supports PivotCharts only for XLSX format (not XLS)
// Series must be added manually for pivot charts
// Automatic series creation from pivot table is not supported
// Field buttons are supported from Excel 2010 onwards
```

