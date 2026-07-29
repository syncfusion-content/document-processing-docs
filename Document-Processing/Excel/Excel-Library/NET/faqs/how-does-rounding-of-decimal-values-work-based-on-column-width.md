---
title: How column width affects decimal rounding | Syncfusion
description: This page Explains how Syncfusion XlsIO handles rounding of decimal values based on column width compared to Microsoft Excel's behavior.
platform: document-processing
control: XlsIO
documentation: UG
---

# How does rounding of decimal values work based on column width?

In Microsoft Excel, decimal values are rounded to fit within the column width, displaying only the digits that can fit. If the column width is insufficient to display all decimal places, the remaining digits are truncated and displayed based on the available space.

Syncfusion XlsIO follows the same behavior as Microsoft Excel for rounding decimal values based on column width. This rounding is purely a display formatting effect and does not modify the underlying cell value.

To see all decimal places in a cell, increase the column width so that the complete value can be displayed without rounding.

N> Column width directly affects the visible decimal precision. Ensure adequate column width when working with high-precision decimal values.