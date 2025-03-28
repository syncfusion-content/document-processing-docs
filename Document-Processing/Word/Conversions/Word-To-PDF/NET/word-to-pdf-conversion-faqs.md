---
title: Word to PDF conversion FAQs | DocIO | Syncfusion
description: Learn about the frequently asked questions of Word to PDF conversion in the .NET Word (DocIO) library.
platform: document-processing
control: DocIO
documentation: UG
---

# Frequently Asked Questions

The frequently asked questions about Word to PDF conversion in Essential<sup>&reg;</sup> DocIO are listed below.

## Could not find Syncfusion.OfficeChartToImageConverter assembly in .NET 3.5 Framework, does it mean there is no support for chart conversion in this Framework? 

Yes, OfficeChartToImageConverter assembly is not supported in .NET 3.5 Framework and it is available in .NET 4.0 Framework.

## Is it possible to convert 3D charts to PDF?

Current version of the DocIO library does not provide support for converting 3D charts to PDF format.

## Is it possible to specify PDF conformance level in Word to PDF conversion?

Yes, you can specify the PDF conformance level in Word to PDF conversion. For more details, refer [PDF Conformance](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-pdf-conformance).

## Why are content controls not preserved as editable form fields in the converted PDF document even when PreserveFormFields is enabled? 

Content controls behave differently from legacy form fields, such as Text, Checkbox, and Drop-down fields, during conversions to PDF format. While legacy form fields are typically preserved as editable form fields in the resulting PDF document, content controls are converted to plain text. The [PreserveFormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_PreserveFormFields) API specifically retains the interactive nature of legacy form fields, not content controls.
To ensure that form fields remain editable in the PDF converted from Word document, it is recommended to use [Text](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-form-fields#text-form-field), [Checkbox](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-form-fields#check-box), and [Drop-down](https://help.syncfusion.com/document-processing/word/word-library/net/working-with-form-fields#drop-down) form fields instead of content controls in the Word document. Additionally, to preserve the form fields as editable in the resulting PDF, set the [PreserveFormFields](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_PreserveFormFields) API to true.

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Create-fillable-PDF-from-Word).

## How to validate the PDF conformance level in a DocIO-converted PDF?

PDF conformance can be verified using tools like **Adobe Acrobat Pro, VeraPDF, Xodo Validator, and PDFCreator Validator**. These tools check if the PDF meets compliance standards. DocIO-generated PDFs can be validated using any of these tools to ensure compliance with the required standards.

## Is it possible to preserve track changes revisions in a Word document as comments in a PDF using DocIO?

When a Word document with revisions is converted to a PDF using Microsoft Word, the revisions are preserved as balloons. So, it is not possible to preserve revisions in a Word document as comments in a PDF. Using DocIO, revisions can be displayed as balloons in the converted PDF by enabling the [ShowMarkup](https://help.syncfusion.com/cr/document-processing/Syncfusion.DocIO.DLS.RevisionOptions.html#Syncfusion_DocIO_DLS_RevisionOptions_ShowMarkup) property. Refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#show-or-hide-revisions-in-balloons) and [GitHub sample](https://github.com/SyncfusionExamples/DocIO-Examples/tree/main/Word-to-PDF-Conversion/Show-or-hide-revisions-in-balloons) for implementation.

