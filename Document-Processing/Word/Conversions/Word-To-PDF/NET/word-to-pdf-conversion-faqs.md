---
title: Word to PDF conversion FAQs | DocIO | Syncfusion
description: Learn about the frequently asked questions of Word to PDF conversion in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Frequently Asked Questions

The frequently asked questions about Word to PDF conversion in Essential DocIO are listed below.

## Could not find Syncfusion.OfficeChartToImageConverter assembly in .NET 3.5 Framework, does it mean there is no support for chart conversion in this Framework? 

Yes, OfficeChartToImageConverter assembly is not supported in .NET 3.5 Framework and it is available in .NET 4.0 Framework.

## Is it possible to convert 3D charts to PDF?

Current version of the DocIO library does not provide support for converting 3D charts to PDF format.

## Is it possible to specify PDF conformance level in Word to PDF conversion?

Yes, you can specify the PDF conformance level in Word to PDF conversion. For more details, refer [PDF Conformance](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-pdf-conformance).

## Which one is better Azure App Service or Cloud Service for Word to PDF using DocIO?

When the Word document contains metafile images (*.emf or *.wmf), we recommend using Azure Cloud Service.

We have found metafile images (*.emf, *.wmf) that are not supported in Azure App Service while converting a Word document with metafile images into PDF. And also, this is one of the known limitations in Azure App Service. In this scenario, internally, Essential DocIO preserves RedX images in the same size during the Word to PDF conversion to avoid pagination problems.

## Why images are preserved as RedX images in Word to PDF conversion?

**In .NET Core or .NET targeting applications**, metafile (*.wmf, *.emf) images have some limitations in DocIORenderer. Internally, DocIORenderer used the SkiaSharp graphics library to layout the text and images in PDF conversion. And SkiaSharp library does not support the metafile (".emf", ".wmf") images, so, it does not preserve the images in the mentioned applications.

If the Word document contains metafile (*.wmf" or *.emf") images, internally, DocIO preserves those images as RedX images with the same size of the original images during the Word to PDF conversion to avoid pagination problems.

To preserve the expected images in the PDF conversion, we suggest you convert the metafile image formats to bitmap image format (JPEG or PNG) and then perform Word to PDF conversion.

**Suggestions:**

1. You can convert metafile image format to bitmap image format in the Word document using DocIO, you can refer to KB documentation link: [Convert and replace metafile image in word document to bitmap](https://support.syncfusion.com/kb/article/11331/how-to-convert-and-replace-emf-image-in-word-document-to-png-with-same-size). As this approach uses System.Drawing.Common, it is known limitation in Linux or cross platforms.

2. Otherwise, you can use the [WPF](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.Wpf/) or [Windows Forms](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.WinForms/) platform NuGet packages for .NET Core 3.0 or later versions targeting applications from v17.3.0.x and use the same [C# tab](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf) code examples for it. But in Mac and Linux environment, using the [WPF](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.Wpf) or [Windows Forms](https://www.nuget.org/packages/Syncfusion.DocToPDFConverter.WinForms/) platform NuGet packages have limitations.

## Why are content controls not preserved as editable form fields in the converted PDF document even when PreserveFormFields is enabled? 

Content controls behave differently from legacy form fields, such as Text, Checkbox, and Drop-down fields, during conversions to PDF format. While legacy form fields are typically preserved as editable form fields in the resulting PDF document, content controls are converted to plain text. The [PreserveFormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_PreserveFormFields) API specifically retains the interactive nature of legacy form fields, not content controls.
To ensure that form fields remain editable in the PDF converted from Word document, it is recommended to use [Text](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-form-fields#text-form-field), [Checkbox](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-form-fields#check-box), and [Drop-down](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-form-fields#drop-down) form fields instead of content controls in the Word document. Additionally, to preserve the form fields as editable in the resulting PDF, set the [PreserveFormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_PreserveFormFields) API to true.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Create-fillable-PDF-from-Word).
