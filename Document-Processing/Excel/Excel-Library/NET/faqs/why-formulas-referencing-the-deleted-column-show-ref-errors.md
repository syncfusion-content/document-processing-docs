---
title: Formulas reference errors | Syncfusion
description: This page tells why formulas referencing the deleted column show REF! errors.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why do formulas referencing a deleted column show #REF! errors?

When a column is deleted, either in Excel or via Syncfusion XlsIO, the entire column is removed and subsequent columns shift left. Any formula that referenced cells in the deleted column will display #REF! because those cell references no longer exist; Syncfusion XlsIO follows Excel's behavior in this regard.