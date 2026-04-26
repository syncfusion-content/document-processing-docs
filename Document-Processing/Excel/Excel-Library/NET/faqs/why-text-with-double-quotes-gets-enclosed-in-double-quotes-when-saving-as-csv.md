---
title: Text with double quotes enclosed when saving as CSV | Syncfusion
description: Explains why Excel encloses fields containing double quotes within double quotes when saving as CSV and how quotes inside fields are escaped by doubling them.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why does text with double quotes get enclosed in double quotes when saving as CSV?

This is expected and correct behavior in Microsoft Excel. When a cell’s text contains a double quote ("), Excel automatically encloses the entire text value within double quotes while saving the file in CSV (Comma-Separated Values) format.
