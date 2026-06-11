---
title: Performance Metrics for Syncfusion Excel (XlsIO) Library
description: This section provides benchmark results and insights into the performance capabilities of the Syncfusion Excel (XlsIO) library across various operations.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics in Excel (XlsIO) Library

This section evaluates the performance of the Syncfusion Excel (XlsIO) library when handling text, date and time, number, boolean, and formula data types during operations such as reading and creating Excel documents.

## Create and Save

The table below illustrates the performance of creating and saving an Excel document containing 100,000 rows and 50 columns for different data types.

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

## Load and Read

The table below illustrates the performance of loading and reading cell values from an Excel document with 100,000 rows and 50 columns for different data types.

<table>
  <tr>
    <th>Data type</th>
    <th>Time Taken (sec)</th>
    <th>Sample Link</th>
  </tr>
  <tr>
    <td>Text</td>
    <td>9</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>5</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>6</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>4</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>9</td>        
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>            

