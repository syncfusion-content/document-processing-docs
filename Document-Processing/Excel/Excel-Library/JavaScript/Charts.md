---
title: Charts in JavaScript Excel Library | Syncfusion
description: Insert and configure Excel charts with ChartType, series, and layout options using the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Charts in JavaScript Excel

Add a chart with:

```ts
sheet.addChart(type, row, column, width, height, data, values?)
```

* `type` — a member of `ChartType`.
* `row` / `column` — 1-based top-left anchor.
* `width` / `height` — size in **points**.
* `data` — A1 range string, category formula string(s), or `ChartData`. Pass `''` for an empty chart and add series later with `Chart.addSeries`.
* `values` — optional values formula when `data` holds category labels.

## Column chart

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

Import `ChartType` from `@syncfusion/ej2-xlsx`. Prefer non-deprecated members such as:

* Column: `ColumnClustered`, `ColumnStacked`, `ColumnPercentStacked`
* Bar: `BarClustered`, `BarStacked`, `BarPercentStacked`
* Line: `Line`, `LineStacked`, `LineMarkers`, and related stacked/marker variants
* Pie and doughnut: `Pie`, `PieExploded`, `Doughnut`, `PieOfPie`, `BarOfPie`
* Scatter and bubble: `ScatterMarkers`, `ScatterLine`, `Bubble`
* Area: `Area`, `AreaStacked`, `AreaPercentStacked`
* 3-D layouts: `Column3D`, `Pie3D`, `Line3D`, and related members
* Extended: `Funnel`, `Waterfall`, `BoxAndWhisker`, `Pareto`, `Sunburst`, `TreeMap`

## Series, legend, and axes

Configure series, axes, legend, and data labels on the returned `Chart`.

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
