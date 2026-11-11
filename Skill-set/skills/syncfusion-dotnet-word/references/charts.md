
# Charts

> Create and manage charts — pie, bar, line, column, area, scatter, surface, stock, radar, and more with customizable elements and formatting.

---

## Required common usings

```csharp
using Syncfusion.DocIO;
using Syncfusion.DocIO.DLS;
using Syncfusion.OfficeChart;
```

## Required usings for Cross-Platform

```csharp
using Syncfusion.DocIORenderer;
```

## Required usings for Windows-Specific

```csharp
using Syncfusion.OfficeChartToImageConverter;
using System;
using System.IO;
```

## Create Chart from Scratch

```csharp
var doc = new WordDocument();
IWParagraph paragraph = doc.AddSection().AddParagraph();
WChart chart = paragraph.AppendChart(446, 270);
chart.ChartType = OfficeChartType.Pie;
chart.ChartTitle = "Best Selling Products";
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Size = 14;

chart.ChartData.SetValue(1, 1, "");
chart.ChartData.SetValue(1, 2, "Sales");
chart.ChartData.SetValue(2, 1, "Product A"); chart.ChartData.SetValue(2, 2, 141.396);
chart.ChartData.SetValue(3, 1, "Product B"); chart.ChartData.SetValue(3, 2, 80.368);
chart.ChartData.SetValue(4, 1, "Product C"); chart.ChartData.SetValue(4, 2, 71.155);

IOfficeChartSerie series = chart.Series.Add("Sales");
series.Values = chart.ChartData[2, 2, 4, 2];
chart.PrimaryCategoryAxis.CategoryLabels = chart.ChartData[2, 1, 4, 1];

series.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
series.DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Outside;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
```

#### Cross-Platform
```csharp
chart.ChartArea.Fill.ForeColor = Syncfusion.Drawing.Color.FromArgb(242, 242, 242);
```

#### Windows-Specific
```csharp
chart.ChartArea.Fill.ForeColor = System.Drawing.Color.FromArgb(242, 242, 242);
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
chart.ChartArea.Border.LinePattern = OfficeChartLinePattern.None;

doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `{width}, {height}` → Chart dimensions
- `OfficeChartType.Pie` → Column_Clustered, Line, Bar_Clustered, Area, Scatter, Surface, Stock, Radar, Bubble, etc.

---

## Create Chart from Excel

### Common code for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
Stream excelStream = File.OpenRead("Excel_Template.xlsx");
WChart chart = doc.AddSection().AddParagraph().AppendChart(excelStream, 1, "B2:C6", 470, 300);

chart.ChartType = OfficeChartType.Column_Clustered;
chart.ChartTitle = "Purchase Details";
chart.Series[0].Name = "Sum of Purchases";
chart.Series[1].Name = "Sum of Future Expenses";
chart.PrimaryCategoryAxis.Title = "Products";
chart.PrimaryValueAxis.Title = "In Dollars";
chart.Legend.Position = OfficeLegendPosition.Bottom;

doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `1` → Sheet index (1-based)
- `"B2:C6"` → Data range

---

## Create Custom Chart (Multiple Series Types)

### Common code for Cross-Platform and Windows-Specific
```csharp
var doc = new WordDocument();
object[][] data = new object[6][];
for (int i = 0; i < 6; i++) data[i] = new object[3];

data[0][0] = ""; data[0][1] = "Purchases"; data[0][2] = "Expenses";
data[1][0] = "Product A"; data[1][1] = 286; data[1][2] = 1300;
data[2][0] = "Product B"; data[2][1] = 680; data[2][2] = 700;

WChart chart = doc.AddSection().AddParagraph().AppendChart(data, 470, 300);
chart.ChartTitle = "Purchase Details";
chart.Series[0].SerieType = OfficeChartType.Line_Markers;
chart.Series[1].SerieType = OfficeChartType.Bar_Clustered;
chart.PrimaryCategoryAxis.Title = "Products";
chart.Legend.Position = OfficeLegendPosition.Bottom;

doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `data` → Replace with your custom data array
- `470, 300` → Chart dimensions (width, height)
- `"Purchase Details"` → Replace with `"{chart-title}"`
- `OfficeChartType.Line_Markers`, `OfficeChartType.Bar_Clustered` → Different chart types for each series

---

## Modify Chart Data

### Common code for Cross-Platform and Windows-Specific
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var doc = new WordDocument(fileStream, FormatType.Docx);
WChart chart = doc.LastParagraph.ChildEntities[0] as WChart;

