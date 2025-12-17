---
title: Performance benchmark results | Syncfusion
description: Explore the performance benchmark results of PowerPoint to image conversion using the .NET PowerPoint Library with different slide counts
platform: document-processing
control: Presentation
documentation: UG
---

# PowerPoint to image performance benchmarks using .NET PowerPoint Library

The Syncfusion<sup>&reg;</sup> .NET PowerPoint library (Presentation) enables seamless integration with PowerPoint files, offering robust features for handling presentations in various formats. This performance benchmark report highlights the speed and efficiency of PowerPoint to image conversion, demonstrating how our library performs in real-world scenarios.

## Environment 

The following system configurations were used for benchmarking: 

* **Operating System:** Windows 10
* **Processor:** 11th Gen Intel(R) Core(TM)
* **RAM:** 16GB
* **.NET Version:** .NET 8.0
* **Syncfusion<sup>&reg;</sup> Version:** [Syncfusion.PresentationRenderer.Net.Core v32.1.19](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core/32.1.19)

## PowerPoint to image conversion 

<table>
<tr>
    <td><strong>Slides</strong></td>
    <td><strong>Input Presentation File</strong></td>
    <td><strong>Syncfusion<sup>&reg;</sup> Time (sec)</strong></td>
</tr>
<tr>
    <td>2</td>
    <td>{{'[PowerPoint-2.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-Image/.NET/Convert-PowerPoint-slide-to-Image/Data/PowerPoint-2.pptx)'| markdownify }}</td>
    <td>0.05</td>
</tr>
<tr>
    <td>50</td>
    <td>{{'[PowerPoint-50.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-Image/.NET/Convert-PowerPoint-slide-to-Image/Data/PowerPoint-50.pptx)'| markdownify }}</td>
    <td>0.4</td>
</tr>
<tr>
    <td>100</td>
    <td>{{'[PowerPoint-100.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-Image/.NET/Convert-PowerPoint-slide-to-Image/Data/PowerPoint-100.pptx)'| markdownify }}</td>
    <td>2.2</td>
</tr>
<tr>
    <td>500</td>
    <td>{{'[PowerPoint-500.pptx](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-Image/.NET/Convert-PowerPoint-slide-to-Image/Data/PowerPoint-500.pptx)'| markdownify }}</td>
    <td>23.5</td>
</tr>
</table>

You can find the sample used for this performance evaluation on [GitHub](https://github.com/SyncfusionExamples/PowerPoint-Examples/tree/master/Performance-metrices/PPTX-to-Image/).
