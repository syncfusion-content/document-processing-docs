---
title: File and directory name length in Compression | Syncfusion
description: Describes supported file and directory name length limits in Syncfusion.Compression.dll and the exception thrown when exceeded.
platform: document-processing
control: Compression
documentation: UG
---

# What are the file and directory length limits in Syncfusion.Compression?

Syncfusion.Compression.dll can process paths that adhere to the traditional Windows path length limits: a fully qualified file name (including directories and file name) shorter than 260 characters, and a directory name shorter than 248 characters. If these limits are exceeded, a System.IO.PathTooLongException will be thrown.

Notes and guidance:
- The 260-character limit refers to the full path length (MAX_PATH) used by many Windows APIs.
- The 248-character limit applies to individual directory path components in some Windows APIs.

Example:
- Acceptable: `C:\Projects\MyApp\data\file.txt` (full path < 260 chars)
- Not acceptable: a fully-qualified path longer than 260 characters will likely cause `System.IO.PathTooLongException` when processed by Syncfusion.Compression.dll.
