---
title: Assemblies Required for PDF | Syncfusion
description: This section explains about the Syncfusion assemblies required to work with PDF file, and conversion such as HTML to PDF, Word to PDF, Excel to PDF, PPTX to PDF
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---
# Assemblies Required to Work with PDF

The following assemblies must be referenced in your application based on the target platform. Syncfusion<sup>&reg;</sup> provides platform-specific assemblies for the .NET PDF library that can be referenced either through the Essential Studio<sup>&reg;</sup> installer or through [NuGet packages](https://www.nuget.org/packages?q=syncfusion).

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{'[WPF](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-wpf)'| markdownify }},
        {{'[Windows Forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-windows-forms)'| markdownify }} and {{'[ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-mvc)'| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        {{'[Universal Windows Platform (UWP)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-uwp)'| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.UWP
      </td>
    </tr>
    <tr>
      <td>
        {{'[Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-blazor)'| markdownify }},
        {{'[.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-core)'| markdownify }}
        and {{'[.NET Platforms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-mvc)'| markdownify }}
      </td>
      <td>
        Syncfusion.Compression.Portable.dll<br/>
        Syncfusion.Pdf.Portable.dll
      </td>
    </tr>
    <tr>
      <td>
        {{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-winui)'| markdownify }},
        {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-maui)'| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.NET.dll<br/>
        Syncfusion.Compression.NET.dll
      </td>
    </tr>
  </tbody>
</table>

**RETIRED PRODUCTS**

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WinRT (Windows Store applications)</td>
      <td>Syncfusion.Pdf.winrt</td>
    </tr>
    <tr>
      <td>Windows Phone 8</td>
      <td>
        Syncfusion.Pdf.WP8<br/>
        Syncfusion.Compression.WP8
      </td>
    </tr>
    <tr>
      <td>Windows Phone 8.1 Silverlight</td>
      <td>
        Syncfusion.Pdf.WPSilverlight<br/>
        Syncfusion.Compression.WPSilverlight
      </td>
    </tr>
    <tr>
      <td>Windows Phone 8.1 WinRT</td>
      <td>
        Syncfusion.Pdf.WP<br/>
        Syncfusion.Compression.WP
      </td>
    </tr>
    <tr>
      <td>
        {{'[ASP.NET](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-web-forms) '| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        {{'[ASP.NET (Classic)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-web-forms)'| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.Web<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        {{'[ASP.NET MVC (Classic)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-mvc)'| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.MVC<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        {{'[Xamarin](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-xamarin)'| markdownify }}
      </td>
      <td>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.Compression.Portable
      </td>
    </tr>
  </tbody>
</table>

N> 1. The .NET Standard assemblies are available at the following Essential Studio<sup>&reg;</sup> installation path:
{Installed directory}\Syncfusion<sup>&reg;</sup>\Essential Studio{Product version}\precompiledassemblies\{Product version}\
N> 2. Syncfusion<sup>&reg;</sup> components are also available on [nuget.org](https://www.nuget.org/packages?q=syncfusion).
N> 3. Starting with **v16.2.0.x**, if you reference Syncfusion<sup>&reg;</sup> assemblies from the trial setup or from the NuGet feed, you must also include a license key in your projects. Refer to the [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) to learn how to register the Syncfusion<sup>&reg;</sup> license key in your application.
N> 4. For .NET Core, .NET 5+, .NET MAUI, WinUI, and Blazor, Syncfusion recommends using the NuGet packages for easier version management and dependency resolution.

## Converting HTML to PDF

To convert HTML to PDF, download and install the HTML converter for [Windows](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation#windows), [Linux](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation#linux), and [Mac](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation#mac) respectively. For more details, refer to the [advanced installation](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation) steps.

<table>
  <thead>
    <tr>
      <th>Platforms</th>
      <th>Assemblies</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        WinForms<br/>
        WPF<br/>
        ASP.NET MVC
      </td>
      <td>
        <ul>
          <li>Syncfusion.Compression.Base.dll</li>
          <li>Syncfusion.Pdf.Base.dll</li>
          <li>Syncfusion.HtmlConverter.Base.dll</li>
          <li>Newtonsoft.Json package (v13.0.1 or above)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        .NET/.NET Core<br/>
        Blazor
      </td>
      <td>
        <ul>
          <li>Syncfusion.Compression.Portable.dll</li>
          <li>Syncfusion.Pdf.Portable.dll</li>
          <li>Syncfusion.HtmlConverter.Portable.dll</li>
          <li>Newtonsoft.Json package (v13.0.1 or above)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

**RETIRED PRODUCTS**

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        <ul>
          <li>Syncfusion.Compression.Base.dll</li>
          <li>Syncfusion.Pdf.Base.dll</li>
          <li>Syncfusion.HtmlConverter.Base.dll</li>
          <li>Newtonsoft.Json package (v13.0.1 or above)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

N> HTML to PDF conversion is **not supported** in Xamarin, .NET MAUI, WinUI, and UWP applications.

## Converting Word Document to PDF

To convert a Word document to PDF, the following assemblies must be referenced in your application in addition to the platform-specific PDF assemblies listed above.

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms, and ASP.NET MVC</td>
      <td>
        Syncfusion.DocIO.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.DocToPdfConverter.Base
      </td>
    </tr>
    <tr>
      <td>ASP.NET Core and Blazor</td>
      <td>
        Syncfusion.DocIO.Portable<br/>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.OfficeChart.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.DocIORenderer.Portable<br/>
        SkiaSharp.HarfBuzz<br/>
        Syncfusion.SkiaSharpHelper.Portable
      </td>
    </tr>
    <tr>
      <td>
        Windows UI Library (WinUI)<br/>
        .NET Multi-platform App UI (.NET MAUI)
      </td>
      <td>
        Syncfusion.DocIO.NET<br/>
        Syncfusion.Compression.NET<br/>
        Syncfusion.OfficeChart.NET<br/>
        Syncfusion.Pdf.NET<br/>
        Syncfusion.DocIORenderer.NET<br/>
        SkiaSharp<br/>
        Syncfusion.SkiaSharpHelper.NET
      </td>
    </tr>
  </tbody>
</table>

**RETIRED PRODUCTS**

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        Syncfusion.DocIO.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.DocToPdfConverter.Base
      </td>
    </tr>
    <tr>
      <td>
        Xamarin
      </td>
      <td>
        Syncfusion.DocIO.Portable<br/>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.OfficeChart.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.DocIORenderer.Portable<br/>
        SkiaSharp.HarfBuzz<br/>
        Syncfusion.SkiaSharpHelper.Portable
      </td>
    </tr>
  </tbody>
</table>

N> 1. Word to PDF conversion is supported in ASP.NET Core and Xamarin starting with the **2018 Volume 1 release (v16.1.0.24)** using the SkiaSharp graphics library.
N> 2. Word to PDF conversion is **not supported** in Silverlight, Windows Phone, WinRT, and Universal applications.
N> 3. Starting with **v17.1.0.x**, if you reference **Syncfusion.DocIORenderer**, you must also add the **Syncfusion.SkiaSharpHelper** assembly reference in your projects to perform Word to PDF conversion.

## Converting Excel Document to PDF

To convert an Excel document to PDF, the following assemblies must be referenced in your application in addition to the platform-specific PDF assemblies listed above.

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms, and ASP.NET MVC</td>
      <td>
        Syncfusion.XlsIO.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.ExcelToPDFConverter.Base
      </td>
    </tr>
    <tr>
      <td>UWP, .NET Core, and Blazor (Server-Side)</td>
      <td>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.XlsIO.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.SkiaSharpHelper.Portable<br/>
        Syncfusion.XlsIORenderer.Portable
      </td>
    </tr>
    <tr>
      <td>
        WinUI and .NET MAUI
      </td>
      <td>
        Syncfusion.Compression.NET<br/>
        Syncfusion.XlsIO.NET<br/>
        Syncfusion.Pdf.NET<br/>
        Syncfusion.SkiaSharpHelper.NET<br/>
        Syncfusion.XlsIORenderer.NET
      </td>
    </tr>
  </tbody>
</table>

**RETIRED PRODUCTS**

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
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
        Xamarin
      </td>
      <td>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.XlsIO.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.SkiaSharpHelper.Portable<br/>
        Syncfusion.XlsIORenderer.Portable
      </td>
    </tr>
  </tbody>
</table>

N> Excel to PDF conversion is **not supported** in Silverlight, Windows Phone, WinRT, and Universal applications.

## Converting PowerPoint Presentation to PDF

To convert a PowerPoint Presentation to PDF, the following assemblies must be referenced in your application in addition to the platform-specific PDF assemblies listed above.

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms, and ASP.NET MVC</td>
      <td>
        Syncfusion.Presentation.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.PresentationToPDFConverter.Base
      </td>
    </tr>
    <tr>
      <td>ASP.NET Core and Blazor</td>
      <td>
        Syncfusion.Presentation.Portable<br/>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.OfficeChart.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.PresentationRenderer.Portable<br/>
        Syncfusion.SkiaSharpHelper.Portable<br/>
        SkiaSharp
      </td>
    </tr>
    <tr>
      <td>
        Windows UI Library (WinUI) and .NET Multi-platform App UI (.NET MAUI)
      </td>
      <td>
        Syncfusion.Presentation.NET<br/>
        Syncfusion.Compression.NET<br/>
        Syncfusion.OfficeChart.NET<br/>
        Syncfusion.PresentationRenderer.NET<br/>
        Syncfusion.SkiaSharpHelper.NET<br/>
        SkiaSharp
      </td>
    </tr>
  </tbody>
</table>

The following assemblies are required in addition to those listed above to convert charts present in a PowerPoint Presentation to PDF.

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms, ASP.NET, and ASP.NET MVC</td>
      <td>
        Syncfusion.OfficeChartToImageConverter.WPF<br/>
        Syncfusion.SfChart.WPF
      </td>
    </tr>
  </tbody>
</table>

**RETIRED PRODUCTS**

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        Syncfusion.Presentation.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.PresentationToPDFConverter.Base
      </td>
    </tr>
    <tr>
      <td>
        Xamarin
      </td>
      <td>
        Syncfusion.Presentation.Portable<br/>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.OfficeChart.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.PresentationRenderer.Portable<br/>
        Syncfusion.SkiaSharpHelper.Portable<br/>
        SkiaSharp
      </td>
    </tr>
  </tbody>
</table>