chart.ChartData.SetValue(2, 2, 120);
chart.ChartData.SetValue(3, 2, 60);
chart.Refresh();

doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{template-filename}"`
- `SetValue(2, 2, 120)` → Row, column, and new value to update

---

## Refresh Chart

### Common code for Cross-Platform and Windows-Specific
```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var doc = new WordDocument(fileStream, FormatType.Docx);
WChart chart = doc.LastParagraph.ChildEntities[0] as WChart;
chart.Refresh(false);  // true evaluates Excel formulas, false refreshes data only
doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{template-filename}"`
- `Refresh(false)` → `true` evaluates Excel formulas, `false` refreshes data only

---

## Customize Chart Elements

```csharp
// Title
chart.ChartTitle = "Sales Report";
chart.ChartTitleArea.FontName = "Calibri";
chart.ChartTitleArea.Size = 14;

// Chart Area and Plot Area
```

#### Cross-Platform
```csharp
chart.ChartArea.Fill.ForeColor = Syncfusion.Drawing.Color.WhiteSmoke;
chart.PlotArea.Fill.ForeColor = Syncfusion.Drawing.Color.WhiteSmoke;
```

#### Windows-Specific
```csharp
chart.ChartArea.Fill.ForeColor = System.Drawing.Color.WhiteSmoke;
chart.PlotArea.Fill.ForeColor = System.Drawing.Color.WhiteSmoke;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
chart.ChartArea.Border.LinePattern = OfficeChartLinePattern.Solid;
chart.PlotArea.Border.LinePattern = OfficeChartLinePattern.Solid;

// Legend
chart.HasLegend = true;
chart.Legend.Position = OfficeLegendPosition.Bottom;  // Top, Right, Left

// Data Labels
IOfficeChartSerie series = chart.Series[0];
series.DataPoints.DefaultDataPoint.DataLabels.IsValue = true;
series.DataPoints.DefaultDataPoint.DataLabels.IsCategoryName  = true;
series.DataPoints.DefaultDataPoint.DataLabels.Position = OfficeDataLabelPosition.Outside;

// Axes
chart.PrimaryCategoryAxis.Title = "Categories";
chart.PrimaryValueAxis.Title = "Values";
chart.PrimaryValueAxis.MinimumValue = 0;
chart.PrimaryValueAxis.MaximumValue = 1000;
chart.PrimaryValueAxis.MajorUnit = 100;
```

### Placeholders
- `"Sales Report"` → Replace with `"{chart-title}"`
- `"Calibri"` → Replace with `"{font-name}"`
- `14` → Font size (in points)
- `OfficeLegendPosition.Bottom` → Top, Right, Left, or Bottom
- `OfficeDataLabelPosition.Outside` → Inside, Center, or Outside
- `"Categories"`, `"Values"` → Replace with axis titles
- `0, 1000, 100` → Min value, max value, major unit

---

## Format Chart Series

```csharp
IOfficeChartSerie series = chart.Series[0];
series.Name = "Sales";

// Customize series border
```
#### Cross-Platform
```csharp
series.SerieFormat.LineProperties.LineColor = Syncfusion.Drawing.Color.Red;
```

#### Windows-Specific
```csharp
series.SerieFormat.LineProperties.LineColor = System.Drawing.Color.Red;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
series.SerieFormat.LineProperties.LinePattern = OfficeChartLinePattern.Dot;
series.SerieFormat.LineProperties.LineWeight = OfficeChartLineWeight.Hairline;

// Customize series fill
```

#### Cross-Platform
```csharp
series.SerieFormat.Fill.ForeColor = Syncfusion.Drawing.Color.Blue;
```

#### Windows-Specific
```csharp
series.SerieFormat.Fill.ForeColor = System.Drawing.Color.Blue;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
series.SerieFormat.Fill.Transparency = 0.2;
```

### Placeholders
- `Series[0]` → Replace with series index (0-based)
- `"Sales"` → Replace with `"{series-name}"`
- `LineColor` → Use desired color (Syncfusion.Drawing.Color or System.Drawing.Color)
- `OfficeChartLinePattern.Dot` → Solid, Dash, DashDot, DashDotDot, etc.
- `OfficeChartLineWeight.Hairline` → Thin, Medium, Thick, etc.
- `0.2` → Transparency value (0.0 to 1.0)

---

## Add Data Table to Chart

