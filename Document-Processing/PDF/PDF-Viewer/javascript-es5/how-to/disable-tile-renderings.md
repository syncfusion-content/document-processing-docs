---
layout: post
title: How to Disable Tile Rendering in JavaScript (ES5) PDF | Syncfusion
description: Disable tile rendering in the JavaScript (ES5) PDF Viewer to use the classic full-page rendering mode for simpler PDF display scenarios.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# How to Disable Tile Rendering in JavaScript (ES5) PDF Viewer

Use the `enableTileRendering` property to enable or disable tile rendering. Tile rendering is enabled by default and typically improves performance for large documents. Set `enableTileRendering` to `false` to disable tile rendering when it is not required.

- Include the JavaScript PDF Viewer script and the `ThumbnailView`/`Navigation` modules if using related features.
- Initialize the viewer instance before changing tile rendering settings at runtime.

Example: disable tile rendering with a button

```html
<button id="disable">Disable tile rendering</button>

```

```javascript
// Disable tile rendering at runtime
document.getElementById('disable').addEventListener('click', () => {
  viewer.tileRenderingSettings.enableTileRendering = false;
});

```

Sample: [How to disable tile rendering](https://stackblitz.com/edit/7fefpj-n7pyna?file=index.js)