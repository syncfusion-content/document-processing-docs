---
layout: post
title: Install packages for ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to install the Syncfusion ASP.NET Core PDF Viewer NuGet package and restore the required dependencies.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Install PDF Viewer packages in ASP.NET Core

Add the Syncfusion PDF Viewer dependency to your ASP.NET Core project using NuGet. The [Syncfusion.EJ2.PdfViewer.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Core/) package includes all required assemblies and components for the PDF Viewer control.

## Add the package to the project

Edit the `.csproj` file to include the PDF Viewer package reference:

```cs
<PackageReference Include="Syncfusion.EJ2.PdfViewer.AspNet.Core" Version="*" />
```

When the project is compiled or run `dotnet restore`, NuGet automatically downloads the package and its dependencies.

## Alternative installation methods

- **Visual Studio:** Use **Manage NuGet Packages** to search for and install the package.
- **Command Line:** Run `dotnet add package Syncfusion.EJ2.PdfViewer.AspNet.Core` in the project directory.

## Licensing requirement

Ensure you register the Syncfusion license key in the application before deployment. For more information, see the [Syncfusion licensing documentation](https://help.syncfusion.com/common/essential-studio/licensing/license-key).
