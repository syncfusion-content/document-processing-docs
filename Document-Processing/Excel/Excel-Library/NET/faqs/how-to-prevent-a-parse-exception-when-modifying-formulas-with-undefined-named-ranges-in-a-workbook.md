---
title: Prevent ParseException when updating formulas | Syncfusion
description: This page explains how to prevent ParseException when modifying formulas with undefined named ranges in Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# Prevent ParseException from undefined named ranges

To prevent a ParseException when modifying formulas that reference undefined named ranges, set the following property before updating the formula:

**C# Code:**
~~~
workbook.ThrowOnUnknownNames = false;
~~~

This ensures that formulas with undefined named ranges won't trigger errors during assignment or modification.