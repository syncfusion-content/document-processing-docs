---
layout: post
title: Restricting Download and Print in ASP.NET Core PDF Viewer | Syncfusion
description: Restrict end users from downloading or printing PDFs displayed by the ASP.NET Core PDF Viewer using toolbar settings and event handlers.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Restrict Download or Print in ASP.NET Core PDF Viewer

## Overview

This guide shows how to prevent end users from downloading and printing PDFs displayed by the EJ2 ASP.NET Core PDF Viewer.

**Outcome:** The Download and Print buttons are removed from the primary toolbar, and any download or print attempt (including keyboard shortcuts `Ctrl+S` and `Ctrl+P`) is canceled by the [`downloadStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) and [`printStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintStart) event handlers.

## Prerequisites
- EJ2 ASP.NET Core PDF Viewer installed and basic viewer setup completed. See [getting started guide](../getting-started)

## Steps

### 1. Hide the Download and Print buttons in the primary toolbar

The viewer toolbar items are controlled by [`toolbarSettings.toolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems). Omit `DownloadOption` and `PrintOption` from that array to remove the Download and Print buttons from the primary toolbar. See [primary toolbar customization](../toolbar-customization/primary-toolbar) for code examples.

### 2. Block download with the `downloadStart` event

The viewer raises the [`downloadStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) event whenever a download is initiated — including from the toolbar, the public `download()` API, custom UI, or the `Ctrl+S` keyboard shortcut. Add an event handler and set `args.cancel = true` to block the operation. See the [`downloadStart` event reference](../event#downloadstart) for full event-argument details.

### 3. Block print with the `printStart` event

The viewer triggers the [`printStart`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintStart) event whenever a print action is initiated — including from the toolbar, the public `print()` API, custom UI, or the `Ctrl+P` keyboard shortcut. Attach an event handler and set `args.cancel = true` to block the operation. See the [`printStart` event reference](../event#printstart) for full event-argument details.

**Complete Example:**

The following is a complete, runnable ASP.NET Core example that hides the Download and Print buttons and cancels every download or print attempt. The `Print` and `Toolbar` services are wired up automatically by the tag helper.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   downloadStart="onDownloadStart"
                   printStart="onPrintStart"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, ToolbarItems = new System.Collections.Generic.List<string> { "OpenOption", "PageNavigationTool", "MagnificationTool", "PanTool", "SelectionTool", "SearchOption", "UndoRedoTool", "AnnotationEditTool", "FormDesignerEditTool", "CommentTool", "SubmitForm" } })">
    </ejs-pdfviewer>
</div>

<script>
    function onDownloadStart(args) {
        // Cancels every download attempt
        args.cancel = true;
        console.log('Download restricted.');
    }

    function onPrintStart(args) {
        // Cancels every print attempt
        args.cancel = true;
        console.log('Print restricted.');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   serviceUrl="/api/PdfViewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   downloadStart="onDownloadStart"
                   printStart="onPrintStart"
                   toolbarSettings="@(new Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings { ShowTooltip = true, ToolbarItems = new System.Collections.Generic.List<string> { "OpenOption", "PageNavigationTool", "MagnificationTool", "PanTool", "SelectionTool", "SearchOption", "UndoRedoTool", "AnnotationEditTool", "FormDesignerEditTool", "CommentTool", "SubmitForm" } })">
    </ejs-pdfviewer>
</div>

<script>
    function onDownloadStart(args) {
        // Cancels every download attempt
        args.cancel = true;
        console.log('Download restricted.');
    }

    function onPrintStart(args) {
        // Cancels every print attempt
        args.cancel = true;
        console.log('Print restricted.');
    }
</script>

{% endhighlight %}
{% endtabs %}

**Expected result:**

- The Download and Print buttons no longer appear in the primary toolbar because `DownloadOption` and `PrintOption` are omitted from `toolbarSettings.toolbarItems`.
- Any programmatic or UI-triggered download attempt is canceled by the `downloadStart` handler; no file is downloaded.
- Any programmatic or UI-triggered print attempt is canceled by the `printStart` handler; no print dialog is shown.

## Troubleshooting

- If the Download or Print button is still visible, remove `DownloadOption` and `PrintOption` from [`toolbarSettings.toolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems), and ensure no custom toolbar rendering inserts the Download control.

- If downloads still occur despite the handler, confirm `downloadStart="onDownloadStart"` is present on `ejs-pdfviewer` and that the handler sets `args.cancel = true`.

- If print still occurs despite the handler, confirm `printStart="onPrintStart"` is present on `ejs-pdfviewer` and that the handler sets `args.cancel = true`.

## Related topics

- [Customize primary toolbar](../toolbar-customization/primary-toolbar)
- [`downloadStart` event reference](../event#downloadstart)
- [`printStart` event reference](../event#printstart)
