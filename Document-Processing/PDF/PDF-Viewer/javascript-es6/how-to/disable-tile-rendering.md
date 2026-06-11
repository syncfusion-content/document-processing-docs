---
layout: post
title: Disable tile rendering in TypeScript PDF Viewer | Syncfusion
description: Learn how to disable tile rendering in the TypeScript PDF Viewer using enableTileRendering to adjust performance behavior for different document sizes.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Disable tile rendering in PDF Viewer

Use the `enableTileRendering` property to enable or disable tile rendering. Tile rendering is enabled by default and typically improves performance for large documents. Set `enableTileRendering` to `false` to disable tile rendering when it is not required.

- Include the JavaScript PDF Viewer script and the `ThumbnailView`/`Navigation` modules if using related features.
- Initialize the viewer instance before changing tile rendering settings at runtime.

Example: disable tile rendering with a button

```

<button id="disable">Disable tile rendering</button>

```

```ts

// Disable tile rendering at runtime
document.getElementById('disable').addEventListener('click', () => {
  viewer.tileRenderingSettings.enableTileRendering = false;
});

```

Sample: How to disable tile rendering
https://stackblitz.com/edit/vj1hf8-q8ayqc?file=index.ts
