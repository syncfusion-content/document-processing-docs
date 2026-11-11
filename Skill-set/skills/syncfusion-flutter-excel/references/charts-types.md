# Charts Types

All supported chart types in Flutter XlsIO with complete examples.

---

> **Placeholders:**
> - `{workbook}` → Workbook instance variable name
> - `{sheet}` → Worksheet instance variable name
> - `{data-range}` → Data range for chart (e.g., `'A1:B10'`)
> - `{chart-type}` → Excel chart type (e.g., `ExcelChartType.pie`, `ExcelChartType.bar`)

---

## Pie Chart

Circular chart showing data proportions by slices:

```dart
final Workbook workbook = Workbook();
final Worksheet sheet = workbook.worksheets[0];

sheet.getRangeByName('A1').setText('Task');
sheet.getRangeByName('A2').setText('Planning');
sheet.getRangeByName('A3').setText('Development');
sheet.getRangeByName('A4').setText('Testing');
sheet.getRangeByName('B1').setText('Hours');
sheet.getRangeByName('B2').setNumber(20);
sheet.getRangeByName('B3').setNumber(50);
sheet.getRangeByName('B4').setNumber(15);

final ChartCollection charts = ChartCollection(sheet);
final Chart chart = charts.add();
chart.chartType = ExcelChartType.pie;
chart.dataRange = sheet.getRangeByName('A1:B4');
chart.isSeriesInRows = false;
chart.chartTitle = 'Project Time Allocation';
sheet.charts = charts;
```

### Placeholders
- `'A1:B4'` → Replace with `'{data-range}'` (chart data range)
- `'Project Time Allocation'` → Replace with `'{chart-title}'` (chart title)

## Bar Chart

Horizontal bars representing categorical data:

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.bar;
chart.dataRange = sheet.getRangeByName('A1:C6');
chart.isSeriesInRows = false;

final ChartSerie serie1 = chart.series[0];
serie1.dataLabels.isValue = true;
serie1.linePattern = ExcelChartLinePattern.dashDot;
serie1.linePatternColor = '#2F4F4F';

chart.legend!.position = ExcelLegendPosition.bottom;
```

### Placeholders
- `'A1:C6'` → Replace with `'{data-range}'` (chart data range)
- `'#2F4F4F'` → Replace with `'{color-value}'` (line color)

## Column Chart

Vertical bars representing categorical data:

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.column;
chart.dataRange = sheet.getRangeByName('A1:B5');
chart.isSeriesInRows = false;

chart.chartTitle = 'Event Expense Analysis';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.size = 10;
chart.chartTitleArea.color = '#0000FF';

final ChartSerie serie = chart.series[0];
serie.dataLabels.isValue = true;
serie.dataLabels.textArea.bold = true;
serie.dataLabels.textArea.fontName = 'Arial';
serie.dataLabels.textArea.color = '#48E7D1';
```

### Placeholders
- `'A1:B5'` → Replace with `'{data-range}'` (chart data range)
- `'Event Expense Analysis'` → Replace with `'{chart-title}'` (title text)

## Line Chart

Data points connected by line segments (useful for trends):

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.line;
chart.dataRange = sheet.getRangeByName('A1:D6');
chart.isSeriesInRows = false;

chart.chartTitle = 'Monthly Sales Data';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.size = 10;
chart.chartTitleArea.color = '#0000FF';

for (int i = 0; i < chart.series.count; i++) {
  final ChartSerie serie = chart.series[i];
  serie.dataLabels.isValue = true;
  serie.linePattern = ExcelChartLinePattern.roundDot;
  serie.linePatternColor = '#EE2828';
}
```

### Placeholders
- `'A1:D6'` → Replace with `'{data-range}'` (chart data range)
- `'Monthly Sales Data'` → Replace with `'{chart-title}'` (title text)

## Stacked Bar Chart

Bar chart with data series stacked horizontally:

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.barStacked;
chart.dataRange = sheet.getRangeByName('A1:D6');
chart.isSeriesInRows = false;

chart.chartTitle = 'Student Details';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '#5F7480';

chart.legend!.position = ExcelLegendPosition.bottom;
```

### Placeholders
- `'A1:D6'` → Replace with `'{data-range}'` (chart data range)
- `'Student Details'` → Replace with `'{chart-title}'` (title text)

## Stacked Column Chart

Column chart with data series stacked vertically:

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.columnStacked;
chart.dataRange = sheet.getRangeByName('A1:C5');
chart.isSeriesInRows = false;

