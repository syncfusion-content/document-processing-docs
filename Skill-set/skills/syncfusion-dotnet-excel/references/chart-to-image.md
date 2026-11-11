# Export Charts to Images

> Convert Excel charts to image files — PNG, JPEG, BMP, and other formats; customize image quality, size, dimensions, and resolution using Syncfusion XlsIO.

---

> **Required common usings:** `Syncfusion.XlsIO`, `System`, `System.IO`
> **Required usings for .NET Core / .NET 5+ / ASP.NET Core:** `Syncfusion.Drawing`, `Syncfusion.XlsIORenderer`
> **Required usings for .NET Framework (Windows):** `System.Drawing`

---

## Export Single Chart to Image

Load an Excel workbook, access a chart, and export it to an image file.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IChart chart = workbook.Worksheets[0].Charts[0];
application.XlsIORenderer = new XlsIORenderer();
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Png;
using (FileStream stream = new FileStream("output/chart.png", FileMode.Create))
    chart.SaveAsImage(stream);
```

### Minimal Code — .NET Framework (Windows)
```csharp
IWorkbook workbook = application.Workbooks.Open("input.xlsx");
IChart chart = workbook.Worksheets[0].Charts[0];
application.ChartToImageConverter = new ChartToImageConverter();
application.ChartToImageConverter.ScalingMode = ScalingMode.Best;
using (MemoryStream stream = new MemoryStream())
{
    chart.SaveAsImage(stream);
    Image image = Image.FromStream(stream);
    image.Save("output/chart.png");
}
```

### Placeholders
- `"input.xlsx"` → Replace with `"{input-file}"`
- `"output/chart.png"` → Replace with `"{image-output-path}"`

---

## Export Chart with Different Image Formats

Convert charts to various image formats including PNG, JPEG, BMP, and more.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
application.XlsIORenderer = new XlsIORenderer();
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Png;
IChart chart = workbook.Worksheets[0].Charts[0];
using (FileStream stream = new FileStream("output/chart.png", FileMode.Create))
    chart.SaveAsImage(stream);
```

### Minimal Code — .NET Framework (Windows)
```csharp
application.ChartToImageConverter = new ChartToImageConverter();
application.ChartToImageConverter.ScalingMode = ScalingMode.Best;
IChart chart = workbook.Worksheets[0].Charts[0];
using (MemoryStream stream = new MemoryStream())
{
    chart.SaveAsImage(stream);
    Image image = Image.FromStream(stream);
    image.Save("output/chart.png");
}
```

### Image Format Options
```csharp
// PNG
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Png;

// JPEG
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Jpeg;
```

### Placeholders
- `ExportImageFormat.Png` → Replace with `"{format}"` (Png or Jpeg)
- `"output/chart.png"` → Replace with `"{output-path}"`

---

## Export Chart with Custom Quality Settings

Adjust image quality and scaling mode for optimal output.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
application.XlsIORenderer = new XlsIORenderer();
application.XlsIORenderer.ChartRenderingOptions.ScalingMode = ScalingMode.Best;
IChart chart = workbook.Worksheets[0].Charts[0];
using (FileStream stream = new FileStream("output/chart_hq.png", FileMode.Create))
    chart.SaveAsImage(stream);
```

### Minimal Code — .NET Framework (Windows)
```csharp
application.ChartToImageConverter = new ChartToImageConverter();
application.ChartToImageConverter.ScalingMode = ScalingMode.Best;
IChart chart = workbook.Worksheets[0].Charts[0];
using (MemoryStream stream = new MemoryStream())
{
    chart.SaveAsImage(stream);
    Image image = Image.FromStream(stream);
    image.Save("output/chart_hq.png");
}
```

### Scaling Mode Options
```csharp
// Best quality (larger file size)
application.XlsIORenderer.ChartRenderingOptions.ScalingMode = ScalingMode.Best;

