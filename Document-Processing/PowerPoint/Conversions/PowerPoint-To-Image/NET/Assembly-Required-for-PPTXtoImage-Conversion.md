---
title: Assemblies Required for PowerPoint Presentation | Syncfusion
description: This section explains about how to assemblies required to convert powerpoint presentation to PDF for various platforms and frameworks.
platform: document-processing
control: Presentation
documentation: UG
keywords: Assemblies
---
# Assemblies Required for PowerPoint Presentation

## Converting PowerPoint Presentation to Image

For converting a PowerPoint Presentation to Image, the following assemblies needed to be referenced in your application
<table>
<tr>
<thead>
<th>
Platform(s)</th>
<th>
Assembly
</th>
</thead>
</tr>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-windows-forms)' | markdownify}} and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-asp-net-mvc)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.PresentationToPDFConverter.Base<br/>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/>
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-asp-net-core)' | markdownify}}, {{'[Xamarin](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-xamarin)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-blazor)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Portable<br/>
Syncfusion.Compression.Portable<br/>
Syncfusion.OfficeChart.Portable<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.PresentationRenderer.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
Skiasharp
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-winui)' | markdownify}} and {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-maui)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.NET<br/>Syncfusion.Compression.NET<br/>
Syncfusion.OfficeChart.NET<br/>Syncfusion.PresentationRenderer.NET<br/>Syncfusion.Pdf.Imaging.NET<br/> Syncfusion.Pdf.NET<br/>Syncfusion.SkiaSharpHelper.NET<br/>Skiasharp
</td>
</tr>
<tr>
<td>
{{'[UWP](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-uwp)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.UWP<br/>
Syncfusion.OfficeChart.UWP<br/>
Syncfusion.OfficeChartToImageConverter.UWP<br/>
Syncfusion.SfChart.UWP<br/>
</td>
</tr>
</table>

#### Retired Platforms

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)<br/></th><th>
Assembly<br/></th></tr></thead>
<tr>
<td>
{{'[ASP.NET](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-asp-net)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.PresentationToPDFConverter.Base<br/>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/></td></tr>
</table>

N> Starting with the v24.1.x, if you reference "Syncfusion.PresentationRenderer", you have to add the "Syncfusion.Pdf.Imaging" assembly reference in your projects to perform PowerPoint Presentation to PDF conversion.

## Converting Charts

The following assemblies are required to be referred in addition to the above mentioned assemblies for converting the chart present in the PowerPoint Presentation into image.
<table>
<tr>
<thead>
<th>
Platform(s)</th>
<th>
Assembly
</th>
</thead>
</tr>
<tr>
<td>
WPF, Windows Forms and ASP.NET MVC<br/>
</td>
<td>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/>
</td>
</tr>
</table>

#### Retired Platforms

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)<br/></th><th>
Assembly<br/></th></tr></thead>
<tr>
<td>
ASP.NET <br/></td><td>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/></td></tr>
</table>

N> The “Syncfusion.OfficeChartToImageConverter.WPF” assembly is supported from .NET Framework 4.0 onwards.
