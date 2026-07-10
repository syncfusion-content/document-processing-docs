---
layout: post
title: Prevent the PDF from scrolling | Syncfusion
description: Learn here all about how to prevent scrolling and remove the vertical scrollbar in the SfPdfViewer Component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Prevent the PDF from scrolling and remove the vertical scrollbar

To prevent a PDF from scrolling and remove the vertical scrollbar in the Blazor SfPdfViewer component, set the container's CSS `overflow` property to `hidden`.

Setting `overflow: hidden` removes scrollbars and disables user scrolling. To target only vertical scrolling, consider `overflow-y: hidden`.

```html
<style>
    .e-pv-viewer-container {
        overflow: hidden !important;
    }
</style>
```

To target only vertical scrolling, use `overflow-y` instead:

```html
<style>
    .e-pv-viewer-container {
        overflow-y: hidden !important;
    }
</style>
```

[View the sample on GitHub](https://github.com/SyncfusionExamples/blazor-pdf-viewer-examples/tree/master/Common/Prevent%20the%20PDF%20from%20scrolling)

## See also

* [SfPdfViewer overview](../overview)
* [Toolbar customization](../toolbar/overview)
