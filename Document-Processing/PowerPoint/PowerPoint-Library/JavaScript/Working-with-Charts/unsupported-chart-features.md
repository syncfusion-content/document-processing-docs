---
layout: post
title: Unsupported chart features in JavaScript PowerPoint | Syncfusion
description: Chart topics documented for .NET PowerPoint that are not available in the JavaScript PowerPoint Library.
platform: document-processing
control: PowerPoint
documentation: ug
keywords: javascript, powerpoint, charts
---

# Unsupported chart features

The following .NET PowerPoint Library chart topics must not be added to the JavaScript UG. They were checked against `@syncfusion/ej2-pptx` 35.1.41 (`src/pptx/features/charts`). No public class, method, or option implements them.

## Creating custom charts

.NET documents combination and custom chart construction. JavaScript `addChart` takes one `ClassicChartTypeKey`. There is no API to assign a different chart type per series or to build a user-defined chart definition. Document only the classic type list on the create topic.

## Applying 3D formats

There is no view-3D, rotation, perspective, depth, or bevel API. `Column3D`, `Pie3D`, `Surface3D`, and `Bubble3D` are type keys for `addChart` only. Passing those keys does not expose 3D format properties. This topic exists only in the .NET library.

## Chart to image conversion

The charts module and the package public typings have no chart-to-image or slide render method. This topic exists only in the .NET library (and other platforms that ship a conversion API).

## PowerPoint 2016 charts

`CHART_EX_TYPE_KEYS` is `BoxAndWhisker`, `Funnel`, `Pareto`, `Sunburst`, `TreeMap`, `Waterfall`. `addChart` throws for these keys (`isChartExTypeKey`). Histogram is not in `CLASSIC_CHART_TYPE_KEYS`. Do not add Funnel, Box and Whisker, Waterfall, Histogram, or Pareto pages.

## Partial topics that must stay inside a parent page

Do not promote these to their own .NET-equivalent pages:

- **Refreshing the chart** — `chart.refresh()` only rewrites caches from the embedded sheet. It is not an Excel calc refresh. Keep it as a short section under editing, with the limitation stated.
- **Chart data labels** — series `commitSeriesDataLabels` only. No chart-level data labels.
- **Chart axis** — `primaryCategoryAxis` and `primaryValueAxis` only.
- **Scatter** — supported only as `ScatterMarkers`, `ScatterLine`, `ScatterLineMarkers`, `ScatterSmooth`, `ScatterSmoothMarkers` passed to `addChart`. No separate scatter-creation API.

No documentation placeholders should be published for unsupported topics. Add a page only after a public API ships in `@syncfusion/ej2-pptx/charts`.
