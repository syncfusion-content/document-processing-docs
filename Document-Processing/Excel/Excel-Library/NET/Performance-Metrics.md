---
title: Performance Metrics of the Syncfusion Excel (XlsIO) Library
description: This section provides an overview of the performance capabilities of the Syncfusion Excel (XlsIO) Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Performance Metrics in Excel (XlsIO) Library

This section evaluates the performance of the Syncfusion XlsIO library when handling String, DateTime, Number, Boolean, and Formula data types during operations such as opening, reading, creating, and saving Excel files. It provides insights into the efficiency and capabilities of XlsIO for processing these data types across various platforms.

## Open and Read

The table below illustrates the performance of data types for open operations.

<table>
  <tr>
    <th>Data types</th>
    <th>Test case Matrix (Open)</th>
    <th>XlsIO (ms)</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>String</td>
    <td>150 rows * 10000 columns</td>
    <td>2213</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>150 rows * 10000 columns</td>
    <td>1369</td>
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>150 rows * 10000 columns</td>
    <td>1151</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>150 rows * 10000 columns</td>
    <td>1173</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>150 rows * 10000 columns</td>
    <td>1545</td>        
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>            

You can find the sample used for open operation performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Open">this GitHub page</a>.

The table below illustrates the performance of data types for read operations.

<table>
  <tr>
    <th>Data types</th>
    <th>Test case Matrix (Read)</th>
    <th>XlsIO (ms)</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>String</td>
    <td>150 rows * 10000 columns</td>
    <td>139</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Read/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>150 rows * 10000 columns</td>
    <td>506</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Read/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>150 rows * 10000 columns</td>
    <td>294</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Read/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>150 rows * 10000 columns</td>
    <td>99</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Read/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>150 rows * 10000 columns</td>
    <td>165</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Read/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>
           
You can find the sample used for read operation performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Read">this GitHub page</a>.

## Create and Save

The table below illustrates the performance of data types for create operations.

<table>
  <tr>
    <th>Data types</th>
    <th>Test case Matrix (Create)</th>
    <th>XlsIO (ms)</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>String</td>
    <td>150 rows * 10000 columns</td>
    <td>1177</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>150 rows * 10000 columns</td>
    <td>2301</td>  
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>150 rows * 10000 columns</td>
    <td>436</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>150 rows * 10000 columns</td>
    <td>422</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>150 rows * 10000 columns</td>
    <td>4089</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>
                
You can find the sample used for create operation performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Create">this GitHub page</a>.

The table below illustrates the performance of data types for save operations.

<table>
  <tr>
    <th>Data types</th>
    <th>Test case Matrix (Save)</th>
    <th>XlsIO (ms)</th>
    <th>Sample</th>
  </tr>
  <tr>
    <td>String</td>
    <td>150 rows * 10000 columns</td>
    <td>1422</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Save/String%20Data%20Type/.NET/String%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>DateTime</td>
    <td>150 rows * 10000 columns</td>
    <td>1270</td>   
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Save/DateTime%20Data%20Type/.NET/DateTime%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Number</td>
    <td>150 rows * 10000 columns</td>
    <td>916</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Save/Number%20Data%20Type/.NET/Number%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>150 rows * 10000 columns</td>
    <td>781</td>     
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Save/Boolean%20Data%20Type/.NET/Boolean%20Data%20Type">GitHub page</a></td>
  </tr>
  <tr>
    <td>Formula</td>
    <td>150 rows * 10000 columns</td>
    <td>1222</td>    
    <td><a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Save/Formula%20Data%20Type/.NET/Formula%20Data%20Type">GitHub page</a></td>
  </tr>
</table>
                
You can find the sample used for save operation performance evaluation on <a href="https://github.com/SyncfusionExamples/XlsIO-Examples/tree/master/Performance%20Metrics/Save">this GitHub page</a>.