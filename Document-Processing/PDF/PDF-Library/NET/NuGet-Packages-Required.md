---
title: NuGet Packages for PDF | Syncfusion
description: This section illustrates the NuGet packages required to use Syncfusion PDF library (Essential PDF) in various platforms and frameworks
platform: document-processing
control: PDF
documentation: UG
---
# NuGet Packages Required for PDF

## Create and modify PDF documents

To work with PDF documents, the following NuGet packages need to be installed in your application.

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms<br/>
Console Application (Targeting .NET Framework)
</td>
<td>
{{'[Syncfusion.Pdf.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.Pdf.Wpf.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.Wpf/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
{{'[Syncfusion.Pdf.AspNet.Mvc5.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
<tr>
<td>
UWP
</td>
<td>
{{'[Syncfusion.Pdf.UWP.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.UWP/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET Core (Targeting NET Core) <br/>
Console Application (Targeting .NET Core) <br/> 
Blazor
</td>
<td>
{{'[Syncfusion.Pdf.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.Net.Core/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
{{'[Syncfusion.Xamarin.Pdf.nupkg](https://www.nuget.org/packages/Syncfusion.Xamarin.Pdf/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Windows UI (WinUI) <br/>
.NET Multi-platform App UI (.NET MAUI)
</td>
<td>
{{'[Syncfusion.Pdf.NET.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.NET/)'| markdownify }}
</td>
</tr>
</table>

### RETIRED PRODUCTS

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        {{'[Syncfusion.Pdf.AspNet.nupkg]( https://www.nuget.org/packages/Syncfusion.Pdf.AspNet/)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

N> 1. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.
N> 2. From the Essential Studio<sup>&reg;</sup> 2018 Volume 3 release(v16.3.0.21), Syncfusion<sup>&reg;</sup> has changed some of the NuGet package names to search and find the required Syncfusion<sup>&reg;</sup> NuGet packages in nuget.org easily based on the control and its platforms.

## Additional NuGet package for advanced PDF processing (.NET Core)

For advanced PDF features like compression, redaction, PDF/A conversion, image extraction, and OCR, include the corresponding Syncfusion<sup>&reg;</sup> imaging package in your .NET Core applications:


<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET Core (Targeting NET Core)
        Console Application (Targeting .NET Core)
        Blazor
      </td>
      <td>
        {{'[Syncfusion.Pdf.Imaging.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core)'| markdownify }}
      </td>
    </tr>
    <tr>
      <td>
        Xamarin
      </td>
      <td>
        {{'[Syncfusion.Xamarin.Pdf.Imaging.nupkg](https://www.nuget.org/packages/Syncfusion.Xamarin.Pdf.Imaging)'| markdownify }}
      </td>
    </tr>
    <tr>
      <td>
        Windows UI (WinUI)
        .NET Multi-platform App UI (.NET MAUI)
      </td>
      <td>
        {{'[Syncfusion.Pdf.Imaging.NET.nupkg](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.NET)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

### Additional NuGet packages required for Linux

The SkiaSharp native assets NuGet package is required as additional dependency in your application created for deploying in Linux environments. There are 2 types of NuGet packages, please choose the correct NuGet package based on your Linux environment. 
 
The following table illustrates the native assets NuGet package with their matching Linux environments

<table>
  <thead>
    <tr>
      <th>Required Native assets NuGet packages</th>
      <th>Applicable Linux environments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{'[SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)'| markdownify }}
      </td>
      <td>
        Common Linux distributions such as Ubuntu, Alpine, CentOS, Debian, Fedora, and RHEL
        Azure App Service
        Google App Engine

      </td>
    </tr>
    <tr>
      <td>
        {{'[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)'| markdownify }}
      </td>
      <td>
        AWS Lambda
        AWS Elastic Beanstalk
      </td>
    </tr>
  </tbody>
</table>

## Converting HTML to PDF

For converting HTML to PDF file, the following NuGet packages need to to be installed in your .NET application from [nuget.org](https://www.nuget.org/).  

N> The HTML to PDF converter library internally uses the Blink rendering engine for the conversion. The binaries will differ for Windows, Linux, Mac, and AWS. So, separate packages are provided based on OS. Include the packages based on your requirement.

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
(.NET Core, .NET 5, .NET 6 and .NET 8) Windows
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Windows.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows/)'| markdownify }}
</td>
</tr>
<tr>
<td>
(.NET Core, .NET 5, .NET 6 and .NET 8) Linux
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Linux.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/)'| markdownify }}
</td>
</tr>
<tr>
<td>
(.NET Core, .NET 5, .NET 6 and .NET 8) Mac
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Mac.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Mac/)'| markdownify }}
</td>
</tr>
<tr>
<td>
(.NET Core, .NET 5, .NET 6 and .NET 8) Aws
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Aws.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Aws/)'| markdownify }}
</td>
</tr>
</table>

Use the following packages for .NET Framework targeted applications. If you are using other Syncfusion libraries or components, use the HTML to PDF converter library with the same platform packages.

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Wpf.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Wpf/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.AspNet.Mvc5.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
</table>

### RETIRED PRODUCTS

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
    {{'[Syncfusion.HtmlToPdfConverter.AspNet.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.AspNet/)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

N> 1. HTML to PDF conversion is not supported in Silverlight, Windows Phone, WinRT, Universal, Xamarin and UWP applications.
N> 2. Starting with v21.1.XX, The package structure is changed if you reference Syncfusion<sup>&reg;</sup> HTML to the PDF library from the NuGet feed. The Blink binaries paths are automatically added and do not need to add it manually. However, if you need to refer the blink binaries paths in your application manually, please use the BlinkPath in BlinkConverterSettings. Get the BlinkBinaries from the NuGet package runtime folder or get the binaries by installing the HTML converter installer.

## PDF OCR

For recognizing text from the scanned PDF document, the following NuGet packages should be installed in your application:

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms,<br/>
Console Application (Targeting .NET Framework)
</td>
<td>
{{'[Syncfusion.PDF.OCR.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.PDF.OCR.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.PDF.OCR.Wpf.nupkg](https://www.nuget.org/packages/Syncfusion.PDF.OCR.WPF/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
{{'[Syncfusion.PDF.OCR.AspNet.Mvc5.nupkg](https://www.nuget.org/packages/Syncfusion.PDF.OCR.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET Core <br/> 
Blazor
</td>
<td>
{{'[Syncfusion.PDF.OCR.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.PDF.OCR.Net.Core/)'| markdownify }}
</td>
</tr>
</table>

### RETIRED PRODUCTS

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        {{'[Syncfusion.PDF.OCR.AspNet.nupkg](https://www.nuget.org/packages/Syncfusion.PDF.OCR.AspNet/)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

## Converting Word to PDF

For converting Word document into PDF, the following NuGet packages need to be installed in your application.

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms<br/>
Console Application (Targeting .NET Framework)
</td>
<td>
{{'[Syncfusion.DocToPdfConverter.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.DocToPdfConverter.Wpf.nupkg](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.Wpf/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
{{'[Syncfusion.DocToPdfConverter.AspNet.Mvc5.nupkg](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET Core<br/>
Console Application (Targeting .NET Core) <br/> 
Blazor
</td>
<td>
{{'[Syncfusion.DocIORenderer.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
{{'[Syncfusion.Xamarin.DocIORenderer.nupkg](https://www.nuget.org/packages/Syncfusion.Xamarin.DocIORenderer/)'| markdownify }}
</td>
</tr>
</table>

### RETIRED PRODUCTS

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        {{'[Syncfusion.DocToPdfConverter.AspNet.nupkg](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.AspNet/)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

## Converting Excel document to PDF

For converting Excel document into PDF, the following NuGet packages need to be installed in your application.

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms,<br/>
Console Application (Targeting .NET Framework)
</td>
<td>
{{'[Syncfusion.ExcelToPDFConverter.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.ExcelToPDFConverter.Wpf.nupkg](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.Wpf/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
{{'[Syncfusion.ExcelToPDFConverter.AspNet.Mvc5.nupkg](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
<tr>
<td>
UWP,<br/> 
ASP.NET Core (Targeting .NET Core),<br/>
Console Application (Targeting .NET Core)
</td>
<td>
{{'[Syncfusion.XlsIORenderer.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
{{'[Syncfusion.Xamarin.XlsIORenderer.nupkg](https://www.nuget.org/packages/Syncfusion.Xamarin.XlsIORenderer/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Blazor (Server-App)
</td>
<td>
{{'[Syncfusion.XlsIORenderer.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.XlsIORenderer.Net.Core/)'| markdownify }}
</td>
</tr>
</table>

### RETIRED PRODUCTS

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        {{'[Syncfusion.ExcelToPdfConverter.AspNet.nupkg](https://www.nuget.org/packages/Syncfusion.ExcelToPdfConverter.AspNet/)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

## Converting Presentation document to PDF

For converting PowerPoint Presentation to PDF, the following NuGet packages need to be installed in your application. 

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>NuGet Package</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms<br/>
Console Application (Targeting .NET Framework)
</td>
<td>
{{'[Syncfusion.PresentationToPdfConverter.WinForms.nupkg](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.WinForms/)'| markdownify }}
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
{{'[Syncfusion.PresentationToPdfConverter.Wpf.nupkg](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.Wpf/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
{{'[Syncfusion.PresentationToPdfConverter.AspNet.Mvc5.nupkg](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.AspNet.Mvc5/)'| markdownify }}
</td>
</tr>
<tr>
<td>
ASP.NET Core (Targeting .NET Core)<br/>
Console Application (Targeting .NET Core) <br/> 
Blazor
</td>
<td>
{{'[Syncfusion.PresentationRenderer.Net.Core.nupkg](https://www.nuget.org/packages/Syncfusion.PresentationRenderer.Net.Core/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
{{'[Syncfusion.Xamarin.PresentationRenderer.nupkg](https://www.nuget.org/packages/Syncfusion.Xamarin.PresentationRenderer/)'| markdownify }}
</td>
</tr>
</table>

### RETIRED PRODUCTS

<table>
  <thead>
    <tr>
      <th>Platform(s)</th>
      <th>NuGet Package</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        ASP.NET
      </td>
      <td>
        {{'[Syncfusion.PresentationToPdfConverter.AspNet.nupkg](https://www.nuget.org/packages/Syncfusion.PresentationToPdfConverter.AspNet/)'| markdownify }}
      </td>
    </tr>
  </tbody>
</table>

## NuGet Package Installation and Uninstallation

To use NuGet package in your project, please refer the NuGet Package [Installation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-install-and-configuration) and [Uninstallation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process) sections.

PDF NuGet packages can be installed and uninstalled using Package Manager Console. In Visual Studio, select **Tools > NuGet Package Manager > Package Manager Console** and execute the below commands in respective platforms.

N> Syncfusion<sup>&reg;</sup> components are available in [nuget.org](https://www.nuget.org/)

<table>
<tr>
<thead>
<th><b>Platform(s)</b></th>
<th><b>Install</b></th>
<th><b>UnInstall</b></th>
</thead>
</tr>
<tr>
<td>
Windows Forms
</td>
<td>
Install-package Syncfusion.Pdf.WinForms
</td>
<td>
Uninstall-package Syncfusion.Pdf.WinForms -RemoveDependencies 
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
Install-package Syncfusion.Pdf.Wpf 
</td>
<td>
Uninstall-package Syncfusion.Pdf.Wpf -RemoveDependencies 
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
Install-package Syncfusion.Pdf.AspNet.Mvc5 
</td>
<td>
Uninstall-package Syncfusion.Pdf.AspNet.Mvc5 -RemoveDependencies 
</td>
</tr>
<tr>
<td>
UWP
</td>
<td>
Install-package Syncfusion.Pdf.UWP 
</td>
<td>
Uninstall-package Syncfusion.Pdf.UWP 
</td>
</tr>
<tr>
<td>
ASP.NET Core
</td>
<td>
Install-package Syncfusion.Pdf.Net.Core
</td>
<td>
Uninstall-package Syncfusion.Pdf.Net.Core –RemoveDependencies
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
Install-package Syncfusion.Xamarin.Pdf 
</td>
<td>
Uninstall-package Syncfusion.Xamarin.Pdf -RemoveDependencies 
</td>
</tr>
</table>