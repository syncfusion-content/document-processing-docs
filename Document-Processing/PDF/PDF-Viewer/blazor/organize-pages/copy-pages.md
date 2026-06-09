---
layout: post
title: Copy pages in Organize Pages in Blazor PDF Viewer | Syncfusion
description: Learn how to duplicate pages using the Organize Pages UI in the Blazor PDF Viewer of Syncfusion and more.
platform: document-processing
control: SfPdfViewer
documentation: ug
domainurl: ##DomainURL##
---

# Copy Pages in Blazor PDF Viewer

## Overview

This guide explains how to duplicate pages within the current PDF using the Organize Pages UI.

**Outcome**: Copied pages are inserted adjacent to the selection and included in exported PDFs.

## Prerequisites

- Blazor PDF Viewer (SfPdfViewer) installed
- Organize Pages feature enabled

## Steps

1. Open the Organize Pages view

	- Click the **Organize Pages** button in the viewer toolbar to open the Organize Pages dialog.

2. Select pages to duplicate

	- Click a single thumbnail or use Shift+click/Ctrl+click to select multiple pages.

3. Duplicate selected pages

	- Click the **Copy Pages** button in the Organize Pages toolbar; duplicated pages are inserted to the right of the selected thumbnails.

4. Duplicate multiple pages at once

	- When multiple thumbnails are selected, the Copy action duplicates every selected page in order.

	![Copy pages in organize view](./images/Duplicate_Pages.gif)

5. Undo or redo changes

	- Use **Undo** (Ctrl+Z) or **Redo** to revert or reapply recent changes.

	![Undo and redo Organize Pages toolbar](./images/organize-ui-undo.png)

6. Persist duplicated pages

	- Click **Save** or **Save As** to include duplicated pages in the saved/downloaded PDF.

## Expected result

- Selected pages are duplicated and included in the saved PDF.

## Programmatic approach

You can also duplicate pages programmatically using the Blazor PDF Viewer's `DuplicatePagesAsync` method:

{% tabs %}
{% highlight razor %}
@using Syncfusion.Blazor.Buttons

<SfButton OnClick="DuplicateMethod">Duplicate</SfButton>
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%">
</SfPdfViewer2>

@code {
    SfPdfViewer2? Viewer;

    private async Task DuplicateMethod() {
        await Viewer?.DuplicatePagesAsync([1,2]);
    }
}
{% endhighlight %}
{% endtabs %}

For more details, see [Programmatic support for Organize Pages](./programmatic-support).

## Enable or disable Copy Pages button

To enable or disable the **Copy Pages** button in the Organize Pages toolbar, update the toolbar settings. See [Organize pages toolbar customization](./toolbar#enable-or-disable-the-copy-option) for the guidelines.

## Troubleshooting

- If duplicates are not created: verify that the changes are persisted using **Save**.

## Related topics

- [Organize pages toolbar customization](./toolbar)
- [Organize pages event reference](./events)
