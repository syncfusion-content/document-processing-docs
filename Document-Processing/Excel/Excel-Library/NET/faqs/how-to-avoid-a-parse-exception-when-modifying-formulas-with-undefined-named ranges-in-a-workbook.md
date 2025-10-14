---
title: Avoid ParseException when modifying formulas with undefined named ranges | Syncfusion
description: This page explains how to avoid ParseException when modifying formulas with undefined named ranges in Syncfusion .NET Excel library (XlsIO).
platform: document-processing
control: XlsIO
documentation: UG
---

# How to avoid a ParseException when modifying formulas with undefined named ranges in a workbook?

To prevent a ParseException when modifying formulas that reference undefined named ranges, set the following property before updating the formula:

**C# Code:**
~~~
workbook.ThrowOnUnknownNames = false;
~~~

This ensures that formulas with undefined named ranges won't trigger errors during assignment or modification.