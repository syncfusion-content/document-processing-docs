---
title: Why XlsIO Creates custom format for Negative number formats? | Syncfusion
description: Thid FAQ explains why XlsIO creates custom formats instead of built-in number formats for negative numbers.
platform: document-processing
control: XlsIO
documentation: UG
---

# Why XlsIO Creates custom format for Negative number formats?

In Microsoft Excel, the Number category includes built‑in presets for formatting negative numbers (such as minus sign, red text, or parentheses). When you select these options directly in Excel, they are treated as standard built‑in formats, so they appear under the Number category.

However, in Syncfusion XlsIO, these built‑in presets are not exposed directly. Instead, formatting is applied using format strings (for example, #,##0;(#,##0)). Although this produces the same visual result in Excel, it is still considered a custom format because it is defined explicitly as a string rather than selected from Excel’s internal presets.

As a result, when you open the file in Excel, the format is shown under the Custom category. This behavior is expected and occurs because Excel distinguishes between built‑in formats and user‑defined format strings, even if they look identical.
