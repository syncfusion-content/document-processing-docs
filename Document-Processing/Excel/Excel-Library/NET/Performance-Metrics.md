---
title: Performance Metrics for Syncfusion Excel (XlsIO) Library
description: Benchmark results for the Syncfusion XlsIO library across common read, create, and save operations for Text, DateTime, Number, Boolean, and Formula data types.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics in Excel (XlsIO) Library

This section reports the measured performance of XlsIO for common read, create, and save operations across the Text, DateTime, Number, Boolean, and Formula data types. The numbers below are reference values from a single reference machine and XlsIO version; your results will vary based on hardware, .NET runtime, GC behavior, and input size.

## Methodology

The following table summarizes the benchmark setup used to produce the numbers on this page.

| Item | Value |
|---|---|
| Workbook size | 100,000 rows × 50 columns (5,000,000 cells) |
| File format | XLSX |
| XlsIO version | Latest at time of measurement (see "Last updated" below) |
| Iterations per data type | Median of 5 runs after 1 warm-up run |
| Measurement API | `System.Diagnostics.Stopwatch` around the full operation |
| GC mode | Default workstation GC |

To reproduce these numbers on your machine, clone the [XlsIO examples repository](https://github.com/SyncfusionExamples/XlsIO-Examples), open the sample folder linked from each row below, and run it from the command line or Visual Studio.

## What affects these numbers

- CPU speed, core count, and cache size.
- .NET runtime version and garbage collection mode (workstation vs server).
- Disk I/O speed for the `SaveAs` step.
- XlsIO version (each release typically improves performance).
- Whether `BeginUpdate` / `EndUpdate` is used for style and validation changes.

For tips on improving XlsIO performance, see [Improving Performance](https://help.syncfusion.com/document-processing/excel/excel-library/net/improving-performance).

## Create and save

The following table shows the time required to create and save an XLSX document containing 100,000 rows and 50 columns for each supported data type.

<table> 
  <tr>
    <th>Data type</th>
    <th>Time Taken (sec)</th>
    <th>Sample Link</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>13</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>15</td>  
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>5</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>5</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>35</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>

## Load and read

The following table shows the time required to load and read cell values from an XLSX document containing 100,000 rows and 50 columns for each supported data type.

<table>
  <tr>
    <th>Data type</th>
    <th>Time taken (seconds)</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>9</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/String%20Data%20Type/.NET/String%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>5</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>6</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>4</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>9</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub sample</a></td>
  </tr>
</table>

## See also

- [Improving Performance](https://help.syncfusion.com/document-processing/excel/excel-library/net/improving-performance)
- [Supported features by file format](https://help.syncfusion.com/document-processing/excel/excel-library/net/supported-features-by-file-formats)
- [System requirements](https://help.syncfusion.com/document-processing/excel/excel-library/net/system-requirements)
- [Syncfusion XlsIO overview](https://help.syncfusion.com/document-processing/excel/excel-library/net/overview)            

