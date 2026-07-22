---
title: NuGet Packages Required to Convert Word to PDF | Syncfusion
description: Learn the NuGet packages required to Convert Word document to PDF using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# NuGet Packages Required to Convert Word to PDF

## Converting a Word Document to PDF

For converting a Word document into PDF, the following NuGet packages need to be installed in your application.

<table>
<thead>
<tr>
<th width="20%">
Platform(s)
</th>
<th width="40%">
Package name
</th>
<th width="40%">
Package manager console command
</th>
</tr>
</thead>
<tbody>
<tr>
<td>
{{'[Windows Forms](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-window-forms)'| Â markdownify }}, Console Application (Targeting .NET Framework)
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.WinForms">Syncfusion.DocToPdfConverter.WinForms</a>
</td>
<td>
Install-Package Syncfusion.DocToPdfConverter.WinForms
</td>
</tr>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-wpf)'| Â markdownify }}
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.Wpf">Syncfusion.DocToPdfConverter.Wpf</a>
</td>
<td>
Install-Package Syncfusion.DocToPdfConverter.Wpf
</td>
</tr>

<tr>
<td>
{{'[ASP.NET MVC5](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-mvc)'| Â markdownify }}
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.AspNet.Mvc5">Syncfusion.DocToPdfConverter.AspNet.Mvc5</a>
</td>
<td>
Install-Package Syncfusion.DocToPdfConverter.AspNet.Mvc5
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-core)'| Â markdownify }}, Console Application (Targeting .NET Core) and {{'[Blazor](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-blazor)'| Â markdownify }}
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core">Syncfusion.DocIORenderer.Net.Core</a><br/>
<br/>
<i>Note:</i><br/>
<i>Please refer {{'[here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#what-are-the-nuget-packages-to-be-installed-to-perform-word-to-pdf-conversion-in-linux-os)'|Â markdownify }} to know about the NuGet packages that need to be installed to perform Word to PDF conversion in Linux OS.</i><br/>
</td>
<td>
Install-Package Syncfusion.DocIORenderer.Net.Core
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-winui)'| Â markdownify }}<br/> {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-maui)'| Â markdownify }}
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocIORenderer.NET">Syncfusion.DocIORenderer.NET</a>
</td>
<td>
Install-Package Syncfusion.DocIORenderer.NET
</td>
</tr>
</tbody>
</table>

