---
layout: post
title: Reorder Pages in ASP.NET Core PDF Viewer | Syncfusion
description: Reorder pages in the ASP.NET Core PDF Viewer using drag-and-drop and grouping inside the Organize Pages panel, or through programmatic APIs.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Reorder Pages in ASP.NET Core PDF Viewer

## Overview

This guide describes how to rearrange pages in a PDF using the **Organize Pages** UI.

**Outcome**: Single or multiple pages can be reordered and the new sequence is preserved when the document is saved or exported.

## Prerequisites

- Syncfusion ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started).
- The viewer is configured with [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) (standalone) or [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) (server-backed) as required.

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

To enable or disable the **Reorder pages** option in the Organize Pages, update the `pageOrganizerSettings`. See [Organize pages toolbar customization](./toolbar#show-or-hide-the-rearrange-option) for the guidelines.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { canRearrange= false })">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Thumbnails won't move**: Confirm `pageOrganizerSettings.canRearrange` is not set to `false`.
- **Changes not saved**: Verify `serviceUrl` (server) or `resourceUrl` (standalone) is configured correctly.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)
