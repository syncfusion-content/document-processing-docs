---
layout: post
title: Copying PDF Viewer Assets from node_modules in Angular | Syncfusion
description: Learn here all about copying assets from node_modules into my app in Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Copying PDF Viewer Assets from node_modules in Angular
Copy the `ej2-pdfviewer-lib` assets from `node_modules` into the application's served assets folder so the Standalone PDF Viewer can load its worker scripts and resources at runtime. The Standalone PDF Viewer integrates across build systems and does not require a bundler when its assets are linked directly in the application.

Including these files separately enables on-demand lazy loading of large resources, preventing a single bundle from becoming excessively large. Because the viewer loads certain files dynamically, the host application must make the `ej2-pdfviewer-lib` files available under `src/assets/ej2-pdfviewer-lib` or configure the build system by adding the folder to the `assets` array in `angular.json` so the viewer can request them at runtime.