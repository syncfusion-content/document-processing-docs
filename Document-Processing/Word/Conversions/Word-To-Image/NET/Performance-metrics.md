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

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIORenderer.Net.Core v32.2.3](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/32.2.3)

## Benchmark Results

The table below shows the performance results of various Word document operations, evaluated using predefined input conditions in the previously described environment. 

<table>
<tr>
    <th>Operation</th>
    <th>Input Details</th>
    <th>Syncfusion<sup>&reg;</sup> Time (sec)</th>
    <th>GitHub Example</th>
</tr>
<tr>
    <td>{{'[Word to Image](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image)'| markdownify }}</td>
    <td>100 pages</td>
    <td>7.77</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Word-to-Image/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[Fallback font](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/fallback-fonts-word-to-image)'| markdownify }}</td>
    <td>1 page</td>
    <td>0.63</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Fallback-Font-Image/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Font-Substitution](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/font-substituion-word-to-image)'| markdownify }}</td>
    <td>2 pages</td>
    <td>0.79</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Font-Substitution-Image/)'| markdownify }}</td>
</tr>
<tr>
    <td>{{'[Use embedded word fonts](https://support.syncfusion.com/kb/article/13969/how-to-resolve-font-problems-during-word-to-pdf-or-image-conversion#suggestion-3:-embed-fonts-in-docx)'| markdownify }}</td>
    <td>2 pages</td>
    <td>1.1</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Use-embedded-Word-fonts-image/)'| markdownify }}</td>
</tr>
</table>

N> Execution times are based on the sample documents and may vary with different content or environments.