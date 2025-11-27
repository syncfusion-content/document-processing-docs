---
title: Performance Metrics of the Syncfusion Excel (XlsIO) Library
description: This section provides an overview of the performance capabilities of the Syncfusion Excel (XlsIO) Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics in Excel (XlsIO) Library

This section evaluates the performance of the Syncfusion XlsIO library when handling string, DateTime, number, Boolean, and formula data types during operations such as opening and reading, creating, and saving Excel files with 100,000 rows and 50 columns.. It provides insights into the efficiency and capabilities of XlsIO for processing these data types across various platforms.

## Open and Read

The table below illustrates the performance of data types for open and read operations.

<table>
  <tr>
    <th>Data type</th>
    <th>Time Taken (sec)</th>
    <th>Sample Link</th>
  </tr>
  <tr>
    <td>String</td>
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

You can find the sample used for open and read operation performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open">this GitHub page</a>.

## Create and Save

The table below illustrates the performance of data types for create and save operations.

<table> 
  <tr>
    <th>Data type</th>
    <th>Time Taken (sec)</th>
    <th>Sample Link</th>
  </tr>
  <tr>
    <td>String</td>
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
                
You can find the sample used for create and save operation performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create">this GitHub page</a>.