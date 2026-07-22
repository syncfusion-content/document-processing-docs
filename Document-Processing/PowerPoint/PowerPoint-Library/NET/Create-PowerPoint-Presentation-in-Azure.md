---
title: Create PowerPoint document in Microsoft Azure | Syncfusion
description: Learn how to create PowerPoint document in Azure services using .NET PowerPoint library (Presentation) without Microsoft PowerPoint or interop dependencies.
platform: document-processing
control: PowerPoint
documentation: UG
---

# Create PowerPoint document in Microsoft Azure

Syncfusion<sup>&reg;</sup> PowerPoint is a [.NET PowerPoint library](https://www.syncfusion.com/document-sdk/net-powerpoint-library) used to create, read, edit and convert PowerPoint documents programmatically without **Microsoft PowerPoint** or interop dependencies. Using this library, you can **create a PowerPoint document in Microsoft Azure** within a few lines of code.

N> If this is your first time working with Azure, please refer to the dedicated Azure development resources. The sections linked below explain how to create a PowerPoint document in C# using the PowerPoint library (Presentation) in each supported Azure service.

## Prerequisites
* An active [Azure subscription](https://azure.microsoft.com/en-us/free/) is required. If you don't have one, please [create a free account](https://azure.microsoft.com/en-us/free/) before starting.
* Visual Studio 2022 with the **Azure development** workload installed (the **ASP.NET and web development** workload is also required for the App Service samples).

## Azure Services
<table>
<thead>
<tr>
<th>
Azure Services<br/></th><th>
NuGet packages required<br/></th></tr></thead>
<tr>
<td>
{{'[App Service (Windows)](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-powerpoint-presentation-in-azure-app-service-windows)' | markdownify}}
<br/></td><td>
{{'[Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core)' | markdownify}}</td></tr>
<tr>
<td>
{{'[App Service (Linux)](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-powerpoint-presentation-in-azure-app-service-linux)' | markdownify}}
<br/></td><td>
{{'[Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core)' | markdownify}}
<br/></td></tr>
<tr>
<td>
{{'[Azure Functions v1](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-powerpoint-presentation-in-azure-functions-v1)' | markdownify}}
<br/></td><td>
{{'[Syncfusion.Presentation.AspNet](https://www.nuget.org/packages/Syncfusion.Presentation.AspNet)' | markdownify}}
 <br/></td></tr>
 <tr>
<td>
{{'[Azure Functions v4](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-powerpoint-presentation-in-azure-functions-v4)' | markdownify}}
<br/></td><td>
{{'[Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core)' | markdownify}}
 <br/></td></tr>
 <tr>
<td>
{{'[Azure Functions (Flex Consumption)](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/create-powerpoint-presentation-in-azure-functions-flex-consumption)' | markdownify}}
<br/></td><td>
{{'[Syncfusion.Presentation.Net.Core](https://www.nuget.org/packages/Syncfusion.Presentation.Net.Core)' | markdownify}}
 <br/></td></tr>
</table>

N> The `Syncfusion.Presentation.Net.Core` package targets .NET 8.0 and later, while `Syncfusion.Presentation.AspNet` targets .NET Framework 4.6.2 and later. Starting with v16.2.0.x, you must also register a Syncfusion license key in your application; see the [licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview) for details.
