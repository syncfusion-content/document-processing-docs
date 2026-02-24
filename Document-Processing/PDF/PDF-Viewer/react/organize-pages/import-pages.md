---
layout: post
title: Import pages in Organize Pages in React PDF Viewer | Syncfusion
description: How to import pages from another PDF into the current document using the Organize Pages UI in the Syncfusion React PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Import pages using the Organize Pages tool

## Overview

This guide explains how to import pages from another PDF into the current document using the **Organize Pages** UI in the EJ2 React PDF Viewer. 

**Outcome**: Imported pages appear as thumbnails and are merged into the original document when saved or exported.

## Prerequisites

- EJ2 React PDF Viewer installed
- PDF Viewer is injected with `PageOrganizer` service
- [`resourceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#resourceurl) (standalone) or [`serviceUrl`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer#serviceurl) (server-backed) configured when required

## Steps

1. Open the Organize Pages view

	- Click the **Organize Pages** button in the viewer navigation toolbar to open the Organize Pages dialog.

2. Start import

	- Click **Import Document** and choose a valid PDF file from your local file system.

3. Place imported pages

	- Imported pages appear as thumbnails. If a thumbnail is selected, the imported pages are inserted to the right of the selection; otherwise they are appended at the start of the document.

    ![Import PDF animation showing thumbnail insertion](../images/import.gif)

4. Persist changes

	- Click **Save** or **Save As** (or download) to persist the merged document.

## Expected result

- Imported pages display as a single thumbnail in Organize Pages and are merged into the original PDF when saved or exported.

## Troubleshooting

- **Import fails**: Ensure the selected file is a valid PDF and the browser file picker is permitted.
- **Imported pages not visible**: Confirm that the import is persisted using **Save** or **Save As**.
- **Import option disabled**: Ensure [`pageOrganizerSettings.canImport`](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/pageorganizersettingsmodel#canimport) is set to `true` to enable import option.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)
