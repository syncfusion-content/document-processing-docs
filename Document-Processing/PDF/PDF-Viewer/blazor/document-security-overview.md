---
layout: post
title: Load the security documents in Blazor PDF Viewer | Syncfusion
description: Learn how Blazor SfPdfViewer opens password-protected PDFs and enforces owner permissions like print, copy and edit.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Document security in Blazor SfPdfViewer

This article explains how `SfPdfViewer` handles secured PDF documents, including password-protected files and documents with permission restrictions. It describes expected behavior when opening secured files and links to task-focused guides for implementation details.

The PDF specification defines two common security configurations:

- [Password-protected documents](./document-security/password-protected) — a password is required to decrypt and open the file.
- [Permission-restricted documents](./document-security/permission) — an owner password sets granular permissions such as printing, copying, editing, annotating, and form filling.

Behavior and expectations:
- When a password-protected PDF is loaded, the viewer prompts for the password. If the password is incorrect or omitted, the document does not open.
- For permission-restricted PDFs, the viewer reads and enforces the document’s security flags. Disallowed actions (for example, print, copy, or annotate) are disabled in the UI and blocked through APIs.
