---
layout: post
title: Copy pages in Organize Pages in React PDF Viewer | Syncfusion
description: Learn how to duplicate pages using the Organize Pages UI in the React PDF Viewer of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Copy Pages in React PDF Viewer

## Overview

This guide explains how to duplicate pages within the current PDF using the Organize Pages UI.

**Outcome**: Copied pages are inserted adjacent to the selection and included in exported PDFs.

## Prerequisites

- EJ2 React PDF Viewer installed
- PDF Viewer injected with `PageOrganizer` module

## Steps

1. Open the Organize Pages view

	- Click the **Organize Pages** button in the viewer toolbar to open the Organize Pages dialog.

2. Select pages to duplicate

	- Click a single thumbnail or use Shift+click/Ctrl+click to select multiple pages.

3. Duplicate selected pages

	- Click the **Copy Pages** button in the Organize Pages toolbar; duplicated pages are inserted to the right of the selected thumbnails.

4. Duplicate multiple pages at once

	- When multiple thumbnails are selected, the Copy action duplicates every selected page in order.

	![Copy pages in organize view](../images/organize-copy.png)

5. Undo or redo changes

	- Use **Undo** (Ctrl+Z) or **Redo** to revert or reapply recent changes.

	![Undo and redo Organize Pages toolbar](../images/undo-redo.png)

6. Persist duplicated pages

	- Click **Save** or **Save As** to include duplicated pages in the saved/downloaded PDF.

## Expected result

- Selected pages are duplicated and included in the saved PDF.

## Enable or disable Copy Pages button

To enable or disable the **Copy Pages** button in the Organize Pages toolbar, update the [`pageOrganizerSettings`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageorganizersettings). See [Organize pages toolbar customization](./toolbar#enable-or-disable-the-copy-option) for the guidelines.

## Troubleshooting

- If duplicates are not created: verify that the changes are persisted using **Save**.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)
