---
layout: post
title: Prevent the PDF from scrolling | Syncfusion
description: Learn how to prevent scrolling and remove the vertical scrollbar in the Syncfusion Blazor SfPdfViewer.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Prevent the PDF from scrolling and remove the vertical scrollbar

To prevent a PDF from scrolling and remove the vertical scrollbar in the Syncfusion<sup style="font-size:70%">&reg;</sup> Blazor SfPdfViewer component, set the container's CSS `overflow` property to `hidden`.

Setting `overflow: hidden` removes scrollbars and disables user scrolling. To target only vertical scrolling, consider `overflow-y: hidden`.

```html

<style>
    .e-pv-viewer-container {
        overflow: hidden !important;
    }
</style>

```

[View the prevent scrolling sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Prevent%20the%20PDF%20from%20scrolling)
