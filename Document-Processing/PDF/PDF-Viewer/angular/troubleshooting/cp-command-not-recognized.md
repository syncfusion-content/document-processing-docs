---
layout: post
title: Troubleshoot 'cp' is not recognized as a command in Angular PDF Viewer component | Syncfusion
description: Learn how to resolve "cp is not recognized as a command" in Syncfusion Essential JS 2.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Troubleshoot error 'cp' is not recognized as a command

The error message "'cp' is not recognized as an internal or external command" appears because the `cp` command is not recognized in the Windows Command Prompt.

On Windows, use built-in copy utilities instead of `cp`. The equivalent command to copy a directory and its contents recursively is:

```batch
xcopy /s /e /i .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib src\assets\ej2-pdfviewer-lib
```

Here, `/s` copies directories and subdirectories recursively. Windows uses backslashes `\` as path separators, not forward slashes `/`.

Run this command in the appropriate directory where the copy operation should occur.

**Note:** If other issues occur in Windows Command Prompt, double-check command syntax and file paths for accuracy, and verify permissions for the specified directories.
