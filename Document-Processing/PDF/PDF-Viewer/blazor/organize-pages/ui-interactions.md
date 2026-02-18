---
layout: post
title: UI Interaction for Organize Pages in Blazor PDF Viewer | Syncfusion
description: Learn about the UI interactions including rotating, rearranging, inserting, deleting, and duplicating for organize pages.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# UI interactions for Organize Pages

The Organize Pages dialog provides simple, touch-friendly controls to manage page thumbnails and perform common page operations.

## Rotate pages

You can adjust the orientation of pages to ensure proper alignment. The rotate icon in the Organize Pages dialog provides the following options:

- **Rotate clockwise** — rotate selected pages 90° clockwise.

![Rotate clockwise](./images/organize-ui-rotate-right.png)

- **Rotate counter-clockwise** — rotate selected pages 90° counter-clockwise.

![Rotate counter-clockwise](./images/organize-ui-rotate-left.png)

## Rearrange pages

Drag and drop thumbnails to change page order.

![Rearrange pages](./images/Drag_and_Drop.gif)

## Insert pages

- **Insert blank page left** — insert a blank page to the left of the selected page.
- **Insert blank page right** — insert a blank page to the right of the selected page.

![Insert pages](./images/Insert_Pages.gif)

## Delete pages

1. Select thumbnails to remove (multi-select supported).
2. Use the Delete action in the organizer to remove the selected pages.

![Delete pages](./images/organize-ui-delete.png)

## Duplicate pages

- Select thumbnails to duplicate.
- Use the Duplicate action to add copies (copies appear to the right of the originals).

![Duplicate pages](./images/Duplicate_Pages.gif)

## Import pages

- **Import PDF** — select a PDF to insert pages into the current document. If a page is selected the imported pages are added to its right; otherwise they are added at the start. Imported pages are merged with the document when you save.

![Import pages](./images/organize-ui-extract-page.png)

## Extract pages

- **Extract Document** — export selected pages as a separate PDF file.

![Extract pages](./images/organize-ui-import-page.png)

## Select all

- **Select all** — select every page for bulk operations such as rotate, delete, or duplicate.

![Select all](./images/organize-ui-select.png)

## Thumbnail zoom

- Use the zoom slider to increase or decrease thumbnail size.
- Zoom in to inspect page details or zoom out to view more pages.

![Thumbnail zoom](./images/organize-zoom-panel.png)

## Real-time updates and saving

Changes in the organizer are reflected instantly in the viewer. Click **Save** to persist changes or **Save As** to download a modified copy.

## Keyboard shortcuts

- **Ctrl+Z** — undo.
- **Ctrl+Y** — redo.

![Undo](./images/organize-ui-undo.png)
![Redo](./images/organize-ui-redo.png)
