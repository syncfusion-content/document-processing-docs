---
layout: post
title: Self-hosted / On-premises deployment in React PDF Viewer | Syncfusion
description: Learn here all about Self-hosted / On-premises deployment in Syncfusion React PDF Viewer and component.
platform: document-processing
documentation: ug
control: PDF Viewer
---

# Self-hosted / On-premises deployment in React PDF Viewer

This section explains how the Syncfusion React PDF Viewer supports **self-hosted (on‑premises) deployment** and clarifies how the component operates without any dependency on cloud services.

## Overview

The Syncfusion React PDF Viewer is designed to work **entirely within your own infrastructure**. Once the license is purchased, the viewer can be deployed and used without relying on any Syncfusion cloud services.

Both **standalone (client-side)** and **server-backed** deployments can be hosted on your own servers, making the PDF Viewer suitable for enterprise, intranet, and regulated environments.

## No dependency on cloud services

The React PDF Viewer does **not require any third‑party or Syncfusion‑managed cloud services** for production use:

- PDF rendering and interaction can run fully in the browser (standalone mode)
- Back-end PDF services, if used, are hosted and controlled by your organization
- No document data is sent to Syncfusion servers
- Licensing is not tied to runtime cloud usage

This makes the viewer suitable for **air‑gapped**, **intranet‑only**, and **high‑security** deployments.

## Standalone (client-side) deployment

In standalone mode, all PDF rendering and interactions are handled directly in the browser using local resources.

Key characteristics:
- No back-end PDF service is required
- PDFs are processed entirely on the client device
- Ideal for read‑only viewing and interactive use cases
- Recommended for most applications

N> We strongly recommend using the **standalone mode** whenever back-end processing is not explicitly required.

## Server-backed deployment (self-hosted)

For scenarios that require server-side PDF processing, the React PDF Viewer can be configured to use a **self-hosted PDF Viewer web service**.

Important notes:
- The Web API hosted endpoint used in samples or code-snippet is **for demonstration and evaluation purposes only**
- It must not be used in production environments
- In production, you must host your own PDF Viewer web service

You can self-host the server component by:
- Reusing the official GitHub Web Service example, or
- Deploying the provided Docker image in your environment

Once deployed, the service endpoint is configured through the viewer’s `serviceUrl` property.

## Client and server usage after purchase

After purchasing a license:
- The standalone PDF Viewer can be used without any additional services
- Server-backed PDF processing can be hosted entirely on your own servers
- No external cloud integration is required

This gives you full control over:
- Infrastructure
- Security policies
- Data access and storage
- Deployment life-cycle

## Typical self-hosted deployment scenarios

Self-hosted or on‑premises deployments are commonly used when:
- Documents must remain within internal networks
- Regulatory or compliance requirements restrict cloud usage
- Applications are deployed on private servers or data centers
- Internal document management or enterprise portals are involved

## Summary

The React PDF Viewer fully supports **self-hosted and on‑premises deployment models**. Whether used in standalone browser mode or with a self-hosted back-end service, the viewer operates independently of any cloud services once licensed.

For most use cases, the standalone mode is sufficient and recommended. Server-backed deployment should be used only when specific server-side processing requirements exist.

## See also

- [Architecture of Syncfusion React PDF Viewer](./architecture-pdfviewer)
- [How PDF Rendering Works in the Browser](./how-pdf-rendering-works-in-browser)
- [Getting Started standalone PDF Viewer](../getting-started)
- [Getting Started Server Backed PDF Viewer](../getting-started-with-server-backed)
- [Standalone vs Server Backed PDF Viewer](./standalone-vs-server-backed-pdf-viewer)
- [When Back-end PDF Viewer are required](./when-backend-pdf-services-are-required)