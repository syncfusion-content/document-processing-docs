---
title: Convert a Word document to Image in C# and VB.NET | Syncfusion
description: Learn how to convert a Word document to Image using the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---
# Rendering / Converting Word document to Image in Word Library

The Essential DocIO converts the Word document to images using the [RenderAsImages](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.WordDocument.html#Syncfusion_DocIO_DLS_WordDocument_RenderAsImages_Syncfusion_DocIO_DLS_ImageType_) method.

To quickly start converting a Word document to an image, please check out this video:
{% youtube "https://www.youtube.com/watch?v=hoV3i7nl85I" %}

Refer to the following links for assemblies and NuGet packages required based on platforms to convert the Word document to image.

* [Word to image conversion assemblies](https://help.syncfusion.com/document-processing/word/word-library/net/assemblies-required#converting-word-document-to-image) 
* [Word to image conversion NuGet packages](https://help.syncfusion.com/document-processing/word/word-library/net/nuget-packages-required#converting-word-document-to-image)

The following namespaces are required to compile the code in this topic:

**For WPF, Windows Forms, ASP.NET and ASP.NET MVC applications**
* using Syncfusion.DocIO
* using Syncfusion.DocIO.DLS
* using Syncfusion.OfficeChart
* using Syncfusion.OfficeChartToImageConverter

**For ASP.NET Core, Blazor, Xamarin, WinUI and .NET MAUI applications**
* using Syncfusion.DocIO
* using Syncfusion.DocIO.DLS
* using Syncfusion.DocIORenderer

T> 1. You can get the good quality converted images by specifying the image type as Metafile in the platforms targeting .NET Framework.
T> 2. You can specify the quality of the converted charts by setting the scaling mode.