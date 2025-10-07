---
layout: post
title: Load the security documents in Blazor PDF Viewer | Syncfusion
description: Learn how Blazor SfPdfViewer opens password-protected PDFs and enforces owner permissions like print, copy and edit.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Document security in Blazor SfPdfViewer

This article describes how the Blazor PDF Viewer (SfPdfViewer) handles secured PDF documents, including password-protected files and documents with permission restrictions. It also outlines expected behavior when opening these files and links to task-focused guides.

The PDF specification supports two primary security configurations:

- [Password-protected](./document-security/password-protected) (password required to decrypt and open the file)
- [Permission-restricted](./document-security/permission) (owner password sets granular permissions such as printing, copying, editing, annotating, and form filling)

Behavior and expectations:
- When a password-protected PDF is loaded, the viewer prompts for the password. If the password is incorrect or omitted, the document does not open.
- For permission-restricted PDFs, the viewer reads and enforces the document’s security flags. Disallowed actions (for example, print, copy, or annotate) are disabled in the UI and blocked through APIs.
