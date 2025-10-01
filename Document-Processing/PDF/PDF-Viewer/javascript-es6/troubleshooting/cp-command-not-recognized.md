---
layout: post
title: Fix "cp is not recognized" on Windows for the TypeScript PDF Viewer
description: Use Windows-friendly copy commands to replace Unix cp when copying ej2-pdfviewer-lib assets for the TypeScript PDF Viewer—examples for CMD (xcopy) and PowerShell (Copy-Item).
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Troubleshoot error 'cp' is not recognized as a command

The Unix `cp` command is not available in the Windows Command Prompt. Use one of the following Windows-native alternatives to copy the required assets.

- CMD (xcopy) — recursive directory copy:

```batch
xcopy /s /e /i .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib src\ej2-pdfviewer-lib
```

- PowerShell (Copy-Item) — recursive directory copy:

```powershell
Copy-Item .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib -Destination .\src\ej2-pdfviewer-lib -Recurse -Force
```

Notes:
- Run the command from the project root so the node_modules path resolves correctly.
- Windows paths use backslashes (\). Adjust paths if your project structure differs.
- Ensure sufficient permissions to write to the destination folder.

For cross-platform scripts in package.json, consider tools such as "shx" or "copyfiles" to avoid OS-specific commands.
