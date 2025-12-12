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

## Why does a Word document converted to PDF on one device not display correctly when converted on another device?

If a converted PDF does not display correctly on another device, it may be due to missing fonts. The document appears fine on a machine with the required fonts installed but may not be rendered properly on another device. To fix this, set [EmbedFonts](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_EmbedFonts) and [EmbedCompleteFonts](https://help.syncfusion.com/cr/file-formats/Syncfusion.DocToPDFConverter.DocToPDFConverterSettings.html#Syncfusion_DocToPDFConverter_DocToPDFConverterSettings_EmbedCompleteFonts) to **true** during Word-to-PDF conversion to include the fonts in the PDF, ensuring consistent display across all devices.

For more details with implementation, refer to the [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/word-to-pdf-settings#embedding-fonts).

## Why are Chinese characters missing or blank in the PDF after Word-to-PDF conversion?

Chinese characters may not appear in the converted PDF if the original Word document uses fonts like **Calibri**, which do not support Chinese glyphs in PDFs.

To render Chinese and other Unicode characters correctly, we **recommend using the Arial Unicode MS font in your Word document**. If Arial Unicode MS is not installed on the machine during conversion, the characters will not display properly in the output PDF. To resolve this, **install the Arial Unicode MS font** on the system before converting the document.

## What is the difference between font substitution and fallback fonts in Word to PDF conversion?

<table>
  <thead>
    <tr>
      <th>Feature</th>
      <th>Fallback Fonts</th>
      <th>Font Substitution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Purpose</b></td>
      <td>Handles missing glyphs in a font.</td>
      <td>Replaces an entirely missing font.</td>
    </tr>
    <tr>
      <td><b>When It’s Used</b></td>
      <td>A font is present but lacks specific character glyphs.</td>
      <td>The required font is not installed on the system.</td>
    </tr>
    <tr>
      <td><b>How It Works</b></td>
      <td>Uses an alternative font only for missing glyphs while keeping the original font for other characters.</td>
      <td>Replaces the missing font with a specified alternative for all text using that font.</td>
    </tr>
    <tr>
      <td><b>Example</b></td>
      <td>Arial does not support Japanese characters, so "Noto Sans JP" is used for those glyphs.</td>
      <td>Arial is missing on the system, so "Helvetica" is used instead.</td>
    </tr>
    <tr>
      <td><b>Key Benefit</b></td>
      <td>Preserves the original font style while ensuring all text is rendered correctly.</td>
      <td>Ensures text consistency when the original font is unavailable.</td>
    </tr>
    <tr>
      <td><b>Documentation link</b></td>
      <td><a href="https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/fallback-fonts-word-to-pdf">Fallback fonts</a></td>
      <td><a href="https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/font-substituion-word-to-pdf">Font substitution</a></td>
    </tr>
  </tbody>
</table>

## Why does the SkiaSharp exception occur during Word to PDF or image conversion in Linux?

This exception typically occurs due to version mismatches between SkiaSharp and Syncfusion NuGet packages. To avoid this, ensure that compatible versions of SkiaSharp and Syncfusion.DocIO dependencies are used. Refer to the Word to PDF conversion [documentation](https://help.syncfusion.com/document-processing/word/conversions/word-to-pdf/net/convert-word-document-to-pdf-in-linux) for version compatibility details in Linux.

## Why does System.TypeInitializationException occur during Word to PDF or image conversion in Linux using Syncfusion DocIO?

This error usually occurs due to an incompatible GLIBC version on the Linux system. SkiaSharp, used by DocIO for rendering, requires a minimum GLIBC version to function correctly. For example, SkiaSharp version 3.119.1 requires at least GLIBC version 2.29, which is not available in older Linux distributions like Debian 10. If a lower version is present, the conversion may fail with errors such as GLIBC_2.29 not found. To resolve this, ensure the operating system includes the required GLIBC version for the SkiaSharp version being used, or upgrade to a newer Linux distribution.

## Is it possible to substitute fonts in a Word document?

No, DocIO does not support substituting fonts within a Word document. Font substitution is applied only during Word-to-PDF and image conversions to ensure rendering accuracy. To change fonts in the actual Word document, refer to: [How to change font for all text in a Word document](https://support.syncfusion.com/kb/article/17487/how-to-change-the-font-for-all-text-in-a-net-core-word-document).
