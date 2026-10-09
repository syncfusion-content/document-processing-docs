---
layout: post
title: Reorder Pages in ASP.NET MVC PDF Viewer | Syncfusion
description: Reorder pages in the ASP.NET MVC PDF Viewer using drag-and-drop inside the Organize Pages panel, or through programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Reorder Pages in ASP.NET MVC PDF Viewer

## Overview

This guide describes how to rearrange pages in a PDF using the **Organize Pages** UI.

**Outcome**: Single or multiple pages can be reordered and the new sequence is preserved when the document is saved or exported.

## Prerequisites

- EJ2 ASP.NET MVC PDF Viewer installed
- `Toolbar` and `PageOrganizer` services enabled in the viewer

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

## Enable or disable reorder option

To enable or disable the **Reorder pages** option in the Organize Pages, update the `PageOrganizerSettings`. See [Organize pages toolbar customization](./toolbar#enable-or-disable-the-rearrange-option) for the guidelines.

## Troubleshooting

- **Thumbnails won't move**: Confirm `PageOrganizerSettings.CanRearrange` is not set to `false`.
- **Changes not saved**: Verify `ServiceUrl` is configured correctly for server-backed operations.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)
