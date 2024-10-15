---
title: Assemblies Required for PDF | Syncfusion
description: This section explains about the Syncfusion assemblies required to work with PDF file, and conversion such as HTML to PDF, Word to PDF, Excel to PDF, PPTX to PDF
platform: document-processing
control: PDF
documentation: UG
keywords: Assemblies
---
# Assemblies Required to work with PDF 

The following assemblies need to be referenced in your application based on the platform.
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
        [WPF](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-wpf), 
        [Windows Forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-windows-forms) and 
        [ASP.NET MVC](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-mvc)
      </td>
      <td>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        [Windows Forms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-windows-forms) and 
        [WPF (Client Profile)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-wpf)
      </td>
      <td>
        Syncfusion.Pdf.ClientProfile<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        [Universal Windows Platform](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-uwp)
      </td>
      <td>
        Syncfusion.Pdf.UWP
      </td>
    </tr>
    <tr>
      <td>
        [Xamarin](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-xamarin)
      </td>
      <td>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.Compression.Portable
      </td>
    </tr>
    <tr>
      <td>
        [Blazor](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-document-in-blazor), 
        [.NET Core](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-core), and 
        [.NET Platforms](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-mvc)
      </td>
      <td>
        Syncfusion.Compression.Portable.dll<br/>
        Syncfusion.Pdf.Portable.dll
      </td>
    </tr>
    <tr>
      <td>
        [Windows UI library (WinUI)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-winui), 
        [.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-maui)
      </td>
      <td>
        Syncfusion.Pdf.NET.dll<br/>
        Syncfusion.Compression.NET.dll
      </td>
    </tr>
  </tbody>
</table>


### RETIRED PRODUCTS

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
        ASP.NET 
      </td>
      <td>
         Syncfusion.Pdf.Base<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        [ASP.NET (Classic)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-web-forms)
      </td>
      <td>
        Syncfusion.Pdf.Web<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
    <tr>
      <td>
        [ASP.NET MVC (Classic)](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/create-pdf-file-in-asp-net-mvc)
      </td>
      <td>
        Syncfusion.Pdf.MVC<br/>
        Syncfusion.Compression.Base
      </td>
    </tr>
  </tbody>
</table>

N> The .NET Standard assemblies can be found in the following Essential Studio installation path
{Installed directory}\Syncfusion\Essential Studio\{Product version}\precompiledassemblies\{Product version}\.NET Standard 1.2\
N> Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.

## Converting HTML to PDF

Get the following required assemblies by downloading the HTML converter installer. Download and install the HTML converter for [Windows](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation#windows), [Linux](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation#linux), and [Mac](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation#mac) respectively. Please refer to the [advanced installation](https://help.syncfusion.com/document-processing/pdf/conversions/html-to-pdf/net/advanced-installation) steps for more details. 

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

### RETIRED PRODUCTS

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


N> HTML to PDF conversion is not supported in Silverlight, Windows Phone, WinRT, Universal, Xamarin and UWP applications

## Converting Word document to PDF

For converting a Word document to PDF, the following assemblies need to be referenced in your application

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms and ASP.NET MVC</td>
      <td>
        Syncfusion.DocIO.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.DocToPdfConverter.Base
      </td>
    </tr>
    <tr>
      <td>Windows Forms and WPF (Client Profile)</td>
      <td>
        Syncfusion.DocIO.ClientProfile<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.ClientProfile<br/>
        Syncfusion.DocToPdfConverter.ClientProfile
      </td>
    </tr>
    <tr>
      <td>ASP.NET Core, Xamarin and Blazor</td>
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

### RETIRED PRODUCTS

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
  </tbody>
</table>


N> 1. Word to PDF conversion is supported in ASP.NET Core and Xamarin from 2018 Volume 1 release (v16.1.0.24) using SkiaSharp graphics library.
N> 2. Word to PDF conversion is not supported in Silverlight, Windows Phone, WinRT, Universal applications.
N> 3. Starting with v17.1.0.x, if you reference "Syncfusion.DocIORenderer", you also have to add "Syncfusion.SkiaSharpHelper" assembly reference in your projects to perform Word to PDF conversion.

## Converting Excel document to PDF

For converting an Excel document to PDF, the following assemblies need to be referenced in your application.

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms and ASP.NET MVC</td>
      <td>
        Syncfusion.XlsIO.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.ExcelToPDFConverter.Base
      </td>
    </tr>
    <tr>
      <td>Windows Forms and WPF (Client Profile)</td>
      <td>
        Syncfusion.XlsIO.ClientProfile<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.Pdf.ClientProfile<br/>
        Syncfusion.ExcelToPDFConverter.ClientProfile
      </td>
    </tr>
    <tr>
      <td>UWP, .NET Core, Xamarin, and Blazor (Server-Side)</td>
      <td>
        Syncfusion.Compression.Portable<br/>
        Syncfusion.XlsIO.Portable<br/>
        Syncfusion.Pdf.Portable<br/>
        Syncfusion.SkiaSharpHelper.Portable<br/>
        Syncfusion.XlsIORenderer.Portable
      </td>
    </tr>
    <tr>
      <td>WinUI and .NET MAUI</td>
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

### RETIRED PRODUCTS

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
  </tbody>
</table>

N> Excel to PDF conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

## Converting PowerPoint Presentation to PDF

For converting a PowerPoint Presentation to PDF, the following assemblies needed to be referenced in your application

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>Assembly</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>WPF, Windows Forms and ASP.NET MVC</td>
      <td>
        Syncfusion.Presentation.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.PresentationToPDFConverter.Base
      </td>
    </tr>
    <tr>
      <td>ASP.NET Core, Xamarin, and Blazor</td>
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
      <td>Windows UI Library (WinUI) and .NET Multi-platform App UI (.NET MAUI)</td>
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

The following assemblies are required to be referred in addition to the above mentioned assemblies for converting the chart present in the PowerPoint Presentation into PDF.

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

### RETIRED PRODUCTS

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
        ASP.NET (Classic)
      </td>
      <td>
             Syncfusion.Presentation.Base<br/>
        Syncfusion.Compression.Base<br/>
        Syncfusion.OfficeChart.Base<br/>
        Syncfusion.Pdf.Base<br/>
        Syncfusion.PresentationToPDFConverter.Base
      </td>
    </tr>
  </tbody>
</table>

N> The "Syncfusion.OfficeChartToImageConverter.WPF" assembly is supported from .NET Framework 4.0 onwards.