// Balanced quality (normal file size)
application.XlsIORenderer.ChartRenderingOptions.ScalingMode = ScalingMode.Normal;
``` 

### Placeholders
- `ScalingMode.Best` → Replace with `"{scaling-mode}"` (Best or Normal)
- `"output/chart_hq.png"` → Replace with `"{output-file-path}"`

---

## Export All Charts in Worksheet

Iterate through all charts in a worksheet and export each to an image file.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
application.XlsIORenderer = new XlsIORenderer();
IWorksheet worksheet = workbook.Worksheets[0];
for (int i = 0; i < worksheet.Charts.Count; i++)
{
    IChart chart = worksheet.Charts[i];
    using (FileStream stream = new FileStream($"output/chart_{i}.png", FileMode.Create))
        chart.SaveAsImage(stream);
}
```

### Minimal Code — .NET Framework (Windows)
```csharp
application.ChartToImageConverter = new ChartToImageConverter();
IWorksheet worksheet = workbook.Worksheets[0];
for (int i = 0; i < worksheet.Charts.Count; i++)
{
    IChart chart = worksheet.Charts[i];
    using (MemoryStream stream = new MemoryStream())
    {
        chart.SaveAsImage(stream);
        Image image = Image.FromStream(stream);
        image.Save($"output/chart_{i}.png");
    }
}
```

### Export from Multiple Worksheets
```csharp
// Loop through all worksheets
for (int i = 0; i < workbook.Worksheets.Count; i++)
{
    IWorksheet ws = workbook.Worksheets[i];
    for (int j = 0; j < ws.Charts.Count; j++)
    {
        IChart chart = ws.Charts[j];
        using (FileStream fs = new FileStream($"output/sheet{i}_chart{j}.png", FileMode.Create))
            chart.SaveAsImage(fs);
    }
}
```

### Placeholders
- `worksheet.Charts.Count` → Replace with `"{chart-count}"`
- `$"output/chart_{i}.png"` → Replace with `"{file-naming-pattern}"`

---

## Export Chart to Memory Stream

Export chart images to memory streams for in-memory processing or direct transmission.

### Minimal Code — .NET Core / .NET 5+ / ASP.NET Core
```csharp
application.XlsIORenderer = new XlsIORenderer();
IChart chart = workbook.Worksheets[0].Charts[0];
using (MemoryStream memoryStream = new MemoryStream())
{
    chart.SaveAsImage(memoryStream);
    byte[] imageBytes = memoryStream.ToArray();
}
```

### Minimal Code — .NET Framework (Windows)
```csharp
application.ChartToImageConverter = new ChartToImageConverter();
IChart chart = workbook.Worksheets[0].Charts[0];
using (MemoryStream stream = new MemoryStream())
{
    chart.SaveAsImage(stream);
    byte[] imageBytes = stream.ToArray();
}
```

### Placeholders
- `imageBytes` → Replace with `"{byte-array-variable}"`
- `memoryStream` → Replace with `"{stream-variable}"`

---

## Export Chart by Name

Find and export a specific chart by name.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
IChart targetChart = null;
foreach (IChart chart in worksheet.Charts)
{
    if (chart.Name == "Sales Chart")
    {
        targetChart = chart;
        break;
    }
}
```

### Filter by Chart Type
```csharp
foreach (IChart chart in worksheet.Charts)
{
    if (chart.ChartType == ExcelChartType.Pie)
    {
        using (FileStream fs = new FileStream($"output/{chart.Name}.png", FileMode.Create))
            chart.SaveAsImage(fs);
    }
}
```

### Placeholders
- `"Sales Chart"` → Replace with `"{chart-name}"`
- `ExcelChartType.Pie` → Replace with `"{chart-type}"` (Pie, Column, Line, Bar, Area, Scatter)

---

## Validate Charts Exist

Check if worksheet contains charts before exporting.

### Minimal Code
```csharp
IWorksheet worksheet = workbook.Worksheets[0];
if (worksheet.Charts.Count == 0)
{
    Console.WriteLine("No charts found");
    return;
}
```

### Export with Validation
```csharp
if (worksheet.Charts.Count > 0)
{
    IChart chart = worksheet.Charts[0];
    using (FileStream fs = new FileStream("output/chart.png", FileMode.Create))
        chart.SaveAsImage(fs);
}
```

### Placeholders
- `worksheet.Charts.Count` → Replace with `"{chart-count}"`
- `"output/chart.png"` → Replace with `"{output-path}"`

---

## Full End-to-End Example

Comprehensive example demonstrating chart creation, configuration, and export to multiple formats.

```csharp
using System;
using System.IO;
using System.Drawing;
using Syncfusion.XlsIO;
using Syncfusion.XlsIORenderer;
using Syncfusion.Drawing;

