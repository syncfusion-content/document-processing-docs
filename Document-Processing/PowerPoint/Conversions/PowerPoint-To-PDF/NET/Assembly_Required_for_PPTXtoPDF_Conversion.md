---
title: Assemblies required for PowerPoint to PDF conversion | Syncfusion
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
												 
	 
	
{{'[WPF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-windows-forms)' | markdownify}}, {{'[ASP.NET](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net)' | markdownify}} and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net-mvc)' | markdownify}}<br/></td><td>
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
Syncfusion.SkiaSharpHelper.Portable<br/>
Skiasharp
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-winui)' | markdownify}} and {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-maui)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.NET<br/>Syncfusion.Compression.NET<br/>
Syncfusion.OfficeChart.NET<br/>Syncfusion.PresentationRenderer.NET<br/>Syncfusion.Pdf.Imaging.NET<br/> Syncfusion.SkiaSharpHelper.NET<br/>Skiasharp
</td>
</tr>
</table>

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
WPF, Windows Forms, ASP. NET and ASP.NET MVC<br/>
</td>
<td>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/>
</td>
</tr>
</table>
N> The “Syncfusion.OfficeChartToImageConverter.WPF” assembly is supported from .NET Framework 4.0 onwards.
