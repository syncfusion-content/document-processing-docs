---
title: Word to image Performance benchmark results | Syncfusion
description: Explore the performance benchmark results of Word to image conversion using the .NET Word Library with different page counts
platform: document-processing
control: DocIO
documentation: UG
---

# Word to image performance metrics in .NET Word Library

The Syncfusion<sup>&reg;</sup> .NET Word library (DocIO) enables high-performance Word document processing, including conversion to images. This performance benchmark report highlights the speed and efficiency of Word to image conversion, demonstrating how our library performs across varying document sizes in real-world scenarios.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 10  
* **Processor:** 11th Gen Intel(R) Core(TM)  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIORenderer.Net.Core v31.1.17](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/31.1.17)

## Word to image conversion

<table>
<tr>
    <td><strong>Pages</strong></td>
    <td><strong>Input Word File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[Word-2.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Word-to-Image/.NET/Word-document-to-image/Word-document-to-image/Data/Document-2.docx)'| markdownify }}</td>
    <td>0.77</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Word-50.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Word-to-Image/.NET/Word-document-to-image/Word-document-to-image/Data/Document-50.docx)'| markdownify }}</td>
    <td>9.6</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Word-100.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Word-to-Image/.NET/Word-document-to-image/Word-document-to-image/Data/Document-100.docx)'| markdownify }}</td>
    <td>13.9</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Word-500.docx](https://github.com/SyncfusionExamples/DocIO-Examples/blob/main/Performance-metrices/Word-to-Image/.NET/Word-document-to-image/Word-document-to-image/Data/Document-500.docx)'| markdownify }}</td>
    <td><49.8/td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Word-to-Image).