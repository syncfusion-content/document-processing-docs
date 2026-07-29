---
title: Migrate from .NET Framework to .NET Core | Presentation | Syncfusion
description: This section illustrates migrating Syncfusion<sup>&reg;</sup> .NET PowerPoint (Presentation) library from .NET Framework to .NET Core.
platform: document-processing
control: Presentation
documentation: UG
---
# Migrate Presentation library from .NET Framework to .NET Core
In this section, we will review the changes required when migrating the Syncfusion<sup>&reg;</sup> .NET PowerPoint (Presentation) library from .NET Framework to .NET Core.

## NuGet Packages

<table>
<tr>
<thead>
<th>
{{'**Packages targeting .NET Framework**'| markdownify }}
</th>
<th>
{{'**Packages targeting .NET Standard 2.0/.NET Core**'| markdownify }}
</th>
</thead>
</tr>
<tr>
<td>
{{'[Syncfusion.Presentation.WinForms](https://www.nuget.org/packages/Syncfusion.Presentation.WinForms/)'| markdownify }}<br/>
{{'[Syncfusion.Presentation.Wpf](https://www.nuget.org/packages/Syncfusion.Presentation.Wpf/)'| markdownify }}<br/>
{{'[Syncfusion.Presentation.AspNet](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet/)'| markdownify }}<br/>
{{'[Syncfusion.Presentation.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet.Mvc5/)'| markdownify }}<br/>
{{'[Syncfusion.Presentation.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet.Mvc4/)'| markdownify }}
</td>
<td>
{{'[Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core/)'| markdownify }}
</td>
</tr>
<tr>
<td>
{{'[Syncfusion.PresentationToPDFConverter.WinForms](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.WinForms/)'| markdownify }}<br/>
{{'[Syncfusion.PresentationToPDFConverter.Wpf](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.Wpf/)'| markdownify }}<br/>
{{'[Syncfusion.PresentationToPDFConverter.AspNet](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.AspNet/)'| markdownify }}<br/>
{{'[Syncfusion.PresentationToPDFConverter.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.AspNet.Mvc4/)'| markdownify }}<br/>
{{'[Syncfusion.PresentationToPDFConverter.AspNet.Mvc5](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.AspNet.Mvc5/)'| markdownify }}
</td>
<td>
{{'[Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core/)'| markdownify }} (required for PowerPoint-to-PDF and PowerPoint-to-Image conversion)
</td>
</tr>
</table>

## Namespace changes

<table>
<tr>
<thead>
<th>
{{'**.NET Framework**'| markdownify }}
</th>
<th>
{{'**Alternate Namespace in .NET Core**'| markdownify }}
</th>
</thead>
</tr>
<tr>
<td>
Syncfusion.PresentationToPdfConverter
</td>
<td>
Syncfusion.PresentationRenderer
</td>
</tr>
<tr>
<td>
Syncfusion.OfficeChartToImageConverter
</td>
<td>
Not applicable - Classes are moved within the Syncfusion.PresentationRenderer namespace.
</td>
</tr>
</table>

## Type changes

<table>
<tr>
<thead>
<th>
{{'**Missing Types**'| markdownify }}
</th>
<th>
{{'**Alternate Types in .NET Core**'| markdownify }}
</th>
</thead>
</tr>
<tr>
<td>
{{'[ChartToImageConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.OfficeChartToImageConverter.ChartToImageConverter.html)'| markdownify }}
</td>
<td>
Not applicable - It is handled internally.
</td>
</tr>
</table>

## Property changes

<table>
<tr>
<thead>
<th>
{{'**Missing properties**'| markdownify }}
</th>
<th>
{{'**Alternate properties in .NET Core**'| markdownify }}
</th>
</thead>
</tr>
<tr>
<td>
{{'[IPresentation.ChartToImageConverter](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_ChartToImageConverter)'| markdownify }}
</td>
<td>
Not applicable - It is handled internally.
</td>
</tr>
<tr>
<td>
{{'[PresentationToPdfConverterSettings.EnablePortableRendering](https://help.syncfusion.com/cr/document-processing/Syncfusion.PresentationToPdfConverter.PresentationToPdfConverterSettings.html#Syncfusion_PresentationToPdfConverter_PresentationToPdfConverterSettings_EnablePortableRendering)'| markdownify }}
</td>
<td>
No code change required. Equivalent portable rendering is now the default behavior in .NET Core and is handled internally.
</td>
</tr>
<tr>
<td>
{{'[PresentationToPdfConverterSettings.RecreateNestedMetafile](https://help.syncfusion.com/cr/document-processing/Syncfusion.PresentationToPdfConverter.PresentationToPdfConverterSettings.html#Syncfusion_PresentationToPdfConverter_PresentationToPdfConverterSettings_RecreateNestedMetafile)'| markdownify }}
</td>
<td>
Not supported due to .NET Core limitations. Nested metafile recreation has no workaround in .NET Core; flatten metafiles before conversion if required.
</td>
</tr>
<tr>
<td>
{{'[ITextBody.FitTextOption](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.ITextBody.html#Syncfusion_Presentation_ITextBody_FitTextOption)'| markdownify }}
</td>
<td>
Not supported in the current .NET Core release.
</td>
</tr>
</table>

