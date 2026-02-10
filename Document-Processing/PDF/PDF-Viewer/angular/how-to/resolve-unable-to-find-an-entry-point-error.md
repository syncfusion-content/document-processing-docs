---
layout: post
title: Find an entry point in Angular PDF Viewer component | Syncfusion
description: Learn here how to resolve unable to find an entry point named error in Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
control: Resolve unable to find an entry point error
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Resolve "Unable to find an entry point named FPDFText_GetCharAngle" error

This error commonly occurs when the web service attempts to load a native Pdfium binary that is missing, incompatible, or from an older Pdfium build. The symptom is often a failing web service (for example, the service does not respond) and an error visible in the browser Network tab. Typical native Pdfium filenames by platform are:

- Windows: `pdfium.dll`
- Linux: `libpdfium.so`
- macOS: `libpdfium.dylib`

Root causes to check first:

- An outdated or mismatched native Pdfium binary deployed with the web service (different version or built for a different architecture).
- A missing native library in the published output.
- Incorrect bitness (x86 vs x64) for the hosting environment.
- File permission, antivirus, or file-locking issues preventing the native DLL from loading.

N> When hosting in cloud environments (Azure, AWS, container platforms), always remove or overwrite older published files to avoid stale native binaries remaining on the host.