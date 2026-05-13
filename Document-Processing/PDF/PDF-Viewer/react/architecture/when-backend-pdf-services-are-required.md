---
layout: post
title: When back-end PDF services are required | Syncfusion
description: Learn here all about when and why back-end (server-side) PDF services are required in Syncfusion React PDF Viewer.
platform: document-processing
documentation: ug
control: PDF Viewer
---

# When back-end PDF services are required

This section explains **when and why back-end (server-side) PDF services are required** for the React PDF Viewer and helps you decide whether a server-backed architecture is necessary for your application.

## Overview

The React PDF Viewer can operate entirely in the browser using a [standalone](../getting-started) (client-side) architecture. However, certain functional, security, and performance requirements make it necessary to process PDF operations on a back-end server.

This page outlines the key decision factors for selecting a [server-backed PDF viewer](../getting-started-with-server-backed).

## Security & Compliance Requirements

back-end PDF services are required when PDF documents or operations must adhere to strict security and compliance standards.

Use server-side processing when:
- PDF files must not be directly exposed to end users
- Document access is restricted by enterprise security policies
- Compliance with regulations such as HIPAA, GDPR, or SOC is required
- Operations involve certificates, private keys, or confidential data
- Centralized auditing, logging, or access control is mandatory

In these scenarios, all sensitive PDF operations are executed within a controlled server environment.

## Large-scale or resource-intensive processing

Browser-based PDF processing is limited by device memory and CPU constraints. back-end services are recommended for:

- Large PDF documents with high page counts
- Complex PDFs containing heavy graphics or embedded assets
- Batch or bulk operations such as merging, splitting, or text extraction

Server-side processing ensures reliable execution and allows applications to scale without impacting client performance.

## Performance & consistency on low-end devices

PDF processing behavior can vary across browsers and hardware configurations. Server-backed services provide consistent behavior when:

- Users access the application on low-end or older devices
- Mobile or tablet environments are frequently used
- Browser memory limits affect rendering or interactions

In a server-backed setup, processing is performed on the server while the client focuses on rendering and user interaction.

## Typical use cases

A server-backed PDF viewer is commonly used in:

- Enterprise document management systems
- Internal applications with restricted document access
- Banking, health-care, and government solutions
- High-volume or compliance-driven PDF workflows

## Getting started with a server-backed PDF viewer

If your application requires back-end PDF services, refer to the following guide to configure and integrate a server-backed PDF viewer:

[Getting started with server-backed React PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started-with-server-backed)

This guide covers back-end service setup, required endpoints, and client-server configuration details.

Use a **server-backed PDF viewer** when security, compliance, scalability, or performance consistency is critical. For lightweight viewing and basic interactions, a standalone client-side viewer may be sufficient.

## See also

- [Architecture of Syncfusion React PDF Viewer](./architecture-pdfviewer)
- [How PDF Rendering Works in the Browser](./how-pdf-rendering-works-in-browser)
- [Getting Started standalone PDF Viewer](../getting-started)
- [Getting Started Server Backed PDF Viewer](../getting-started-with-server-backed)
- [Standalone vs Server Backed PDF Viewer](./standalone-vs-server-backed-pdf-viewer)