## Method changes:

<table>
<tr>
<thead>
<th>
{{'**Missing methods**'| markdownify }}
</th>
<th>
{{'**Alternate methods in .NET Core**'| markdownify }}
</th>
</thead>
</tr>
<tr>
<td>
{{'[Presentation.Open(String)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Open_System_String_)'| markdownify }}
</td>
<td>
The path-based overload remains available. Alternatively, open a file as a stream using {{'[Presentation.Open(Stream)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Open_System_IO_Stream)'| markdownify }}.
</td>
</tr>
<tr>
<td>
{{'[Presentation.Save(String)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Save_System_String_)'| markdownify }}
</td>
<td>
The path-based overload remains available. Alternatively, save to a stream using {{'[Presentation.Save(Stream)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.Presentation.html#Syncfusion_Presentation_Presentation_Save_System_IO_Stream_)'| markdownify }}.
</td>
</tr>
<tr>
<td>
{{'[Presentation.Save(string fileName, FormatType formatType, HttpResponse response)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentation.html#Syncfusion_Presentation_IPresentation_Save_System_String_Syncfusion_Presentation_FormatType_System_Web_HttpResponse_)'| markdownify }}
</td>
<td>
You can save the document as stream and then download from browser.
</td>
</tr>
<tr>
<td>
{{'[IPresentationChart.SaveAsImage(Stream imageAsStream)](https://help.syncfusion.com/cr/document-processing/Syncfusion.Presentation.IPresentationChart.html#Syncfusion_Presentation_IPresentationChart_SaveAsImage_System_IO_Stream_)'| markdownify }}
</td>
<td>
{{'[IPresentationRenderer.ConvertToImage(IPresentationChart chart, Stream outputStream)](https://help.syncfusion.com/cr/document-processing/Syncfusion.PresentationRenderer.IPresentationRenderer.html)'| markdownify }}
</td>
</tr>
</table>

## Advantages
- Cross-platform support: Windows, macOS, Linux, Docker, Azure, and AWS environments.
- Full feature parity with the .NET Framework library for core PowerPoint creation, editing, and conversion scenarios.
- A single package (`Syncfusion.Presentation.Net.Core`) replaces the multiple platform-specific packages required on .NET Framework.

## Known limitations
- **EMF and WMF images are not supported in .NET Core.** Replace any embedded EMF/WMF images with PNG or JPEG before conversion.
- For a full list of platform-level limitations (chart types, OLE objects, and so on), see the [Syncfusion PowerPoint library limitations](https://help.syncfusion.com/document-processing/powerpoint/overview#limitations) page.

## Notable changes
- **Graphics library:** In .NET Framework, the library uses `System.Drawing.Common` for text measuring and graphics operations. In .NET Core, the library uses the [SkiaSharp](https://learn.microsoft.com/dotnet/maui/graphics/skia) graphics library to provide the same behavior. When deploying to Linux, ensure the SkiaSharp native assets for the target runtime are available; see the [SkiaSharp platform notes](https://learn.microsoft.com/dotnet/maui/graphics/skia#platform-specific-notes).
- **Separate renderer package:** The following conversion features rely on SkiaSharp and are delivered through a separate package, [Syncfusion.PresentationRenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core):
  - [PowerPoint Presentation to PDF](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/presentation-to-pdf)
  - [PowerPoint Presentation to Image](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/presentation-to-image)
- **Font handling:** During PowerPoint-to-PDF or PowerPoint-to-Image conversion, if you encounter font-related issues (such as missing fonts in the environment), pass the fonts as streams using the [font substitution approach](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-pdf/net/presentation-to-pdf#font-substitution-for-unavailable-fonts).

N> If you want to migrate without any code changes from the [Syncfusion.Presentation.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet.Mvc4) NuGet in an application targeting .NET Framework, you can use any of the following packages:
N> * [Syncfusion.Presentation.WinForms](https://www.nuget.org/packages/Syncfusion.Presentation.WinForms)
N> * [Syncfusion.Presentation.Wpf](https://www.nuget.org/packages/Syncfusion.Presentation.Wpf)
N> * [Syncfusion.Presentation.AspNet.Mvc4](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet.Mvc4)
N>
N> *This approach is not recommended for new development.*

## See also
- [NuGet Packages Required](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required)
- [Getting Started with Presentation library](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/getting-started)
- [Create PowerPoint in ASP.NET Core](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-read-edit-powerpoint-files-in-asp-net-core-c-sharp)
