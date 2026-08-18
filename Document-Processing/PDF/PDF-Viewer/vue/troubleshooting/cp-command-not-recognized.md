---
layout: post
title: Cp Command Not Recognized in Vue PDF Viewer | Syncfusion
description: Resolve the cp is not recognized error in the Vue PDF Viewer by using Windows-native commands such as xcopy or PowerShell Copy-Item.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resolve cp Not Recognized Error in Vue PDF Viewer

The Unix `cp` command is not available in the Windows Command Prompt. Use one of the following Windows-native alternatives to copy the required assets.

- CMD (xcopy) — recursive directory copy:

```batch
xcopy /s /e /i .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib public\js\ej2-pdfviewer-lib
```

- PowerShell (Copy-Item) — recursive directory copy:

```powershell
Copy-Item .\node_modules\@syncfusion\ej2-pdfviewer\dist\ej2-pdfviewer-lib -Destination .\src\ej2-pdfviewer-lib -Recurse -Force
```

Notes:
- Run the command from the project root so the node_modules path resolves correctly.
- Windows paths use backslashes (\). Adjust paths if your project structure differs.
- Ensure sufficient permissions to write to the destination folder.
- For cross-platform scripts in package.json, consider tools such as shx or copyfiles to avoid OS-specific commands.