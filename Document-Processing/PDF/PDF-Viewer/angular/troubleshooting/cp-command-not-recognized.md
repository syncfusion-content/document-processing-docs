---
layout: post
title: Troubleshoot 'cp' is not recognized as a command in Angular | Syncfusion
description: Learn here all about how to solve 'cp' is not recognized as a command in Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Resolve 'cp' Command Error in Syncfusion Angular PDF Viewer

The Unix `cp` command is not available in the Windows Command Prompt

On Windows, you should use the `copy` command to copy files and directories. The equivalent command in Windows to copy a directory and its contents recursively is:

```batch
xcopy /s /e /i .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib src\assets\ej2-pdfviewer-lib
```

Here, `/s` indicates that you want to copy directories and subdirectories recursively. Also, note that Windows uses backslashes `\` as path separators, not forward slashes `/`.

Make sure to run this command in the appropriate directory where you want to perform the copy operation.

Note: If you encounter other issues or error messages while working with the Windows Command Prompt, make sure to double-check your command syntax and file paths for accuracy. Additionally, ensure that you have the necessary permissions to perform the copy operation in the specified directories.