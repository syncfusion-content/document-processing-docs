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
* Syncfusion® Version: [Syncfusion.Pdf.Net.Core 31.2.12](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/31.2.12)

## Create document

The table below illustrates the performance of PDF document creation.

<table>
  <tr>
    <th>Pages</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
  </tr>
  <tr>
    <td>1</td>
    <td>0.17 seconds</td>
  </tr>
  <tr>
    <td>100</td>
    <td>0.79 seconds</td>
  </tr>
    <tr>
    <td>500</td>
    <td>1.16 seconds</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>1.68 seconds</td>
  </tr>
</table>

A complete working sample used for this performance evaluation is available for download on [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Performance%20Metrics/.NET/Document_creation).

## Open and save PDF document

The table below illustrates the performance of open and save operations when working with PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
        <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Open-and-Save-document/Open-and-Save-document/Data/PDF_Succinctly.pdf">PDF_Succinctly.pdf</a></td>
    <td>0.06 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Open-and-Save-document/Open-and-Save-document/Data/JavaScript_Succinctly.pdf">JavaScript_Succinctly.pdf</a></td>
    <td>0.42 seconds</td>
  </tr>
</table>            

A complete working sample used for this performance evaluation is available for download on [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Performance%20Metrics/.NET/Open-and-Save-document).

## Apply Watermark

The table below illustrates the performance of watermark application operations in PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
        <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Apply-watermark/Apply-watermark/Data/PDF_Succinctly.pdf">PDF_Succinctly.pdf</a></td>
    <td>0.15 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Apply-watermark/Apply-watermark/Data/JavaScript_Succinctly.pdf">JavaScript_Succinctly.pdf</a></td>
    <td>0.66 seconds</td>
  </tr>
</table>  

A complete working sample used for this performance evaluation is available for download on [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Performance%20Metrics/.NET/Apply-watermark).

## Merge PDF document

The table below illustrates the performance of merge operations on PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
        <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Merge-Documents/Merge-Documents/Data/PDF_Succinctly.pdf">PDF_Succinctly.pdf</a></td>
    <td>0.96 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Merge-Documents/Merge-Documents/Data/JavaScript_Succinctly.pdf">JavaScript_Succinctly.pdf</a></td>
    <td>0.96 seconds</td>
  </tr>
</table>

A complete working sample used for this performance evaluation is available for download on [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Performance%20Metrics/.NET/Merge-Documents).

## Split PDF document

The table below illustrates the performance of split operations on PDF documents.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
    <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Split-PDF/Split-PDF/Data/PDF_Succinctly.pdf">PDF_Succinctly.pdf</a></td>
    <td>0.52 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Split-PDF/Split-PDF/Data/JavaScript_Succinctly.pdf">JavaScript_Succinctly.pdf</a></td>
    <td>1.37 seconds</td>
  </tr>
</table>

A complete working sample used for this performance evaluation is available for download on [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Performance%20Metrics/.NET/Split-PDF).

## Compress PDF

The table below shows the performance of compression operations applied to PDF documents. To compress an existing PDF document in .NET Core, you should add the [Syncfusion.Pdf.Imaging.Net.Core](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core/31.2.12) package.

<table>
  <tr>
    <th>Pages</th>
    <th>Input PDF files</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
  </tr>
  <tr>
    <td>64</td>
        <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Compress-pdf/Compress-pdf/Data/PDF_Succinctly.pdf">PDF_Succinctly.pdf</a></td>
    <td>12.28 seconds</td>    
  </tr>
  <tr>
    <td>132</td>
    <td><a href="https://github.com/SyncfusionExamples/PDF-Examples/blob/master/Performance%20Metrics/.NET/Compress-pdf/Compress-pdf/Data/JavaScript_Succinctly.pdf">JavaScript_Succinctly.pdf</a></td>
    <td>8.39 seconds</td>
  </tr>
</table>

A complete working sample used for this performance evaluation is available for download on [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Performance%20Metrics/.NET/Compress-pdf).

N> Compression efficiency varies based on the type of content in the input PDF document.
N> Benchmarks were measured on a freshly configured system. Performance results such as speed and memory usage may differ when additional processes are running on the machine.