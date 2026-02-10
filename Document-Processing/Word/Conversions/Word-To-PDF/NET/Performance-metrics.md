---
title: Word to PDF Performance benchmark results | Syncfusion
description: Explore the performance benchmark results of Word to PDF conversion using the .NET Word Library with different page counts
platform: document-processing
control: DocIO
documentation: UG
---

# Word to PDF performance benchmarks using .NET Word Library

The Syncfusion<sup>&reg;</sup> .NET Word library (DocIO) enables high-performance Word document processing, including conversion to PDF. This performance benchmark report highlights the speed and efficiency of Word to PDF conversion, demonstrating how our library performs across varying document sizes in real-world scenarios.

## Environment

The following system configurations were used for benchmarking:

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIORenderer.Net.Core v32.2.3](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/32.2.3)

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
    <td>{{'[Word to PDF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf)'| markdownify }}</td>
    <td>100 pages</td>
    <td>5.45</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Word-to-PDF/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[Accessible PDF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#accessible-pdf-document)'| markdownify }}</td>
    <td>2 pages</td>
    <td>1.1</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Accessible-PDF/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Comments](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#comments-in-word-to-pdf-conversion)'| markdownify }}</td>
    <td>2 pages</td>
    <td>1.1</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Comments/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Embed fonts in PDF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf#embedding-fonts)'| markdownify }}</td>
    <td>2 pages</td>
    <td>0.98</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Embed-fonts-in-PDF/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Export bookmarks](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#word-document-headings-to-pdf-bookmarks)'| markdownify }}</td>
    <td>2 pages</td>
    <td>0.92</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Export-Bookmarks/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Fallback font](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/fallback-fonts-word-to-pdf)'| markdownify }}</td>
    <td>1 page</td>
    <td>0.79</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Fallback-Font-PDF/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Font-Substitution](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/font-substituion-word-to-pdf)'| markdownify }}</td>
    <td>2 pages</td>
    <td>0.89</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Font-substitution-PDF/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[PDF Conformance Level](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#pdf-conformance-level)'| markdownify }}</td>
    <td>2 pages</td>
    <td>0.92</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/PDF-Conformance-Level/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Preserve Form Fields](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#word-document-form-field-to-pdf-form-field)'| markdownify }}</td>
    <td>1 page</td>
    <td>0.79</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Preserve-Form-Fields/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Track changes](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#track-changes-in-word-to-pdf-conversion)'| markdownify }}</td>
    <td>1 page</td>
    <td>0.91</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Track%20changes/)'| markdownify }}</td>
</tr>
<tr>
    <td>Use embedded word fonts</td>
    <td>2 pages</td>
    <td>1.16</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Use-embeded-word-font-PDF/)'| markdownify }}</td>
</tr>
</table>

N> Execution times are based on the sample documents and may vary with different content or environments.

