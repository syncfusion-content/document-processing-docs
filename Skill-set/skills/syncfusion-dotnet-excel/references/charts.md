# Add Charts to Excel Worksheets

> Create and customize Excel charts — column, bar, line, pie, area, scatter, and combo charts; set titles, axes, legends, data labels, plot area, chart area formatting, and series colors using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.Drawing`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`
> **Required usings for .NET Framework (Windows):** `System.Drawing` (add `Syncfusion.ExcelChartToImageConverter` if converting charts to images)

---

## Create a Basic Chart

### Minimal Code
```csharp
IWorksheet sheet = workbook.Worksheets[0];
IChartShape chart = sheet.Charts.Add();
chart.DataRange   = sheet["A1:B5"];
chart.ChartType   = ExcelChartType.Column_Clustered;
```

### Placeholders
- `sheet["A1:B5"]` → Replace with `"{data-range}"`
- `ExcelChartType.Column_Clustered` → Replace with `"{chart-type}"`

### Set Chart Position and Size
```csharp
// Position using row and column indices
chart.TopRow = 1;
chart.LeftColumn = 5;
chart.BottomRow = 15;
chart.RightColumn = 12;

// Alternatively, use pixels with Top, Left, Width, Height
chart.Top = 100;     
chart.Left = 150;    
IChart chart1 = sheet.Charts[0];
chart1.Height = 300;
chart1.Width = 500;
```

---

## Chart Types

XlsIO supports **99 distinct chart types** covering 2D, 3D, geometric shapes, and modern Excel 2016+ chart types.

### Column Charts (7 types)
```csharp
chart.ChartType = ExcelChartType.Column_Clustered;
chart.ChartType = ExcelChartType.Column_Stacked;
chart.ChartType = ExcelChartType.Column_Stacked_100;
chart.ChartType = ExcelChartType.Column_Clustered_3D;
chart.ChartType = ExcelChartType.Column_Stacked_3D;
chart.ChartType = ExcelChartType.Column_Stacked_100_3D;
chart.ChartType = ExcelChartType.Column_3D;
```

### Bar Charts (6 types)
```csharp
chart.ChartType = ExcelChartType.Bar_Clustered;
chart.ChartType = ExcelChartType.Bar_Stacked;
chart.ChartType = ExcelChartType.Bar_Stacked_100;
chart.ChartType = ExcelChartType.Bar_Clustered_3D;
chart.ChartType = ExcelChartType.Bar_Stacked_3D;
chart.ChartType = ExcelChartType.Bar_Stacked_100_3D;
```

### Line Charts (7 types)
```csharp
chart.ChartType = ExcelChartType.Line;
chart.ChartType = ExcelChartType.Line_Stacked;
chart.ChartType = ExcelChartType.Line_Stacked_100;
chart.ChartType = ExcelChartType.Line_Markers;
chart.ChartType = ExcelChartType.Line_Markers_Stacked;
chart.ChartType = ExcelChartType.Line_Markers_Stacked_100;
chart.ChartType = ExcelChartType.Line_3D;
```

### Pie Charts (6 types)
```csharp
chart.ChartType = ExcelChartType.Pie;
chart.ChartType = ExcelChartType.Pie_3D;
chart.ChartType = ExcelChartType.Pie_Exploded;
chart.ChartType = ExcelChartType.Pie_Exploded_3D;
chart.ChartType = ExcelChartType.PieOfPie;
chart.ChartType = ExcelChartType.Pie_Bar;
```

### Area Charts (6 types)
```csharp
chart.ChartType = ExcelChartType.Area;
chart.ChartType = ExcelChartType.Area_Stacked;
chart.ChartType = ExcelChartType.Area_Stacked_100;
chart.ChartType = ExcelChartType.Area_3D;
chart.ChartType = ExcelChartType.Area_Stacked_3D;
chart.ChartType = ExcelChartType.Area_Stacked_100_3D;
```

