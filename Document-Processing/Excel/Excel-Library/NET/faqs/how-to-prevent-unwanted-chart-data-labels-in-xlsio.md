---
title: How to prevent unwanted chart data labels in XlsIO? | Syncfusion
description: This page explains how to prevent unwanted chart data labels when resaving Excel documents using Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to prevent unwanted chart data labels in XlsIO?

When resaving Excel documents using Syncfusion XlsIO, you may notice additional or unwanted chart data label options appearing in the output file. This issue occurs because XlsIO processes chart data labels based on the default workbook version, which is set to **Excel 2007**.

To prevent this behavior, set the workbook version to **Xlsx** `application.DefaultVersion = ExcelVersion.Xlsx;`, which ensures that chart elements are serialized correctly and aligns with newer Excel standards.