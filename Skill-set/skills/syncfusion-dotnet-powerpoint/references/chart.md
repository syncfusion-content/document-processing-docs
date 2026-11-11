# Charts

> Add, edit, refresh, format, and remove charts in a PowerPoint presentation — including column, scatter, funnel, waterfall, histogram, pareto, box & whisker, and custom combo charts.

---
## Cross-Platform (Required Usings)

```csharp
using Syncfusion.OfficeChart;
using Syncfusion.Presentation;
using Syncfusion.Drawing;
```
## Windows-specific (Required usings)
```csharp
using Syncfusion.OfficeChart;
using Syncfusion.Presentation;
using System.Drawing;
```
---
## Create a Chart from Scratch

### Minimal Code
```csharp

// AddChart(x, y, width, height) — values in points
IPresentationChart chart = slide.Charts.AddChart(100, 10, 700, 500);
chart.ChartTitle = "Sales Analysis";

// Set column headers (row 1)
chart.ChartData.SetValue(1, 2, "Jan");
chart.ChartData.SetValue(1, 3, "Feb");
chart.ChartData.SetValue(1, 4, "March");

// Set row data (row index, col index, value)
chart.ChartData.SetValue(2, 1, 2010); chart.ChartData.SetValue(2, 2, 60); chart.ChartData.SetValue(2, 3, 70); chart.ChartData.SetValue(2, 4, 80);
chart.ChartData.SetValue(3, 1, 2011); chart.ChartData.SetValue(3, 2, 80); chart.ChartData.SetValue(3, 3, 70); chart.ChartData.SetValue(3, 4, 60);
chart.ChartData.SetValue(4, 1, 2012); chart.ChartData.SetValue(4, 2, 60); chart.ChartData.SetValue(4, 3, 70); chart.ChartData.SetValue(4, 4, 80);

// Add series and bind data ranges (startRow, startCol, endRow, endCol)
IOfficeChartSerie seriesJan = chart.Series.Add("Jan");
seriesJan.Values = chart.ChartData[2, 2, 4, 2];
IOfficeChartSerie seriesFeb = chart.Series.Add("Feb");
seriesFeb.Values = chart.ChartData[2, 3, 4, 3];
IOfficeChartSerie seriesMarch = chart.Series.Add("March");
seriesMarch.Values = chart.ChartData[2, 4, 4, 4];

// Set category axis labels
chart.PrimaryCategoryAxis.CategoryLabels = chart.ChartData[2, 1, 4, 1];
chart.ChartType = OfficeChartType.Column_Clustered;


```

### Placeholders
- `AddChart(100, 10, 700, 500)` → Replace with `AddChart({x}, {y}, {width}, {height})`
- `chart.ChartTitle` → Replace with `"{chart-title}"`
- `OfficeChartType.Column_Clustered` → Replace with any `OfficeChartType` enum value (see Supported Chart Types below)
- `ChartData.SetValue(row, col, value)` → Row/col indices are 1-based

---

## Create a Chart from an Excel Sheet

### Minimal Code
```csharp

// Load data from an existing Excel workbook
FileStream excelStream = new FileStream("Book1.xlsx", FileMode.Open);
// AddChart(excelStream, worksheetNumber, dataRange, bounds)
IPresentationChart chart = slide.Charts.AddChart(excelStream, 1, "A1:D4", new RectangleF(100, 10, 700, 500));

```

### Placeholders
- `"Book1.xlsx"` → Replace with the path to the Excel file
- `1` → Replace with the worksheet number (1-based)
- `"A1:D4"` → Replace with the data range string
- `new RectangleF(100, 10, 700, 500)` → Replace with `new RectangleF({x}, {y}, {width}, {height})`

---

## Create a Custom (Combo) Chart

### Minimal Code
```csharp

IPresentationChart chart = slide.Charts.AddChart(100, 80, 500, 350);
chart.ChartTitle = "Sales Comparison";
chart.ChartTitleArea.Bold = true;

// Populate data
chart.ChartData.SetValue(1, 1, "Month");
chart.ChartData.SetValue(1, 2, "2013");
chart.ChartData.SetValue(1, 3, "2014");
// ... set additional rows ...

// Series 1 — Bar Clustered
IOfficeChartSerie serie2013 = chart.Series.Add("2013");
serie2013.Values = chart.ChartData[2, 2, 7, 2];
serie2013.SerieType = OfficeChartType.Bar_Clustered;

// Series 2 — Scatter Line Markers
IOfficeChartSerie serie2014 = chart.Series.Add("2014");
serie2014.Values = chart.ChartData[2, 3, 7, 3];
serie2014.SerieType = OfficeChartType.Scatter_Line_Markers;


```

