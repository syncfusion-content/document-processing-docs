---
title: Memory (RAM) Usage Metrics for Syncfusion Excel (XlsIO) Library
description: Peak memory usage of Syncfusion XlsIO during Create and Save and Load and Read of Text, DateTime, Number, Boolean, and Formula data.
platform: document-processing
control: XlsIO
documentation: UG
---

# Memory usage metrics in Excel (XlsIO) library

This section reports the peak memory usage of XlsIO for the `Text`, `DateTime`, `Number`, `Boolean`, and `Formula` data types during Create and save and Load and read operations. Peak memory is the maximum value observed during a single run; the values below are reference points from a single machine and XlsIO version, and your results will vary based on hardware, .NET runtime, and the GC mode.

## Methodology

The following table summarizes the benchmark setup used to produce the numbers on this page.

| Item | Value |
|---|---|
| Workbook size | 100,000 rows × 50 columns (5,000,000 cells) |
| File format | XLSX |
| XlsIO version | Latest at time of measurement (see "Last updated" below) |
| Iterations per data type | Worst of 5 runs after 1 warm-up run |
| Memory metric | Managed heap + native buffers reported by the XlsIO samples |
| GC mode | Default workstation GC |
| Disposal | `ExcelEngine` and `IWorkbook` are disposed after each run |

To reproduce these numbers on your machine, clone the [XlsIO examples repository](https://github.com/SyncfusionExamples/XlsIO-Examples), open the sample folder linked from each row below, and run it from the command line or Visual Studio.

## Test environment

| Item | Value |
|---|---|
| OS | Windows 11 (64-bit) |
| Processor | AMD Ryzen 5 7520U with Radeon Graphics, 2.80 GHz |
| Installed RAM | 16 GB (15.3 GB usable) |
| System type | 64-bit OS, x64 processor |

## Create and save

The following table shows the peak memory usage when creating and saving an XLSX document containing 100,000 rows and 50 columns for each supported data type.

<table> 
  <tr>
    <th>Data type</th>
    <th>Peak memory</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>1.1 GB</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/String%20Data%20Type/.NET/String%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>361 MB</td>  
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>342 MB</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>342 MB</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>848 MB</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub sample</a></td>
  </tr>
</table>

## Load and read

The following table shows the peak memory usage when loading and reading cell values from an XLSX document containing 100,000 rows and 50 columns for each supported data type.

<table>
  <tr>
    <th>Data type</th>
    <th>Peak memory</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>945 MB</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/String%20Data%20Type/.NET/String%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>289 MB</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>290 MB</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>185 MB</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub sample</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>520 MB</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub sample</a></td>
  </tr>
</table>