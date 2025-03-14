---
title: Assemblies required to convert Word to PDF | Syncfusion
description: Learn about the assemblies required to convert Word document to PDF using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Assemblies required to convert Word document to PDF

## Converting Word document to PDF

For converting a Word document to PDF, the following assemblies need to be referenced in your application
<table>
<thead>
<tr>
<th>
Platform(s)<br/></th><th>
Assembly<br/></th></tr></thead>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-wpf)' | markdownify}}, {{'[Windows Forms](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-window-forms)' | markdownify}}, {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-mvc)' | markdownify}}<br/></td><td>
Syncfusion.DocIO.Base<br/>Syncfusion.Compression.Base<br/>Syncfusion.OfficeChart.Base<br/>Syncfusion.Pdf.Base<br/>Syncfusion.DocToPdfConverter.Base<br/></td></tr>
<tr>
<td>
{{'[Windows Forms](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-window-forms)' | markdownify}} and {{'[WPF (Client Profile)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-wpf)' | markdownify}}<br/></td><td>
Syncfusion.DocIO.ClientProfile<br/>Syncfusion.Compression.Base<br/>Syncfusion.OfficeChart.Base<br/>Syncfusion.Pdf.ClientProfile<br/>Syncfusion.DocToPdfConverter.ClientProfile<br/></td></tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-core)' | markdownify}}, {{'[Xamarin](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-xamarin)' | markdownify}} and {{'[Blazor](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-blazor)' | markdownify}}<br/></td><td>
Syncfusion.DocIO.Portable<br/>Syncfusion.Compression.Portable<br/>Syncfusion.OfficeChart.Portable<br/>Syncfusion.Pdf.Portable<br/>Syncfusion.DocIORenderer.Portable<br/>Syncfusion.Pdf.Imaging.Portable<br/>Syncfusion.MetafileRenderer.NET<br/>SkiaSharp.HarfBuzz<br/>Syncfusion.SkiaSharpHelper.Portable</td></tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-winui)' | markdownify}}<br/> {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-maui)' | markdownify}}<br/>
</td><td>
Syncfusion.DocIO.NET<br/>Syncfusion.Compression.NET<br/>Syncfusion.OfficeChart.NET<br/>Syncfusion.Pdf.NET<br/>Syncfusion.DocIORenderer.NET<br/>Syncfusion.Pdf.Imaging.NET<br/>Syncfusion.MetafileRenderer.NET<br/> SkiaSharp<br/>Syncfusion.SkiaSharpHelper.NET</td></tr>
</table>

T> Switch to NuGet packages for a seamless experience:
T> * Get frequent bug fixes every week.
T> * Upgrade quickly with no manual effort.
T> Note: To avoid trail watermark when using NuGet packages, it is recommended to register license key in application. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.
T>
T> Refer [here](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/nuget-packages-required-word-to-pdf) to know more about NuGet packages required.

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
{{'[ASP.NET](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net)' | markdownify}}<br/></td><td>
Syncfusion.DocIO.Base<br/>Syncfusion.Compression.Base<br/>Syncfusion.OfficeChart.Base<br/>Syncfusion.Pdf.Base<br/>Syncfusion.DocToPdfConverter.Base<br/></td></tr>
</table>

N> 1. Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your application to use our components.
N> 2. Syncfusion components are available in [nuget.org](https://www.nuget.org/)
N> 3. Starting with v15.3.0.x, a new Visual Studio add-in "Syncfusion Reference Manager" for WPF, and Windows Forms platforms is included. Using this add-in, you can easily add the necessary reference assemblies to your projects in an automated way. Please refer to this [link](https://help.syncfusion.com/extension/syncfusion-reference-manager/overview) for more information.
N> 4. Word to PDF conversion is supported in ASP.NET Core and Xamarin from 2018 Volume 1 release (v16.1.0.24) using SkiaSharp graphics library.
N> 5. Word to PDF conversion is not supported in Silverlight, Windows Phone, WinRT, Universal applications.
N> 6. Starting with v17.1.0.x, if you reference "Syncfusion.DocIORenderer", you also have to add "Syncfusion.SkiaSharpHelper" assembly reference in your projects to perform Word to PDF conversion.
N> 7. Starting with the v24.1.x, if you reference "Syncfusion.DocIORenderer", you have to add the "Syncfusion.Pdf.Imaging" assembly reference in your projects to perform Word to PDF conversion.
N> 8. Starting with the v27.1.x, if you reference "Syncfusion.DocIORenderer", you have to add the "Syncfusion.MetafileRenderer" assembly reference in your projects to perform Word to PDF conversion.

## Converting Charts

The following assemblies are required to be referred in addition to the above mentioned assemblies for converting the chart present in the Word document into PDF.
<table>
<thead>
<tr>
<th>
Platform(s)<br/></th><th>
Assembly<br/></th></tr></thead>
<tr>
<td>
WPF, Windows Forms, ASP.NET MVC<br/></td><td>
Syncfusion.OfficeChartToImageConverter.WPF<br/>Syncfusion.SfChart.WPF<br/></td></tr>
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
ASP.NET<br/></td><td>
Syncfusion.OfficeChartToImageConverter.WPF<br/>Syncfusion.SfChart.WPF<br/></td></tr>
</table>