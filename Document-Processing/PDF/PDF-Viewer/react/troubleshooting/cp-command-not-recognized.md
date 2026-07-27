---
layout: post
title: Troubleshoot 'cp' Not Recognized in Syncfusion React PDF Viewer
description: Use Windows-native alternatives to Unix cp for copying React PDF Viewer assets, with examples using xcopy in CMD and Copy-Item in PowerShell.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Resolve 'cp' Command Error in Syncfusion React PDF Viewer

The Unix `cp` command is not available in the Windows Command Prompt. Use one of the following Windows-native alternatives to copy the required `ej2-pdfviewer-lib` assets into a public or source folder used by the application.

CMD (xcopy) — recursive directory copy

```batch
xcopy /s /e /i .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib public\ej2-pdfviewer-lib
```

PowerShell (Copy-Item) — recursive directory copy

```powershell
Copy-Item .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib -Destination .\src\ej2-pdfviewer-lib -Recurse -Force
```

Notes:
- Run the command from the project root so the node_modules path resolves correctly.
- Windows paths use backslashes (\). Adjust paths if your project structure differs.
- Ensure sufficient permissions to write to the destination folder.

For cross-platform scripts in `package.json`, consider tools such as `shx` or `copyfiles` to avoid OS-specific commands.

## See also

- [Why manual copy from node_modules is required in the React PDF Viewer](./troubleshooting)
- [Getting started with the React Standalone PDF Viewer](../getting-started)
- [Troubleshoot OpenSSL errors on Windows](./openssl-error)
- [Troubleshoot document loading issues](./document-loading-issues)
