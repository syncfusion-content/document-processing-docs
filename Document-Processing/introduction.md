---
title: Create, read, edit & convert PDF, Excel & Word files | Syncfusion
description: Create, read, edit, write, and convert PDF, Excel, Word, and PowerPoint file formats in .NET applications without Microsoft Office or Adobe dependencies.
platform: document-processing
control: general
documentation: UG
keywords: PDF, Excel, Word, PowerPoint, Office, SDK, Automation, API, create, edit, convert, read
---

> With the 2025 Volume 1 release, we will discontinue support for .NET 6.0 and 7.0 in WinForms, WPF, WinUI, and Document Processing Libraries. Please plan to upgrade to .NET 8.0 or higher.

# Welcome to Syncfusion<sup>&reg;</sup> Document Processing Platform

Essential<sup>&reg;</sup> Document Processing is a collection of .NET class libraries to create, edit, write, and convert PDF, Excel, Word, and PowerPoint file formats in .NET Framework [C#, VB.NET], .NET Core, and UWP applications without Microsoft Office or Adobe dependencies.

## How to best read this user guide

* The best way to get started would be to read the “Getting Started” section for the component you would like to start first. The “Getting Started” and “Assemblies required” sections gives enough information, so it is recommended to read these sections end-to-end before starting to write a code. All other information can be referred as needed. 
* After learning the basics about the component, integrate the component into your application. A good starting point is to refer to the code examples in the sample browser and in this user guide. It is very likely that you can find a code example that resembles your intended usage scenario. 
* Another valuable resource is available in the [API reference](https://help.syncfusion.com/cr/document-processing) that provides detailed information on the object hierarchy as well as the settings available on every object.

## Additional help resources

The [Knowledge Base](https://support.syncfusion.com/kb) section contains responses for common questions asked by the customers. This would be a good place to search for the topics that are not covered in the User Guide.

Similar to the Knowledge Base, the [Forum](https://www.syncfusion.com/forums/) section also contains responses to the questions that are asked by other customers.

## Create a support incident

If you are unable to find the information you are looking for in the self-help resources mentioned above, please contact us by creating a [support ticket](https://www.syncfusion.com/support/directtrac/incidents).

## List of Document Processing libraries:

<table>
<tr>
<th width="25%">
Document Processing library
</th>
<th width="75%">
Description
</th>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> PDF
</td>
<td>
<a href="https://www.syncfusion.com/document-sdk/net-pdf-library">.NET class library</a>  used to create, read, and write PDF files and convert office (Word, Excel, PowerPoint) to PDF in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, JavaScript, Flutter and Blazor applications.
</td>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> DocIO
</td>
<td>
<a href="https://www.syncfusion.com/document-sdk/net-word-library">.NET class library</a>  used to create, read, edit, and convert Microsoft Word files in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, Java, and Blazor applications.
</td>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> XlsIO
</td>
<td>
<a href="https://www.syncfusion.com/document-sdk/net-excel-library">.NET class library</a>  used to create, read, edit, write, and convert Microsoft Excel files in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, Flutter, and Blazor applications.
</td>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> Presentation
</td>
<td>
<a href="https://www.syncfusion.com/document-sdk/net-powerpoint-library">.NET class library</a>  used to create, read, edit, and convert Microsoft PowerPoint (PPTX) files in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, and Blazor applications.
</td>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> PDF Converter
</td>
<td>
<a href="https://help.syncfusion.com/document-processing/pdf/conversions/overview">.NET class library</a>   that converts several file formats such as HTML, Word, Excel, PowerPoint, and images to PDF documents. It also supports conversion of PDF documents to images in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, and Blazor applications.
</td>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> Data Extraction
</td>
<td>
<a href="https://help.syncfusion.com/document-processing/data-extraction/overview">.NET class library</a>  used to extract structured and unstructured data (such as text, tables, key-value pairs, and layout information) from various document formats including PDFs and images. Enables automated data capture and processing in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, and Blazor applications.
</td>
</tr>
<tr>
<td>
Essential<sup>&reg;</sup> Markdown
</td>
<td>
.NET class library  used to create, read, edit, and convert Markdown (.md) files to other formats such as HTML. Enables seamless Markdown processing and rendering in .NET Framework [Windows Forms, WPF, ASP.NET MVC], .NET Core, UWP, WinUI, .NET MAUI, and Blazor applications.
</td>
</tr>
</table>

## AI-Driven Features

[Syncfusion Document SDK AI Agent Tool](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) is a .NET library that allows AI agents to create, edit, convert, and extract data from documents such as Word, Excel, PDF, PowerPoint, and Markdown. It provides pre-built, AI-callable tools powered by the [Syncfusion Document SDK](https://www.syncfusion.com/document-sdk), eliminating the need for custom document-processing logic. These tools integrate seamlessly into your application, enabling automated and intelligent workflows. Overall, AI Agent Tools help make document processing faster, smarter, and more efficient.

## Web APIs

[Syncfusion Document Processing Web APIs](https://hub.docker.com/r/syncfusion/document-processing-apis) provide RESTful services to create, edit, convert, and extract data from documents such as Word, Excel, PDF, and PowerPoint. These APIs enable seamless integration of document processing capabilities into any application without requiring local dependencies. They support a wide range of operations, including format conversion, content manipulation, and data extraction. Designed for scalability and flexibility, the Web APIs help automate document workflows efficiently. Overall, they simplify document processing and improve productivity across platforms.

## Document Processing Security Information

Syncfusion<sup>&reg;</sup> products are used in some of the most sensitive applications.  We must be concerned about security.

We prioritized security when developing our products.  Each control is self-contained and does not require outside server or Syncfusion<sup>&reg;</sup> API.  Our products exist as defined by the developer and only do the commands defined by the developer.  We built them to work with any security paradigms that our customers can utilize.

Our customers cannot use any hosted Web APIs provided by syncfusion.  We provide the necessary libraries and code examples for our customers to build their own APIs by allowing them to customize the functionality and manage their own security. Additionally, these APIs can be packaged and deployed using Docker images for easier setup and consistent deployment across different environments.

![Document Processing Security Information](introductionpage_images/securityinfo.png)
	
## See also

- [PDF Library](https://help.syncfusion.com/document-processing/pdf/overview)
- [Word Library](https://help.syncfusion.com/document-processing/word/overview)
- [Excel Library](https://help.syncfusion.com/document-processing/excel/overview)
- [PowerPoint Library](https://help.syncfusion.com/document-processing/powerpoint/overview)
- [Data Extraction](https://help.syncfusion.com/document-processing/data-extraction/overview)
