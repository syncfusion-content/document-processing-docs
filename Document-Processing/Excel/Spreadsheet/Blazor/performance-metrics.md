---
layout: post
title: Performance Metrics in Blazor Spreadsheet Component | Syncfusion
description: Learn about performance metrics in the Blazor Spreadsheet component, including rendering, styling, and file import/export.
platform: document-processing
control: Spreadsheet
documentation: ug
---

# Performance Metrics in Blazor Spreadsheet Component

Performance metrics show how efficiently the [Blazor Spreadsheet Editor](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) handles large datasets and core operations such as rendering, styling, number formats, and file import/export. This documentation provides the measured results for these operations to give a clear view of how the component performs under different workloads.

## Environment

The following environment configuration is used for performance evaluation:

* **Browser**: Edge (latest)
* **Hardware**: Modern multi‑core processor
* **RAM**: 16 GB or higher
* **Spreadsheet Version**: 
  * [Theme Version](https://www.nuget.org/packages/Syncfusion.Blazor.themes)  
  * [NuGet Version](https://www.nuget.org/packages/Syncfusion.Blazor.Spreadsheet)  
* **Data Source Format**: Mixed data types (numbers, text, number formats)



## Spreadsheet Features

This section outlines the operations evaluated in the Spreadsheet when working with large datasets. It covers actions such as rendering cells, applying styles, applying number formats, and file import/export to help understand how the component processes common spreadsheet tasks.

### Blazor Server

| Operation | Dataset Size | Time (sec) |
|--|--|--|
| Initial Rendering | 250K cells | 1.31 |
| Applying Styles | 250K cells | 12.0 |
| Applying Number Formats | 250K cells | 0.97 |

### Blazor WebAssembly (Wasm)

| Operation | Dataset Size | Time (sec) |
|--|--|--|
| Initial Rendering | 250K cells | 6.99 |
| Applying Styles | 250K cells | 15.98 |
| Applying Number Formats | 250K cells | 9.45 |

## Import and Export Performance Metrics

This section focuses on evaluating how the Spreadsheet handles file import and export operations involving large datasets with formatting and validation. It provides insight into how efficiently these operations are processed under varying data conditions.

### Blazor Server

| Operation | Dataset Size | Time (sec) |
|--|--|--|--|
| Importing | 250K cells without formats | 2.35 |
| Importing | 250K cells with formats | 3.12 |
| Exporting | 250K cells without formats | 1.07 |
| Exporting | 250K cells with formats | 1.26 | 

### Blazor WebAssembly (Wasm)

| Operation | Dataset Size | Time (sec) |
|--|--|--|--|
| Importing | 250K cells without formats | 38 |
| Importing | 250K cells with formats | 50 |
| Exporting | 250K cells without formats | 6.25 |
| Exporting | 250K cells with formats | 8.14 |

N> **Disclaimer:**  Performance metrics and memory benchmarking are based on internal tests under specific conditions. Actual results may vary depending on the environment and usage. 

## See Also

* [Open and Save](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/open-and-save)
