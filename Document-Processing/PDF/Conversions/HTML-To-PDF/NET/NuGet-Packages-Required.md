---
title: NuGet Packages for HTML to PDF | Syncfusion
description: This section outlines the NuGet packages required to perform HTML to PDF conversion using the Syncfusion PDF library across various platforms
platform: document-processing
control: PDF
documentation: UG
---
# NuGet Packages Required for HTML to PDF

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
Windows (.NET Core, .NET8, and .NET9)
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Windows.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Windows/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Linux (.NET Core, .NET8, and .NET9)
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Linux.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Linux/)'| markdownify }}
</td>
</tr>
<tr>
<td>
Mac (.NET Core, .NET8, and .NET9)
</td>
<td>
{{'[Syncfusion.HtmlToPdfConverter.Net.Mac.nupkg](https://www.nuget.org/packages/Syncfusion.HtmlToPdfConverter.Net.Mac/)'| markdownify }}
</td>
</tr>
<tr>
<td>
AWS (.NET Core, .NET8, and .NET9)
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

N> 1. HTML to PDF conversion is not supported in .NET MAUI, Xamarin, and UWP applications.
N> 2. Starting with v21.1.XX, The package structure is changed if you reference Syncfusion<sup>&reg;</sup> HTML to the PDF library from the NuGet feed. The Blink binaries paths are automatically added and do not need to add it manually. However, if you need to refer the blink binaries paths in your application manually, please use the BlinkPath in BlinkConverterSettings. Get the BlinkBinaries from the NuGet package runtime folder or get the binaries by installing the HTML converter installer.