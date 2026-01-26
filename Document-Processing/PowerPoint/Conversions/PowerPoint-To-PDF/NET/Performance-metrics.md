---
title: Performance benchmark results | Syncfusion
description: Explore the performance benchmark results of PowerPoint to PDF conversion using the .NET PowerPoint Library with different slide counts
platform: document-processing
control: Presentation
documentation: UG
---

# PowerPoint to PDF performance benchmarks using .NET PowerPoint Library

The Syncfusion<sup>&reg;</sup> .NET PowerPoint library (Presentation) enables seamless integration with PowerPoint files, offering robust features for handling presentations in various formats. This performance benchmark report highlights the speed and efficiency of PowerPoint to PDF conversion, demonstrating how our library performs in real-world scenarios.

## Environment 

The following system configurations were used for benchmarking: 

* **Operating System:** Windows 11
* **Processor:** 12th Gen Intel(R) Core(TM) i5-1235U (1.30 GHz)
* **RAM:** 24GB
* **.NET Version:** .NET 8.0
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.PresentationRenderer.Net.Core v32.1.19](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core/32.1.19)

## PowerPoint to PDF conversion 

<table>
<tr>
    <td><strong>Slides</strong></td>
    <td><strong>Input Presentation File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[PowerPoint-2.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-PDF/.NET/PPTX-to-PDF/Data/PowerPoint-2.pptx)'| markdownify }}</td>
    <td>0.03</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[PowerPoint-50.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-PDF/.NET/PPTX-to-PDF/Data/PowerPoint-50.pptx)'| markdownify }}</td>
    <td>0.1</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[PowerPoint-100.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-PDF/.NET/PPTX-to-PDF/Data/PowerPoint-100.pptx)'| markdownify }}</td>
    <td>0.7</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[PowerPoint-500.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-PDF/.NET/PPTX-to-PDF/Data/PowerPoint-500.pptx)'| markdownify }}</td>
    <td>13.5</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-PDF/).
