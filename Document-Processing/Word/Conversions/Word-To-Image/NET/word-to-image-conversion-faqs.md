---
title: Word to image conversion FAQs | DocIO | Syncfusion
description: Learn about the frequently asked questions of Word to image conversion in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Frequently Asked Questions

The frequently asked questions about Word to image conversion using DocIO are listed below.

## Could not find Syncfusion.OfficeChartToImageConverter assembly in .NET 3.5 Framework, does it mean there is no support for chart conversion in this Framework? 

Yes, OfficeChartToImageConverter assembly is not supported in .NET 3.5 Framework and it is available in .NET 4.0 Framework.

## Is it possible to convert 3D charts to image?

Current version of the DocIO library does not provide support for converting 3D charts to image format.

## Which one is better Azure App Service or Cloud Service for Word to image using DocIO?

When the Word document contains metafile images (*.emf or *.wmf), we recommend using Azure Cloud Service.

We have found metafile images (*.emf, *.wmf) that are not supported in Azure App Service while converting a Word document with metafile images into image. And also, this is one of the known limitations in Azure App Service. In this scenario, internally, Essential<sup>&reg;</sup> DocIO preserves RedX images in the same size during the Word to image conversion to avoid pagination problems.
