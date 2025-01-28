---
title: Assemblies required for PowerPoint to PDF conversion | Syncfusion<sup>&reg;</sup>
description: Learn about the assemblies required to convert PowerPoint to PDF using the .NET PowerPoint (Presentation) library.
platform: document-processing
control: Presentation
documentation: UG
keywords: Assemblies
---
# Assemblies Required for PowerPoint to PDF conversion

## Converting PowerPoint Presentation to PDF

For converting a PowerPoint Presentation to PDF, the following assemblies needed to be referenced in your application
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
												 
	 
	
{{'[WPF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-windows-forms)' | markdownify}} and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net-mvc)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.PresentationToPDFConverter.Base<br/>
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net-core)' | markdownify}}, {{'[Xamarin](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-xamarin)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-blazor)' | markdownify}}<br/></td><td>
	 
	
Syncfusion.Presentation.Portable<br/>
Syncfusion.Compression.Portable<br/>
Syncfusion.OfficeChart.Portable<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.PresentationRenderer.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.MetafileRenderer.NET<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
SkiaSharp
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-winui)' | markdownify}} and {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-maui)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.NET<br/>Syncfusion.Compression.NET<br/>
Syncfusion.OfficeChart.NET<br/>Syncfusion.PresentationRenderer.NET<br/>Syncfusion.Pdf.Imaging.NET<br/>Syncfusion.MetafileRenderer.NET<br/> Syncfusion.SkiaSharpHelper.NET<br/>SkiaSharp
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
{{'[ASP.NET](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.PresentationToPDFConverter.Base<br/></td></tr>
</table>

N> 1. Starting with the v24.1.x, if you reference "Syncfusion.PresentationRenderer", you have to add the "Syncfusion.Pdf.Imaging" assembly reference in your projects to perform PowerPoint Presentation to PDF conversion.
N> 2. Starting with the v27.1.x, if you reference "Syncfusion.PresentationRenderer", you have to add the "Syncfusion.MetafileRenderer" assembly reference in your projects to perform PowerPoint Presentation to PDF conversion.

## Converting Charts

The following assemblies are required to be referred in addition to the above mentioned assemblies for converting the chart present in the PowerPoint Presentation into PDF.
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
