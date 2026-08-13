---
title: How to Handle Spaces in .NET Excel Library | Syncfusion
description: Handle leading and trailing spaces in Excel cell values during calculation and display using Syncfusion XlsIO.
platform: document-processing 
control: XlsIO 
documentation: UG
---

# How to handle spaces in cell values in .NET Excel Library

In Microsoft Excel, leading and trailing spaces in cell values are preserved for display purposes. However, when performing calculations (for example, **=A1+5** where A1 contains **" 25 "** with spaces), Excel automatically ignores those spaces and treats the underlying numeric value. Spaces are always shown in the cell but ignored in calculations. Syncfusion XlsIO follows the same behavior.
