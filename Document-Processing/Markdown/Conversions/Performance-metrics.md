---
title: Markdown conversions Performance benchmark results | Syncfusion
description: Explore the performance benchmark results of Markdown conversion across documents of varying sizes and complexities
platform: document-processing
control: Markdown
documentation: UG
---

# Markdown conversion performance benchmarks

The Syncfusion<sup>&reg;</sup> .NET Markdown Library is a high-performance API for creating, editing, and converting Markdown documents programmatically without external dependencies. It efficiently handles Markdown processing workflows and supports conversion to PDF, Word, HTML, Excel, PowerPoint, and image formats while preserving document structure and formatting.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** v34.1.29

## Benchmark Results

The table below shows the performance results of various Markdown document operations, evaluated using predefined input conditions in the previously described environment. 

<table>
<tr>
    <th>Operation</th>
    <th>Input Details</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
    <th>GitHub Example</th>
</tr>
<tr>
    <td>{{'[DOCX to MD](https://help.syncfusion.com/document-processing/word/conversions/word-to-markdown-conversion)'| markdownify }}</td>
    <td>100 pages</td>
    <td>1.6</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/DOCX-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[RTF to MD](https://help.syncfusion.com/document-processing/word/conversions/rtf-conversions)'| markdownify }}</td>
    <td>100 pages</td>
    <td>4.4</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/RTF-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[HTML to MD](https://help.syncfusion.com/document-processing/markdown/conversions/html-conversions)'| markdownify }}</td>
    <td>100 pages</td>
    <td>5.3</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/HTML-to-MD/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[PDF to MD](https://help.syncfusion.com/document-processing/data-extraction/net/conversions/pdf-to-markdown)'| markdownify }}</td>
    <td>50 pages</td>
    <td>186</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/Markdown-Examples/tree/master/Performance-metrices/PDF-to-MD/)'| markdownify }}</td>    
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
</table>

N> Execution times are based on the sample documents and may vary with different content or environments.

