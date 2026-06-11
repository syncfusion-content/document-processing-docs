---
layout: post
title: Permissions and security in React PDF Viewer | Syncfusion
description: High-level security and permissions overview and recommended controls for protecting PDF content in EJ2 React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Permissions and Security in React PDF Viewer

## Purpose

This page provides a concise security overview and recommended controls when using the EJ2 React PDF Viewer. It summarizes server-side and client-side measures to protect sensitive PDF content while using the viewer in web applications.

## Key recommendations

- **Enforce protections on the server**: Perform encryption, permission flags, redaction, metadata stripping, and form flattening before serving files.
- **Treat viewer UI settings as UX controls**: Disabling print, download, or text-selection in the viewer improves user experience but is not a security boundary unless the underlying PDF enforces permissions.
- **Use short-lived, authenticated access**: Serve PDFs via tokenized endpoints or signed URLs rather than public buckets.
- **Log and monitor access**: Track downloads, apply rate limits, and enforce CORS and auth checks on PDF endpoints.

## Quick actions

- Set [PDF permissions (copy/print)](./prevent-copy-and-print) using server-side PDF libraries before delivery.
- Remove embedded files, scripts, and metadata during preprocessing.
- Flatten form fields and sanitize form data when publishing public documents.
- [Hide or disable viewer UI](./prevent-copy-and-print#3-hidedisable-ui-elements-in-the-viewer) elements for additional UX control.

## Related documents

- [Secure PDf Viewing in React apps](./secure-pdf-viewing)
- [Prevent copy/print](./prevent-copy-and-print)
- [Restricting download](./restricting-download)