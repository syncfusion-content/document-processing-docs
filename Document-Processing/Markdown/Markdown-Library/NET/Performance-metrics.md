---
title: Performance Benchmarks in .NET Markdown Library | Syncfusion
description: Explore .NET Markdown library performance benchmarks across various document sizes and conversion scenarios.
platform: document-processing
control: Markdown
documentation: UG
---

# Performance Benchmarks in .NET Markdown Library

The [.NET Markdown Library](https://www.syncfusion.com/document-sdk/net-markdown-library) provides high-performance APIs to create, read, edit, and convert Markdown documents programmatically. This performance benchmark report highlights the speed and efficiency of key operations, demonstrating how Markdown library handles large-scale document processing in real-world scenarios.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.Markdown v34.1.29](https://www.nuget.org/packages/Syncfusion.Markdown/34.1.29) 

## Benchmark Results

The table below shows the performance results of various Markdown document operations. Each operation was executed using the input document described in the **Input Details** column, and the reported time is the elapsed time for a single run in the environment described above.

### Open and save Markdown

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

### Markdown Library Operations

<table>
<tr>
    <th>Operation</th>
    <th>Input Details</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
    <th>GitHub Example</th>
</tr>
<tr>
    <td>{{'[Create Markdown file](https://help.syncfusion.com/document-processing/markdown/markdown-library/net/working-with-markdown-document)'| markdownify }}</td>
    <td>2 pages</td>
    <td>0.005</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Create-Markdown-file/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Clone and merge](https://help.syncfusion.com/document-processing/markdown/markdown-library/net/loading-and-saving-document)'| markdownify }}</td>
    <td>100 pages</td>
    <td>0.8</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Clone-and-Merge/)'| markdownify }}</td>    
</tr>
</table>

N> Execution times are based on the sample documents and may vary with different content or environments.
