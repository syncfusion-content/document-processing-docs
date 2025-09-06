---
title: NuGet Packages for XlsIO | Syncfusion
description: This section illustrates the NuGet packages required to use Syncfusion Excel library (Essential XlsIO) in various platforms and frameworks.
platform: document-processing
control: XlsIO
documentation: UG
---
# NuGet Packages Required for XlsIO

## Installing Syncfusion<sup>&reg;</sup> XlsIO through NuGet Packages 

NuGet is the one of the easiest way to download and install XlsIO library to read, write and edit the Excel documents. The following NuGet packages need to be installed in your application.
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
{{'[Windows Forms](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-windows-forms-c-sharp)' |  markdownify }}, Console Application (Targeting .NET Framework)
</td>
<td>
Syncfusion.XlsIO.WinForms.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.WinForms
</td>
</tr>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-wpf-c-sharp)'|  markdownify }}
</td>
<td>
Syncfusion.XlsIO.Wpf.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.Wpf
</td>
</tr>
<tr>
<td>
.NET Framework 4.0 Client Profile
</td>
<td>
Syncfusion.XlsIO.ClientProfile.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.ClientProfile
</td>
</tr>
<tr>
<td>
{{'[ASP.NET MVC4](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-mvc-c-sharp)'| markdownify }}
</td>
<td>
Syncfusion.XlsIO.AspNet.Mvc4.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
{{'[ASP.NET MVC5](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-mvc-c-sharp)'|  markdownify }}
</td>
<td>
Syncfusion.XlsIO.AspNet.Mvc5.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.AspNet.Mvc5
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-core-c-sharp)'|  markdownify }}, {{'[Console Application (Targeting .NET Core)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-excel-files-in-console-apps-c-sharp#create-a-simple-excel-report-using-net-core)'| markdownify }} and {{'[Blazor](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-blazor-c-sharp)'|  markdownify }}
</td>
<td>
Syncfusion.XlsIO.Net.Core.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.Net.Core
</td>
</tr>
<tr>
<td>
{{'[Xamarin](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-xamarin-c-sharp)'|  markdownify }}
</td>
<td>
Syncfusion.Xamarin.XlsIO.nupkg
</td>
<td>
Install-Package Syncfusion.Xamarin.XlsIO
</td>
</tr>
<tr>
<td>
{{'[UWP](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-uwp-c-sharp)'|  markdownify }}
</td>
<td>
Syncfusion.XlsIO.UWP.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.UWP
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-winui-c-sharp)'|  markdownify }} <br/> {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-maui-c-sharp)'|  markdownify }} 
</td>
<td>
Syncfusion.XlsIO.NET.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.NET
</td>
</tr>
</table>

**Retired Platforms**

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
{{'[ASP.NET](https://help.syncfusion.com/document-processing/excel/excel-library/net/create-read-edit-excel-files-in-asp-net-c-sharp)' | markdownify}}<br/>
</td>
<td>
Syncfusion.XlsIO.AspNet.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.AspNet
</td>
</tr>
</table>

N> 1. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

N> 2. From the Essential Studio<sup>&reg;</sup> 2018 Volume 3 release(v16.3.0.21), Syncfusion has changed some of the NuGet package names to search and find the required Syncfusion NuGet packages in nuget.org easily based on the control and its platforms.

N> 3. Starting with v17.3.0.x, Syncfusion<sup>&reg;</sup> provides support to .NET Core 3.0. You can use the above WPF or Windows Forms platform NuGet packages for .NET Core 3.0 targeting applications and use the same “C# tab” code examples for it.

## Converting Excel document into PDF