### Placeholders
- Each `serie.SerieType` → Set to a different `OfficeChartType` to mix chart types per series

---

## Edit Chart Data

### Minimal Code
```csharp

IPresentationChart chart = pptxDoc.Slides[0].Shapes[0] as IPresentationChart;
// Modify cell values
chart.ChartData.SetValue(1, 2, "Jan");
chart.ChartData.SetValue(2, 1, 2010);
chart.ChartData.SetValue(2, 2, 60);
// Refresh to apply changes
chart.Refresh();

```

### Placeholders
- `pptxDoc.Slides[0].Shapes[0]` → Replace indices with the target slide and shape index

---

## Refresh a Chart

### Minimal Code
```csharp

IPresentationChart chart = pptxDoc.Slides[0].Shapes[0] as IPresentationChart;
// Pass true to evaluate Excel formulas before refreshing; false to refresh data only
chart.Refresh(false);

```

### Placeholders
- `chart.Refresh(false)` → Pass `true` to evaluate Excel formulas before refreshing

---

## Apply 3D Formatting to a Chart

### Minimal Code
```csharp

IPresentationChart chart = pptxDoc.Slides[0].Shapes[0] as IPresentationChart;
// Change to a 3D chart type
chart.ChartType = OfficeChartType.Bar_Clustered_3D;
chart.Rotation = 80;
chart.RightAngleAxes = true;
chart.AutoScaling = true;
// Side wall and back wall settings
chart.SideWall.Shadow.Angle = 60;
chart.BackWall.Border.LineWeight = OfficeChartLineWeight.Narrow;

```

### Placeholders
- `OfficeChartType.Bar_Clustered_3D` → Replace with any 3D `OfficeChartType` enum value
- `chart.Rotation = 80` → Replace with the desired rotation angle (0–360)

---

## Remove a Chart

### Minimal Code
```csharp

IPresentationChart chart = slide.Shapes[0] as IPresentationChart;
slide.Shapes.Remove(chart as IShape);

```

### Placeholders
- `slide.Shapes[0]` → Replace `0` with the index of the chart shape to remove

---

## Create a Scatter Chart

### Minimal Code
```csharp

IPresentationChart chart = slide.Charts.AddChart(100, 10, 700, 500);
chart.ChartType = OfficeChartType.Scatter_Markers;
chart.DataRange = chart.ChartData[1, 1, 4, 2];
chart.IsSeriesInRows = false;
chart.ChartData.SetValue(1, 1, "X-Axis"); chart.ChartData.SetValue(1, 2, "Y-Axis");
chart.ChartData.SetValue(2, 1, 1);  chart.ChartData.SetValue(2, 2, 10);
chart.ChartData.SetValue(3, 1, 5);  chart.ChartData.SetValue(3, 2, 5);
chart.ChartData.SetValue(4, 1, 10); chart.ChartData.SetValue(4, 2, 1);
chart.ChartTitle = "Scatter Markers Chart";
chart.HasLegend = false;
// Enable data labels on the default data point
IOfficeChartSerie serie = chart.Series[0];
serie.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
serie.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName = true;

```

---

## Create a Funnel Chart (PowerPoint 2016+)

### Minimal Code
```csharp

IPresentationChart chart = slide.Charts.AddChart(30, 50, 600, 300);
chart.ChartType = OfficeChartType.Funnel;
chart.ChartTitle = "Funnel";
chart.DataRange = chart.ChartData[1, 1, 6, 2];
chart.IsSeriesInRows = false;
chart.ChartData.SetValue(1, 1, "Web sales");     chart.ChartData.SetValue(1, 2, "Users count");
chart.ChartData.SetValue(2, 1, "Website Visits"); chart.ChartData.SetValue(2, 2, "15600");
chart.ChartData.SetValue(3, 1, "Downloads");      chart.ChartData.SetValue(3, 2, "8000");
chart.ChartData.SetValue(4, 1, "Requested price list"); chart.ChartData.SetValue(4, 2, "6000");
chart.ChartData.SetValue(5, 1, "Invoice sent");   chart.ChartData.SetValue(5, 2, "2000");
chart.ChartData.SetValue(6, 1, "Finalized");      chart.ChartData.SetValue(6, 2, "1000");
chart.HasLegend = false;
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;

```

