---
layout: post
title: Disable tile rendering in JavaScript PDF Viewer | Syncfusion
description: Learn how to disable tile rendering in the JavaScript PDF Viewer using enableTileRendering to adjust performance behavior for different document sizes.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Disable tile rendering in JavaScript PDF Viewer

Use the `enableTileRendering` property to enable or disable tile rendering, which affects performance based on document size.

Set `enableTileRendering` to `false` to disable tile rendering. It is enabled by default and typically benefits large documents.

Example: Disable tile rendering

```

<button id="disable">disable tile rendering</button>

```

```javascript

// Disable tile rendering.
document.getElementById('disable').addEventListener('click', () => {
  viewer.tileRenderingSettings.enableTileRendering = false;
});

```

Sample: [How to disable tile rendering](https://stackblitz.com/edit/7fefpj-n7pyna?file=index.js)