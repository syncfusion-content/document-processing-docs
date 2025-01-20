---
title: Execl to PDF Assemblies Required | Syncfusion
description: Briefs the assemblies required to convert excel document to PDF for various platforms and frameworks.
platform: document-processing
control: XlsIO
documentation: UG
---

# Assemblies Required for Excel to PDF conversion

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
N> 1. Excel to PDF conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

N> 3. Syncfusion<sup>&reg;</sup> components are available in nuget.org


