---
title: Performance Benchmarks in Markdown Conversion | Syncfusion
description: Explore Markdown conversion performance benchmarks across documents of varying sizes, complexities, and conversion scenarios.
platform: document-processing
control: Markdown
documentation: UG
---

# Conversion Performance Benchmarks in .NET Markdown Library

The Syncfusion<sup>&reg;</sup> [.NET Markdown Library](https://www.syncfusion.com/document-sdk/net-markdown-library) enables high-performance Markdown document processing and conversions. This performance benchmark report highlights the speed and efficiency of Markdown document operations, demonstrating how the library performs across various processing and conversion scenarios using representative workloads.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 11
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.Markdown v34.1.29](https://www.nuget.org/packages/Syncfusion.Markdown/34.1.29) 

## Benchmark Results

The table below presents the performance results of various Markdown document operations, evaluated using predefined input conditions in the previously described environment. Each row includes the operation performed, the input details, the average execution time, and a link to the corresponding GitHub example.

<table>
<tr>
    <th>Operation</th>
    <th>Input Details</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
    <th>GitHub Example</th>
</tr>
<tr>
    <td>{{'[Word to MD](https://help.syncfusion.com/document-processing/word/conversions/word-to-markdown-conversion)'| markdownify }}</td>
    <td>100 pages</td>
    <td>1.6</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/DOCX-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[HTML to MD](https://help.syncfusion.com/document-processing/markdown/conversions/html-conversions)'| markdownify }}</td>
    <td>100 pages</td>
    <td>5.3</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/HTML-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[PPTX to MD](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-markdown)'| markdownify }}</td>
    <td>100 Slides</td>
    <td>7.01</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/PPTX-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[Excel to MD](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-markdown/overview)'| markdownify }}</td>
    <td>Data type - Text (1000 cells)</td>
    <td>0.04</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/Excel-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[MD to DOCX](https://help.syncfusion.com/document-processing/word/conversions/markdown-to-word-conversion)'| markdownify }}</td>
    <td>100 pages</td>
    <td>1.5</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/MD-to-Word/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[MD to HTML](https://help.syncfusion.com/document-processing/markdown/conversions/html-conversions)'| markdownify }}</td>
    <td>100 pages</td>
    <td>1.4</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/MD-to-HTML/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[MD to PDF](https://help.syncfusion.com/document-processing/markdown/conversions/markdown-to-pdf)'| markdownify }}</td>
    <td>50 pages</td>
    <td>2.2</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/MD-to-PDF/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[MD to PPTX](https://help.syncfusion.com/document-processing/powerpoint/conversions/markdown-to-powerpoint)'| markdownify }}</td>
    <td>100 Slides</td>
    <td>0.98</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/MD-to-PPTX/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[MD to Excel](https://help.syncfusion.com/document-processing/excel/conversions/markdown-to-excel/overview)'| markdownify }}</td>
    <td>Table (1000 cells)</td>
    <td>0.04</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/MD-to-Excel/)'| markdownify }}</td>    
</tr>
</table>

N> Execution times are based on the sample documents and may vary with different content or environments.

N> **Note:** The conversion operations listed in this benchmark use different Syncfusion® document processing libraries based on the source and target formats.
N>
N> * **Word to Markdown**, **Markdown to Word**, and **Markdown to PDF** conversions use the **Syncfusion® .NET Word Library (DocIO)**: [Syncfusion.DocIO.Net.Core v34.1.29](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core/34.1.29)
N> * **Markdown to PDF** conversion uses the **Syncfusion® DocIORenderer** package to render Markdown documents as PDF: [Syncfusion.DocIORenderer.Net.Core v34.1.29](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/34.1.29)
N> * **Excel to Markdown** and **Markdown to Excel** conversions use the **Syncfusion® .NET Excel Library (XlsIO)**: [Syncfusion.XlsIO.Net.Core v34.1.29](https://www.nuget.org/packages/Syncfusion.XlsIO.Net.Core/34.1.29)
N> * **PowerPoint to Markdown** and **Markdown to PowerPoint** conversions use the **Syncfusion® .NET PowerPoint Library**: [Syncfusion.Presentation.Net.Core v34.1.29](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core/34.1.29)