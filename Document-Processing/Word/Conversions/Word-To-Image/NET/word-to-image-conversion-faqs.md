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

## Why does the SkiaSharp exception occur during Word to PDF or image conversion in Linux?

This exception typically occurs due to version mismatches between SkiaSharp and Syncfusion NuGet packages. To avoid this, ensure that compatible versions of SkiaSharp and Syncfusion.DocIO dependencies are used. Refer to the Word to PDF conversion [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-linux) for version compatibility details in Linux.

## Why does System.TypeInitializationException occur during Word to PDF or image conversion in Linux using Syncfusion DocIO?

This error usually occurs due to an incompatible GLIBC version on the Linux system. SkiaSharp, used by DocIO for rendering, requires a minimum GLIBC version to function correctly. For example, SkiaSharp version 3.119.1 requires at least GLIBC version 2.29, which is not available in older Linux distributions like Debian 10. If a lower version is present, the conversion may fail with errors such as GLIBC_2.29 not found. To resolve this, ensure the operating system includes the required GLIBC version for the SkiaSharp version being used, or upgrade to a newer Linux distribution.

## Is it possible to substitute fonts in a Word document?

No, DocIO does not support substituting fonts within a Word document. Font substitution is applied only during Word-to-PDF and image conversions to ensure rendering accuracy. To change fonts in the actual Word document, refer to: [How to change font for all text in a Word document](https://support.syncfusion.com/kb/article/17487/how-to-change-the-font-for-all-text-in-a-net-core-word-document).
