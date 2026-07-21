---
title: Convert Word document to PDF in Microsoft Azure | Syncfusion
description: Learn how to convert a Word document to a PDF in Azure services using Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library in C#.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to PDF in Azure Platform

Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> DocIO is a [.NET Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Use this library to convert Word documents to PDF in Azure services.

N> This page is an index of the available Azure deployment guides. If this is your first time working with Azure, refer to the [Azure development resources](https://learn.microsoft.com/en-us/azure/?product=popular). The dedicated guides linked below explain how to convert Word documents to PDF in C# using the .NET Word (DocIO) library in Azure.

## Prerequisites

* An active **Microsoft Azure subscription** is required. If you don’t have one, please create a [free account](https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account?icid=azurefreeaccount) before starting.
* Install the **.NET SDK 8.0 or later** ([download](https://dotnet.microsoft.com/en-us/download/dotnet)).
* Install an IDE such as **Visual Studio 2022 or later** or **Visual Studio Code** ([download](https://visualstudio.microsoft.com/downloads/)).

## Azure Services
<table>
<thead>
<tr>
<th>
Azure Services<br/></th><th>
NuGet package name<br/></th></tr></thead>

<tr>
<td>
{{'[App Service (Windows)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-azure-app-service-windows)' | markdownify}}<br/></td><td>
{{'[Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)' | markdownify}}</td></tr>
<tr>
<td>
{{'[App Service (Linux)](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-azure-app-service-linux)' | markdownify}}<br/></td><td>
{{'[Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)' | markdownify}}<br/>
{{'[SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)' | markdownify}}<br/>{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)' |markdownify}} <br/></td></tr>
<tr>
<td>
{{'[Azure Functions v1](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-azure-functions-v1)' | markdownify}} <br/></td><td>
{{'[Syncfusion.DocToPDFConverter.AspNet](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.AspNet)' |markdownify}} <br/></td></tr>
<tr>
<td>
{{'[Azure Functions v4](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-azure-functions-v4)' | markdownify}} <br/></td><td>
{{'[Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)' | markdownify }}<br/></td></tr>
</table>

N> The `SkiaSharp.NativeAssets.Linux` and `HarfBuzzSharp.NativeAssets.Linux` packages are only required when deploying to Azure App Service (Linux) or other Linux-based Azure hosts. On Windows hosts, the required native assets are bundled with the `Syncfusion.DocIORenderer.Net.Core` NuGet package.

## See Also

* [Convert Word to PDF in AWS](convert-word-document-to-pdf-in-aws)
* [Convert Word to PDF in Google Cloud Platform](convert-word-document-to-pdf-in-google-cloud-platform)
* [Convert Word to PDF in Linux](convert-word-document-to-pdf-in-linux)
* [Word to PDF Overview](word-to-pdf)
* [Troubleshooting and FAQ](faqs-word-to-pdf)
