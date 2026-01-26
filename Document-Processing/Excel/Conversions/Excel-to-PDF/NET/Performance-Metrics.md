---
title: Performance Metrics for the Syncfusion Excel to PDF conversion
description: This section provides benchmark results and performance metrics for converting Excel files to PDF using the Syncfusion Excel (XlsIO) library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics for Excel to PDF Conversion

The following benchmark demonstrates the performance of the Syncfusion Excel (XlsIO) library when converting a large Excel workbook—containing 100,000 rows and 50 columns with distinct data types such as text, date and time, numbers, booleans, and formulas—into a PDF.

<table>
  <tr>
    <th>Data type</th>
    <th>Time Taken (sec)</th>
    <th>Sample Link</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>121</td>    
	<td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>112</td>
	<td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>107</td>     
	<td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>83</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>104</td>        
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>            

You can find the sample used for Excel to PDF conversion performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20PDF">this GitHub page</a>.
