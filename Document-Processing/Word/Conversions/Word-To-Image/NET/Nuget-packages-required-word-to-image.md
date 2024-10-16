---
title: NuGet Packages Required to Convert Word to Image | Syncfusion
description: Learn the NuGet packages required to Convert Word document to image using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# NuGet Packages Required to Convert Word to Image

## Converting Word document to image

For converting Word document into image, the following NuGet packages need to be installed in your application.

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
Syncfusion.DocIO.WinForms.nupkg
</td>
<td>
Install-Package Syncfusion.DocIO.WinForms
</td>
</tr>
<tr>
<td>
WPF
</td>
<td>
Syncfusion.DocIO.Wpf.nupkg
</td>
<td>
Install-Package Syncfusion.DocIO.Wpf
</td>
</tr>
<tr>
<td>
.NET Framework 3.5 or 4.0 Client Profile
</td>
<td>
Syncfusion.DocIO.ClientProfile.nupkg
</td>
<td>
Install-Package Syncfusion.DocIO.ClientProfile
</td>
</tr>
<tr>
<td>
ASP.NET MVC4
</td>
<td>
Syncfusion.DocIO.AspNet.Mvc4.nupkg
</td>
<td>
Install-Package Syncfusion.DocIO.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
Syncfusion.DocIO.AspNet.Mvc5.nupkg
</td>
<td>
Install-Package Syncfusion.DocIO.AspNet.Mvc5
</td>
</tr>
<tr>
<td>
ASP.NET Core, Console Application (Targeting .NET Core) and Blazor
</td>
<td>
Syncfusion.DocIORenderer.Net.Core.nupkg<br/>
<br/>
<i>Note:</i><br/>
<i>Please refer {{'[here](https://help.syncfusion.com/document-processing/word/word-library/net/faq#what-are-the-nuget-packages-to-be-installed-to-perform-word-to-image-conversion-in-linux-os)'| markdownify }} to know about the NuGet packages that need to be installed to perform Word to Image conversion in Linux OS.</i><br/>
</td>
<td>
Install-Package Syncfusion.DocIORenderer.Net.Core
</td>
</tr>
<tr>
<td>
Xamarin
</td>
<td>
Syncfusion.Xamarin.DocIORenderer.nupkg
</td>
<td>
Install-Package Syncfusion.Xamarin.DocIORenderer
</td>
</tr>
<tr>
<td>
Windows UI Library (WinUI)<br/> .NET Multi-platform App UI (.NET MAUI)
</td>
<td>
Syncfusion.DocIORenderer.NET
</td>
<td>
Install-Package Syncfusion.DocIORenderer.NET
</td>
</tr>
</table>

#### Retired Platforms

The following packages need to be included in your application based on the platform.

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
{{'[ASP.NET](https://help.syncfusion.com/document-processing/word/conversions/word-to-image/net/convert-word-document-to-image-in-asp-net)' | markdownify}}<br/>
</td>
<td>
Syncfusion.DocIO.AspNet.nupkg
</td>
<td>
Install-Package Syncfusion.DocIO.AspNet
</td>
</tr>
</table>

## Converting Charts

The following NuGet package need to be installed additionally to preserve chart as image in Word to Image conversion.

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
Syncfusion.OfficeChartToImageConverter.WinForms.nupkg
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
Syncfusion.OfficeChartToImageConverter.Wpf.nupkg
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.Wpf
</td>
</tr>
<tr>
<td>
ASP.NET MVC4
</td>
<td>
Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4.nupkg
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4
</td>
</tr>
<tr>
<td>
ASP.NET MVC5
</td>
<td>
Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5.nupkg
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5
</td>
</tr>
</table>

#### Retired Platforms

The following packages need to be included in your application based on the platform.

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
Syncfusion.OfficeChartToImageConverter.AspNet
</td>
<td>
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet
</td>
</tr>
</table>

N> 1. Starting with v16.2.0.x, if you reference Syncfusion assemblies from trial setup or from the NuGet feed, you also have to add "Syncfusion.Licensing" assembly reference and include a license key in your projects. Please refer to this [link](https://help.syncfusion.com/common/essential-studio/licensing/overview) to know about registering Syncfusion license key in your application to use our components.
N> 2. Syncfusion components are available in [nuget.org](https://www.nuget.org/)


## NuGet Package Installation and Uninstallation

To use Syncfusion NuGet packages in your project, please refer the NuGet Package [Installation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-packages) and [Uninstallation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process#) sections.

DocIO NuGet packages can be installed and uninstalled using Package Manager Console. In Visual Studio, select Tools > NuGet Package Manager > Package Manager Console and execute the following commands.

### Windows Forms

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.WinForms

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

~~~
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.WinForms
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.WinForms -RemoveDependencies 
~~~

### WPF

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.Wpf

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

~~~
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.Wpf
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.Wpf -RemoveDependencies 
~~~

### ASP.NET MVC4

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

~~~
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc4 -RemoveDependencies 
~~~

### ASP.NET MVC5

**NuGet Package:** Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5

The package contains OfficeChartToImageConverter .NET library for converting the chart present in word document to image.

~~~
// Install package
Install-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.OfficeChartToImageConverter.AspNet.Mvc5 -RemoveDependencies 
~~~