---
layout: post
title: Disable tile rendering in Typescript Pdfviewer control | Syncfusion
description: Learn here all about Disable tile rendering in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Disable tile rendering
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Disable tile rendering in Typescript Pdfviewer control

To disable the tile rendering feature in the Syncfusion PDF viewer control, you can use the **enableTileRendering** property. This property allows you to enable or disable the tile rendering feature, which is used to improve the performance of the PDF viewer when displaying large documents.

To disable the tile rendering feature, you can set the **enableTileRendering** property to `false`.

By default, the tile rendering feature is enabled in the PDF viewer. Disabling it may improve the performance of the PDF viewer when displaying small documents, but it may also reduce the performance when displaying large documents.

Here is an example of how you can use the **enableTileRendering** property:

```

<button id="disable">disable tile rendering</button>

```

```ts

// Disable tile rendering.
document.getElementById('disable').addEventListener('click', () => {
  viewer.tileRenderingSettings.enableTileRendering = false;
});

```

Find the sample [how to disable the tile rendering](https://stackblitz.com/edit/vj1hf8-q8ayqc?file=index.ts)