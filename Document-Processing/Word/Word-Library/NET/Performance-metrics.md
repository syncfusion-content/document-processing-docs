---
title: Performance benchmark results | Syncfusion
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
    <td>{{'[Word-2.docx]()'| markdownify }}</td>
    <td></td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Word-50.docx]()'| markdownify }}</td>
    <td></td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Word-100.docx]()'| markdownify }}</td>
    <td></td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Word-500.docx]()'| markdownify }}</td>
    <td></td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub]().

## Clone and merge execution

<table>
<tr>
    <td><strong>Pages</strong></td>
    <td><strong>Input Word File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[Word-2.docx]()'| markdownify }}</td>
    <td></td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Word-50.docx]()'| markdownify }}</td>
    <td></td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Word-100.docx]()'| markdownify }}</td>
    <td></td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Word-500.docx]()'| markdownify }}</td>
    <td></td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub]().

You can also explore performance benchmarks for [Word to PDF](https://help.syncfusion.com/document-processing/word-framework/conversions/word-to-pdf/net/performance-metrics) and [Word to Image](https://help.syncfusion.com/document-processing/word-framework/conversions/word-to-image/net/performance-metrics) conversions.