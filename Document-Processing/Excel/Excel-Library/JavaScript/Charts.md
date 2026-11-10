---
title: Charts in JavaScript Excel Library | Syncfusion
description: Insert and configure Excel charts with ChartType, series, and layout options using the Syncfusion JavaScript Excel Library.
platform: document-processing
control: Excel
documentation: ug
---

# Charts in JavaScript Excel Library

Charts turn worksheet data into visual comparisons that open in Excel. Place a chart on the sheet, point it at a data range, and set the chart type to match the story you want to show.

```ts
sheet.addChart(type, row, column, width, height, data, values?)
```

* `type` — a member of `ChartType`.
* `row` / `column` — 1-based top-left anchor.
* `width` / `height` — size in **points**.
* `data` — A1 range string, category formula string(s), or `ChartData`. Pass `''` for an empty chart and add series later with `Chart.addSeries`.
* `values` — optional values formula when `data` holds category labels.

N> The snippets on this page save the workbook with `await workbook.save('<file name>.xlsx')`, which requires Node.js. In a browser, call `workbook.save()` without arguments and download the returned bytes, as shown in [Getting started](https://help.syncfusion.com/document-processing/excel/excel-library/javascript/getting-started).

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

// Save the workbook.
await workbook.save('ColumnChart.xlsx');
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

// Save the workbook.
await workbook.save('ColumnChart.xlsx');
{% endhighlight %}
{% endtabs %}

N> The chart title property is `chart.chartTitle` (not `title`). Series and axes use their own `title` properties separately.

## Bar chart

A bar chart compares values across categories as horizontal bars. Use `ChartType.BarClustered`, `ChartType.BarStacked`, or `ChartType.BarPercentStacked`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.BarClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Save the workbook.
await workbook.save('BarChart.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.BarClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Save the workbook.
await workbook.save('BarChart.xlsx');
{% endhighlight %}
{% endtabs %}

## Line chart

A line chart shows how values change across ordered categories, such as months. Use `ChartType.Line` for lines, or `ChartType.LineMarkers` to add markers to each point.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.LineMarkers, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales trend';

// Save the workbook.
await workbook.save('LineChart.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.LineMarkers, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales trend';

// Save the workbook.
await workbook.save('LineChart.xlsx');
{% endhighlight %}
{% endtabs %}

## Pie and doughnut charts

Pie and doughnut charts show how each category contributes to a total. They use one data series. Use `ChartType.PieExploded` or `ChartType.DoughnutExploded` to pull the slices apart, or set `explodePercent` on the series.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// Pie chart of the 2026 column
const pie = sheet.addChart(ChartType.Pie, 2, 5, 360, 240, 'A1:A5');
const pieSeries = pie.addSeries('2026');
pieSeries.categoryLabels = 'Sheet1!$A$2:$A$5';
pieSeries.values = 'Sheet1!$C$2:$C$5';
pieSeries.explodePercent = 10;
pie.chartTitle = '2026 sales share';

// Doughnut chart of the same data
const doughnut = sheet.addChart(ChartType.Doughnut, 20, 5, 360, 240, 'A1:A5');
const doughnutSeries = doughnut.addSeries('2026');
doughnutSeries.categoryLabels = 'Sheet1!$A$2:$A$5';
doughnutSeries.values = 'Sheet1!$C$2:$C$5';
doughnut.chartTitle = '2026 sales share';

// Save the workbook.
await workbook.save('PieAndDoughnutCharts.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// Pie chart of the 2026 column
const pie = sheet.addChart(ChartType.Pie, 2, 5, 360, 240, 'A1:A5');
const pieSeries = pie.addSeries('2026');
pieSeries.categoryLabels = 'Sheet1!$A$2:$A$5';
pieSeries.values = 'Sheet1!$C$2:$C$5';
pieSeries.explodePercent = 10;
pie.chartTitle = '2026 sales share';

// Doughnut chart of the same data
const doughnut = sheet.addChart(ChartType.Doughnut, 20, 5, 360, 240, 'A1:A5');
const doughnutSeries = doughnut.addSeries('2026');
doughnutSeries.categoryLabels = 'Sheet1!$A$2:$A$5';
doughnutSeries.values = 'Sheet1!$C$2:$C$5';
doughnut.chartTitle = '2026 sales share';

// Save the workbook.
await workbook.save('PieAndDoughnutCharts.xlsx');
{% endhighlight %}
{% endtabs %}

## Area chart

An area chart emphasizes the magnitude of change over time by filling the area under each line. Use `ChartType.Area`, `ChartType.AreaStacked`, or `ChartType.AreaPercentStacked`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.AreaStacked, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Cumulative sales';

// Save the workbook.
await workbook.save('AreaChart.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.AreaStacked, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Cumulative sales';

// Save the workbook.
await workbook.save('AreaChart.xlsx');
{% endhighlight %}
{% endtabs %}

## Scatter chart

A scatter chart plots pairs of numbers to show the relationship between two variables. Choose the look with the chart type, for example `ChartType.ScatterMarkers`, `ChartType.ScatterLine`, `ChartType.ScatterLineMarkers`, `ChartType.ScatterSmooth`, or `ChartType.ScatterSmoothMarkers`. You can also set the `scatterStyle` property to `none`, `line`, `lineMarker`, `marker`, `smooth`, or `smoothMarker`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// X values from column B (2025), Y values from column C (2026)
const chart = sheet.addChart(ChartType.ScatterMarkers, 2, 5, 400, 250, '');
const series = chart.addSeries('2026 versus 2025');
series.categoryLabels = 'Sheet1!$B$2:$B$5';
series.values = 'Sheet1!$C$2:$C$5';
chart.primaryCategoryAxis.title = '2025';
chart.primaryValueAxis.title = '2026';

// Connect the points with smooth lines and keep the markers
chart.scatterStyle = 'smoothMarker';

// Save the workbook.
await workbook.save('ScatterChart.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

// X values from column B (2025), Y values from column C (2026)
const chart = sheet.addChart(ChartType.ScatterMarkers, 2, 5, 400, 250, '');
const series = chart.addSeries('2026 versus 2025');
series.categoryLabels = 'Sheet1!$B$2:$B$5';
series.values = 'Sheet1!$C$2:$C$5';
chart.primaryCategoryAxis.title = '2025';
chart.primaryValueAxis.title = '2026';

// Connect the points with smooth lines and keep the markers
chart.scatterStyle = 'smoothMarker';

// Save the workbook.
await workbook.save('ScatterChart.xlsx');
{% endhighlight %}
{% endtabs %}

## Bubble chart

A bubble chart adds a third value to a scatter chart by sizing each marker. Set `bubbleSizes` on the series to the range that holds the sizes. Use `ChartType.Bubble3D` for a three-dimensional look.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.Bubble, 2, 5, 400, 250, '');
const series = chart.addSeries('Sales');
series.categoryLabels = 'Sheet1!$B$2:$B$5';
series.values = 'Sheet1!$C$2:$C$5';
series.bubbleSizes = 'Sheet1!$B$2:$B$5';
chart.chartTitle = 'Sales bubbles';

// Save the workbook.
await workbook.save('BubbleChart.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.Bubble, 2, 5, 400, 250, '');
const series = chart.addSeries('Sales');
series.categoryLabels = 'Sheet1!$B$2:$B$5';
series.values = 'Sheet1!$C$2:$C$5';
series.bubbleSizes = 'Sheet1!$B$2:$B$5';
chart.chartTitle = 'Sales bubbles';

// Save the workbook.
await workbook.save('BubbleChart.xlsx');
{% endhighlight %}
{% endtabs %}

## Stacked and percent-stacked grouping

Column, bar, and area charts can be clustered, stacked, or percent stacked. Pick the matching chart type, or change the `grouping` property of an existing chart to `clustered`, `stacked`, `percentStacked`, or `standard`. Area charts accept `standard`, `stacked`, and `percentStacked`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Stack the series instead of clustering them
chart.grouping = 'stacked';

// Save the workbook.
await workbook.save('ChartGrouping.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Stack the series instead of clustering them
chart.grouping = 'stacked';

// Save the workbook.
await workbook.save('ChartGrouping.xlsx');
{% endhighlight %}
{% endtabs %}

## Three-dimensional charts

Three-dimensional chart types, such as `ChartType.ColumnClustered3D`, `ChartType.Pie3D`, and `ChartType.Area3D`, support the `view3D` property for rotation, perspective, and depth.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered3D, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = '3-D sales';

chart.view3D = {
  rotationX: 20,
  rotationY: 30,
  perspective: 30,
  rightAngleAxis: false,
};

// Save the workbook.
await workbook.save('ThreeDimensionalCharts.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered3D, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = '3-D sales';

chart.view3D = {
  rotationX: 20,
  rotationY: 30,
  perspective: 30,
  rightAngleAxis: false,
};

// Save the workbook.
await workbook.save('ThreeDimensionalCharts.xlsx');
{% endhighlight %}
{% endtabs %}

## Funnel, waterfall, and other extended charts

Extended chart types are `ChartType.Funnel`, `ChartType.Waterfall`, `ChartType.Pareto`, `ChartType.BoxAndWhisker`, `ChartType.Sunburst`, and `ChartType.TreeMap`. For these types, pass the category labels and the values to `addChart` as two formulas. Do not pass a single data range, and do not change a chart between a standard type and an extended type. Create a new chart instead.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const funnel = sheet.addChart(
  ChartType.Funnel,
  2,
  5,
  400,
  250,
  'Sheet1!$A$2:$A$5',
  'Sheet1!$C$2:$C$5',
);
funnel.chartTitle = '2026 sales funnel';

const waterfall = sheet.addChart(
  ChartType.Waterfall,
  20,
  5,
  400,
  250,
  'Sheet1!$A$2:$A$5',
  'Sheet1!$C$2:$C$5',
);
waterfall.chartTitle = '2026 sales waterfall';

// Save the workbook.
await workbook.save('ExtendedCharts.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const funnel = sheet.addChart(
  ChartType.Funnel,
  2,
  5,
  400,
  250,
  'Sheet1!$A$2:$A$5',
  'Sheet1!$C$2:$C$5',
);
funnel.chartTitle = '2026 sales funnel';

const waterfall = sheet.addChart(
  ChartType.Waterfall,
  20,
  5,
  400,
  250,
  'Sheet1!$A$2:$A$5',
  'Sheet1!$C$2:$C$5',
);
waterfall.chartTitle = '2026 sales waterfall';

// Save the workbook.
await workbook.save('ExtendedCharts.xlsx');
{% endhighlight %}
{% endtabs %}

## Common chart types

Common chart types cover column, bar, line, pie, area, scatter, and related layouts. Choose the type that best matches how you want categories and values compared.

* Column: `ColumnClustered`, `ColumnStacked`, `ColumnPercentStacked`
* Bar: `BarClustered`, `BarStacked`, `BarPercentStacked`
* Line: `Line`, `LineStacked`, `LineMarkers`, and related stacked/marker variants
* Pie and doughnut: `Pie`, `PieExploded`, `Doughnut`, `PieOfPie`, `BarOfPie`
* Scatter and bubble: `ScatterMarkers`, `ScatterLine`, `Bubble`
* Area: `Area`, `AreaStacked`, `AreaPercentStacked`
* 3-D layouts: `Column3D`, `Pie3D`, `Line3D`, and related members
* Extended: `Funnel`, `Waterfall`, `BoxAndWhisker`, `Pareto`, `Sunburst`, `TreeMap`

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

// Save the workbook.
await workbook.save('ConfigureSeriesLegendAndAxes.xlsx');
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

// Save the workbook.
await workbook.save('ConfigureSeriesLegendAndAxes.xlsx');
{% endhighlight %}
{% endtabs %}

N> Chart drawing parts are written when you save the workbook.

## Data labels

Data labels show the value, category name, series name, or percentage next to each point. Set the label options on the series and choose the position with `DataLabelPosition`.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

const labels = chart.series[0].dataLabels;
labels.isValue = true;
labels.isCategoryName = false;
labels.isSeriesName = false;
labels.isPercentage = false;
labels.position = DataLabelPosition.OutsideEnd;
labels.textArea.size = 10;
labels.textArea.bold = true;

// Save the workbook.
await workbook.save('DataLabels.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

const labels = chart.series[0].dataLabels;
labels.isValue = true;
labels.isCategoryName = false;
labels.isSeriesName = false;
labels.isPercentage = false;
labels.position = DataLabelPosition.OutsideEnd;
labels.textArea.size = 10;
labels.textArea.bold = true;

// Save the workbook.
await workbook.save('DataLabels.xlsx');
{% endhighlight %}
{% endtabs %}

The `DataLabelPosition` object has `Center`, `InsideBase`, `InsideEnd`, `OutsideEnd`, `BestFit`, `Left`, `Right`, `Top`, and `Bottom`. Not every position applies to every chart type.

## Chart, series, and text formatting

Format the chart area, plot area, series, and text. Colors are `RRGGBB` or `#RRGGBB` strings, line weights are in points, and fill transparency is a number from 0 (opaque) to 100.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');

// Title text
chart.chartTitle = 'Sales by region';
chart.chartTitleArea.size = 16;
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '1F3864';

// Chart area and plot area
chart.chartArea.fill.type = ChartFillType.Solid;
chart.chartArea.fill.foreColor = 'F2F2F2';
chart.chartArea.line.color = 'BFBFBF';
chart.chartArea.line.weightPt = 1;
chart.plotArea.fill.type = ChartFillType.None;

// First series
const format = chart.series[0].serieFormat;
format.fill.type = ChartFillType.Solid;
format.fill.foreColor = '4472C4';
format.fill.transparency = 10;
format.line.color = '2F5597';
format.line.weightPt = 1.5;

// Save the workbook.
await workbook.save('ChartFormatting.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');

// Title text
chart.chartTitle = 'Sales by region';
chart.chartTitleArea.size = 16;
chart.chartTitleArea.bold = true;
chart.chartTitleArea.color = '1F3864';

// Chart area and plot area
chart.chartArea.fill.type = ChartFillType.Solid;
chart.chartArea.fill.foreColor = 'F2F2F2';
chart.chartArea.line.color = 'BFBFBF';
chart.chartArea.line.weightPt = 1;
chart.plotArea.fill.type = ChartFillType.None;

// First series
const format = chart.series[0].serieFormat;
format.fill.type = ChartFillType.Solid;
format.fill.foreColor = '4472C4';
format.fill.transparency = 10;
format.line.color = '2F5597';
format.line.weightPt = 1.5;

// Save the workbook.
await workbook.save('ChartFormatting.xlsx');
{% endhighlight %}
{% endtabs %}

## Axis options

Use the `primaryCategoryAxis` and `primaryValueAxis` objects to set titles, scale limits, number formats, gridlines, tick marks, and visibility.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');

const valueAxis = chart.primaryValueAxis;
valueAxis.title = 'Sales';
valueAxis.minimumValue = 0;
valueAxis.maximumValue = 200;
valueAxis.numberFormat = '#,##0';
valueAxis.hasMajorGridLines = true;
valueAxis.hasMinorGridLines = false;
valueAxis.majorTickMark = TickMarkType.Outside;
valueAxis.minorTickMark = TickMarkType.None;

const categoryAxis = chart.primaryCategoryAxis;
categoryAxis.title = 'Region';
categoryAxis.titleArea.italic = true;
categoryAxis.line.color = '7F7F7F';

// Hide an axis

// Save the workbook.
await workbook.save('ChartAxes.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');

const valueAxis = chart.primaryValueAxis;
valueAxis.title = 'Sales';
valueAxis.minimumValue = 0;
valueAxis.maximumValue = 200;
valueAxis.numberFormat = '#,##0';
valueAxis.hasMajorGridLines = true;
valueAxis.hasMinorGridLines = false;
valueAxis.majorTickMark = TickMarkType.Outside;
valueAxis.minorTickMark = TickMarkType.None;

const categoryAxis = chart.primaryCategoryAxis;
categoryAxis.title = 'Region';
categoryAxis.titleArea.italic = true;
categoryAxis.line.color = '7F7F7F';

// Hide an axis

// Save the workbook.
await workbook.save('ChartAxes.xlsx');
{% endhighlight %}
{% endtabs %}

The `TickMarkType` object has `None`, `Inside`, `Outside`, and `Cross`.

## Legend, data table, and position

Show or hide the legend, move it with `LegendPosition`, show a data table under the plot, and place the chart on the worksheet. The `row` and `column` properties are 1-based anchors, and `top` and `left` are distances in points from the top-left corner of the sheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Legend
chart.hasLegend = true;
chart.legend.position = LegendPosition.Right;
chart.legend.textArea.size = 10;

// Data table under the plot
chart.hasDataTable = true;

// Move and resize the chart
chart.left = 320;
chart.top = 40;
chart.width = 480;
chart.height = 300;

// Save the workbook.
await workbook.save('ChartLegendAndPosition.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Legend
chart.hasLegend = true;
chart.legend.position = LegendPosition.Right;
chart.legend.textArea.size = 10;

// Data table under the plot
chart.hasDataTable = true;

// Move and resize the chart
chart.left = 320;
chart.top = 40;
chart.width = 480;
chart.height = 300;

// Save the workbook.
await workbook.save('ChartLegendAndPosition.xlsx');
{% endhighlight %}
{% endtabs %}

The `LegendPosition` object has `Bottom`, `Top`, `Left`, `Right`, and `Corner`.

## Manage series and charts

Add or remove series, switch whether series are read from rows or columns, and remove a chart from the worksheet.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook: Workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Read series from rows instead of columns
chart.isSeriesInRows = true;

// Add a series, then remove it by reference or by zero-based index
const extra = chart.addSeries('Target');
extra.values = 'Sheet1!$C$2:$C$5';
chart.removeSeries(extra);

// Remove a second chart by reference or by zero-based index
const second = sheet.addChart(ChartType.Line, 20, 5, 400, 250, 'A1:C5');
sheet.removeChart(second);

// Save the workbook.
await workbook.save('ManageCharts.xlsx');
{% endhighlight %}
{% highlight javascript tabtitle="JavaScript" %}
import { Workbook, ChartType, ChartFillType, DataLabelPosition, TickMarkType, LegendPosition } from '@syncfusion/ej2-xlsx';

const workbook = Workbook.create();
const sheet = workbook.sheet(0);

// Sample data in A1:C5
const rows = [
  ['Region', '2025', '2026'],
  ['North', 120, 150],
  ['South', 90, 110],
  ['East', 60, 95],
  ['West', 75, 80],
];
rows.forEach((row, r) => {
  row.forEach((value, c) => {
    const cell = sheet.cell(r + 1, c + 1);
    if (typeof value === 'number') {
      cell.number = value;
    } else {
      cell.value = value;
    }
  });
});

const chart = sheet.addChart(ChartType.ColumnClustered, 2, 5, 400, 250, 'A1:C5');
chart.chartTitle = 'Sales by region';

// Read series from rows instead of columns
chart.isSeriesInRows = true;

// Add a series, then remove it by reference or by zero-based index
const extra = chart.addSeries('Target');
extra.values = 'Sheet1!$C$2:$C$5';
chart.removeSeries(extra);

// Remove a second chart by reference or by zero-based index
const second = sheet.addChart(ChartType.Line, 20, 5, 400, 250, 'A1:C5');
sheet.removeChart(second);

// Save the workbook.
await workbook.save('ManageCharts.xlsx');
{% endhighlight %}
{% endtabs %}
