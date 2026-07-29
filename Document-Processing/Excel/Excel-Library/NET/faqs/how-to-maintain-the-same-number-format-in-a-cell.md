---
title: How to maintain the same number format in a cell? | Syncfusion
description: This page explains how to preserve consistent number formatting in a cell using the Syncfusion XlsIO library.
platform: document-processing
control: XlsIO
documentation: UG
---

# How to maintain the same number format in a cell?

When a value is set to a cell using the [Value](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Value) or [Value2](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Value2) property, the value is automatically parsed and the cell's number format is adjusted based on the parsed type. Because of this behavior, the change in format is not caused by any sorting operation itself, but by how the Value or Value2 property works when you reapply the value.

To maintain the same number format in the cell, we recommend using the [Text](https://help.syncfusion.com/cr/document-processing/Syncfusion.XlsIO.IRange.html#Syncfusion_XlsIO_IRange_Text) property instead of Value or Value2.
