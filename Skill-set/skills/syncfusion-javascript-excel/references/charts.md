# Charts

Add Excel charts on a worksheet with `addChart` and `ChartType`.

## Table of contents

- [Add a chart](#add-a-chart)
- [ChartType tokens](#charttype-tokens)
- [Data argument shapes](#data-argument-shapes)
- [Presentation](#presentation)
- [Remove charts](#remove-charts)
- [Internal charts entry](#internal-charts-entry)
- [Gotchas](#gotchas)

## Add a chart

```ts
import { Workbook, ChartType, LegendPosition } from '@syncfusion/ej2-xlsx';

const wb = Workbook.create();
const sheet = wb.sheet(0);

sheet.cell('A1').text = 'Month';
sheet.cell('B1').text = 'Sales';
sheet.cell('A2').text = 'Jan';
sheet.cell('B2').value = 10;
sheet.cell('A3').text = 'Feb';
sheet.cell('B3').value = 20;

const chart = sheet.addChart(
  ChartType.ColumnClustered,
  5,    // row (1-based anchor)
  1,    // column (1-based; 1 = A)
  400,  // width points
  240,  // height points
  'A1:B3', // data range
);

chart.hasTitle = true;
chart.chartTitle = 'Monthly sales';
chart.legend.position = LegendPosition.Bottom;
```

Signature:

```ts
sheet.addChart(
  type,
  row,
  column,
  width,
  height,
  data,     // A1 range | category formulas | ChartData | ''
  values?,  // values formula when data is category side
);
```

Size is in **points** (72 pt = 1 in). Anchor row/column are **1-based**.

## ChartType tokens

Prefer **specific** tokens (not deprecated coarse aliases):

| Prefer | Avoid (deprecated alias) |
|--------|---------------------------|
| `ChartType.ColumnClustered` | `ChartType.Column` |
| `ChartType.BarClustered` | `ChartType.Bar` |
| `ChartType.ScatterMarkers` | `ChartType.Scatter` |
| `ChartType.BarClustered3D` | `ChartType.Bar3D` |

Common values (not exhaustive):

- Column: `ColumnClustered`, `ColumnStacked`, `ColumnPercentStacked`
- Bar: `BarClustered`, `BarStacked`, `BarPercentStacked`
- Line: `Line`, `LineMarkers`, `LineStacked`, …
- Pie: `Pie`, `PieExploded`, `Doughnut`, …
- Scatter: `ScatterMarkers`, `ScatterLine`, `ScatterSmooth`, …
- Bubble: `Bubble`, `Bubble3D`
- Area: `Area`, `AreaStacked`, …
- 3-D: `Column3D`, `Pie3D`, `Area3D`, `Surface3D`, …
- Extended: `BoxAndWhisker`, `Funnel`, `Pareto`, `Sunburst`, `TreeMap`, `Waterfall`

Use as `ChartType.ColumnClustered` (const object), not a TypeScript `enum` import pattern.

## Data argument shapes

```ts
// 1) Single A1 range (categories + values block)
sheet.addChart(ChartType.Line, 10, 1, 360, 200, 'A1:B5');

// 2) Empty chart, then series via Chart.addSeries
const empty = sheet.addChart(ChartType.Pie, 10, 8, 300, 200, '');
// empty.addSeries(… ) per Chart API

// 3) Category + values formulas (string / arrays) — see TSDoc on addChart
// sheet.addChart(type, r, c, w, h, categories, values)
```

`ChartData` descriptor is available for structured data-only setups.

## Presentation

On the returned `Chart`:

```ts
chart.hasTitle = true;
chart.chartTitle = 'Revenue';

chart.legend.position = LegendPosition.Right;
// LegendPosition: Bottom | Top | Left | Right | Corner

// Axes, series formatting, data labels, 3D view via
// ChartAxis, ChartSeries, ChartDataLabels, ChartView3D, etc.
```

Related exports: `DataLabelPosition`, `TickMarkType`, `ChartFillType`, series format types.

## Remove charts

```ts
sheet.removeChart(chart);
// or sheet.removeChart(0) by zero-based index among sheet charts
```

## Internal charts entry

The package documents a **host-only** path:

`@syncfusion/ej2-xlsx/internal/charts`

That surface (`createOfficeChart`, `parseOfficeChart`, …) is for host integrations. **Do not** teach it in normal application samples. Application authors use **`Worksheet.addChart`** and related public `Chart*` types from `@syncfusion/ej2-xlsx`.

## Gotchas

- Charts store references/formulas as text; values are not calculated by this library.
- Prefer non-deprecated `ChartType` tokens for forward compatibility.
- Anchors and sizes are not pixel CSS units — they are worksheet drawing points.
- Extended layouts (funnel, sunburst, …) need Excel versions that support them.
