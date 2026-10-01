---
layout: post
title: Active Viewport Rendering | Syncfusion React PDF Viewer
description: Learn how to enable and use Active Viewport Rendering in the Syncfusion React PDF Viewer to optimize rendering performance for large PDF documents.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Active Viewport Rendering

Active Viewport Rendering is a rendering optimization feature in the PDF Viewer that improves zooming performance for large PDF pages.

When a PDF page is zoomed and its width exceeds the available viewer viewport width, the PDF Viewer automatically switches to Active Viewport Rendering mode. In this mode, only the visible portion of the page image within the current viewport is re-rendered at the required zoom level, while the remaining portions continue to use the existing rendered image.

This approach reduces rendering workload during zoom operations and provides a smoother viewing experience for large documents.

## How it works

When Active Viewport Rendering is enabled:

- The feature is activated automatically when the page width exceeds the current viewport width during zooming.
- Only the visible area of the PDF page is re-rendered.
- Areas outside the visible viewport continue to use the previously rendered page image.
- Rendering updates dynamically as the user scrolls through different portions of the page.
- No additional configuration is required.

## Benefits

- Improves zooming performance for large pages.
- Reduces rendering overhead by updating only the visible region.
- Provides smoother scrolling and navigation while zoomed in.
- Minimizes unnecessary re-rendering of off-screen content.
- Helps maintain responsiveness when viewing complex PDF documents.

## Automatic behavior

Active Viewport Rendering is enabled automatically by the PDF Viewer when:

1. A document page is zoomed.
2. The page width becomes larger than the available viewer viewport width.

When these conditions are met, the viewer renders only the currently visible viewport region at the required zoom factor.

## Tile Rendering deprecation

Starting from this release, Active Viewport Rendering replaces Tile Rendering.

- Tile Rendering is now deprecated.
- Active Viewport Rendering is automatically used when applicable.
- No tile rendering configuration is required.

## Notes

- Active Viewport Rendering works automatically and does not require manual enabling.
- The feature is intended to optimize rendering performance during high zoom levels.
- The rendering behavior is handled internally by the PDF Viewer.

## Related topics

- [Load Large PDF Files](./load-pdf-viewer-with-local-resources)
- [Optimize rendering performance](./load-n-number-page)
- [PDF Viewer performance tuning](../how-to-overview)
