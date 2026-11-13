---
title: Charts in JavaScript Excel Library | Syncfusion
description: Insert and configure Excel charts with ChartType, series, and layout options using the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Charts in JavaScript Excel

Charts turn worksheet data into visual comparisons that open in Excel. Place a chart on the sheet, point it at a data range, and set the chart type to match the story you want to show.

```ts
sheet.addChart(type, row, column, width, height, data, values?)
```

* `type` — a member of `ChartType`.
* `row` / `column` — 1-based top-left anchor.
* `width` / `height` — size in **points**.
* `data` — A1 range string, category formula string(s), or `ChartData`. Pass `''` for an empty chart and add series later with `Chart.addSeries`.
* `values` — optional values formula when `data` holds category labels.

## Column chart

A column chart compares values across categories as vertical bars. Clustering related series side by side makes it easy to contrast groups in the same chart.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Month';
sheet.cell('B1').value = 'Sales';
sheet.cell('A2').value = 'Jan';
sheet.cell('B2').number = 120;
sheet.cell('A3').value = 'Feb';
sheet.cell('B3').number = 150;

const chart = sheet.addChart(
  ChartType.ColumnClustered,
  2,
  4,
  400,
  250,
  'A1:B3',
);

chart.chartTitle = 'Monthly sales';
// Optional: chart.hasTitle = false to hide the title while keeping text
// chart.chartTitleArea controls title formatting (font, fill, alignment)
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Month';
sheet.cell('B1').value = 'Sales';
sheet.cell('A2').value = 'Jan';
sheet.cell('B2').number = 120;
sheet.cell('A3').value = 'Feb';
sheet.cell('B3').number = 150;

const chart = sheet.addChart(
  ChartType.ColumnClustered,
  2,
  4,
  400,
  250,
  'A1:B3',
);

chart.chartTitle = 'Monthly sales';
{% endhighlight %}
{% endtabs %}

N> The chart title property is `chart.chartTitle` (not `title`). Series and axes use their own `title` properties separately.

## Common chart types

Common chart types cover column, bar, line, pie, area, scatter, and related layouts. Choose the type that best matches how you want categories and values compared.

* Column: `ColumnClustered`, `ColumnStacked`, `ColumnPercentStacked`
* Bar: `BarClustered`, `BarStacked`, `BarPercentStacked`
* Line: `Line`, `LineStacked`, `LineMarkers`, and related stacked/marker variants
* Pie and doughnut: `Pie`, `PieExploded`, `Doughnut`, `PieOfPie`, `BarOfPie`
* Scatter and bubble: `ScatterMarkers`, `ScatterLine`, `Bubble`
* Area: `Area`, `AreaStacked`, `AreaPercentStacked`
* 3-D layouts: `Column3D`, `Pie3D`, `Line3D`, and related members
* Surface and contour: `Surface3D`, `SurfaceNoColor3D`, `SurfaceContour`, `SurfaceNoColorContour`
* Radar: `Radar`, `RadarMarkers`, `RadarFilled`
* Stock: `StockHighLowClose`, `StockOpenHighLowClose`, `StockVolumeHighLowClose`, `StockVolumeOpenHighLowClose`
* Combination: `ColumnClusteredLine`, `ColumnClusteredLineSecondaryAxis`
* Extended: `Funnel`, `Waterfall`, `BoxAndWhisker`, `Pareto`, `Sunburst`, `TreeMap`, `Histogram`, `FilledMap`

Histogram and filled map charts are described in the section below.

## Histogram and filled map charts

Histogram and filled map are extended chart types (Excel 2016 and later). Pass a `ChartData` object as the data argument.

### Histogram

A histogram counts how many values fall into each bin. Provide a single column of values and, optionally, choose the bins with `binWidth` (the size of each bin) or `binCount` (the number of bins). The two options are mutually exclusive, and when neither is set Excel chooses the bins.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Score';
[45, 52, 58, 61, 64, 67, 70, 73, 78, 82, 85, 91].forEach((score, i) => {
  sheet.cell(i + 2, 1).number = score;
});

