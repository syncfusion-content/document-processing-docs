---
layout: post
title: Enable resize for text markup in JavaScript PDF Viewer | Syncfusion
description: Learn how to enable the text markup resizer in the JavaScript PDF Viewer using the enableTextMarkupResizer property.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Enable resize for text markup annotations

Enable the resizer for text markup annotations by setting the viewer's `enableTextMarkupResizer` property. This enables drag handles for text markup annotations (highlight, underline, and strikeout) so users can resize them after creation. The default value is `false`.

- The PDF Viewer scripts and styles must be included and the viewer initialized. See the getting-started guide for setup details.
- Set this property on the viewer instance after it is created and before interacting with annotations.

Example: Enable resizer

```javascript

//Enable TextMarkup Resizer.
viewer.enableTextMarkupResizer = true;

```

Sample: [Enable the resizer for text markup annotations](https://stackblitz.com/edit/qzf6bk-xsk9pf?devtoolsheight=33&file=index.js)

N> Consider adding a screenshot or short GIF showing the resizer handle for visual clarity; include descriptive alt text for accessibility.