For converting Excel document into PDF, the following NuGet packages need to be installed in your application.

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
{{'[Windows Forms](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-windows-forms)'|  markdownify }}, Console Application (Targeting .NET Framework)
</td>
<td>
Syncfusion.ExcelToPdfConverter.WinForms.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelToPdfConverter.WinForms
</td>
</tr>
<tr>
<td>
{{'[WPF](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-wpf)'|  markdownify }}
</td>
<td>
Syncfusion.ExcelToPdfConverter.Wpf.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelToPdfConverter.Wpf
</td>
</tr>
<tr>
<td>
.NET Framework 3.5 or 4.0 Client Profile
</td>
<td>
Syncfusion.ExcelToPdfConverter.ClientProfile.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelToPdfConverter.ClientProfile
</td>
</tr>
<tr>
<td>
{{'[ASP.NET MVC4](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net-mvc)'|  markdownify }}
</td>
<td>
Syncfusion.ExcelToPdfConverter.AspNet.Mvc4.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelToPdfConverter.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
{{'[ASP.NET MVC5](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net-mvc)'|  markdownify }}
</td>
<td>
Syncfusion.ExcelToPdfConverter.AspNet.Mvc5.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelToPdfConverter.AspNet.Mvc5
</td>
</tr>
<tr>
<td>
{{'[ASP.NET Core](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net-core)'|  markdownify }}, Console Application (Targeting .NET Core) and {{'[Blazor](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-blazor)'|  markdownify }}
</td>
<td>
Syncfusion.XlsIORenderer.Net.Core.nupkg<br/>
<br/>
</td>
<td>
Install-Package Syncfusion.XlsIORenderer.Net.Core
</td>
</tr>
<tr>
<td>
{{'[Xamarin](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-xamarin)'|  markdownify }}
</td>
<td>
Syncfusion.Xamarin.XlsIORenderer.nupkg
</td>
<td>
Install-Package Syncfusion.Xamarin.XlsIORenderer
</td>
</tr>
<tr>
<td>
{{'[Windows UI Library (WinUI)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-winui)'|  markdownify }}<br/> {{'[.NET Multi-platform App UI (.NET MAUI)](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-maui)'|  markdownify }}
</td>
<td>
Syncfusion.XlsIORenderer.NET
</td>
<td>
Install-Package Syncfusion.XlsIORenderer.NET
</td>
</tr>
</table>

**Retired Platforms**

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
{{'[ASP.NET](https://help.syncfusion.com/document-processing/excel/conversions/excel-to-pdf/net/convert-excel-to-pdf-in-asp-net)' | markdownify}}<br/>
</td>
<td>
Syncfusion.ExcelToPdfConverter.AspNet.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelToPdfConverter.AspNet
</td>
</tr>
</table>

N> Excel to PDF conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

## Converting Excel Worksheet to Image

For converting an Excel worksheet to image, the following NuGet packages need to be installed in your application.

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
Syncfusion.XlsIO.WinForms.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.WinForms
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
Syncfusion.XlsIO.Wpf.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.Wpf
</td>
</tr>
<tr>
<td>
.NET Framework 3.5 or 4.0 Client Profile
</td>
<td>
Syncfusion.XlsIO.ClientProfile.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.ClientProfile
</td>
</tr>
<tr>
<td>
ASP.NET MVC4
</td>
<td>
Syncfusion.XlsIO.AspNet.Mvc4.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
Syncfusion.XlsIO.AspNet.Mvc5.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.AspNet.Mvc5
</td>
</tr>
<tr>
<td>
ASP.NET Core, Console Application (Targeting .NET Core) and Blazor
</td>
<td>
Syncfusion.XlsIORenderer.Net.Core.nupkg<br/>
</td>
<td>
Install-Package Syncfusion.XlsIORenderer.Net.Core
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
Syncfusion.Xamarin.XlsIORenderer.nupkg
</td>
<td>
Install-Package Syncfusion.Xamarin.XlsIORenderer
</td>
</tr>
<tr>
<td>
Windows UI Library (WinUI)<br/> .NET Multi-platform App UI (.NET MAUI)
</td>
<td>
Syncfusion.XlsIORenderer.NET
</td>
<td>
Install-Package Syncfusion.XlsIORenderer.NET
</td>
</tr>
</table>

**Retired Platforms**

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
ASP.NET
</td>
<td>
Syncfusion.XlsIO.AspNet.nupkg
</td>
<td>
Install-Package Syncfusion.XlsIO.AspNet
</td>
</tr>
</table>

N> Worksheet to image conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

## Converting Charts in XlsIO

