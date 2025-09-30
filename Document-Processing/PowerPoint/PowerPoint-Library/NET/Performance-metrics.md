---
title: Performance benchmark results | Syncfusion
description: Know about the performance benchmark results of Syncfusion® .NET PowerPoint library with different slide count 
platform: document-processing
control: Presentation
documentation: UG
---

# .NET PowerPoint library performance benchmarks

The Syncfusion<sup>&reg;</sup> .NET PowerPoint library (Presentation) enables seamless integration for working with PowerPoint files, offering robust features for handling presentations in various formats. This performance benchmark report demonstrates the speed and efficiency of key functionalities, emphasizing how our library excels in real-world scenarios. 

## Environment 

The following system configurations were used for benchmarking: 

* **Operating System:** Windows 10
* **Processor:** 11th Gen Intel(R) Core(TM)
* **RAM:** 16GB
* **.NET Version:** .NET 8.0
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.Presentation.Net.Core v31.1.17](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core/31.1.17)

## Open and save Presentation 

<table>
<tr>
    <td><strong>Slides</strong></td>
    <td><strong>Input Presentation File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[PowerPoint-2.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Open-and-save/.NET/Open-and-save-PowerPoint/Data/PowerPoint-2.pptx)'| markdownify }}</td>
    <td>0.01</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[PowerPoint-50.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Open-and-save/.NET/Open-and-save-PowerPoint/Data/PowerPoint-50.pptx)'| markdownify }}</td>
    <td>0.02</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[PowerPoint-100.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Open-and-save/.NET/Open-and-save-PowerPoint/Data/PowerPoint-100.pptx)'| markdownify }}</td>
    <td>0.1</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[PowerPoint-500.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Open-and-save/.NET/Open-and-save-PowerPoint/Data/PowerPoint-500.pptx)'| markdownify }}</td>
    <td>2.6</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Open-and-save/).

## Clone and merge slides 

<table>
<tr>
    <td><strong>Slides</strong></td>
    <td><strong>Input Presentation File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[PowerPoint-2.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Clone-and-merge-slides/.NET/Clone-and-merge-slides/Data/SourceDocument/PowerPoint-2.pptx)'| markdownify }}</td>
    <td>0.01</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[PowerPoint-50.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Clone-and-merge-slides/.NET/Clone-and-merge-slides/Data/SourceDocument/PowerPoint-50.pptx)'| markdownify }}</td>
    <td>0.02</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[PowerPoint-100.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Clone-and-merge-slides/.NET/Clone-and-merge-slides/Data/SourceDocument/PowerPoint-100.pptx)'| markdownify }}</td>
    <td>0.06</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[PowerPoint-500.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Clone-and-merge-slides/.NET/Clone-and-merge-slides/Data/SourceDocument/PowerPoint-500.pptx)'| markdownify }}</td>
    <td>0.5</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/Clone-and-merge-slides/).

You can find the performance benchmark report for [PowerPoint to PDF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/performance-metrics) and [PowerPoint to Image](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/performance-metrics) conversion.