ExcelEngine excelEngine = new ExcelEngine();
IApplication application = excelEngine.Excel;
application.DefaultVersion = ExcelVersion.Xlsx;

// Initialize XlsIORenderer for chart export
application.XlsIORenderer = new XlsIORenderer();

Directory.CreateDirectory("output");

// ---------------------------------------------------------
// Create a workbook with sample data and charts
// ---------------------------------------------------------
IWorkbook workbook = application.Workbooks.Create(1);
IWorksheet worksheet = workbook.Worksheets[0];
worksheet.Name = "Sales Analysis";

// Add sample data
worksheet["A1"].Text = "Quarter";
worksheet["B1"].Text = "Revenue";
worksheet["C1"].Text = "Expenses";
worksheet["D1"].Text = "Profit";

string[] quarters = { "Q1", "Q2", "Q3", "Q4" };
int[] revenue = { 120000, 135000, 148000, 162000 };
int[] expenses = { 85000, 92000, 98000, 105000 };

for (int i = 0; i < 4; i++)
{
    int row = i + 2;
    worksheet[$"A{row}"].Text = quarters[i];
    worksheet[$"B{row}"].Number = revenue[i];
    worksheet[$"C{row}"].Number = expenses[i];
    worksheet[$"D{row}"].Formula = $"=B{row}-C{row}";
}

// Format data
IRange header = worksheet["A1:D1"];
header.CellStyle.Font.Bold = true;
header.CellStyle.Font.Color = ExcelKnownColors.White;
header.CellStyle.Color = Color.FromArgb(255, 68, 114, 196);

worksheet["B2:D5"].NumberFormat = "$#,##0";
worksheet.UsedRange.AutofitColumns();

// ---------------------------------------------------------
// Create Column Chart
// ---------------------------------------------------------
IChartShape columnChart = worksheet.Charts.Add();
columnChart.ChartType = ExcelChartType.Column_Clustered;
columnChart.DataRange = worksheet["A1:C5"];
columnChart.IsSeriesInRows = false;
columnChart.TopRow = 1;
columnChart.LeftColumn = 6;
columnChart.RightColumn = 13;
columnChart.BottomRow = 15;

columnChart.ChartTitle = "Quarterly Revenue and Expenses";
columnChart.PrimaryValueAxis.Title = "Amount ($)";
columnChart.PrimaryCategoryAxis.Title = "Quarter";

// ---------------------------------------------------------
// Create Pie Chart
// ---------------------------------------------------------
IChartShape pieChart = worksheet.Charts.Add();
pieChart.ChartType = ExcelChartType.Pie;
pieChart.DataRange = worksheet["A1:A5,D1:D5"];
pieChart.IsSeriesInRows = false;
pieChart.TopRow = 18;
pieChart.LeftColumn = 6;
pieChart.RightColumn = 13;
pieChart.BottomRow = 32;

pieChart.ChartTitle = "Profit Distribution by Quarter";
pieChart.Series[0].DataPoints.DefaultDataPoint.DataLabels.IsValue = true;

// ---------------------------------------------------------
// Export 1: Save workbook with charts
// ---------------------------------------------------------
using (FileStream workbookStream = new FileStream("output/workbook-with-charts.xlsx", FileMode.Create))
    workbook.SaveAs(workbookStream);
Console.WriteLine("Saved: output/workbook-with-charts.xlsx");

// ---------------------------------------------------------
// Export 2: Column chart as PNG with best quality
// ---------------------------------------------------------
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Png;
application.XlsIORenderer.ChartRenderingOptions.ScalingMode = ScalingMode.Best;