### Scatter / XY Charts (5 types)
```csharp
chart.ChartType = ExcelChartType.Scatter_Markers;
chart.ChartType = ExcelChartType.Scatter_SmoothedLine_Markers;
chart.ChartType = ExcelChartType.Scatter_SmoothedLine;
chart.ChartType = ExcelChartType.Scatter_Line_Markers;
chart.ChartType = ExcelChartType.Scatter_Line;
```

### Bubble Charts (2 types)
```csharp
chart.ChartType = ExcelChartType.Bubble;
chart.ChartType = ExcelChartType.Bubble_3D;
```

### Doughnut Charts (2 types)
```csharp
chart.ChartType = ExcelChartType.Doughnut;
chart.ChartType = ExcelChartType.Doughnut_Exploded;
```

### Radar Charts (3 types)
```csharp
chart.ChartType = ExcelChartType.Radar;
chart.ChartType = ExcelChartType.Radar_Markers;
chart.ChartType = ExcelChartType.Radar_Filled;
```

### Surface Charts (4 types)
```csharp
chart.ChartType = ExcelChartType.Surface_3D;
chart.ChartType = ExcelChartType.Surface_NoColor_3D;
chart.ChartType = ExcelChartType.Surface_Contour;
chart.ChartType = ExcelChartType.Surface_NoColor_Contour;
```

### Stock Charts (4 types)
```csharp
chart.ChartType = ExcelChartType.Stock_HighLowClose;
chart.ChartType = ExcelChartType.Stock_OpenHighLowClose;
chart.ChartType = ExcelChartType.Stock_VolumeHighLowClose;
chart.ChartType = ExcelChartType.Stock_VolumeOpenHighLowClose;
```

### Cylinder Charts (7 types)
```csharp
chart.ChartType = ExcelChartType.Cylinder_Clustered;
chart.ChartType = ExcelChartType.Cylinder_Stacked;
chart.ChartType = ExcelChartType.Cylinder_Stacked_100;
chart.ChartType = ExcelChartType.Cylinder_Bar_Clustered;
chart.ChartType = ExcelChartType.Cylinder_Bar_Stacked;
chart.ChartType = ExcelChartType.Cylinder_Bar_Stacked_100;
chart.ChartType = ExcelChartType.Cylinder_Clustered_3D;
```

### Cone Charts (7 types)
```csharp
chart.ChartType = ExcelChartType.Cone_Clustered;
chart.ChartType = ExcelChartType.Cone_Stacked;
chart.ChartType = ExcelChartType.Cone_Stacked_100;
chart.ChartType = ExcelChartType.Cone_Bar_Clustered;
chart.ChartType = ExcelChartType.Cone_Bar_Stacked;
chart.ChartType = ExcelChartType.Cone_Bar_Stacked_100;
chart.ChartType = ExcelChartType.Cone_Clustered_3D;
```

### Pyramid Charts (7 types)
```csharp
chart.ChartType = ExcelChartType.Pyramid_Clustered;
chart.ChartType = ExcelChartType.Pyramid_Stacked;
chart.ChartType = ExcelChartType.Pyramid_Stacked_100;
chart.ChartType = ExcelChartType.Pyramid_Bar_Clustered;
chart.ChartType = ExcelChartType.Pyramid_Bar_Stacked;
chart.ChartType = ExcelChartType.Pyramid_Bar_Stacked_100;
chart.ChartType = ExcelChartType.Pyramid_Clustered_3D;
```

### Modern Chart Types - Excel 2016+ (7 types)
```csharp
// Funnel chart for hierarchical data visualization (e.g., sales funnels)
chart.ChartType = ExcelChartType.Funnel;

// Waterfall chart for cumulative change visualization (e.g., financial variance)
chart.ChartType = ExcelChartType.WaterFall;

// Box and Whisker chart for statistical distribution showing quartiles and outliers
chart.ChartType = ExcelChartType.BoxAndWhisker;

// Histogram chart for frequency distribution analysis
chart.ChartType = ExcelChartType.Histogram;

// Pareto chart for 80/20 principle analysis with cumulative percentage line
chart.ChartType = ExcelChartType.Pareto;

// TreeMap chart for hierarchical data as sized rectangles
chart.ChartType = ExcelChartType.TreeMap;

// SunBurst chart for circular hierarchical visualization
chart.ChartType = ExcelChartType.SunBurst;
```

