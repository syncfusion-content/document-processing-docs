---
title: Create Word document in AWS | Syncfusion
description: Learn how to create a Word document in Amazon Web Services (AWS) using Syncfusion<sup>&reg;</sup> .NET Core Word (DocIO) library in C#.
platform: document-processing
control: DocIO
documentation: UG
---

# Create Word document in Amazon Web Services (AWS)

Syncfusion<sup>&reg;</sup> DocIO is a [.NET Core Word library](https://www.syncfusion.com/document-sdk/net-word-library) used to create, read, edit, and convert Word documents programmatically without **Microsoft Word** or interop dependencies. This page is an overview that links to service-specific guides for creating a Word document in Amazon Web Services (AWS) using the .NET Core Word (DocIO) library in C#.

N> If this is your first time working with Amazon Web Services (AWS), refer to the [AWS getting started resources](https://aws.amazon.com/getting-started/) before proceeding.

## Prerequisites 

* An active **Amazon Web Services (AWS) account** is required. If you don’t have one, please [create an account](https://aws.amazon.com/) before starting. Ensure your IAM user has the permissions required to deploy and invoke the target AWS service (Lambda or Elastic Beanstalk).

* **Visual Studio 2022** (or later) with the **.NET Core cross-platform development** workload, and a supported **.NET Core / .NET** SDK (the `Syncfusion.DocIO.Net.Core` package targets .NET Core 3.1, .NET 5, .NET 6, .NET 7, and .NET 8). Download it from [visualstudio.microsoft.com](https://visualstudio.microsoft.com/).

* Install the **AWS Toolkit for Visual Studio** from **Extensions > Manage Extensions** in Visual Studio (the toolkit is hosted on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.AWSToolkitforVisualStudio)). It is required for publishing an AWS Lambda function from Visual Studio and optional for the Elastic Beanstalk walkthrough.

* Add a reference to the [`Syncfusion.DocIO.Net.Core`](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core) NuGet package in your project. Starting with v16.2.0.x, you must also add the `Syncfusion.Licensing` assembly reference and register a Syncfusion license key in your application. For details, refer to [Registering a Syncfusion license key](https://help.syncfusion.com/common/essential-studio/licensing/overview).

N> For troubleshooting common deployment failures (Lambda timeouts, cold starts, file paths in serverless environments), see the service-specific pages linked below.

## Supported AWS services

The following AWS services are supported for creating a Word document with DocIO. Select a service to view the full, step-by-step walkthrough including code samples.

## Amazon Web Services (AWS)

<table>
<thead>
<tr>
<th>
Amazon Web Services (AWS)<br/></th><th>
NuGet package name<br/></th></tr></thead>
<tr>
<td>
{{'[AWS Lambda](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-aws-lambda)' | markdownify}} <br/></td><td>
{{'[Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)' | markdownify}}<br/> 
</td></tr>
<tr>
<td>
{{'[AWS Elastic Beanstalk](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-aws-elastic-beanstalk)' | markdownify}} <br/></td><td>
{{'[Syncfusion.DocIO.Net.Core](https://www.nuget.org/packages/Syncfusion.DocIO.Net.Core)' | markdownify}}<br/> 
</td></tr>
</table>

N> The `Syncfusion.DocIO.Net.Core` package is compatible with .NET Core 3.1, .NET 5, .NET 6, .NET 7, and .NET 8. For the full list of supported frameworks on each AWS service, see the linked service-specific page.

The following minimal sample shows the DocIO API used on both AWS services. For the complete, deployment-ready walkthrough (project setup, data files, publish steps), follow the service-specific link in the table above.

```csharp
//Creates a new instance of WordDocument (Empty Word Document).
using (WordDocument document = new WordDocument())
{
    //Adds a section and a paragraph to the document.
    document.EnsureMinimal();
    //Appends text to the last paragraph of the document.
    document.LastParagraph.AppendText("Hello World");

    //Saves the Word document to MemoryStream.
    MemoryStream stream = new MemoryStream();
    document.Save(stream, FormatType.Docx);

    //Return or download the Word document as required by the AWS service.
    //AWS Lambda:    return Convert.ToBase64String(stream.ToArray());
    //Elastic Beanstalk: return File(stream, "application/msword", "Sample.docx");
}
```

## See Also

* [Getting started with a simple Word document](https://help.syncfusion.com/document-processing/word/word-library/net/getting-started)
* [Syncfusion licensing overview](https://help.syncfusion.com/common/essential-studio/licensing/overview)
* [Create Word document in ASP.NET Core](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-asp-net-core)
* [Create Word document in Docker](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-linux-docker)
* [Create Word document in Linux](https://help.syncfusion.com/document-processing/word/word-library/net/create-word-document-in-linux)
