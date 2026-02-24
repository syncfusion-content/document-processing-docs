---
layout: post
title: Remove pages using Organize Pages in React PDF Viewer | Syncfusion
description: How to remove one or more pages from a PDF using the Organize Pages view in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Remove pages using the Organize Pages tool

## Overview

This guide shows how to delete single or multiple pages from a PDF using the **Organize Pages** UI in the EJ2 React PDF Viewer. 

**Outcome**: You will remove unwanted pages and save or download the updated PDF.

## Prerequisites

- EJ2 React PDF Viewer installed in your project
- Basic PDF Viewer setup ([`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) for standalone mode or [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) for server-backed mode)

## Steps

1. Open the Organize Pages view

   - Click the **Organize Pages** button in the viewer navigation toolbar to open the Organize Pages dialog.

2. Select pages to remove

   - Click a thumbnail to select a page. Use Shift+click or Ctrl+click to select multiple pages. Use the **Select all** button to select every page.

3. Delete selected pages

   - Click the **Delete Pages** icon in the Organize Pages toolbar to remove the selected pages. The thumbnails update immediately to reflect the deletion.

   - Delete a single page directly from its thumbnail: hover over the page thumbnail to reveal the per-page delete icon, then click that icon to remove only that page.

   ![Delete selected pages using the Organize Pages delete control](../images/organize-delete.png)

4. Multi-page deletion

   - When multiple thumbnails are selected, the Delete action removes all selected pages at once.

5. Undo or redo deletion

    - Use **Undo** (Ctrl+Z) to revert the last deletion.
    - Use **Redo** (Ctrl+Y) to revert the last undone deletion.

    ![Undo and redo Organize Pages toolbar](../images/undo-redo.png)

6. Save the PDF after deletion

   - Click **Save** to apply changes to the currently loaded document, or **Save As** / **Download** to download a copy with the removed pages permanently applied.

## Expected result

- Selected pages are removed from the document immediately in the Organize Pages dialog.
- After clicking **Save** or **Save As**, the resulting PDF reflects the deletions.

## Troubleshooting

- **Delete button disabled**: Ensure `PageOrganizer` is injected and [`pageOrganizerSettings.canDelete`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageorganizersettingsmodel#candelete) is not set to `false`.
- **Selection not working**: Verify that the Organize Pages dialog has focus; use Shift+click for range selection.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)