### Combination Chart
```csharp
// Allows combining multiple chart types in a single chart
chart.ChartType = ExcelChartType.Combination_Chart;
```

---

## Set Chart Title

### Minimal Code
```csharp
chart.ChartTitle = "Monthly Sales Report";
chart.HasTitle   = true;
```

### Placeholders
- `"Monthly Sales Report"` → Replace with `"{chart-title}"`

### Format the Chart Title
```csharp
chart.ChartTitle                  = "Monthly Sales Report";
chart.HasTitle                    = true;
chart.ChartTitleArea.Bold         = true;
chart.ChartTitleArea.Size         = 14;
chart.ChartTitleArea.FontName     = "Calibri";
chart.ChartTitleArea.Color        = ExcelKnownColors.Dark_blue;
```

---

## Set Data Range and Series

### Minimal Code
```csharp
// Set the entire data range (includes headers)
chart.DataRange      = sheet["A1:C5"];
chart.IsSeriesInRows = false; // Data is in columns (default)
```

### Add Series Manually
```csharp
IChartSerie serie        = chart.Series.Add("Sales 2025");
serie.Values             = sheet["B2:B13"];  // Y values
serie.CategoryLabels     = sheet["A2:A13"]; // X axis labels
```

### Multiple Series
```csharp
// Series 1
IChartSerie serie1    = chart.Series.Add("Sales 2024");
serie1.Values         = sheet["B2:B7"];
serie1.CategoryLabels = sheet["A2:A7"];

// Series 2
IChartSerie serie2    = chart.Series.Add("Sales 2025");
serie2.Values         = sheet["C2:C7"];
serie2.CategoryLabels = sheet["A2:A7"];
```

---

## Format Chart Series

### Series Fill Color and Border
```csharp
IChartSerie serie = chart.Series[0];

// Solid fill color
serie.SerieFormat.Fill.FillType        = ExcelFillType.SolidColor;
serie.SerieFormat.Fill.ForeColor       = Syncfusion.Drawing.Color.Red;

// Border/line color and weight
serie.SerieFormat.LineProperties.LineColor   = Syncfusion.Drawing.Color.Blue;
serie.SerieFormat.LineProperties.LinePattern = ExcelChartLinePattern.Dot;
serie.SerieFormat.LineProperties.LineWeight  = ExcelChartLineWeight.Narrow;
```

### Marker Style (Line Charts)
```csharp
IChartSerie serie = chart.Series[0];
serie.SerieFormat.MarkerStyle           = ExcelChartMarkerType.Diamond;
serie.SerieFormat.MarkerSize            = 8;
serie.SerieFormat.MarkerBackgroundColor = Color.Red;
serie.SerieFormat.MarkerForegroundColor = Color.DarkRed;
```

---

## Add Data Labels

### Minimal Code
```csharp
IChartSerie serie = chart.Series[0];
serie.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
```

### Full Data Label Options
```csharp
IChartSerie serie   = chart.Series[0];
IChartDataLabels dl = serie.DataPoints.DefaultDataPoint.DataLabels;

dl.IsValue        = true;   // Show value
dl.IsCategoryName = false;  // Show category name
dl.IsSeriesName   = false;  // Show series name
dl.IsPercentage   = false;  // Show percentage (Pie charts)
dl.Position       = ExcelDataLabelPosition.Outside;

// Font formatting
dl.Size           = 9;
dl.Bold           = true;
dl.Color          = ExcelKnownColors.Dark_blue;
```

