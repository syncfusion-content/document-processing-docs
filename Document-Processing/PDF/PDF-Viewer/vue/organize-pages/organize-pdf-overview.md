---
layout: post
title: Organize pages in Vue PDF Viewer | Syncfusion
description: Learn how to reorder, rotate, insert, delete, and save pages with the Syncfusion Vue PDF Viewer component.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Organize pages in Vue PDF Viewer

The Vue PDF Viewer component includes an Organize pages panel for preparing documents before sharing. Use it to tidy scanned files, reorder pages, and duplicate content without leaving the viewer.

To open the Organize pages panel, load an editable document, ensure that the Organize Pages toolbar item is enabled, and select **Organize Pages** from the left vertical toolbar. The document must allow page-level edits (for example, it must not be password-protected or restricted); otherwise, the toolbar item is hidden.

The Organize pages panel supports the following actions:

* **Rotate pages**: Fix page orientation in 90-degree increments to correct scanned pages.
* **Rearrange pages**: Drag and drop thumbnails to update the reading order.
* **Insert new pages**: Add blank pages at the required position.
* **Delete pages**: Remove pages that are no longer needed.
* **Copy pages**: Duplicate selected pages to reuse content elsewhere in the document.
* **Import a PDF document**: Merge the current document with pages from another PDF file.
* **Select all pages**: Apply bulk actions, such as rotation or deletion, to every page.
* **Save updates**: Review changes in real time and use **Save** or **Save As** to download the revised document.

Select **Save** to overwrite the current document, or **Save As** to download a new copy with the updated page order. Changes are shown in the panel and are applied only when the user selects **Save** or **Save As**; unsaved edits are discarded if the panel is closed without saving.

For a full guide to Organize pages in Vue, see the feature landing page: [Organize pages in Vue PDF Viewer](./organize-pdf).

See also

- [UI interactions for Organize Pages](./organize-pdf/ui-interactions-organize-page)
- [Toolbar items for Organize Pages](./organize-pdf/toolbar-organize-page)
- [Programmatic support for Organize Pages](./organize-pdf/programmatic-support-for-organize-page)
- [Organize Pages events](./organize-pdf/organize-pdf-events)
- [Organize Pages in mobile view](./organize-pdf/organize-page-mobile-view)
