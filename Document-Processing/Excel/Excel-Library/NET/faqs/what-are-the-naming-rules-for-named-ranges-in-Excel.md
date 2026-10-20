---
title: Named Range Rules in .NET Excel Library | Syncfusion
description: Named range conventions describes allowed characters, restrictions, and length limits for Excel named ranges in Excel Library.
platform: document-processing
control: XlsIO
documentation: UG
---

# Named Range Rules in .NET Excel Library

When defining a named range in Excel, the following rules apply:

* **Start character:** Must begin with a letter (A-Z/a-z), underscore (_), or backslash (\).

* **Allowed characters:** Can include letters, numbers, underscores (_), and periods (.).

* **Characters not allowed:** Spaces and most special characters (e.g., ! @ # $ % ^ & *) are not permitted.

* **No cell references:** Names cannot resemble a valid cell reference (e.g., A1, R1C1).

* **Length limit:** Maximum of 255 characters.

* **Case sensitivity:** Names are case-insensitive.
