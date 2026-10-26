---
title: Parameter Not Valid Exception in .NET Excel Library | Syncfusion
description: Custom paper size exception describes why a parameter not valid error occurs during Excel to PDF conversion.
platform: document-processing
control: XlsIO
documentation: UG
---

# Parameter Not Valid Exception in .NET Excel Library

**ParameterNotValid** exception occurs while trying to convert Excel document to PDF with large [CustomPaperSize](https://help.syncfusion.com/cr/document-processing/Syncfusion.ExcelToPdfConverter.ExcelToPdfConverterSettings.html#Syncfusion_ExcelToPdfConverter_ExcelToPdfConverterSettings_CustomPaperSize). Syncfusion&reg; XlsIO cannot handle such large values. Also, the values are considered in inches. Using height and width below 200 would resolve the issue.
