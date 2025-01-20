---
title: NuGet Packages for Excel to PDF | Syncfusion
description: This section illustrates the NuGet packages required to perform Excel to PDF conversion in various platforms and frameworks.
platform: document-processing
control: XlsIO
documentation: UG
---

# NuGet Packages Required for Excel to PDF conversion

## Converting Excel document to PDF

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

N> 1. Excel to PDF conversion is supported from .NET Framework 2.0 and .NET Standard 1.4 onwards.

N> 2. Starting with v16.2.0.x, if you reference Syncfusion<sup>&reg;</sup> assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion<sup>&reg;</sup> license key in your applications to use our components.

N> 3. Syncfusion<sup>&reg;</sup> components are available in nuget.org

N> 4. From the Essential Studio<sup>&reg;</sup> 2018 Volume 3 release(v16.3.0.21), Syncfusion<sup>&reg;</sup> has changed some of the NuGet package names to search and find the required Syncfusion<sup>&reg;</sup> NuGet packages in nuget.org easily based on the control and its platforms.

N> 5. Starting with v17.3.0.x, Syncfusion<sup>&reg;</sup> provides support to .NET Core 3.0. You can use the above WPF or Windows Forms platform NuGet packages for .NET Core 3.0 targeting applications and use the same “C# tab” code examples for it.

## NuGet Package Installation and Uninstallation

To use NuGet package in your project, please refer the NuGet Package [Installation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-packages#installing-nuget-packages) and [Uninstallation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process) sections.

XlsIO NuGet packages can be installed and uninstalled using Package Manager Console. In Visual Studio, select **Tools > NuGet Package Manager > Package Manager Console** and execute the below commands in respective platforms.

### Windows Forms

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

### Windows UI Library (WinUI) and .NET Multi-platform App UI (.NET MAUI)
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