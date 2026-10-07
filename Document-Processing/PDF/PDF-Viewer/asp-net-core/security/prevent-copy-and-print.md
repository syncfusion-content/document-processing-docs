---
layout: post
title: Prevent Copy and Print in ASP.NET Core PDF Viewer | Syncfusion
description: Prevent users from copying or printing PDF content in the ASP.NET Core PDF Viewer using viewer settings and server-side permission flags.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Prevent Copy or Print in ASP.NET Core PDF Viewer

## Overview
This guide shows how to prevent users from copying text or printing documents in the Syncfusion ASP.NET Core PDF Viewer.

**Outcome:** You will learn server-side and client-side options to restrict copy/print with a complete ASP.NET Core example.

## Steps

### 1. Use a PDF with permissions already set

- Load a PDF that already disallows copy or print functionality itself. The Viewer enforces these permissions automatically.

### 2. Pre-process restrictions on the server side

- Use Syncfusion PDF Library to set permission flags before sending the file to the client. See the server-side example below. See this [guide](https://help.syncfusion.com/document-processing/pdf/pdf-library/net/working-with-security#change-the-permission-of-the-pdf-document) for detailed explanations.
- Disabling print and copy in server-side automatically enforces them in the PDF Viewer.

### 3. Hide or disable UI elements in the viewer

- Print, download, and copy options can be disabled or hidden in the viewer regardless of the PDF's permissions.
- Use [`toolbarSettings.toolbarItems`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.PdfViewer.PdfViewerToolbarSettings.html#Syncfusion_EJ2_PdfViewer_PdfViewerToolbarSettings_ToolbarItems) to hide specific items in the primary toolbar. See [primary toolbar customization](../toolbar-customization/primary-toolbar#3-show-or-hide-primary-toolbar-items).
- Hide the download option by setting [`enableDownload`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableDownload) to `false`.
- Disable the copy option in the context menu. See [customize context menu](../how-to/custom-context-menu).

### 4. Disable print via a viewer property

- Set [`enablePrint`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnablePrint) to `false` to disable the print UI even if the PDF allows printing. This is a declarative initialization property; for runtime toggling, use the viewer's print module API.

### 5. Disable copy via text-selection UI

- Set [`enableTextSelection`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSelection) to `false` to stop text selection and copying through the viewer UI.

**Example:**

The following is a complete ASP.NET Core example that demonstrates disabling printing and text selection in the viewer. The ASP.NET Core tag helper wires up the required `Print` and `TextSelection` services automatically, so the `enablePrint` and `enableTextSelection` properties take effect even when they are set to `false`.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="width:100%;height:600px">
    <ejs-pdfviewer id="pdfviewer"
                   style="height:600px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   enablePrint="false"          // disables the print UI
                   enableTextSelection="false">  // disables text selection (prevents copy)
    </ejs-pdfviewer>
</div>

{% endhighlight %}
{% endtabs %}

**Expected result**:
- The viewer renders the PDF.
- Print button and print-related UI are hidden/disabled.
- Text selection and copy operations from the viewer are disabled.

## Troubleshooting

- If the Print button still appears:
    - Confirm [`enablePrint`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnablePrint) is set to `false` on `ejs-pdfviewer`.
    - If the PDF explicitly allows printing, prefer server-side removal of print permission.
- If text can still be copied:
    - Confirm [`enableTextSelection`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_EnableTextSelection) is set to `false` and your app isn't adding secondary copy handlers.

## Related topics

- [Secure PDF Viewing in ASP.NET Core Apps](./secure-pdf-viewing)
