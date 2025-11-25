---
title: HTML to PDF Performance Benchmarks
description: This section provides an overview of the performance capabilities of the HTML to PDF Library.
platform: document-processing
control: PDF
documentation: UG
---

# HTML to PDF Performance Benchmarks

The Syncfusion<sup>&reg;</sup> [HTML to PDF library](https://www.syncfusion.com/document-sdk/net-pdf-library/html-to-pdf) delivers high-performance APIs to convert web content into PDF documents programmatically. This performance benchmark report highlights the speed and efficiency of HTML-to-PDF conversion, showcasing how the library manages large-scale document rendering in real-world scenarios.

## Environment Details

The following system configurations were used for benchmarking:

OS Edition      : Windows 11 Enterprise
Version         : 22H2
Processor       : 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz   2.42 GHz
Installed RAM   : 20.0 GB (19.7 GB usable)
System type     : 64-bit operating system, x64-based processor

## Example Application

The benchmark details were obtained using the [Syncfusion.HtmlToPdfConverter.Net.Windows](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows) package. You can refer to the following sample, as well as the input and output files used:

Input HTML files         : [Input HTML files](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Performance_Testing/Syncfusion_HTMLtoPDF/wwwroot/Data)

Output PDF files        : [Output document](https://www.syncfusion.com/downloads/support/directtrac/general/ze/Output-924807763.zip)

## Results

<table border="1">
<th style="font-size:14px" width="100px">Input Page count</th>
<th style="font-size:14px">Conversion time

(Avg value of 5 conversions)
</th>
<th style="font-size:14px">Process Memory and CPU usage
</th>
<tr>
    <td>10+ Pages</td>
    <td>2.78 seconds</td>
    <td>	
Memory usage: 318 MB

CPU usage: 10%</td>
</tr>
<tr>
    <td>100+ pages</td>
    <td>3.65 seconds</td>
    <td>Memory usage: 367 MB

CPU usage: 14%</td>
</tr>
<tr>
    <td>1000+ pages</td>
    <td>6.72 seconds</td>
    <td>Memory usage: 813 MB

CPU usage: 27%</td>
</tr>
<tr>
    <td>10 documents with 100+ pages in a loop</td>
    <td>30.52 seconds</td>
    <td>	
Memory usage: 663 MB

CPU usage: 15%</td>
</tr>
<tr>
    <td>10 documents with 1000+ pages in a loop</td>
    <td>1 minute 10 seconds</td>
    <td>	
Memory usage: 2.2 GB

CPU usage: 64%</td>
</tr>
</table>

N> The performance metrics were recorded on a freshly configured machine. Speed and memory usage may vary if the machine is running other processes. Additionally, performance can be affected by:
N> * External resources loaded in the HTML (such as images, scripts, and styles)
N> * Network speed for online URL conversions
N> * Hardware resources (CPU and memory)

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/html-to-pdf-csharp-examples/tree/master/Performance_Testing/Syncfusion_HTMLtoPDF).