chart.chartTitle = 'Quarterly Revenue Comparison';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '#050505';

final ChartSerie serie1 = chart.series[0];
serie1.dataLabels.isValue = true;
serie1.linePattern = ExcelChartLinePattern.longDash;

chart.legend!.position = ExcelLegendPosition.right;
```

### Placeholders
- `'A1:C5'` → Replace with `'{data-range}'` (chart data range)
- `'Quarterly Revenue Comparison'` → Replace with `'{chart-title}'` (title text)

## Stacked Line Chart

Line chart with cumulative data series (non-overlapping):

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.lineStacked;
chart.dataRange = sheet.getRangeByName('A1:C6');
chart.isSeriesInRows = false;

chart.chartTitle = 'Weekly Weather Summary';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '#050505';

final ChartSerie serie1 = chart.series[0];
serie1.dataLabels.isValue = true;
serie1.linePattern = ExcelChartLinePattern.longDash;
serie1.linePatternColor = '#F40829';

final ChartSerie serie2 = chart.series[1];
serie2.dataLabels.isValue = true;
serie2.linePattern = ExcelChartLinePattern.longDash;
serie2.linePatternColor = '#08A2F4';
```

### Placeholders
- `'A1:C6'` → Replace with `'{data-range}'` (chart data range)
- `'Weekly Weather Summary'` → Replace with `'{chart-title}'` (title text)

## Line with Markers Chart

Line chart showing markers at each data point:

```dart
final Chart chart = charts.add();
chart.chartType = ExcelChartType.lineMarkers;
chart.dataRange = sheet.getRangeByName('A1:C6');
chart.isSeriesInRows = false;

chart.chartTitle = 'Monthly Average Weather';
chart.chartTitleArea.bold = true;
chart.chartTitleArea.size = 10;
chart.chartTitleArea.color = '#050505';

final ChartSerie serie1 = chart.series[0];
serie1.dataLabels.isValue = true;
serie1.linePattern = ExcelChartLinePattern.longDash;
serie1.linePatternColor = '#F40829';

final ChartSerie serie2 = chart.series[1];
serie2.dataLabels.isValue = true;
serie2.linePattern = ExcelChartLinePattern.longDash;
serie2.linePatternColor = '#08A2F4';

chart.legend!.position = ExcelLegendPosition.right;
```

### Placeholders
- `'A1:C6'` → Replace with `'{data-range}'` (chart data range)
- `'Monthly Average Weather'` → Replace with `'{chart-title}'` (title text)

## Chart Type Enumeration Values

**Supported Types:**
- `ExcelChartType.pie`: Pie chart
- `ExcelChartType.bar`: Bar chart
- `ExcelChartType.column`: Column chart
- `ExcelChartType.line`: Line chart
- `ExcelChartType.barStacked`: Stacked bar
- `ExcelChartType.columnStacked`: Stacked column
- `ExcelChartType.lineStacked`: Stacked line
- `ExcelChartType.lineMarkers`: Line with markers
- `ExcelChartType.lineStackedMarkers`: Stacked line with markers
- `ExcelChartType.line100StackedMarkers`: 100% stacked line with markers
- 3D variants: `3dLine`, `3dColumn`, `3dClusteredColumn`, `3dPie`, etc.
- Specialized: `doughnut`, `doughnutExploded`, `barOfPie`, `pieOfPie`
- Advanced: `highLowClose`, `openHighLowClose`, `volumeHighLowClose`, `volumeOpenHighLowClose`

## Line Patterns

**Pattern Options:**
- `ExcelChartLinePattern.solid`: Solid line
- `ExcelChartLinePattern.longDash`: Long dashes
- `ExcelChartLinePattern.dashDot`: Dash-dot pattern
- `ExcelChartLinePattern.longDashDotDot`: Long dash-dot-dot
- `ExcelChartLinePattern.roundDot`: Rounded dots
- `ExcelChartLinePattern.squareDot`: Square dots

## Legend Positions

**Position Options:**
- `ExcelLegendPosition.right`: Right side
- `ExcelLegendPosition.left`: Left side
- `ExcelLegendPosition.top`: Top
- `ExcelLegendPosition.bottom`: Bottom

## Notes

- Multi-series charts: Use `chart.series[0]`, `chart.series[1]`, etc. for formatting
- Data range must start with headers in first row/column
- Set `isSeriesInRows = false` for column-based layout (recommended)
- Use `dataLabels.isValue`, `isCategoryName`, `isSeriesName` for label options
- Line patterns apply to series lines and chart/plot area borders
