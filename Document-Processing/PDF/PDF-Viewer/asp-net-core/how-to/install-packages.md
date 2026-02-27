---
layout: post
title: Install packages for ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to install the Syncfusion ASP.NET Core PDF Viewer NuGet package and restore the required dependencies.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Install PDF Viewer packages in ASP.NET Core

The Syncfusion<sup style="font-size:70%">&reg;</sup> ASP.NET Core PDF Viewer requires the [Syncfusion.EJ2.PdfViewer.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Core/) NuGet package. This package contains all the necessary assemblies, managed wrappers, and server-side components to render and interact with PDF documents.

## Installation methods

The PDF Viewer dependency can be added to the ASP.NET Core project using one of the following methods:

### Visual Studio NuGet Manager

1. Right-click on the project in **Solution Explorer** and select **Manage NuGet Packages**.
2. Search for `Syncfusion.EJ2.PdfViewer.AspNet.Core`.
3. Select the required version and click **Install**.

### .NET CLI

Run the following command in the project directory:

```bash
dotnet add package Syncfusion.EJ2.PdfViewer.AspNet.Core
```

### Manual Package Reference

Add the following `<PackageReference>` entry directly to the `.csproj` file:

```xml
<ItemGroup>
    <PackageReference Include="Syncfusion.EJ2.PdfViewer.AspNet.Core" Version="*" />
</ItemGroup>
```

Replace `*` with the specific version matching the other Syncfusion dependencies. NuGet automatically restores the package and its dependencies during the next build or `dotnet restore` operation.

## Licensing requirement

Syncfusion provides a license key that must be registered in the application. Ensure that  the key is registered in the `Program.cs` or `Startup.cs` file before deploying the application to avoid licensing watermarks. For detailed instructions, refer to the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/license-key).