The below NuGet package need to be installed additionally to convert the charts present in Excel documents.

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
Syncfusion.ExcelChartToImageConverter.WinForms.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelChartToImageConverter.WinForms
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
Syncfusion.ExcelChartToImageConverter.Wpf.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelChartToImageConverter.Wpf
</td>
</tr>
<tr>
<td>
ASP.NET MVC4
</td>
<td>
Syncfusion.ExcelChartToImageConverter.AspNet.Mvc4.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5
</td>
</tr>
<tr>
<td>
ASP.NET Core, Console Application (Targeting .NET Core) and Blazor
</td>
<td>
Syncfusion.XlsIORenderer.Net.Core.nupkg<br/>
</td>
<td>
Install-Package Syncfusion.XlsIORenderer.Net.Core
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
Syncfusion.Xamarin.XlsIORenderer.nupkg
</td>
<td>
Install-Package Syncfusion.Xamarin.XlsIORenderer
</td>
</tr>
<tr>
<td>
Windows UI Library (WinUI)<br/> .NET Multi-platform App UI (.NET MAUI)
</td>
<td>
Syncfusion.XlsIORenderer.NET
</td>
<td>
Install-Package Syncfusion.XlsIORenderer.NET
</td>
</tr>
</table>

**Retired Platforms**

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
ASP.NET
</td>
<td>
Syncfusion.ExcelChartToImageConverter.AspNet.nupkg
</td>
<td>
Install-Package Syncfusion.ExcelChartToImageConverter.AspNet
</td>
</tr>
</table>

N> 1. The "Syncfusion.ExcelChartToImageConverter.Wpf.nupkg" NuGet package is only supported from 4.0 .NET Framework onwards. 
N> 2. The "Syncfusion.Xamarin.XlsIORenderer.nupkg" or "Syncfusion.XlsIORenderer.Net.Core.nupkg" NuGet packages supports chart to image conversion only from .NET Standard 2.0 onwards.

## NuGet Package Installation and Uninstallation

