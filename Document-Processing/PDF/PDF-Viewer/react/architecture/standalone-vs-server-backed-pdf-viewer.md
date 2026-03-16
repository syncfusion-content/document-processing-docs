---
layout: post
title: Standalone vs Server-Backed PDF Viewer
description: Compare standalone and server-backed PDF viewer modes to choose the best architecture for performance, scalability, and security.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Standalone vs Server-Backed PDF Viewer

This page helps developers and integrators understand the differences between standalone (client-side) and server-backed PDF viewer architectures, and choose the best approach based on performance, scalability, and deployment requirements.

## Overview

The Syncfusion React PDF Viewer can operate in two primary modes: **Standalone (client-side)** and **Server‑Backed**. Each mode defines where PDF processing occurs and how rendering, data flow, and interactions are handled.

This page compares both approaches, highlights their strengths and limitations, and explains why a standalone client-side viewer is often the preferred choice for modern, high-performance web applications.

See [Getting Started](../getting-started) and [Getting Started with Server Backed](../getting-started-with-server-backed) to start working with Standalone and Server Backed PDF Viewer.

## Architectural models

### Standalone (Client-side) viewer

In standalone mode, PDF parsing, rendering, annotation handling, and user interactions are executed entirely within the browser. The viewer loads the PDF directly from a URL or local source and processes it using browser technologies such as Canvas, Web Workers, and WASM.

This model minimizes network latency, reduces server dependency, and provides faster interaction for most viewing and annotation scenarios.

### Server-backed viewer

In server-backed mode, the browser acts primarily as a presentation layer. PDF processing operations—such as parsing, rendering, import/export, and sometimes annotations—are performed on a backend service, with the client receiving processed data or rendered output.

This model is typically used when documents must remain on the server due to compliance, centralized control, or heavy server-side workflows.

## Standalone vs server-backed comparison

The following table summarizes the key differences between standalone and server-backed viewer architectures.

| Aspect | Standalone (Client-side) | Server-backed |
|------|--------------------------|---------------|
| **Rendering location** | Browser (Canvas / SVG / WASM) | Server-side service |
| **Performance** | Faster UI response, low latency | Network-dependent, higher latency |
| **Scalability** | Scales with client devices | Scales with server resources |
| **Server load** | Minimal or none | High (CPU, memory, I/O intensive) |
| **Offline support** | Possible (cached/local PDFs) | Not supported |
| **Deployment complexity** | Simple (static hosting) | Requires backend infrastructure |
| **Cost** | Lower operational cost | Higher infrastructure cost |
| **Customization** | High (client-side events and hooks) | Limited by server APIs |
| **Typical use cases** | Viewing, annotations, forms, fast navigation | Compliance-heavy, controlled environments |

## Why standalone (client-side) is preferred

For most web applications, a standalone client-side viewer offers significant advantages. Rendering directly in the browser eliminates round-trip delays to the server, resulting in faster page load times, smoother scrolling, and instant annotation feedback.

Standalone viewers also simplify deployment by removing dependency on backend services. This makes them ideal for cloud-native applications, SPAs, and scenarios where responsiveness and user experience are critical.

## When to choose a server-backed viewer

A server-backed viewer may be appropriate when strict data control is required, such as:

- Documents must never be exposed to the client
- Centralized processing and auditing are mandated
- Heavy server-side workflows are already in place

In these cases, the additional latency and infrastructure cost are acceptable trade-offs for compliance and centralized control.

## Decision guidance

If performance, scalability, and ease of deployment are your primary concerns, a **standalone client-side PDF viewer** is the recommended option. A server-backed approach should be selected only when regulatory or architectural constraints explicitly require server-side processing.

## See also

- [Architecture of Syncfusion React PDF Viewer](./architecture-pdfviewer)
- [How PDF Rendering Works in the Browser](./how-pdf-rendering-works-in-browser)
- [Getting Started standalone PDF Viewer](../getting-started)
- [Getting Started Server Backed PDF Viewer](../getting-started-with-server-backed)
