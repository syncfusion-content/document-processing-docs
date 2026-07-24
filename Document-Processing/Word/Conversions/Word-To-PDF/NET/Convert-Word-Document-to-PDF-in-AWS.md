---
title: Convert Word to PDF in AWS | Syncfusion
description: Learn how to convert a Word document to a PDF in Amazon Web Services (AWS) using Syncfusion<sup>&reg;</sup> .NET Core Word (DocIO) library in C#.
platform: document-processing
control: DocIO
documentation: UG
---

# Convert Word to PDF in Amazon Web Services (AWS)

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit, and **convert Word documents** programmatically without **Microsoft Word** or interop dependencies. Using this library, you can **convert a Word document to PDF in Amazon Web Services (AWS)** in just a few lines of code.

N> If this is your first time working with Amazon Web Services (AWS), refer to the [AWS resources](https://aws.amazon.com/getting-started/). This page lists the supported AWS deployment targets for converting Word documents to PDF using the .NET Core Word (DocIO) library, and links to the full step-by-step walkthrough for each.

## Prerequisites

The following prerequisites apply to all AWS deployment targets listed below:

- An active **AWS account**. If you don't have one, [create an account](https://aws.amazon.com/) before continuing.
- **.NET 8 SDK or later** installed locally.
- An **AWS Identity and Access Management (IAM) user** with permissions to create the chosen service (Lambda or Elastic Beanstalk), and a configured **AWS profile / credentials** in Visual Studio or the AWS CLI.
- **Visual Studio 2022** (or later) with the [**AWS Toolkit for Visual Studio**](https://aws.amazon.com/visualstudio/) installed. You can install the Toolkit from **Extensions** → **Manage Extensions** in Visual Studio.

## Supported AWS deployment targets

<table>
<thead>
<tr>
<th>
Amazon Web Services (AWS)<br/></th><th>
NuGet package name<br/></th></tr></thead>
<tr>
<td>
{{'[AWS Lambda](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-aws-lambda)' | markdownify}} <br/></td><td>
{{'[Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)' | markdownify}}<br/>
{{'[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)' | markdownify}} <br/>
</td></tr>
<tr>
<td>
{{'[AWS Elastic Beanstalk](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-aws-elastic-beanstalk)' | markdownify}} <br/></td><td>
{{'[Syncfusion.DocIORenderer.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIORenderer.Net.Core)' | markdownify}}<br/>
{{'[SkiaSharp.NativeAssets.Linux.NoDependencies v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux.NoDependencies/3.119.1)' | markdownify}} <br/>
</td></tr>
</table>
