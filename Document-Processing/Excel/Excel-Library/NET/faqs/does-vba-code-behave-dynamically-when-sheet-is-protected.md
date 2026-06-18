---
title: Does VBA Work on Protected Sheets? | Syncfusion
description: This page explains why VBA code does not function dynamically when sheet protection is applied in Excel.
platform: document-processing
control: XlsIO
documentation: UG
---

# Does VBA code behave dynamically when the sheet is protected?

No, VBA code does not behave dynamically when the sheet is protected. The dynamic behavior of VBA macros is restricted by sheet protection, causing them to function differently compared to when the sheet is unprotected.

When a protected sheet is present, Microsoft Excel limits the execution of VBA code that attempts to modify cell values, formulas, or other sheet properties. This is by design, as sheet protection is intended to prevent users from making changes to specific cells while allowing read-only access.

Removing the sheet protection enables the VBA code to work as expected, restoring full dynamic functionality.
