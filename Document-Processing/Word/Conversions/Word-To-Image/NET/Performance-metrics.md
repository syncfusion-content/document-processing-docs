---
title: Word to Image Performance Benchmark Results | Syncfusion
description: Explore the performance benchmark results of Word-to-Image conversion using the Syncfusion .NET Word Library across different operations and document sizes.
platform: document-processing
control: DocIO
documentation: UG
---

# Word-to-Image Performance Benchmarks in .NET Word Library

The Syncfusion<sup>&reg;</sup> .NET Word library (DocIO) enables high-performance Word document processing, including Word-to-Image conversion. This performance benchmark report highlights the speed and efficiency of the conversion, demonstrating how the library performs across varying document sizes and feature scenarios in real-world conditions.

## Environment

The following system configurations and test methodology were used for benchmarking:

* **Operating System:** Windows 11  
* **Processor:** AMD Ryzen 5 7520U with Radeon Graphics  
* **RAM:** 16GB  
* **.NET Version:** .NET 8.0  
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.DocIORenderer.Net.Core v34.1.29](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/34.1.29)

## Benchmark Results

The table below shows the performance results of various Word-to-Image operations, evaluated using the predefined input conditions described in the previous sections. Times are measured in seconds and include document loading, conversion, and image saving.

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
    <td>7.3</td>
    <td>{{'[GitHub-Example](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Performance-metrices/Word-to-Image/)'| markdownify }}</td>    
</tr>
<tr>
    <td>{{'[Fallback font](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/fallback-fonts-word-to-image)'| markdownify }}</td>
    <td>1 page</td>
    <td>0.57</td>
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

## Related Links

* [Word-to-Image Overview](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image)
* [Word-to-Image FAQs](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/word-to-image-conversion-faqs)
* [Assemblies Required for Word-to-Image](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/assemblies-required-word-to-image)
* [NuGet Packages Required for Word-to-Image](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/nuget-packages-required-word-to-image)