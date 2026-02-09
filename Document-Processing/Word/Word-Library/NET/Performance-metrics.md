---
title: Word library Performance benchmark results | Syncfusion
description: Know about the performance benchmark results of Syncfusion® .NET Word library with different document sizes
platform: document-processing
control: DocIO
documentation: UG
---

# .NET Word library performance benchmarks

The Syncfusion<sup>&reg;</sup> .NET Word library (DocIO) provides high-performance APIs to create, read, edit, and convert Word documents programmatically. This performance benchmark report highlights the speed and efficiency of key operations, demonstrating how DocIO handles large-scale document processing in real-world scenarios.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIO.Net.Core v32.2.3](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core/32.2.3)

## Benchmark Results.

The table below shows the performance results of various Word document operations, evaluated using predefined input conditions in the previously described environment. 

<table>
<tr>
    <th>Operation</th>
    <th>Input Details</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
    <th>GitHub Example</th>
</tr>
<tr>
    <td>DOCX to DOCX</td>
    <td>100 pages</td>
    <td>1.68</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-Word-document)'| markdownify }}</td>    
</tr>
<tr>
    <td>RTF to RTF</td>
    <td>100 pages</td>
    <td>5.53</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-RTF-document)'| markdownify }}</td>
</tr>
<tr>
    <td>HTML to HTML</td>
    <td>100 pages</td>
    <td>7.7</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-HTML-document)'| markdownify }}</td>
</tr>
<tr>
    <td>Clone and merge</td>
    <td>100 pages</td>
    <td>3.85</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Clone-and-merge/)'| markdownify }}</td>
</tr>
<tr>
    <td>Find and replace</td>
    <td>1000 occurrences</td>
    <td>0.05</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Find-and-Replace/)'| markdownify }}</td>
</tr>
<tr>
    <td>Mail merge</td>
    <td>1000 records</td>
    <td>1.72</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Mail-Merge/)'| markdownify }}</td>
</tr>
<tr>
    <td>Word Compare</td>
    <td>100 pages</td>
    <td>3.52</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Word-Compare/)'| markdownify }}</td>
</tr>
<tr>
    <td>Accept All</td>
    <td>100 revisions</td>
    <td>0.01</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Accept-All/)'| markdownify }}</td>
</tr>
<tr>
    <td>Reject All</td>
    <td>100 revisions</td>
    <td>0.009</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Reject-All/)'| markdownify }}</td>
</tr>
<tr>
    <td>Update TOC</td>
    <td>100 pages</td>
    <td>4.53</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Update-TOC/)'| markdownify }}</td>
</tr>
<tr>
    <td>Update Document Fields</td>
    <td>100 pages</td>
    <td>0.18</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/UpdateDocumentFields/)'| markdownify }}</td>
</tr>
</table>

N> Execution times are based on the sample documents and may vary with different content or environments.

