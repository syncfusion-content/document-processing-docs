---
title: NuGet Package Required for .NET Document Chunking Library | Syncfusion
description: Learn about the NuGet package required to install and use the Syncfusion® .NET Document Chunking Library across supported applications.
platform: document-processing
control: Chunking
documentation: UG
---

# NuGet Package Required for .NET Document Chunking Library

## Installing the Document Chunking Library through NuGet

NuGet provides a convenient way to download and install the Syncfusion<sup>®</sup> .NET Document Chunking Library. Install the following NuGet package in your application.

<table>
  <tr>
    <th>Platform</th>
    <th>Package Name</th>
    <th>Package Manager Console Command</th>
  </tr>
  <tr>
    <td>WPF, Windows Forms, ASP.NET MVC, ASP.NET Core, Blazor, Universal Windows Platform, Windows UI Library (WinUI) and .NET Multi-platform App UI (.NET MAUI)</td>
    <td><code>Syncfusion.DocumentChunking</code></td>
    <td><code>Install-Package Syncfusion.DocumentChunking</code></td>
  </tr>
</table>

N> 1. Syncfusion<sup>&reg;</sup> components are available in <a href="https://www.nuget.org/" aria-label="Syncfusion nuget packages">nuget.org</a>.
N> 2. Starting with v34.x.x, if you reference Syncfusion® assemblies from trial setup or from the NuGet feed, you also have to add “Syncfusion.Licensing” assembly reference and include a license key in your projects. Please refer to this link to know about registering Syncfusion® license key in your application to use our components.

## NuGet Package Installation and Uninstallation

To use Syncfusion<sup>&reg;</sup> NuGet packages in your project, refer to the NuGet package <a href="https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-packages" aria-label="Nuget installation">Installation</a> and <a href="https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process#" aria-label="Nuget uninstallation">Uninstallation</a> sections.

The `Syncfusion.DocumentChunking` package can be installed and uninstalled using Package Manager Console.

In Visual Studio, select **Tools > NuGet Package Manager > Package Manager Console**, and run the appropriate command.

**NuGet package:** `Syncfusion.DocumentChunking`

The package provides the APIs required to divide supported documents into structured chunks.

### Install the NuGet Package

```powershell
Install-Package Syncfusion.DocumentChunking
```

### Uninstall the NuGet Package

```powershell
Uninstall-Package Syncfusion.DocumentChunking -RemoveDependencies
```