To use Syncfusion<sup>&reg;</sup> NuGet package in your project, please refer the NuGet Package [Installation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-packages#installing-nuget-packages) and [Uninstallation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process) sections.

XlsIO NuGet packages can be installed and uninstalled using Package Manager Console. In Visual Studio, select **Tools > NuGet Package Manager > Package Manager Console** and execute the below commands in respective platforms.

N> Syncfusion<sup>&reg;</sup> components are available in nuget.org

### Windows Forms

**NuGet Package:** Syncfusion.XlsIO.WinForms

The package contains XlsIO library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.WinForms
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.WinForms -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelToPdfConverter.WinForms

The package contains the ExcelToPdfConverter .NET library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.ExcelToPdfConverter.WinForms
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelToPdfConverter.WinForms -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelChartToImageConverter.WinForms

The package contains ExcelChartToImageConverter .NET library for converting the chart present in Excel document to image.

~~~
// Install package
Install-Package Syncfusion.ExcelChartToImageConverter.WinForms
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelChartToImageConverter.WinForms -RemoveDependencies 
~~~

### WPF

**NuGet Package:** Syncfusion.XlsIO.Wpf

The package contains XlsIO library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.Wpf
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.Wpf -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelToPdfConverter.Wpf

The package contains the ExcelToPdfConverter .NET library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.ExcelToPdfConverter.Wpf
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelToPdfConverter.Wpf -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelChartToImageConverter.Wpf

The package contains ExcelChartToImageConverter .NET library for converting the chart present in Excel document to image.

~~~
// Install package
Install-Package Syncfusion.ExcelChartToImageConverter.Wpf
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelChartToImageConverter.Wpf -RemoveDependencies 
~~~

### ASP.NET MVC4

**NuGet Package:** Syncfusion.XlsIO.AspNet.Mvc4

The package contains XlsIO library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.AspNet.Mvc4
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.AspNet.Mvc4 -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelToPdfConverter.AspNet.Mvc4

The package contains the ExcelToPdfConverter .NET library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.ExcelToPdfConverter.AspNet.Mvc4
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelToPdfConverter.AspNet.Mvc4 -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelChartToImageConverter.AspNet.Mvc4

The package contains ExcelChartToImageConverter .NET library for converting the chart present in Excel document to image.

~~~
// Install package
Install-Package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc4
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc4 -RemoveDependencies 
~~~

### ASP.NET MVC5

**NuGet Package:** Syncfusion.XlsIO.AspNet.Mvc5

The package contains XlsIO library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.AspNet.Mvc5
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.AspNet.Mvc5 -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelToPdfConverter.AspNet.Mvc5

The package contains the ExcelToPdfConverter .NET library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.ExcelToPdfConverter.AspNet.Mvc5
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelToPdfConverter.AspNet.Mvc5 -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5

The package contains ExcelChartToImageConverter .NET library for converting the chart present in Excel document to image.

~~~
// Install package
Install-Package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.ExcelChartToImageConverter.AspNet.Mvc5 -RemoveDependencies 
~~~

### ASP.NET Core and Blazor

**NuGet Package:** Syncfusion.XlsIO.Net.Core

The package contains XlsIO portable library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.Net.Core
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.Net.Core -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.XlsIORenderer.Net.Core

The package contains the XlsIORenderer .NET portable library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.XlsIORenderer.Net.Core
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIORenderer.Net.Core -RemoveDependencies 
~~~

### Xamarin

**NuGet Package:** Syncfusion.Xamarin.XlsIO

The package contains XlsIO portable library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.Xamarin.XlsIO
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.Xamarin.XlsIO -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.Xamarin.XlsIORenderer

The package contains the XlsIORenderer .NET portable library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.Xamarin.XlsIORenderer
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.Xamarin.XlsIORenderer -RemoveDependencies 
~~~

### UWP

**NuGet Package:**  Syncfusion.XlsIO.UWP

The package contains XlsIO library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.UWP
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.UWP -RemoveDependencies 
~~~

### Windows UI Library (WinUI) and .NET Multi-platform App UI (.NET MAUI)

**NuGet Package:**  Syncfusion.XlsIO.NET

The package contains XlsIO library that allows you to create, read and edit Excel documents.

~~~
// Install package
Install-Package Syncfusion.XlsIO.NET
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIO.NET -RemoveDependencies 
~~~

**NuGet Package:** Syncfusion.XlsIORenderer.NET

The package contains the XlsIORenderer .NET library that allows you to convert the Excel documents to PDF.

~~~
// Install package
Install-Package Syncfusion.XlsIORenderer.NET
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.XlsIORenderer.NET -RemoveDependencies 
~~~

## Additional NuGet packages required for Linux

The SkiaSharp native assets NuGet package is required as additional dependency in your application created for deploying in Linux environments. There are 2 types of NuGet packages, please choose the correct NuGet package based on your Linux environment. 

The following table illustrates the native assets NuGet package with their matching Linux environments.

<table>
<thead>
<tr>
<th width="40%">
Required Native assets NuGet packages
</th>
<th width="40%">
Applicable Linux environments
</th>
</tr>
</thead>
<tr>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)' | markdownify}}<br/>{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.0.1](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.0.1)' | markdownify}}
</td>
<td>
Azure App Service<br/>
Google App Engine
</td>
</tr>
<tr>
<td>
{{'[SkiaSharp.NativeAssets.Linux.NoDependencies v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.116.1)' | markdownify}}
</td>
<td>
AWS Lambda<br/>
AWS Elastic Beanstalk
</td>
</tr>
</table>

## Internal Syncfusion Dependencies

Some Syncfusion components such as Syncfusion.Compression.Net.Core and Syncfusion.SkiaSharpHelper.Net.Core are internal dependency packages used by XlsIO and other Syncfusion libraries. These packages are not visible in [nuget.org](https://www.nuget.org/) search results but are still available for direct access.

You can download the package directly using the following link by replacing version with the required version:

~~~
https://www.nuget.org/packages/Syncfusion.Compression.Net.Core/version
~~~

**Example:**

To download version **30.2.5**, use https://www.nuget.org/packages/Syncfusion.Compression.Net.Core/30.2.5

When installing Syncfusion products that depend on these packages, Visual Studio automatically fetches them. Alternatively, you can manually download and reference them in your project if needed.