### Data Label Position Options
```csharp
// Supported positions for data labels
dl.Position = ExcelDataLabelPosition.Outside;
```

---

## Format Chart Area and Plot Area

### Chart Area
```csharp
// Background fill
chart.ChartArea.Fill.FillType      = ExcelFillType.SolidColor;
chart.ChartArea.Fill.ForeColor     = Syncfusion.Drawing.Color.White;

// Border
chart.ChartArea.Border.LineColor   = Syncfusion.Drawing.Color.Blue;
chart.ChartArea.Border.LinePattern = ExcelChartLinePattern.Solid;
chart.ChartArea.Border.LineWeight  = ExcelChartLineWeight.Medium;
```

### Plot Area
```csharp
// Inner data area background
chart.PlotArea.Fill.FillType       = ExcelFillType.SolidColor;
chart.PlotArea.Fill.ForeColor      = Syncfusion.Drawing.Color.LightGray;

// Border
chart.PlotArea.Border.LineColor    = Syncfusion.Drawing.Color.Blue;
chart.PlotArea.Border.LinePattern  = ExcelChartLinePattern.Solid;
```

---

## Format Chart Axes

### Category Axis (X Axis)
```csharp
IChartAxis categoryAxis     = chart.PrimaryCategoryAxis;
categoryAxis.Title          = "Month";
categoryAxis.TitleArea.Bold = true;
categoryAxis.TitleArea.Size = 10;
categoryAxis.Font.Size      = 9;
```

### Value Axis (Y Axis)
```csharp
IChartValueAxis valueAxis    = chart.PrimaryValueAxis;
valueAxis.Title              = "Sales ($)";
valueAxis.TitleArea.Bold     = true;
valueAxis.NumberFormat       = "$#,##0";
valueAxis.MinimumValue       = 0;
valueAxis.MaximumValue       = 100000;
valueAxis.MajorUnit          = 20000;
```

### Hide an Axis
```csharp
chart.PrimaryCategoryAxis.Visible = false;
chart.PrimaryValueAxis.Visible    = false;
```

---

## Add Gridlines

### Minimal Code
```csharp
chart.PrimaryValueAxis.HasMajorGridLines = true;
```

### Major and Minor Gridlines
```csharp
chart.PrimaryValueAxis.HasMajorGridLines    = true;
chart.PrimaryValueAxis.HasMinorGridLines    = false;
chart.PrimaryCategoryAxis.HasMajorGridLines = false;
```

---

## Format the Legend

### Minimal Code
```csharp
chart.HasLegend       = true;
chart.Legend.Position = ExcelLegendPosition.Bottom;
```

### Full Legend Formatting
```csharp
chart.HasLegend                                     = true;
chart.Legend.Position                               = ExcelLegendPosition.Bottom;
chart.Legend.TextArea.Bold                          = false;
chart.Legend.TextArea.Size                          = 9;
chart.Legend.TextArea.FontName                      = "Calibri";
chart.Legend.FrameFormat.Fill.FillType              = ExcelFillType.SolidColor;
chart.Legend.FrameFormat.Fill.ForeColor             = Color.White;
chart.Legend.FrameFormat.Border.LineColor           = Color.LightGray;
```

### Legend Position Options
```csharp
chart.Legend.Position = ExcelLegendPosition.Bottom;
chart.Legend.Position = ExcelLegendPosition.Top;
chart.Legend.Position = ExcelLegendPosition.Left;
chart.Legend.Position = ExcelLegendPosition.Right;
chart.Legend.Position = ExcelLegendPosition.Corner;
```

---

## Create a Combo Chart (Two Chart Types)

### Minimal Code
```csharp
// Series 1  Clustered Column
IChartSerie serie1 = chart.Series.Add("Revenue");
serie1.Values      = sheet["B2:B7"];
serie1.SerieType   = ExcelChartType.Column_Clustered;

// Series 2  Line on secondary axis
IChartSerie serie2    = chart.Series.Add("Growth %");
serie2.Values         = sheet["C2:C7"];
serie2.SerieType      = ExcelChartType.Line_Markers;
serie2.UsePrimaryAxis = false; // Use secondary Y axis
```

