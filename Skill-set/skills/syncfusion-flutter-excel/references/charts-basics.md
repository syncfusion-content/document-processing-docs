# Charts Basics

Create and customize basic Excel charts in Flutter XlsIO.

---

> **Placeholders:**
> - `{workbook}` → Workbook instance variable name
> - `{sheet}` → Worksheet instance variable name
> - `{data-range}` → Data range for chart (e.g., `'A1:B5'`)
> - `{chart-type}` → Excel chart type (e.g., `ExcelChartType.column`, `ExcelChartType.pie`)
> - `{chart-title}` → Chart title text (e.g., `'Sales Data'`)
> - `{chart-index}` → Index of chart in collection (e.g., `0`)

---

## Creating a Basic Chart

Create a chart with `ChartCollection` and add it to a worksheet:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('John');
sheet.getRangeByName('A2').setText('Amy');
sheet.getRangeByName('A3').setText('Jack');
sheet.getRangeByName('B1').setNumber(10);
sheet.getRangeByName('B2').setNumber(12);
sheet.getRangeByName('B3').setNumber(20);

final ChartCollection charts = ChartCollection(sheet);
final Chart chart = charts.add();
chart.chartType = ExcelChartType.column;
chart.dataRange = sheet.getRangeByName('A1:B3');
sheet.charts = charts;

final List<int> bytes = workbook.saveSync();
workbook.dispose();
File('Chart.xlsx').writeAsBytes(bytes);
```

### Placeholders
- `'A1:B3'` → Replace with `'{data-range}'` (chart data range)
- `ExcelChartType.column` → Replace with `'{chart-type}'` (chart type)
- `'Chart.xlsx'` → Replace with `'{output-file}'` (output file name)

## Customizing Chart Elements

Set chart title, data labels, legend, and styling:

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.column;
chart.dataRange = sheet.getRangeByName('A1:B5');

// Set chart title
chart.chartTitle = 'Sales Data';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.size = 12;
chart.chartTitleArea.color = '#0000FF';

// Set data labels
final ChartSerie serie = chart.series[0];
serie.dataLabels.isValue = true;
serie.dataLabels.textArea.bold = true;
serie.dataLabels.textArea.size = 10;
serie.dataLabels.textArea.fontName = 'Arial';
serie.dataLabels.textArea.color = '#FF0000';

// Set legend position
chart.legend!.position = ExcelLegendPosition.right;

// Set chart border and plot area
chart.linePattern = ExcelChartLinePattern.solid;
chart.linePatternColor = '#2F4F4F';
chart.plotArea.linePattern = ExcelChartLinePattern.solid;
chart.plotArea.linePatternColor = '#0000FF';
```

### Placeholders
- `'Sales Data'` → Replace with `'{chart-title}'` (chart title text)
- `'#0000FF'` → Replace with `'{color-value}'` (hex color code)
- `12` → Replace with `'{font-size}'` (font size)
- `'Arial'` → Replace with `'{font-name}'` (font family)

## Setting Chart Position

Position the chart within the worksheet using row and column indices:

```dart
chart.topRow = 0;
chart.bottomRow = 20;
chart.leftColumn = 1;
chart.rightColumn = 8;
```

### Placeholders
- `0`, `20`, `1`, `8` → Replace with `'{position-value}'` (row or column index)

## Chart Axes Configuration

Configure axis number formats and other properties:

```dart
chart.primaryCategoryAxis.numberFormat = 'mmmm';
chart.primaryValueAxis.numberFormat = '0.00';
```

### Placeholders
- `'mmmm'` → Replace with `'{date-format}'` (date format code)
- `'0.00'` → Replace with `'{number-format}'` (number format code)

## Notes

- All chart types inherit customization properties (title, legend, data labels, borders)
- Multiple charts can be added to single worksheet
- Chart data range must include headers in first row/column
- Use `isSeriesInRows = false` for column-based data layout (most common)
