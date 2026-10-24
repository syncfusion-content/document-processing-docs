---
layout: post
title: Rotate Pages in ASP.NET Core PDF Viewer | Syncfusion
description: Rotate one or more pages in the ASP.NET Core PDF Viewer using the Organize Pages panel to change the orientation of pages in a PDF document.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Rotate Pages in ASP.NET Core PDF Viewer

## Overview

This guide explains how to rotate individual or multiple pages using the **Organize Pages** UI in the ASP.NET Core PDF Viewer. Supported rotations: 90°, 180°, 270° clockwise and counter-clockwise.

**Outcome**: Pages are rotated in the viewer and persisted when saved or exported.

## Prerequisites

- Syncfusion ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started).
- The viewer is configured with [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) (standalone) or [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) (server-backed).

## Steps

1. Open the Organize Pages view

    - Click the **Organize Pages** button in the viewer toolbar to open the Organize Pages dialog.

2. Select pages to rotate

    - Click a single thumbnail or use Shift+click/Ctrl+click to select multiple pages.

3. Rotate pages using toolbar buttons

    - Use **Rotate Right** to rotate 90° clockwise.
    - Use **Rotate Left** to rotate 90° counter-clockwise.
    - Repeat the action to achieve 180° or 270° rotations.

    ![Rotate and rearrange pages animation showing rotate control usage](../images/rotate-rearrange.gif)

4. Rotate multiple pages at once

    - When multiple thumbnails are selected, the Rotate action applies to every selected page.

5. Undo or reset rotation

    - Use **Undo** (Ctrl+Z) to revert the last rotation.
    - Use the reverse rotation button (Rotate Left/Rotate Right) until the page returns to 0°.

    ![Undo and redo Organize Pages toolbar](../images/undo-redo.png)

6. Persist rotations

    - Click **Save** or **Save As** to persist rotations in the saved/downloaded PDF. Exporting pages also preserves the new orientation.

## Expected result

- Pages rotate in-place in the Organize Pages dialog when using the rotate controls.
- Saving or exporting the document preserves the new orientation.

## Enable or disable Rotate Pages button

To enable or disable the **Rotate Pages** button in the Organize Pages toolbar, update the `pageOrganizerSettings`. See [Organize pages toolbar customization](./toolbar#show-or-hide-the-rotate-option) for the guidelines.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}
<div class="text-center">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   pageOrganizerSettings="@(new { canRotate= false })">
    </ejs-pdfviewer>
</div>
{% endhighlight %}
{% endtabs %}

## Troubleshooting

- **Rotate controls disabled**: Ensure `pageOrganizerSettings.canRotate` is not set to `false`.
- **Rotation not persisted**: Click **Save** after rotating. For server-backed setups ensure `serviceUrl` is set so server-side save can persist changes.

## Related topics

- [Organize page toolbar customization](./toolbar)
- [Organize pages event reference](./events)
