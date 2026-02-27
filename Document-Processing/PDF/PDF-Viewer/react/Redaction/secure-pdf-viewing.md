---
layout: post
title: Secure PDF Viewing in React Apps using PDF Viewer | Syncfusion
description: Best practices for securing PDF content in React apps using the EJ2 React PDF Viewer and server-side processing.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Secure PDF Viewing in React Apps

## Overview

This page explains best practices for securing PDF content displayed in React applications using the EJ2 React PDF Viewer and server-side processing. It covers encryption, permission restrictions, redaction, preprocessing, and secure API usage.

## Why Secure Viewing matters

- Protects user privacy and compliance-sensitive data.
- Reduces risk from hidden/metadata content and unauthorized copying or printing.
- Limits liability when distributing PDFs to untrusted clients.

## Common security guidelines

This section outlines common security controls and how they interact with the viewer.

- **Password protection**: Use user/owner passwords on PDFs. The viewer can open password-protected files when the password is provided at load time. Password-based encryption prevents opening without credentials. See [loading password protected PDFs](../document-handling/load-password-pdf)

- **Permission restrictions**: Set PDF permissions (copy, print) using Syncfusion PDF library. The viewer respects these permissions at display time but cannot enforce protections if the client receives an unprotected full file. See [prevent copy and print permissions](./prevent-copy-and-print)

- **Redaction**: Permanently remove text, images, or regions at the document level on the server before delivering the file. Redaction produces a new PDF with the sensitive content removed. See [redacting sensitive content](./overview)

- **Preprocessing**: On the server, remove metadata, embedded files, hidden layers, form field values, JavaScript actions, and flatten form fields. Compress and linearize PDFs if needed. See [preprocessing PDFs](../document-handling/preprocess-pdf)

## Design decisions and trade-offs

- Client vs server enforcement: Client-side settings which disable disabling print in the viewer improve user experience but are not a security boundary. True protection requires server-side changes which actually enforces the restrictions (encryption, permissions, redaction).

- Usability vs security: Strong encryption and sanitizing heavily can break some workflows (search, form interactivity). Choose operations appropriate to the document life cycle.

- Redaction permanence: Redaction is irreversible; keep originals securely archived if needed for audit.

## Best practices

- Encrypt PDFs with strong passwords when they must remain unreadable without credentials.
- Apply permission flags for copying/printing via server-side PDF library; treat viewer-side options as UX controls only.
- Perform redaction on the server to permanently remove sensitive content.
- Strip metadata, embedded files, comments, and JavaScript before serving.
- Flatten form fields and sanitize form data when exporting public PDFs.
- Use short-lived, authenticated URLs or a tokenized download endpoint rather than serving files from a public bucket.
- Log access and apply rate limits and CORS policies on APIs that serve PDFs.