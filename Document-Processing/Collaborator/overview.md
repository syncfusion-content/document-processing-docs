---
layout: post
title: Syncfusion Collaborator Overview | Syncfusion
description: The Syncfusion Collaborator is a real-time collaboration framework that enables multiple users to edit content simultaneously in EJ2 components.
control: Collaborator
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Collaborator

The Syncfusion **Collaborator** is a real\-time collaboration framework that enables multiple users to edit content simultaneously in EJ2 components such as DOCX Editor, PDF Viewer, and Spreadsheet.

The Collaborator consists of:

- **Collaboration Client** can be integrated into the EJ2 component.

- **Collaboration Server** available for ASP.NET Core, ASP.NET MVC, and Node.js.

Both client and server are built on a shared, control\-agnostic common collaborator framework, enabling the same collaboration infrastructure to be reused across supported EJ2 components.

## Key Features

- Real\-time collaborative editing with automatic synchronization across multiple users.

- Support for both SignalR and WebSocket communication.

- Scalable architecture with Redis support for multi\-server deployments.

- Reusable collaboration framework for DOCX Editor, PDF Viewer, and Spreadsheet.

## How the Collaborator Works

1. A user opens content in an EJ2 component configured with the Collaboration Client and joins a collaboration session.

1. User actions are sent to the Collaboration Server in real time.

1. The server processes and synchronizes those actions with all connected participants.

1. Other users receive the updates and their content is refreshed automatically.

1. Changes are periodically persisted to ensure the latest version is available to all participants.

## Collaboration Packages

The Syncfusion Collaborator is available as client and server packages. Install the client package in your application and choose the appropriate server package based on your hosting platform.

|Package|Description|
|:---|:---|
|@syncfusion/ej2\-collaborator|JavaScript/TypeScript client library for collaborative editing in EJ2 components such as DOCX Editor, PDF Viewer, and Spreadsheet.|
|Syncfusion.Collaborator.Server|Collaboration server for ASP.NET Core and ASP.NET MVC that synchronizes edits, manages collaboration sessions, and broadcasts updates between connected users.|
|ej2\-collaborator\-server|Node.js-based collaboration server for JavaScript and TypeScript applications.|
 
**Note:** The Node.js Collaboration Server currently supports **PDF Viewer** collaborative editing only. **DOCX Editor** and **Spreadsheet** require the ASP.NET\-based web service implementation for document processing, operation transformation, and save operations.


## Prerequisites

- A Redis instance reachable from the server

- One of the supported server runtimes:

   - .NET 8/9/10 SDK (for ASP.NET Core)

   - .NET Framework 4.6.2 ASP.NET MVC 5 (for ASP.NET MVC)

   - Node.js 18 or later (for Node.js)

## What's Next

- [Collaboration Client](./collaboration-client)

- [Collaboration Server](./collaboration-server)

- [Getting Started](./getting-started/getting-started-with-core)

   - [With ASP.NET Core Server](./getting-started/getting-started-with-core)

   - [With ASP.NET MVC Server](./getting-started/getting-started-with-mvc)

   - [With Node.js Server](./getting-started/getting-started-with-node)

- [FAQs](./faq)