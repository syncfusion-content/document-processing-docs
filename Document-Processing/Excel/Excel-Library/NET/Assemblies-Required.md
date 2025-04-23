---
title: XlsIO Assemblies Required | Syncfusion
description: Briefs the assemblies required to convert excel document to PDF, excel worksheet to image & excel chart to image for various platforms and frameworks.
platform: document-processing
control: XlsIO
documentation: UG
---

# Assemblies Required for XlsIO

The following assemblies need to be referenced in your application based on the platform.
<table>
<tr>
<thead><th>
Platform(s)</th>
<th>
Assembly
</th>
</thead>
</tr>
<tbody>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-wpf-c-sharp)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-windows-forms-c-sharp)' | markdownify}}, {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-mvc-c-sharp)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.Base<br/>
Syncfusion.Compression.Base
</td>
</tr>
<tr>
<td>
{{'[Windows Forms](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-windows-forms-c-sharp)' | markdownify}} and {{'[WPF (Client Profile)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-wpf-c-sharp)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.ClientProfile<br/>
Syncfusion.Compression.Base
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-core-c-sharp)' | markdownify}}, {{'[Xamarin](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-xamarin-c-sharp)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-blazor-c-sharp)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.Portable<br/>
Syncfusion.Compression.Portable
</td>
</tr>
<tr>
<td>
{{'[Universal Windows Platform](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-uwp-c-sharp)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.UWP
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-winui-c-sharp)' | markdownify}}<br/> {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-maui-c-sharp)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.NET
</td>
</tr>
<tr>
<td>
{{'[Linux (.NET Core)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-linux-c-sharp)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.Net.Core
</td>
</tr>
</tbody>
</table>

**Retired Platforms**

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)<br/>
</th>
<th>
Assembly<br/>
</th>
</tr>
</thead>
<tr>
<td>
{{'[ASP.NET (Classic)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-c-sharp)' | markdownify}}<br/>
</td>
<td>
Syncfusion.XlsIO.Web<br/>
Syncfusion.Compression.Base
</td>
</tr>
<tr>
<td>
{{'[ASP.NET MVC (Classic)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-mvc-c-sharp)' | markdownify}}<br/>
</td>
<td>
Syncfusion.XlsIO.MVC<br/>
Syncfusion.Compression.Base
</td>
</tr>
<tr>
<td>
WinRT (Windows Store applications)<br/>
</td>
<td>
Syncfusion.XlsIO.winrt<br/>
</td>
</tr>
<tr>
<td>
Windows Phone 8<br/>
</td>
<td>
Syncfusion.XlsIO.WP8<br/>
Syncfusion.Compression.WP8
</td>
</tr>
<tr>
<td>
Windows Phone 8.1 Silverlight
</td>
<td>
Syncfusion.XlsIO.WPSilverlight<br/>
Syncfusion.Compression.WPSilverlight
</td>
</tr>
<tr>
<td>
Windows Phone 8.1 WinRT
</td>
<td>
Syncfusion.XlsIO.WP<br/>
Syncfusion.Compression.WP
</td>
</tr>
<tr>
<td>
Silverlight
</td>
<td>
Syncfusion.XlsIO.Silverlight<br/>
Syncfusion.Compression.Silverlight
</td>
</tr>
<tr>
<td>
Universal (Classic)
</td>
<td>
Syncfusion.XlsIO.Universal
</td>
</tr>
<tr>
<td>
{{'[ASP.NET](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-c-sharp)' | markdownify}}<br/>
</td>
<td>
Syncfusion.XlsIO.Base<br/>
Syncfusion.Compression.Base
</td>
</tr>
</table>

N> 1. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

N> 2. Syncfusion<sup>&reg;</sup> components are available in nuget.org

## Converting Excel document to PDF

For converting an Excel document to PDF, the following assemblies need to be referenced in your application.
<table>
<tr>
<th>
Platform(s)
</th>
<th>
Assembly
</th>
</tr>
<tbody>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-windows-forms)' | markdownify}}, {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net-mvc)' | markdownify}}
</td>
<td>
Syncfusion.XlsIO.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.ExcelToPDFConverter.Base
</td>
</tr>
<tr>
<td>
{{'[Windows Forms](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-windows-forms)' | markdownify}} and {{'[WPF (Client Profile)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-wpf)' | markdownify}}    
</td>
<td>
Syncfusion.XlsIO.ClientProfile<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.Pdf.ClientProfile<br/>
Syncfusion.ExcelToPDFConverter.ClientProfile
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net-core)' | markdownify}}, {{'[Xamarin](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-xamarin)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-blazor)' | markdownify}}
</td>
<td>
Syncfusion.Compression.Portable<br/>
Syncfusion.XlsIO.Portable<br/>
Syncfusion.Pdf.Portable<br/>
Syncfusion.Pdf.Imaging.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
Syncfusion.XlsIORenderer.Portable
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-winui)' | markdownify}}<br/> {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-maui)' | markdownify}}
</td>
<td>
Syncfusion.Compression.NET<br/>
Syncfusion.XlsIO.NET<br/>
Syncfusion.Pdf.NET<br/>
Syncfusion.Pdf.Imaging.NET<br/>
Syncfusion.SkiaSharpHelper.NET<br/>
Syncfusion.XlsIORenderer.NET<br/>
</td>
</tr>
</tbody>
</table>

