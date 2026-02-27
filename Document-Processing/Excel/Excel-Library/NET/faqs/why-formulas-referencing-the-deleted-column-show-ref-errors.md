---
title: Formulas reference errors | Syncfusion
description: This page explains why the formulas that referenced cells in the deleted column will display REF! errors.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why do formulas referencing a deleted column show #REF! errors?
When a column is deleted either directly in Excel or programmatically using Syncfusion XlsIO the entire column is removed and the columns to the right shift left. If any formula referenced cells within the deleted column, Excel can no longer resolve those references. As a result, the affected formulas display #REF! errors to indicate that the referenced cells no longer exist. Syncfusion XlsIO follows the same behavior as Microsoft Excel in this scenario.
