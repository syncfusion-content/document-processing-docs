---
layout: post
title: Secure PDF Viewing Patterns in React PDF Viewer
description: Learn common security patterns for controlling access, restricting actions, and securely handling sensitive PDF content using the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Secure PDF Viewing Patterns

## Overview
Applications that display sensitive documents often require strict security controls.  
The Syncfusion React PDF Viewer includes built‑in capabilities to protect PDFs, restrict user actions, honor document permissions, and support secure collaboration workflows.  
This section outlines common secure‑viewing patterns and when to apply them.

## Restrict PDF Access
Security begins with controlling **who can load** the PDF file and **how** it is delivered.

### Use Server‑Backed Viewer for Protected Environments
The **Server‑Backed Viewer** renders documents on a backend Web API (`serviceUrl`).  
The raw PDF **never reaches the browser**, making this ideal for confidential, regulated, or enterprise deployments.  


Benefits:
- Prevents users from directly downloading the source PDF  
- Allows enforcing authentication, authorization, and logging on the server  
- Supports secure server‑side caching  

### Protect Document URLs
For sensitive files:
- Avoid exposing direct file URLs  
- Use authenticated endpoints  
- Validate JWT / session tokens before sending PDF content  
- Stream PDFs only after authorization checks  

### Token‑Based Access
Pass security tokens through:
- Custom headers  
- Secure cookies  
- Encrypted query parameters (backend‑validated)  

This ensures only authenticated requests reach the viewer.

## Disable Download / Print
You can restrict user access to sensitive document features by disabling PDF Viewer modules.

### Disable Download
Remove the default download button by using custom toolbar settings or excluding download‑related services.

### Disable Print
Remove the `Print` module.  
When excluded, printing options do not appear on the viewer toolbar.

### Disable Copy / Extract Text
Disable:
- `TextSelection`  
- `TextSearch`  

These modules perform background text extraction.  
Removing them prevents text copying entirely.  

Example:
```jsx
<Inject services={[Toolbar, Navigation, Magnification]} />
```

This produces a view‑only, non‑copiable experience.

## Use Signed or Protected PDFs
The Syncfusion PDF Viewer fully supports:
- **AES‑encrypted PDFs**  
- **Password‑protected PDFs**  
- **Permission‑restricted PDFs** (e.g., no‑print, no‑copy)

When loading a protected PDF, the viewer **honors all embedded restrictions**.

### Password‑Protected PDFs
From your attached file:

- If a password‑protected file is opened through the **Open File dialog**, the viewer automatically displays the password prompt.  

- When loading programmatically, the password can be passed directly via `viewer.load(url, password)`.  


Example:
```js
viewer.load(
   'https://your-server/document.pdf',
   'Password'
);
```

The viewer validates the password and decrypts the document.

## Watermarking & Redaction

### Dynamic Watermarks
You can apply dynamic text‑based watermarks (username, timestamp, IP address) before loading the PDF via backend processing.  
Useful for:
- Preventing screenshot leaks  
- Tracking document distribution  

### Redaction Workflows  
The React PDF Viewer supports secure redaction workflows for permanently removing sensitive content.

Redaction capabilities are documented in the Syncfusion example repository.

Supported patterns:
- Marking redaction areas  
- Reviewing and applying changes  
- **Flattening** after redaction to permanently delete content  

## Secure Annotation & Collaboration Patterns
Syncfusion documents multiple secure, role‑based annotation strategies:  

### Role‑Based Control
Examples:
- **Viewer**: can only read  
- **Commenter**: can add comments but not shapes  
- **Editor**: can modify all annotations  
- **Admin**: full rights including redaction  

### Locking Annotations
Annotations can be:
- Locked  
- Restricted by author  
- Filtered by role  

This prevents unauthorized editing of sensitive markups.

### Finalizing Documents (Flattening)
Flattening annotations ensures:
- No further edits are possible  
- Signatures and markups become part of the PDF content  

Flattening is recommended in legal and compliance scenarios.

---

## Prevent PDF Access Leakage

### Avoid Exposing Raw PDFs
When using Standalone mode (`resourceUrl` + WASM), the PDF is downloaded into the browser.  
For confidential files, prefer **Server‑Backed mode**, where the browser receives processed output, not the original PDF.  


### Disable Thumbnail & Page Extract Modules (Optional)
Thumbnail rendering and page organizing load page previews that may contain sensitive data.  
If not needed, disable:
- `ThumbnailView`  
- `PageOrganizer` 

## Summary
| Pattern | Purpose |
|--------|---------|
| Server‑Backed Viewer | Keep documents on server; prevent raw PDF exposure |
| Disable download/print/copy | Prevent distribution or extraction of sensitive content |
| Use protected PDFs | Enforce password-based and permission-based security |
| Watermarking | Prevent leaks via screenshot tracing |
| Redaction | Permanently remove confidential content |
| Role‑based annotation control | Restrict who can comment, edit, or sign |
| Flattening | Finalize documents for compliant sharing |

## See Also
- [Loading Password‑Protected PDFs](../document-handling/load-password-pdf)
- [Server‑Backed Viewer Setup](../getting-started-with-server-backed)
- [Redaction](../Redaction/overview)
