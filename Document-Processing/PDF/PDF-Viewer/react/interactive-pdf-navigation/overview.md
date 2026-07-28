---
layout: post
title: Navigation in React PDF Viewer | Syncfusion
description: Learn about page, bookmark, hyperlink, and thumbnail navigation options in the Syncfusion React PDF Viewer for seamless PDF browsing.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Navigation in React PDF Viewer

The [React PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer) provides multiple navigation options to help users move through PDF documents efficiently. This section covers all available navigation features.

## Overview

The React PDF Viewer supports several types of navigation. Each type is enabled by injecting the corresponding feature module and setting the matching property on the `PdfViewerComponent`.

| Navigation Type | Module to inject | Property to enable | Description |
|----------------|------------------|--------------------|-------------|
| [Page Navigation](./page) | `Navigation` | `enableNavigation` | Navigate between pages using toolbar buttons or via the navigation API |
| [Bookmark Navigation](./bookmark) | `BookmarkView` | `enableBookmark` | Navigate using bookmarks authored in the PDF |
| [Hyperlink Navigation](./hyperlink) | `LinkAnnotation` | `enableHyperlink` | Handle internal and external hyperlinks |
| [Page Thumbnail Navigation](./page-thumbnail) | `ThumbnailView` | `enableThumbnail` | Navigate using thumbnail previews of pages |

## Quick Links

### Page Navigation
See [Page Navigation](./page) for details.

- Enable page navigation with the `enableNavigation` property
- Navigate to first, last, next, previous, or a specific page
- Use programmatic navigation methods such as `goToPage`, `goToFirstPage`, `goToLastPage`, `goToNextPage`, and `goToPreviousPage`

### Bookmark Navigation
See [Bookmark Navigation](./bookmark) for details. Bookmarks must be authored in the PDF; the viewer does not generate them.

- Enable the bookmark panel with the `enableBookmark` property
- Navigate programmatically using `goToBookmark`
- Retrieve the bookmark list using `getBookmarks`
- Handle the `bookmarkClick` event to respond to user selection

### Hyperlink Navigation
See [Hyperlink Navigation](./hyperlink) for details. Register `hyperlinkClick` and `hyperlinkMouseOver` handlers on the `PdfViewerComponent` to react to link interactions.

- Enable hyperlinks with the `enableHyperlink` property
- Control how links open (current tab or new tab)
- Handle the `hyperlinkClick` and `hyperlinkMouseOver` events; the event argument exposes fields such as `hyperlink`, `page`, and `isTouched`

### Page Thumbnail Navigation
See [Page Thumbnail Navigation](./page-thumbnail) for details. A document must be loaded before thumbnail APIs are used.

- Enable the thumbnail panel with the `enableThumbnail` property
- Open or close the thumbnail panel programmatically using `openThumbnailPane()` and `closeThumbnailPane()`
- Navigate by clicking a thumbnail
- Handle the `thumbnailClick` event to respond to thumbnail selection


## Related Topics

- [Toolbar Customization](../toolbar-customization/overview)
- [Feature Modules](../feature-module)
- [React PDF Viewer Overview](../overview)