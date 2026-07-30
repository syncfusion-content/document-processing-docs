---
title: When to Use the AutoDetectComplexScript Property? | Syncfusion
description: Explains when to enable the AutoDetectComplexScript converter setting in XlsIO's Excel-to-PDF rendering.
platform: document-processing
control: XlsIO
documentation: UG
---

# In which situation we use AutoDetectComplexScript converter property?

Complex-script languages (for example, Arabic, Hebrew, Thai, and Hindi) store text in a logical order that may differ from the visual order in which it is displayed. Many such languages use bidirectional (BiDi) script: words and sentences are written right-to-left, while digits and Roman-based words within them are written left-to-right. When a worksheet contains these languages, the Excel-to-PDF converter needs to apply glyph shaping and BiDi reordering to render them correctly.

If your input Excel file contains complex-script text, enable the [ExcelToPdfConverterSettings.AutoDetectComplexScript](https://help.syncfusion.com/cr/document-processing/Syncfusion.ExcelToPdfConverter.ExcelToPdfConverterSettings.html#Syncfusion_ExcelToPdfConverter_ExcelToPdfConverterSettings_AutoDetectComplexScript) property. The property is a **bool**; the default is **true** in current XlsIO releases, so most Excel-to-PDF conversions already handle complex scripts correctly. Set the property explicitly to **true** to make the intent visible in code, or to **false** to skip the detection step (for example, when you know the source contains no complex-script text and you want a small performance gain).

## See Also

* [How to auto-detect complex script?](https://help.syncfusion.com/file-formats/xlsio/excel-to-pdf-converter-settings#auto-detect-complex-script)
* [How to use substitute font in Excel to PDF conversion?](https://help.syncfusion.com/file-formats/xlsio/excel-to-pdf-conversion#substitute-font-in-excel-to-pdf-conversion)
* [How to Embed Fonts?](https://help.syncfusion.com/file-formats/xlsio/excel-to-pdf-converter-settings#embed-fonts)
* [How to capture warnings in Excel to PDF conversion?](https://help.syncfusion.com/file-formats/xlsio/excel-to-pdf-converter-settings#capture-warnings-in-excel-to-pdf-conversion)
* [What is the image quality when using the ExportQualityImage property?](https://help.syncfusion.com/file-formats/xlsio/faqs/what-is-the-image-quality-when-using-the-exportqualityimage-property)
