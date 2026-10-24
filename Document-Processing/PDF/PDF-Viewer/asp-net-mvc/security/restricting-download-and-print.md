---
layout: post
title: Restricting Download and Print in ASP.NET MVC PDF Viewer | Syncfusion
description: Restrict end users from downloading or printing PDFs displayed by the ASP.NET MVC PDF Viewer using toolbar settings and event handlers.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Restrict Download or Print in ASP.NET MVC PDF Viewer

## Overview

This guide shows how to prevent end users from downloading and printing PDFs displayed by the EJ2 ASP.NET MVC PDF Viewer.

**Outcome:** The Download and Print buttons are removed from the primary toolbar, and any download or print attempt (including keyboard shortcuts `Ctrl+S` and `Ctrl+P`) is canceled by the [`downloadStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) and [`printStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintStart) event handlers.

## Prerequisites
- EJ2 ASP.NET MVC PDF Viewer installed and basic viewer setup completed. See [getting started guide](../getting-started).

## Steps

### 1. Hide the Download and Print buttons in the primary toolbar

The viewer toolbar items are controlled by [`toolbarSettings.toolbarItems`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html). Omit `DownloadOption` and `PrintOption` from that array to remove the Download and Print buttons from the primary toolbar. See [primary toolbar customization](../toolbar-customization/primary-toolbar) for code examples.

### 2. Block download with the `downloadStart` event

The viewer raises the [`downloadStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DownloadStart) event whenever a download is initiated — including from the toolbar, the public `download()` API, custom UI, or the `Ctrl+S` keyboard shortcut. Add an event handler and set `args.cancel = true` to block the operation. See the [`downloadStart` event reference](../event#downloadstart) for full event-argument details.

### 3. Block print with the `printStart` event

The viewer triggers the [`printStart`](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_PrintStart) event whenever a print action is initiated — including from the toolbar, the public `print()` API, custom UI, or the `Ctrl+P` keyboard shortcut. Attach an event handler and set `args.cancel = true` to block the operation. See the [`printStart` event reference](../event#printstart) for full event-argument details.

**Complete Example**:

The following is a complete, runnable MVC example that hides the Download and Print buttons and cancels every download or print attempt. It shows both the `Standalone` and `Server-Backed` configurations.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ResourceUrl("https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").DownloadStart("downloadStart").PrintStart("printStart").Render()
</div>

<script>
    function downloadStart(args) {
        // Cancels every download attempt
        args.cancel = true;
        console.log('Download restricted.');
    }
    function printStart(args) {
        // Cancels every print attempt
        args.cancel = true;
        console.log('Print restricted.');
    }
</script>

{% endhighlight %}
{% highlight cshtml tabtitle="Server-Backed" %}

@{
    ViewBag.Title = "Home Page";
}

<div style="width:100%;height:600px">
    @Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/api/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").DownloadStart("downloadStart").PrintStart("printStart").Render()
</div>

<script>
    function downloadStart(args) {
        // Cancels every download attempt
        args.cancel = true;
        console.log('Download restricted.');
    }
    function printStart(args) {
        // Cancels every print attempt
        args.cancel = true;
        console.log('Print restricted.');
    }
</script>

{% endhighlight %}
{% endtabs %}

**Expected result**:

- The Download and Print buttons no longer appear in the primary toolbar because `DownloadOption` and `PrintOption` are omitted from `toolbarSettings.toolbarItems`.
- Any programmatic or UI-triggered download attempt is canceled by the `downloadStart` handler; no file is downloaded.
- Any programmatic or UI-triggered print attempt is canceled by the `printStart` handler; no print dialog is shown.

## Troubleshooting

- If the Download or Print button is still visible, remove `DownloadOption` and `PrintOption` from [`toolbarSettings.toolbarItems`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html), and ensure no custom toolbar rendering inserts the Download control.

- If downloads still occur despite the handler, confirm `DownloadStart("downloadStart")` is set on the PdfViewer helper and that the handler sets `args.cancel = true`.

- If print still occurs despite the handler, confirm `PrintStart("printStart")` is set on the PdfViewer helper and that the handler sets `args.cancel = true`.

## Related topics

- [Customize primary toolbar](../toolbar-customization/primary-toolbar)
- [`downloadStart` event reference](../event#downloadstart)
- [`printStart` event reference](../event#printstart)