**Retired Platforms**

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)
</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
{{'[ASP.NET](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net)' | markdownify}}<br/>
</td>
<td>
Syncfusion.XlsIO.Base<br/>
Syncfusion.Compression.Base<br/>
Syncfusion.Pdf.Base<br/>
Syncfusion.ExcelToPdfConverter.Base
</td>
</tr>
</table>

N> Excel to PDF conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

## Converting Excel Worksheet to Image

For converting an Excel worksheet to image, the following assemblies need to be referenced in your application.

<table>
<tr>
<thead><th>
Platform(s)</th>
<th>
Assembly
</th>
</thead>
</tr>
<tbody>
<tr>
<td>
Windows Forms, WPF and ASP.NET MVC
</td>
<td>
Syncfusion.Compression.Base<br/>
Syncfusion.XlsIO.Base
</td>
</tr>
<tr>
<td>
Windows Forms and WPF (Client Profile) 
</td>
<td>
Syncfusion.XlsIO.ClientProfile<br/>
Syncfusion.Compression.Base
</td>
</tr>
<tr>
<td>
ASP.NET Core, Xamarin, and Blazor (Server-Side)
</td>
<td>
Syncfusion.Compression.Portable<br/>
Syncfusion.XlsIO.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
Syncfusion.XlsIORenderer.Portable
</td>
</tr>
<tr>
<td>
Windows UI Library (WinUI)<br/> .NET Multi-platform App UI (.NET MAUI)
</td>
<td>
Syncfusion.Compression.NET<br/>
Syncfusion.XlsIO.NET<br/>
Syncfusion.SkiaSharpHelper.NET<br/>
Syncfusion.XlsIORenderer.NET<br/>
</td>
</tr>
</tbody>
</table>

**Retired Platforms**

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)
</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
ASP.NET
</td>
<td>
Syncfusion.XlsIO.Base<br/>
Syncfusion.Compression.Base<br/>
</td>
</tr>
</table>

N> Worksheet to image conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

## Converting Excel Chart to Image

For converting an Excel chart to image, the following assemblies need to be referenced in your application.
<table>
<tr>
<th>
Platform(s)
</th>
<th>
Assembly
</th>
</tr>
<tbody>
<tr>
<td>
WPF, Windows Forms and ASP.NET MVC
</td>
<td>
Syncfusion.Compression.Base<br/>
Syncfusion.XlsIO.Base<br/>
Syncfusion.ExcelChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF
</td>
</tr>
<tr>
<td>
ASP.NET Core, Xamarin, and Blazor (Server-Side)
</td>
<td>
Syncfusion.Compression.Portable<br/>
Syncfusion.XlsIO.Portable<br/>
Syncfusion.SkiaSharpHelper.Portable<br/>
Syncfusion.XlsIORenderer.Portable
</td>
</tr>
<tr>
<td>
Windows UI Library (WinUI)<br/> .NET Multi-platform App UI (.NET MAUI)
</td>
<td>
Syncfusion.Compression.NET<br/>
Syncfusion.XlsIO.NET<br/>
Syncfusion.SkiaSharpHelper.NET<br/>
Syncfusion.XlsIORenderer.NET<br/>
</td>
</tr>
</tbody>
</table>

**Retired Platforms**

The following assemblies need to be referenced in your application based on the platform.

<table>
<thead>
<tr>
<th>
Platform(s)
</th>
<th>
Assembly
</th>
</tr>
</thead>
<tr>
<td>
ASP.NET<br/>
</td>
<td>
Syncfusion.Compression.Base<br/>
Syncfusion.XlsIO.Base<br/>
Syncfusion.ExcelChartToImageConverter.WPF<br/>
Syncfusion.SfChart.WPF
</td>
</tr>
</table>

N>  1. Chart to image conversion is supported from .NET Framework 4.0 and .NET Standard 2.0 onwards.

N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.