T> If you encounter issues while using the .NET Word library in ASP.NET Core, refer to the [troubleshooting guide](https://support.syncfusion.com/kb/article/16012/troubleshoot-guide-for-aspnet-core-word-docio-library-issues#things-to-check-while-facing-an-issue-in-word-library) for recommended checks and solutions.

#### Retired Platforms

The following NuGet packages need to be included in your application based on the platform.

<table>
<thead>
<tr>
<th width="20%">
Platform(s)
</th>
<th width="40%">
Package name
</th>
<th width="40%">
Package manager console command
</th>
</tr>
</thead>
<tr>
<td>
{{'[ASP.NET](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net)' | markdownify}}<br/>
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.AspNet">Syncfusion.DocToPdfConverter.AspNet</a>
</td>
<td>
Install-Package Syncfusion.DocToPdfConverter.AspNet
</td>
</tr>
<tr>
<td>
{{'[ASP.NET MVC4](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-asp-net-mvc)'| Â markdownify }}
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.DocToPdfConverter.AspNet.Mvc4">Syncfusion.DocToPdfConverter.AspNet.Mvc4</a>
</td>
<td>
Install-Package Syncfusion.DocToPdfConverter.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
{{'[Xamarin](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-xamarin)'| Â markdownify }}<br/>
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.Xamarin.DocIORenderer">Syncfusion.Xamarin.DocIORenderer</a>
</td>
<td>
Install-Package Syncfusion.Xamarin.DocIORenderer
</td>
</tr>
</tbody>
</table>

N>  1. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add the "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering the Syncfusion<sup>&reg;</sup> license key in your application to use our components.
N> 2. Syncfusion<sup>&reg;</sup> components are available in [nuget.org](https://www.nuget.org/)
N> 3. Please refer the procedure to deploy your .NET Core application in Linux OS from [here](https://support.syncfusion.com/kb/article/7626/how-to-deploy-net-core-application-with-word-to-pdf-conversion-capabilities-in-linux-os).
N> 4. From v32.1.19, the dependent package SkiaSharp is upgraded from 3.116.1 to 3.119.1 version and it is mandatory to use SkiaSharp.NativeAssets.Linux v3.119.1 and HarfBuzzSharp.NativeAssets.Linux v8.3.1.2 packages for converting Word documents into PDF in Linux environment.
N> 5. "DocIO supports Word to PDF conversion in a UWP application using DocIORenderer." For further information, please refer [here](https://support.syncfusion.com/kb/article/8902/how-to-convert-word-document-to-pdf-in-uwp)
N> 6. Syncfusion has **deprecated the Syncfusion.DocToPdfConverter.AspNet package**. We strongly recommend upgrading your applications to ASP.NET Core. Refer [here](https://help.syncfusion.com/document-processing/word/word-library/net/faqs/migrate-from-net-framework-to-net-core) to migrate from .NET Framework to .NET Core.

### Additional NuGet packages required for Linux

The SkiaSharp and HarfBuzzSharp native asset NuGet packages are required as additional dependencies when deploying your application in Linux environments. There are two types of NuGet packages. Choose the appropriate ones based on your specific Linux environment.

Run one of the following commands in the Package Manager Console (or use `dotnet add package` for SDK-style projects):

```powershell
// Common Linux distributions, Azure App Service, Google App Engine
Install-Package SkiaSharp.NativeAssets.Linux -Version 3.119.1
Install-Package HarfBuzzSharp.NativeAssets.Linux -Version 8.3.1.2
```

```powershell
// AWS Lambda, AWS Elastic Beanstalk (use the NoDependencies variant)
Install-Package SkiaSharp.NativeAssets.Linux.NoDependencies -Version 3.119.1
```

The following table illustrates the native assets NuGet packages and their applicable Linux environments:

<table border="1">
  <thead>
    <tr>
      <th>Required Native assets NuGet packages</th>
      <th>Applicable Linux environments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{'[SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)'| markdownify }}<br/>
        {{'[HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)'| markdownify }}
      </td>
      <td>
        <ul>
          <li>Common Linux distributions such as Ubuntu, Alpine, CentOS, Debian, Fedora, and RHEL</li>
          <li>Azure App Service</li>
          <li>Google App Engine</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{'[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)'| markdownify }}
      </td>
      <td>
        <ul>
          <li>AWS Lambda</li>
          <li>AWS Elastic Beanstalk</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Converting Charts

The following NuGet package needs to be installed additionally to preserve a chart as image in Word to PDF conversion.

> **Note:** The chart-to-image converter package is only required for .NET Framework targets (WinForms, WPF, ASP.NET MVC4, ASP.NET MVC5, and the retired ASP.NET). For ASP.NET Core, Blazor, WinUI, .NET MAUI, and Xamarin, the base `Syncfusion.DocIORenderer.Net.Core` or `Syncfusion.DocIORenderer.NET` package handles chart rendering natively and no additional chart package is needed.

<table>
<thead>
<tr>
<th width="20%">
Platform(s)
</th>
<th width="40%">
Package name
</th>
<th width="40%">
Package manager console command
</th>
</tr>
</thead>
<tr>
<td>
Windows Forms, Console Application (Targeting .NET Framework)
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.OfficeChartToImageConverter.WinForms">Syncfusion.OfficeChartToImageConverter.WinForms</a>
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.WinForms
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.OfficeChartToImageConverter.Wpf">Syncfusion.OfficeChartToImageConverter.Wpf</a>
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.Wpf
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5">Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5</a>
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5
</td>
</tr>
</tbody>
</table>

#### Retired Platforms (Charts)

The following NuGet packages need to be included in your application based on the retired platform.

<table>
<thead>
<tr>
<th width="20%">
Platform(s)
</th>
<th width="40%">
Package name
</th>
<th width="40%">
Package manager console command
</th>
</tr>
</thead>
<tr>
<td>
ASP.NET<br/>
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.OfficeChartToImageConverter.AspNet">Syncfusion.OfficeChartToImageConverter.AspNet</a>
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet
</td>
</tr>
<tr>
<td>
ASP.NET MVC4
</td>
<td>
<a href="https://www.nuget.org/packages/Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4">Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4</a>
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4
</td>
</tr>
</tbody>
</table>

## NuGet Package Installation and Uninstallation

To use Syncfusion<sup>&reg;</sup> NuGet packages in your project, please refer the NuGet Package [Installation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-packages) and [Uninstallation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process#) sections.

DocIO NuGet packages can be installed and uninstalled using Package Manager Console. In Visual Studio, select Tools > NuGet Package Manager > Package Manager Console and execute the following commands.

### Windows Forms

**NuGet Package:** Syncfusion.DocToPdfConverter.WinForms

The package contains the DocToPdfConverter .NET library that allows you to convert the Word documents to PDF.

```powershell
// Install package
Install-Package Syncfusion.DocToPdfConverter.WinForms
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.DocToPdfConverter.WinForms -RemoveDependencies 
```

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.WinForms

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

```powershell
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.WinForms
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.WinForms -RemoveDependencies 
```

### WPF

**NuGet Package:** Syncfusion.DocToPdfConverter.Wpf

The package contains the DocToPdfConverter .NET library that allows you to convert the Word documents to PDF.

```powershell
// Install package
Install-Package Syncfusion.DocToPdfConverter.Wpf
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.DocToPdfConverter.Wpf -RemoveDependencies 
```

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.Wpf

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

```powershell
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.Wpf
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.Wpf -RemoveDependencies 
```

### ASP.NET MVC4

**NuGet Package:** Syncfusion.DocToPdfConverter.AspNet.Mvc4

The package contains the DocToPdfConverter .NET library that allows you to convert the Word documents to PDF.

```powershell
// Install package
Install-Package Syncfusion.DocToPdfConverter.AspNet.Mvc4
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.DocToPdfConverter.AspNet.Mvc4 -RemoveDependencies 
```

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

```powershell
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4 -RemoveDependencies 
```

### ASP.NET MVC5

**NuGet Package:** Syncfusion.DocToPdfConverter.AspNet.Mvc5

The package contains the DocToPdfConverter .NET library that allows you to convert the Word documents to PDF.

```powershell
// Install package
Install-Package Syncfusion.DocToPdfConverter.AspNet.Mvc5
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.DocToPdfConverter.AspNet.Mvc5 -RemoveDependencies 
```

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

```powershell
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5 -RemoveDependencies 
```

### ASP.NET Core and Blazor
**NuGet Package:** Syncfusion.DocIORenderer.Net.Core

The package contains the DocIORenderer .NET portable library that allows you to convert the Word documents to PDF.

```powershell
// Install package
Install-Package Syncfusion.DocIORenderer.Net.Core
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.DocIORenderer.Net.Core -RemoveDependencies 
```

### Windows UI Library (WinUI) and .NET Multi-platform App UI (.NET MAUI)
**NuGet Package:** Syncfusion.DocIORenderer.NET

The package contains the DocIORenderer .NET library that allows you to convert the Word documents to PDF.

```powershell
// Install package
Install-Package Syncfusion.DocIORenderer.NET
```
```powershell
// Uninstall package
Uninstall-Package Syncfusion.DocIORenderer.NET -RemoveDependencies 
```
