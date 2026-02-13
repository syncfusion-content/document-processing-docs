---
layout: post
title: UI Interactions for Organizing Pages in React PDF Viewer | Syncfusion
description: Learn about the UI interactions for organizing pages in the Syncfusion React PDF Viewer control, including rotating, rearranging, inserting, deleting, and copying pages.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# UI interactions for organizing pages in React PDF Viewer

The PDF Viewer provides an intuitive interface for organizing pages. This section documents the UI interactions available in the `Organize Pages` dialog.

## Rotate PDF pages

Adjust page orientation using the rotate controls in the Organize Pages dialog.

- **Rotate clockwise**: Rotate selected pages 90 degrees clockwise.
- **Rotate counter-clockwise**: Rotate selected pages 90 degrees counter-clockwise.

![Rotate and rearrange pages animation showing rotate control usage](../images/rotate-rearrange.gif)

## Rearrange PDF pages

Change page sequence using drag-and-drop.

- **Drag and drop**: Drag a page thumbnail to the desired position and release to reorder pages.

![Rearrange pages animation showing drag-and-drop behavior](../images/rotate-rearrange.gif)

## Insert new pages

Add blank pages to the document at the required position.

- **Insert blank page left**: Insert a blank page to the left of the selected page.
- **Insert blank page right**: Insert a blank page to the right of the selected page.

![Insert page control in the Organize Pages toolbar](../images/organize-insert.png)

## Delete PDF pages

Remove unwanted pages from the document:

1. **Select pages to delete**: Click or tap thumbnails to select pages; multiple selection is supported.
2. **Delete selected pages**: Use the delete option in the Organize Pages pane to remove the selected pages.

![Delete selected pages using the Organize Pages delete control](../images/organize-delete.png)

## Copy PDF pages

Duplicate pages within the document:

- **Select pages to copy**: Click or tap thumbnails to select pages to duplicate.
- **Copy selected pages**: Use the copy option; copied pages are inserted to the right of the selection.

![Copy pages control and thumbnail insertion preview](../images/organize-copy.png)

## Import a PDF document

Import another PDF into the current document:

- **Import PDF document**: Click **Import Document** to select and import a PDF. The imported pages appear as thumbnails. If a page is selected, thumbnails are inserted to its right; otherwise they are added at the start. Imported pages are merged with the current document when saved.

![Import PDF animation showing thumbnail insertion](../images/import.gif)

## Select all pages

Select all pages to perform bulk operations (for example, rotate or delete all pages).

![Select all thumbnail control and selection state](../images/selectall.png)

## Zoom page thumbnails

Adjust thumbnail size for better visibility and precision:

- Use the zoom slider to increase or decrease thumbnail size.
- Zoom in to see more detail on each page.
- Zoom out to view more pages at once.

![Thumbnail zoom slider and preview](../images/zoomOrganize.png)

## Real-time updates and saving

Changes are reflected instantly in the Organize Pages dialog. Click **Save** to apply changes to the loaded document or **Save As** to download a new copy with the updated page order.

## Keyboard shortcuts

Common keyboard shortcuts in the Organize Pages dialog:

- **Ctrl+Z**: Undo the last action.
- **Ctrl+Y**: Redo the last undone action.
- **Ctrl+Scroll**: Zoom thumbnails in/out.

![Undo and redo controls in the Organize Pages toolbar](../images/undo-redo.png)