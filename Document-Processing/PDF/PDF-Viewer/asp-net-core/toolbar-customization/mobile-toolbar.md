---
layout: post
title: Customize Mobile Toolbar in ASP.NET Core PDF Viewer | Syncfusion
description: Customize the mobile toolbar in the ASP.NET Core PDF Viewer to ensure smooth touch interactions and a tailored experience on small screens.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Customize the Mobile Toolbar in ASP.NET Core PDF Viewer

## Overview

This guide explains how to enable the desktop toolbar on mobile devices running the ASP.NET Core PDF Viewer, and how to preserve touch scrolling when the desktop toolbar is used.

**Outcome**: A working ASP.NET Core example with desktop toolbar enabled on mobile.

## Prerequisites

- EJ2 ASP.NET Core PDF Viewer installed and added to your project. See [getting started guide](../getting-started)
- A valid [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) or [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) for accessing PDF Viewer assets

## Steps

### 1. Mobile Mode Toolbar Overview

The mobile PDF Viewer provides features for viewing, searching, annotating, and managing PDF documents on mobile devices. It includes tools such as search, download, bookmarking, annotation, and page organization. The viewer can enable desktop toolbar features in mobile mode to expose a broader set of actions.

### 2. Enable desktop toolbar on mobile

Enable desktop mode on mobile devices by setting [`enableDesktopMode`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableDesktopMode) to `true`. Enabling desktop mode replaces the mobile toolbar with the desktop toolbar layout and exposes additional toolbar actions.

**Step 1:** Set `enableDesktopMode` to `true` in the API configuration.

**Step 2:** This will replace the mobile toolbar with the desktop toolbar layout, allowing access to more actions and controls.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableDesktopMode="true">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

### 3. Preserve touch scrolling in desktop mode

To ensure smooth scrolling of PDF documents on a mobile device in desktop mode, disable text selection by setting [`enableTextSelection`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSelection) to `false`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enableTextSelection="false">
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

## Expected result

- Desktop toolbar displays on mobile devices with [`enableDesktopMode`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableDesktopMode) enabled.
- Touch scrolling remains smooth with [`enableTextSelection`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSelection) disabled.
- Print functionality is available only in desktop mode.

## Troubleshooting

- **Print option not visible on mobile**
    - **Cause**: Desktop mode not enabled.
    - **Solution**: Set [`enableDesktopMode`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableDesktopMode) to `true` to enable the desktop toolbar on mobile.

- **Touch scrolling is jerky after enabling desktop toolbar**
    - **Cause**: Text selection is capturing touch events.
    - **Solution**: Set [`enableTextSelection`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSelection) to `false` to avoid text-selection capturing touch events.

- **Missing assets or broken UI**
    - **Cause**: `resourceUrl` is incorrect or unreachable.
    - **Solution**: Verify [`resourceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ResourceUrl) points to the correct version of the `ej2-pdfviewer-lib` and is reachable from the device.

- **Server errors in server-backed mode**
    - **Cause**: CORS issues or back-end service not running.
    - **Solution**: Verify [`serviceUrl`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_ServiceUrl) CORS configuration and that the back-end is running.

## Related topics

- [Customize form designer toolbar](./form-designer-toolbar)
- [Customize annotation toolbar](./annotation-toolbar)
- [Create a custom toolbar](./custom-toolbar)