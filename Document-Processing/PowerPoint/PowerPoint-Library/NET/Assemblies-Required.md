---
title: Assemblies Required for .NET PowerPoint Presentation | Syncfusion
description: This section explains the required assemblies for creating PowerPoint presentations and converting to PDF or images using Syncfusion® .NET PowerPoint library.
platform: document-processing
control: Presentation
documentation: UG
keywords: Assemblies
---
# Assemblies Required for .NET PowerPoint Presentation

The following assemblies need to be referenced in your application
<table>
<thead>
<tr>
<th>
Platform(s)</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
												 
	 
	
{{'[WPF](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-windows-forms)' | markdownify}}, and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-asp-net-mvc)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Markdown<br/>
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-asp-net-core-c-sharp)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-blazor)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Portable<br/>Syncfusion.Compression.Portable<br/>Syncfusion.OfficeChart.Portable<br/>Syncfusion.Markdown<br/></td></tr>
<tr>
<td>
{{'[Universal Windows Platform](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-uwp)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.UWP<br/>Syncfusion.OfficeChart.UWP<br/>Syncfusion.Markdown<br/></td></tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-winui)' | markdownify}} and {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-maui)' | markdownify}}<br/></td><td>
	 
		 
Syncfusion.Presentation.NET<br/>Syncfusion.Compression.NET<br/>
Syncfusion.OfficeChart.NET<br/>Syncfusion.Markdown<br/>
</td></tr>
</table>

T> 1. If you encounter issues while using the [.NET PowerPoint Library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) in ASP.NET Core, refer to the [troubleshooting guide](https://support.syncfusion.com/kb/article/16010/how-to-use-troubleshooting-guide-for-aspnet-core-powerpoint-library-issues) for recommended checks and solutions.
T> 2. Switch to NuGet packages for a seamless experience:
T> * Get frequent bug fixes every week.
T> * Upgrade quickly with no manual effort.
T> Note: To avoid trial watermark when using NuGet packages, it is recommended to register license key in application. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) for information on registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.
T> Refer [here](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required) for more information on the required NuGet packages.

### Retired Platforms

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)<br/></th><th>
Assembly<br/></th></tr></thead>
<tr>
<td>
{{'[ASP.NET](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-asp-net-web-forms)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/></td></tr>
<tr>
<td>
{{'[Xamarin](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-xamarin)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Portable<br/>Syncfusion.Compression.Portable<br/>Syncfusion.OfficeChart.Portable<br/></td></tr>
</table>

N> Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

## Converting PowerPoint Presentation to PDF

For converting a PowerPoint Presentation to PDF, the following assemblies need to be referenced in your application
<table>
<thead>
<tr>
<th>
Platform(s)</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
												 
	 
	
{{'[WPF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-windows-forms)' | markdownify}} and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net-mvc)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Markdown<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.PresentationToPDFConverter.Base<br/>
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-asp-net-core)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-blazor)' | markdownify}}<br/></td><td>
	 
	
Syncfusion.Presentation.Portable<br/>
Syncfusion.Compression.Portable<br/>
Syncfusion.OfficeChart.Portable<br/>
Syncfusion.Markdown<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.PresentationRenderer.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.MetafileRenderer.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
SkiaSharp
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-winui)' | markdownify}} and {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-maui)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.NET<br/>Syncfusion.Compression.NET<br/>
Syncfusion.OfficeChart.NET<br/>Syncfusion.Markdown<br/>
Syncfusion.PresentationRenderer.NET<br/>Syncfusion.Pdf.Imaging.NET<br/>Syncfusion.MetafileRenderer.NET<br/> Syncfusion.SkiaSharpHelper.NET<br/>SkiaSharp
</td>
</tr>
</table>

### Retired Platforms

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
<tr>
<td>
{{'[Xamarin](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/convert-powerpoint-to-pdf-in-xamarin)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Portable<br/>
Syncfusion.Compression.Portable<br/>
Syncfusion.OfficeChart.Portable<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.PresentationRenderer.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.MetafileRenderer.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
SkiaSharp<br/></td></tr>
</table>

N> 1. Starting with the v24.1.x, if you reference "Syncfusion.PresentationRenderer", you have to add the "Syncfusion.Pdf.Imaging" assembly reference in your projects to perform PowerPoint Presentation to PDF conversion.
N> 2. Starting with the v27.1.x, if you reference "Syncfusion.PresentationRenderer", you have to add the "Syncfusion.MetafileRenderer" assembly reference in your projects to perform PowerPoint Presentation to PDF conversion.

## Converting PowerPoint Presentation to Image

For converting a PowerPoint Presentation to Image, the following assemblies need to be referenced in your application
<table>
<thead>
<tr>
<th>
Platform(s)</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-windows-forms)' | markdownify}} and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-asp-net-mvc)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.OfficeChart.Base<br/>
Syncfusion.Markdown<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.PresentationToPDFConverter.Base<br/>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/>
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-asp-net-core)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-blazor)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Portable<br/>
Syncfusion.Compression.Portable<br/>
Syncfusion.OfficeChart.Portable<br/>
Syncfusion.Markdown<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.MetafileRenderer.NET<br/>
Syncfusion.PresentationRenderer.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
SkiaSharp
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-winui)' | markdownify}} and {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-maui)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.NET<br/>Syncfusion.Compression.NET<br/>
Syncfusion.OfficeChart.NET<br/>Syncfusion.Markdown<br/>
Syncfusion.PresentationRenderer.NET<br/>Syncfusion.Pdf.Imaging.NET<br/> Syncfusion.Pdf.NET<br/>Syncfusion.MetafileRenderer.NET<br/>Syncfusion.SkiaSharpHelper.NET<br/>SkiaSharp
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

### Retired Platforms

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
<tr>
<td>
{{'[Xamarin](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/convert-powerpoint-to-image-in-xamarin)' | markdownify}}<br/></td><td>
Syncfusion.Presentation.Portable<br/>
Syncfusion.Compression.Portable<br/>
Syncfusion.OfficeChart.Portable<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.MetafileRenderer.NET<br/>
Syncfusion.PresentationRenderer.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
SkiaSharp<br/></td></tr>
</table>

## Converting Charts to PDF/Image

The following assemblies are required to be referenced in addition to the above mentioned assemblies for converting the chart present in the PowerPoint Presentation into PDF and image.
<table>
<thead>
<tr>
<th>
Platform(s)</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
WPF, Windows Forms and ASP.NET MVC<br/>
</td>
<td>
Syncfusion.OfficeChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF<br/>
</td>
</tr>
<tr>
<td>
ASP.NET Core and Blazor<br/>
</td>
<td>
Syncfusion.OfficeChartToImageConverter.Portable<br/>
Syncfusion.SfChart.Portable<br/>
</td>
</tr>
</table>

### Retired Platforms

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

N> On Linux and macOS, the [SkiaSharp](https://www.nuget.org/packages/SkiaSharp) NuGet package may require additional native runtime libraries (e.g., `libSkiaSharp`) to be installed on the host.

