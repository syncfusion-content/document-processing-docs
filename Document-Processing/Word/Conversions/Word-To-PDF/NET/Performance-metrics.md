---
title: Performance benchmark results | Syncfusion
description: Explore the performance benchmark results of Word to PDF conversion using the .NET Word Library with different page counts
platform: document-processing
control: DocIO
documentation: UG
---

# Word to PDF performance benchmarks using .NET Word Library

The Syncfusion<sup>&reg;</sup> .NET Word library (DocIO) enables high-performance Word document processing, including conversion to PDF. This performance benchmark report highlights the speed and efficiency of Word to PDF conversion, demonstrating how our library performs across varying document sizes in real-world scenarios.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 10  
* **Processor:** 11th Gen Intel(R) Core(TM)  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIORenderer.Net.Core v31.1.17](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/31.1.17)

## Word to PDF conversion

<table>
<tr>
    <td><strong>Pages</strong></td>
    <td><strong>Input Word File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[Word-2.docx]()'| markdownify }}</td>
    <td>0.02</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[Word-50.docx]()'| markdownify }}</td>
    <td>0.08</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[Word-100.docx]()'| markdownify }}</td>
    <td>1.1</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[Word-500.docx]()'| markdownify }}</td>
    <td>14.5</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub]().
