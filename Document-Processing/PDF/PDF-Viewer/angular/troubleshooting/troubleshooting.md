---
layout: post
title: Copy assets from node_modules into the application in React PDF Viewer component | Syncfusion
description: Learn here all about copying assets from node_modules into my app in Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Use the Standalone PDF Viewer by copying assets from node_modules into the application

Copying assets from node_modules into the application is required to use the Standalone PDF Viewer component. This approach works across different build systems, remaining framework-agnostic and independent of bundlers. Even without a bundler, the PDF Viewer can be integrated by directly linking its assets in the application.

Lazy loading of assets prevents large bundle sizes that are often impractical.

Assets from 'ej2-pdfviewer-lib' must be added manually due to on-demand loading, as the host application is not inherently aware of these assets during lazy loading.
