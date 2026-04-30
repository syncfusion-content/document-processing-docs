---
title: Which characters should be avoided when naming worksheets? | Syncfusion
description: Worksheet names containing characters like '/' or ':' can corrupt a workbook. This FAQ shows how to validate and replace invalid characters in worksheet names using XlsIO.
platform: document-processing
control: XlsIO
documentation: UG
---

# Which characters should be avoided when naming worksheets?

Worksheets that include invalid characters such as `:` or `/` in their names can cause workbook corruption when opened in some viewers or when round-tripping between formats. Use XlsIO to validate and sanitize worksheet names before saving.

## Invalid Characters in Worksheet Names

Excel does not allow the following seven characters in worksheet names:

| Character | Symbol | Issue |
|---|---|---|
| Colon | `:` | Causes path confusion in some file systems |
| Backslash | `\` | Used as path separator, causes file system errors |
| Forward Slash | `/` | Used as directory separator, creates ambiguity |
| Question Mark | `?` | Wildcard character, causes parsing issues |
| Asterisk | `*` | Wildcard character, causes file system conflicts |
| Opening Bracket | `[` | Reserved for special Excel references |
| Closing Bracket | `]` | Reserved for special Excel references |

## Why These Characters Cause Corruption

When worksheets contain these forbidden characters, the following issues occur:

1. **File Format Issues**: Excel and other spreadsheet applications may fail to parse the workbook correctly
2. **Round-trip Conversion Errors**: Converting between formats (XLSX to XLS and back) may corrupt the data
3. **File System Conflicts**: Path separators (`:`, `\`, `/`) conflict with operating system file naming conventions
4. **External Tool Failures**: Third-party tools and APIs may not be able to read or write the workbook
5. **Sharing Problems**: Files become incompatible when shared across different platforms or applications

## Best Practices for Worksheet Names

Follow these guidelines when naming worksheets:

- **Use alphanumeric characters** (letters A-Z, a-z, numbers 0-9)
- **Use safe special characters** (underscore `_`, hyphen `-`, space ` `)
- **Avoid all seven forbidden characters** listed above
- **Keep names under 31 characters** (Excel's maximum limit)
- **Ensure names are not empty** (at least 1 character required)
- **Make names meaningful** (use clear, descriptive titles like "Sales Data", "Q1_2026", "Report_Jan")