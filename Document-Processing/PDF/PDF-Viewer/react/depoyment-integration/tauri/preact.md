---
layout: post
title: Preact with Tauri and React PDF Viewer | Syncfusion
description: Render the Syncfusion React PDF Viewer from a Preact frontend inside a Tauri desktop application.
control: PDF Viewer
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Preact with Tauri and React PDF Viewer

[Preact](https://preactjs.com/) is a lightweight, React-compatible UI library that you can use as the frontend layer of a [Tauri](https://tauri.app/) desktop application. Because Preact ships a `preact/compat` shim that mirrors the React and React DOM APIs, the [Syncfusion React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) — a React component — can be rendered from a Preact app without any changes to the viewer's source code.

Running the viewer in a Preact + Tauri app is the same as running it in a React + Tauri app: the same `PdfViewerComponent`, the same `Inject` services, and the same `resourceUrl` that points to the `ej2-pdfviewer-lib` runtime assets copied into the frontend's `public/` folder. The only difference is that the React renderer is replaced by Preact through the `preact/compat` alias.

For the full step-by-step setup, see the [React + Tauri integration](./react) page. Once the project is running on Preact, the viewer mounts, loads, and behaves identically to its React counterpart.

## See Also

- [React + Tauri Integration](./react)
- [PDF Viewer Getting Started](../../getting-started)
- [Tauri documentation](https://tauri.app/start/)