const chart = sheet.addChart(ChartType.Histogram, 2, 3, 420, 260, {
  dataRange: 'A1:A13',
  binWidth: 10, // or binCount: 5
});
chart.chartTitle = 'Score distribution';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Score';
[45, 52, 58, 61, 64, 67, 70, 73, 78, 82, 85, 91].forEach((score, i) => {
  sheet.cell(i + 2, 1).number = score;
});

const chart = sheet.addChart(ChartType.Histogram, 2, 3, 420, 260, {
  dataRange: 'A1:A13',
  binWidth: 10, // or binCount: 5
});
chart.chartTitle = 'Score distribution';
{% endhighlight %}
{% endtabs %}

### Filled map

A filled map shades regions by value. The first column holds place names (such as countries or states) and the second column holds the values.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Country';
sheet.cell('B1').value = 'Sales';
const data = [['United States', 540], ['Canada', 210], ['Mexico', 160], ['Brazil', 190]];
data.forEach((row, i) => {
  sheet.cell(i + 2, 1).value = row[0] as string;
  sheet.cell(i + 2, 2).number = row[1] as number;
});

const chart = sheet.addChart(ChartType.FilledMap, 2, 4, 460, 300, {
  dataRange: 'A1:B5',
});
chart.chartTitle = 'Sales by country';
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Country';
sheet.cell('B1').value = 'Sales';
const data = [['United States', 540], ['Canada', 210], ['Mexico', 160], ['Brazil', 190]];
data.forEach((row, i) => {
  sheet.cell(i + 2, 1).value = row[0];
  sheet.cell(i + 2, 2).number = row[1];
});

const chart = sheet.addChart(ChartType.FilledMap, 2, 4, 460, 300, {
  dataRange: 'A1:B5',
});
chart.chartTitle = 'Sales by country';
{% endhighlight %}
{% endtabs %}

N> Extended chart types require Excel 2016 or later to render. `binWidth` and `binCount` apply only to `ChartType.Histogram`; using them with another type throws `InvalidChartError`. A filled map is written with the `en-US` geography culture, and Excel resolves the place names to map regions when the file is opened.

## Configure series, legend, and axes

After a chart exists, you can refine series, axes, the legend, and data labels so the visual matches your report. Titles and layout options help readers understand each series at a glance.

* `addSeries(title?)` appends a series; set `categoryLabels` and `values` on the returned `ChartSeries`.
* Axis titles use `primaryCategoryAxis.title` / `primaryValueAxis.title` (not `chartTitle`).
* Toggle the legend with `hasLegend` and position it through `legend`.
* Remove a chart with `sheet.removeChart(chart)` or by zero-based index.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Q';
sheet.cell('B1').value = 'Rev';
sheet.cell('A2').value = 'Q1';
sheet.cell('B2').number = 10;
sheet.cell('A3').value = 'Q2';
sheet.cell('B3').number = 14;

const chart = sheet.addChart(ChartType.Line, 2, 4, 360, 220, '');
chart.chartTitle = 'Revenue';
chart.hasLegend = true;
chart.legend.position = LegendPosition.Bottom;

const series = chart.addSeries('Rev');
series.categoryLabels = 'Sheet1!$A$2:$A$3';
series.values = 'Sheet1!$B$2:$B$3';

chart.primaryCategoryAxis.title = 'Quarter';
chart.primaryValueAxis.title = 'Amount';

sheet.removeChart(chart);
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

sheet.cell('A1').value = 'Q';
sheet.cell('B1').value = 'Rev';
sheet.cell('A2').value = 'Q1';
sheet.cell('B2').number = 10;
sheet.cell('A3').value = 'Q2';
sheet.cell('B3').number = 14;

const chart = sheet.addChart(ChartType.Line, 2, 4, 360, 220, '');
chart.chartTitle = 'Revenue';
chart.hasLegend = true;
chart.legend.position = LegendPosition.Bottom;

const series = chart.addSeries('Rev');
series.categoryLabels = 'Sheet1!$A$2:$A$3';
series.values = 'Sheet1!$B$2:$B$3';

chart.primaryCategoryAxis.title = 'Quarter';
chart.primaryValueAxis.title = 'Amount';

sheet.removeChart(chart);
{% endhighlight %}
{% endtabs %}

N> Chart drawing parts are written when you save the workbook.