using (FileStream columnPngStream = new FileStream("output/column-chart.png", FileMode.Create))
    columnChart.SaveAsImage(columnPngStream);
Console.WriteLine("Saved: output/column-chart.png");

// ---------------------------------------------------------
// Export 3: Column chart as JPEG
// ---------------------------------------------------------
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Jpeg;

using (FileStream columnJpegStream = new FileStream("output/column-chart.jpg", FileMode.Create))
    columnChart.SaveAsImage(columnJpegStream);
Console.WriteLine("Saved: output/column-chart.jpg");

// ---------------------------------------------------------
// Export 4: Pie chart as PNG
// ---------------------------------------------------------
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Png;

using (FileStream piePngStream = new FileStream("output/pie-chart.png", FileMode.Create))
    pieChart.SaveAsImage(piePngStream);
Console.WriteLine("Saved: output/pie-chart.png");

// ---------------------------------------------------------
// Export 5: All charts with different quality settings
// ---------------------------------------------------------
ScalingMode[] qualityLevels = { ScalingMode.Best, ScalingMode.Normal, ScalingMode.Fast };

for (int i = 0; i < worksheet.Charts.Count; i++)
{
    IChart chart = worksheet.Charts[i];
    
    foreach (var quality in qualityLevels)
    {
        application.XlsIORenderer.ChartRenderingOptions.ScalingMode = quality;
        string fileName = $"output/chart{i}_{quality}.png";
        
        using (FileStream stream = new FileStream(fileName, FileMode.Create))
            chart.SaveAsImage(stream);
        
        Console.WriteLine($"Saved: {fileName}");
    }
}

// ---------------------------------------------------------
// Export 6: Export charts to memory streams
// ---------------------------------------------------------
var chartMemoryStreams = new System.Collections.Generic.List<(string Name, byte[] Data)>();

foreach (IChart chart in worksheet.Charts)
{
    using (MemoryStream memStream = new MemoryStream())
    {
        application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Png;
        application.XlsIORenderer.ChartRenderingOptions.ScalingMode = ScalingMode.Best;
        
        chart.SaveAsImage(memStream);
        chartMemoryStreams.Add((chart.Name, memStream.ToArray()));
    }
}

Console.WriteLine($"\nExported {chartMemoryStreams.Count} charts to memory streams");

// ---------------------------------------------------------
// Export 7: Export charts with BMP format
// ---------------------------------------------------------
application.XlsIORenderer.ChartRenderingOptions.ImageFormat = ExportImageFormat.Bmp;

for (int i = 0; i < worksheet.Charts.Count; i++)
{
    IChart chart = worksheet.Charts[i];
    string fileName = $"output/chart{i}.bmp";
    
    using (FileStream stream = new FileStream(fileName, FileMode.Create))
        chart.SaveAsImage(stream);
    
    Console.WriteLine($"Saved: {fileName}");
}

// ---------------------------------------------------------
// Cleanup
// ---------------------------------------------------------
workbook.Close();
excelEngine.Dispose();

Console.WriteLine("\nAll chart exports completed successfully!");
```

---

## Custom Fonts

If the chart uses a font that is not installed, register the `.ttf` or `.otf` file before `SaveAsImage`. Required using: `Syncfusion.Drawing.Fonts`.

```csharp
using (FileStream fontStream = new FileStream("fonts/CustomFont.ttf", FileMode.Open, FileAccess.Read))
    FontManager.RegisterFont(fontStream);
```

Folder registration, style files, and cleanup are in `references/custom-fonts.md`.

---

## Reference Links

- [Syncfusion XlsIO - Charts](https://www.syncfusion.com/document-processing/excel-library/net/charts)
- [ExcelChartShape API](https://help.syncfusion.com/document-processing/excel/excel-library/net/classes/excelchartshape)
- [ConvertToImage Method](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/chart-to-image)
- [Excel Chart Types](https://help.syncfusion.com/document-processing/excel/excel-library/net/cells-manipulation/chart-type)
- [Syncfusion Excel Charts Documentation](https://www.syncfusion.com/kb/excel/chart)
- Custom font registration: `references/custom-fonts.md`