```csharp
WChart chart = doc.AddSection().AddParagraph().AppendChart(446, 270);
chart.ChartType = OfficeChartType.Column_Clustered;
chart.ChartData.SetValue(2, 1, "Item A"); chart.ChartData.SetValue(2, 2, 50);
chart.ChartData.SetValue(3, 1, "Item B"); chart.ChartData.SetValue(3, 2, 75);
chart.DataRange = chart.ChartData[1, 1, 3, 2];
chart.IsSeriesInRows = false; // Data is in columns (default)
chart.HasDataTable = true;
IOfficeChartDataTable dataTable = chart.DataTable;
dataTable.ShowSeriesKeys = true;
dataTable.HasBorders = true;
```

### Placeholders
- `446, 270` → Chart dimensions (width, height)
- `OfficeChartType.Column_Clustered` → Chart type (Pie, Line, Bar_Clustered, etc.)
- `"Item A"`, `"Item B"` → Replace with `"{item-name}"`
- `50, 75` → Replace with numeric values
- `ShowSeriesKeys` → true to show series names, false to hide
- `HasBorders` → true to display borders, false to hide

---

## Create a Combo Chart (Two Chart Types)

### Minimal Code
```csharp
WChart chart = paragraph.AppendChart(446, 270);
chart.ChartType = OfficeChartType.Combination_Chart;
// Category labels
chart.ChartData.SetValue(1, 1, "Month");
chart.ChartData.SetValue(2, 1, "Jan");
chart.ChartData.SetValue(3, 1, "Feb");
// Primary axis
chart.ChartData.SetValue(1, 2, "Revenue");
chart.ChartData.SetValue(2, 2, 500);
chart.ChartData.SetValue(3, 2, 650);
// Secondary axis
chart.ChartData.SetValue(1, 3, "Growth %");
chart.ChartData.SetValue(2, 3, 0.1);
chart.ChartData.SetValue(3, 3, 0.15);

// Series 1  Clustered Column
IOfficeChartSerie serie1 = chart.Series.Add("Revenue");
serie1.Values      = chart.ChartData[2, 2, 3, 2];
serie1.SerieType   = OfficeChartType.Column_Clustered;

// Series 2  Line on secondary axis
IOfficeChartSerie serie2    = chart.Series.Add("Growth %");
serie2.Values         = chart.ChartData[2, 3, 3, 3];
serie2.SerieType      = OfficeChartType.Line;
serie2.UsePrimaryAxis = false; // Use secondary Y axis
```

### Enable Secondary Axis
```csharp
chart.SecondaryCategoryAxis.Visible   = true;
chart.SecondaryValueAxis.Visible      = true;
chart.SecondaryValueAxis.Title        = "Growth (%)";
chart.SecondaryValueAxis.NumberFormat = "0.0%";
```

### Placeholders
- `446, 270` → Chart dimensions (width, height)
- `"Revenue"`, `"Growth %"` → Replace with `"{series-name}"`
- `500, 0.1` → Replace with numeric values
- `UsePrimaryAxis` → Set to false to plot the series on the secondary Y axis
- `OfficeChartType.Column_Clustered` and `OfficeChartType.Line` → Chart types used for each series (Column, Line, Bar_Clustered, etc.)

---

## Apply 3D Formatting

```csharp
Stream excelStream = File.OpenRead("Excel_Template.xlsx");
WChart chart = doc.AddSection().AddParagraph().AppendChart(excelStream, 1, "B2:C6", 470, 300);
chart.ChartType = OfficeChartType.Column_Clustered_3D;
chart.Rotation = 20;
chart.Elevation = 15;

// Side wall
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
chart.SideWall.Fill.FillType = OfficeFillType.SolidColor;
```

#### Cross-Platform
```csharp
chart.SideWall.Fill.ForeColor = Syncfusion.Drawing.Color.White;
```

#### Windows-Specific
```csharp
chart.SideWall.Fill.ForeColor = System.Drawing.Color.White;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
// Floor
chart.Floor.Fill.FillType = OfficeFillType.Pattern;
chart.Floor.Fill.Pattern = OfficeGradientPattern.Pat_Divot;
```

#### Cross-Platform
```csharp
chart.Floor.Fill.ForeColor = Syncfusion.Drawing.Color.Blue;
```

#### Windows-Specific
```csharp
chart.Floor.Fill.ForeColor = System.Drawing.Color.Blue;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
chart.Floor.Thickness = 3;

// Back wall
chart.BackWall.Fill.FillType = OfficeFillType.Gradient;
chart.BackWall.Fill.GradientColorType = OfficeGradientColor.TwoColor;
```

