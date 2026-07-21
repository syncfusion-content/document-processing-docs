---
title: Create Word document in Microsoft Azure | Syncfusion
description: Learn how to create a Word document in Azure services using Syncfusion<sup>&reg;</sup> .NET Word (DocIO) library in C#.
platform: document-processing
control: DocIO
documentation: UG
---

# Create Word document in Microsoft Azure — overview

Syncfusion<sup>&reg;</sup> Essential<sup>&reg;</sup> DocIO is a [.NET Word (DocIO) library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit, and convert Word documents programmatically without Microsoft Word or interop dependencies. Using this library, you can **create a Word document in Azure services** within a few lines of code.

This page is an index of the supported Azure services. Select a service below to open the step-by-step guide for creating a Word document in that environment.

## Prerequisites 

* An active **Microsoft Azure subscription** is required. If you don't have one, create a free account before starting.
* An IDE such as Visual Studio 2022 or later, or Visual Studio Code.
* A Syncfusion license key — see [Registering a Syncfusion license in your application](https://help.syncfusion.com/common/essential-studio/licensing/how-to-register-in-an-application). DocIO requires license registration before any Syncfusion control or library is initialized.

For troubleshooting common installation and runtime issues, see [Installation errors](https://help.syncfusion.com/common/essential-studio/installation/installation-errors), [Licensing errors](https://help.syncfusion.com/common/essential-studio/licensing/licensing-errors), and the [Word Library FAQ](https://help.syncfusion.com/document-processing/word/word-library/net/faq).

## Azure Services

Choose your Azure service below to follow the detailed procedure. Each row lists the DocIO NuGet package required for that environment.

N> Azure Functions v1 is **out of support** per Microsoft and is listed here only for legacy reference. For new projects, use Azure Functions v4 with the `Syncfusion.DocIO.Net.Core` package.

<table>
<thead>
<tr>
<th>
Azure Services<br/></th><th>
NuGet package name<br/></th></tr></thead>
<tr>
<td>
{{'[App Service (Windows)](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-azure-app-service-windows)' | markdownify}}<br/></td><td>
{{'[Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)' | markdownify}}</td></tr>
<tr>
<td>
{{'[App Service (Linux)](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-azure-app-service-linux)' | markdownify}}<br/></td><td>
{{'[Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)' | markdownify}}<br/></td></tr>
<tr>
<td>
{{'[Azure Functions v1 (deprecated)](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-azure-functions-v1)' | markdownify}}<br/></td><td>
{{'[Syncfusion.DocIO.AspNet](https://www.nuget.org/packages/Syncfusion.DocIO.AspNet)' | markdownify}}<br/></td></tr>
<tr>
<td>
{{'[Azure Functions v4](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-azure-functions-v4)' | markdownify}}<br/></td><td>
{{'[Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)' | markdownify}}<br/></td></tr>
</table>

## Package selection notes

* `.Net.Core` packages target .NET Core / .NET (including .NET 6, 7, and 8) and are used by App Service (Windows), App Service (Linux), and Azure Functions v4.
* `.AspNet` packages target the .NET Framework and are used by Azure Functions v1, which runs on the .NET Framework worker. For new serverless projects, use Azure Functions v4 with the `.Net.Core` package.
