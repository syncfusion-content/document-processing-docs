---
title: NuGet Packages for .NET Markdown Library | Syncfusion
description: Learn the NuGet packages required to use the .NET Markdown library to create, read, and edit Markdown documents without external dependencies.
platform: document-processing
control: Markdown
documentation: UG
---

# NuGet Packages Required for .NET Markdown Library

## Installing Syncfusion<sup>&reg;</sup> Markdown through NuGet Packages

NuGet is one of the easiest ways to download and install the Markdown library to create, read, and edit Markdown documents. The following NuGet package needs to be installed in your application.

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
Windows Forms / Console (.NET Framework) / WPF / {{'[ASP.NET MVC](/document-processing/markdown/markdown-library/net/create-markdown-document-in-asp-net-mvc)' | markdownify}} / {{'[ASP.NET Core](/document-processing/markdown/markdown-library/net/create-markdown-document-in-asp-net-core)' | markdownify}} / Console (.NET Core) / {{'[Blazor](/document-processing/markdown/markdown-library/net/create-markdown-document-in-blazor)' | markdownify}} / WinUI / MAUI / UWP
</td>
<td>
Syncfusion.Markdown.nupkg
</td>
<td>
Install-Package Syncfusion.Markdown
</td>
</tr>
</table>

N> 1. Syncfusion<sup>&reg;</sup> components are available in [nuget.org](https://www.nuget.org/)
N> 2. Starting with v34.x.x, if you reference Syncfusion® assemblies from trial setup or from the NuGet feed, you also have to add “Syncfusion.Licensing” assembly reference and include a license key in your projects. Please refer to this link to know about registering Syncfusion® license key in your application to use our components.

## NuGet Package Installation and Uninstallation

To use Syncfusion<sup>&reg;</sup> NuGet packages in your project, refer to the NuGet package [Installation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-packages) and [Uninstallation](https://help.syncfusion.com/extension/syncfusion-nuget-packages/nuget-uninstallation-process#) sections.

Markdown NuGet packages can be installed and uninstalled using Package Manager Console. 

In Visual Studio, select `Tools > NuGet Package Manager > Package Manager Console` and execute the following commands.

**NuGet Package:** Syncfusion.Markdown

The package contains Markdown library that allows you to create, read and edit Markdown documents.

~~~
// Install package
Install-Package Syncfusion.Markdown
~~~
~~~
// Uninstall package
Uninstall-Package Syncfusion.Markdown -RemoveDependencies
~~~