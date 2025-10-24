---
layout: post
title: Install packages for ASP.NET Core PDF Viewer
description: Learn how to install the Syncfusion ASP.NET Core PDF Viewer NuGet package and restore the required dependencies.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET Core
documentation: ug
---

# Install EJ2 PDF Viewer packages automatically

Install the Syncfusion ASP.NET Core PDF Viewer dependencies by adding the [Syncfusion.EJ2.PdfViewer.AspNet.Core](https://www.nuget.org/packages/Syncfusion.EJ2.PdfViewer.AspNet.Core/) package to the project file. When the project is built or a `dotnet restore` runs, NuGet downloads the package and its dependencies.

Open the `.csproj` file in Visual Studio or another editor and add the package reference entry shown below.

```cs
<PackageReference Include="Syncfusion.EJ2.PdfViewer.AspNet.Core" Version="*" />
```

Alternatively, install the package through **Manage NuGet Packages** in Visual Studio or by running `dotnet add package Syncfusion.EJ2.PdfViewer.AspNet.Core`. Ensure the Syncfusion license is registered in the application before publishing. For license requirements, refer to the [Syncfusion licensing](https://help.syncfusion.com/common/essential-studio/licensing/license-key) documentation.