---

## Create a Waterfall Chart (PowerPoint 2016+)

### Minimal Code
```csharp

IPresentationChart chart = slide.Charts.AddChart(50, 50, 700, 400);
chart.ChartType = OfficeChartType.WaterFall;
chart.DataRange = chart.ChartData[1, 1, 8, 2];
chart.IsSeriesInRows = false;
chart.ChartData.SetValue(2, 1, "Start");            chart.ChartData.SetValue(2, 2, 120000);
chart.ChartData.SetValue(3, 1, "Product Revenue");  chart.ChartData.SetValue(3, 2, 570000);
chart.ChartData.SetValue(4, 1, "Service Revenue");  chart.ChartData.SetValue(4, 2, 230000);
chart.ChartData.SetValue(5, 1, "Positive Balance"); chart.ChartData.SetValue(5, 2, 920000);
chart.ChartData.SetValue(6, 1, "Fixed Costs");      chart.ChartData.SetValue(6, 2, -345000);
chart.ChartData.SetValue(7, 1, "Variable Costs");   chart.ChartData.SetValue(7, 2, -230000);
chart.ChartData.SetValue(8, 1, "Total");            chart.ChartData.SetValue(8, 2, 345000);
// Mark totals
chart.Series[0].DataPoints[3].SetAsTotal = true;
chart.Series[0].DataPoints[6].SetAsTotal = true;
chart.Series[0].SerieFormat.ShowConnectorLines = true;
chart.ChartTitle = "Company Profit (in USD)";
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Size = 8;
chart.Legend.Position = OfficeLegendPosition.Right;

```

---

## Create a Histogram Chart (PowerPoint 2016+)

### Minimal Code
```csharp

IPresentationChart chart = slide.Charts.AddChart(50, 50, 500, 400);
chart.ChartType = OfficeChartType.Histogram;
chart.DataRange = chart.ChartData[2, 1, 15, 1];
chart.ChartData.SetValue(1, 1, "Student Heights");
// Set height values (rows 2–15, column 1)
int[] heights = { 130, 132, 159, 163, 140, 155, 139, 143, 153, 165, 153, 149, 154, 162 };
for (int i = 0; i < heights.Length; i++)
    chart.ChartData.SetValue(i + 2, 1, heights[i]);
chart.PrimaryCategoryAxis.BinWidth = 8;
chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 6;
chart.ChartTitle = "Height Data";
chart.PrimaryValueAxis.Title = "Number of students";
chart.PrimaryCategoryAxis.Title = "Height";
chart.HasLegend = false;

```

---

## Create a Pareto Chart (PowerPoint 2016+)

### Minimal Code
```csharp

IPresentationChart chart = slide.Charts.AddChart(50, 50, 500, 400);
chart.ChartType = OfficeChartType.Pareto;
chart.DataRange = chart.ChartData[2, 1, 8, 2];
chart.ChartData.SetValue(2, 1, "Rent");        chart.ChartData.SetValue(2, 2, 2300);
chart.ChartData.SetValue(3, 1, "Car payment"); chart.ChartData.SetValue(3, 2, 1200);
chart.ChartData.SetValue(4, 1, "Groceries");   chart.ChartData.SetValue(4, 2, 900);
chart.ChartData.SetValue(5, 1, "Electricity"); chart.ChartData.SetValue(5, 2, 600);
chart.ChartData.SetValue(6, 1, "Gas");         chart.ChartData.SetValue(6, 2, 500);
chart.ChartData.SetValue(7, 1, "Cable");       chart.ChartData.SetValue(7, 2, 300);
chart.ChartData.SetValue(8, 1, "Mobile");      chart.ChartData.SetValue(8, 2, 200);
chart.PrimaryCategoryAxis.IsBinningByCategory = true;
chart.Series[0].ParetoLineFormat.LineProperties.ColorIndex = OfficeKnownColors.Bright_green;
chart.Series[0].SerieFormat.CommonSerieOptions.GapWidth = 6;
chart.ChartTitle = "Expenses";
chart.HasLegend = false;

```

---
