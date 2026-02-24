---
layout: post
title: Reorder pages in Organize Pages in React PDF Viewer | Syncfusion
description: How to rearrange pages using drag-and-drop and grouping in the Organize Pages UI of the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Reorder pages using the Organize Pages view

## Overview

This guide describes how to rearrange pages in a PDF using the **Organize Pages** UI.

**Outcome**: Single or multiple pages can be reordered and the new sequence is preserved when the document is saved or exported.

## Prerequisites

- EJ2 React PDF Viewer installed
- `Toolbar` and `PageOrganizer` services injected into the viewer

## Steps

1. Open the Organize Pages view

	- Click the **Organize Pages** button in the navigation toolbar to open the page thumbnails panel.

2. Reorder a single page

	- Drag a thumbnail to the desired position. The thumbnails update instantly to show the new order.

3. Reorder multiple pages

	- Select multiple thumbnails using Ctrl or Shift, then drag the selected group to the new location.

    ![Rearrange pages animation showing drag-and-drop behavior](../images/rotate-rearrange.gif)

4. Verify and undo

	- Use **Undo** / **Redo** options to revert accidental changes.

    ![Undo and redo Organize Pages toolbar](../images/undo-redo.png)

5. Persist the updated order

	- Click **Save** or download the document using **Save As** to persist the new page sequence.

## Expected result

- Thumbnails reflect the new page order immediately and saved / downloaded PDFs preserve the reordered sequence.

## Troubleshooting

- **Thumbnails won't move**: Confirm [`pageOrganizerSettings.canRearrange`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageorganizersettingsmodel#canrearrange) is is not set to `false`.
- **Changes not saved**: Verify [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) (server) or [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) (standalone) is configured correctly.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)