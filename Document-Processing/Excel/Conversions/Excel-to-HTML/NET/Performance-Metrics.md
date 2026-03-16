---
title: Performance Metrics for the Syncfusion Excel to HTML conversion
description: This section provides benchmark results and performance metrics for converting Excel files to HTML using the Syncfusion Excel (XlsIO) library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics for Excel to HTML Conversion

The following benchmark demonstrates the performance of the Syncfusion Excel (XlsIO) library when converting a large Excel workbook—containing 100,000 rows and 50 columns with distinct data types such as text, date and time, numbers, booleans, and formulas—into a HTML.

<table>
  <tr>
    <th>Data type</th>
    <th>Time Taken (sec)</th>
    <th>Sample Link</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>19</td>    
	<td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20HTML/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>45</td>
	<td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20HTML/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>22</td>     
	<td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20HTML/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>13</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20HTML/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>25</td>        
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20HTML/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>            

You can find the sample used for Excel to HTML conversion performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Excel%20to%20HTML">this GitHub page</a>.