#### Cross-Platform
```csharp
chart.BackWall.Fill.ForeColor = Syncfusion.Drawing.Color.WhiteSmoke;
```

#### Windows-Specific
```csharp
chart.BackWall.Fill.ForeColor = System.Drawing.Color.WhiteSmoke;
```

#### Cross-Platform
```csharp
chart.BackWall.Fill.BackColor = Syncfusion.Drawing.Color.LightBlue;
```

#### Windows-Specific
```csharp
chart.BackWall.Fill.BackColor = System.Drawing.Color.LightBlue;
```

#### Common code for Cross-Platform and Windows-Specific
```csharp
chart.BackWall.Thickness = 10;

doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"Excel_Template.xlsx"` → Replace with `"{excel-filename}"`
- `1` → Sheet index (1-based)
- `"B2:C6"` → Data range
- `470, 300` → Chart dimensions (width, height)
- `OfficeChartType.Column_Clustered_3D` → 3D chart type (Pie_Exploded_3D, Bar_Clustered_3D, etc.)
- `20, 15` → Rotation and elevation angles (in degrees)
- `OfficeFillType.SolidColor`, `OfficeFillType.Pattern`, `OfficeFillType.Gradient` → Fill types
- `3, 10` → Wall thickness values

---

## Remove Chart

```csharp
FileStream fileStream = new FileStream("Template.docx", FileMode.Open, FileAccess.Read, FileShare.ReadWrite);
var doc = new WordDocument(fileStream, FormatType.Docx);
WParagraph paragraph = doc.LastParagraph;
foreach (ParagraphItem item in paragraph.ChildEntities)
{
    if (item is WChart) { paragraph.ChildEntities.Remove(item); break; }
}
doc.Save(outputPath);
doc.Close();
```

### Placeholders
- `"Template.docx"` → Replace with `"{template-filename}"`
- `doc.LastParagraph` → Replace with specific paragraph containing the chart

---

## Convert Chart to Image

#### Cross-Platform
```csharp
using (FileStream docStream = new FileStream("TemplateWithChart.docx", FileMode.Open))
{
    using (WordDocument doc = new WordDocument(docStream, FormatType.Automatic))
    {
        WChart chart = doc.LastSection.Paragraphs[0].ChildEntities[0] as WChart;
        using (DocIORenderer renderer = new DocIORenderer())
        {
            using (Stream imageStream = chart.SaveAsImage())
            {
                using (FileStream fileOutput = File.Create("ChartImage.jpeg"))
                {
                    imageStream.CopyTo(fileOutput);
                }
            }
        }
    }
}
```

#### Windows-Specific
```csharp
//Loads an existing Word document.
WordDocument wordDocument = new WordDocument("TemplateWithChart.docx", FormatType.Docx);
//Initializes the ChartToImageConverter for converting charts during Word to image conversion.
wordDocument.ChartToImageConverter = new ChartToImageConverter();
//Sets the scaling mode for charts. (Normal mode reduces the file size)
wordDocument.ChartToImageConverter.ScalingMode = ScalingMode.Normal;
//Gets the first paragraph from section.
WParagraph paragraph = wordDocument.LastSection.Paragraphs[0];
//Gets the chart element in the paragarph item.
WChart chart = paragraph.ChildEntities[0] as WChart;
//Creating the memory stream for chart image.
MemoryStream stream = new MemoryStream();
//Converts chart to image.
wordDocument.ChartToImageConverter.SaveAsImage(chart.OfficeChart, stream);
Image image = Image.FromStream(stream);
//Dispose the stream.
stream.Close();
//Saving image stream to file.
image.Save("ChartToImage.jpeg", ImageFormat.Jpeg);
//Closes the document.
wordDocument.Close();
```

### Placeholders (Both Approaches)
- `"TemplateWithChart.docx"` → Replace with `"{template-filename}"`
- `ScalingMode.Normal` → Normal or Best (Best quality increases file size)
- `[0]` → Paragraph/chart index to retrieve
- `"ChartImage.jpeg"`, `"ChartToImage.jpeg"` → Replace with `"{output-image-filename}"`
- `ImageFormat.Jpeg` → Jpeg, Png, Bmp, or other formats
- Cross-Platform approach uses `DocIORenderer` (requires rendering dependencies)
- Windows-Specific approach uses `ChartToImageConverter` (Windows-only)

---