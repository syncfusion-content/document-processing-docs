---
layout: post
title: Performance Metrics in EJ2 TypeScript Spreadsheet Control | Syncfusion
description: Learn here all about performance metrics in EJ2 TypeScript Spreadsheet control, its elements and more.
platform: document-processing
control: Performance 
documentation: ug
---

# Performance Metrics in EJ2 TypeScript Spreadsheet Control

Performance metrics show how efficiently the [Syncfusion® TypeScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) handles large datasets and core operations such as rendering, styling, validation, and file import/export. This documentation provides the measured results for these operations to give a clear view of how the control performs under different workloads.


## Environment

The following environment configuration is used for performance evaluation:

* **Browser**: Edge (latest)
* **Hardware**: Modern multi‑core processor
* **RAM**: 16 GB or higher
* **Spreadsheet Version**: 
  * [NPM Version](https://www.npmjs.com/package/@syncfusion/ej2-spreadsheet/v/32.2.4)  
  * [NuGet Version](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core/32.2.4)  
* **Data Source Format**: Mixed data types (numbers, text, formats, validations)


## Spreadsheet Features

This section outlines the operations evaluated in the Spreadsheet when working with large datasets. It covers actions such as rendering cells, applying styles, number formats and data validations to help understand how the control processes common spreadsheet tasks.

| Operation                   | Dataset Size | Time (sec) |
|-----------------------------|--------------|-------------|
| Initial Rendering           | 250k cells   | 3.30 sec    |
| Applying Styles             | 250k cells   | 0.61 sec    |
| Applying Number Formats     | 250k cells   | 0.97 sec    |
| Applying Data Validation    | 250k cells   | 0.94 sec    |


## Import and export performance metrics

This section focuses on evaluating how the Spreadsheet handles file import and export operations involving large datasets with formatting and validation. It provides insight into how efficiently these operations are processed under varying data conditions.

| Operation                               | Dataset Size                     | Time (sec) |
|-----------------------------------------|-----------------------------------|------------|
| Importing                               | 250k cells with formats           | 3.12 sec   |
| Importing                               | 500k cells with validation        | 5.04 sec   |
| Exporting                               | 250k cells with formats           | 2.72 sec   |
| Exporting                               | 500k cells with validation        | 6.58 sec   |

> **Disclaimer:**  Performance metrics and memory benchmarking are based on internal tests under specific conditions. Actual results may vary depending on the environment and usage. 

## See Also

* [Open and Save](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/open-save)
* [Peformance Best Practices](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/performance-best-practices)
* [Docker Deployment](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/docker-deployment)
* [Scrolling](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/scrolling)