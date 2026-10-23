---
layout: post
title: Chart feature support analysis for JavaScript PowerPoint | Syncfusion
description: Feature matrix mapping .NET PowerPoint chart topics to the Syncfusion JavaScript PowerPoint Library chart APIs.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Chart feature support analysis (JavaScript PowerPoint)

Validated against `@syncfusion/ej2-pptx` **35.1.41**, module `@syncfusion/ej2-pptx/charts` (published package `src/pptx/features/charts`). The private source repository `essential-studio/ej2-powerpoint-library` was not reachable from this environment (no Gitea credentials). Do not treat the .NET UG as evidence of JavaScript support.

Charts are a side-effect feature. Importing the module registers `slide.charts`, `slide.addChart`, and `slide.removeChart`. The xlsx engine must be warm before reads: `await loadXlsxRoot()` (exported from the charts module) or `ensureFeature(CHARTS_FEATURE_ID)`.

```ts
import '@syncfusion/ej2-pptx/charts';
import { Presentation, SlideLayoutType } from '@syncfusion/ej2-pptx';
import { addChart, loadXlsxRoot, CLASSIC_CHART_TYPE_KEYS } from '@syncfusion/ej2-pptx/charts';
```

## Feature matrix

| Topic | Support | Relevant API(s) | Remarks |
| --- | --- | --- | --- |
| Creating a chart from scratch | Supported | `slide.addChart(options)` / `addChart(slide, options)`, `AddChartOptions.type`, `bounds`, `name` | Omitting `from` uses the scratch demo seed (categories + one series). Type must be a `ClassicChartTypeKey`. Async because workbook save is a Promise. Default bounds `DEFAULT_CHART_BOUNDS` (288×216 pt). Default name `DEFAULT_CHART_NAME`. |
| Creating charts from Excel sheet | Supported (subset) | `AddChartOptions.from`: `{ bytes, sheet?, range? }` or `{ workbook, sheet?, range? }`, `DEFAULT_FROM_EXCEL_RANGE` | Embedding is a **new minimal xlsx** of the data-range cells plus a series header, not a byte copy of the consumer workbook. Formulas are not evaluated; cell **values** are copied. No URL field. Single A1 area, no `sheet!` prefix on `range`. |
| Creating custom charts | Not supported | — | No custom-chart / combination-chart / user-defined series-type authoring API. `addChart` accepts one classic catalog key only. |
| Refreshing the chart | Partial | `chart.refresh()` | Re-opens the embedded package, rebuilds the host chart from formulas + sheet cells, rewrites chart XML. **Not** Excel calculation, trendlines, OLE, or external workbook fetch. Throws when the embedding is missing or the data source is external-only. |
| Editing the chart data | Supported (subset) | `dataRange` / `applyDataRange`, `isSeriesInRows` / `applyIsSeriesInRows`, `series`, `addSeries`, `removeSeries`, `replaceSeriesFormulas`, `setSeriesValueCells`, `setSeriesCategoryCells`, `readSeriesValueCells`, `commitSeriesEdits` | Dual-write updates `c:f` and embedding cells, then fills `numCache`/`strCache` from those cells only. Requires an embedded package. Setters are fire-and-forget; prefer the `apply*` / `commit*` promises. |
| Chart Title | Supported (subset) | `hasTitle` / `applyHasTitle`, `chartTitle` / `applyChartTitle`, `chartTitleArea`, `commitTitleArea`, `ChartTitleAreaFormat` | No `setTitle` verb. Color is RRGGBB / `#RRGGBB` only (theme/scheme objects rejected). Nested `chartTitleArea` edits flush only via `commitTitleArea` (or another dual-write). |
| Chart Area | Supported (subset) | `chartArea`, `commitChartArea`, `ChartFrameFillFormat`, `ChartFrameLineFormat` | Fill type + `foreColor` + `transparency`; line `color` + `weightPt`. No gradient, picture, or pattern fill. |
| Chart Plot Area | Supported (subset) | `plotArea`, `commitPlotArea` | Same fill/line bag as chart area. |
| Chart Series | Supported (subset) | `series`, `addSeries`, `removeSeries`, `commitSeriesFormat`, `replaceSeriesFormulas`, `ChartSeriesView.serieFormat` | Series name is a formula or literal string, not a rich text body. No trendlines, error bars, explosion, marker-only styling, or per-point formatting. |
| Chart Legend | Supported (subset) | `hasLegend` / `applyHasLegend`, `legend`, `commitLegend`, `ChartLegendFormat` | Position: `bottom` \| `top` \| `left` \| `right` \| `corner`. Text area + frame fill/line. No manual layout, overlay flag, or per-entry delete. |
| Chart Data Labels | Partial | `commitSeriesDataLabels`, `ChartSeriesDataLabels` | Series-level only (`isValue`, `isCategoryName`, `isSeriesName`, `isPercentage`, `position`, `textArea`). No chart-level `c:dLbls` bag, no per-point labels, no number format on labels. |
| Chart Axis | Partial | `primaryCategoryAxis`, `primaryValueAxis`, `commitPrimaryCategoryAxis`, `commitPrimaryValueAxis`, `ChartAxisFormat` | Primary category (`c:catAx`) and value (`c:valAx`) only. Title, visible, major/minor gridlines, min/max, tick marks (`none` \| `inside` \| `outside` \| `cross`), line, number format string, title area. Secondary, date, and series axes are not modelled. |
| Applying 3D formats | Not supported | — | No `view3D`, rotation, depth, or bevel API. Catalog keys such as `Column3D`, `Pie3D`, `Surface3D`, `Bubble3D` can be passed to `addChart`, but that only selects a chart type. Do not document this as “Applying 3D Formats”. |
| Chart to image conversion | Not supported | — | No chart-to-image, slide-to-image, or rendering API in the charts module or the package public surface searched. |
| Removing the chart from slide | Supported | `slide.removeChart(chart)` / `removeChart(slide, chart)` | Removes the graphic frame and garbage-collects unshared chart package parts. Pass the `Chart` handle, not an index. |
| Creating a scatter chart (.NET extra topic) | Supported as a type key only | `addChart({ type: 'ScatterMarkers' \| 'ScatterLine' \| 'ScatterLineMarkers' \| 'ScatterSmooth' \| 'ScatterSmoothMarkers' })` | No dedicated scatter API (XY pairs, bubble size, smooth flag). Same scratch/from-excel path as other classic types. |
| PowerPoint 2016 charts (Funnel, Box and Whisker, Waterfall, Histogram, Pareto) | Not supported | `isChartExTypeKey`, `CHART_EX_TYPE_KEYS` | `BoxAndWhisker`, `Funnel`, `Pareto`, `Sunburst`, `TreeMap`, `Waterfall` are refused by `addChart`. Histogram is not in the classic catalog. |

