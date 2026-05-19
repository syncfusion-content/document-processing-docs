---
layout: post
title: Why manual copy from node_modules is required in the React PDF Viewer
description: Understand why certain lazy-loaded assets from ej2-pdfviewer-lib must be copied from node_modules when not using a bundler, how pdfium.js is handled, and when to reference assets directly in the TypeScript PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
---

## Why do I have to manually copy files from node_modules into my app?

The PDF Viewer supports multiple build systems and can work without a bundler by referencing assets directly using HTML tags. To keep load times efficient, the library is split into smaller modules and uses lazy loading for certain assets.

- The primary entry point, "pdfium.js", is typically included by bundlers automatically.
- Additional resources under "ej2-pdfviewer-lib" are loaded on demand at runtime. Because the host app does not know about these lazy-loaded files, they are not automatically emitted by bundlers or available to static servers unless they are copied and referenced.

When not using a bundler (or when the bundler does not emit these assets), copy the required files from node_modules to a web-accessible path in your app (for example, "src/ej2-pdfviewer-lib") and reference them accordingly. This ensures the viewer can fetch the lazy-loaded assets when needed and prevents runtime 404 errors.

If the bundler is configured to emit static assets from `node_modules`, verify that the build output contains the necessary files from `@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib` and that your app serves them from a public path. Otherwise, perform a manual or scripted copy step during your build process.