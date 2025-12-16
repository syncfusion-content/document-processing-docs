---
title: Memory (RAM) Usage Metrics for Syncfusion Excel (XlsIO) Library
description: This section provides benchmark results showing the peak RAM usage of the Syncfusion Excel (XlsIO) library across various operations.
platform: document-processing
control: XlsIO
documentation: UG
---

# Memory Usage Metrics in Excel (XlsIO) Library

This section reports the peak memory usage (RAM) observed when handling text, date and time, number, boolean, and formula data types during Create & Save and Load & Read operations.

## Test Environment

* **OS:** Windows 11
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics (2.80 GHz)
* **Installed RAM:** 16 GB (15.3 GB usable)
* **System type:** 64-bit OS, x64 processor

## Create and Save

The table below shows the peak memory usage (RAM) while creating and saving an Excel document containing 100,000 rows and 50 columns for different data types.

<table> 
  <tr>
    <th>Data type</th>
    <th>Peak memory usage (RAM)</th>
    <th>Sample link</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>1.1 GB</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>361 MB</td>  
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>342 MB</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>342 MB</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>848 MB</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>

## Load and Read

The table below shows the peak memory usage (RAM) while loading and reading cell values from an Excel document with 100,000 rows and 50 columns for different data types.

<table>
  <tr>
    <th>Data type</th>
    <th>Peak memory usage (RAM)</th>
    <th>Sample link</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>945 MB</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>289 MB</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>290 MB</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>185 MB</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>520 MB</td>        
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>