### Enable Secondary Axis
```csharp
chart.SecondaryCategoryAxis.Visible   = true;
chart.SecondaryValueAxis.Visible      = true;
chart.SecondaryValueAxis.Title        = "Growth (%)";
chart.SecondaryValueAxis.NumberFormat = "0.0%";
```

---

## Full End-to-End Example

```csharp
using Syncfusion.XlsIO;
using System.Drawing;

ExcelEngine excelEngine    = new ExcelEngine();
IApplication application   = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

IWorkbook workbook  = application.Workbooks.Create(1);
IWorksheet sheet    = workbook.Worksheets[0];
sheet.Name          = "Sales Data";

// Write headers
sheet["A1"].Text = "Month";
sheet["B1"].Text = "Sales 2024";
sheet["C1"].Text = "Sales 2025";

// Write data
string[] months    = { "Jan", "Feb", "Mar", "Apr", "May", "Jun" };
double[] sales2024 = { 42000, 38000, 51000, 47000, 55000, 62000 };
double[] sales2025 = { 48000, 44000, 57000, 53000, 61000, 70000 };

for (int i = 0; i < months.Length; i++)
{
    sheet[i + 2, 1].Text   = months[i];
    sheet[i + 2, 2].Number = sales2024[i];
    sheet[i + 2, 3].Number = sales2025[i];
}

// Style header row
IRange header = sheet["A1:C1"];
header.CellStyle.Font.Bold  = true;
header.CellStyle.Color      = Color.FromArgb(255, 68, 114, 196);
header.CellStyle.Font.Color = ExcelKnownColors.White;

// Number format
sheet["B2:C7"].NumberFormat = "$#,##0";

// Create chart
IChartShape chart = sheet.Charts.Add();
chart.DataRange      = sheet["A1:C7"];
chart.IsSeriesInRows = false;
chart.ChartType      = ExcelChartType.Column_Clustered;
chart.SetPosition(1, 0, 5, 0);
chart.SetSize(500, 320);

// Chart title
chart.ChartTitle              = "Monthly Sales Comparison 2024 vs 2025";
chart.HasTitle                = true;
chart.ChartTitleArea.Bold     = true;
chart.ChartTitleArea.Size     = 12;
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Color    = ExcelKnownColors.Dark_blue;

// Series colors
chart.Series[0].SerieFormat.Fill.ForeColor = Color.FromArgb(255, 68,  114, 196); // Blue
chart.Series[1].SerieFormat.Fill.ForeColor = Color.FromArgb(255, 237, 125, 49);  // Orange

// Data labels
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue   = true;
chart.Series[0].DataPoints.DefaultDataPoint.DataLabels.Position  = ExcelDataLabelPosition.Outside;
chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.IsValue   = true;
chart.Series[1].DataPoints.DefaultDataPoint.DataLabels.Position  = ExcelDataLabelPosition.Outside;

// Axes
chart.PrimaryCategoryAxis.Title     = "Month";
chart.PrimaryValueAxis.Title        = "Sales ($)";
chart.PrimaryValueAxis.NumberFormat = "$#,##0";
chart.PrimaryValueAxis.MinimumValue = 0;

// Gridlines
chart.PrimaryValueAxis.HasMajorGridLines = true;

// Legend
chart.HasLegend       = true;
chart.Legend.Position = ExcelLegendPosition.Bottom;

// Chart area and plot area
chart.ChartArea.Fill.ForeColor = Color.White;
chart.PlotArea.Fill.ForeColor  = Color.FromArgb(255, 242, 242, 242);

// Auto-fit data columns
for (int col = 1; col <= 3; col++)
    sheet.AutofitColumn(col);

workbook.SaveAs("output/sales-chart.xlsx");
workbook.Close();
excelEngine.Dispose();
```

