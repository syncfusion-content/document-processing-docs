---
title: Rules for named ranges in Excel | Syncfusion
description: Learn the naming conventions for Excel named ranges in XlsIO, including allowed characters, restrictions, and length limits.
platform: document-processing
control: XlsIO
documentation: UG
---

# What are the naming rules for named ranges in Excel?

When defining a named range in Excel, the following rules apply:

**Start character:** Must begin with a letter (A-Z/a-z), underscore (_), or backslash (\).

**Allowed characters:** Can include letters, numbers, underscores (_), and periods (.).

**Disallowed characters:** Spaces and most special characters (e.g., ! @ # $ % ^ & *) are not permitted.

**No cell references:** Names cannot resemble a valid cell reference (e.g., A1, R1C1).

**Length limit:** Maximum of 255 characters.

**Case sensitivity:** Names are case-insensitive (e.g., SalesData and salesdata are treated the same).