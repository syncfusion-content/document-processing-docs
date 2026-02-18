---
layout: post
title: Performance Metrics in EJ2 TypeScript Spreadsheet Control | Syncfusion
description: Learn about performance metrics for the EJ2 TypeScript Spreadsheet control, measured results, and environment details.
platform: document-processing
control: Performance 
documentation: ug
---

# Performance Metrics in EJ2 TypeScript Spreadsheet Control

This document presents measured performance results for the [Syncfusion® TypeScript Spreadsheet](https://www.syncfusion.com/spreadsheet-editor-sdk/javascript-spreadsheet-editor) when working with large datasets and common operations such as styling, number formats, validation, and file import/export.

## Environment

The following configuration was used for the performance evaluations:

* **Browser**: Microsoft Edge (latest stable)
* **Hardware**: Modern multi‑core processor
* **RAM**: 16 GB or higher
* **Spreadsheet Version**:
  * [NPM Version](https://www.npmjs.com/package/@syncfusion/ej2-spreadsheet/v/32.2.4)  
  * [NuGet Version](https://www.nuget.org/packages/Syncfusion.EJ2.Spreadsheet.AspNet.Core/32.2.4)  
* **Data Source**: Mixed data types (numbers, text, formats, validations)

## Evaluated Features

The following operations were measured to evaluate the Spreadsheet's performance with large datasets: applying styles, number formatting, and data validation.

| Dataset Size | Styles     | Number Format     | Data Validation     |
|--------------|------------|-------------------|---------------------|
| 100k cells   | 0.72s      | 0.86s             | 0.82s               |
| 250k cells   | 1.51s      | 1.81s             | 2.11s               |
| 500k cells   | 3.00s      | 3.69s             | 3.95s               |

## Import and Export Performance

Measured import and export times for datasets with formatting, validation, sorting, and filtering.

| Dataset Description                         | Import     | Export     |
|---------------------------------------------|------------|------------|
| 100k cells with formats                     | 3.85s      | 4.38s      |
| 250k cells with formats                     | 3.96s      | 6.61s      |
| 100k cells with validation                  | 2.06s      | 2.25s      |
| 250k cells with validation                  | 3.77s      | 24.04s     |
| 500k cells with validation                  | 4.16s      | 24.05s     |
| 100k cells with sorting and filtering       | 3.68s      | 2.31s      |
| 250k cells with sorting and filtering       | 5.73s      | 5.60s      |
| 500k cells with sorting and filtering       | 8.59s      | 13.29s     |

> Disclaimer: These metrics and memory measurements were obtained from internal tests under specific conditions. Actual results may vary depending on environment, data characteristics, and usage patterns.

You can download the Excel files used for these measurements here.

## See Also

* [Open and Save](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/open-save)
* [Performance Best Practices](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/performance-best-practices)
* [Docker Deployment](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/docker-deployment)
* [Scrolling](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/scrolling)