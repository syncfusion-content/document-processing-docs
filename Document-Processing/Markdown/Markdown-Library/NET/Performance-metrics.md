---
title: Markdown library Performance benchmark results | Syncfusion
description: Know about the performance benchmark results of the Markdown library with different document sizes
platform: document-processing
control: Markdown
documentation: UG
---

# Performance Metrics in Markdown Library

Syncfusion® Markdown Document Processing library is a .NET class library used to create, read, and edit Markdown documents programmatically. This performance benchmark report highlights the speed and efficiency of key operations, demonstrating how Markdown handles large-scale document processing in real-world scenarios.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.Markdown v34.1.29](https://www.nuget.org/packages/Syncfusion.Markdown/34.1.29) 

## Open and save Markdown 

<table>
<tr>
    <td><strong>Pages</strong></td>
    <td><strong>Input Markdown File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[Document-2.md](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Open-and-Save-MD-document/.NET/Open-and-Save-MD-document/Data/Document-2.md)'| markdownify }}</td>
    <td>0.002</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Document-50.md](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Open-and-Save-MD-document/.NET/Open-and-Save-MD-document/Data/Document-50.md)'| markdownify }}</td>
    <td>0.008</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Document-100.md](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Open-and-Save-MD-document/.NET/Open-and-Save-MD-document/Data/Document-100.md)'| markdownify }}</td>
    <td>0.23</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Document-500.md](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Open-and-Save-MD-document/.NET/Open-and-Save-MD-document/Data/Document-500.md)'| markdownify }}</td>
    <td>2.1</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Open-and-Save-MD-document/).

N> Execution times are based on the sample documents and may vary with different content or environments.

