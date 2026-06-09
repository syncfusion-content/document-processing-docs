---
title: How to resolve minor text differences in XlsIO PDF? | Syncfusion
description: Learn how to resolve minor visual differences in PDF files generated using Syncfusion XlsIO by enabling the EmbedFonts property in ExcelToPdfConverterSettings.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to resolve minor text differences in XlsIO PDF output?

When converting Excel documents to PDF using Syncfusion XlsIO, you may notice minor visual differences in text rendering compared to PDF files generated directly from Microsoft Excel. These differences typically occur due to font substitution during the PDF conversion process.

The `ExcelToPdfConverterSettings` class provides an `EmbedFonts` property, which allows fonts to be embedded directly into the generated PDF. Enabling `EmbedFonts = true` ensures consistent text rendering and helps eliminate minor text differences between PDFs created using Excel and those generated using XlsIO.