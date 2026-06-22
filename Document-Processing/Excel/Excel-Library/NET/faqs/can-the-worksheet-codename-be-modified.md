---
title: Can the Worksheet.CodeName be modified? | Syncfusion
description: This page explains that the Worksheet.CodeName property is read-only and cannot be modified using Syncfusion XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Can the Worksheet.CodeName be modified?

In Microsoft Excel, the CodeName property represents the programmatic identifier assigned to a worksheet, which can be used in VBA macros to reference the worksheet. When working with worksheets in Syncfusion XlsIO, you can retrieve the CodeName of a worksheet using the `CodeName` property.

However, the `CodeName` property in XlsIO is **read-only**. This means you can read the existing codename of a worksheet, but you cannot change or modify it programmatically. The codename is assigned by Microsoft Excel and is part of the workbook's internal structure.