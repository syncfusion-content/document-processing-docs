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
    <td>ASP.NET Core</td>
    <td><code>Syncfusion.DocumentChunking</code></td>
    <td><code>Install-Package Syncfusion.DocumentChunking</code></td>
  </tr>
</table>

N> The `Syncfusion.DocumentChunking` package is available in the [Syncfusion Nexus Repository](https://nexus.syncfusioninternal.com/#browse/browse:nuget-hosted:Syncfusion.DocumentChunking).

## NuGet Package Installation and Uninstallation

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