## Classic type keys that `addChart` accepts

`CLASSIC_CHART_TYPE_KEYS`: ColumnClustered, ColumnStacked, ColumnPercentStacked, BarClustered, BarStacked, BarPercentStacked, Line, LineStacked, LinePercentStacked, LineMarkers, LineStackedMarkers, LinePercentStackedMarkers, Pie, PieExploded, PieOfPie, BarOfPie, Doughnut, DoughnutExploded, ScatterMarkers, ScatterLine, ScatterLineMarkers, ScatterSmooth, ScatterSmoothMarkers, Bubble, Bubble3D, Area, AreaStacked, AreaPercentStacked, Column3D, ColumnClustered3D, ColumnStacked3D, ColumnPercentStacked3D, BarClustered3D, BarStacked3D, BarPercentStacked3D, Line3D, Pie3D, PieExploded3D, Area3D, AreaStacked3D, AreaPercentStacked3D, Surface3D.

Aliases still accepted by `isClassicChartType` but omitted from the primary catalog: `Column`, `Bar`, `Scatter`, `Bar3D`. Unknown strings and ChartEx keys throw.

## Implementation gaps (do not document as supported)

- Custom / combination charts.
- ChartEx and Histogram.
- 3D scene formatting (rotation, perspective, depth, bevel) even when a `*3D` type key is used.
- Chart or slide rasterization / chart-to-image.
- Full Excel calc on `refresh()`; external-only data sources.
- Byte-identical embedding of a consumer workbook; formula evaluation at add time; remote workbook URLs.
- Theme/scheme colors on title, legend, axis, fill, and line (RRGGBB only).
- Secondary, date, and series axes.
- Chart-level data labels and per-point data labels.
- Gradient, picture, and pattern fills; trendlines; error bars; per-point series formatting.
- Manual legend layout.

These exist in the .NET PowerPoint Library UG and should stay .NET-only until a public EJ2 API ships. No placeholder UG pages.
