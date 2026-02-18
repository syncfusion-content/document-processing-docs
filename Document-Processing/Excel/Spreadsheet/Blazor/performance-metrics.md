---
layout: post
title: Performance Metrics in Blazor Spreadsheet Control | Syncfusion
description: Learn here all about performance metrics in blazor Spreadsheet control, its elements and more.
platform: document-processing
control: Performance 
documentation: ug
---

# Performance Metrics in blazor Spreadsheet Control

Performance metrics show how efficiently the [Syncfusion® blazor Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/blazor-spreadsheet-editor) handles large datasets and core operations such as rendering, styling, number Formats and file import/export. This documentation provides the measured results for these operations to give a clear view of how the control performs under different workloads.


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

This section outlines the operations evaluated in the Spreadsheet when working with large datasets. It covers actions such as rendering cells, applying styles, number formats and file import/export to help understand how the control processes common spreadsheet tasks.

### Server 

| Operation                   | Dataset Size | Time (sec) |
|-----------------------------|--------------|-------------|
| Initial Rendering           | 250k cells   | 1.31 sec    |
| Applying Styles             | 250k cells   | 12.0 sec    |
| Applying Number Formats     | 250k cells   | 0.97 sec    |


### Wasm

| Operation                   | Dataset Size | Time (sec) |
|-----------------------------|--------------|-------------|
| Initial Rendering           | 250k cells   | 1.31 sec    |
| Applying Styles             | 250k cells   | 12.0 sec    |
| Applying Number Formats     | 250k cells   | 0.97 sec    |


## Import and export performance metrics

This section focuses on evaluating how the Spreadsheet handles file import and export operations involving large datasets with formatting and validation. It provides insight into how efficiently these operations are processed under varying data conditions.

### Server 

| Operation                               | Dataset Size                     | Time (sec) |
|-----------------------------------------|-----------------------------------|------------|
| Importing                               | 250k cells with formats           | 3.12 sec   |
| Importing                               | 500k cells with validation        | 5.04 sec   |
| Exporting                               | 250k cells with formats           | 1.26 sec   |
| Exporting                               | 500k cells with validation        | 1.57 sec   |

### Wasm


| Operation                               | Dataset Size                     | Time (sec) |
|-----------------------------------------|-----------------------------------|------------|
| Importing                               | 250k cells with formats           | 3.12 sec   |
| Importing                               | 500k cells with validation        | 5.04 sec   |
| Exporting                               | 250k cells with formats           | 1.26 sec   |
| Exporting                               | 500k cells with validation        | 1.57 sec   |

> **Disclaimer:**  Performance metrics and memory benchmarking are based on internal tests under specific conditions. Actual results may vary depending on the environment and usage. 
## See Also

* [Open and Save](https://help.syncfusion.com/document-processing/excel/spreadsheet/blazor/open-and-save)
