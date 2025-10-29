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

* **Operating System:** Windows 10  
* **Processor:** 11th Gen Intel(R) Core(TM)  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIO.Net.Core v31.1.17](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core/31.1.17)

## Open and save Word document

<table>
<tr>
    <td><strong>Pages</strong></td>
    <td><strong>Input Word File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[Word-2.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-Word-document/Open-and-Save-Word-document/Data/Document-2.docx)'| markdownify }}</td>
    <td>0.52</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Word-50.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-Word-document/Open-and-Save-Word-document/Data/Document-50.docx)'| markdownify }}</td>
    <td>1.3</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Word-100.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-Word-document/Open-and-Save-Word-document/Data/Document-100.docx)'| markdownify }}</td>
    <td>2.4</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Word-500.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Open-and-save/.NET/Open-and-Save-Word-document/Open-and-Save-Word-document/Data/Document-500.docx)'| markdownify }}</td>
    <td>4.7</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Open-and-save).

## Clone and merge execution

<table>
<tr>
    <td><strong>Pages</strong></td>
    <td><strong>Input Word File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[Word-2.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Clone-and-merge/.NET/Clone-and-merge-word-document/Clone-and-merge-word-document/Data/SourceDocument/Document-2.docx)'| markdownify }}</td>
    <td>0.46</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Word-50.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Clone-and-merge/.NET/Clone-and-merge-word-document/Clone-and-merge-word-document/Data/SourceDocument/Document-50.docx)'| markdownify }}</td>
    <td>3.2</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Word-100.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Clone-and-merge/.NET/Clone-and-merge-word-document/Clone-and-merge-word-document/Data/SourceDocument/Document-100.docx)'| markdownify }}</td>
    <td>5.3</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Word-500.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Clone-and-merge/.NET/Clone-and-merge-word-document/Clone-and-merge-word-document/Data/SourceDocument/Document-500.docx)'| markdownify }}</td>
    <td>19.5</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Clone-and-merge).

