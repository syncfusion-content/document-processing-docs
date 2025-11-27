---
title: Performance Metrics of the Syncfusion Excel (XlsIO) Library
description: This section provides an overview of the performance capabilities of the Syncfusion Excel (XlsIO) Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics in Excel (XlsIO) Library

This section evaluates the performance of the Syncfusion XlsIO library in handling String, DateTime, Number, Boolean, and Formula data types during Excel to PDF conversion, providing insights into its efficiency and capabilities across various platforms.

## Excel to PDF

The table below illustrates the performance of data types for Excel to PDF conversion.

<table>
  <tr>
    <th>Data types</th>
    <th>Test case Matrix</th>
    <th>XlsIO (ms)</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>String</td>
    <td>150 rows * 10000 columns</td>
    <td>91631</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>150 rows * 10000 columns</td>
    <td>49827</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>  
    <td>150 rows * 10000 columns</td>
    <td>43515</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>  
    <td>150 rows * 10000 columns</td>
    <td>77212</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td> 
    <td>150 rows * 10000 columns</td>
    <td>33905</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>
                
You can find the sample used for Excel to PDF conversion performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF">this GitHub page</a>.