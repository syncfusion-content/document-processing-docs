---
title: Performance Metrics of the Syncfusion PDF Library
description: This section provides a detailed overview of the performance metrics and capabilities of the PDF processing library.
platform: document-processing
control: PDF
documentation: UG
---

# Performance Metrics in PDF Library

The Syncfusion<sup>&reg;</sup> [.NET PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library) provides high-performance APIs to create, read, edit, and secure PDF documents programmatically. This performance benchmark report highlights the speed and efficiency of key operations, demonstrating how PDF library handles large-scale document processing in real-world scenarios.

## Environment Details

The following system configurations were used for benchmarking:

* Operating System: Windows 10
* Processor: AMD Ryzen 7 5800HS with Radeon Graphics 3.20 GHz
* RAM: 16GB
* .NET Version: .NET 10.0
* Syncfusion® Version: [Syncfusion.Pdf.Imaging.Net.Core 31.2.12](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core/31.2.12)

## Open and save PDF document

The table below illustrates the performance of open and save operations when working with PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
    <td>PDF_Succinctly</td>
    <td>0.06 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td>JavaScript_Succinctly</td>
    <td>0.42 seconds</td>
  </tr>
</table>            

## Apply Watermark

The table below illustrates the performance of watermark application operations in PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
    <td>PDF_Succinctly</td>
    <td>0.15 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td>JavaScript_Succinctly</td>
    <td>0.66 seconds</td>
  </tr>
</table>  

## Compress PDF

The table below illustrates the performance of compression operations applied to PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
    <td>PDF_Succinctly</td>
    <td>12.28 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td>JavaScript_Succinctly</td>
    <td>8.39 seconds</td>
  </tr>
</table>

N> Compression efficiency varies based on the type of content in the input PDF document.

## Split PDF document

The table below illustrates the performance of split operations on PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
    <td>PDF_Succinctly</td>
    <td>0.52 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td>JavaScript_Succinctly</td>
    <td>1.37 seconds</td>
  </tr>
</table>

## Merge PDF document

The table below illustrates the performance of merge operations on PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
    <td>PDF_Succinctly</td>
    <td>0.96 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td>JavaScript_Succinctly</td>
    <td>0.96 seconds</td>
  </tr>
</table>

N> Benchmarks were measured on a freshly configured system. Performance results such as speed and memory usage may differ when additional processes are running on the machine.