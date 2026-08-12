---
title: Frequently Asked Question for PowerPoint Presentation |Syncfusion
description: This section illustrates about frequently asked questions in various options by using Essential<sup>&reg;</sup> Syncfusion<sup>&reg;</sup> Presentation library.
platform: document-processing
control: Presentation
documentation: UG
---
# FAQ’s for PowerPoint Presentations

The frequently asked questions in Essential<sup>&reg;</sup> PowerPoint Presentations are listed below.

## Why do I get an exception when trying to load a PPT file?

The current version of the Presentation library supports only the .pptx format (Microsoft Office 2007 and later versions).

## Is it possible to print the Presentation slides?

Yes, you can print PowerPoint presentations by converting the slides to images and using the [PrintDocument](https://learn.microsoft.com/en-us/dotnet/api/system.drawing.printing.printdocument?view=net-11.0-pp) class. For more details, refer to the [Printing](https://help.syncfusion.com/document-processing/powerpoint/conversions/powerpoint-to-image/net/presentation-to-image) documentation.

## Is adding audio and video to a Presentation supported?

No, the current version of the Essential<sup>&reg;</sup> Presentation library does not support adding audio and video to a Presentation. For feature requests, contact Syncfusion support.

## What unit of measurement does Essential<sup>&reg;</sup> Presentation use to add slide elements such as text box, shape, picture, and chart?

Essential<sup>&reg;</sup> Presentation uses **points** as the unit of measurement when adding slide elements such as text boxes, shapes, pictures, and charts.

## Does Essential<sup>&reg;</sup> Presentation support cloning a slide in the Presentation?

Yes, Essential<sup>&reg;</sup> Presentation library supports cloning as follows:

   * A slide in the Presentation can be cloned from one Presentation to another, or within the same Presentation.
   * An entire Presentation can also be cloned as an independent copy of the original.

## Could not find Syncfusion.OfficeChartToImageConverter assembly in .NET 3.5 Framework, does it mean there is no support for chart conversion in this framework?

Yes, OfficeChartToImageConverter assembly is not supported in .NET 3.5 Framework and it is available from .NET 4.0 Framework.

## Can chart data be refreshed?

Yes, Essential<sup>&reg;</sup> Presentation supports refreshing the chart data. For more details, refer to [Working with charts](/document-processing/powerpoint/powerpoint-library/net/working-with-charts).

## Is it possible to convert 3D charts to PDF or image?

No, the current version of the Essential<sup>&reg;</sup> Presentation library does not support converting 3D charts to PDF or image format.

## How do I improve the image quality when converting Presentation slides to images?

You can improve the quality of converted images by specifying the image resolution (DPI). Refer to [Converting PowerPoint presentation to Images](/document-processing/powerpoint/powerpoint-library/net/getting-started#converting-powerpoint-presentation-to-images).

## What are the NuGet packages required to perform PowerPoint Presentation to PDF conversion in Linux OS?

On Linux OS, perform PowerPoint presentation to PDF conversion using a .NET Core (Targeting .netcoreapp) application. Refer to [PowerPoint presentation to PDF conversion NuGet packages](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/nuget-packages-required#converting-powerpoint-presentation-into-pdf) for the base Syncfusion PowerPoint NuGet packages required to deploy the .NET Core application with PDF conversion capabilities.

In addition to the previous NuGet packages, your application needs to install the following NuGet packages.

<table>
<thead>
<tr>
<th width="20%">
Syncfusion Version
</th>
<th width="40%">
NuGet packages to install
</th>
</tr>
</thead>
<tr>
<td>
From v32.1.19
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.119.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.119.1)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.1.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.1.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v28.2.3
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v3.116.1](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/3.116.1)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v8.3.0.1](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/8.3.0.1)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v27.2.2
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.8](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.8)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v7.3.0.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v23.1.40
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.6](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.6)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v7.3.0](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/7.3.0)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v20.3.0.56 
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.2](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.2)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.8.2.2](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.8.2.2)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v20.1.0.x 
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.88.0-preview.209](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.88.0-preview.209)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.8.2-preview.209](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.8.2-preview.209)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v19.4.0.x
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.80.2 NuGet](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.80.2)'| markdownify }}<br/>
{{'[HarfBuzzSharp.NativeAssets.Linux v2.6.1.7 NuGet](https://www.nuget.org/packages/HarfBuzzSharp.NativeAssets.Linux/2.6.1.7)'| markdownify }}
</td>
</tr>
<tr>
<td>
From v18.4.0.x to 19.4.0.x
</td>
<td>
{{'[SkiaSharp.NativeAssets.Linux v2.80.2 NuGet](https://www.nuget.org/packages/SkiaSharp.NativeAssets.Linux/2.80.2)'| markdownify }}<br/>
</td>
</tr>
<tr>
<td>
Before v18.4.0.x
</td>
<td>
Install the SkiaSharp.Linux NuGet package for the .NET Core application in Linux OS. Find the SkiaSharp.Linux NuGet package created by us from {{'[here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/SkiaSharp.Linux.1.59.3-2103435070)'| markdownify }}.<br/>
</td>
</tr>
</table>

## Multithreading

* [Does the PowerPoint library support multithreading and thread-safety?](https://help.syncfusion.com/document-processing/powerpoint/powerpoint-library/net/faqs/multithreading-powerpoint-reading-faqs#does-the-powerpoint-library-support-multithreading-and-thread-safety)  

## Does a PPTX file support sensitivity labels?
No. The Presentation library processes the file-level information of a PowerPoint file. Sensitivity labels are organization-level settings applied through Microsoft Purview and are not stored within the PPTX file itself. As a result, the Presentation library does not support setting, getting, or preserving sensitivity labels. For background, see [Microsoft sensitivity labels overview](https://learn.microsoft.com/en-us/purview/sensitivity-labels).

## Can the Presentation library open a PPTX file with sensitivity labels applied?
If a PPTX file is encrypted due to its sensitivity label configuration, the Presentation library cannot open it because the content is stored in an encrypted format and requires an authorized Microsoft account for access. To detect this case before calling `Open`, wrap the call in a try/catch and handle the file-format/encryption exception, or remove the sensitivity label in Microsoft PowerPoint before opening.

## Does the PowerPoint library support asynchronous methods to open or save a presentation?
No, the Syncfusion PowerPoint library does not provide asynchronous APIs for opening or saving presentations. However, the library is highly optimized for performance and is thread-safe, allowing you to perform presentation-processing operations off the UI thread.
